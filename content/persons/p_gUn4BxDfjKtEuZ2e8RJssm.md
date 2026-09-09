---
schema: wang-person/v1
id: p_gUn4BxDfjKtEuZ2e8RJssm
status: active
merged_into: null
display_name: 王在廷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hLT6wqLB92iygm2azMq3F2
        subject_person_id: p_gUn4BxDfjKtEuZ2e8RJssm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王在廷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wHGuLLk2ykwUiD7jBRkCDT
          claim_id: c_hLT6wqLB92iygm2azMq3F2
          source_id: s_BpyfdDJx9Wd17kSrhKBJSj
          stance: supports
          locator: CBDB:636684
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636684）
          source: &a1
            id: s_BpyfdDJx9Wd17kSrhKBJSj
            source_type: api_record
            title: 中国历代人物传记资料库：王在廷（CBDB 636684）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636684&o=json
            external_identifier: CBDB:636684
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.068Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p3MrjjPMQT79p9bYDF5mXN
        subject_person_id: p_gUn4BxDfjKtEuZ2e8RJssm
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
        - id: cs_jZHxUbS3nzusBvbbh7GAGN
          claim_id: c_p3MrjjPMQT79p9bYDF5mXN
          source_id: s_BpyfdDJx9Wd17kSrhKBJSj
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

# 王在廷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王在廷 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王在廷（CBDB 636684）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636684&o=json)
