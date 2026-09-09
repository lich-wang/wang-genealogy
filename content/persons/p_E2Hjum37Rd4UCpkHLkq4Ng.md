---
schema: wang-person/v1
id: p_E2Hjum37Rd4UCpkHLkq4Ng
status: active
merged_into: null
display_name: 王輪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_e5a8tJxFiSxXAoMVpkJ9iA
        subject_person_id: p_E2Hjum37Rd4UCpkHLkq4Ng
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LYTXNQzzqK9JShM3eMLh67
          claim_id: c_e5a8tJxFiSxXAoMVpkJ9iA
          source_id: s_sR9K8cQH7nzPMLJgJ9qY6t
          stance: supports
          locator: CBDB:126803
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126803）
          source: &a1
            id: s_sR9K8cQH7nzPMLJgJ9qY6t
            source_type: api_record
            title: 中国历代人物传记资料库：王輪（CBDB 126803）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126803&o=json
            external_identifier: CBDB:126803
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.215Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QLC4TDcapwmh3LyexFsJVs
        subject_person_id: p_E2Hjum37Rd4UCpkHLkq4Ng
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1507年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GDq4wKzMUL7jK6QRTYMDQJ
          claim_id: c_QLC4TDcapwmh3LyexFsJVs
          source_id: s_sR9K8cQH7nzPMLJgJ9qY6t
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
        id: c_ZgRBy3YZsTe9fgbFALU3hS
        subject_person_id: p_E2Hjum37Rd4UCpkHLkq4Ng
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1581年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zLW472zoBPpxYrV8L7AaeC
          claim_id: c_ZgRBy3YZsTe9fgbFALU3hS
          source_id: s_sR9K8cQH7nzPMLJgJ9qY6t
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
        id: c_qdwSfVR8k2QrqdfAE9ye2P
        subject_person_id: p_E2Hjum37Rd4UCpkHLkq4Ng
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
        - id: cs_RT1AM55bK8bqC3AycbBwtC
          claim_id: c_qdwSfVR8k2QrqdfAE9ye2P
          source_id: s_sR9K8cQH7nzPMLJgJ9qY6t
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

# 王輪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輪 | accepted |
| birth.date | 1507年 | accepted |
| death.date | 1581年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王輪（CBDB 126803）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126803&o=json)
