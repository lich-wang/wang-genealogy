---
schema: wang-person/v1
id: p_ahHARyJNSyo6gV4SwMfZQe
status: active
merged_into: null
display_name: 王蕘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ChL6J5yhjHTey4yRx22js4
        subject_person_id: p_ahHARyJNSyo6gV4SwMfZQe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蕘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_c1Svqoxmy5EZ3M1f61GAai
          claim_id: c_ChL6J5yhjHTey4yRx22js4
          source_id: s_WsiH83HQBDhMjS8VAQ2m1D
          stance: supports
          locator: CBDB:36833
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（36833）
          source: &a1
            id: s_WsiH83HQBDhMjS8VAQ2m1D
            source_type: api_record
            title: 中国历代人物传记资料库：王蕘（CBDB 36833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36833&o=json
            external_identifier: CBDB:36833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.177Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VKwiPrYzWJyE7h5mH7f2HL
        subject_person_id: p_ahHARyJNSyo6gV4SwMfZQe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Tm1pMXMzdpBBa89WqwBNQN
          claim_id: c_VKwiPrYzWJyE7h5mH7f2HL
          source_id: s_WsiH83HQBDhMjS8VAQ2m1D
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

# 王蕘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蕘 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蕘（CBDB 36833）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36833&o=json)
