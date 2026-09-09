---
schema: wang-person/v1
id: p_CrAB1gUUZ2MZajHkcUL7E9
status: active
merged_into: null
display_name: 王靜波
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9hcwfAwZhxrW2K4zVHEvLz
        subject_person_id: p_CrAB1gUUZ2MZajHkcUL7E9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靜波
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bdw8fnZExBqA2g2mRb8gY6
          claim_id: c_9hcwfAwZhxrW2K4zVHEvLz
          source_id: s_GQyPQD2L96HMxYAX4xudZ5
          stance: supports
          locator: CBDB:640852
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640852）
          source: &a1
            id: s_GQyPQD2L96HMxYAX4xudZ5
            source_type: api_record
            title: 中国历代人物传记资料库：王靜波（CBDB 640852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640852&o=json
            external_identifier: CBDB:640852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.391Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_96PjY7s4zN7rMeEfmv6ryd
        subject_person_id: p_CrAB1gUUZ2MZajHkcUL7E9
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
        - id: cs_MypbK2CrXDd7sAeCXJCURw
          claim_id: c_96PjY7s4zN7rMeEfmv6ryd
          source_id: s_GQyPQD2L96HMxYAX4xudZ5
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

# 王靜波

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王靜波 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王靜波（CBDB 640852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640852&o=json)
