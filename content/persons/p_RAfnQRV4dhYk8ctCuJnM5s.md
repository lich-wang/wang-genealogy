---
schema: wang-person/v1
id: p_RAfnQRV4dhYk8ctCuJnM5s
status: active
merged_into: null
display_name: 王承
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YWKgTyuomPp2ACHypajF2t
        subject_person_id: p_RAfnQRV4dhYk8ctCuJnM5s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MWsRUP3czH1jFyLiQYC6Qy
          claim_id: c_YWKgTyuomPp2ACHypajF2t
          source_id: s_A4ZnnJcnxz1ESGv52mxCDS
          stance: supports
          locator: CBDB:690156
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（690156）
          source: &a1
            id: s_A4ZnnJcnxz1ESGv52mxCDS
            source_type: api_record
            title: 中国历代人物传记资料库：王承（CBDB 690156）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690156&o=json
            external_identifier: CBDB:690156
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.582Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XeyE8V3BMzCmeS5E8b1Lf8
        subject_person_id: p_RAfnQRV4dhYk8ctCuJnM5s
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
        - id: cs_gFrAs5yv69pUtxTAoF2G9c
          claim_id: c_XeyE8V3BMzCmeS5E8b1Lf8
          source_id: s_A4ZnnJcnxz1ESGv52mxCDS
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

# 王承

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承（CBDB 690156）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690156&o=json)
