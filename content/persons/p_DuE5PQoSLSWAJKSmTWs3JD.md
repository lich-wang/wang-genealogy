---
schema: wang-person/v1
id: p_DuE5PQoSLSWAJKSmTWs3JD
status: active
merged_into: null
display_name: 王作舟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HXMtuUUqNvUM7Ne9reV5wD
        subject_person_id: p_DuE5PQoSLSWAJKSmTWs3JD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王作舟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EewFVuDDQ1pRtJkFjqwv6N
          claim_id: c_HXMtuUUqNvUM7Ne9reV5wD
          source_id: s_WuzF9ww45VTj44gZz9eNc5
          stance: supports
          locator: CBDB:342446
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342446）
          source: &a1
            id: s_WuzF9ww45VTj44gZz9eNc5
            source_type: api_record
            title: 中国历代人物传记资料库：王作舟（CBDB 342446）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342446&o=json
            external_identifier: CBDB:342446
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.935Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iuY5MF33z6FNDn8Lzq6j3K
        subject_person_id: p_DuE5PQoSLSWAJKSmTWs3JD
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
        - id: cs_bxrCp1y666scgQUDojrgSr
          claim_id: c_iuY5MF33z6FNDn8Lzq6j3K
          source_id: s_WuzF9ww45VTj44gZz9eNc5
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

# 王作舟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王作舟 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王作舟（CBDB 342446）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342446&o=json)
