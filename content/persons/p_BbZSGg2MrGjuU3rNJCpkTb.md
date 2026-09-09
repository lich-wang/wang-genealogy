---
schema: wang-person/v1
id: p_BbZSGg2MrGjuU3rNJCpkTb
status: active
merged_into: null
display_name: 王雲同
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_W36gKsQhNQahL3zHhgQPDg
        subject_person_id: p_BbZSGg2MrGjuU3rNJCpkTb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲同
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o6QH9Kuep5Ww1p81hDH6qG
          claim_id: c_W36gKsQhNQahL3zHhgQPDg
          source_id: s_bQoHK7ET4Kr4nBZ26E6bgj
          stance: supports
          locator: CBDB:640806
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640806）
          source: &a1
            id: s_bQoHK7ET4Kr4nBZ26E6bgj
            source_type: api_record
            title: 中国历代人物传记资料库：王雲同（CBDB 640806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640806&o=json
            external_identifier: CBDB:640806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.375Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CFVJ7qiaqu3rNwD3gVB4VF
        subject_person_id: p_BbZSGg2MrGjuU3rNJCpkTb
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
        - id: cs_Ufh7McLRUSCJsqxSEAfe5P
          claim_id: c_CFVJ7qiaqu3rNwD3gVB4VF
          source_id: s_bQoHK7ET4Kr4nBZ26E6bgj
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

# 王雲同

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雲同 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雲同（CBDB 640806）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640806&o=json)
