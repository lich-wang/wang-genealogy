---
schema: wang-person/v1
id: p_CFzJNjTesw3eQjmKKBs1D4
status: active
merged_into: null
display_name: 王會
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FirzD5fPQwDH9nFCHdseD4
        subject_person_id: p_CFzJNjTesw3eQjmKKBs1D4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王會
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aTUV3bZqtCZjNvmUdVQXM3
          claim_id: c_FirzD5fPQwDH9nFCHdseD4
          source_id: s_YNf7CJ7wqxU3qQAKPTiEun
          stance: supports
          locator: CBDB:278413
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（278413）
          source: &a1
            id: s_YNf7CJ7wqxU3qQAKPTiEun
            source_type: api_record
            title: 中国历代人物传记资料库：王會（CBDB 278413）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278413&o=json
            external_identifier: CBDB:278413
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.965Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tP3c8s9ZqDxfQMsY8UwHov
        subject_person_id: p_CFzJNjTesw3eQjmKKBs1D4
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
        - id: cs_J7LMMnEpFcMtZH43Kmxbi3
          claim_id: c_tP3c8s9ZqDxfQMsY8UwHov
          source_id: s_YNf7CJ7wqxU3qQAKPTiEun
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

# 王會

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王會 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王會（CBDB 278413）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278413&o=json)
