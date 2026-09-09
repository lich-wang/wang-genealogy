---
schema: wang-person/v1
id: p_1tiXcZUutpwRvgyKdvNJ5N
status: active
merged_into: null
display_name: 王國輔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qasd1R99owxNGq238A82Ra
        subject_person_id: p_1tiXcZUutpwRvgyKdvNJ5N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PdpHCYqrUPJGTo9VtBHgJD
          claim_id: c_qasd1R99owxNGq238A82Ra
          source_id: s_4MFf12mWfJZNzD2jAuqwd1
          stance: supports
          locator: CBDB:64838
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（64838）
          source: &a1
            id: s_4MFf12mWfJZNzD2jAuqwd1
            source_type: api_record
            title: 中国历代人物传记资料库：王國輔（CBDB 64838）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=64838&o=json
            external_identifier: CBDB:64838
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.930Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_sUZjt8UsNNBkkgi3HDSNMN
        subject_person_id: p_1tiXcZUutpwRvgyKdvNJ5N
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1783年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ofgcDnERkMcy4HoUCsKWan
          claim_id: c_sUZjt8UsNNBkkgi3HDSNMN
          source_id: s_4MFf12mWfJZNzD2jAuqwd1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J5Kuz8CAy6QJYhnoD4Z74D
        subject_person_id: p_1tiXcZUutpwRvgyKdvNJ5N
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
        - id: cs_E7ESMEhCrJKWUJz4UkFpD3
          claim_id: c_J5Kuz8CAy6QJYhnoD4Z74D
          source_id: s_4MFf12mWfJZNzD2jAuqwd1
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

# 王國輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國輔 | accepted |
| birth.date | 1783年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國輔（CBDB 64838）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=64838&o=json)
