---
schema: wang-person/v1
id: p_fAeAj1ECenpg29AWYPB25D
status: active
merged_into: null
display_name: 王國光
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Eq8gzpbB7TXCaiJJm9C1x2
        subject_person_id: p_fAeAj1ECenpg29AWYPB25D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4b4CY4CgrxCPk8dSnUFEVU
          claim_id: c_Eq8gzpbB7TXCaiJJm9C1x2
          source_id: s_Vt2QnjwfvAN63GjXwa6CEm
          stance: supports
          locator: CBDB:125310
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（125310）
          source: &a1
            id: s_Vt2QnjwfvAN63GjXwa6CEm
            source_type: api_record
            title: 中国历代人物传记资料库：王國光（CBDB 125310）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=125310&o=json
            external_identifier: CBDB:125310
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.950Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4FravaiJsDxUNV3hNVCq5c
        subject_person_id: p_fAeAj1ECenpg29AWYPB25D
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1512年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KADsaymjRuREggPAxYNKH5
          claim_id: c_4FravaiJsDxUNV3hNVCq5c
          source_id: s_Vt2QnjwfvAN63GjXwa6CEm
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
        id: c_NmnRCSd46PZH3BUWLYq2c7
        subject_person_id: p_fAeAj1ECenpg29AWYPB25D
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1594年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YJXBtorGqEzogevBr2VRsb
          claim_id: c_NmnRCSd46PZH3BUWLYq2c7
          source_id: s_Vt2QnjwfvAN63GjXwa6CEm
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
        id: c_uzgMryM7ZpE4NywKQhzYr5
        subject_person_id: p_fAeAj1ECenpg29AWYPB25D
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
        - id: cs_J5eHxV2xGEPLDkPC97RXmC
          claim_id: c_uzgMryM7ZpE4NywKQhzYr5
          source_id: s_Vt2QnjwfvAN63GjXwa6CEm
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

# 王國光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國光 | accepted |
| birth.date | 1512年 | accepted |
| death.date | 1594年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國光（CBDB 125310）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=125310&o=json)
