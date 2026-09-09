---
schema: wang-person/v1
id: p_pwL96XiDAq1D5ziQD7yuHW
status: active
merged_into: null
display_name: 王爾熾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1KKpGBxZBP8c75g6dP2Tue
        subject_person_id: p_pwL96XiDAq1D5ziQD7yuHW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爾熾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7Bze1G5vT1NWn13pwK7H8x
          claim_id: c_1KKpGBxZBP8c75g6dP2Tue
          source_id: s_EC6wRHM4zmcYsrhi814kk6
          stance: supports
          locator: CBDB:639359
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639359）
          source: &a1
            id: s_EC6wRHM4zmcYsrhi814kk6
            source_type: api_record
            title: 中国历代人物传记资料库：王爾熾（CBDB 639359）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639359&o=json
            external_identifier: CBDB:639359
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.918Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SoC6mRp8H651LNmAFb4JX2
        subject_person_id: p_pwL96XiDAq1D5ziQD7yuHW
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
        - id: cs_y5jkB2FZ55L6n6cqqYh1h7
          claim_id: c_SoC6mRp8H651LNmAFb4JX2
          source_id: s_EC6wRHM4zmcYsrhi814kk6
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

# 王爾熾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王爾熾 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王爾熾（CBDB 639359）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639359&o=json)
