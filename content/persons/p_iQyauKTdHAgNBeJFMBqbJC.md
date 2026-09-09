---
schema: wang-person/v1
id: p_iQyauKTdHAgNBeJFMBqbJC
status: active
merged_into: null
display_name: 王敏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jDiXVk5Ed8tB5KNd77av3d
        subject_person_id: p_iQyauKTdHAgNBeJFMBqbJC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qrDUVGtJEmGp6b3khaLFvc
          claim_id: c_jDiXVk5Ed8tB5KNd77av3d
          source_id: s_4v3ZKeVV1g7WtEMo9dr61y
          stance: supports
          locator: CBDB:126699
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126699）
          source: &a1
            id: s_4v3ZKeVV1g7WtEMo9dr61y
            source_type: api_record
            title: 中国历代人物传记资料库：王敏（CBDB 126699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126699&o=json
            external_identifier: CBDB:126699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.135Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ni57YKpnTicRC3Rsi76yNh
        subject_person_id: p_iQyauKTdHAgNBeJFMBqbJC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1414年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uNXs9NMW8YahgDjgsDdvAt
          claim_id: c_ni57YKpnTicRC3Rsi76yNh
          source_id: s_4v3ZKeVV1g7WtEMo9dr61y
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
        id: c_ziTvUJKFAMtQp2UzD4DUJJ
        subject_person_id: p_iQyauKTdHAgNBeJFMBqbJC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1485年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T5YoFqGXr9muvMqoPKapU6
          claim_id: c_ziTvUJKFAMtQp2UzD4DUJJ
          source_id: s_4v3ZKeVV1g7WtEMo9dr61y
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
        id: c_Gc2e6Rc3AEKp565cqQ5AAM
        subject_person_id: p_iQyauKTdHAgNBeJFMBqbJC
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
        - id: cs_PXjBuA78Dt5pUfih66Hif2
          claim_id: c_Gc2e6Rc3AEKp565cqQ5AAM
          source_id: s_4v3ZKeVV1g7WtEMo9dr61y
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

# 王敏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敏 | accepted |
| birth.date | 1414年 | accepted |
| death.date | 1485年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敏（CBDB 126699）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126699&o=json)
