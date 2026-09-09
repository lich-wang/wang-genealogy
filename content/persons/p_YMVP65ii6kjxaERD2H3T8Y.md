---
schema: wang-person/v1
id: p_YMVP65ii6kjxaERD2H3T8Y
status: active
merged_into: null
display_name: 王珦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H91r4GvtKnysjXFeTPK6XS
        subject_person_id: p_YMVP65ii6kjxaERD2H3T8Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nCg5gaQ8VB2M89Z49TFcKE
          claim_id: c_H91r4GvtKnysjXFeTPK6XS
          source_id: s_dy41FWttW7k3rj4jsjXcuo
          stance: supports
          locator: CBDB:495799
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（495799）
          source: &a1
            id: s_dy41FWttW7k3rj4jsjXcuo
            source_type: api_record
            title: 中国历代人物传记资料库：王珦（CBDB 495799）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=495799&o=json
            external_identifier: CBDB:495799
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.515Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V59r8L89cCfCjnxYf4WZcg
        subject_person_id: p_YMVP65ii6kjxaERD2H3T8Y
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
        - id: cs_jiKg3Dr5DG34eREE7XvYgZ
          claim_id: c_V59r8L89cCfCjnxYf4WZcg
          source_id: s_dy41FWttW7k3rj4jsjXcuo
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

# 王珦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珦 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珦（CBDB 495799）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=495799&o=json)
