---
schema: wang-person/v1
id: p_HngvvK79dmNmncNBZfnfYd
status: active
merged_into: null
display_name: 王壽天
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mN5F73hGiy2DDNT4TRGh8p
        subject_person_id: p_HngvvK79dmNmncNBZfnfYd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽天
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XxAhsaDoXKjB1Jiwr8SYzy
          claim_id: c_mN5F73hGiy2DDNT4TRGh8p
          source_id: s_87Y53RhXMRizcXfnrRoQ6X
          stance: supports
          locator: CBDB:636836
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636836）
          source: &a1
            id: s_87Y53RhXMRizcXfnrRoQ6X
            source_type: api_record
            title: 中国历代人物传记资料库：王壽天（CBDB 636836）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636836&o=json
            external_identifier: CBDB:636836
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.119Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oKXVA6briuMbja2zjzEpkW
        subject_person_id: p_HngvvK79dmNmncNBZfnfYd
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
        - id: cs_1wyPPywcxQn39FzD55ZaAA
          claim_id: c_oKXVA6briuMbja2zjzEpkW
          source_id: s_87Y53RhXMRizcXfnrRoQ6X
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

# 王壽天

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王壽天 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王壽天（CBDB 636836）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636836&o=json)
