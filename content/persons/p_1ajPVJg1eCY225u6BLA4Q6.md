---
schema: wang-person/v1
id: p_1ajPVJg1eCY225u6BLA4Q6
status: active
merged_into: null
display_name: 王霖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tzrB7PvSkLVfZWVDbfVJoE
        subject_person_id: p_1ajPVJg1eCY225u6BLA4Q6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QBVF49x1fpNH1Zx8af1Brs
          claim_id: c_tzrB7PvSkLVfZWVDbfVJoE
          source_id: s_PZ5h5D138QJHEfqFrLCSAH
          stance: supports
          locator: CBDB:688461
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688461）
          source: &a1
            id: s_PZ5h5D138QJHEfqFrLCSAH
            source_type: api_record
            title: 中国历代人物传记资料库：王霖（CBDB 688461）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688461&o=json
            external_identifier: CBDB:688461
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.520Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9tu4xT6pnoKtLEVZfFcNLe
        subject_person_id: p_1ajPVJg1eCY225u6BLA4Q6
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
        - id: cs_q1J1g6ngWAFeVg7HWTRGGL
          claim_id: c_9tu4xT6pnoKtLEVZfFcNLe
          source_id: s_PZ5h5D138QJHEfqFrLCSAH
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

# 王霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王霖 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王霖（CBDB 688461）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688461&o=json)
