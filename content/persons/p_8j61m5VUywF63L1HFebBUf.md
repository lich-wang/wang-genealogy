---
schema: wang-person/v1
id: p_8j61m5VUywF63L1HFebBUf
status: active
merged_into: null
display_name: 王默
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_R9sXeaj2CyGh5D4Qvf2HQe
        subject_person_id: p_8j61m5VUywF63L1HFebBUf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王默
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DqZQamkLtMKLxs7HpqYCvD
          claim_id: c_R9sXeaj2CyGh5D4Qvf2HQe
          source_id: s_ppFa4YuUeRYZV4cTNP4iKY
          stance: supports
          locator: CBDB:283525
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283525）
          source: &a1
            id: s_ppFa4YuUeRYZV4cTNP4iKY
            source_type: api_record
            title: 中国历代人物传记资料库：王默（CBDB 283525）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283525&o=json
            external_identifier: CBDB:283525
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.139Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_58kNDCz5D385959ceD7wM4
        subject_person_id: p_8j61m5VUywF63L1HFebBUf
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
        - id: cs_UBbj1nkuooEupqq8f8iruF
          claim_id: c_58kNDCz5D385959ceD7wM4
          source_id: s_ppFa4YuUeRYZV4cTNP4iKY
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

# 王默

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王默 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王默（CBDB 283525）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283525&o=json)
