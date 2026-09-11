---
schema: wang-person/v1
id: p_hUkBHYRp76sByVcSsoaonD
status: active
merged_into: null
display_name: 王旭暢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zq3M6ED3Pn7xWJ3PgfwLhE
        subject_person_id: p_hUkBHYRp76sByVcSsoaonD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旭暢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xQ7pgjQE71L5Y21qfyQLUd
          claim_id: c_zq3M6ED3Pn7xWJ3PgfwLhE
          source_id: s_PS9nP8JtkAZi5x23E2sWc1
          stance: supports
          locator: CBDB:638348
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638348）
          source: &a1
            id: s_PS9nP8JtkAZi5x23E2sWc1
            source_type: api_record
            title: 中国历代人物传记资料库：王旭暢（CBDB 638348）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638348&o=json
            external_identifier: CBDB:638348
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.597Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aFxnzKaXAUM3nH7b43FQjU
        subject_person_id: p_hUkBHYRp76sByVcSsoaonD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旭暢，清人物。籍贯寶坻，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 638348）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8GEWr0m3QQrX4ph7-Ehq7b
          claim_id: c_aFxnzKaXAUM3nH7b43FQjU
          source_id: s_PS9nP8JtkAZi5x23E2sWc1
          stance: supports
          locator: CBDB:638348
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王旭暢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王旭暢 | accepted |
| bio.summary | 王旭暢，清人物。籍贯寶坻，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 638348） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王旭暢（CBDB 638348）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638348&o=json)
