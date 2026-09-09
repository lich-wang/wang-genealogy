---
schema: wang-person/v1
id: p_vsDL5daEsYNzdry9NFDwaM
status: active
merged_into: null
display_name: 王慈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C5H61JXLuFxFc7zD9P8ipp
        subject_person_id: p_vsDL5daEsYNzdry9NFDwaM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h2F7AVST9p1rt6Dkm7QWNM
          claim_id: c_C5H61JXLuFxFc7zD9P8ipp
          source_id: s_psJ8ConbbEDfsY6967J48z
          stance: supports
          locator: CBDB:484325
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（484325）
          source: &a1
            id: s_psJ8ConbbEDfsY6967J48z
            source_type: api_record
            title: 中国历代人物传记资料库：王慈（CBDB 484325）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=484325&o=json
            external_identifier: CBDB:484325
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.852Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gHk854H5k2wPU81exPJ7HY
        subject_person_id: p_vsDL5daEsYNzdry9NFDwaM
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
        - id: cs_q27B6LNiEuAGCuRiT2KFZ6
          claim_id: c_gHk854H5k2wPU81exPJ7HY
          source_id: s_psJ8ConbbEDfsY6967J48z
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

# 王慈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慈 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慈（CBDB 484325）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=484325&o=json)
