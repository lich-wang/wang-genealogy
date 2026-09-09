---
schema: wang-person/v1
id: p_1NRJDMaRvyp9yNoVJiZmjE
status: active
merged_into: null
display_name: 王慎德
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Crwr7XiFWjWFrLBZhjMJuR
        subject_person_id: p_1NRJDMaRvyp9yNoVJiZmjE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慎德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ynt2s5R76uj23Ga7WZv9JM
          claim_id: c_Crwr7XiFWjWFrLBZhjMJuR
          source_id: s_dZiEcnZ4AKZh3HXJzDUpCr
          stance: supports
          locator: CBDB:206584
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206584）
          source: &a1
            id: s_dZiEcnZ4AKZh3HXJzDUpCr
            source_type: api_record
            title: 中国历代人物传记资料库：王慎德（CBDB 206584）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206584&o=json
            external_identifier: CBDB:206584
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.897Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_aGTZjmR9YU7U6S9VrrdcCQ
        subject_person_id: p_1NRJDMaRvyp9yNoVJiZmjE
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1552年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4aqF9PppENJ9CqHVGQ5M5R
          claim_id: c_aGTZjmR9YU7U6S9VrrdcCQ
          source_id: s_dZiEcnZ4AKZh3HXJzDUpCr
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
        id: c_RV3NpBnB4pXLkEYZeshKPi
        subject_person_id: p_1NRJDMaRvyp9yNoVJiZmjE
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
        - id: cs_bAtEAzYkKJfEvFA57g2HWZ
          claim_id: c_RV3NpBnB4pXLkEYZeshKPi
          source_id: s_dZiEcnZ4AKZh3HXJzDUpCr
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

# 王慎德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慎德 | accepted |
| birth.date | 1552年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慎德（CBDB 206584）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206584&o=json)
