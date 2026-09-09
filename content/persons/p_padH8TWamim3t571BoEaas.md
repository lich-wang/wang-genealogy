---
schema: wang-person/v1
id: p_padH8TWamim3t571BoEaas
status: active
merged_into: null
display_name: 王祖清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E8tLGFyoUdcAcH9b4sgko5
        subject_person_id: p_padH8TWamim3t571BoEaas
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NZ9foxN4wyYU7hh8p1MK1v
          claim_id: c_E8tLGFyoUdcAcH9b4sgko5
          source_id: s_Xi42Cxuat1cwQQFLdr99PQ
          stance: supports
          locator: CBDB:639574
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639574）
          source: &a1
            id: s_Xi42Cxuat1cwQQFLdr99PQ
            source_type: api_record
            title: 中国历代人物传记资料库：王祖清（CBDB 639574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639574&o=json
            external_identifier: CBDB:639574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.976Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iN2Jz6EYMo6rY1XcK96y1C
        subject_person_id: p_padH8TWamim3t571BoEaas
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
        - id: cs_EhaKgLH2LMeRFZEjNHs6Vp
          claim_id: c_iN2Jz6EYMo6rY1XcK96y1C
          source_id: s_Xi42Cxuat1cwQQFLdr99PQ
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

# 王祖清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祖清 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祖清（CBDB 639574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639574&o=json)
