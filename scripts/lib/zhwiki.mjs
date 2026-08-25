// Chinese Wikipedia as a source of kinship, read from the prose and infoboxes
// rather than only from structured data.
//
// Wikidata is tidy but thin: most 王-surname articles state a father, a son or a
// marriage in a sentence and never as a statement. This module extracts those
// mentions, keeping the sentence itself so every claim can be checked against
// the words it came from.
//
// Precision over recall, deliberately:
//   * a relation counts only when the other person is a wiki link (an
//     unambiguous identity) or an infobox value (structured by the editor);
//   * patterns are anchored on kinship words, never on proximity;
//   * the matched text is stored as the citation's quotation.
//
// Licensing: Chinese Wikipedia text is CC BY-SA 4.0, so every Source built from
// it carries that license — never CC0.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { foldKey } from '../../packages/i18n/src/script.ts';
import { fetchPage, wikiFetch } from './wiki.mjs';

const CACHE_DIR = new URL('../.cache/zhwiki/', import.meta.url).pathname;

export const ZHWIKI_SOURCE_TEMPLATE = {
  source_type: 'website',
  creator: '维基百科贡献者',
  publisher: 'Wikimedia Foundation',
  license_code: 'CC-BY-SA-4.0',
};

export const articleUrl = (title) =>
  `https://zh.wikipedia.org/wiki/${encodeURIComponent(title.replace(/ /g, '_'))}`;

/** Article wikitext, cached on disk. Returns null when there is no article. */
export const fetchWikitext = (title, opts) =>
  fetchPage('zh.wikipedia.org', title, { ...opts, dir: 'zhwiki' });

/** Resolve article titles to Wikidata ids, 50 at a time. */
export async function qidsByTitle(titles) {
  const out = new Map();
  const unique = [...new Set(titles.filter(Boolean))];
  for (let i = 0; i < unique.length; i += 50) {
    const chunk = unique.slice(i, i + 50);
    const url =
      'https://www.wikidata.org/w/api.php?action=wbgetentities&sites=zhwiki&props=sitelinks&format=json&titles=' +
      encodeURIComponent(chunk.join('|'));
    const data = await (await wikiFetch(url)).json();
    for (const [qid, entity] of Object.entries(data.entities ?? {})) {
      if (qid.startsWith('-')) continue;
      const title = entity.sitelinks?.zhwiki?.title;
      if (title) out.set(title, qid);
    }
  }
  return out;
}

/**
 * zh-Wikipedia article titles for Wikidata ids, 50 at a time, cached on disk.
 * A QID with no zh article is cached as an empty string so re-runs skip it.
 */
export async function zhwikiTitlesByQid(qids) {
  const file = join(CACHE_DIR, 'sitelinks.json');
  const cached = existsSync(file) ? JSON.parse(readFileSync(file, 'utf8')) : {};
  const missing = [...new Set(qids.filter((q) => q && !(q in cached)))];

  for (let i = 0; i < missing.length; i += 50) {
    const chunk = missing.slice(i, i + 50);
    const url =
      'https://www.wikidata.org/w/api.php?action=wbgetentities&props=sitelinks' +
      `&sitefilter=zhwiki&format=json&ids=${chunk.join('|')}`;
    const data = await (await wikiFetch(url)).json();
    for (const qid of chunk) cached[qid] = data.entities?.[qid]?.sitelinks?.zhwiki?.title ?? '';
    mkdirSync(CACHE_DIR, { recursive: true });
    writeFileSync(file, JSON.stringify(cached), 'utf8');
    if (missing.length > 50) {
      console.error(`  站点链接 ${Math.min(i + 50, missing.length)}/${missing.length}`);
    }
  }

  const out = new Map();
  for (const qid of qids) if (cached[qid]) out.set(qid, cached[qid]);
  return out;
}

// --- parsing ----------------------------------------------------------------

const stripNoise = (text) =>
  text
    .replace(/<ref[^>]*>[\s\S]*?<\/ref>/g, '')
    .replace(/<ref[^>]*\/>/g, '')
    .replace(/<!--[\s\S]*?-->/g, '');

/** "[[王曠|王旷]]" -> { target: '王曠', shown: '王旷' } */
function parseLink(link) {
  const inner = link.replace(/^\[\[|\]\]$/g, '');
  const [target, shown] = inner.split('|');
  return { target: target.trim(), shown: (shown ?? target).trim() };
}

const LINK = String.raw`\[\[([^\]|#]+)(?:\|([^\]]+))?\]\]`;

/**
 * Kinship words, mapped to the direction they imply about the *other* person.
 * Only relations this model stores are listed; siblings and in-laws are not
 * mined at all, since a sibling edge cannot be recorded.
 */
const PROSE_PATTERNS = [
  // "[[王曠]]之子"、"[[王曠]]的儿子" → the link is the parent
  { re: new RegExp(`${LINK}\\s*(?:之|的)?(?:长|長|次|三|四|幼)?(?:子|兒子|儿子|女|女兒|女儿)(?![孫孙婿])`, 'g'), otherIs: 'parent', term: '之子/之女' },
  // "父[[王曠]]"、"其父為[[王曠]]"
  { re: new RegExp(`(?:其)?(?:父親|父亲|生父|父)(?:是|為|为|:|：)?\\s*${LINK}`, 'g'), otherIs: 'parent', term: '父' },
  { re: new RegExp(`(?:其)?(?:母親|母亲|生母|母)(?:是|為|为|:|：)?\\s*${LINK}`, 'g'), otherIs: 'parent', term: '母' },
  // "子[[王玄之]]"、"长子[[王玄之]]"
  { re: new RegExp(`(?:长子|長子|次子|三子|四子|幼子|嫡子|庶子|兒子|儿子|子)(?:是|為|为|:|：)?\\s*${LINK}`, 'g'), otherIs: 'child', term: '子' },
  { re: new RegExp(`(?:长女|長女|次女|女兒|女儿)(?:是|為|为|:|：)?\\s*${LINK}`, 'g'), otherIs: 'child', term: '女' },
  // "娶[[郗璿]]"、"妻[[郗璿]]"、"夫人[[郗璿]]"
  { re: new RegExp(`(?:娶|妻子?|夫人|正室|繼室|继室|嫁(?:給|给)?)(?:是|為|为|:|：)?\\s*${LINK}`, 'g'), otherIs: 'spouse', term: '妻/娶' },
  // descent across unnamed generations: "[[太子晉]]後代"、"[[王元]]的四世孫"
  { re: new RegExp(`${LINK}\\s*(?:的|之)?(?:後代|后代|後裔|后裔|之後|之后)`, 'g'), otherIs: 'ancestor', term: '后代' },
  { re: new RegExp(`${LINK}\\s*(?:的|之)?([一二三四五六七八九十百千\\d]+)(?:世|代)(?:孫|孙|裔孫|裔孙)`, 'g'), otherIs: 'ancestor', term: '世孙' },
];

/** Infobox parameters that state kinship, one relation per field. */
const INFOBOX_FIELDS = [
  { names: ['父', '父親', '父亲', '父不详', 'father'], otherIs: 'parent' },
  { names: ['母', '母親', '母亲', 'mother'], otherIs: 'parent' },
  { names: ['配偶', '妻', '夫', 'spouse'], otherIs: 'spouse' },
  { names: ['子', '子女', '兒女', '儿女', 'children', 'issue'], otherIs: 'child' },
];

/**
 * Infobox parameters that hold *mixed* kinship, each item tagged with its own
 * role in a parenthetical: `parents = 王誦（父）`, `親屬 = （父）王朝聘`,
 * `relatives = 王凡（祖父）`. Common in biography infoboxes and invisible to the
 * per-field list above, which assumes one relation per parameter.
 */
const INFOBOX_MIXED_FIELDS = ['parents', 'parent', '雙親', '双亲', '親屬', '亲属', 'relatives', 'relations'];

/** Role words as an infobox parenthetical writes them, with any generation gap. */
const PARENTHETICAL_ROLES = [
  { re: /^(?:高祖父|高祖母)$/, otherIs: 'ancestor', generations: 5 },
  { re: /^(?:曾祖父|曾祖母)$/, otherIs: 'ancestor', generations: 3 },
  { re: /^(?:祖父|祖母|外祖父|外祖母)$/, otherIs: 'ancestor', generations: 2 },
  { re: /^(?:父|父親|父亲|生父|養父|养父|嫡父|母|母親|母亲|生母|養母|养母|嫡母)$/, otherIs: 'parent', generations: null },
  { re: /^(?:[長长次三四五六七八九幼嫡庶]?子|[長长次三四五六七八九幼]?女|兒子|儿子|女兒|女儿)$/, otherIs: 'child', generations: null },
  { re: /^(?:妻|妻子|夫|丈夫|配偶|正室|繼室|继室|夫人)$/, otherIs: 'spouse', generations: null },
];

/** The sentence a match sits in, for the citation's quotation. */
function sentenceAround(text, index) {
  const start = Math.max(
    ...['。', '\n', '；', '！'].map((mark) => text.lastIndexOf(mark, index)),
    -1,
  );
  const endCandidates = ['。', '\n', '；', '！']
    .map((mark) => text.indexOf(mark, index))
    .filter((i) => i >= 0);
  const end = endCandidates.length ? Math.min(...endCandidates) : text.length;
  return text
    .slice(start + 1, end + 1)
    .replace(/\[\[([^\]|#]+)(?:\|([^\]]+))?\]\]/g, (_, target, shown) => shown ?? target)
    .replace(/'''?/g, '')
    .trim()
    .slice(0, 300);
}

/**
 * Relation words a list line can state about its own entry, relative to whoever
 * the line names — or, when it names nobody, to the article's subject.
 */
const LIST_RELATION_WORDS = [
  { re: /^(?:长子|長子|次子|三子|四子|五子|六子|七子|幼子|嫡子|庶子|子)$/, entryIs: 'child' },
  { re: /^(?:长女|長女|次女|三女|女兒|女儿|女)$/, entryIs: 'child' },
  { re: /^(?:父|父親|父亲|生父)$/, entryIs: 'parent' },
  { re: /^(?:母|母親|母亲|生母)$/, entryIs: 'parent' },
  { re: /^(?:妻|妻子|夫人|正室|繼室|继室|夫|配偶)$/, entryIs: 'spouse' },
];

// A quotation is stored so a reader can check the claim against the wording.
// Leaving 「王鉴（{{bd|？||？||}}），琅邪临沂人」 in it gives them template markup
// to read instead of a sentence.
const plainQuote = (body) =>
  body
    .replace(/\{\{[^{}]*\}\}/g, '')
    .replace(/\{\{[\s\S]*?\}\}/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\[\[([^\]|#]+)(?:\|([^\]]+))?\]\]/g, (_, t, shown) => shown ?? t)
    .replace(/'{2,}/g, '')
    .replace(/（\s*）|\(\s*\)/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim()
    .slice(0, 200);

/**
 * Kinship mentioned in one article's text.
 *
 * Read by fragment, because a fragment can change subject. The lead is about the
 * article's subject — "王曠之子" there means the subject is 王曠's son — but an
 * enumeration like "次子[[王凝之]]，字叔平，妻子為[[謝道韞]]" is about 王凝之, so
 * 謝道韞 is *his* wife, not the subject's. Reading a fragment as if it described
 * the subject throughout is how a daughter-in-law becomes a wife.
 */
export function mineArticle(title, wikitext) {
  const text = stripNoise(wikitext);
  const found = [];
  const seen = new Set();
  const add = (otherTitle, otherIs, term, quotation, generations = null) => {
    const key = `${otherTitle}|${otherIs}`;
    if (!otherTitle || otherTitle === title || seen.has(key)) return;
    seen.add(key);
    found.push({ subject_title: title, other_title: otherTitle, otherIs, term, quotation, generations });
  };

  // Lead: everything before the first heading, minus list lines and template
  // syntax, split into fragments a single subject can own.
  const headingAt = text.search(/^\s*=+[^=]+=+\s*$/m);
  const lead = (headingAt === -1 ? text : text.slice(0, headingAt))
    .split('\n')
    .filter((line) => !/^\s*[*#:]/.test(line) && !/^\s*[|{}]/.test(line))
    .join('\n');

  for (const fragment of lead.split(/<br\s*\/?>|\n|。|；/)) {
    if (!fragment.trim()) continue;
    // "次子[[王凝之]]…" — the fragment belongs to that son from here on.
    const enumerated = new RegExp(
      `^\\s*(?:第?[一二三四五六七八九十]|长|長|次|三|四|五|六|七|八|九|幼|嫡|庶)?(子|女|兒子|儿子|女兒|女儿)\\s*${LINK}`,
    ).exec(fragment);
    if (enumerated) {
      const { target } = parseLink(`[[${enumerated[2]}${enumerated[3] ? `|${enumerated[3]}` : ''}]]`);
      add(target, 'child', enumerated[1], plainQuote(fragment));
      continue;
    }
    for (const { re, otherIs, term } of PROSE_PATTERNS) {
      re.lastIndex = 0;
      let match;
      while ((match = re.exec(fragment)) !== null) {
        const { target } = parseLink(`[[${match[1]}${match[2] ? `|${match[2]}` : ''}]]`);
        const generations = term === '世孙' ? (match[3] ?? match[2] ?? null) : null;
        add(target, otherIs, term, plainQuote(fragment), generations);
      }
    }
  }

  // Infobox parameters: "| 父 = [[王曠]]" or "|子女=[[王玄之]]、[[王凝之]]"
  for (const line of text.split('\n')) {
    const param = /^\s*\|\s*([A-Za-z一-鿿_]+)\s*=\s*(.+)$/.exec(line);
    if (!param) continue;

    // "parents = 王誦（父）" — the role rides along with each item, so read it
    // per item rather than from the parameter name.
    if (INFOBOX_MIXED_FIELDS.includes(param[1].trim())) {
      for (const item of param[2].split(/<br\s*\/?>|、|，|,|;|；/)) {
        const roleMatch = /[（(]\s*([^）)]{1,4})\s*[）)]/.exec(item);
        if (!roleMatch) continue;
        const role = PARENTHETICAL_ROLES.find((r) => r.re.test(roleMatch[1].trim()));
        if (!role) continue;
        const bare = item.replace(/[（(][^）)]*[）)]/g, '');
        const link = bare.match(new RegExp(LINK))?.[0];
        const name = link
          ? parseLink(link).target
          : (/([一-鿿]{2,4})/.exec(bare.replace(/'{2,}/g, '').trim())?.[1] ?? null);
        if (name) {
          add(name, role.otherIs, `信息框 ${param[1].trim()}（${roleMatch[1].trim()}）`, plainQuote(item), role.generations);
        }
      }
      continue;
    }

    const field = INFOBOX_FIELDS.find((f) => f.names.includes(param[1].trim()));
    if (!field) continue;
    // An infobox "子女" value often lists more than children — a 女婿 or a
    // child's wife — so each item is checked before its link is taken.
    for (const item of param[2].split(/<br\s*\/?>|、|，|,|;|；/)) {
      if (/婿|媳|妻|夫人|繼室|继室/.test(item.replace(new RegExp(LINK, 'g'), ''))) continue;
      for (const link of item.match(new RegExp(LINK, 'g')) ?? []) {
        const { target } = parseLink(link);
        add(target, field.otherIs, `信息框 ${param[1].trim()}`, plainQuote(item));
      }
    }
  }

  return found;
}

/**
 * Relations stated inside a single list line, about that line's own entry:
 * "*王正，王览四子" links 王正 to 王览; "*王玄之，次子" names nobody, so the
 * article's subject is meant.
 */
export function mineListLines(title, wikitext) {
  const text = stripNoise(wikitext);
  const out = [];
  for (const rawLine of text.split('\n')) {
    const bullet = /^\s*(\*+)\s*(.+)$/.exec(rawLine);
    if (!bullet) continue;
    const body = bullet[2];
    const entryMatch = new RegExp(`^\\s*'*(?:${LINK}|([一-鿿]{2,5}))`).exec(body);
    if (!entryMatch) continue;
    const linked = entryMatch[1]
      ? parseLink(`[[${entryMatch[1]}${entryMatch[2] ? `|${entryMatch[2]}` : ''}]]`)
      : null;
    const entryTitle = linked?.target ?? null;
    const entryName = linked?.shown ?? entryMatch[3] ?? null;
    if (!entryName) continue;

    // The segment right after the entry name carries the relation:
    // "王览长子", "次子", "父".
    const rest = body.slice(entryMatch[0].length).replace(/^\s*[，,、]\s*/, '');
    const segment = (rest.split(/[，,、。（(]/)[0] ?? '').trim();
    if (!segment) continue;

    // "第三子" / "三子" name nobody: the article's subject is meant.
    const ordinal = /^第?[一二三四五六七八九十]+(子|女)$/.exec(segment);
    const bare = ordinal
      ? { entryIs: 'child' }
      : LIST_RELATION_WORDS.find((w) => w.re.test(segment));
    if (bare) {
      out.push({
        entry_title: entryTitle,
        entry_name: entryName,
        other_title: title,
        other_name: null,
        entryIs: bare.entryIs,
        term: segment,
        quotation: plainQuote(body),
      });
      continue;
    }

    // "王览四子" — the relation word is the suffix, so anchor on it rather than
    // guessing where the name ends ("王正次子" is 王正 + 次子, not 王正次 + 子).
    // A qualifier may sit in front of the relation word: 庶長子, 嫡次子, 繼母.
    const RELATION_SUFFIX =
      '(?:嫡|庶|繼|继|養|养|生|同母|異母|异母)?' +
      '(长子|長子|次子|三子|四子|五子|六子|七子|幼子|长女|長女|次女|三女|女兒|女儿|父親|父亲|母親|母亲|妻子|正室|繼室|继室|配偶|夫人|子|女|父|母|妻|夫)';
    // Non-greedy name, optional 之/的: "王正次子" is 王正 + 次子 (not 王正次 + 子)
    // and "王恬之子" is 王恬 + 之 + 子.
    const named = new RegExp(`^(?:${LINK}|([一-鿿]{2,4}?))\\s*(?:之|的)?${RELATION_SUFFIX}$`).exec(segment);
    if (!named) continue;
    const otherLink = named[1]
      ? parseLink(`[[${named[1]}${named[2] ? `|${named[2]}` : ''}]]`)
      : null;
    const otherName = otherLink?.shown ?? named[3] ?? null;
    const word = LIST_RELATION_WORDS.find((w) => w.re.test((named[4] ?? '').trim()));
    if (!word || !otherName) continue;
    out.push({
      entry_title: entryTitle,
      entry_name: entryName,
      other_title: otherLink?.target ?? null,
      other_name: otherName,
      entryIs: word.entryIs,
      term: segment,
      quotation: plainQuote(body),
    });
  }
  return out;
}

// --- reading an article with a language model --------------------------------
//
// The patterns above need the other person to be a wiki link and only read the
// lead, so they miss a great deal: plain-text names, biography sections, and
// constructions like「光祿大夫王覽之孫，鎮軍司馬王裁之子」. A model reads those
// easily. What a model also does easily is invent a father, so nothing it
// returns is trusted — `verifyRelation` re-checks every claim against the
// article text, and the model's role is only to point at a sentence.

/** Wikitext reduced to the prose a reader sees, so quotations can be matched. */
export function articlePlainText(wikitext) {
  let text = stripNoise(wikitext);
  // Templates, innermost first. Infobox parameters are worth keeping, so a
  // template's `| 父 = X` lines survive as their own lines.
  text = text.replace(/\{\{\s*(?:lang|le|link-[a-z]+)\s*\|[^{}]*?\|([^{}|]+)\}\}/gi, '$1');
  for (let i = 0; i < 6; i += 1) {
    const next = text.replace(/\{\{([^{}]*)\}\}/g, (_, body) =>
      body
        .split('|')
        .filter((part) => /^\s*[^=]*[一-鿿A-Za-z_]+\s*=/.test(part))
        .map((part) => `\n| ${part.trim()}`)
        .join(''),
    );
    if (next === text) break;
    text = next;
  }
  return text
    .replace(/\[\[(?:File|Image|檔案|文件|图像|圖像|Category|分类|分類):[^\]]*\]\]/gi, '')
    .replace(/\[\[([^\]|#]+)(?:\|([^\]]+))?\]\]/g, (_, target, shown) => shown ?? target)
    .replace(/\[https?:\/\/\S+\s+([^\]]+)\]/g, '$1')
    .replace(/'{2,}/g, '')
    .replace(/^[ \t]+/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/** Displayed name -> article title, for every wiki link in the article. */
export function linkTargetsByName(wikitext) {
  const out = new Map();
  for (const link of stripNoise(wikitext).match(new RegExp(LINK, 'g')) ?? []) {
    const { target, shown } = parseLink(link);
    if (!out.has(shown)) out.set(shown, target);
    if (!out.has(target)) out.set(target, target);
  }
  return out;
}

/** Kinship words that must be present for a sentence to state a relation. */
const KINSHIP_WORD =
  /父|母|子|女|妻|夫|娶|嫁|配偶|正室|繼室|继室|後代|后代|後裔|后裔|之後|之后|孫|孙|世孫|世孙|裔|祖|所生|生於|出自/;

// Both directions of descent, for the same reason parent and child both exist:
// offering only `ancestor` does not stop a reader from meeting a descendant, it
// only stops them from saying so — and「王守仁孫」comes back labelled as if
// 王守仁 were the grandson.
const ROLES = new Set(['parent', 'child', 'spouse', 'ancestor', 'descendant']);

/**
 * Enough of 百家姓 to tell「父王仲」(a full name) from「父曠」(a given name the
 * history expects the reader to complete). Only ever used to *refuse* to add a
 * surname, never to assign one, so an omission costs a relation and a spurious
 * entry costs nothing.
 */
const COMMON_SURNAMES = new Set(
  ('趙錢孫李周吳鄭王馮陳褚衛蔣沈韓楊朱秦尤許何呂施張孔曹嚴華金魏陶姜戚謝鄒喻柏水竇章雲蘇潘葛奚范彭郎魯韋昌馬苗鳳花方俞任袁柳酆鮑史唐費廉岑薛雷賀倪湯滕殷羅畢郝鄔安常樂于時傅皮卞齊康伍余元卜顧孟平黃和穆蕭尹姚邵湛汪祁毛禹狄米貝明臧計伏成戴談宋茅龐熊紀舒屈項祝董梁杜阮藍閔席季麻強賈路婁危江童顏郭梅盛林刁鍾徐邱駱高夏蔡田樊胡凌霍虞萬支柯昝管盧莫房繆干解應宗丁宣賁鄧郁單杭洪包諸左石崔吉鈕龔程嵇邢滑裴陸榮翁荀羊惠甄曲封芮儲靳汲邴糜松井段富巫烏焦巴弓牧隗山谷車侯宓蓬全郗班仰秋仲伊宮寧仇欒暴甘鈄厲戎祖武符劉景詹束龍葉幸司韶郜黎薊薄印宿白懷蒲邰從鄂索咸籍賴卓藺屠蒙池喬陰鬱胥能蒼雙聞莘黨翟譚貢勞逄姬申扶堵冉宰酈雍卻璩桑桂濮牛壽通邊扈燕冀郟浦尚農溫別莊晏柴瞿閻充慕連茹習宦艾魚容向古易慎戈廖庾終暨居衡步都耿滿弘匡國文寇廣祿闕東歐殳沃利蔚越夔隆師鞏厙聶晁勾敖融冷訾辛闞那簡饒空曾毋沙乜養鞠須豐巢關蒯相查后荊紅游竺權逯蓋益桓公赵钱孙吴郑冯陈卫蒋韩杨许吕张严华金魏陶谢邹云苏潘葛范鲁韦马凤龙叶刘罗郭梁贾邓丁' +
    '').split(''),
);

/**
 * How many generations the sentence itself puts between the two people.
 *
 * Read from the text rather than taken from the reader, which miscounts:
 * 玄孫 is four generations down, not three. A gap the words do not state stays
 * null — the citation then says descent without a number, which is honest.
 */
function statedGenerations(quotation) {
  const digits = /([一二三四五六七八九十\d]+)\s*[世代]\s*(?:孫|孙|祖)/.exec(quotation);
  if (digits) {
    const cn = { 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9, 十: 10 };
    const n = cn[digits[1]] ?? Number(digits[1]);
    if (Number.isInteger(n) && n > 1) return n;
  }
  if (/來孫|来孙|[來来]孫/.test(quotation)) return 5;
  if (/玄孫|玄孙|高祖父|高祖母/.test(quotation)) return 4;
  if (/曾孫|曾孙|曾祖/.test(quotation)) return 3;
  // Bare 祖 is a grandfather in a history —「祖正，尚書郎」. 高祖 is left out on
  // purpose: in these texts it far more often names a dynasty's founder
  // (漢高祖) than a fourth-generation ancestor.
  if (/孫|孙|祖父|祖母|祖/.test(quotation)) return 2;
  return null;
}

/**
 * Comparison form. Script is folded because a reader answers in whichever
 * script it thinks in — it reports 王离 for an article that writes 王離, and
 * 郗鉴之女 for 郗鑒之女 — and rejecting those would throw away correct readings
 * over a difference this project treats as display-only everywhere else.
 */
const normalize = (s) =>
  foldKey(
    (s ?? '')
      .replace(/\s+/g, '')
      // Punctuation drifts: a reader quoting a sentence that runs into a section
      // break rounds it off with a 。 the article never had. The words are what
      // is being checked, so compare the words.
      .replace(/[「」『』"'“”，,。．.、；;：:！!？?（）()《》〈〉—－\-·]/g, ''),
  );

/**
 * Re-derive a model-reported relation from the article itself.
 *
 * Every check exists because a model fails that way: it paraphrases a sentence
 * that is not there, it names a person the sentence never mentions, it reads a
 * relation into a sentence that states none, or it answers about the wrong
 * article. A relation that survives all four is one a reader can check against
 * the quotation, which is the only kind this project stores.
 */
export function verifyRelation(relation, { title, plain, links, impliedSurname = false }) {
  const quotation = normalize(relation.quotation);
  // 「王吉 (西汉)」 is the article about 王吉; the parenthetical only tells that
  // title apart from other men of the name. Comparing against it unstripped
  // made the subject fail to match its own article, and a 家族 section that
  // writes「次子：王駿」without repeating the subject was rejected wholesale.
  const bareTitle = normalize((title ?? '').replace(/\s*[（(][^)）]*[)）]\s*$/, ''));
  const subject = normalize(relation.subject) || bareTitle;
  let other = normalize(relation.other);
  let storedName = relation.other;

  if (!ROLES.has(relation.other_is)) return { ok: false, reason: 'bad_role' };
  if (!other || !quotation) return { ok: false, reason: 'incomplete' };

  // A classical history drops the surname once the subject has been named:
  // 「王羲之……祖正，尚書郎。父曠，淮南太守」means 王正 and 王曠. The reader
  // reports the name as written, so the completion happens here, mechanically,
  // from the surname of whoever the sentence is about — never guessed.
  if (impliedSurname && /^[一-鿿]{1,2}$/.test(other) && new RegExp(`[父母祖子女妻]${other}`).test(quotation)) {
    const surname = (relation.subject ?? title ?? '').trim()[0];
    if (!surname) return { ok: false, reason: 'no_surname_to_imply' };
    // Only when the name really is bare. 「父王仲」「母臧兒」「妻丁氏」 already
    // carry a surname, and prefixing another produces 王王仲 — a person who
    // never existed. A single character is always a given name here; two
    // characters are only taken as one when the first is not itself a surname.
    const bare = other.length === 1 || !COMMON_SURNAMES.has(other[0]);
    if (!bare) return { ok: false, reason: 'name_already_has_surname' };
    storedName = surname + relation.other.trim();
    other = normalize(storedName);
  }

  if (other === subject) return { ok: false, reason: 'self_relation' };
  // A personal name in this corpus is two to four characters. Anything longer
  // is the model handing back the office it was told to strip —「鎮軍司馬王裁」—
  // which would enter the database as a person who never had that name.
  if (!/^[一-鿿]{2,4}$/.test(other)) return { ok: false, reason: 'other_not_a_name' };
  // 「蕭咸之女」 describes a person by their relation to someone else; it is
  // what a source writes when it does not know the name. Storing it as a
  // name.primary would put a description where a name belongs.
  if (/之[子女妻夫妹兄弟姊]$/.test(other) || /^某/.test(other)) {
    return { ok: false, reason: 'description_not_a_name' };
  }
  const page = normalize(plain);
  const at = page.indexOf(quotation);
  if (at < 0) return { ok: false, reason: 'quotation_not_in_article' };
  if (!quotation.includes(normalize(relation.other))) return { ok: false, reason: 'other_not_in_quotation' };

  if (!quotation.includes(subject) && subject !== bareTitle) {
    // A history names its subject once and then writes 祖, 父, 子 — requiring
    // the name again in every sentence would reject almost everything it says.
    // What can still be checked is that the sentence sits under that name:
    // the subject must appear shortly before it, not merely somewhere on a page
    // that runs through a dozen lives.
    const near = impliedSurname && subject && page.lastIndexOf(subject, at) >= 0
      && at - page.lastIndexOf(subject, at) < 1200;
    if (!near) return { ok: false, reason: 'subject_not_in_quotation' };
  }
  if (!KINSHIP_WORD.test(quotation)) return { ok: false, reason: 'no_kinship_word' };

  const descent = relation.other_is === 'ancestor' || relation.other_is === 'descendant';
  const generations = descent ? statedGenerations(relation.quotation) : null;
  return {
    ok: true,
    subject_title: links.get(relation.subject) ?? (relation.subject === title ? title : null),
    subject_name: relation.subject || title,
    other_title: links.get(relation.other) ?? links.get(storedName) ?? null,
    other_name: storedName,
    other_is: relation.other_is,
    generations,
    quotation: relation.quotation.trim().slice(0, 300),
  };
}

/**
 * Genealogies written as indented lists, as clan articles use:
 *
 *   *王览
 *   **王裁，王览长子
 *   ***王导
 *
 * Depth is the relation: each entry's parent is the nearest shallower entry.
 */
export function mineIndentedGenealogy(title, wikitext, sectionHint = null) {
  const text = stripNoise(wikitext);
  const lines = text.split('\n');
  const out = [];
  const stack = [];
  let section = null;

  for (const line of lines) {
    const heading = /^\s*=+\s*(.+?)\s*=+\s*$/.exec(line);
    if (heading) {
      section = heading[1].replace(/\[\[([^\]|#]+)(?:\|([^\]]+))?\]\]/g, (_, t, s) => s ?? t);
      stack.length = 0;
      continue;
    }
    const bullet = /^(\*+)\s*(.+)$/.exec(line);
    if (!bullet) {
      if (line.trim() === '') stack.length = 0;
      continue;
    }
    if (sectionHint && section !== sectionHint) continue;

    const depth = bullet[1].length;
    const body = bullet[2];
    const firstLink = new RegExp(`^\\s*'*${LINK}`).exec(body);
    const plain = /^\s*'*([一-鿿]{2,4})(?:[，,。（(]|$)/.exec(body.replace(/\[\[|\]\]/g, ''));
    const entry = firstLink
      ? parseLink(`[[${firstLink[1]}${firstLink[2] ? `|${firstLink[2]}` : ''}]]`)
      : plain
        ? { target: null, shown: plain[1] }
        : null;
    if (!entry) continue;

    stack.length = depth - 1;
    const parent = stack[depth - 2];
    stack[depth - 1] = entry;
    if (parent) {
      out.push({
        parent: parent,
        child: entry,
        section,
        quotation: body
          .replace(/\[\[([^\]|#]+)(?:\|([^\]]+))?\]\]/g, (_, t, s) => s ?? t)
          .replace(/'''?/g, '')
          .trim()
          .slice(0, 200),
        source_title: title,
      });
    }
  }
  return out;
}
