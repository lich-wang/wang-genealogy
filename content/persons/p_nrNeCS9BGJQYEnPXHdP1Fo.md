---
schema: wang-person/v1
id: p_nrNeCS9BGJQYEnPXHdP1Fo
status: active
merged_into: null
display_name: 王奕仁
cbdb_id: 67123
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EaCvQa363HctfoLvk1QZNH
        subject_person_id: p_nrNeCS9BGJQYEnPXHdP1Fo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奕仁（卒于1730年），史料所见人物。本项目依据《中国历代人物传记资料库：王奕仁（CBDB 67123）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_rYsGACY7PxFhlBktRjnK2r
          claim_id: c_EaCvQa363HctfoLvk1QZNH
          source_id: s_9ZSEkWnZwd3XCviKG7K5PH
          stance: supports
          locator: CBDB:67123
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_9ZSEkWnZwd3XCviKG7K5PH
            source_type: api_record
            title: 中国历代人物传记资料库：王奕仁（CBDB 67123）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67123&o=json
            external_identifier: CBDB:67123
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:34.254Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_A4qZpS5ivi1XPKKQfmAyeJ
        subject_person_id: p_nrNeCS9BGJQYEnPXHdP1Fo
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1730年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1730-01-01
            latest: 1730-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RtLQm8BfNrDDXJF2iJq4bn
          claim_id: c_A4qZpS5ivi1XPKKQfmAyeJ
          source_id: s_9ZSEkWnZwd3XCviKG7K5PH
          stance: supports
          locator: CBDB:67123
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1730
          source:
            id: s_9ZSEkWnZwd3XCviKG7K5PH
            source_type: api_record
            title: 中国历代人物传记资料库：王奕仁（CBDB 67123）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67123&o=json
            external_identifier: CBDB:67123
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:34.254Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_L66HNjQEQBAM4XvYBGbFET
        subject_person_id: p_nrNeCS9BGJQYEnPXHdP1Fo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奕仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_zJxZwzRhrZFH5692AqHPG9
          claim_id: c_L66HNjQEQBAM4XvYBGbFET
          source_id: s_9ZSEkWnZwd3XCviKG7K5PH
          stance: supports
          locator: CBDB:67123
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1730
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

# 王奕仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王奕仁（卒于1730年），史料所见人物。本项目依据《中国历代人物传记资料库：王奕仁（CBDB 67123）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 1730年 | accepted |
| name.primary | 王奕仁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王奕仁（CBDB 67123）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67123&o=json)
