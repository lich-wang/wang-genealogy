---
schema: wang-person/v1
id: p_mLyX3JL26uAukPL41XLDwR
status: active
merged_into: null
display_name: 王翱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nWVU9NJGqm9CRVPfS1iBdC
        subject_person_id: p_mLyX3JL26uAukPL41XLDwR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XsibaSihDukDTXVJkv1Bmo
          claim_id: c_nWVU9NJGqm9CRVPfS1iBdC
          source_id: s_8j7p8e3ZvV4dAGxQfa3Lf9
          stance: supports
          locator: CBDB:639905
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639905）
          source: &a1
            id: s_8j7p8e3ZvV4dAGxQfa3Lf9
            source_type: api_record
            title: 中国历代人物传记资料库：王翱（CBDB 639905）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639905&o=json
            external_identifier: CBDB:639905
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.996Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nHQFZCU7JDhXJw1EwE9mVN
        subject_person_id: p_mLyX3JL26uAukPL41XLDwR
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
        - id: cs_82jvdR17xbnNVuLwRwKdQ8
          claim_id: c_nHQFZCU7JDhXJw1EwE9mVN
          source_id: s_8j7p8e3ZvV4dAGxQfa3Lf9
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

# 王翱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翱 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翱（CBDB 639905）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639905&o=json)
