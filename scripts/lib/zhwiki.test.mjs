// The gate between a language model and the database.
//
// A model reading an article is a finder, never a witness: it points at a
// sentence, and `verifyRelation` decides whether that sentence really says what
// the model claims. These tests are the specification of what gets through.

import { describe, expect, it } from 'vitest';
import { articlePlainText, linkTargetsByName, verifyRelation } from './zhwiki.mjs';

const WIKITEXT = `{{Infobox person
| name = 王導
| 父 = [[王裁]]
}}
'''王導'''，字茂弘，[[琅邪郡|琅邪]]臨沂人，光祿大夫[[王覽]]之孫，鎮軍司馬[[王裁]]之子。
王導娶[[曹淑]]為妻。次子[[王恬]]，字敬豫。
[[File:Wang Dao.jpg|thumb|王導像]]
`;

const context = () => ({
  title: '王導',
  plain: articlePlainText(WIKITEXT),
  links: linkTargetsByName(WIKITEXT),
});

const relation = (over) => ({
  subject: '王導',
  other: '王裁',
  other_is: 'parent',
  generations: null,
  quotation: '王導，字茂弘，琅邪臨沂人，光祿大夫王覽之孫，鎮軍司馬王裁之子。',
  ...over,
});

describe('articlePlainText', () => {
  const plain = articlePlainText(WIKITEXT);

  it('resolves links to the text a reader sees', () => {
    expect(plain).toContain('琅邪臨沂人');
    expect(plain).not.toContain('[[');
  });

  it('keeps infobox kinship parameters, which state relations too', () => {
    expect(plain).toContain('| 父 = 王裁');
  });

  it('drops file and image links', () => {
    expect(plain).not.toContain('Wang Dao.jpg');
  });
});

describe('linkTargetsByName', () => {
  it('maps both the shown text and the target to the article title', () => {
    const links = linkTargetsByName(WIKITEXT);
    expect(links.get('琅邪')).toBe('琅邪郡');
    expect(links.get('王覽')).toBe('王覽');
  });
});

describe('verifyRelation', () => {
  it('accepts a relation whose sentence is really in the article', () => {
    const checked = verifyRelation(relation(), context());
    expect(checked.ok).toBe(true);
    expect(checked.other_name).toBe('王裁');
    expect(checked.other_title).toBe('王裁');
  });

  it('takes the generation count from the sentence, not from the reader', () => {
    // 之孫 is two generations. The reader said five; the words say otherwise.
    const checked = verifyRelation(
      relation({ other: '王覽', other_is: 'ancestor', generations: 5 }),
      context(),
    );
    expect(checked.ok).toBe(true);
    expect(checked.generations).toBe(2);
  });

  it('counts 玄孫 as four generations, not three', () => {
    const wikitext = "'''王守仁'''。王先通，王守仁玄孫，世襲新建伯。";
    const checked = verifyRelation(
      {
        subject: '王守仁',
        other: '王先通',
        other_is: 'descendant',
        generations: 3,
        quotation: '王先通，王守仁玄孫，世襲新建伯。',
      },
      { title: '王守仁', plain: articlePlainText(wikitext), links: linkTargetsByName(wikitext) },
    );
    expect(checked.ok).toBe(true);
    expect(checked.generations).toBe(4);
  });

  it('reads a stated 四世孫 as four', () => {
    const wikitext = "'''王元'''。王元的四世孫，西漢博士王吉開始在皋虞。";
    const checked = verifyRelation(
      {
        subject: '王元',
        other: '王吉',
        other_is: 'descendant',
        generations: null,
        quotation: '王元的四世孫，西漢博士王吉開始在皋虞。',
      },
      { title: '王元', plain: articlePlainText(wikitext), links: linkTargetsByName(wikitext) },
    );
    expect(checked.ok).toBe(true);
    expect(checked.generations).toBe(4);
  });

  it('accepts descent in the other direction', () => {
    const wikitext = "'''王守仁'''。王承勳，王守仁孫，漕運總督。";
    const checked = verifyRelation(
      {
        subject: '王守仁',
        other: '王承勳',
        other_is: 'descendant',
        generations: null,
        quotation: '王承勳，王守仁孫，漕運總督。',
      },
      { title: '王守仁', plain: articlePlainText(wikitext), links: linkTargetsByName(wikitext) },
    );
    expect(checked.ok).toBe(true);
    expect(checked.other_is).toBe('descendant');
  });

  describe('a history that drops the surname', () => {
    // 晉書 卷八十, the opening of 王羲之's biography.
    const chapter = '王羲之，字逸少，司徒導之從子也。祖正，尚書郎。父曠，淮南太守。';
    const ctx = { title: '晉書/卷080', plain: chapter, links: new Map(), impliedSurname: true };

    it("completes the surname from the subject's own", () => {
      const checked = verifyRelation(
        { subject: '王羲之', other: '曠', other_is: 'parent', quotation: '祖正，尚書郎。父曠，淮南太守。' },
        ctx,
      );
      expect(checked.ok).toBe(true);
      expect(checked.other_name).toBe('王曠');
    });

    it('reads 祖 as two generations up', () => {
      const checked = verifyRelation(
        { subject: '王羲之', other: '正', other_is: 'ancestor', quotation: '祖正，尚書郎。父曠，淮南太守。' },
        ctx,
      );
      expect(checked.ok).toBe(true);
      expect(checked.other_name).toBe('王正');
      expect(checked.generations).toBe(2);
    });

    it('refuses to prefix a surname onto a name that already has one', () => {
      // 「父王仲」is a full name; 王 + 王仲 would be a person who never existed.
      const text = '孝武王皇后，父王仲，槐里人也。母臧兒，故燕王臧荼孫也。';
      const full = { title: '漢書/卷097上', plain: text, links: new Map(), impliedSurname: true };
      for (const other of ['王仲', '臧兒']) {
        const checked = verifyRelation(
          { subject: '王皇后', other, other_is: 'parent', quotation: text },
          full,
        );
        expect(checked).toEqual({ ok: false, reason: 'name_already_has_surname' });
      }
    });

    it('still completes a two-character given name', () => {
      const text = '王冲，父茂璋，梁給事黃門侍郎。';
      const checked = verifyRelation(
        { subject: '王冲', other: '茂璋', other_is: 'parent', quotation: text },
        { title: '陳書/卷17', plain: text, links: new Map(), impliedSurname: true },
      );
      expect(checked.ok).toBe(true);
      expect(checked.other_name).toBe('王茂璋');
    });

    it('will not complete a name the kinship word does not introduce', () => {
      const checked = verifyRelation(
        { subject: '王羲之', other: '之', other_is: 'parent', quotation: '王羲之，字逸少，司徒導之從子也。' },
        ctx,
      );
      expect(checked.ok).toBe(false);
    });

    it('leaves Wikipedia alone — there the surname is written out', () => {
      const checked = verifyRelation(
        { subject: '王羲之', other: '曠', other_is: 'parent', quotation: '祖正，尚書郎。父曠，淮南太守。' },
        { ...ctx, impliedSurname: false },
      );
      expect(checked).toEqual({ ok: false, reason: 'other_not_a_name' });
    });
  });

  it('matches across a script difference, as everything else in this project does', () => {
    const wikitext = "'''王離'''。秦朝名將王翦之孫王離為秦國將領。";
    const checked = verifyRelation(
      {
        subject: '王离',
        other: '王翦',
        other_is: 'ancestor',
        generations: null,
        quotation: '秦朝名将王翦之孙王离为秦国将领',
      },
      { title: '王離', plain: articlePlainText(wikitext), links: linkTargetsByName(wikitext) },
    );
    expect(checked.ok).toBe(true);
    expect(checked.generations).toBe(2);
  });

  it('rejects a paraphrase — the sentence must be in the article verbatim', () => {
    const checked = verifyRelation(
      relation({ quotation: '王導的父親是鎮軍司馬王裁。' }),
      context(),
    );
    expect(checked).toEqual({ ok: false, reason: 'quotation_not_in_article' });
  });

  it('rejects a person the quoted sentence never names', () => {
    const checked = verifyRelation(relation({ other: '王曠' }), context());
    expect(checked).toEqual({ ok: false, reason: 'other_not_in_quotation' });
  });

  it('rejects a sentence that states no kinship at all', () => {
    const checked = verifyRelation(
      relation({ other: '王恬', quotation: '王導像' }),
      context(),
    );
    expect(checked.ok).toBe(false);
  });

  it('rejects a relation this model cannot store', () => {
    const checked = verifyRelation(relation({ other_is: 'sibling' }), context());
    expect(checked).toEqual({ ok: false, reason: 'bad_role' });
  });

  it('rejects relating a person to themselves', () => {
    const checked = verifyRelation(
      relation({ other: '王導', quotation: '王導娶曹淑為妻。' }),
      context(),
    );
    expect(checked).toEqual({ ok: false, reason: 'self_relation' });
  });

  it('rejects a name carrying an office rather than a person', () => {
    const checked = verifyRelation(relation({ other: '鎮軍司馬王裁' }), context());
    expect(checked).toEqual({ ok: false, reason: 'other_not_a_name' });
  });

  it('ignores whitespace and quote marks when matching', () => {
    const checked = verifyRelation(
      relation({ quotation: '王導 娶「曹淑」為妻。', other: '曹淑', other_is: 'spouse' }),
      context(),
    );
    expect(checked.ok).toBe(true);
  });

  it('keeps a subject the article is not about, when the sentence names them', () => {
    const checked = verifyRelation(
      relation({ subject: '王恬', other: '王導', other_is: 'parent', quotation: '王導娶曹淑為妻。次子王恬，字敬豫。' }),
      context(),
    );
    expect(checked.ok).toBe(true);
    expect(checked.subject_name).toBe('王恬');
  });
});
