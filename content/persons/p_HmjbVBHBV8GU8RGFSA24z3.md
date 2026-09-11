---
schema: wang-person/v1
id: p_HmjbVBHBV8GU8RGFSA24z3
status: active
merged_into: null
display_name: 王與階
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hS6XA4q46PygSWRzdbNLJL
        subject_person_id: p_HmjbVBHBV8GU8RGFSA24z3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王與階
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pdk5jtPReCQDUjXTvunMgR
          claim_id: c_hS6XA4q46PygSWRzdbNLJL
          source_id: s_Ns7xqMukNkooX6b99C5s9N
          stance: supports
          locator: CBDB:71339
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71339）
          source: &a1
            id: s_Ns7xqMukNkooX6b99C5s9N
            source_type: api_record
            title: 中国历代人物传记资料库：王與階（CBDB 71339）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71339&o=json
            external_identifier: CBDB:71339
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.152Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_F3pPYLPTRrA4s2j5HY8sH6
        subject_person_id: p_HmjbVBHBV8GU8RGFSA24z3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1612年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fTtVzSPHw9bBp5EQnkzpHd
          claim_id: c_F3pPYLPTRrA4s2j5HY8sH6
          source_id: s_Ns7xqMukNkooX6b99C5s9N
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
        id: c_2qD3kAWRdRUuowY5aCxgXt
        subject_person_id: p_HmjbVBHBV8GU8RGFSA24z3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1676年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jY4NnimkVz5jg5Qa8KR4Yo
          claim_id: c_2qD3kAWRdRUuowY5aCxgXt
          source_id: s_Ns7xqMukNkooX6b99C5s9N
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
        id: c_6Co4VGExy8Y5HxnAUACUvK
        subject_person_id: p_HmjbVBHBV8GU8RGFSA24z3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王與階（1612年—1676年），清人物。籍贯新城。（中国历代人物传记资料库 CBDB 71339）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xJbEeTDkCl3FIRoMnwIt9t
          claim_id: c_6Co4VGExy8Y5HxnAUACUvK
          source_id: s_Ns7xqMukNkooX6b99C5s9N
          stance: supports
          locator: CBDB:71339
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王與階

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王與階 | accepted |
| birth.date | 1612年 | accepted |
| death.date | 1676年 | accepted |
| bio.summary | 王與階（1612年—1676年），清人物。籍贯新城。（中国历代人物传记资料库 CBDB 71339） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王與階（CBDB 71339）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71339&o=json)
