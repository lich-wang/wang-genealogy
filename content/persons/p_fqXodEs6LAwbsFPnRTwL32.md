---
schema: wang-person/v1
id: p_fqXodEs6LAwbsFPnRTwL32
status: active
merged_into: null
display_name: 王應乾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UmC1nJNvkdgr8QCoF533ed
        subject_person_id: p_fqXodEs6LAwbsFPnRTwL32
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應乾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6v8CE477ce3RmbrkHYY46m
          claim_id: c_UmC1nJNvkdgr8QCoF533ed
          source_id: s_am2XgHfJyMGEmwSRAeZxuS
          stance: supports
          locator: CBDB:450873
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（450873）
          source: &a1
            id: s_am2XgHfJyMGEmwSRAeZxuS
            source_type: api_record
            title: 中国历代人物传记资料库：王應乾（CBDB 450873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=450873&o=json
            external_identifier: CBDB:450873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.243Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PJx1hDFqz5tft7YNzELL3i
        subject_person_id: p_fqXodEs6LAwbsFPnRTwL32
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
        - id: cs_EZ7ByNZsMEG1DAuy9JF8SV
          claim_id: c_PJx1hDFqz5tft7YNzELL3i
          source_id: s_am2XgHfJyMGEmwSRAeZxuS
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

# 王應乾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應乾 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應乾（CBDB 450873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=450873&o=json)
