---
schema: wang-person/v1
id: p_XvThKaGVXoRTrDZNZdQe4r
status: active
merged_into: null
display_name: 王景崇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z3KzhCf41qSTgJAHHRmDGG
        subject_person_id: p_XvThKaGVXoRTrDZNZdQe4r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景崇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8GF79nHxC6Gs7NPev79cxZ
          claim_id: c_Z3KzhCf41qSTgJAHHRmDGG
          source_id: s_cP6mmG7X4AQSZJJGAXW3L2
          stance: supports
          locator: CBDB:445025
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（445025）
          source: &a1
            id: s_cP6mmG7X4AQSZJJGAXW3L2
            source_type: api_record
            title: 中国历代人物传记资料库：王景崇（CBDB 445025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445025&o=json
            external_identifier: CBDB:445025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.120Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_KW3N8xNPnUj7AWZLGHE1bc
        subject_person_id: p_XvThKaGVXoRTrDZNZdQe4r
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 949年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qJvKDj5B1jzf7m6qjVkNtk
          claim_id: c_KW3N8xNPnUj7AWZLGHE1bc
          source_id: s_cP6mmG7X4AQSZJJGAXW3L2
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
        id: c_xYDe5v2KZUmdB55qcnUysd
        subject_person_id: p_XvThKaGVXoRTrDZNZdQe4r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景崇（卒于949年），史料所见人物。本项目依据《中国历代人物传记资料库：王景崇（CBDB 445025）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DRcSjhVddo50V6Xs-0OnuC
          claim_id: c_xYDe5v2KZUmdB55qcnUysd
          source_id: s_cP6mmG7X4AQSZJJGAXW3L2
          stance: supports
          locator: CBDB:445025
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
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王景崇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景崇 | accepted |
| death.date | 949年 | accepted |
| bio.summary | 王景崇（卒于949年），史料所见人物。本项目依据《中国历代人物传记资料库：王景崇（CBDB 445025）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景崇（CBDB 445025）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445025&o=json)
