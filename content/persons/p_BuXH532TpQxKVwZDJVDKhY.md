---
schema: wang-person/v1
id: p_BuXH532TpQxKVwZDJVDKhY
status: active
merged_into: null
display_name: 王應鵬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cCCQK1Sy7b3FzY9obMDdZC
        subject_person_id: p_BuXH532TpQxKVwZDJVDKhY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應鵬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o9KJE22uFPw7NyMfdPtodN
          claim_id: c_cCCQK1Sy7b3FzY9obMDdZC
          source_id: s_UeZNzjSL3uyJXDgWBzmsY3
          stance: supports
          locator: CBDB:68167
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68167）
          source: &a1
            id: s_UeZNzjSL3uyJXDgWBzmsY3
            source_type: api_record
            title: 中国历代人物传记资料库：王應鵬（CBDB 68167）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68167&o=json
            external_identifier: CBDB:68167
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.059Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_yc6NbtFhck9qtWCaqLnCDZ
        subject_person_id: p_BuXH532TpQxKVwZDJVDKhY
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1536年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6RZ1CJ6y9NssKUoWEz7z72
          claim_id: c_yc6NbtFhck9qtWCaqLnCDZ
          source_id: s_UeZNzjSL3uyJXDgWBzmsY3
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
        id: c_RqCYa3KhA1iprvJ11vjKTt
        subject_person_id: p_BuXH532TpQxKVwZDJVDKhY
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
        - id: cs_GyvBcWsSd9y3GU2hh2zEgr
          claim_id: c_RqCYa3KhA1iprvJ11vjKTt
          source_id: s_UeZNzjSL3uyJXDgWBzmsY3
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

# 王應鵬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應鵬 | accepted |
| death.date | 1536年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應鵬（CBDB 68167）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68167&o=json)
