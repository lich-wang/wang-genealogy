---
schema: wang-person/v1
id: p_Z6PGfSbJxCtm9NB1vtVbam
status: active
merged_into: null
display_name: 王淑卿
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eo3DhSFe4dkrATHhdkFQ19
        subject_person_id: p_Z6PGfSbJxCtm9NB1vtVbam
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_huvNb28cwRbH9y3ZbvZZWH
          claim_id: c_eo3DhSFe4dkrATHhdkFQ19
          source_id: s_JrHA77LB1CXXeN61RPdCfK
          stance: supports
          locator: CBDB:118476
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（118476）
          source: &a1
            id: s_JrHA77LB1CXXeN61RPdCfK
            source_type: api_record
            title: 中国历代人物传记资料库：王淑卿（CBDB 118476）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118476&o=json
            external_identifier: CBDB:118476
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.877Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_p23KzWuXNoVD3A8JvLhY52
        subject_person_id: p_Z6PGfSbJxCtm9NB1vtVbam
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1750年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V28wxCP8B6TVCZz3ymKs6K
          claim_id: c_p23KzWuXNoVD3A8JvLhY52
          source_id: s_JrHA77LB1CXXeN61RPdCfK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_1DCxYf6mQvPW51H9RoJfXm
        subject_person_id: p_Z6PGfSbJxCtm9NB1vtVbam
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1820年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_376F5YoXVqnbFWNfa8vPq3
          claim_id: c_1DCxYf6mQvPW51H9RoJfXm
          source_id: s_JrHA77LB1CXXeN61RPdCfK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1wVoBww3275iZ2mqgfBVsf
        subject_person_id: p_Z6PGfSbJxCtm9NB1vtVbam
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
        - id: cs_9AqVHDoZTTKYem5VASechg
          claim_id: c_1wVoBww3275iZ2mqgfBVsf
          source_id: s_JrHA77LB1CXXeN61RPdCfK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_F9lDCShhUvm6sDt6FTNDN_
        subject_person_id: p_WruUn1DHPBNtjugD5Tk6bH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z6PGfSbJxCtm9NB1vtVbam
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U3HsacXFpJzzzjENqulr3A
          claim_id: c_F9lDCShhUvm6sDt6FTNDN_
          source_id: s_JrHA77LB1CXXeN61RPdCfK
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2586：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WruUn1DHPBNtjugD5Tk6bH
        status: active
        display_name: 王登元
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_PnNU5JcUAVJeXgcMDntUly
        subject_person_id: p_Z6PGfSbJxCtm9NB1vtVbam
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_PQ9dk7hgcnG8xc2c51itds
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CsRr0C5VFEzNkVbJoflrHE
          claim_id: c_PnNU5JcUAVJeXgcMDntUly
          source_id: s_9eJXZiqpNbM61TH1JQQO2L
          stance: supports
          locator: CBDB 双向互证（丈夫 梁上治）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9eJXZiqpNbM61TH1JQQO2L
            source_type: api_record
            title: 中国历代人物传记资料库：梁上治（CBDB 131940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=131940&o=json
            external_identifier: CBDB:131940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PQ9dk7hgcnG8xc2c51itds
        status: active
        display_name: 梁上治
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王淑卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淑卿 | accepted |
| birth.date | 1750年 | accepted |
| death.date | 1820年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WruUn1DHPBNtjugD5Tk6bH | 王登元 | accepted |
| spouses | p_PQ9dk7hgcnG8xc2c51itds | 梁上治 | accepted |

## 外部来源

- [中国历代人物传记资料库：梁上治（CBDB 131940）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=131940&o=json)
- [中国历代人物传记资料库：王淑卿（CBDB 118476）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118476&o=json)
