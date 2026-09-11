---
schema: wang-person/v1
id: p_BWjzSBQAuer1KD82F2RP2U
status: active
merged_into: null
display_name: 王蕭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QCHDAjCCGZ7J2SD6GJANh3
        subject_person_id: p_BWjzSBQAuer1KD82F2RP2U
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蕭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LCX9e9c6gavVCHPMEexSAK
          claim_id: c_QCHDAjCCGZ7J2SD6GJANh3
          source_id: s_RaNwLWE7QpLFMdVVtZhZyu
          stance: supports
          locator: CBDB:175686
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175686）
          source: &a1
            id: s_RaNwLWE7QpLFMdVVtZhZyu
            source_type: api_record
            title: 中国历代人物传记资料库：王蕭（CBDB 175686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175686&o=json
            external_identifier: CBDB:175686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.245Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_YH4VqTo6pfutJdaWkCbcib
        subject_person_id: p_BWjzSBQAuer1KD82F2RP2U
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 774年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RmqJgA2eCsqDhGhpuq1cx6
          claim_id: c_YH4VqTo6pfutJdaWkCbcib
          source_id: s_RaNwLWE7QpLFMdVVtZhZyu
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
        id: c_Sn52qaiypU9rZ5BYriyfbj
        subject_person_id: p_BWjzSBQAuer1KD82F2RP2U
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蕭（卒于774年），唐人物。籍贯萬年，曾任左司員外郎。（中国历代人物传记资料库 CBDB 175686）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_g6xCJbGfrNzKOZyl6PtaMM
          claim_id: c_Sn52qaiypU9rZ5BYriyfbj
          source_id: s_RaNwLWE7QpLFMdVVtZhZyu
          stance: supports
          locator: CBDB:175686
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

# 王蕭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蕭 | accepted |
| death.date | 774年 | accepted |
| bio.summary | 王蕭（卒于774年），唐人物。籍贯萬年，曾任左司員外郎。（中国历代人物传记资料库 CBDB 175686） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蕭（CBDB 175686）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175686&o=json)
