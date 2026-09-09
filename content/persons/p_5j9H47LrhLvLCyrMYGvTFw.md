---
schema: wang-person/v1
id: p_5j9H47LrhLvLCyrMYGvTFw
status: active
merged_into: null
display_name: 王文燦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w9CB5gqWBwxAEFDFJtnLKF
        subject_person_id: p_5j9H47LrhLvLCyrMYGvTFw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文燦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UVQQ6P4Gt8wthWuQMhN61C
          claim_id: c_w9CB5gqWBwxAEFDFJtnLKF
          source_id: s_k6BBeWqtoL1J27YomP9bnb
          stance: supports
          locator: CBDB:501693
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（501693）
          source: &a1
            id: s_k6BBeWqtoL1J27YomP9bnb
            source_type: api_record
            title: 中国历代人物传记资料库：王文燦（CBDB 501693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=501693&o=json
            external_identifier: CBDB:501693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.850Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fUEjSPEHsCVmibR2FA6rqK
        subject_person_id: p_5j9H47LrhLvLCyrMYGvTFw
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
        - id: cs_Cdfo1wkKsG4d2zByApcZF7
          claim_id: c_fUEjSPEHsCVmibR2FA6rqK
          source_id: s_k6BBeWqtoL1J27YomP9bnb
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

# 王文燦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文燦 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文燦（CBDB 501693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=501693&o=json)
