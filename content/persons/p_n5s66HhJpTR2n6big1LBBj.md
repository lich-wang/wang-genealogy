---
schema: wang-person/v1
id: p_n5s66HhJpTR2n6big1LBBj
status: active
merged_into: null
display_name: 王士甫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_x4wLaZr1JuGA3iCq3E23Zt
        subject_person_id: p_n5s66HhJpTR2n6big1LBBj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士甫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HS3wxKK424kW4PFvzLx4LN
          claim_id: c_x4wLaZr1JuGA3iCq3E23Zt
          source_id: s_Zmx81nQH67S4FDKMUB2bag
          stance: supports
          locator: CBDB:537074
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（537074）
          source: &a1
            id: s_Zmx81nQH67S4FDKMUB2bag
            source_type: api_record
            title: 中国历代人物传记资料库：王士甫（CBDB 537074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=537074&o=json
            external_identifier: CBDB:537074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.411Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8mEnRPzQD29NdbX8PpqVLW
        subject_person_id: p_n5s66HhJpTR2n6big1LBBj
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
        - id: cs_BrUw3MCLtDStP7snAjjwYB
          claim_id: c_8mEnRPzQD29NdbX8PpqVLW
          source_id: s_Zmx81nQH67S4FDKMUB2bag
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

# 王士甫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士甫 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士甫（CBDB 537074）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=537074&o=json)
