---
schema: wang-person/v1
id: p_afPNNs5ZnKkGi8uzmbG1Wn
status: active
merged_into: null
display_name: 王昊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JbyKgaPQy9H2KRdCGfFapg
        subject_person_id: p_afPNNs5ZnKkGi8uzmbG1Wn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TrPekG3KBMXnbi4RH77GEJ
          claim_id: c_JbyKgaPQy9H2KRdCGfFapg
          source_id: s_rTuc5S99rm8FC13m7vE1Te
          stance: supports
          locator: CBDB:69262
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69262）
          source: &a1
            id: s_rTuc5S99rm8FC13m7vE1Te
            source_type: api_record
            title: 中国历代人物传记资料库：王昊（CBDB 69262）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69262&o=json
            external_identifier: CBDB:69262
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.184Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_49rogBQ2hWbRiiRjJm7vzJ
        subject_person_id: p_afPNNs5ZnKkGi8uzmbG1Wn
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1627年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JJPTu7s6Fp4FUVKjCCZp9F
          claim_id: c_49rogBQ2hWbRiiRjJm7vzJ
          source_id: s_rTuc5S99rm8FC13m7vE1Te
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_3FUBQdFce42xHT7wCDHU9d
        subject_person_id: p_afPNNs5ZnKkGi8uzmbG1Wn
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1679年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pkuE1P1W3E5nSCCDvsaeRL
          claim_id: c_3FUBQdFce42xHT7wCDHU9d
          source_id: s_rTuc5S99rm8FC13m7vE1Te
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DQeJo2wxzpPQju9vb7pPj4
        subject_person_id: p_afPNNs5ZnKkGi8uzmbG1Wn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_95odoEHKqmw8NTdCDmXY1c
          claim_id: c_DQeJo2wxzpPQju9vb7pPj4
          source_id: s_rTuc5S99rm8FC13m7vE1Te
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

# 王昊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昊 | accepted |
| birth.date | 1627年 | accepted |
| death.date | 1679年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昊（CBDB 69262）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69262&o=json)
