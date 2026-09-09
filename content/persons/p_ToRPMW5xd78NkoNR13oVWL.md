---
schema: wang-person/v1
id: p_ToRPMW5xd78NkoNR13oVWL
status: active
merged_into: null
display_name: 王廪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PTXpcx7DPbQaXNRg99vqVT
        subject_person_id: p_ToRPMW5xd78NkoNR13oVWL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廪
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7ey3T3sMdNkpt8K6D8xBxE
          claim_id: c_PTXpcx7DPbQaXNRg99vqVT
          source_id: s_2diqPLgDk6PNerSZ5NzB14
          stance: supports
          locator: CBDB:169177
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（169177）
          source: &a1
            id: s_2diqPLgDk6PNerSZ5NzB14
            source_type: api_record
            title: 中国历代人物传记资料库：王廪（CBDB 169177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169177&o=json
            external_identifier: CBDB:169177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.011Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_d5DSconMjtCrRy6KF65muP
        subject_person_id: p_ToRPMW5xd78NkoNR13oVWL
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 790年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DPyWgMxb4AKHe9Co6EDB7L
          claim_id: c_d5DSconMjtCrRy6KF65muP
          source_id: s_2diqPLgDk6PNerSZ5NzB14
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
        id: c_AU7782cLzhBJfq4AQGdoCP
        subject_person_id: p_ToRPMW5xd78NkoNR13oVWL
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
        - id: cs_zKVwpdXBML6p5m9Jtw4GJq
          claim_id: c_AU7782cLzhBJfq4AQGdoCP
          source_id: s_2diqPLgDk6PNerSZ5NzB14
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

# 王廪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廪 | accepted |
| death.date | 790年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廪（CBDB 169177）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169177&o=json)
