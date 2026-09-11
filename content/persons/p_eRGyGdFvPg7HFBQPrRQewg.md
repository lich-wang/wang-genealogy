---
schema: wang-person/v1
id: p_eRGyGdFvPg7HFBQPrRQewg
status: active
merged_into: null
display_name: 王翫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RaDFXy2D1YH4wtWyPAXGUy
        subject_person_id: p_eRGyGdFvPg7HFBQPrRQewg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6QCYNndWLgL6qCg1K71Mw4
          claim_id: c_RaDFXy2D1YH4wtWyPAXGUy
          source_id: s_YENVnLt7xAPoTrPBjdBq4u
          stance: supports
          locator: CBDB:190025
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190025）
          source: &a1
            id: s_YENVnLt7xAPoTrPBjdBq4u
            source_type: api_record
            title: 中国历代人物传记资料库：王翫（CBDB 190025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190025&o=json
            external_identifier: CBDB:190025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.311Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_EcWxLeQ1DZJRbcCBXKsZzs
        subject_person_id: p_eRGyGdFvPg7HFBQPrRQewg
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 780年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7Q1vK6q485uwjyzP3XjgL9
          claim_id: c_EcWxLeQ1DZJRbcCBXKsZzs
          source_id: s_YENVnLt7xAPoTrPBjdBq4u
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
        id: c_Mee7K6bUe13W6o8ZbPX3sL
        subject_person_id: p_eRGyGdFvPg7HFBQPrRQewg
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
        - id: cs_FieM1FaWwRQE6TzFYQfe9Q
          claim_id: c_Mee7K6bUe13W6o8ZbPX3sL
          source_id: s_YENVnLt7xAPoTrPBjdBq4u
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
        id: c_jaK0DyBX706eZ8OPe7tAmu
        subject_person_id: p_z2q5T7PxdSDGTYFAvqTB9t
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eRGyGdFvPg7HFBQPrRQewg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7L2dylTZCIqW9Kc8d2v52I
          claim_id: c_jaK0DyBX706eZ8OPe7tAmu
          source_id: s_YENVnLt7xAPoTrPBjdBq4u
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_z2q5T7PxdSDGTYFAvqTB9t
        status: active
        display_name: 王思
        merged_into_person_id: null
  children:
    - claim:
        id: c_vo3SjrjUGzPcW48iDM0zC_
        subject_person_id: p_eRGyGdFvPg7HFBQPrRQewg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RYAhUs1ATN2FqSqLmBj15y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NFTpPhfUQY541SKVodbEgZ
          claim_id: c_vo3SjrjUGzPcW48iDM0zC_
          source_id: s_YENVnLt7xAPoTrPBjdBq4u
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RYAhUs1ATN2FqSqLmBj15y
        status: active
        display_name: 王叔原
        merged_into_person_id: null
    - claim:
        id: c__8umbma5LDfwwoUUQva47j
        subject_person_id: p_eRGyGdFvPg7HFBQPrRQewg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ka2VJXXHm5PK7oLL84VyUD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EJVt-KpmdBqXaI1IhvMhvz
          claim_id: c__8umbma5LDfwwoUUQva47j
          source_id: s_YENVnLt7xAPoTrPBjdBq4u
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Ka2VJXXHm5PK7oLL84VyUD
        status: active
        display_name: 王知徽
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王翫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翫 | accepted |
| death.date | 780年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_z2q5T7PxdSDGTYFAvqTB9t | 王思 | accepted |
| children | p_RYAhUs1ATN2FqSqLmBj15y | 王叔原 | accepted |
| children | p_Ka2VJXXHm5PK7oLL84VyUD | 王知徽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王翫（CBDB 190025）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190025&o=json)
