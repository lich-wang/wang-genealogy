---
schema: wang-person/v1
id: p_xKtUFyD4ZcmfBNeF37RqMW
status: active
merged_into: null
display_name: 王嶙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QRN2jFEbyD6qFyE6TgvvEf
        subject_person_id: p_xKtUFyD4ZcmfBNeF37RqMW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嶙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KU5xN79xRNM3pGaZ6NoXiy
          claim_id: c_QRN2jFEbyD6qFyE6TgvvEf
          source_id: s_KSH9FgZCn19JFJjiE358uN
          stance: supports
          locator: CBDB:71273
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71273）
          source: &a1
            id: s_KSH9FgZCn19JFJjiE358uN
            source_type: api_record
            title: 中国历代人物传记资料库：王嶙（CBDB 71273）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71273&o=json
            external_identifier: CBDB:71273
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.550Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_nMKMFtwH1Yrm87G3fMnyTP
        subject_person_id: p_xKtUFyD4ZcmfBNeF37RqMW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1605年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qHQ3j6WbMEUYPqXmR8XjPL
          claim_id: c_nMKMFtwH1Yrm87G3fMnyTP
          source_id: s_KSH9FgZCn19JFJjiE358uN
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
        id: c_xmEZVFoFoHzwwgQwULGU99
        subject_person_id: p_xKtUFyD4ZcmfBNeF37RqMW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1671年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z7tDkzzaDDyUYKB4Bqn5cH
          claim_id: c_xmEZVFoFoHzwwgQwULGU99
          source_id: s_KSH9FgZCn19JFJjiE358uN
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
        id: c_o1vyYWurtdSRsC8BiHJzdP
        subject_person_id: p_xKtUFyD4ZcmfBNeF37RqMW
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
        - id: cs_tsyiWgvqFHFjFvJmKK8XLR
          claim_id: c_o1vyYWurtdSRsC8BiHJzdP
          source_id: s_KSH9FgZCn19JFJjiE358uN
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

# 王嶙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嶙 | accepted |
| birth.date | 1605年 | accepted |
| death.date | 1671年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嶙（CBDB 71273）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71273&o=json)
