---
schema: wang-person/v1
id: p_E4dnAxocC3oFrFk6exvrE2
status: active
merged_into: null
display_name: 王機
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2Fza7LxtLd4YRc9Ua1J8a4
        subject_person_id: p_E4dnAxocC3oFrFk6exvrE2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王機
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_poKqR2yZysRK1GSTEFihjp
          claim_id: c_2Fza7LxtLd4YRc9Ua1J8a4
          source_id: s_Vof2n7dtCC7FTNaXPDWyWt
          stance: supports
          locator: CBDB:147615
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（147615）
          source: &a1
            id: s_Vof2n7dtCC7FTNaXPDWyWt
            source_type: api_record
            title: 中国历代人物传记资料库：王機（CBDB 147615）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147615&o=json
            external_identifier: CBDB:147615
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.740Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tugSBEC7Vw4i15JBdDKEAB
        subject_person_id: p_E4dnAxocC3oFrFk6exvrE2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LHYCmRC6wfc4NiSWYq8j8p
          claim_id: c_tugSBEC7Vw4i15JBdDKEAB
          source_id: s_Vof2n7dtCC7FTNaXPDWyWt
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

# 王機

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王機 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王機（CBDB 147615）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147615&o=json)
