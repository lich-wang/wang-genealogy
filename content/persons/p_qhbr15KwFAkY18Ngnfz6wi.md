---
schema: wang-person/v1
id: p_qhbr15KwFAkY18Ngnfz6wi
status: active
merged_into: null
display_name: 王起緒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_767wt3aBdpABHY8xXya3rB
        subject_person_id: p_qhbr15KwFAkY18Ngnfz6wi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王起緒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fkD5W9aUwv9Xfg5V2RkkTh
          claim_id: c_767wt3aBdpABHY8xXya3rB
          source_id: s_pvt69VcgGhPCvoAwm4D8xV
          stance: supports
          locator: CBDB:640355
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640355）
          source: &a1
            id: s_pvt69VcgGhPCvoAwm4D8xV
            source_type: api_record
            title: 中国历代人物传记资料库：王起緒（CBDB 640355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640355&o=json
            external_identifier: CBDB:640355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.232Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KVAAYq5Kb1YN3G2u4x6hU2
        subject_person_id: p_qhbr15KwFAkY18Ngnfz6wi
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
        - id: cs_degXsPzB8FZJQaCVrz4rDy
          claim_id: c_KVAAYq5Kb1YN3G2u4x6hU2
          source_id: s_pvt69VcgGhPCvoAwm4D8xV
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

# 王起緒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王起緒 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王起緒（CBDB 640355）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640355&o=json)
