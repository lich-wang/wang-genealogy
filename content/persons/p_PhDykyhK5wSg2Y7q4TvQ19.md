---
schema: wang-person/v1
id: p_PhDykyhK5wSg2Y7q4TvQ19
status: active
merged_into: null
display_name: 王磐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mDS9mQ1SHMAzADa7FGFWqC
        subject_person_id: p_PhDykyhK5wSg2Y7q4TvQ19
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王磐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2ssYKNVNASGPdPFQdFk95G
          claim_id: c_mDS9mQ1SHMAzADa7FGFWqC
          source_id: s_jKkL7ER18GJFLPLaxybtPV
          stance: supports
          locator: CBDB:691324
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（691324）
          source: &a1
            id: s_jKkL7ER18GJFLPLaxybtPV
            source_type: api_record
            title: 中国历代人物传记资料库：王磐（CBDB 691324）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691324&o=json
            external_identifier: CBDB:691324
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.606Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PTXbouHigmCq9oM3NFqDvJ
        subject_person_id: p_PhDykyhK5wSg2Y7q4TvQ19
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1470年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5YAewM4qwa8wxkziLHKD5Q
          claim_id: c_PTXbouHigmCq9oM3NFqDvJ
          source_id: s_jKkL7ER18GJFLPLaxybtPV
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
        id: c_AbjPyU8zJfqhHd3a7qPmpN
        subject_person_id: p_PhDykyhK5wSg2Y7q4TvQ19
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1530年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VuMy3ZEgtEKZQtQGcqx6Pa
          claim_id: c_AbjPyU8zJfqhHd3a7qPmpN
          source_id: s_jKkL7ER18GJFLPLaxybtPV
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
        id: c_CPFmTdG1ohQtJrh9CBLvrC
        subject_person_id: p_PhDykyhK5wSg2Y7q4TvQ19
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
        - id: cs_81KkUScfvru6WuHaKN8fak
          claim_id: c_CPFmTdG1ohQtJrh9CBLvrC
          source_id: s_jKkL7ER18GJFLPLaxybtPV
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

# 王磐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王磐 | accepted |
| birth.date | 1470年 | accepted |
| death.date | 1530年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王磐（CBDB 691324）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691324&o=json)
