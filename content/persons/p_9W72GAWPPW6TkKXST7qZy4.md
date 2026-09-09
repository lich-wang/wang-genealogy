---
schema: wang-person/v1
id: p_9W72GAWPPW6TkKXST7qZy4
status: active
merged_into: null
display_name: 王端冕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Fa35fg7MDFsZzNXncHWDNN
        subject_person_id: p_9W72GAWPPW6TkKXST7qZy4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端冕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f6JAABEu7kjM5sHih7DE3x
          claim_id: c_Fa35fg7MDFsZzNXncHWDNN
          source_id: s_ZK8A9bc6X976d4zRrreync
          stance: supports
          locator: CBDB:68230
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68230）
          source: &a1
            id: s_ZK8A9bc6X976d4zRrreync
            source_type: api_record
            title: 中国历代人物传记资料库：王端冕（CBDB 68230）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68230&o=json
            external_identifier: CBDB:68230
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.098Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_1638JTkLmrxFQrb9N84YC1
        subject_person_id: p_9W72GAWPPW6TkKXST7qZy4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1642年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UdRX349KmM5nSEFYxqZ8d2
          claim_id: c_1638JTkLmrxFQrb9N84YC1
          source_id: s_ZK8A9bc6X976d4zRrreync
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
        id: c_3Um9YXNL93uyte3HkwsK68
        subject_person_id: p_9W72GAWPPW6TkKXST7qZy4
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
        - id: cs_WKtRNKo1ZksQ6ZsjYe1cyV
          claim_id: c_3Um9YXNL93uyte3HkwsK68
          source_id: s_ZK8A9bc6X976d4zRrreync
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

# 王端冕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王端冕 | accepted |
| death.date | 1642年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王端冕（CBDB 68230）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68230&o=json)
