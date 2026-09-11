---
schema: wang-person/v1
id: p_ApVZ74FNRZfFhRYJwcQMZG
status: active
merged_into: null
display_name: 王吉甫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7pihUJeh7UZ63aBAT3Jc4q
        subject_person_id: p_ApVZ74FNRZfFhRYJwcQMZG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王吉甫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_c6bCaHEo71HiqL3CuHJCn8
          claim_id: c_7pihUJeh7UZ63aBAT3Jc4q
          source_id: s_sdrKu4goTN5CC9Q46GAjzR
          stance: supports
          locator: CBDB:38743
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38743）
          source: &a1
            id: s_sdrKu4goTN5CC9Q46GAjzR
            source_type: api_record
            title: 中国历代人物传记资料库：王吉甫（CBDB 38743）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38743&o=json
            external_identifier: CBDB:38743
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.536Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8yNk5wugfPQbpDQjkFBGFc
        subject_person_id: p_ApVZ74FNRZfFhRYJwcQMZG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王吉甫，宋人物。籍贯同州，身份为法律專家，入仕明經，曾任路提點刑獄公事、中大夫、大理寺評事。（中国历代人物传记资料库 CBDB 38743）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YBPgk78qfGfM4HrGaTGYti
          claim_id: c_8yNk5wugfPQbpDQjkFBGFc
          source_id: s_sdrKu4goTN5CC9Q46GAjzR
          stance: supports
          locator: CBDB:38743
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

# 王吉甫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王吉甫 | accepted |
| bio.summary | 王吉甫，宋人物。籍贯同州，身份为法律專家，入仕明經，曾任路提點刑獄公事、中大夫、大理寺評事。（中国历代人物传记资料库 CBDB 38743） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王吉甫（CBDB 38743）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38743&o=json)
