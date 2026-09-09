---
schema: wang-person/v1
id: p_iKrmtsKEeW8GRyF5X6yMqg
status: active
merged_into: null
display_name: 王鑑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s16qRB3LqBn3v4AYLuuno9
        subject_person_id: p_iKrmtsKEeW8GRyF5X6yMqg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8mQhxELJ32HMnqndYfi2Dv
          claim_id: c_s16qRB3LqBn3v4AYLuuno9
          source_id: s_myACTMRMidaYJCHH9kckTb
          stance: supports
          locator: CBDB:11389
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（11389）
          source: &a1
            id: s_myACTMRMidaYJCHH9kckTb
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 11389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=11389&o=json
            external_identifier: CBDB:11389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.569Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iW28Y45Qar19z6b1TwyUNW
        subject_person_id: p_iKrmtsKEeW8GRyF5X6yMqg
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
        - id: cs_Rk4tzHzyqe9UrRrrtiqf7V
          claim_id: c_iW28Y45Qar19z6b1TwyUNW
          source_id: s_myACTMRMidaYJCHH9kckTb
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

# 王鑑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑑 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鑑（CBDB 11389）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=11389&o=json)
