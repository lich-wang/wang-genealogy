---
schema: wang-person/v1
id: p_C5n97Szs9zUcnWuS651Fqs
status: active
merged_into: null
display_name: 王雲錦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RXmU1P2jCywfC5WFwTyBxb
        subject_person_id: p_C5n97Szs9zUcnWuS651Fqs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲錦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DsmGJpfHVvD1WkHD4FnLbb
          claim_id: c_RXmU1P2jCywfC5WFwTyBxb
          source_id: s_5XMox57GzSpUL7zPsqzS18
          stance: supports
          locator: CBDB:71389
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71389）
          source: &a1
            id: s_5XMox57GzSpUL7zPsqzS18
            source_type: api_record
            title: 中国历代人物传记资料库：王雲錦（CBDB 71389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71389&o=json
            external_identifier: CBDB:71389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.631Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_sgnP5Z7iGosex32gABD8AA
        subject_person_id: p_C5n97Szs9zUcnWuS651Fqs
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1657年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PoBsX4pLQWYRLuS4G3bc5e
          claim_id: c_sgnP5Z7iGosex32gABD8AA
          source_id: s_5XMox57GzSpUL7zPsqzS18
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
        id: c_GeLMGsJrCMnYSVY9LJX9gx
        subject_person_id: p_C5n97Szs9zUcnWuS651Fqs
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1727年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WGPpXTLBZ95ftKdc5DDo1n
          claim_id: c_GeLMGsJrCMnYSVY9LJX9gx
          source_id: s_5XMox57GzSpUL7zPsqzS18
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
        id: c_AgcyFFK6g4qE5o828Jqy73
        subject_person_id: p_C5n97Szs9zUcnWuS651Fqs
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
        - id: cs_9ti7dvc4NhSsnEsk53TQzw
          claim_id: c_AgcyFFK6g4qE5o828Jqy73
          source_id: s_5XMox57GzSpUL7zPsqzS18
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

# 王雲錦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雲錦 | accepted |
| birth.date | 1657年 | accepted |
| death.date | 1727年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雲錦（CBDB 71389）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71389&o=json)
