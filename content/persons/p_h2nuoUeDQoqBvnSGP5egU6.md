---
schema: wang-person/v1
id: p_h2nuoUeDQoqBvnSGP5egU6
status: active
merged_into: null
display_name: 王一品
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3N6Zi2kFBeCTrGEPgUzu6P
        subject_person_id: p_h2nuoUeDQoqBvnSGP5egU6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一品
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WmcNCDEa1bfKURjoNAt4AF
          claim_id: c_3N6Zi2kFBeCTrGEPgUzu6P
          source_id: s_Akqn19Aqa5UEj1MfJQw2TM
          stance: supports
          locator: CBDB:59888
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（59888）
          source: &a1
            id: s_Akqn19Aqa5UEj1MfJQw2TM
            source_type: api_record
            title: 中国历代人物传记资料库：王一品（CBDB 59888）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59888&o=json
            external_identifier: CBDB:59888
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.835Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_LJZaRXVx1aCK23J1ZyHFEY
        subject_person_id: p_h2nuoUeDQoqBvnSGP5egU6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1654年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Nh7qhjUbkPcQnxBZCmDKMV
          claim_id: c_LJZaRXVx1aCK23J1ZyHFEY
          source_id: s_Akqn19Aqa5UEj1MfJQw2TM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZYZp2mpFY8pNn6vptK4mTU
        subject_person_id: p_h2nuoUeDQoqBvnSGP5egU6
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
        - id: cs_h9RWbPXUR76BvVN6izbBB2
          claim_id: c_ZYZp2mpFY8pNn6vptK4mTU
          source_id: s_Akqn19Aqa5UEj1MfJQw2TM
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

# 王一品

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一品 | accepted |
| death.date | 1654年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一品（CBDB 59888）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59888&o=json)
