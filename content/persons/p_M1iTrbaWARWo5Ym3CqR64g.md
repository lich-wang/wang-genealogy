---
schema: wang-person/v1
id: p_M1iTrbaWARWo5Ym3CqR64g
status: active
merged_into: null
display_name: 王肅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Nyk5mEh87J2d66TCb8HskJ
        subject_person_id: p_M1iTrbaWARWo5Ym3CqR64g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4yS5Cq7529DdYS3oX6E5o3
          claim_id: c_Nyk5mEh87J2d66TCb8HskJ
          source_id: s_ECdkRGvF8Z97e8SMUNb5uA
          stance: supports
          locator: CBDB:481672
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（481672）
          source: &a1
            id: s_ECdkRGvF8Z97e8SMUNb5uA
            source_type: api_record
            title: 中国历代人物传记资料库：王肅（CBDB 481672）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=481672&o=json
            external_identifier: CBDB:481672
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.694Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ypeQAierLfz7ue8oBe1Fay
        subject_person_id: p_M1iTrbaWARWo5Ym3CqR64g
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
        - id: cs_gmkLsWrdhrqmy7nhYyohQv
          claim_id: c_ypeQAierLfz7ue8oBe1Fay
          source_id: s_ECdkRGvF8Z97e8SMUNb5uA
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

# 王肅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王肅 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王肅（CBDB 481672）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=481672&o=json)
