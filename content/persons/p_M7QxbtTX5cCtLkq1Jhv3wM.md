---
schema: wang-person/v1
id: p_M7QxbtTX5cCtLkq1Jhv3wM
status: active
merged_into: null
display_name: 王慧
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eNHa1SnefUJz5HzmQ2vcrG
        subject_person_id: p_M7QxbtTX5cCtLkq1Jhv3wM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3K17Cmw3gqTwAdnNzKwHAN
          claim_id: c_eNHa1SnefUJz5HzmQ2vcrG
          source_id: s_UWLfZ3QJcChU3E9sEhQAMK
          stance: supports
          locator: CBDB:54027
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（54027）
          source: &a1
            id: s_UWLfZ3QJcChU3E9sEhQAMK
            source_type: api_record
            title: 中国历代人物传记资料库：王慧（CBDB 54027）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54027&o=json
            external_identifier: CBDB:54027
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.714Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_bNRm6d55pFTVDPkwiPL8pH
        subject_person_id: p_M7QxbtTX5cCtLkq1Jhv3wM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1662年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ivKdZLgTyjyppmH1hYj95N
          claim_id: c_bNRm6d55pFTVDPkwiPL8pH
          source_id: s_UWLfZ3QJcChU3E9sEhQAMK
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
        id: c_GVJyHzkN4bkqBWDNFAyuZv
        subject_person_id: p_M7QxbtTX5cCtLkq1Jhv3wM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1722年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Wi6j5ymNtoFgq8s3BZHtBb
          claim_id: c_GVJyHzkN4bkqBWDNFAyuZv
          source_id: s_UWLfZ3QJcChU3E9sEhQAMK
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
        id: c_jfUmFfaMF4PoyNjt6VctaW
        subject_person_id: p_M7QxbtTX5cCtLkq1Jhv3wM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慧（1662年—1722年），史料所见人物。本项目依据《中国历代人物传记资料库：王慧（CBDB 54027）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cW6x6Tq_DNnkCvNkZeQflh
          claim_id: c_jfUmFfaMF4PoyNjt6VctaW
          source_id: s_UWLfZ3QJcChU3E9sEhQAMK
          stance: supports
          locator: CBDB:54027
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_hs9YeShh738WwU6ehiTVat
        subject_person_id: p_M7QxbtTX5cCtLkq1Jhv3wM
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_1QzKehEa4NogWRoCAdkBvF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a3b3U8p5MzkIS5Nzqrf5h9
          claim_id: c_hs9YeShh738WwU6ehiTVat
          source_id: s_QpK756p1Z5zTlwWiHg27LQ
          stance: supports
          locator: CBDB 双向互证（丈夫 朱方來）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QpK756p1Z5zTlwWiHg27LQ
            source_type: api_record
            title: 中国历代人物传记资料库：朱方來（CBDB 54162）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54162&o=json
            external_identifier: CBDB:54162
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1QzKehEa4NogWRoCAdkBvF
        status: active
        display_name: 朱方來
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王慧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慧 | accepted |
| birth.date | 1662年 | accepted |
| death.date | 1722年 | accepted |
| bio.summary | 王慧（1662年—1722年），史料所见人物。本项目依据《中国历代人物传记资料库：王慧（CBDB 54027）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_1QzKehEa4NogWRoCAdkBvF | 朱方來 | accepted |

## 外部来源

- [中国历代人物传记资料库：王慧（CBDB 54027）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54027&o=json)
- [中国历代人物传记资料库：朱方來（CBDB 54162）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54162&o=json)
