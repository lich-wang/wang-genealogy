---
schema: wang-person/v1
id: p_Ah1SoyZmqog4CSwGSZFed3
status: active
merged_into: null
display_name: 王述
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_X3Vw3AgHmYZ6f5rG9TGzrb
        subject_person_id: p_Ah1SoyZmqog4CSwGSZFed3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王述
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pCZG6HfQdHKknFG7PCXKq7
          claim_id: c_X3Vw3AgHmYZ6f5rG9TGzrb
          source_id: s_aQ2UVT8b9QAWzQN39xE4qY
          stance: supports
          locator: CBDB:260072
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260072）
          source: &a1
            id: s_aQ2UVT8b9QAWzQN39xE4qY
            source_type: api_record
            title: 中国历代人物传记资料库：王述（CBDB 260072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260072&o=json
            external_identifier: CBDB:260072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.474Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rhUDQLNHX5rG9iNvmfYuX9
        subject_person_id: p_Ah1SoyZmqog4CSwGSZFed3
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
        - id: cs_5DgYUUunw8nq3Vk93V4h5e
          claim_id: c_rhUDQLNHX5rG9iNvmfYuX9
          source_id: s_aQ2UVT8b9QAWzQN39xE4qY
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

# 王述

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王述 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王述（CBDB 260072）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260072&o=json)
