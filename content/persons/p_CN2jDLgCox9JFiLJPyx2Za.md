---
schema: wang-person/v1
id: p_CN2jDLgCox9JFiLJPyx2Za
status: active
merged_into: null
display_name: 王鎮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d1ypY2pNrAT58awuPqrVBV
        subject_person_id: p_CN2jDLgCox9JFiLJPyx2Za
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mmHJwG8LTZ5H2ePFMNb89L
          claim_id: c_d1ypY2pNrAT58awuPqrVBV
          source_id: s_J95sa3D4knKZ2APmyRXNg9
          stance: supports
          locator: CBDB:284296
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（284296）
          source: &a1
            id: s_J95sa3D4knKZ2APmyRXNg9
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 284296）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284296&o=json
            external_identifier: CBDB:284296
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.197Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WwHRUbX3iaPaJxLXjEcq7L
        subject_person_id: p_CN2jDLgCox9JFiLJPyx2Za
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
        - id: cs_jG6tZ6FTYwqYteRxWYsrCM
          claim_id: c_WwHRUbX3iaPaJxLXjEcq7L
          source_id: s_J95sa3D4knKZ2APmyRXNg9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c__aZxU1BR7Wf8_Cq1xfI2uT
        subject_person_id: p_CN2jDLgCox9JFiLJPyx2Za
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3VWyJNWMm17kXtvGcMVL5b
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nqDcwomowXtBuBN0weBMsm
          claim_id: c__aZxU1BR7Wf8_Cq1xfI2uT
          source_id: s_LMA8xHJ4EXr524gv8VeY3b
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LMA8xHJ4EXr524gv8VeY3b
            source_type: api_record
            title: 中国历代人物传记资料库：王密（CBDB 202150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202150&o=json
            external_identifier: CBDB:202150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.725Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3VWyJNWMm17kXtvGcMVL5b
        status: active
        display_name: 王密
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鎮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎮 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3VWyJNWMm17kXtvGcMVL5b | 王密 | accepted |

## 外部来源

- [中国历代人物传记资料库：王密（CBDB 202150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202150&o=json)
- [中国历代人物传记资料库：王鎮（CBDB 284296）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284296&o=json)
