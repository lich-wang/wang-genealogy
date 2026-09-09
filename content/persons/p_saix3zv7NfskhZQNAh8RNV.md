---
schema: wang-person/v1
id: p_saix3zv7NfskhZQNAh8RNV
status: active
merged_into: null
display_name: 王瑋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BL1qwHjKFWdomVTAGAncGM
        subject_person_id: p_saix3zv7NfskhZQNAh8RNV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TCsLXh87m4F87YCaUT6EiF
          claim_id: c_BL1qwHjKFWdomVTAGAncGM
          source_id: s_simi6dP1FLMrf1jfohH6jL
          stance: supports
          locator: CBDB:100869
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100869）
          source: &a1
            id: s_simi6dP1FLMrf1jfohH6jL
            source_type: api_record
            title: 中国历代人物传记资料库：王瑋（CBDB 100869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100869&o=json
            external_identifier: CBDB:100869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.524Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_uAT36dc4etm1yUGBEXzwiZ
        subject_person_id: p_saix3zv7NfskhZQNAh8RNV
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1274年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_enEomMwAcnsTHSoB8Z39A2
          claim_id: c_uAT36dc4etm1yUGBEXzwiZ
          source_id: s_simi6dP1FLMrf1jfohH6jL
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
        id: c_QXRm6MSBQUrkabX7K4LxiY
        subject_person_id: p_saix3zv7NfskhZQNAh8RNV
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1337年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NeZfN644oAtYVzNC7V1xPj
          claim_id: c_QXRm6MSBQUrkabX7K4LxiY
          source_id: s_simi6dP1FLMrf1jfohH6jL
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
        id: c_BUy4MxGEgP177LVBNRwqB5
        subject_person_id: p_saix3zv7NfskhZQNAh8RNV
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
        - id: cs_x5guUSy7q5PofTU3CdjbZT
          claim_id: c_BUy4MxGEgP177LVBNRwqB5
          source_id: s_simi6dP1FLMrf1jfohH6jL
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

# 王瑋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑋 | accepted |
| birth.date | 1274年 | accepted |
| death.date | 1337年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑋（CBDB 100869）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100869&o=json)
