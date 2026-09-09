---
schema: wang-person/v1
id: p_fFMkny2UpMHX8BJ8kt9fCf
status: active
merged_into: null
display_name: 王庭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hpaGm1RYC5F7qR3NsJ5DqM
        subject_person_id: p_fFMkny2UpMHX8BJ8kt9fCf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_udf4zLKGduoqBcMF6LgE1P
          claim_id: c_hpaGm1RYC5F7qR3NsJ5DqM
          source_id: s_Lavp7h2YCbwNwqTrb83sY9
          stance: supports
          locator: CBDB:126633
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126633）
          source: &a1
            id: s_Lavp7h2YCbwNwqTrb83sY9
            source_type: api_record
            title: 中国历代人物传记资料库：王庭（CBDB 126633）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126633&o=json
            external_identifier: CBDB:126633
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.076Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FJsq8uzJrUJSDPNn3g1miY
        subject_person_id: p_fFMkny2UpMHX8BJ8kt9fCf
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
        - id: cs_BxJcTQgjtLK7cLZzy1MegB
          claim_id: c_FJsq8uzJrUJSDPNn3g1miY
          source_id: s_Lavp7h2YCbwNwqTrb83sY9
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

# 王庭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庭 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王庭（CBDB 126633）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126633&o=json)
