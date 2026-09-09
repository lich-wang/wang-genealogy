---
schema: wang-person/v1
id: p_uJFxbR4mUxQ4686eYcv41g
status: active
merged_into: null
display_name: 王公升
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VE9qGJdbKV9H3mMbLW6yWC
        subject_person_id: p_uJFxbR4mUxQ4686eYcv41g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公升
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Jg3GCgRqGm7sa9FBz4kMxB
          claim_id: c_VE9qGJdbKV9H3mMbLW6yWC
          source_id: s_o3kRiMNjBbKoFu8BVT1Lea
          stance: supports
          locator: CBDB:694519
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（694519）
          source: &a1
            id: s_o3kRiMNjBbKoFu8BVT1Lea
            source_type: api_record
            title: 中国历代人物传记资料库：王公升（CBDB 694519）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694519&o=json
            external_identifier: CBDB:694519
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.523Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yAeAaiHyuu2FBR2Kd3zQS2
        subject_person_id: p_uJFxbR4mUxQ4686eYcv41g
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
        - id: cs_Rzo4Mqu8rJY8WMQxq7YUWm
          claim_id: c_yAeAaiHyuu2FBR2Kd3zQS2
          source_id: s_o3kRiMNjBbKoFu8BVT1Lea
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

# 王公升

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王公升 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王公升（CBDB 694519）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694519&o=json)
