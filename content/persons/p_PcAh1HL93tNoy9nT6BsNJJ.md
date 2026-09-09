---
schema: wang-person/v1
id: p_PcAh1HL93tNoy9nT6BsNJJ
status: active
merged_into: null
display_name: 王哲魯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CPBDGCjEJoNSTFLuJqSyZU
        subject_person_id: p_PcAh1HL93tNoy9nT6BsNJJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王哲魯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_p23NwFoaVWKU44SsJCEoya
          claim_id: c_CPBDGCjEJoNSTFLuJqSyZU
          source_id: s_FXEVYy5wAh3EKqNCy43qgM
          stance: supports
          locator: CBDB:636538
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636538）
          source: &a1
            id: s_FXEVYy5wAh3EKqNCy43qgM
            source_type: api_record
            title: 中国历代人物传记资料库：王哲魯（CBDB 636538）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636538&o=json
            external_identifier: CBDB:636538
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.023Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o9PqGCD1FQJQE7PZW7WwUB
        subject_person_id: p_PcAh1HL93tNoy9nT6BsNJJ
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
        - id: cs_N5NjrfK1vkTBhRiZrS8MJm
          claim_id: c_o9PqGCD1FQJQE7PZW7WwUB
          source_id: s_FXEVYy5wAh3EKqNCy43qgM
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

# 王哲魯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王哲魯 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王哲魯（CBDB 636538）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636538&o=json)
