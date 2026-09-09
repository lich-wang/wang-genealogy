---
schema: wang-person/v1
id: p_HPYYkmNEETrV6SW1UZLFZN
status: active
merged_into: null
display_name: 王次張
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_855pL2AfiQPet1yAExfC3u
        subject_person_id: p_HPYYkmNEETrV6SW1UZLFZN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王次張
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CUYtU99xLd6C3o7M5xsv7F
          claim_id: c_855pL2AfiQPet1yAExfC3u
          source_id: s_uwcRXGCfK1z9tGXAat6n8B
          stance: supports
          locator: CBDB:1907
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1907）
          source: &a1
            id: s_uwcRXGCfK1z9tGXAat6n8B
            source_type: api_record
            title: 中国历代人物传记资料库：王次張（CBDB 1907）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1907&o=json
            external_identifier: CBDB:1907
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.387Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fDQX5QCyq98VYjBVKKMUq5
        subject_person_id: p_HPYYkmNEETrV6SW1UZLFZN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1108年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qep62oK1oGxKX6o1JJDFgU
          claim_id: c_fDQX5QCyq98VYjBVKKMUq5
          source_id: s_uwcRXGCfK1z9tGXAat6n8B
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
        id: c_DD6zLzQBWYyTCdkfYbGQcP
        subject_person_id: p_HPYYkmNEETrV6SW1UZLFZN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1181年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HLvuqe9TCJvQWjXZiN1TM6
          claim_id: c_DD6zLzQBWYyTCdkfYbGQcP
          source_id: s_uwcRXGCfK1z9tGXAat6n8B
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
        id: c_UB316pkmt9cZYNVYLZaA6s
        subject_person_id: p_HPYYkmNEETrV6SW1UZLFZN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CwuB9o3mGpSNJz2mMjYR1g
          claim_id: c_UB316pkmt9cZYNVYLZaA6s
          source_id: s_uwcRXGCfK1z9tGXAat6n8B
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

# 王次張

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王次張 | accepted |
| birth.date | 1108年 | accepted |
| death.date | 1181年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王次張（CBDB 1907）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1907&o=json)
