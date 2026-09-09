---
schema: wang-person/v1
id: p_xfDhB8Jfg4zv1oMC6yg1Mf
status: active
merged_into: null
display_name: 王源
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SA16NBPYDoZSJL2GdJ7xRC
        subject_person_id: p_xfDhB8Jfg4zv1oMC6yg1Mf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uWunYXy8UrxSfx137JgqqK
          claim_id: c_SA16NBPYDoZSJL2GdJ7xRC
          source_id: s_6wULpnPApGV4GCqiW76CRY
          stance: supports
          locator: CBDB:502509
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（502509）
          source: &a1
            id: s_6wULpnPApGV4GCqiW76CRY
            source_type: api_record
            title: 中国历代人物传记资料库：王源（CBDB 502509）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=502509&o=json
            external_identifier: CBDB:502509
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.874Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fuDeg8J1WdvxXWmxethiAq
        subject_person_id: p_xfDhB8Jfg4zv1oMC6yg1Mf
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
        - id: cs_jWa4aJ4SQMtoi4gS3SHYbc
          claim_id: c_fuDeg8J1WdvxXWmxethiAq
          source_id: s_6wULpnPApGV4GCqiW76CRY
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

# 王源

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王源 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王源（CBDB 502509）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=502509&o=json)
