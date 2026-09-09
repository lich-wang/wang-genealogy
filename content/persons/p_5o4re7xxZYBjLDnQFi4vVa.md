---
schema: wang-person/v1
id: p_5o4re7xxZYBjLDnQFi4vVa
status: active
merged_into: null
display_name: 王纉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7JhLbbZyA4uNnS4KT7jqCz
        subject_person_id: p_5o4re7xxZYBjLDnQFi4vVa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WGryeusvrWgBQKM9eb59Q6
          claim_id: c_7JhLbbZyA4uNnS4KT7jqCz
          source_id: s_dW46LCgh6UECqxi75g3QVC
          stance: supports
          locator: CBDB:480492
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（480492）
          source: &a1
            id: s_dW46LCgh6UECqxi75g3QVC
            source_type: api_record
            title: 中国历代人物传记资料库：王纉（CBDB 480492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=480492&o=json
            external_identifier: CBDB:480492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.643Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4J9Zm5TZ7mFR1CqTQd7zze
        subject_person_id: p_5o4re7xxZYBjLDnQFi4vVa
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
        - id: cs_ocHC9LEJr3UV8HVwzdT9UA
          claim_id: c_4J9Zm5TZ7mFR1CqTQd7zze
          source_id: s_dW46LCgh6UECqxi75g3QVC
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

# 王纉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王纉 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王纉（CBDB 480492）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=480492&o=json)
