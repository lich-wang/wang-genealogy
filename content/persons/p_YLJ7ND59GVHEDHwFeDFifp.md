---
schema: wang-person/v1
id: p_YLJ7ND59GVHEDHwFeDFifp
status: active
merged_into: null
display_name: 王智中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fHZG2zNE7t2XRhmp78RaGt
        subject_person_id: p_YLJ7ND59GVHEDHwFeDFifp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王智中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RRNjAZdcmq16whDj7MsAAp
          claim_id: c_fHZG2zNE7t2XRhmp78RaGt
          source_id: s_NUA2fKTi1z2vrCV3PMZCNn
          stance: supports
          locator: CBDB:542913
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（542913）
          source: &a1
            id: s_NUA2fKTi1z2vrCV3PMZCNn
            source_type: api_record
            title: 中国历代人物传记资料库：王智中（CBDB 542913）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=542913&o=json
            external_identifier: CBDB:542913
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.444Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R3ERJAL1uGfKSjrkSuevSK
        subject_person_id: p_YLJ7ND59GVHEDHwFeDFifp
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
        - id: cs_8vpPVwiN1J7NSwhszMn9fu
          claim_id: c_R3ERJAL1uGfKSjrkSuevSK
          source_id: s_NUA2fKTi1z2vrCV3PMZCNn
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

# 王智中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王智中 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王智中（CBDB 542913）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=542913&o=json)
