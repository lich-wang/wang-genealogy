---
schema: wang-person/v1
id: p_kp4LFuhULDpkgqMTGegNF8
status: active
merged_into: null
display_name: 王逢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oLyDTG4EoETGuwTKMa27hE
        subject_person_id: p_kp4LFuhULDpkgqMTGegNF8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jnDiL1zGCXKAW8ciVcFA75
          claim_id: c_oLyDTG4EoETGuwTKMa27hE
          source_id: s_u5L6scoVG8fKcDLXx6bBN8
          stance: supports
          locator: CBDB:702876
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（702876）
          source: &a1
            id: s_u5L6scoVG8fKcDLXx6bBN8
            source_type: api_record
            title: 中国历代人物传记资料库：王逢（CBDB 702876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702876&o=json
            external_identifier: CBDB:702876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.816Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xnFjTrsdsFAETP3b5EHaBx
        subject_person_id: p_kp4LFuhULDpkgqMTGegNF8
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
        - id: cs_P9GKQymNEVE6zkeurjEod7
          claim_id: c_xnFjTrsdsFAETP3b5EHaBx
          source_id: s_u5L6scoVG8fKcDLXx6bBN8
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

# 王逢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王逢 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王逢（CBDB 702876）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702876&o=json)
