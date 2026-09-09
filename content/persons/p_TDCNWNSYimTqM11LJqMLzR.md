---
schema: wang-person/v1
id: p_TDCNWNSYimTqM11LJqMLzR
status: active
merged_into: null
display_name: 王汾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D245sV5t2aNYjTLfTJNACy
        subject_person_id: p_TDCNWNSYimTqM11LJqMLzR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jegM2aCHvm8h5f3KYVT8iu
          claim_id: c_D245sV5t2aNYjTLfTJNACy
          source_id: s_x1C1bvSCUt4QC37QXmKSxq
          stance: supports
          locator: CBDB:457469
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（457469）
          source: &a1
            id: s_x1C1bvSCUt4QC37QXmKSxq
            source_type: api_record
            title: 中国历代人物传记资料库：王汾（CBDB 457469）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=457469&o=json
            external_identifier: CBDB:457469
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.607Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oFvJKPV47DL7fJ7DddZD6d
        subject_person_id: p_TDCNWNSYimTqM11LJqMLzR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vkWpGrw1QCwBbMEP39pARw
          claim_id: c_oFvJKPV47DL7fJ7DddZD6d
          source_id: s_x1C1bvSCUt4QC37QXmKSxq
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

# 王汾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汾 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汾（CBDB 457469）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=457469&o=json)
