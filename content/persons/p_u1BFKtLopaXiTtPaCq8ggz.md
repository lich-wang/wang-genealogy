---
schema: wang-person/v1
id: p_u1BFKtLopaXiTtPaCq8ggz
status: active
merged_into: null
display_name: 王承祐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hCMfEWa92S5De5VpuuDbc1
        subject_person_id: p_u1BFKtLopaXiTtPaCq8ggz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承祐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ff1PzJTQoySFWHSGGoCCPh
          claim_id: c_hCMfEWa92S5De5VpuuDbc1
          source_id: s_vp1GA5Wx2h3RY4fJvHonY4
          stance: supports
          locator: CBDB:500025
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（500025）
          source: &a1
            id: s_vp1GA5Wx2h3RY4fJvHonY4
            source_type: api_record
            title: 中国历代人物传记资料库：王承祐（CBDB 500025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=500025&o=json
            external_identifier: CBDB:500025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.791Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LGuYEjQ8Wz1oUadnpqBMBD
        subject_person_id: p_u1BFKtLopaXiTtPaCq8ggz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aUU1hUopfH9i5g6o7qfaCH
          claim_id: c_LGuYEjQ8Wz1oUadnpqBMBD
          source_id: s_vp1GA5Wx2h3RY4fJvHonY4
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

# 王承祐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承祐 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承祐（CBDB 500025）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=500025&o=json)
