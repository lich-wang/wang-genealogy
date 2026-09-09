---
schema: wang-person/v1
id: p_AiG6QrCQGQD3MPcSgAchU7
status: active
merged_into: null
display_name: 王宸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TPYPBwxeoKA4mb8vCwdx8D
        subject_person_id: p_AiG6QrCQGQD3MPcSgAchU7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UEAu59VDG6YBCvFuDxhLJA
          claim_id: c_TPYPBwxeoKA4mb8vCwdx8D
          source_id: s_489dyY41ue25PHCbu14cLr
          stance: supports
          locator: CBDB:126630
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126630）
          source: &a1
            id: s_489dyY41ue25PHCbu14cLr
            source_type: api_record
            title: 中国历代人物传记资料库：王宸（CBDB 126630）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126630&o=json
            external_identifier: CBDB:126630
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.075Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Fds26mEduBduGMKs15mYN2
        subject_person_id: p_AiG6QrCQGQD3MPcSgAchU7
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
        - id: cs_1m64w6uD1H16VCwgbzVeJ1
          claim_id: c_Fds26mEduBduGMKs15mYN2
          source_id: s_489dyY41ue25PHCbu14cLr
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

# 王宸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宸 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宸（CBDB 126630）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126630&o=json)
