---
schema: wang-person/v1
id: p_eUHDL7M5pNEse4uXLWzzER
status: active
merged_into: null
display_name: 王班
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K3JHLWn6gAy5f2FPV5KAa7
        subject_person_id: p_eUHDL7M5pNEse4uXLWzzER
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王班
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Uy3vLjAncYHG5b1BGY759s
          claim_id: c_K3JHLWn6gAy5f2FPV5KAa7
          source_id: s_hD41FnVe3QCcAsDx1KD7sh
          stance: supports
          locator: CBDB:415109
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（415109）
          source: &a1
            id: s_hD41FnVe3QCcAsDx1KD7sh
            source_type: api_record
            title: 中国历代人物传记资料库：王班（CBDB 415109）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415109&o=json
            external_identifier: CBDB:415109
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.989Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tHwTFEaWk8HR4K1uMKVDxb
        subject_person_id: p_eUHDL7M5pNEse4uXLWzzER
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为東梁人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SwbyHGWGkMRzQ1ZhEDvm82
          claim_id: c_tHwTFEaWk8HR4K1uMKVDxb
          source_id: s_hD41FnVe3QCcAsDx1KD7sh
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

# 王班

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王班 | accepted |
| bio.summary | CBDB 记载为東梁人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王班（CBDB 415109）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415109&o=json)
