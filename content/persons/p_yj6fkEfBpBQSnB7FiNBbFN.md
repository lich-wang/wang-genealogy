---
schema: wang-person/v1
id: p_yj6fkEfBpBQSnB7FiNBbFN
status: active
merged_into: null
display_name: 王文某
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eykSW7rQNNH6dtuZn2Spgt
        subject_person_id: p_yj6fkEfBpBQSnB7FiNBbFN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文某
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_73gEka1rEh1LrAHS2YGhYx
          claim_id: c_eykSW7rQNNH6dtuZn2Spgt
          source_id: s_Mz3KMJLpFJmtPi6Ho2JMHK
          stance: supports
          locator: CBDB:278851
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（278851）
          source: &a1
            id: s_Mz3KMJLpFJmtPi6Ho2JMHK
            source_type: api_record
            title: 中国历代人物传记资料库：王文某（CBDB 278851）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278851&o=json
            external_identifier: CBDB:278851
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.971Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9QpuB3Xt28bXm3Hpy3993Q
        subject_person_id: p_yj6fkEfBpBQSnB7FiNBbFN
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
        - id: cs_1KFUvr4jCM7j4ecs62jTuF
          claim_id: c_9QpuB3Xt28bXm3Hpy3993Q
          source_id: s_Mz3KMJLpFJmtPi6Ho2JMHK
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

# 王文某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文某 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文某（CBDB 278851）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278851&o=json)
