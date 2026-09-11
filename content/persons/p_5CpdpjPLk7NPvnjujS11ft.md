---
schema: wang-person/v1
id: p_5CpdpjPLk7NPvnjujS11ft
status: active
merged_into: null
display_name: 王大楨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CvYKAQ4TTVrvZKVgYq1Kn3
        subject_person_id: p_5CpdpjPLk7NPvnjujS11ft
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大楨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dVuw3mxRXbuz447TVbh6pC
          claim_id: c_CvYKAQ4TTVrvZKVgYq1Kn3
          source_id: s_cV26wusQWF4F6FyJGgzQjv
          stance: supports
          locator: CBDB:71334
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71334）
          source: &a1
            id: s_cV26wusQWF4F6FyJGgzQjv
            source_type: api_record
            title: 中国历代人物传记资料库：王大楨（CBDB 71334）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71334&o=json
            external_identifier: CBDB:71334
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.148Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_L6wY1pcujZNxLRu9JAmLmg
        subject_person_id: p_5CpdpjPLk7NPvnjujS11ft
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1892年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xA8J8e1QWJghyaTjQLLcq3
          claim_id: c_L6wY1pcujZNxLRu9JAmLmg
          source_id: s_cV26wusQWF4F6FyJGgzQjv
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
        id: c_RQ1y5tx8T3MnFAKotEFGgs
        subject_person_id: p_5CpdpjPLk7NPvnjujS11ft
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1946年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fCyQwQMT6hEQSKFVquUcTp
          claim_id: c_RQ1y5tx8T3MnFAKotEFGgs
          source_id: s_cV26wusQWF4F6FyJGgzQjv
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
        id: c_x3SUf1vCNCE8spbQaCkvLj
        subject_person_id: p_5CpdpjPLk7NPvnjujS11ft
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大楨（1892年—1946年），中華民國人物。籍贯醴陵。（中国历代人物传记资料库 CBDB 71334）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IDMMSyRuHhZAqDNfqzk8hD
          claim_id: c_x3SUf1vCNCE8spbQaCkvLj
          source_id: s_cV26wusQWF4F6FyJGgzQjv
          stance: supports
          locator: CBDB:71334
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

# 王大楨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大楨 | accepted |
| birth.date | 1892年 | accepted |
| death.date | 1946年 | accepted |
| bio.summary | 王大楨（1892年—1946年），中華民國人物。籍贯醴陵。（中国历代人物传记资料库 CBDB 71334） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大楨（CBDB 71334）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71334&o=json)
