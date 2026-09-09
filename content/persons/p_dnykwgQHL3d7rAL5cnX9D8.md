---
schema: wang-person/v1
id: p_dnykwgQHL3d7rAL5cnX9D8
status: active
merged_into: null
display_name: 王象震
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sgrkPF8jgg8aY5n6UB26UT
        subject_person_id: p_dnykwgQHL3d7rAL5cnX9D8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象震
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Wey1sQQH4Uh94WNRyEsBme
          claim_id: c_sgrkPF8jgg8aY5n6UB26UT
          source_id: s_T7XD5ByvaHvYwNsgeCZ2iY
          stance: supports
          locator: CBDB:330756
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（330756）
          source: &a1
            id: s_T7XD5ByvaHvYwNsgeCZ2iY
            source_type: api_record
            title: 中国历代人物传记资料库：王象震（CBDB 330756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330756&o=json
            external_identifier: CBDB:330756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.358Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Z5fWQr56rjck8sbvqaw6B3
        subject_person_id: p_dnykwgQHL3d7rAL5cnX9D8
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
        - id: cs_gMmDzuZEBh3dL7YrBxoDCz
          claim_id: c_Z5fWQr56rjck8sbvqaw6B3
          source_id: s_T7XD5ByvaHvYwNsgeCZ2iY
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

# 王象震

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王象震 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王象震（CBDB 330756）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330756&o=json)
