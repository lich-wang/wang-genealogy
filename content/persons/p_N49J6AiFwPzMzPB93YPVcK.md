---
schema: wang-person/v1
id: p_N49J6AiFwPzMzPB93YPVcK
status: active
merged_into: null
display_name: 王朱聘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3gBjxAVL9LDEHWec39GhFW
        subject_person_id: p_N49J6AiFwPzMzPB93YPVcK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朱聘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n4r8j5h5hGGhKxdGk8vc6n
          claim_id: c_3gBjxAVL9LDEHWec39GhFW
          source_id: s_HQD5XhUaaDpbQBDPcV4e1B
          stance: supports
          locator: CBDB:561618
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（561618）
          source: &a1
            id: s_HQD5XhUaaDpbQBDPcV4e1B
            source_type: api_record
            title: 中国历代人物传记资料库：王朱聘（CBDB 561618）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561618&o=json
            external_identifier: CBDB:561618
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.556Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iz2dCKvxfU6HxpFoF7n73Y
        subject_person_id: p_N49J6AiFwPzMzPB93YPVcK
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
        - id: cs_pqMoTpj9WEUpPLzvtgfE7Y
          claim_id: c_iz2dCKvxfU6HxpFoF7n73Y
          source_id: s_HQD5XhUaaDpbQBDPcV4e1B
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

# 王朱聘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朱聘 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朱聘（CBDB 561618）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561618&o=json)
