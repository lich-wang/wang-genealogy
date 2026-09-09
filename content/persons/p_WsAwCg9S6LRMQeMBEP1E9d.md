---
schema: wang-person/v1
id: p_WsAwCg9S6LRMQeMBEP1E9d
status: active
merged_into: null
display_name: 王嘉祿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8XRUyWKmDoRcVBEwBeo6Q3
        subject_person_id: p_WsAwCg9S6LRMQeMBEP1E9d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉祿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G1BwQFRfQw2fXaBQCQmCkE
          claim_id: c_8XRUyWKmDoRcVBEwBeo6Q3
          source_id: s_X7c26VL4ENo8ChB8H4GgX9
          stance: supports
          locator: CBDB:72152
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72152）
          source: &a1
            id: s_X7c26VL4ENo8ChB8H4GgX9
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉祿（CBDB 72152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72152&o=json
            external_identifier: CBDB:72152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.029Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_bw4twxqL51X7JCCtKsd1QS
        subject_person_id: p_WsAwCg9S6LRMQeMBEP1E9d
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1797年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qzC1G81JXkjQjgwHyMUWXg
          claim_id: c_bw4twxqL51X7JCCtKsd1QS
          source_id: s_X7c26VL4ENo8ChB8H4GgX9
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
        id: c_NPrtJPpZjq3aNwM8tVH9sK
        subject_person_id: p_WsAwCg9S6LRMQeMBEP1E9d
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1824年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1c4X31kg8XUh8ENSMSwKgi
          claim_id: c_NPrtJPpZjq3aNwM8tVH9sK
          source_id: s_X7c26VL4ENo8ChB8H4GgX9
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
        id: c_RFbdUxbquWW73MY43kA8ir
        subject_person_id: p_WsAwCg9S6LRMQeMBEP1E9d
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
        - id: cs_gnwQ1FHAy7WGCUdH1pJr8Q
          claim_id: c_RFbdUxbquWW73MY43kA8ir
          source_id: s_X7c26VL4ENo8ChB8H4GgX9
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

# 王嘉祿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉祿 | accepted |
| birth.date | 1797年 | accepted |
| death.date | 1824年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嘉祿（CBDB 72152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72152&o=json)
