---
schema: wang-person/v1
id: p_a4wGGRqNyHNujjCFqFrTvN
status: active
merged_into: null
display_name: 王儀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Hr4xBJhRjYCwqKUx32Etb5
        subject_person_id: p_a4wGGRqNyHNujjCFqFrTvN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5iCKsDfiW3oo8xHydmCYxG
          claim_id: c_Hr4xBJhRjYCwqKUx32Etb5
          source_id: s_rWJnk6VDc3wznL1mUj19tm
          stance: supports
          locator: CBDB:68341
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68341）
          source: &a1
            id: s_rWJnk6VDc3wznL1mUj19tm
            source_type: api_record
            title: 中国历代人物传记资料库：王儀（CBDB 68341）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68341&o=json
            external_identifier: CBDB:68341
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.067Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ws6sKXJGMJpxAehvLiD6Ne
        subject_person_id: p_a4wGGRqNyHNujjCFqFrTvN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1482年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nM89PKTJDacuEydzb5Md6a
          claim_id: c_ws6sKXJGMJpxAehvLiD6Ne
          source_id: s_rWJnk6VDc3wznL1mUj19tm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_M2QcPadQp5G5BRFKMJoD94
        subject_person_id: p_a4wGGRqNyHNujjCFqFrTvN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1559年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k525KdWs4USXrW8HHE7Q2c
          claim_id: c_M2QcPadQp5G5BRFKMJoD94
          source_id: s_rWJnk6VDc3wznL1mUj19tm
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
        id: c_x8Jb1fiN5QrJTzMm1a2y8Q
        subject_person_id: p_a4wGGRqNyHNujjCFqFrTvN
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
        - id: cs_YQ3R1qRb4ra9ruzEjD4yL5
          claim_id: c_x8Jb1fiN5QrJTzMm1a2y8Q
          source_id: s_rWJnk6VDc3wznL1mUj19tm
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

# 王儀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儀 | accepted |
| birth.date | 1482年 | accepted |
| death.date | 1559年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王儀（CBDB 68341）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68341&o=json)
