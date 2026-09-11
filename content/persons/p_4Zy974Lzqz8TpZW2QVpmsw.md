---
schema: wang-person/v1
id: p_4Zy974Lzqz8TpZW2QVpmsw
status: active
merged_into: null
display_name: 王尚學
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BmPGL8jAH7MFBTn3P1pD6T
        subject_person_id: p_4Zy974Lzqz8TpZW2QVpmsw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚學
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HoK6Q1QQyDDaMP89Q8Y7Nz
          claim_id: c_BmPGL8jAH7MFBTn3P1pD6T
          source_id: s_n2Bush7TsNx4ZZ5zuJLHqz
          stance: supports
          locator: CBDB:126576
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126576）
          source: &a1
            id: s_n2Bush7TsNx4ZZ5zuJLHqz
            source_type: api_record
            title: 中国历代人物传记资料库：王尚學（CBDB 126576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126576&o=json
            external_identifier: CBDB:126576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.036Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LGhzqSWhdyud236vvvhT2W
        subject_person_id: p_4Zy974Lzqz8TpZW2QVpmsw
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
        - id: cs_GfFotF9HHJVy68X4LDW6Gm
          claim_id: c_LGhzqSWhdyud236vvvhT2W
          source_id: s_n2Bush7TsNx4ZZ5zuJLHqz
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
        id: c_Pf5gas0NkYKApcsrXwfw59
        subject_person_id: p_5LDCvEDE36Lk6A6mUWizaS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4Zy974Lzqz8TpZW2QVpmsw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_itggDFYfPRvb2txtfGM0z5
          claim_id: c_Pf5gas0NkYKApcsrXwfw59
          source_id: s_n2Bush7TsNx4ZZ5zuJLHqz
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第一百四十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5LDCvEDE36Lk6A6mUWizaS
        status: active
        display_name: 王相
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_9MC2DvUv_jiF0rnedGvZxa
        subject_person_id: p_4Zy974Lzqz8TpZW2QVpmsw
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_BgMUfX1Fafru4JoutC1E98
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DOsrSHa4UZ7QAikJN4zjQQ
          claim_id: c_9MC2DvUv_jiF0rnedGvZxa
          source_id: s_1UhQyYwnV0fk6mXCQmvRp8
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第一百四十二名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1UhQyYwnV0fk6mXCQmvRp8
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王尚學妻)（CBDB 301178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301178&o=json
            external_identifier: CBDB:301178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BgMUfX1Fafru4JoutC1E98
        status: active
        display_name: 陳氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_QfP_71pfFgVKJTKypG8HOV
        subject_person_id: p_LRXuyQYgphwofuM383zBNg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4Zy974Lzqz8TpZW2QVpmsw
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZG9ps5aSpX-09Sm0Svvg3-
          claim_id: c_QfP_71pfFgVKJTKypG8HOV
          source_id: s_n2Bush7TsNx4ZZ5zuJLHqz
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第一百四十二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LRXuyQYgphwofuM383zBNg
        status: active
        display_name: 王昕
        merged_into_person_id: null
    - claim:
        id: c_TR8O6onFniUahsyxEANXA2
        subject_person_id: p_J8k5RcMjQfFGo695QgQ7ch
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4Zy974Lzqz8TpZW2QVpmsw
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tFc3jMFsw66Y02TSijLPeh
          claim_id: c_TR8O6onFniUahsyxEANXA2
          source_id: s_n2Bush7TsNx4ZZ5zuJLHqz
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第一百四十二名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_J8k5RcMjQfFGo695QgQ7ch
        status: active
        display_name: 王泝
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王尚學

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尚學 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5LDCvEDE36Lk6A6mUWizaS | 王相 | accepted |
| spouses | p_BgMUfX1Fafru4JoutC1E98 | 陳氏 | accepted |
| ancestors | p_LRXuyQYgphwofuM383zBNg | 王昕 | accepted |
| ancestors | p_J8k5RcMjQfFGo695QgQ7ch | 王泝 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王尚學妻)（CBDB 301178）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301178&o=json)
- [中国历代人物传记资料库：王尚學（CBDB 126576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126576&o=json)
