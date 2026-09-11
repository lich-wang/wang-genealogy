---
schema: wang-person/v1
id: p_7wCLqcQbBY1uXQ63JU3AKf
status: active
merged_into: null
display_name: 王訓
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yFQubronUek5iFWvT7dxEp
        subject_person_id: p_7wCLqcQbBY1uXQ63JU3AKf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pGtqFJWRMRDZ85DdYPpDxL
          claim_id: c_yFQubronUek5iFWvT7dxEp
          source_id: s_opASS8N2VcwCXB51vGEx7L
          stance: supports
          locator: CBDB:141157
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141157）
          source: &a1
            id: s_opASS8N2VcwCXB51vGEx7L
            source_type: api_record
            title: 中国历代人物传记资料库：王訓（CBDB 141157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141157&o=json
            external_identifier: CBDB:141157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.548Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Jc9Zqu8Dofmg9FKP1ExmJT
        subject_person_id: p_7wCLqcQbBY1uXQ63JU3AKf
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 727年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FDShHjjjyXoFix8cUr8irc
          claim_id: c_Jc9Zqu8Dofmg9FKP1ExmJT
          source_id: s_opASS8N2VcwCXB51vGEx7L
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
        id: c_KuN3XJsiDP379mX9h63SN6
        subject_person_id: p_7wCLqcQbBY1uXQ63JU3AKf
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 767年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EiG8RdNx42Dp1YgpNUj13E
          claim_id: c_KuN3XJsiDP379mX9h63SN6
          source_id: s_opASS8N2VcwCXB51vGEx7L
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
        id: c_izeU2G7hzFGC9TsoyNJ2Kj
        subject_person_id: p_7wCLqcQbBY1uXQ63JU3AKf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訓（727年—767年），唐人物。籍贯臨沂，曾任光祿卿。（中国历代人物传记资料库 CBDB 141157）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jf-rEr9a4bruI1_bYSILiX
          claim_id: c_izeU2G7hzFGC9TsoyNJ2Kj
          source_id: s_opASS8N2VcwCXB51vGEx7L
          stance: supports
          locator: CBDB:141157
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vTVLZXUDIdJ_lBD-cVHqb6
        subject_person_id: p_Lr8L9s9EF6He1HszkYXFMW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7wCLqcQbBY1uXQ63JU3AKf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xI6xnyF_cd48Cgk4mbHxJ0
          claim_id: c_vTVLZXUDIdJ_lBD-cVHqb6
          source_id: s_opASS8N2VcwCXB51vGEx7L
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dali 3：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Lr8L9s9EF6He1HszkYXFMW
        status: active
        display_name: 王繇
        merged_into_person_id: null
  children:
    - claim:
        id: c_ktiCuiNXrxVYzo9LbxC-f2
        subject_person_id: p_7wCLqcQbBY1uXQ63JU3AKf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7QrhcSCpByfzYfPYz7zK5h
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kAtZpKvwh88GKLxA8aYnqc
          claim_id: c_ktiCuiNXrxVYzo9LbxC-f2
          source_id: s_opASS8N2VcwCXB51vGEx7L
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7QrhcSCpByfzYfPYz7zK5h
        status: active
        display_name: 王支某
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Gy06VQTR5sLuAv8Rdj1PZV
        subject_person_id: p_7wCLqcQbBY1uXQ63JU3AKf
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_WeRn4YP5pcuFrURnRYYjFr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sv5fbW6_4Wq1DFbuloErKq
          claim_id: c_Gy06VQTR5sLuAv8Rdj1PZV
          source_id: s_dcUtg6LMNBqUq8nviefOAi
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dali 3：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dcUtg6LMNBqUq8nviefOAi
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王訓妻)（CBDB 154779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154779&o=json
            external_identifier: CBDB:154779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_WeRn4YP5pcuFrURnRYYjFr
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_e7nsiy2GYK2pt_56DFpLpn
        subject_person_id: p_P9grpQUuaJm36Kf1zD6ovz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7wCLqcQbBY1uXQ63JU3AKf
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Sx5qpWWKAzZFZcAZv0D1vA
          claim_id: c_e7nsiy2GYK2pt_56DFpLpn
          source_id: s_opASS8N2VcwCXB51vGEx7L
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dali 3：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_P9grpQUuaJm36Kf1zD6ovz
        status: active
        display_name: 王知道
        merged_into_person_id: null
    - claim:
        id: c_c0s0FhQlV3M0DMCs5r-I53
        subject_person_id: p_EG5yKUEaWTYurjNt333buJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7wCLqcQbBY1uXQ63JU3AKf
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Aw88KdfXUrsCupiL6TPrGu
          claim_id: c_c0s0FhQlV3M0DMCs5r-I53
          source_id: s_opASS8N2VcwCXB51vGEx7L
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dali 3：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EG5yKUEaWTYurjNt333buJ
        status: active
        display_name: 王同皎
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王訓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王訓 | accepted |
| birth.date | 727年 | accepted |
| death.date | 767年 | accepted |
| bio.summary | 王訓（727年—767年），唐人物。籍贯臨沂，曾任光祿卿。（中国历代人物传记资料库 CBDB 141157） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Lr8L9s9EF6He1HszkYXFMW | 王繇 | accepted |
| children | p_7QrhcSCpByfzYfPYz7zK5h | 王支某 | accepted |
| spouses | p_WeRn4YP5pcuFrURnRYYjFr | 李氏 | accepted |
| ancestors | p_P9grpQUuaJm36Kf1zD6ovz | 王知道 | accepted |
| ancestors | p_EG5yKUEaWTYurjNt333buJ | 王同皎 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王訓妻)（CBDB 154779）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154779&o=json)
- [中国历代人物传记资料库：王訓（CBDB 141157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141157&o=json)
