---
schema: wang-person/v1
id: p_PgGP8n81XBb5kcs7D54q73
status: active
merged_into: null
display_name: 王直
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M1E7iPePeHW9K82Dpcpk87
        subject_person_id: p_PgGP8n81XBb5kcs7D54q73
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王直
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NT7c6zg6FFYG6RdZgwQD9F
          claim_id: c_M1E7iPePeHW9K82Dpcpk87
          source_id: s_in1hTPavZdVJQK4k8xNZm1
          stance: supports
          locator: CBDB:34493
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（34493）
          source: &a1
            id: s_in1hTPavZdVJQK4k8xNZm1
            source_type: api_record
            title: 中国历代人物传记资料库：王直（CBDB 34493）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34493&o=json
            external_identifier: CBDB:34493
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.086Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Eq2FCHGJVzddaPkeP3DmG3
        subject_person_id: p_PgGP8n81XBb5kcs7D54q73
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1379年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TKY2WgFis3nSoVT1nPmos4
          claim_id: c_Eq2FCHGJVzddaPkeP3DmG3
          source_id: s_in1hTPavZdVJQK4k8xNZm1
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
        id: c_D33anq4JCZ5TDzFvfNhX6d
        subject_person_id: p_PgGP8n81XBb5kcs7D54q73
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1462年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gLwuGg2xCLgqYotjum24zQ
          claim_id: c_D33anq4JCZ5TDzFvfNhX6d
          source_id: s_in1hTPavZdVJQK4k8xNZm1
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
        id: c_T97JVpf5dU5oNk7LAMDyhH
        subject_person_id: p_PgGP8n81XBb5kcs7D54q73
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
        - id: cs_mQqCwPbBdyNknwwDQ58Hg8
          claim_id: c_T97JVpf5dU5oNk7LAMDyhH
          source_id: s_in1hTPavZdVJQK4k8xNZm1
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

# 王直

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王直 | accepted |
| birth.date | 1379年 | accepted |
| death.date | 1462年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王直（CBDB 34493）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34493&o=json)
