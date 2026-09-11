---
schema: wang-person/v1
id: p_i5tgyWfzYvCTdgTz9wwEDp
status: active
merged_into: null
display_name: 王仕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ACrMNrL3Fyky3UU3mSsASJ
        subject_person_id: p_i5tgyWfzYvCTdgTz9wwEDp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WRfGUXet3mP4Hr8kDQGrA3
          claim_id: c_ACrMNrL3Fyky3UU3mSsASJ
          source_id: s_3VGR4ND6ygQ9jMP7xVke97
          stance: supports
          locator: CBDB:441152
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（441152）
          source: &a1
            id: s_3VGR4ND6ygQ9jMP7xVke97
            source_type: api_record
            title: 中国历代人物传记资料库：王仕（CBDB 441152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=441152&o=json
            external_identifier: CBDB:441152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.110Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_prUHURkNNCQxuFu13doA8t
        subject_person_id: p_i5tgyWfzYvCTdgTz9wwEDp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕，清人物。籍贯諸城，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 441152）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CS_A5xQ66GR4ZAAtp4pagn
          claim_id: c_prUHURkNNCQxuFu13doA8t
          source_id: s_3VGR4ND6ygQ9jMP7xVke97
          stance: supports
          locator: CBDB:441152
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

# 王仕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仕 | accepted |
| bio.summary | 王仕，清人物。籍贯諸城，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 441152） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仕（CBDB 441152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=441152&o=json)
