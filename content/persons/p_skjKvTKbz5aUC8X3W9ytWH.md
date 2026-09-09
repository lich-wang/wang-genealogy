---
schema: wang-person/v1
id: p_skjKvTKbz5aUC8X3W9ytWH
status: active
merged_into: null
display_name: 王崇文
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2YmZJQNhuxYNQJzqf7BiiH
        subject_person_id: p_skjKvTKbz5aUC8X3W9ytWH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YtzTmyqSt4ViG978mDg7Cq
          claim_id: c_2YmZJQNhuxYNQJzqf7BiiH
          source_id: s_apmmDsyfoDaQxGCVQNrXEv
          stance: supports
          locator: CBDB:126686
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126686）
          source: &a1
            id: s_apmmDsyfoDaQxGCVQNrXEv
            source_type: api_record
            title: 中国历代人物传记资料库：王崇文（CBDB 126686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126686&o=json
            external_identifier: CBDB:126686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.123Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Gxg7X6z6uPzbQx8EWZWz3H
        subject_person_id: p_skjKvTKbz5aUC8X3W9ytWH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1468年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_26xNEzU56L12YnG9WdR7Eg
          claim_id: c_Gxg7X6z6uPzbQx8EWZWz3H
          source_id: s_apmmDsyfoDaQxGCVQNrXEv
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
        id: c_wjXMfuqVebqhDb1QHHne1t
        subject_person_id: p_skjKvTKbz5aUC8X3W9ytWH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1520年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fw7KKPUFZb3kijM4bgk1o4
          claim_id: c_wjXMfuqVebqhDb1QHHne1t
          source_id: s_apmmDsyfoDaQxGCVQNrXEv
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
        id: c_3q3cCwJMzNu7TDPfZRGAHX
        subject_person_id: p_skjKvTKbz5aUC8X3W9ytWH
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
        - id: cs_rUtGjs5BHADCkQAjFb1YJz
          claim_id: c_3q3cCwJMzNu7TDPfZRGAHX
          source_id: s_apmmDsyfoDaQxGCVQNrXEv
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

# 王崇文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇文 | accepted |
| birth.date | 1468年 | accepted |
| death.date | 1520年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王崇文（CBDB 126686）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126686&o=json)
