---
schema: wang-person/v1
id: p_WB2FHyJEw9w31YcL6SQHQ3
status: active
merged_into: null
display_name: 王三聘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QGb6aD8Bq43XdNEDoubNgu
        subject_person_id: p_WB2FHyJEw9w31YcL6SQHQ3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三聘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nEhxK5xk2coRpSxmxnwr9k
          claim_id: c_QGb6aD8Bq43XdNEDoubNgu
          source_id: s_PbM3FwBUffGCBEAnAAxrK5
          stance: supports
          locator: CBDB:635639
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635639）
          source: &a1
            id: s_PbM3FwBUffGCBEAnAAxrK5
            source_type: api_record
            title: 中国历代人物传记资料库：王三聘（CBDB 635639）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635639&o=json
            external_identifier: CBDB:635639
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.991Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6YCXEFUYrG3uxRY3Sd43oK
        subject_person_id: p_WB2FHyJEw9w31YcL6SQHQ3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三聘，清人物。籍贯浮山，曾任典史。（中国历代人物传记资料库 CBDB 635639）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_f-8_DpibCC4bpwOdJxJX8-
          claim_id: c_6YCXEFUYrG3uxRY3Sd43oK
          source_id: s_PbM3FwBUffGCBEAnAAxrK5
          stance: supports
          locator: CBDB:635639
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

# 王三聘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三聘 | accepted |
| bio.summary | 王三聘，清人物。籍贯浮山，曾任典史。（中国历代人物传记资料库 CBDB 635639） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王三聘（CBDB 635639）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635639&o=json)
