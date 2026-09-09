---
schema: wang-person/v1
id: p_M8Qroy5aQXLqDgMFtrbejw
status: active
merged_into: null
display_name: 王叔寧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_foR9qVxJMBDNURqH2u92U7
        subject_person_id: p_M8Qroy5aQXLqDgMFtrbejw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2PafUbJmwnXe2LfJFYWdqE
          claim_id: c_foR9qVxJMBDNURqH2u92U7
          source_id: s_8nCZzwbMm8wDd9RSJSAdVF
          stance: supports
          locator: CBDB:143282
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（143282）
          source: &a1
            id: s_8nCZzwbMm8wDd9RSJSAdVF
            source_type: api_record
            title: 中国历代人物传记资料库：王叔寧（CBDB 143282）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143282&o=json
            external_identifier: CBDB:143282
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.620Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4dvS27a1AMMs9ZN4EsK5Lj
        subject_person_id: p_M8Qroy5aQXLqDgMFtrbejw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 763年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_csn1iPE9Bvm7p29F7aBVAH
          claim_id: c_4dvS27a1AMMs9ZN4EsK5Lj
          source_id: s_8nCZzwbMm8wDd9RSJSAdVF
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
        id: c_QbkbURNA9UAotFh5gcZ3br
        subject_person_id: p_M8Qroy5aQXLqDgMFtrbejw
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 815年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MVMpAigY5CdsE7RFgC29VM
          claim_id: c_QbkbURNA9UAotFh5gcZ3br
          source_id: s_8nCZzwbMm8wDd9RSJSAdVF
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
        id: c_KjMUZUXW71ZqLyd4JMQpSK
        subject_person_id: p_M8Qroy5aQXLqDgMFtrbejw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qWfuDAuDzaE8ZP3dV7hH7A
          claim_id: c_KjMUZUXW71ZqLyd4JMQpSK
          source_id: s_8nCZzwbMm8wDd9RSJSAdVF
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

# 王叔寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王叔寧 | accepted |
| birth.date | 763年 | accepted |
| death.date | 815年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王叔寧（CBDB 143282）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143282&o=json)
