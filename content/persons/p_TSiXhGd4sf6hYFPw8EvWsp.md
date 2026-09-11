---
schema: wang-person/v1
id: p_TSiXhGd4sf6hYFPw8EvWsp
status: active
merged_into: null
display_name: 王守琦
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Vfvxez3vjB3XNwgB29EYGW
        subject_person_id: p_TSiXhGd4sf6hYFPw8EvWsp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守琦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_X4ZCPyJJMV94bXRxNQR41J
          claim_id: c_Vfvxez3vjB3XNwgB29EYGW
          source_id: s_97EYxJPEnRvhgya9nsk7Fp
          stance: supports
          locator: CBDB:141873
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141873）
          source: &a1
            id: s_97EYxJPEnRvhgya9nsk7Fp
            source_type: api_record
            title: 中国历代人物传记资料库：王守琦（CBDB 141873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141873&o=json
            external_identifier: CBDB:141873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.207Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_GMEsGNGj6M6T5kiahvMpqZ
        subject_person_id: p_TSiXhGd4sf6hYFPw8EvWsp
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 849年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ArbSbNadehRJ9fLCJSwsSL
          claim_id: c_GMEsGNGj6M6T5kiahvMpqZ
          source_id: s_97EYxJPEnRvhgya9nsk7Fp
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
        id: c_GTKroxmgqH8rJcnbHWBdgj
        subject_person_id: p_TSiXhGd4sf6hYFPw8EvWsp
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
        - id: cs_7P5Y1CeJ54DPji2MpU1eBS
          claim_id: c_GTKroxmgqH8rJcnbHWBdgj
          source_id: s_97EYxJPEnRvhgya9nsk7Fp
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
        id: c_B03rh5qkv_bO4pxh7WiYmi
        subject_person_id: p_uLX7KRyZUND76dMmM6Ga7D
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TSiXhGd4sf6hYFPw8EvWsp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7PPiNhlsQIVPeD5U4Xc151
          claim_id: c_B03rh5qkv_bO4pxh7WiYmi
          source_id: s_97EYxJPEnRvhgya9nsk7Fp
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dazhong 32：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uLX7KRyZUND76dMmM6Ga7D
        status: active
        display_name: 王意通
        merged_into_person_id: null
  children:
    - claim:
        id: c_ZRyyQLlXueWpAPyG0_27TR
        subject_person_id: p_TSiXhGd4sf6hYFPw8EvWsp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_guCTzDXrYoKmeJ925cN91P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xqaX89Wv-X8a4eUTWGyfbA
          claim_id: c_ZRyyQLlXueWpAPyG0_27TR
          source_id: s_97EYxJPEnRvhgya9nsk7Fp
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_guCTzDXrYoKmeJ925cN91P
        status: active
        display_name: 王從泰
        merged_into_person_id: null
    - claim:
        id: c_5aSrWuNGNrkIeSXXTqO_m4
        subject_person_id: p_TSiXhGd4sf6hYFPw8EvWsp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_baMid58DQ36C4L4JRGTG3E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6RTQPikAi2xw9-YlzaV_Mc
          claim_id: c_5aSrWuNGNrkIeSXXTqO_m4
          source_id: s_97EYxJPEnRvhgya9nsk7Fp
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_baMid58DQ36C4L4JRGTG3E
        status: active
        display_name: 王從盈
        merged_into_person_id: null
    - claim:
        id: c_Pt8oEUm_MeNakkcg8laJ5Z
        subject_person_id: p_TSiXhGd4sf6hYFPw8EvWsp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ouZb3u5M3MJFn5hChTsMKx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CaDOf2RoGoe4tJed9TvutZ
          claim_id: c_Pt8oEUm_MeNakkcg8laJ5Z
          source_id: s_97EYxJPEnRvhgya9nsk7Fp
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ouZb3u5M3MJFn5hChTsMKx
        status: active
        display_name: 王從祐
        merged_into_person_id: null
    - claim:
        id: c_xTs6VRsSuOqH_7669CMKis
        subject_person_id: p_TSiXhGd4sf6hYFPw8EvWsp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_otC3NBGpEMdrpLf4GEKgEJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4DWTJoXpboP4rqfKxkXTvC
          claim_id: c_xTs6VRsSuOqH_7669CMKis
          source_id: s_97EYxJPEnRvhgya9nsk7Fp
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dazhong 32：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_otC3NBGpEMdrpLf4GEKgEJ
        status: active
        display_name: 王允實
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_FcjXf1gHj_WsGJgIkynQvX
        subject_person_id: p_TSiXhGd4sf6hYFPw8EvWsp
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_iFdmQY65wry7H169vut7Uw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o8Lc-LnTV79xqX9jbVvz9w
          claim_id: c_FcjXf1gHj_WsGJgIkynQvX
          source_id: s_cOMA54efcqBBTl4f4u_tQA
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dazhong 32：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cOMA54efcqBBTl4f4u_tQA
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王守琦妻)（CBDB 159083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159083&o=json
            external_identifier: CBDB:159083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iFdmQY65wry7H169vut7Uw
        status: active
        display_name: 張氏
        merged_into_person_id: null
    - claim:
        id: c_hzulg6VoxE_KhDAIXQTyyC
        subject_person_id: p_TSiXhGd4sf6hYFPw8EvWsp
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_rZ1EKGukr2cc8BhGeQeHez
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JfIqdeIDNiugJjyJaeG6aq
          claim_id: c_hzulg6VoxE_KhDAIXQTyyC
          source_id: s_BZm0tEcMGEoutlqQ6BZrkM
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dazhong 32：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BZm0tEcMGEoutlqQ6BZrkM
            source_type: api_record
            title: 中国历代人物传记资料库：謝氏(王守琦妻)（CBDB 159084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159084&o=json
            external_identifier: CBDB:159084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_rZ1EKGukr2cc8BhGeQeHez
        status: active
        display_name: 謝氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王守琦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守琦 | accepted |
| death.date | 849年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uLX7KRyZUND76dMmM6Ga7D | 王意通 | accepted |
| children | p_guCTzDXrYoKmeJ925cN91P | 王從泰 | accepted |
| children | p_baMid58DQ36C4L4JRGTG3E | 王從盈 | accepted |
| children | p_ouZb3u5M3MJFn5hChTsMKx | 王從祐 | accepted |
| children | p_otC3NBGpEMdrpLf4GEKgEJ | 王允實 | accepted |
| spouses | p_iFdmQY65wry7H169vut7Uw | 張氏 | accepted |
| spouses | p_rZ1EKGukr2cc8BhGeQeHez | 謝氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王守琦（CBDB 141873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141873&o=json)
- [中国历代人物传记资料库：謝氏(王守琦妻)（CBDB 159084）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159084&o=json)
- [中国历代人物传记资料库：張氏(王守琦妻)（CBDB 159083）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159083&o=json)
