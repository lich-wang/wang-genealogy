---
schema: wang-person/v1
id: p_VRQP9KVn6MRENguQAnCn9a
status: active
merged_into: null
display_name: 王三聘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T2HCf9PXNFP3d8GmZGu4c7
        subject_person_id: p_VRQP9KVn6MRENguQAnCn9a
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
        - id: cs_t4smPv9jj6LXGJdLC5LLYo
          claim_id: c_T2HCf9PXNFP3d8GmZGu4c7
          source_id: s_2cC6sUT4ESrakNNjjJab1K
          stance: supports
          locator: CBDB:489637
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（489637）
          source: &a1
            id: s_2cC6sUT4ESrakNNjjJab1K
            source_type: api_record
            title: 中国历代人物传记资料库：王三聘（CBDB 489637）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489637&o=json
            external_identifier: CBDB:489637
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.061Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8XgomJiSku9KedotC6Yqu9
        subject_person_id: p_VRQP9KVn6MRENguQAnCn9a
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uxCpYywqG6aJNC6JLY9cF6
          claim_id: c_8XgomJiSku9KedotC6Yqu9
          source_id: s_2cC6sUT4ESrakNNjjJab1K
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王三聘（CBDB 489637）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489637&o=json)
