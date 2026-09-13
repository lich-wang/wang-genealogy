---
schema: wang-person/v1
id: p_JqzU5LE3RNAfELxijbGC2y
status: active
merged_into: null
display_name: 王昌芮
cbdb_id: 185628
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QcuFAHhhLiiFWwey5dYQyz
        subject_person_id: p_JqzU5LE3RNAfELxijbGC2y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌芮（卒于809年），史料所见人物。本项目依据《中国历代人物传记资料库：王昌芮（CBDB 185628）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_isNKoGfbFlAazSsgIx3Q2R
          claim_id: c_QcuFAHhhLiiFWwey5dYQyz
          source_id: s_n581xvUj3WsVmQ48tZr9Vn
          stance: supports
          locator: CBDB:185628
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_n581xvUj3WsVmQ48tZr9Vn
            source_type: api_record
            title: 中国历代人物传记资料库：王昌芮（CBDB 185628）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185628&o=json
            external_identifier: CBDB:185628
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_QvCCH52hnEJPFt4F51ySQM
        subject_person_id: p_JqzU5LE3RNAfELxijbGC2y
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 809年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0809-01-01
            latest: 0809-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EeqCeFTgUUzJ69tFPrfDSj
          claim_id: c_QvCCH52hnEJPFt4F51ySQM
          source_id: s_n581xvUj3WsVmQ48tZr9Vn
          stance: supports
          locator: CBDB:185628
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 809
          source:
            id: s_n581xvUj3WsVmQ48tZr9Vn
            source_type: api_record
            title: 中国历代人物传记资料库：王昌芮（CBDB 185628）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185628&o=json
            external_identifier: CBDB:185628
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9bp1u4fMoWLaq18N34eGm8
        subject_person_id: p_JqzU5LE3RNAfELxijbGC2y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌芮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4h3RhyLxyH9zEhv4ThDsCd
          claim_id: c_9bp1u4fMoWLaq18N34eGm8
          source_id: s_n581xvUj3WsVmQ48tZr9Vn
          stance: supports
          locator: CBDB:185628
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 809
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

# 王昌芮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王昌芮（卒于809年），史料所见人物。本项目依据《中国历代人物传记资料库：王昌芮（CBDB 185628）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 809年 | accepted |
| name.primary | 王昌芮 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昌芮（CBDB 185628）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185628&o=json)
