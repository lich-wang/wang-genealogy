---
schema: wang-person/v1
id: p_PRCQF2pTDCSVJ4uUwnRxT1
status: active
merged_into: null
display_name: 王大合
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JrLMyFETdrw9UF1XMAyKYa
        subject_person_id: p_PRCQF2pTDCSVJ4uUwnRxT1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大合
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8kZU8MiyCEuEPor3Pz4Anh
          claim_id: c_JrLMyFETdrw9UF1XMAyKYa
          source_id: s_aJQWyW5fztBBiLzggsR79Y
          stance: supports
          locator: CBDB:207604
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207604）
          source: &a1
            id: s_aJQWyW5fztBBiLzggsR79Y
            source_type: api_record
            title: 中国历代人物传记资料库：王大合（CBDB 207604）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207604&o=json
            external_identifier: CBDB:207604
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.923Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_dE1kQ338eWvGy7Gf96KnBB
        subject_person_id: p_PRCQF2pTDCSVJ4uUwnRxT1
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1568年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w7vLiRsL7hAKPuZBBbGNFZ
          claim_id: c_dE1kQ338eWvGy7Gf96KnBB
          source_id: s_aJQWyW5fztBBiLzggsR79Y
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o9hDxRiYE91pPAJVmE2qKM
        subject_person_id: p_PRCQF2pTDCSVJ4uUwnRxT1
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
        - id: cs_FZob3KXwz19DFCjn8PJuLa
          claim_id: c_o9hDxRiYE91pPAJVmE2qKM
          source_id: s_aJQWyW5fztBBiLzggsR79Y
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

# 王大合

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大合 | accepted |
| birth.date | 1568年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大合（CBDB 207604）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207604&o=json)
