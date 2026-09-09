---
schema: wang-person/v1
id: p_CeD3PFCF4PKUfy2AiXud7J
status: active
merged_into: null
display_name: 王奐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qGDXXUQPqqF7uN8zHhB2z4
        subject_person_id: p_CeD3PFCF4PKUfy2AiXud7J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F5LE9ChVY1dcy5bZJE5b49
          claim_id: c_qGDXXUQPqqF7uN8zHhB2z4
          source_id: s_V9L9bqgQW5q27UvJXy7Kia
          stance: supports
          locator: CBDB:100715
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100715）
          source: &a1
            id: s_V9L9bqgQW5q27UvJXy7Kia
            source_type: api_record
            title: 中国历代人物传记资料库：王奐（CBDB 100715）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100715&o=json
            external_identifier: CBDB:100715
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.388Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y9seqdUeHZRytemLw7EzPt
        subject_person_id: p_CeD3PFCF4PKUfy2AiXud7J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FF5Z611ztBqRG5FB1zjXZM
          claim_id: c_y9seqdUeHZRytemLw7EzPt
          source_id: s_V9L9bqgQW5q27UvJXy7Kia
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

# 王奐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王奐 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王奐（CBDB 100715）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100715&o=json)
