---
schema: wang-person/v1
id: p_uPs4jwdjeS98L3HuUGK5xY
status: active
merged_into: null
display_name: 王鳯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YQY3aKFV2v6xKNdCzq5hk1
        subject_person_id: p_uPs4jwdjeS98L3HuUGK5xY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9x5u78geLcpxfq8YzHCciJ
          claim_id: c_YQY3aKFV2v6xKNdCzq5hk1
          source_id: s_QgjTTnXnA9vmtiPEDzyxvN
          stance: supports
          locator: CBDB:508663
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（508663）
          source: &a1
            id: s_QgjTTnXnA9vmtiPEDzyxvN
            source_type: api_record
            title: 中国历代人物传记资料库：王鳯（CBDB 508663）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508663&o=json
            external_identifier: CBDB:508663
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.104Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MC3cz9RNR1sULtSDGEZAZX
        subject_person_id: p_uPs4jwdjeS98L3HuUGK5xY
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
        - id: cs_aNbZG9wrd74zpCQpwkPreC
          claim_id: c_MC3cz9RNR1sULtSDGEZAZX
          source_id: s_QgjTTnXnA9vmtiPEDzyxvN
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

# 王鳯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳯 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鳯（CBDB 508663）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508663&o=json)
