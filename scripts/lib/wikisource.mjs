// Chinese Wikisource as a source of kinship: the histories themselves.
//
// Wikipedia says what a modern editor knows about a person. Wikisource carries
// what the record actually says — 晉書 卷八十 opens「王羲之，字逸少，司徒導之從
// 子也。祖正，尚書郎。父曠，淮南太守」, three generations in one sentence, in the
// words the Tang compilers used. That is a different and older claim than a
// Wikipedia summary of it, and worth citing as itself.
//
// Two things make this text unreadable to the regex miner and readable to a
// language model: there are no wiki links to anchor on, and the surname is
// dropped once the subject has been named. The surname is put back mechanically
// (see `verifyRelation`'s implied-surname handling), not guessed.
//
// Licensing: the underlying histories are long out of copyright; the Wikisource
// transcription and markup are CC BY-SA 4.0, so that is what each Source
// records — never CC0.

import { fetchPage, searchTitles } from './wiki.mjs';

const HOST = 'zh.wikisource.org';

export const WIKISOURCE_SOURCE_TEMPLATE = {
  source_type: 'book',
  creator: null,
  publisher: '维基文库',
  license_code: 'CC-BY-SA-4.0',
};

export const wikisourceUrl = (title) =>
  `https://zh.wikisource.org/wiki/${encodeURIComponent(title.replace(/ /g, '_'))}`;

export const fetchWikisource = (title, opts) => fetchPage(HOST, title, { ...opts, dir: 'wikisource' });

/**
 * Chapters of the standard histories worth reading for a given person.
 *
 * Restricted to the works that carry biographies — a search for 王羲之 also
 * returns his own calligraphy and every anthology that quotes him, none of
 * which states who his father was. 全晉文-style collections are excluded for the
 * same reason: they are his writings, not an account of him.
 */
const BIOGRAPHY_WORKS =
  /^(史記|漢書|後漢書|三國志|晉書|宋書|南齊書|梁書|陳書|魏書|北齊書|周書|隋書|南史|北史|舊唐書|新唐書|舊五代史|新五代史|宋史|遼史|金史|元史|明史|清史稿)\//;

export async function biographyChapters(name, { limit = 6 } = {}) {
  const hits = await searchTitles(HOST, name, { limit: limit * 4 });
  return hits
    .filter((h) => BIOGRAPHY_WORKS.test(h.title))
    // A chapter under 2 kB is a stub or a table of contents, not a biography.
    .filter((h) => h.size >= 2000)
    .slice(0, limit)
    .map((h) => h.title);
}

/**
 * Wikitext reduced to the text a reader sees. Classical chapters are mostly
 * bare prose; what has to go is the header template, the section markers and
 * the editorial annotation that would otherwise look like part of a sentence.
 */
export function chapterPlainText(wikitext) {
  return wikitext
    .replace(/<ref[^>]*>[\s\S]*?<\/ref>/g, '')
    .replace(/<ref[^>]*\/>/g, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\{\{[^{}]*\}\}/g, '')
    .replace(/\{\{[\s\S]*?\}\}/g, '')
    .replace(/<sub>([\s\S]*?)<\/sub>/g, '（$1）')
    .replace(/<[^>]+>/g, '')
    .replace(/\[\[([^\]|#]+)(?:\|([^\]]+))?\]\]/g, (_, target, shown) => shown ?? target)
    .replace(/'{2,}/g, '')
    .replace(/^[=\s]*=+\s*(.+?)\s*=+\s*$/gm, '\n【$1】')
    .replace(/[　\t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}
