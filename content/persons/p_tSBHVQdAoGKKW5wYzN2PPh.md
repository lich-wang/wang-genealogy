---
schema: wang-person/v1
id: p_tSBHVQdAoGKKW5wYzN2PPh
status: active
merged_into: null
display_name: 王媛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kCr2BNdh8s44F81Gq7E9Jf
        subject_person_id: p_tSBHVQdAoGKKW5wYzN2PPh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王媛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LMTunY1j1TyotxtuDMXC1N
          claim_id: c_kCr2BNdh8s44F81Gq7E9Jf
          source_id: s_q6hB6x4QG9Bd4sg1gafZVw
          stance: supports
          locator: CBDB:121686
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（121686）
          source: &a1
            id: s_q6hB6x4QG9Bd4sg1gafZVw
            source_type: api_record
            title: 中国历代人物传记资料库：王媛（CBDB 121686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121686&o=json
            external_identifier: CBDB:121686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.916Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dWN2k3NPdiEWDbfD3Sz3aD
        subject_person_id: p_tSBHVQdAoGKKW5wYzN2PPh
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
        - id: cs_fPxnFoKTyou5LWuUpv4avB
          claim_id: c_dWN2k3NPdiEWDbfD3Sz3aD
          source_id: s_q6hB6x4QG9Bd4sg1gafZVw
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

# 王媛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王媛 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王媛（CBDB 121686）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121686&o=json)
