---
schema: wang-person/v1
id: p_den6Qb7fcU9dqdvbGrfnab
status: active
merged_into: null
display_name: 王密
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4WBBigED9hZ7ZQ19kJ8iQs
        subject_person_id: p_den6Qb7fcU9dqdvbGrfnab
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王密
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UuzZKTgKHL4EE3eB3WE7dY
          claim_id: c_4WBBigED9hZ7ZQ19kJ8iQs
          source_id: s_L3nVgXwwtRNfMECV2219FW
          stance: supports
          locator: CBDB:314096
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（314096）
          source: &a1
            id: s_L3nVgXwwtRNfMECV2219FW
            source_type: api_record
            title: 中国历代人物传记资料库：王密（CBDB 314096）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314096&o=json
            external_identifier: CBDB:314096
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.920Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gdNLGDJvme4pTNQijEq4Dq
        subject_person_id: p_den6Qb7fcU9dqdvbGrfnab
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
        - id: cs_5E7aWkGwCq3u7tC2HZ8ypL
          claim_id: c_gdNLGDJvme4pTNQijEq4Dq
          source_id: s_L3nVgXwwtRNfMECV2219FW
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

# 王密

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王密 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王密（CBDB 314096）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314096&o=json)
