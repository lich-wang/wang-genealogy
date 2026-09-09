---
schema: wang-person/v1
id: p_SVNZL8P3EB13LuNV5sxppY
status: active
merged_into: null
display_name: 王天爵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8uQnpxkykSgnD4ZKkSsJpw
        subject_person_id: p_SVNZL8P3EB13LuNV5sxppY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天爵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D9GUtBLT5SEzrKmiVsKxCm
          claim_id: c_8uQnpxkykSgnD4ZKkSsJpw
          source_id: s_EjKdf46TDnTzhRhoN38gKt
          stance: supports
          locator: CBDB:126474
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126474）
          source: &a1
            id: s_EjKdf46TDnTzhRhoN38gKt
            source_type: api_record
            title: 中国历代人物传记资料库：王天爵（CBDB 126474）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126474&o=json
            external_identifier: CBDB:126474
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.978Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Ara9SU14JuoeKAuc7JY8Mc
        subject_person_id: p_SVNZL8P3EB13LuNV5sxppY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1516年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uPhm1dRiP4yycfKg1iSRF3
          claim_id: c_Ara9SU14JuoeKAuc7JY8Mc
          source_id: s_EjKdf46TDnTzhRhoN38gKt
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
        id: c_fsX8EAy4ggKsyHFRQKo22f
        subject_person_id: p_SVNZL8P3EB13LuNV5sxppY
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1600年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uMavc1cWtL8STRT3hqHAEU
          claim_id: c_fsX8EAy4ggKsyHFRQKo22f
          source_id: s_EjKdf46TDnTzhRhoN38gKt
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
        id: c_iSKzEPmhcQ6Hzo9HypwnuK
        subject_person_id: p_SVNZL8P3EB13LuNV5sxppY
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
        - id: cs_ohB22vRNs675XZkU5RhPCA
          claim_id: c_iSKzEPmhcQ6Hzo9HypwnuK
          source_id: s_EjKdf46TDnTzhRhoN38gKt
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

# 王天爵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王天爵 | accepted |
| birth.date | 1516年 | accepted |
| death.date | 1600年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王天爵（CBDB 126474）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126474&o=json)
