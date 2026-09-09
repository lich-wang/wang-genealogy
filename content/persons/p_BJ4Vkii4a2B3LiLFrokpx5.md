---
schema: wang-person/v1
id: p_BJ4Vkii4a2B3LiLFrokpx5
status: active
merged_into: null
display_name: 王能
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xPjY9PRm6Yp4Uabn1BBvRG
        subject_person_id: p_BJ4Vkii4a2B3LiLFrokpx5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王能
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FbG5Q2NjMB7HNdP77My6yC
          claim_id: c_xPjY9PRm6Yp4Uabn1BBvRG
          source_id: s_Cg24pAHXC4yUme5dUS1oZC
          stance: supports
          locator: CBDB:269329
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（269329）
          source: &a1
            id: s_Cg24pAHXC4yUme5dUS1oZC
            source_type: api_record
            title: 中国历代人物传记资料库：王能（CBDB 269329）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269329&o=json
            external_identifier: CBDB:269329
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.812Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oGY9Rm2LjCsrfA61hPKAzF
        subject_person_id: p_BJ4Vkii4a2B3LiLFrokpx5
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
        - id: cs_jFgzNUDH2X9yf5ydaE7FFe
          claim_id: c_oGY9Rm2LjCsrfA61hPKAzF
          source_id: s_Cg24pAHXC4yUme5dUS1oZC
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

# 王能

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王能 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王能（CBDB 269329）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269329&o=json)
