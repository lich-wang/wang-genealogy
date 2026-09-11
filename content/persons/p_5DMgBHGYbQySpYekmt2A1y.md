---
schema: wang-person/v1
id: p_5DMgBHGYbQySpYekmt2A1y
status: active
merged_into: null
display_name: 王雲鳳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vWuXrTzTGBiZ8zMGXWtj1q
        subject_person_id: p_5DMgBHGYbQySpYekmt2A1y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲鳳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_foMN5P2Q7ZQZJQCyGtWeVo
          claim_id: c_vWuXrTzTGBiZ8zMGXWtj1q
          source_id: s_gUrwSam8K2u63X6WUpQck6
          stance: supports
          locator: CBDB:126722
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126722）
          source: &a1
            id: s_gUrwSam8K2u63X6WUpQck6
            source_type: api_record
            title: 中国历代人物传记资料库：王雲鳳（CBDB 126722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126722&o=json
            external_identifier: CBDB:126722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.153Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6LndEnjoeaYbxSpcY3BJtv
        subject_person_id: p_5DMgBHGYbQySpYekmt2A1y
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1465年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K2yfRuNKtGYBnBFNbMuu9p
          claim_id: c_6LndEnjoeaYbxSpcY3BJtv
          source_id: s_gUrwSam8K2u63X6WUpQck6
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
        id: c_S9A3hM3QvTDf3ncLePeYqK
        subject_person_id: p_5DMgBHGYbQySpYekmt2A1y
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1517年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jX1L9hKnz2Fw7tErWhiY9B
          claim_id: c_S9A3hM3QvTDf3ncLePeYqK
          source_id: s_gUrwSam8K2u63X6WUpQck6
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
        id: c_eNMth6y63eK47BcUu69REJ
        subject_person_id: p_5DMgBHGYbQySpYekmt2A1y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲鳳（1465年—1517年），明人物。籍贯和順，身份为拒絕出仕，曾任知州。（中国历代人物传记资料库 CBDB 126722）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_M8SJhpjY48POxBtvnu-0iv
          claim_id: c_eNMth6y63eK47BcUu69REJ
          source_id: s_gUrwSam8K2u63X6WUpQck6
          stance: supports
          locator: CBDB:126722
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王雲鳳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雲鳳 | accepted |
| birth.date | 1465年 | accepted |
| death.date | 1517年 | accepted |
| bio.summary | 王雲鳳（1465年—1517年），明人物。籍贯和順，身份为拒絕出仕，曾任知州。（中国历代人物传记资料库 CBDB 126722） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雲鳳（CBDB 126722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126722&o=json)
