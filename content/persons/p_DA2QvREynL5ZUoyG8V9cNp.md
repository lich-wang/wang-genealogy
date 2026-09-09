---
schema: wang-person/v1
id: p_DA2QvREynL5ZUoyG8V9cNp
status: active
merged_into: null
display_name: 王春澤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5oivgDAMqnUXpompMJPmYT
        subject_person_id: p_DA2QvREynL5ZUoyG8V9cNp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春澤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CH8QgzjnuzbJcw9KqJ1r4A
          claim_id: c_5oivgDAMqnUXpompMJPmYT
          source_id: s_8PiY9j7LrXwCzoFvhobTJG
          stance: supports
          locator: CBDB:126604
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126604）
          source: &a1
            id: s_8PiY9j7LrXwCzoFvhobTJG
            source_type: api_record
            title: 中国历代人物传记资料库：王春澤（CBDB 126604）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126604&o=json
            external_identifier: CBDB:126604
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.052Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Qo73nJSpRTusUj6Yee611q
        subject_person_id: p_DA2QvREynL5ZUoyG8V9cNp
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1515年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LK3Sf1fD8sC9boFqas1JCc
          claim_id: c_Qo73nJSpRTusUj6Yee611q
          source_id: s_8PiY9j7LrXwCzoFvhobTJG
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
        id: c_gUX9zXkUxMSs8U46cvMUwj
        subject_person_id: p_DA2QvREynL5ZUoyG8V9cNp
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1602年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MS8qfVzRxfNpcCJmwbB9pz
          claim_id: c_gUX9zXkUxMSs8U46cvMUwj
          source_id: s_8PiY9j7LrXwCzoFvhobTJG
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
        id: c_q8MuSeArgtL6vGku7yieCR
        subject_person_id: p_DA2QvREynL5ZUoyG8V9cNp
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
        - id: cs_Y71LsCUhrQt2wiLJGFYVKo
          claim_id: c_q8MuSeArgtL6vGku7yieCR
          source_id: s_8PiY9j7LrXwCzoFvhobTJG
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

# 王春澤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王春澤 | accepted |
| birth.date | 1515年 | accepted |
| death.date | 1602年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王春澤（CBDB 126604）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126604&o=json)
