---
schema: wang-person/v1
id: p_BHMsY8qAbSMNGU2H8r2g2y
status: active
merged_into: null
display_name: 王佐
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DgAEGchiGt5X1c2Q6MXBEA
        subject_person_id: p_BHMsY8qAbSMNGU2H8r2g2y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gL5BaJBcKmX3RXTvx4DvKW
          claim_id: c_DgAEGchiGt5X1c2Q6MXBEA
          source_id: s_1V6Hj2BNbdrieoMYggXvK9
          stance: supports
          locator: CBDB:318793
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318793）
          source: &a1
            id: s_1V6Hj2BNbdrieoMYggXvK9
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 318793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318793&o=json
            external_identifier: CBDB:318793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.026Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G7cYGGQregSvvL1tfqGMSQ
        subject_person_id: p_BHMsY8qAbSMNGU2H8r2g2y
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
        - id: cs_xgKkY9b3NDqmxMV9dUDxPT
          claim_id: c_G7cYGGQregSvvL1tfqGMSQ
          source_id: s_1V6Hj2BNbdrieoMYggXvK9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_R-_Fyy1ulcVxa0yYN9uNGN
        subject_person_id: p_BHMsY8qAbSMNGU2H8r2g2y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BXF3dbPMGdrpkj3BGNYpWy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_moukQ6tg-anoO980wL6U1s
          claim_id: c_R-_Fyy1ulcVxa0yYN9uNGN
          source_id: s_1V6Hj2BNbdrieoMYggXvK9
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百七十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BXF3dbPMGdrpkj3BGNYpWy
        status: active
        display_name: 王文政
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_BXF3dbPMGdrpkj3BGNYpWy | 王文政 | accepted |

## 外部来源

- [中国历代人物传记资料库：王佐（CBDB 318793）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318793&o=json)
