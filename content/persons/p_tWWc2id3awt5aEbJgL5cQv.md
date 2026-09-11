---
schema: wang-person/v1
id: p_tWWc2id3awt5aEbJgL5cQv
status: active
merged_into: null
display_name: 王清
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sPEF994LG3ENRaDnJFDNSE
        subject_person_id: p_tWWc2id3awt5aEbJgL5cQv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4DtxRBMvrFvT4nahbeynCt
          claim_id: c_sPEF994LG3ENRaDnJFDNSE
          source_id: s_zYViESyVpLrCKNm51Gzdyz
          stance: supports
          locator: CBDB:146321
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（146321）
          source: &a1
            id: s_zYViESyVpLrCKNm51Gzdyz
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 146321）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146321&o=json
            external_identifier: CBDB:146321
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.712Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_tG1mtPBJpsJm47gGVszMHK
        subject_person_id: p_tWWc2id3awt5aEbJgL5cQv
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 764年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LFY11Bb3iHp2H9QmX6KtFj
          claim_id: c_tG1mtPBJpsJm47gGVszMHK
          source_id: s_zYViESyVpLrCKNm51Gzdyz
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
        id: c_MkQ2BHMXiSTe5gen3jmn8u
        subject_person_id: p_tWWc2id3awt5aEbJgL5cQv
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 832年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_22HWTAQJbFTRNo5A9LLu2E
          claim_id: c_MkQ2BHMXiSTe5gen3jmn8u
          source_id: s_zYViESyVpLrCKNm51Gzdyz
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
        id: c_ETJ2ZJYUnG7JNM8MqXtPoY
        subject_person_id: p_tWWc2id3awt5aEbJgL5cQv
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
        - id: cs_czk4TCsKUZWwt6ZnZDAbso
          claim_id: c_ETJ2ZJYUnG7JNM8MqXtPoY
          source_id: s_zYViESyVpLrCKNm51Gzdyz
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
        id: c_4522tGYVFW-zvBIkQWkONf
        subject_person_id: p_tWWc2id3awt5aEbJgL5cQv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Cxe4epwV166ceFeem4ZSmC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6oQcCzwdAJXsI2dQephd-0
          claim_id: c_4522tGYVFW-zvBIkQWkONf
          source_id: s_zYViESyVpLrCKNm51Gzdyz
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Cxe4epwV166ceFeem4ZSmC
        status: active
        display_name: 王師警
        merged_into_person_id: null
    - claim:
        id: c_5sHKsEi0DdErPqZBF9wo_B
        subject_person_id: p_tWWc2id3awt5aEbJgL5cQv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NtDADaEfWNLcf32TeZQKe5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SB0aQjxrnjo1xXaX5te6za
          claim_id: c_5sHKsEi0DdErPqZBF9wo_B
          source_id: s_zYViESyVpLrCKNm51Gzdyz
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NtDADaEfWNLcf32TeZQKe5
        status: active
        display_name: 王師會
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王清 | accepted |
| birth.date | 764年 | accepted |
| death.date | 832年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Cxe4epwV166ceFeem4ZSmC | 王師警 | accepted |
| children | p_NtDADaEfWNLcf32TeZQKe5 | 王師會 | accepted |

## 外部来源

- [中国历代人物传记资料库：王清（CBDB 146321）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146321&o=json)
