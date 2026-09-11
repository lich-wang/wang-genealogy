---
schema: wang-person/v1
id: p_AdgrHD2drpt44saj1nVHwe
status: active
merged_into: null
display_name: 王孝京
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MS9t8rG387v69AMaFdEt8s
        subject_person_id: p_AdgrHD2drpt44saj1nVHwe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝京
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i5hWs8qUiRHu51fTryijVX
          claim_id: c_MS9t8rG387v69AMaFdEt8s
          source_id: s_NsnVo9qSF1PZBHQZpntJG1
          stance: supports
          locator: CBDB:175702
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175702）
          source: &a1
            id: s_NsnVo9qSF1PZBHQZpntJG1
            source_type: api_record
            title: 中国历代人物传记资料库：王孝京（CBDB 175702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175702&o=json
            external_identifier: CBDB:175702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.247Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_kY4sFGaxH44GRQMLfMFhVe
        subject_person_id: p_AdgrHD2drpt44saj1nVHwe
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 621年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ofMCwLxPCa6bz4xwFG6Tx7
          claim_id: c_kY4sFGaxH44GRQMLfMFhVe
          source_id: s_NsnVo9qSF1PZBHQZpntJG1
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
        id: c_WAe9YyUEuSAYAMiaA8GkLX
        subject_person_id: p_AdgrHD2drpt44saj1nVHwe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝京（卒于621年），唐人物。籍贯北芒山，曾任參軍。（中国历代人物传记资料库 CBDB 175702）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mGcyGWkypzAmBH9VdWadOv
          claim_id: c_WAe9YyUEuSAYAMiaA8GkLX
          source_id: s_NsnVo9qSF1PZBHQZpntJG1
          stance: supports
          locator: CBDB:175702
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7pSv6_A2fQ60Ig2JAPf9tj
        subject_person_id: p_5DyZb4VPN6kQ3yNqbGjxpz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AdgrHD2drpt44saj1nVHwe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1-Z2TNRzuK3BBMz8QoDCnk
          claim_id: c_7pSv6_A2fQ60Ig2JAPf9tj
          source_id: s_djtoCsz5bs8P8NA1pp3FyJ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_djtoCsz5bs8P8NA1pp3FyJ
            source_type: api_record
            title: 中国历代人物传记资料库：王邵（CBDB 175701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175701&o=json
            external_identifier: CBDB:175701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.064Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5DyZb4VPN6kQ3yNqbGjxpz
        status: active
        display_name: 王邵
        merged_into_person_id: null
  children:
    - claim:
        id: c_TaZk0-0zOHEXoNQqGGiwWd
        subject_person_id: p_AdgrHD2drpt44saj1nVHwe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7aKyC49Foj81yU2JAL4fyu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_je6roKwkY0PHG3ZFOicAQo
          claim_id: c_TaZk0-0zOHEXoNQqGGiwWd
          source_id: s_jD1DQDPJHvcnrhPP4C6vAU
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jD1DQDPJHvcnrhPP4C6vAU
            source_type: api_record
            title: 中国历代人物传记资料库：王子奇（CBDB 150087）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150087&o=json
            external_identifier: CBDB:150087
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.809Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7aKyC49Foj81yU2JAL4fyu
        status: active
        display_name: 王子奇
        merged_into_person_id: null
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
          source:
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
      object_person:
        id: p_mcgB2DJLnWFj93csFB2iNf
        status: active
        display_name: 王子真
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王孝京

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孝京 | accepted |
| death.date | 621年 | accepted |
| bio.summary | 王孝京（卒于621年），唐人物。籍贯北芒山，曾任參軍。（中国历代人物传记资料库 CBDB 175702） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5DyZb4VPN6kQ3yNqbGjxpz | 王邵 | accepted |
| children | p_7aKyC49Foj81yU2JAL4fyu | 王子奇 | accepted |
| children | p_mcgB2DJLnWFj93csFB2iNf | 王子真 | accepted |

## 外部来源

- [中国历代人物传记资料库：王邵（CBDB 175701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175701&o=json)
- [中国历代人物传记资料库：王孝京（CBDB 175702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175702&o=json)
- [中国历代人物传记资料库：王子奇（CBDB 150087）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150087&o=json)
- [中国历代人物传记资料库：王子真（CBDB 175743）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175743&o=json)
