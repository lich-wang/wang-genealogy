---
schema: wang-person/v1
id: p_gME3UgP8rb8SEG1E3DyXcP
status: active
merged_into: null
display_name: 王京
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XoviPQo3FV9AJ1FXZEA44X
        subject_person_id: p_gME3UgP8rb8SEG1E3DyXcP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王京
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1pWRHCjaGtvAoyPsNeAnzV
          claim_id: c_XoviPQo3FV9AJ1FXZEA44X
          source_id: s_xB2A4CGqcoA5rapE4A2r6b
          stance: supports
          locator: CBDB:506816
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（506816）
          source: &a1
            id: s_xB2A4CGqcoA5rapE4A2r6b
            source_type: api_record
            title: 中国历代人物传记资料库：王京（CBDB 506816）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=506816&o=json
            external_identifier: CBDB:506816
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.009Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F1pbRhqCE4X9QCrMC7rtG3
        subject_person_id: p_gME3UgP8rb8SEG1E3DyXcP
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
        - id: cs_8PytvktKMrn5nq3dQU2ePn
          claim_id: c_F1pbRhqCE4X9QCrMC7rtG3
          source_id: s_xB2A4CGqcoA5rapE4A2r6b
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

# 王京

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王京 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王京（CBDB 506816）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=506816&o=json)
