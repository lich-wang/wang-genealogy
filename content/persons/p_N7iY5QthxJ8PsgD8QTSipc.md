---
schema: wang-person/v1
id: p_N7iY5QthxJ8PsgD8QTSipc
status: active
merged_into: null
display_name: 王垂訓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hEMKym3p6cNjCD5iGZJfQt
        subject_person_id: p_N7iY5QthxJ8PsgD8QTSipc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王垂訓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nYWc9gDsJdRBx6Jt8E6wZB
          claim_id: c_hEMKym3p6cNjCD5iGZJfQt
          source_id: s_vBBEGRoAW88fk3dK8JtjaD
          stance: supports
          locator: CBDB:527020
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（527020）
          source: &a1
            id: s_vBBEGRoAW88fk3dK8JtjaD
            source_type: api_record
            title: 中国历代人物传记资料库：王垂訓（CBDB 527020）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527020&o=json
            external_identifier: CBDB:527020
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.337Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_baSfaH38LibKwFJKQqx3si
        subject_person_id: p_N7iY5QthxJ8PsgD8QTSipc
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
        - id: cs_HySE3r7vKjZL9RYU9zNi3P
          claim_id: c_baSfaH38LibKwFJKQqx3si
          source_id: s_vBBEGRoAW88fk3dK8JtjaD
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

# 王垂訓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王垂訓 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王垂訓（CBDB 527020）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527020&o=json)
