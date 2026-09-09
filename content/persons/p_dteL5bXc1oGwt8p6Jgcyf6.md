---
schema: wang-person/v1
id: p_dteL5bXc1oGwt8p6Jgcyf6
status: active
merged_into: null
display_name: 王舜臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tRaVwHFY52VD2otw2mwGMi
        subject_person_id: p_dteL5bXc1oGwt8p6Jgcyf6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舜臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FGA6CTyKSMnPoBENgPPn1e
          claim_id: c_tRaVwHFY52VD2otw2mwGMi
          source_id: s_rHcXKTsJPB1XBLk8sApSmL
          stance: supports
          locator: CBDB:22175
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22175）
          source: &a1
            id: s_rHcXKTsJPB1XBLk8sApSmL
            source_type: api_record
            title: 中国历代人物传记资料库：王舜臣（CBDB 22175）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22175&o=json
            external_identifier: CBDB:22175
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.840Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Kb7Cxu5K1ky9VXM7C5PDtj
        subject_person_id: p_dteL5bXc1oGwt8p6Jgcyf6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V1GMkzCrWFo6osDXSH9nj4
          claim_id: c_Kb7Cxu5K1ky9VXM7C5PDtj
          source_id: s_rHcXKTsJPB1XBLk8sApSmL
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

# 王舜臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舜臣 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王舜臣（CBDB 22175）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22175&o=json)
