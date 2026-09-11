---
schema: wang-person/v1
id: p_2oZpR2zCNuG4srzeA3Ud8T
status: active
merged_into: null
display_name: 王佔
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y3d8XbLbZEpUUJCzZdAR3W
        subject_person_id: p_2oZpR2zCNuG4srzeA3Ud8T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DfMeJ75EigMkE2DAxzaTh9
          claim_id: c_Y3d8XbLbZEpUUJCzZdAR3W
          source_id: s_jKMP8tot5Yn7XA7yyPyi71
          stance: supports
          locator: CBDB:192981
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（192981）
          source: &a1
            id: s_jKMP8tot5Yn7XA7yyPyi71
            source_type: api_record
            title: 中国历代人物传记资料库：王佔（CBDB 192981）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192981&o=json
            external_identifier: CBDB:192981
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.294Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_AWMxYyyudc6pU494wgwkeP
        subject_person_id: p_2oZpR2zCNuG4srzeA3Ud8T
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 838年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PL9bvAtVFUko8xgLtBuy33
          claim_id: c_AWMxYyyudc6pU494wgwkeP
          source_id: s_jKMP8tot5Yn7XA7yyPyi71
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
        id: c_nmpbku9MkFn5MVxGAmdJEQ
        subject_person_id: p_2oZpR2zCNuG4srzeA3Ud8T
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
        - id: cs_s4RNfE7G1Cfbxxmr2AZDBP
          claim_id: c_nmpbku9MkFn5MVxGAmdJEQ
          source_id: s_jKMP8tot5Yn7XA7yyPyi71
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
        id: c_U6vLtZKri71SbKd3B2zG_-
        subject_person_id: p_aaiHJwLEK4x15AzbShdWFc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2oZpR2zCNuG4srzeA3Ud8T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hqMEIEwx5txfQkwS-D3K-P
          claim_id: c_U6vLtZKri71SbKd3B2zG_-
          source_id: s_jKMP8tot5Yn7XA7yyPyi71
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_aaiHJwLEK4x15AzbShdWFc
        status: active
        display_name: 王昇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王佔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佔 | accepted |
| death.date | 838年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aaiHJwLEK4x15AzbShdWFc | 王昇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王佔（CBDB 192981）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192981&o=json)
