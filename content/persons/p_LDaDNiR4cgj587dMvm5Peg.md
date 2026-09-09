---
schema: wang-person/v1
id: p_LDaDNiR4cgj587dMvm5Peg
status: active
merged_into: null
display_name: 王之福
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zR9YHG8xG5XtY58QoKCa6o
        subject_person_id: p_LDaDNiR4cgj587dMvm5Peg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J4aoJ1pmXsPvR81BTG4MLF
          claim_id: c_zR9YHG8xG5XtY58QoKCa6o
          source_id: s_9vi4RvJM9sCHR6r8aJQj6U
          stance: supports
          locator: CBDB:635806
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635806）
          source: &a1
            id: s_9vi4RvJM9sCHR6r8aJQj6U
            source_type: api_record
            title: 中国历代人物传记资料库：王之福（CBDB 635806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635806&o=json
            external_identifier: CBDB:635806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.798Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SJFzWKKSN376KyfyNsbjm8
        subject_person_id: p_LDaDNiR4cgj587dMvm5Peg
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
        - id: cs_dr7nN1XbsRzsmgS65wWNxR
          claim_id: c_SJFzWKKSN376KyfyNsbjm8
          source_id: s_9vi4RvJM9sCHR6r8aJQj6U
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

# 王之福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之福 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之福（CBDB 635806）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635806&o=json)
