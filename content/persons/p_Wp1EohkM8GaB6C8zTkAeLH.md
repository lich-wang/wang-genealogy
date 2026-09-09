---
schema: wang-person/v1
id: p_Wp1EohkM8GaB6C8zTkAeLH
status: active
merged_into: null
display_name: 王寰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QrSbGwraAr1hKJ94frWx8d
        subject_person_id: p_Wp1EohkM8GaB6C8zTkAeLH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YVZd37QUttkjvG2vxVMsh7
          claim_id: c_QrSbGwraAr1hKJ94frWx8d
          source_id: s_EXoejbVCkpC6gvrrLf7EwC
          stance: supports
          locator: CBDB:510286
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（510286）
          source: &a1
            id: s_EXoejbVCkpC6gvrrLf7EwC
            source_type: api_record
            title: 中国历代人物传记资料库：王寰（CBDB 510286）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510286&o=json
            external_identifier: CBDB:510286
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.224Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BaFh8UTnJL4QBc9mx27kRb
        subject_person_id: p_Wp1EohkM8GaB6C8zTkAeLH
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
        - id: cs_Fak638u4yKT1DN9w64RDkY
          claim_id: c_BaFh8UTnJL4QBc9mx27kRb
          source_id: s_EXoejbVCkpC6gvrrLf7EwC
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

# 王寰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寰 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寰（CBDB 510286）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510286&o=json)
