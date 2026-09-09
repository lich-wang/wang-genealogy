---
schema: wang-person/v1
id: p_DFK89goyEYyfrbYrvJfN3v
status: active
merged_into: null
display_name: 王襲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qMScRFnVB4E74Uu2WcPboe
        subject_person_id: p_DFK89goyEYyfrbYrvJfN3v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王襲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6Kp6yhLSDe2KJNPwu6CyEu
          claim_id: c_qMScRFnVB4E74Uu2WcPboe
          source_id: s_AbR6D5fkKTubxFuJms7pce
          stance: supports
          locator: CBDB:175897
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175897）
          source: &a1
            id: s_AbR6D5fkKTubxFuJms7pce
            source_type: api_record
            title: 中国历代人物传记资料库：王襲（CBDB 175897）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175897&o=json
            external_identifier: CBDB:175897
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.186Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_L4v2YQMVVXZB752uaDp8M2
        subject_person_id: p_DFK89goyEYyfrbYrvJfN3v
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 547年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L7vyj1312BC6xBKwBesRLM
          claim_id: c_L4v2YQMVVXZB752uaDp8M2
          source_id: s_AbR6D5fkKTubxFuJms7pce
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
        id: c_7QbDWk2WkGH6ni9Uz2uDqk
        subject_person_id: p_DFK89goyEYyfrbYrvJfN3v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为南北朝人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_brJGGSq4xBigiZwAvSM3MC
          claim_id: c_7QbDWk2WkGH6ni9Uz2uDqk
          source_id: s_AbR6D5fkKTubxFuJms7pce
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

# 王襲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王襲 | accepted |
| death.date | 547年 | accepted |
| bio.summary | CBDB 记载为南北朝人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王襲（CBDB 175897）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175897&o=json)
