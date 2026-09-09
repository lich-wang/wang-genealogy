---
schema: wang-person/v1
id: p_BYJfPhEZfG99snxow17KHG
status: active
merged_into: null
display_name: 王有功
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_o3adiG3Pxk1c6kUo9XJ5GA
        subject_person_id: p_BYJfPhEZfG99snxow17KHG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有功
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1ADjX5DF46YCfK6Qnk7iTY
          claim_id: c_o3adiG3Pxk1c6kUo9XJ5GA
          source_id: s_BP4YC1eP68nSyZzdL2ksaf
          stance: supports
          locator: CBDB:206804
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206804）
          source: &a1
            id: s_BP4YC1eP68nSyZzdL2ksaf
            source_type: api_record
            title: 中国历代人物传记资料库：王有功（CBDB 206804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206804&o=json
            external_identifier: CBDB:206804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.906Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_dfX2ANZ8V4upKMVtwpKsht
        subject_person_id: p_BYJfPhEZfG99snxow17KHG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1553年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EmG87Jty9ewz5VSwFwjdrZ
          claim_id: c_dfX2ANZ8V4upKMVtwpKsht
          source_id: s_BP4YC1eP68nSyZzdL2ksaf
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YoCXbWTKn9niyKqUL4TaEG
        subject_person_id: p_BYJfPhEZfG99snxow17KHG
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
        - id: cs_3ui8j2oDWkwkRHQ2nGCXdc
          claim_id: c_YoCXbWTKn9niyKqUL4TaEG
          source_id: s_BP4YC1eP68nSyZzdL2ksaf
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

# 王有功

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王有功 | accepted |
| birth.date | 1553年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王有功（CBDB 206804）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206804&o=json)
