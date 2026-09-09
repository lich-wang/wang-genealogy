---
schema: wang-person/v1
id: p_e4Y9CE2TJz5LpS4rL817m6
status: active
merged_into: null
display_name: 王錫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_41GG43PLVFL1HBcCBWRDcR
        subject_person_id: p_e4Y9CE2TJz5LpS4rL817m6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q8FEZgUvfiko59eobjdq8Y
          claim_id: c_41GG43PLVFL1HBcCBWRDcR
          source_id: s_f83p3HmRFA6QEqAfBkD35b
          stance: supports
          locator: CBDB:134763
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（134763）
          source: &a1
            id: s_f83p3HmRFA6QEqAfBkD35b
            source_type: api_record
            title: 中国历代人物传记资料库：王錫（CBDB 134763）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134763&o=json
            external_identifier: CBDB:134763
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.332Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yC7z1E13uUnL4iCx8kEc4X
        subject_person_id: p_e4Y9CE2TJz5LpS4rL817m6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋(劉)人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uvuzry4BH1zLeUJ1tW3Hnq
          claim_id: c_yC7z1E13uUnL4iCx8kEc4X
          source_id: s_f83p3HmRFA6QEqAfBkD35b
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

# 王錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫 | accepted |
| bio.summary | CBDB 记载为宋(劉)人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫（CBDB 134763）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134763&o=json)
