---
schema: wang-person/v1
id: p_nkWyHwiFEDv5V7hhY7wDyM
status: active
merged_into: null
display_name: 王允中
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LtmxQqFXecEnf41xJhKer3
        subject_person_id: p_nkWyHwiFEDv5V7hhY7wDyM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HY69h171KsqFho8DQt9LrF
          claim_id: c_LtmxQqFXecEnf41xJhKer3
          source_id: s_QrsEEvXqaPjrmbKJGgdb8y
          stance: supports
          locator: CBDB:279337
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279337）
          source: &a1
            id: s_QrsEEvXqaPjrmbKJGgdb8y
            source_type: api_record
            title: 中国历代人物传记资料库：王允中（CBDB 279337）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279337&o=json
            external_identifier: CBDB:279337
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.977Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yNF1U84LvcpogeZjYiZ97A
        subject_person_id: p_nkWyHwiFEDv5V7hhY7wDyM
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
        - id: cs_GBP7R3PuVLfJ8YxZ8BWwHe
          claim_id: c_yNF1U84LvcpogeZjYiZ97A
          source_id: s_QrsEEvXqaPjrmbKJGgdb8y
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
  descendants:
    - claim:
        id: c_C03lInwGysmqXFX9bmow6F
        subject_person_id: p_nkWyHwiFEDv5V7hhY7wDyM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kS75cqd3Wh2NjJNrFJL2j4
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BETSktlDOu46IaD9RrpoPx
          claim_id: c_C03lInwGysmqXFX9bmow6F
          source_id: s_LyDXjGHrEMFf51wBwew7nv
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第二百三十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LyDXjGHrEMFf51wBwew7nv
            source_type: api_record
            title: 中国历代人物传记资料库：王遵（CBDB 201860）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201860&o=json
            external_identifier: CBDB:201860
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.697Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kS75cqd3Wh2NjJNrFJL2j4
        status: active
        display_name: 王遵
        merged_into_person_id: null
  other: []
---

# 王允中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王允中 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_kS75cqd3Wh2NjJNrFJL2j4 | 王遵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王允中（CBDB 279337）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279337&o=json)
- [中国历代人物传记资料库：王遵（CBDB 201860）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201860&o=json)
