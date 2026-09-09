---
schema: wang-person/v1
id: p_2TkqAvb3gC2J9torN4HMvi
status: active
merged_into: null
display_name: 王餘佑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WF1mWxiW84iDbdAk6QDeUQ
        subject_person_id: p_2TkqAvb3gC2J9torN4HMvi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王餘佑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Prbf8ZMcTru1TxH6DZHC4w
          claim_id: c_WF1mWxiW84iDbdAk6QDeUQ
          source_id: s_2kNj51mFEsiBAYBCRH14Nz
          stance: supports
          locator: CBDB:69444
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69444）
          source: &a1
            id: s_2kNj51mFEsiBAYBCRH14Nz
            source_type: api_record
            title: 中国历代人物传记资料库：王餘佑（CBDB 69444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69444&o=json
            external_identifier: CBDB:69444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.129Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3j4FPqTZ8CkzNVXX17JR2z
        subject_person_id: p_2TkqAvb3gC2J9torN4HMvi
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1616年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZKWtvX8YEma8DP67GqmQ3H
          claim_id: c_3j4FPqTZ8CkzNVXX17JR2z
          source_id: s_2kNj51mFEsiBAYBCRH14Nz
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
        id: c_XWJDFZfLAGqvnZAG876Q5c
        subject_person_id: p_2TkqAvb3gC2J9torN4HMvi
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1684年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qy4HJAAa2rCh9VedsgkQE9
          claim_id: c_XWJDFZfLAGqvnZAG876Q5c
          source_id: s_2kNj51mFEsiBAYBCRH14Nz
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
        id: c_dCqm62XSyo3rpJCDrcCLQF
        subject_person_id: p_2TkqAvb3gC2J9torN4HMvi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9qM9fDAKCmPkZWrL89NDUp
          claim_id: c_dCqm62XSyo3rpJCDrcCLQF
          source_id: s_2kNj51mFEsiBAYBCRH14Nz
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

# 王餘佑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王餘佑 | accepted |
| birth.date | 1616年 | accepted |
| death.date | 1684年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王餘佑（CBDB 69444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69444&o=json)
