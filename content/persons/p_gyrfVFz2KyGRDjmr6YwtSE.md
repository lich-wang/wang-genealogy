---
schema: wang-person/v1
id: p_gyrfVFz2KyGRDjmr6YwtSE
status: active
merged_into: null
display_name: 王運昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MJNNgWKykEvCDnxEqsLyaf
        subject_person_id: p_gyrfVFz2KyGRDjmr6YwtSE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王運昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zHfcP6Wo2jQie8C26i6qca
          claim_id: c_MJNNgWKykEvCDnxEqsLyaf
          source_id: s_1uQ6RWAMZA7eMysDwjz5aC
          stance: supports
          locator: CBDB:235995
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（235995）
          source: &a1
            id: s_1uQ6RWAMZA7eMysDwjz5aC
            source_type: api_record
            title: 中国历代人物传记资料库：王運昌（CBDB 235995）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235995&o=json
            external_identifier: CBDB:235995
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.770Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A6wbHHcSG4Rc7S1swDRR8u
        subject_person_id: p_gyrfVFz2KyGRDjmr6YwtSE
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
        - id: cs_gMqdRtEJXCbcCrB75tKHEz
          claim_id: c_A6wbHHcSG4Rc7S1swDRR8u
          source_id: s_1uQ6RWAMZA7eMysDwjz5aC
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

# 王運昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王運昌 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王運昌（CBDB 235995）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235995&o=json)
