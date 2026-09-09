---
schema: wang-person/v1
id: p_aWF5sW3QPdvcFBSS3QPhdU
status: active
merged_into: null
display_name: 王瀛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_p6Bz671W4bSi886iYSNEx8
        subject_person_id: p_aWF5sW3QPdvcFBSS3QPhdU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bW3KSxzM999B7EoQzW2dmi
          claim_id: c_p6Bz671W4bSi886iYSNEx8
          source_id: s_9Pqb575NR3KW8fvt95qy7y
          stance: supports
          locator: CBDB:230034
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（230034）
          source: &a1
            id: s_9Pqb575NR3KW8fvt95qy7y
            source_type: api_record
            title: 中国历代人物传记资料库：王瀛（CBDB 230034）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230034&o=json
            external_identifier: CBDB:230034
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.598Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QR3XUwH64QU43kfW5Gjeyq
        subject_person_id: p_aWF5sW3QPdvcFBSS3QPhdU
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
        - id: cs_JaunPnYcujBUh5Uwt6wQ9X
          claim_id: c_QR3XUwH64QU43kfW5Gjeyq
          source_id: s_9Pqb575NR3KW8fvt95qy7y
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

# 王瀛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瀛 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瀛（CBDB 230034）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230034&o=json)
