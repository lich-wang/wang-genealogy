---
schema: wang-person/v1
id: p_mcgB2DJLnWFj93csFB2iNf
status: active
merged_into: null
display_name: 王子真
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MaFwfzRmqcBMxGEtdPE7uw
        subject_person_id: p_mcgB2DJLnWFj93csFB2iNf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子真
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H1MaYACfgEzFbzAGAM9AE4
          claim_id: c_MaFwfzRmqcBMxGEtdPE7uw
          source_id: s_xWeBe8d6TVNk4MeTkGukFJ
          stance: supports
          locator: CBDB:175743
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175743）
          source: &a1
            id: s_xWeBe8d6TVNk4MeTkGukFJ
            source_type: api_record
            title: 中国历代人物传记资料库：王子真（CBDB 175743）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175743&o=json
            external_identifier: CBDB:175743
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.092Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_62zSpkycsEK6PtRESAwDdK
        subject_person_id: p_mcgB2DJLnWFj93csFB2iNf
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 658年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_btwbgT76CB2CgY2UPH43J1
          claim_id: c_62zSpkycsEK6PtRESAwDdK
          source_id: s_xWeBe8d6TVNk4MeTkGukFJ
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
        id: c_WBT8T85zfxHR8fQXkXBPHd
        subject_person_id: p_mcgB2DJLnWFj93csFB2iNf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子真（卒于658年），唐人物。籍贯北芒山，曾任倉部郎中。（中国历代人物传记资料库 CBDB 175743）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-bl0-3HTnDwWBeD3hQUCJW
          claim_id: c_WBT8T85zfxHR8fQXkXBPHd
          source_id: s_xWeBe8d6TVNk4MeTkGukFJ
          stance: supports
          locator: CBDB:175743
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fV6JZGpiXUbFx-bRYALgNd
        subject_person_id: p_AdgrHD2drpt44saj1nVHwe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mcgB2DJLnWFj93csFB2iNf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_44y07fDRbSYSXN3-zNGo27
          claim_id: c_fV6JZGpiXUbFx-bRYALgNd
          source_id: s_xWeBe8d6TVNk4MeTkGukFJ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_AdgrHD2drpt44saj1nVHwe
        status: active
        display_name: 王孝京
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王子真

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子真 | accepted |
| death.date | 658年 | accepted |
| bio.summary | 王子真（卒于658年），唐人物。籍贯北芒山，曾任倉部郎中。（中国历代人物传记资料库 CBDB 175743） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AdgrHD2drpt44saj1nVHwe | 王孝京 | accepted |

## 外部来源

- [中国历代人物传记资料库：王子真（CBDB 175743）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175743&o=json)
