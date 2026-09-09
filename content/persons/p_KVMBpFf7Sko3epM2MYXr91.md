---
schema: wang-person/v1
id: p_KVMBpFf7Sko3epM2MYXr91
status: active
merged_into: null
display_name: 王曰俞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mSG2dNvEoLsb2qP3mgN1h6
        subject_person_id: p_KVMBpFf7Sko3epM2MYXr91
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曰俞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xgpWZQ1Dtc7bBtPant6grB
          claim_id: c_mSG2dNvEoLsb2qP3mgN1h6
          source_id: s_1NpryP3hUSgPKGXPyvJdjc
          stance: supports
          locator: CBDB:343416
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343416）
          source: &a1
            id: s_1NpryP3hUSgPKGXPyvJdjc
            source_type: api_record
            title: 中国历代人物传记资料库：王曰俞（CBDB 343416）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343416&o=json
            external_identifier: CBDB:343416
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.342Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tjtTGhgMT7sR3RaAzCb2TL
        subject_person_id: p_KVMBpFf7Sko3epM2MYXr91
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
        - id: cs_sj544mHrV4AYeX6CKNHaVn
          claim_id: c_tjtTGhgMT7sR3RaAzCb2TL
          source_id: s_1NpryP3hUSgPKGXPyvJdjc
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

# 王曰俞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王曰俞 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王曰俞（CBDB 343416）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343416&o=json)
