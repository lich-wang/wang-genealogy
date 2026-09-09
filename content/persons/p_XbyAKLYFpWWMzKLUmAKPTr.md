---
schema: wang-person/v1
id: p_XbyAKLYFpWWMzKLUmAKPTr
status: active
merged_into: null
display_name: 王建章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z72ZAZSwWRD37T8A8WehYc
        subject_person_id: p_XbyAKLYFpWWMzKLUmAKPTr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9LM9htX3Hip23LJ9DH2oX1
          claim_id: c_z72ZAZSwWRD37T8A8WehYc
          source_id: s_cWLSQkrNMCTELVtNv6DvDp
          stance: supports
          locator: CBDB:637599
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637599）
          source: &a1
            id: s_cWLSQkrNMCTELVtNv6DvDp
            source_type: api_record
            title: 中国历代人物传记资料库：王建章（CBDB 637599）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637599&o=json
            external_identifier: CBDB:637599
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.464Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QpDVDLJMUTD2FrDBE4DwrB
        subject_person_id: p_XbyAKLYFpWWMzKLUmAKPTr
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
        - id: cs_pQEQJVqgPsURngeZoJzFKX
          claim_id: c_QpDVDLJMUTD2FrDBE4DwrB
          source_id: s_cWLSQkrNMCTELVtNv6DvDp
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

# 王建章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王建章 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王建章（CBDB 637599）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637599&o=json)
