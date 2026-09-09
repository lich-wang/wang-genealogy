---
schema: wang-person/v1
id: p_GnDmcRiqWAPKbzm5E55xGK
status: active
merged_into: null
display_name: 王寧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5rQMXNMuA3UbeHXCRM2hVq
        subject_person_id: p_GnDmcRiqWAPKbzm5E55xGK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ARyVb54Prm1dPFW7MWEc2r
          claim_id: c_5rQMXNMuA3UbeHXCRM2hVq
          source_id: s_iDPnsqf3gJj193atdMh5bu
          stance: supports
          locator: CBDB:445549
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（445549）
          source: &a1
            id: s_iDPnsqf3gJj193atdMh5bu
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 445549）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445549&o=json
            external_identifier: CBDB:445549
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.162Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sRJf9h28jJf8MpFVfT7CxB
        subject_person_id: p_GnDmcRiqWAPKbzm5E55xGK
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
        - id: cs_snKttqLY1P2PeEwDLiomr2
          claim_id: c_sRJf9h28jJf8MpFVfT7CxB
          source_id: s_iDPnsqf3gJj193atdMh5bu
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

# 王寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寧 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寧（CBDB 445549）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445549&o=json)
