---
schema: wang-person/v1
id: p_AWbhYZkLYhbdEbEhHLDAmo
status: active
merged_into: null
display_name: 王珵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TdFd4K91yAzUwM4nYd5pHz
        subject_person_id: p_AWbhYZkLYhbdEbEhHLDAmo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BHY5r59bQ1KAaNw6DZKHkz
          claim_id: c_TdFd4K91yAzUwM4nYd5pHz
          source_id: s_9wkhbtB644EY8bgftSADa7
          stance: supports
          locator: CBDB:263446
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（263446）
          source: &a1
            id: s_9wkhbtB644EY8bgftSADa7
            source_type: api_record
            title: 中国历代人物传记资料库：王珵（CBDB 263446）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263446&o=json
            external_identifier: CBDB:263446
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.624Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JmGnK5F32ZQiP34SJ8KaU1
        subject_person_id: p_AWbhYZkLYhbdEbEhHLDAmo
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
        - id: cs_V3Y5qV7X8Uy9Kc5QBqm2RF
          claim_id: c_JmGnK5F32ZQiP34SJ8KaU1
          source_id: s_9wkhbtB644EY8bgftSADa7
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

# 王珵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珵 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珵（CBDB 263446）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263446&o=json)
