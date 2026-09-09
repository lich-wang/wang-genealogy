---
schema: wang-person/v1
id: p_hsHp5PPLrm6hpZABTrBrnD
status: active
merged_into: null
display_name: 王時保
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HUkBSd9HvJeno6i2yN6AXW
        subject_person_id: p_hsHp5PPLrm6hpZABTrBrnD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時保
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qVuKbJA2hkkyYwYNcNfGxS
          claim_id: c_HUkBSd9HvJeno6i2yN6AXW
          source_id: s_XMzkWbmRAFAzqsG2JCvk3c
          stance: supports
          locator: CBDB:556914
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（556914）
          source: &a1
            id: s_XMzkWbmRAFAzqsG2JCvk3c
            source_type: api_record
            title: 中国历代人物传记资料库：王時保（CBDB 556914）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556914&o=json
            external_identifier: CBDB:556914
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.535Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FHdSP3CASqKKyY7BaS9iLP
        subject_person_id: p_hsHp5PPLrm6hpZABTrBrnD
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
        - id: cs_k1Ri48Yy1Qo5jyVWMKTkPn
          claim_id: c_FHdSP3CASqKKyY7BaS9iLP
          source_id: s_XMzkWbmRAFAzqsG2JCvk3c
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

# 王時保

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時保 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王時保（CBDB 556914）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556914&o=json)
