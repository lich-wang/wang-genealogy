---
schema: wang-person/v1
id: p_vu9fAjh9yjTnG3KKSUhzMX
status: active
merged_into: null
display_name: 王審禮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QbT4GWUhj21so8unVMCKan
        subject_person_id: p_vu9fAjh9yjTnG3KKSUhzMX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王審禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UeWp61vb7YzArJh8q9KW6i
          claim_id: c_QbT4GWUhj21so8unVMCKan
          source_id: s_UiNjxgzAGnVyF2x4vJ6MWy
          stance: supports
          locator: CBDB:381461
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（381461）
          source: &a1
            id: s_UiNjxgzAGnVyF2x4vJ6MWy
            source_type: api_record
            title: 中国历代人物传记资料库：王審禮（CBDB 381461）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=381461&o=json
            external_identifier: CBDB:381461
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.772Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vnBfwSDVwVAm9uxxh5Pr8H
        subject_person_id: p_vu9fAjh9yjTnG3KKSUhzMX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AMdvfuP95gLPo5XKpsKUE8
          claim_id: c_vnBfwSDVwVAm9uxxh5Pr8H
          source_id: s_UiNjxgzAGnVyF2x4vJ6MWy
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

# 王審禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王審禮 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王審禮（CBDB 381461）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=381461&o=json)
