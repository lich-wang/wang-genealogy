---
schema: wang-person/v1
id: p_Kb5BTjJQKRum82Y1z3vgme
status: active
merged_into: null
display_name: 王鳳垣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ja9yLC7EZxMQPbuAWzWSqA
        subject_person_id: p_Kb5BTjJQKRum82Y1z3vgme
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳垣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o6TqN67Rx53ptNHpB7GFN9
          claim_id: c_Ja9yLC7EZxMQPbuAWzWSqA
          source_id: s_NhjSGpTsDDCynzksc8GC71
          stance: supports
          locator: CBDB:640927
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640927）
          source: &a1
            id: s_NhjSGpTsDDCynzksc8GC71
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳垣（CBDB 640927）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640927&o=json
            external_identifier: CBDB:640927
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.414Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mvAGAFu1EWxNcLvhibGD6J
        subject_person_id: p_Kb5BTjJQKRum82Y1z3vgme
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
        - id: cs_2zDC1qN4Vk4UNeSJLtuFDK
          claim_id: c_mvAGAFu1EWxNcLvhibGD6J
          source_id: s_NhjSGpTsDDCynzksc8GC71
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

# 王鳳垣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳳垣 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鳳垣（CBDB 640927）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640927&o=json)
