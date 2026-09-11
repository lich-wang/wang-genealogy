---
schema: wang-person/v1
id: p_BCL7Rb1W2yzKpyqWxhFUru
status: active
merged_into: null
display_name: 王如琮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GAnXJThB2fNfiwidd64WrY
        subject_person_id: p_BCL7Rb1W2yzKpyqWxhFUru
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如琮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_V2zEFbHztJqxHBJRm4m8Mg
          claim_id: c_GAnXJThB2fNfiwidd64WrY
          source_id: s_dox5bPJ5qHJXgNg5zeubBq
          stance: supports
          locator: CBDB:574192
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（574192）
          source: &a1
            id: s_dox5bPJ5qHJXgNg5zeubBq
            source_type: api_record
            title: 中国历代人物传记资料库：王如琮（CBDB 574192）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574192&o=json
            external_identifier: CBDB:574192
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.675Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WLvQgNrFr1hZEGG7zmwqR2
        subject_person_id: p_BCL7Rb1W2yzKpyqWxhFUru
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如琮，明人物。籍贯黃岡，入仕明經。（中国历代人物传记资料库 CBDB 574192）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xiabgXuu4m04a8YuvT2h9B
          claim_id: c_WLvQgNrFr1hZEGG7zmwqR2
          source_id: s_dox5bPJ5qHJXgNg5zeubBq
          stance: supports
          locator: CBDB:574192
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

# 王如琮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王如琮 | accepted |
| bio.summary | 王如琮，明人物。籍贯黃岡，入仕明經。（中国历代人物传记资料库 CBDB 574192） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王如琮（CBDB 574192）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574192&o=json)
