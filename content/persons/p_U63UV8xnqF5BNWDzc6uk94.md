---
schema: wang-person/v1
id: p_U63UV8xnqF5BNWDzc6uk94
status: active
merged_into: null
display_name: 王昊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c3hnJmFeC8s6D6Kywf3qbY
        subject_person_id: p_U63UV8xnqF5BNWDzc6uk94
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1M8eMDp1MaQp6TFjidXVhK
          claim_id: c_c3hnJmFeC8s6D6Kywf3qbY
          source_id: s_BDuEmQV7fxoSz2wnhecBQd
          stance: supports
          locator: CBDB:257029
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（257029）
          source: &a1
            id: s_BDuEmQV7fxoSz2wnhecBQd
            source_type: api_record
            title: 中国历代人物传记资料库：王昊（CBDB 257029）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257029&o=json
            external_identifier: CBDB:257029
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.401Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jceRhZwB9ranMnrfzgA3wf
        subject_person_id: p_U63UV8xnqF5BNWDzc6uk94
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
        - id: cs_o11ENMsqC8uSRz5MFvm4F5
          claim_id: c_jceRhZwB9ranMnrfzgA3wf
          source_id: s_BDuEmQV7fxoSz2wnhecBQd
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

# 王昊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昊 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昊（CBDB 257029）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257029&o=json)
