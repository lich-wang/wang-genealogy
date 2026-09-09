---
schema: wang-person/v1
id: p_6EqE2US5XLK2xg7LkdfGGm
status: active
merged_into: null
display_name: 王罃
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5TNfrc4ikiqbVMGFfHsdtP
        subject_person_id: p_6EqE2US5XLK2xg7LkdfGGm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王罃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1gF1LKnKH3jJjqgzT8sSRL
          claim_id: c_5TNfrc4ikiqbVMGFfHsdtP
          source_id: s_Dq1EMFS9d8cDjH2Rp9ftK4
          stance: supports
          locator: CBDB:379040
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（379040）
          source: &a1
            id: s_Dq1EMFS9d8cDjH2Rp9ftK4
            source_type: api_record
            title: 中国历代人物传记资料库：王罃（CBDB 379040）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=379040&o=json
            external_identifier: CBDB:379040
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.676Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LjvFP11fpBfVn8GXwHxW2Q
        subject_person_id: p_6EqE2US5XLK2xg7LkdfGGm
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
        - id: cs_HprrQRi3gqru5ZnaKteg5i
          claim_id: c_LjvFP11fpBfVn8GXwHxW2Q
          source_id: s_Dq1EMFS9d8cDjH2Rp9ftK4
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

# 王罃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王罃 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王罃（CBDB 379040）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=379040&o=json)
