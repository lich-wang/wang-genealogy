---
schema: wang-person/v1
id: p_kPt4zRPsEqQwRDgPYC6d7L
status: active
merged_into: null
display_name: 王存義
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7ZR467Q59yjrX2y3YBq6A5
        subject_person_id: p_kPt4zRPsEqQwRDgPYC6d7L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王存義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PZn8Dym9Ny2LRG3zoPxr5p
          claim_id: c_7ZR467Q59yjrX2y3YBq6A5
          source_id: s_1dmebyhpX46pLH1CydpTFt
          stance: supports
          locator: CBDB:253214
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（253214）
          source: &a1
            id: s_1dmebyhpX46pLH1CydpTFt
            source_type: api_record
            title: 中国历代人物传记资料库：王存義（CBDB 253214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253214&o=json
            external_identifier: CBDB:253214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.300Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hrB4V9Zm5PN7b6d3acssum
        subject_person_id: p_kPt4zRPsEqQwRDgPYC6d7L
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
        - id: cs_og4Ans5aufh5K5EJBrczs4
          claim_id: c_hrB4V9Zm5PN7b6d3acssum
          source_id: s_1dmebyhpX46pLH1CydpTFt
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

# 王存義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王存義 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王存義（CBDB 253214）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253214&o=json)
