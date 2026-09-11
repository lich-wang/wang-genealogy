---
schema: wang-person/v1
id: p_EekV1er5JkAj6hekaqJDVE
status: active
merged_into: null
display_name: 王昌
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yVJJvzHBX9TXFk2eakw6D5
        subject_person_id: p_EekV1er5JkAj6hekaqJDVE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_d2Zn7M1BJazGFLMAJP1CfQ
          claim_id: c_yVJJvzHBX9TXFk2eakw6D5
          source_id: s_zk5P4Ec6BpG4pRMBmch3A3
          stance: supports
          locator: CBDB:168569
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（168569）
          source: &a1
            id: s_zk5P4Ec6BpG4pRMBmch3A3
            source_type: api_record
            title: 中国历代人物传记资料库：王昌（CBDB 168569）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168569&o=json
            external_identifier: CBDB:168569
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.999Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kqwp94DtNAJzqCMK4Q9fGz
        subject_person_id: p_EekV1er5JkAj6hekaqJDVE
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
        - id: cs_Xjv5Du1T8ZbNLQhHd9bHiG
          claim_id: c_kqwp94DtNAJzqCMK4Q9fGz
          source_id: s_zk5P4Ec6BpG4pRMBmch3A3
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
        id: c_lTTvGJQpxqfPSM1L4wmAbX
        subject_person_id: p_EekV1er5JkAj6hekaqJDVE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Lq74ESPuUFpGQU5tURbhKg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8nDFCM17kBRjF71aJiCZKE
          claim_id: c_lTTvGJQpxqfPSM1L4wmAbX
          source_id: s_zk5P4Ec6BpG4pRMBmch3A3
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Lq74ESPuUFpGQU5tURbhKg
        status: active
        display_name: 王文禮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_HbCjpMf2QfYx8HuJ_pODbV
        subject_person_id: p_EekV1er5JkAj6hekaqJDVE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_YsPayRFH97RfRhHgyPnWty
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4KX1H0Wr1TNGAol2CqwXuu
          claim_id: c_HbCjpMf2QfYx8HuJ_pODbV
          source_id: s_zk5P4Ec6BpG4pRMBmch3A3
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Qianfu8：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YsPayRFH97RfRhHgyPnWty
        status: active
        display_name: 王幼虞
        merged_into_person_id: null
  other: []
---

# 王昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昌 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Lq74ESPuUFpGQU5tURbhKg | 王文禮 | accepted |
| descendants | p_YsPayRFH97RfRhHgyPnWty | 王幼虞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昌（CBDB 168569）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168569&o=json)
