---
schema: wang-person/v1
id: p_2y6d8Z4nicvSAG555PEzMF
status: active
merged_into: null
display_name: 王守澄
cbdb_id: 196063
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q6DeoJZYg9HKyES14GGmeN
        subject_person_id: p_2y6d8Z4nicvSAG555PEzMF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守澄（卒于835年），史料所见人物。本项目依据《中国历代人物传记资料库：王守澄（CBDB 196063）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_ti-XIxphes4XKnnwy7IupU
          claim_id: c_q6DeoJZYg9HKyES14GGmeN
          source_id: s_1A7i2CzpH878c6D8mgj2KS
          stance: supports
          locator: CBDB:196063
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_1A7i2CzpH878c6D8mgj2KS
            source_type: api_record
            title: 中国历代人物传记资料库：王守澄（CBDB 196063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=196063&o=json
            external_identifier: CBDB:196063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_GYFZjSmMQCUZGJ9Sos8hjR
        subject_person_id: p_2y6d8Z4nicvSAG555PEzMF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 835年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0835-01-01
            latest: 0835-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FzuA5gPq7RrpF5Pr6NvLSQ
          claim_id: c_GYFZjSmMQCUZGJ9Sos8hjR
          source_id: s_1A7i2CzpH878c6D8mgj2KS
          stance: supports
          locator: CBDB:196063
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 835
          source:
            id: s_1A7i2CzpH878c6D8mgj2KS
            source_type: api_record
            title: 中国历代人物传记资料库：王守澄（CBDB 196063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=196063&o=json
            external_identifier: CBDB:196063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xvx3jDJ4No7eaNzKXkFnD4
        subject_person_id: p_2y6d8Z4nicvSAG555PEzMF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守澄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2JxDL8HnyYPZXEJmKC1ZQA
          claim_id: c_xvx3jDJ4No7eaNzKXkFnD4
          source_id: s_1A7i2CzpH878c6D8mgj2KS
          stance: supports
          locator: CBDB:196063
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 835
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

# 王守澄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王守澄（卒于835年），史料所见人物。本项目依据《中国历代人物传记资料库：王守澄（CBDB 196063）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 835年 | accepted |
| name.primary | 王守澄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王守澄（CBDB 196063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=196063&o=json)
