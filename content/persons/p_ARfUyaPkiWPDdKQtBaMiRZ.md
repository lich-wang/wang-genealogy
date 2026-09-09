---
schema: wang-person/v1
id: p_ARfUyaPkiWPDdKQtBaMiRZ
status: active
merged_into: null
display_name: 王梓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NTgG8VW7KAbyaJQng86Htm
        subject_person_id: p_ARfUyaPkiWPDdKQtBaMiRZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王梓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QG7V6z2cUFEzy5A9P1QC3h
          claim_id: c_NTgG8VW7KAbyaJQng86Htm
          source_id: s_qer7wSc7u55dRT8VWBx6GP
          stance: supports
          locator: CBDB:283937
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283937）
          source: &a1
            id: s_qer7wSc7u55dRT8VWBx6GP
            source_type: api_record
            title: 中国历代人物传记资料库：王梓（CBDB 283937）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283937&o=json
            external_identifier: CBDB:283937
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.169Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5148a9nKwUVf9YNTFnsD1B
        subject_person_id: p_ARfUyaPkiWPDdKQtBaMiRZ
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
        - id: cs_HcMh2jhy8XygB4p5KmW1Pd
          claim_id: c_5148a9nKwUVf9YNTFnsD1B
          source_id: s_qer7wSc7u55dRT8VWBx6GP
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

# 王梓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王梓 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王梓（CBDB 283937）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283937&o=json)
