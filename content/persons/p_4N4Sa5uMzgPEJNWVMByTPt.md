---
schema: wang-person/v1
id: p_4N4Sa5uMzgPEJNWVMByTPt
status: active
merged_into: null
display_name: 王敦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wcS5gi3uGSYn5rFh8MkL67
        subject_person_id: p_4N4Sa5uMzgPEJNWVMByTPt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KiwdrfxSCNmN1QvPKgNqWH
          claim_id: c_wcS5gi3uGSYn5rFh8MkL67
          source_id: s_drgwBZuFDwj85RQJQ4HuiV
          stance: supports
          locator: CBDB:453879
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（453879）
          source: &a1
            id: s_drgwBZuFDwj85RQJQ4HuiV
            source_type: api_record
            title: 中国历代人物传记资料库：王敦（CBDB 453879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453879&o=json
            external_identifier: CBDB:453879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.420Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N5PCcrfoAXL99J1GyHVLo8
        subject_person_id: p_4N4Sa5uMzgPEJNWVMByTPt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BrvtPV9SVWnJMbWbSab1Ak
          claim_id: c_N5PCcrfoAXL99J1GyHVLo8
          source_id: s_drgwBZuFDwj85RQJQ4HuiV
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

# 王敦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敦 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敦（CBDB 453879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453879&o=json)
