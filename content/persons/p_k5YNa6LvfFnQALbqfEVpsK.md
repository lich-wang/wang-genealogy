---
schema: wang-person/v1
id: p_k5YNa6LvfFnQALbqfEVpsK
status: active
merged_into: null
display_name: 王濟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gAzWFfcD9NQF29VQqwKoiC
        subject_person_id: p_k5YNa6LvfFnQALbqfEVpsK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E8fqhxs1CGigorsDUMgFND
          claim_id: c_gAzWFfcD9NQF29VQqwKoiC
          source_id: s_TzEVvLEvvwy1DX3XCDHLLP
          stance: supports
          locator: CBDB:223207
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（223207）
          source: &a1
            id: s_TzEVvLEvvwy1DX3XCDHLLP
            source_type: api_record
            title: 中国历代人物传记资料库：王濟（CBDB 223207）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223207&o=json
            external_identifier: CBDB:223207
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.405Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Um9QJJZztYjnJgD8ikYPP5
        subject_person_id: p_k5YNa6LvfFnQALbqfEVpsK
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
        - id: cs_sYUDN96uiX8x5JdsKgSZVA
          claim_id: c_Um9QJJZztYjnJgD8ikYPP5
          source_id: s_TzEVvLEvvwy1DX3XCDHLLP
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

# 王濟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濟 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王濟（CBDB 223207）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223207&o=json)
