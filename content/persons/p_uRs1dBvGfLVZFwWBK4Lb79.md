---
schema: wang-person/v1
id: p_uRs1dBvGfLVZFwWBK4Lb79
status: active
merged_into: null
display_name: 王鉞
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UkKdpy682V4wKY9FcrbPmN
        subject_person_id: p_uRs1dBvGfLVZFwWBK4Lb79
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q3kHEKx1Zr9JBhor473nae
          claim_id: c_UkKdpy682V4wKY9FcrbPmN
          source_id: s_AKq5syFNXzHYruraiuhLSD
          stance: supports
          locator: CBDB:558206
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（558206）
          source: &a1
            id: s_AKq5syFNXzHYruraiuhLSD
            source_type: api_record
            title: 中国历代人物传记资料库：王鉞（CBDB 558206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558206&o=json
            external_identifier: CBDB:558206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.694Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oaqqsKF53h18Gu1un3wLkq
        subject_person_id: p_uRs1dBvGfLVZFwWBK4Lb79
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
        - id: cs_3Yqy3bbtxN8Y3c629VfnQL
          claim_id: c_oaqqsKF53h18Gu1un3wLkq
          source_id: s_AKq5syFNXzHYruraiuhLSD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pBpTaYMKHnhbKcvFbv1L6Q
        subject_person_id: p_ziuSm1aJKT5bBGkVpgPe6D
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uRs1dBvGfLVZFwWBK4Lb79
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pXEsJ-M5DOvurWOAke0I8r
          claim_id: c_pBpTaYMKHnhbKcvFbv1L6Q
          source_id: s_AKq5syFNXzHYruraiuhLSD
          stance: supports
          locator: 南陽府志，lgid=878826：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ziuSm1aJKT5bBGkVpgPe6D
        status: active
        display_name: 王肇基
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鉞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉞 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ziuSm1aJKT5bBGkVpgPe6D | 王肇基 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鉞（CBDB 558206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558206&o=json)
