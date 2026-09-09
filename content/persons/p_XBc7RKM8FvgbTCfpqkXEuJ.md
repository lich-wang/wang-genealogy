---
schema: wang-person/v1
id: p_XBc7RKM8FvgbTCfpqkXEuJ
status: active
merged_into: null
display_name: 王化堂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9FWvCrBUBrQAQA6uW7YWGP
        subject_person_id: p_XBc7RKM8FvgbTCfpqkXEuJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化堂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZLG3f5B8wKQzXydwoCG2jg
          claim_id: c_9FWvCrBUBrQAQA6uW7YWGP
          source_id: s_MwSLgMcDMw6x3QmsqnDZnR
          stance: supports
          locator: CBDB:71407
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71407）
          source: &a1
            id: s_MwSLgMcDMw6x3QmsqnDZnR
            source_type: api_record
            title: 中国历代人物传记资料库：王化堂（CBDB 71407）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71407&o=json
            external_identifier: CBDB:71407
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.648Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2GjLZrTb9pFt73qS43dkvM
        subject_person_id: p_XBc7RKM8FvgbTCfpqkXEuJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1811年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dto8xGqc3EdxL9FqZSqy7s
          claim_id: c_2GjLZrTb9pFt73qS43dkvM
          source_id: s_MwSLgMcDMw6x3QmsqnDZnR
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
        id: c_NvV725QFAkMNd5JcJZTSji
        subject_person_id: p_XBc7RKM8FvgbTCfpqkXEuJ
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
        - id: cs_g4zWGxMKZ6MNENMnMGKcz9
          claim_id: c_NvV725QFAkMNd5JcJZTSji
          source_id: s_MwSLgMcDMw6x3QmsqnDZnR
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

# 王化堂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王化堂 | accepted |
| birth.date | 1811年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王化堂（CBDB 71407）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71407&o=json)
