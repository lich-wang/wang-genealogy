---
schema: wang-person/v1
id: p_dFCaAHJ3Wh6A5sABwRVHDY
status: active
merged_into: null
display_name: 王綰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hjy6iS5Juzep2y8CBY959i
        subject_person_id: p_dFCaAHJ3Wh6A5sABwRVHDY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B1g8HQwssbmP9GUh594M3n
          claim_id: c_hjy6iS5Juzep2y8CBY959i
          source_id: s_2A1Qu8iDoqrj55m6n5xbVP
          stance: supports
          locator: CBDB:333630
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（333630）
          source: &a1
            id: s_2A1Qu8iDoqrj55m6n5xbVP
            source_type: api_record
            title: 中国历代人物传记资料库：王綰（CBDB 333630）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333630&o=json
            external_identifier: CBDB:333630
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.425Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5hHhkWSbAmcwvooP783GNg
        subject_person_id: p_dFCaAHJ3Wh6A5sABwRVHDY
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
        - id: cs_1uQAasDXWum9M9ZtJRtciX
          claim_id: c_5hHhkWSbAmcwvooP783GNg
          source_id: s_2A1Qu8iDoqrj55m6n5xbVP
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

# 王綰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綰 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綰（CBDB 333630）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333630&o=json)
