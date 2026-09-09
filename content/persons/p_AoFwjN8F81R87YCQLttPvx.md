---
schema: wang-person/v1
id: p_AoFwjN8F81R87YCQLttPvx
status: active
merged_into: null
display_name: 王舜弼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AX9pRmZK1PM4WaXaNgtPDf
        subject_person_id: p_AoFwjN8F81R87YCQLttPvx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舜弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2vQ5WFTi6JNo2X35eWxa1c
          claim_id: c_AX9pRmZK1PM4WaXaNgtPDf
          source_id: s_aU7a2QY8811QCnH5oCpWKp
          stance: supports
          locator: CBDB:534027
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（534027）
          source: &a1
            id: s_aU7a2QY8811QCnH5oCpWKp
            source_type: api_record
            title: 中国历代人物传记资料库：王舜弼（CBDB 534027）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=534027&o=json
            external_identifier: CBDB:534027
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.386Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_b8yvwvdjcDgTEL2Kc9aJFL
        subject_person_id: p_AoFwjN8F81R87YCQLttPvx
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
        - id: cs_UaBQGQLzh4PPSYQu82paBv
          claim_id: c_b8yvwvdjcDgTEL2Kc9aJFL
          source_id: s_aU7a2QY8811QCnH5oCpWKp
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

# 王舜弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舜弼 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王舜弼（CBDB 534027）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=534027&o=json)
