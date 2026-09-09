---
schema: wang-person/v1
id: p_qibD6JyoV6NmX9QN6DXpP6
status: active
merged_into: null
display_name: 王炳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7yenM7uVPAW7BoW3VP4T6W
        subject_person_id: p_qibD6JyoV6NmX9QN6DXpP6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UaQK699NPur9j9H737r4Sb
          claim_id: c_7yenM7uVPAW7BoW3VP4T6W
          source_id: s_GbtfREVmN2D19h5ENBEVeA
          stance: supports
          locator: CBDB:479087
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（479087）
          source: &a1
            id: s_GbtfREVmN2D19h5ENBEVeA
            source_type: api_record
            title: 中国历代人物传记资料库：王炳（CBDB 479087）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=479087&o=json
            external_identifier: CBDB:479087
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.604Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2curzeVRkgHDrDJ7mQUPUJ
        subject_person_id: p_qibD6JyoV6NmX9QN6DXpP6
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
        - id: cs_cZ5TaQuw22MFSi3t8FZ3ra
          claim_id: c_2curzeVRkgHDrDJ7mQUPUJ
          source_id: s_GbtfREVmN2D19h5ENBEVeA
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

# 王炳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炳 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王炳（CBDB 479087）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=479087&o=json)
