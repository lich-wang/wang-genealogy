---
schema: wang-person/v1
id: p_6anKBBP5LrYfC596aGPcuw
status: active
merged_into: null
display_name: 王之道
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7NZcieCCUc2v5uKQ6h1uqQ
        subject_person_id: p_6anKBBP5LrYfC596aGPcuw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gQXjRN4TSk8o3QACSRaPtD
          claim_id: c_7NZcieCCUc2v5uKQ6h1uqQ
          source_id: s_BXE5ZCVUFveLYDmt1PhUiF
          stance: supports
          locator: CBDB:71358
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71358）
          source: &a1
            id: s_BXE5ZCVUFveLYDmt1PhUiF
            source_type: api_record
            title: 中国历代人物传记资料库：王之道（CBDB 71358）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71358&o=json
            external_identifier: CBDB:71358
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.616Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_mLWQT45sD9C3RhZesPXiX4
        subject_person_id: p_6anKBBP5LrYfC596aGPcuw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1786年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KkSNhNtg4rty6wuEfLw8b1
          claim_id: c_mLWQT45sD9C3RhZesPXiX4
          source_id: s_BXE5ZCVUFveLYDmt1PhUiF
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
        id: c_G7bF9JRMMf5ML1icPvnMv6
        subject_person_id: p_6anKBBP5LrYfC596aGPcuw
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
        - id: cs_fNFjHiK4zac7XQdviovTot
          claim_id: c_G7bF9JRMMf5ML1icPvnMv6
          source_id: s_BXE5ZCVUFveLYDmt1PhUiF
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

# 王之道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之道 | accepted |
| birth.date | 1786年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之道（CBDB 71358）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71358&o=json)
