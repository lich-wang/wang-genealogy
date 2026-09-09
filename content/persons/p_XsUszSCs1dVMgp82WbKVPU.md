---
schema: wang-person/v1
id: p_XsUszSCs1dVMgp82WbKVPU
status: active
merged_into: null
display_name: 王滂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ud7T22u2TNy9aE3FyyxepU
        subject_person_id: p_XsUszSCs1dVMgp82WbKVPU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王滂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M1kNVattg3s9zZ2C5tcqSa
          claim_id: c_ud7T22u2TNy9aE3FyyxepU
          source_id: s_5VEKoJz3ZGYm2nLiyBEQ11
          stance: supports
          locator: CBDB:21968
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（21968）
          source: &a1
            id: s_5VEKoJz3ZGYm2nLiyBEQ11
            source_type: api_record
            title: 中国历代人物传记资料库：王滂（CBDB 21968）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21968&o=json
            external_identifier: CBDB:21968
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.779Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C5HeBKNHHpwvJNc27g5xKv
        subject_person_id: p_XsUszSCs1dVMgp82WbKVPU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6cEvAg9xkfoiX1LzGCT3Fq
          claim_id: c_C5HeBKNHHpwvJNc27g5xKv
          source_id: s_5VEKoJz3ZGYm2nLiyBEQ11
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

# 王滂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王滂 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王滂（CBDB 21968）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21968&o=json)
