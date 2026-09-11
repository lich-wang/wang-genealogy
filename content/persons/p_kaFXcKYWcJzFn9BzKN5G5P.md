---
schema: wang-person/v1
id: p_kaFXcKYWcJzFn9BzKN5G5P
status: active
merged_into: null
display_name: 王禮
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LvS8geosf3hg1Zy3Cm7Gpr
        subject_person_id: p_kaFXcKYWcJzFn9BzKN5G5P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bdCoBvjcALpzH4PMbE8Eyx
          claim_id: c_LvS8geosf3hg1Zy3Cm7Gpr
          source_id: s_kEgQzQXGiMVanGsGCriCxG
          stance: supports
          locator: CBDB:139058
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139058）
          source: &a1
            id: s_kEgQzQXGiMVanGsGCriCxG
            source_type: api_record
            title: 中国历代人物传记资料库：王禮（CBDB 139058）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139058&o=json
            external_identifier: CBDB:139058
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.379Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_twokk2w2T9qMYWGE1yFRn1
        subject_person_id: p_kaFXcKYWcJzFn9BzKN5G5P
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
        - id: cs_v3pYGsu9b9MJcLW9DmUNnZ
          claim_id: c_twokk2w2T9qMYWGE1yFRn1
          source_id: s_kEgQzQXGiMVanGsGCriCxG
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
        id: c_8PLGTk2LNkcXp-Fo-yxRzz
        subject_person_id: p_UhYZVCzFh5cnz81vtvPM6b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kaFXcKYWcJzFn9BzKN5G5P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yWhN-m0EzfWrVSU6FYVg68
          claim_id: c_8PLGTk2LNkcXp-Fo-yxRzz
          source_id: s_kEgQzQXGiMVanGsGCriCxG
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yonghui 140：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UhYZVCzFh5cnz81vtvPM6b
        status: active
        display_name: 王表
        merged_into_person_id: null
  children:
    - claim:
        id: c_Q0cgYQ8beIvdBG9qkYCi3-
        subject_person_id: p_kaFXcKYWcJzFn9BzKN5G5P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UV3co1QXVmpbgDP6L1Wo4p
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RdLMFlcEua3MMAxcPZ_g-Z
          claim_id: c_Q0cgYQ8beIvdBG9qkYCi3-
          source_id: s_kEgQzQXGiMVanGsGCriCxG
          stance: supports
          locator: 唐代墓誌匯編:二卷，Qianfeng 55：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UV3co1QXVmpbgDP6L1Wo4p
        status: active
        display_name: 王師
        merged_into_person_id: null
    - claim:
        id: c_3ihmp6X66bHOFRhwDvn3Y-
        subject_person_id: p_kaFXcKYWcJzFn9BzKN5G5P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_seUbE6ck5GZ4hMvh3E2DNi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VPrOIgiTrt4dncnajTHEfp
          claim_id: c_3ihmp6X66bHOFRhwDvn3Y-
          source_id: s_kEgQzQXGiMVanGsGCriCxG
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yonghui 140：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_seUbE6ck5GZ4hMvh3E2DNi
        status: active
        display_name: 王弘道
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Lb0arzHIsq9BAEurbDqpy6
        subject_person_id: p_kaFXcKYWcJzFn9BzKN5G5P
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_adcA27v9WXaZgWFVgtfN51
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pk-lj3xtKcXx0ViRidG4c4
          claim_id: c_Lb0arzHIsq9BAEurbDqpy6
          source_id: s_5Nm425SgV8zPsSD0y3SMPQ
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yonghui 140：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5Nm425SgV8zPsSD0y3SMPQ
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王禮妻)（CBDB 147254）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147254&o=json
            external_identifier: CBDB:147254
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_adcA27v9WXaZgWFVgtfN51
        status: active
        display_name: 張氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禮 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UhYZVCzFh5cnz81vtvPM6b | 王表 | accepted |
| children | p_UV3co1QXVmpbgDP6L1Wo4p | 王師 | accepted |
| children | p_seUbE6ck5GZ4hMvh3E2DNi | 王弘道 | accepted |
| spouses | p_adcA27v9WXaZgWFVgtfN51 | 張氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王禮（CBDB 139058）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139058&o=json)
- [中国历代人物传记资料库：張氏(王禮妻)（CBDB 147254）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147254&o=json)
