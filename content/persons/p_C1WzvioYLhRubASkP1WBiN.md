---
schema: wang-person/v1
id: p_C1WzvioYLhRubASkP1WBiN
status: active
merged_into: null
display_name: 王化育
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nF3skVk4MtUvppX9yoW1rL
        subject_person_id: p_C1WzvioYLhRubASkP1WBiN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化育
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dE23EPoVeiV1QTxKNz8C1D
          claim_id: c_nF3skVk4MtUvppX9yoW1rL
          source_id: s_DDtRPZKcPivN6L8wbJk8FY
          stance: supports
          locator: CBDB:555112
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（555112）
          source: &a1
            id: s_DDtRPZKcPivN6L8wbJk8FY
            source_type: api_record
            title: 中国历代人物传记资料库：王化育（CBDB 555112）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555112&o=json
            external_identifier: CBDB:555112
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.518Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T3yXmAQJpZbAbr9VywEHeX
        subject_person_id: p_C1WzvioYLhRubASkP1WBiN
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
        - id: cs_w6GngqD2KV4xJYdHumsK4T
          claim_id: c_T3yXmAQJpZbAbr9VywEHeX
          source_id: s_DDtRPZKcPivN6L8wbJk8FY
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
        id: c_VqBv60jrC6nJdfPCsIT8gW
        subject_person_id: p_C1WzvioYLhRubASkP1WBiN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GwAsY33Fpgfxg9Nmr4UCTR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_95wtsC4LIQCL_1IgTkQrac
          claim_id: c_VqBv60jrC6nJdfPCsIT8gW
          source_id: s_DDtRPZKcPivN6L8wbJk8FY
          stance: supports
          locator: 南陽府志，lgid=878687：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GwAsY33Fpgfxg9Nmr4UCTR
        status: active
        display_name: 王廷彥
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_s8OsUUHJsvB05iaFpdlEw4
        subject_person_id: p_C1WzvioYLhRubASkP1WBiN
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_LUJFYyJjwhK11TRQYR923b
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Lv_q_qwq6_QG48Of8jabLj
          claim_id: c_s8OsUUHJsvB05iaFpdlEw4
          source_id: s_HWH33wY96-vBxOdA3v-DXf
          stance: supports
          locator: 南陽府志，lgid=878687：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HWH33wY96-vBxOdA3v-DXf
            source_type: api_record
            title: 中国历代人物传记资料库：楊氏(王化育妻)（CBDB 555113）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555113&o=json
            external_identifier: CBDB:555113
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_LUJFYyJjwhK11TRQYR923b
        status: active
        display_name: 楊氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王化育

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王化育 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_GwAsY33Fpgfxg9Nmr4UCTR | 王廷彥 | accepted |
| spouses | p_LUJFYyJjwhK11TRQYR923b | 楊氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王化育（CBDB 555112）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555112&o=json)
- [中国历代人物传记资料库：楊氏(王化育妻)（CBDB 555113）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555113&o=json)
