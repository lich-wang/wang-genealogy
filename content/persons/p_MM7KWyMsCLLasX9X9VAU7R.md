---
schema: wang-person/v1
id: p_MM7KWyMsCLLasX9X9VAU7R
status: active
merged_into: null
display_name: 王宗堯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ieLLEfUwbv68s8qLLrVxFy
        subject_person_id: p_MM7KWyMsCLLasX9X9VAU7R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗堯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Qm7Z1Yq47S3da49DvqpoMn
          claim_id: c_ieLLEfUwbv68s8qLLrVxFy
          source_id: s_BCMG9RajAtuuSMjXsFXvkC
          stance: supports
          locator: CBDB:203496
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203496）
          source: &a1
            id: s_BCMG9RajAtuuSMjXsFXvkC
            source_type: api_record
            title: 中国历代人物传记资料库：王宗堯（CBDB 203496）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203496&o=json
            external_identifier: CBDB:203496
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.790Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6VHmoWgJh6zHmnF1J9e8Q2
        subject_person_id: p_MM7KWyMsCLLasX9X9VAU7R
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1499年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Sf34YoShcpHLiV7AC4xQPP
          claim_id: c_6VHmoWgJh6zHmnF1J9e8Q2
          source_id: s_BCMG9RajAtuuSMjXsFXvkC
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
        id: c_1335iqnDTtz9pGDFtkpQjG
        subject_person_id: p_MM7KWyMsCLLasX9X9VAU7R
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
        - id: cs_GpAaGz8Aty84XkzzmGM5Qx
          claim_id: c_1335iqnDTtz9pGDFtkpQjG
          source_id: s_BCMG9RajAtuuSMjXsFXvkC
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

# 王宗堯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗堯 | accepted |
| birth.date | 1499年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗堯（CBDB 203496）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203496&o=json)
