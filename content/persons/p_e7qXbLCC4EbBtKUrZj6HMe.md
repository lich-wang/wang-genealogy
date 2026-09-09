---
schema: wang-person/v1
id: p_e7qXbLCC4EbBtKUrZj6HMe
status: active
merged_into: null
display_name: 王好禮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qp9SnVwHSQFNbV6PUMd2GC
        subject_person_id: p_e7qXbLCC4EbBtKUrZj6HMe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王好禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FJY5teU3GLvpBFBU6M1TBM
          claim_id: c_qp9SnVwHSQFNbV6PUMd2GC
          source_id: s_xZtjRNim45523cx45mFNrZ
          stance: supports
          locator: CBDB:441143
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（441143）
          source: &a1
            id: s_xZtjRNim45523cx45mFNrZ
            source_type: api_record
            title: 中国历代人物传记资料库：王好禮（CBDB 441143）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=441143&o=json
            external_identifier: CBDB:441143
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.105Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_k6jMJg3c8fLcx2M3Ns1bE6
        subject_person_id: p_e7qXbLCC4EbBtKUrZj6HMe
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
        - id: cs_kGQD5Te3fzefGkApbBr8or
          claim_id: c_k6jMJg3c8fLcx2M3Ns1bE6
          source_id: s_xZtjRNim45523cx45mFNrZ
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

# 王好禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王好禮 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王好禮（CBDB 441143）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=441143&o=json)
