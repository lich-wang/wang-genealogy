---
schema: wang-person/v1
id: p_BExshC9vpXroMBL9FsHuHV
status: active
merged_into: null
display_name: 王大昕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s4EKB9vfoACK8UDQj7mt8U
        subject_person_id: p_BExshC9vpXroMBL9FsHuHV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大昕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_664Pv9R9Vcog9ayPx2sRAd
          claim_id: c_s4EKB9vfoACK8UDQj7mt8U
          source_id: s_qhYa1cJi9XDgcro7JMJvhV
          stance: supports
          locator: CBDB:636899
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636899）
          source: &a1
            id: s_qhYa1cJi9XDgcro7JMJvhV
            source_type: api_record
            title: 中国历代人物传记资料库：王大昕（CBDB 636899）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636899&o=json
            external_identifier: CBDB:636899
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.142Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8tE8BW5KfvHFiXbrLadCnC
        subject_person_id: p_BExshC9vpXroMBL9FsHuHV
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
        - id: cs_qLEC6W9JZP5FGUqrHPPQdu
          claim_id: c_8tE8BW5KfvHFiXbrLadCnC
          source_id: s_qhYa1cJi9XDgcro7JMJvhV
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

# 王大昕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大昕 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大昕（CBDB 636899）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636899&o=json)
