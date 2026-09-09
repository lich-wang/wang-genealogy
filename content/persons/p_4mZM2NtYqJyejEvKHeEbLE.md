---
schema: wang-person/v1
id: p_4mZM2NtYqJyejEvKHeEbLE
status: active
merged_into: null
display_name: 王藻鑾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C4u28Vj3nuAezxDo6kn9Nt
        subject_person_id: p_4mZM2NtYqJyejEvKHeEbLE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藻鑾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NEF1BbsJkrZc6r4wEgpm6A
          claim_id: c_C4u28Vj3nuAezxDo6kn9Nt
          source_id: s_G5wZWZMALQ8P9TPza5G6Ff
          stance: supports
          locator: CBDB:640184
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640184）
          source: &a1
            id: s_G5wZWZMALQ8P9TPza5G6Ff
            source_type: api_record
            title: 中国历代人物传记资料库：王藻鑾（CBDB 640184）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640184&o=json
            external_identifier: CBDB:640184
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.176Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hg4RX4hdhkair4JywDLQTg
        subject_person_id: p_4mZM2NtYqJyejEvKHeEbLE
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
        - id: cs_3aAxnU2Jcz4JLt5XJGb1Fq
          claim_id: c_hg4RX4hdhkair4JywDLQTg
          source_id: s_G5wZWZMALQ8P9TPza5G6Ff
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

# 王藻鑾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王藻鑾 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王藻鑾（CBDB 640184）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640184&o=json)
