---
schema: wang-person/v1
id: p_cpGBEq63QojtvoRHpvNFEb
status: active
merged_into: null
display_name: 王家相
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CK4JVrSpik52uaLXBELiwT
        subject_person_id: p_cpGBEq63QojtvoRHpvNFEb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yXbjs8TT9FF7hKyiktpt85
          claim_id: c_CK4JVrSpik52uaLXBELiwT
          source_id: s_hQ4MNw8gYqbwTtzMu8ZNXd
          stance: supports
          locator: CBDB:207666
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207666）
          source: &a1
            id: s_hQ4MNw8gYqbwTtzMu8ZNXd
            source_type: api_record
            title: 中国历代人物传记资料库：王家相（CBDB 207666）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207666&o=json
            external_identifier: CBDB:207666
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.924Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_EFt2ptqKnSedYb3h4EaKK8
        subject_person_id: p_cpGBEq63QojtvoRHpvNFEb
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1577年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LP9FB1V4vQFYqfm2egVLPQ
          claim_id: c_EFt2ptqKnSedYb3h4EaKK8
          source_id: s_hQ4MNw8gYqbwTtzMu8ZNXd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R4kfiBErDBYQujXy5jLEYy
        subject_person_id: p_cpGBEq63QojtvoRHpvNFEb
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
        - id: cs_SR7JkP1cXqzPBFpHyj1xFS
          claim_id: c_R4kfiBErDBYQujXy5jLEYy
          source_id: s_hQ4MNw8gYqbwTtzMu8ZNXd
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

# 王家相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家相 | accepted |
| birth.date | 1577年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王家相（CBDB 207666）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207666&o=json)
