---
schema: wang-person/v1
id: p_PwftqoUXRDwthFpERn2N5X
status: active
merged_into: null
display_name: 王敦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DNzhig5RiHR8qjMo7Tq7yB
        subject_person_id: p_PwftqoUXRDwthFpERn2N5X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YpX6hKiFcD8v8KM92xpo2k
          claim_id: c_DNzhig5RiHR8qjMo7Tq7yB
          source_id: s_kKc4n3pDqiwWxNKSpdMC8d
          stance: supports
          locator: CBDB:293462
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（293462）
          source: &a1
            id: s_kKc4n3pDqiwWxNKSpdMC8d
            source_type: api_record
            title: 中国历代人物传记资料库：王敦（CBDB 293462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293462&o=json
            external_identifier: CBDB:293462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.430Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hDAL3mbpyrgKPLWKhYzzon
        subject_person_id: p_PwftqoUXRDwthFpERn2N5X
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
        - id: cs_uc8RvnKR6F7kn38F5HSwSF
          claim_id: c_hDAL3mbpyrgKPLWKhYzzon
          source_id: s_kKc4n3pDqiwWxNKSpdMC8d
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

# 王敦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敦 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敦（CBDB 293462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293462&o=json)
