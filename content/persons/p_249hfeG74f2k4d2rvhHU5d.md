---
schema: wang-person/v1
id: p_249hfeG74f2k4d2rvhHU5d
status: active
merged_into: null
display_name: 王端
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vJ4WSrgT1s7TsqYd5f61xX
        subject_person_id: p_249hfeG74f2k4d2rvhHU5d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vBdfDBbwAGr2WjpVyCHhty
          claim_id: c_vJ4WSrgT1s7TsqYd5f61xX
          source_id: s_QCXfQmMjoNQqKRugr7PKZT
          stance: supports
          locator: CBDB:192577
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（192577）
          source: &a1
            id: s_QCXfQmMjoNQqKRugr7PKZT
            source_type: api_record
            title: 中国历代人物传记资料库：王端（CBDB 192577）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192577&o=json
            external_identifier: CBDB:192577
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.403Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_C8rZA7ViDsKZG2pvJby9Ep
        subject_person_id: p_249hfeG74f2k4d2rvhHU5d
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
        - id: cs_M411erRXzsp1stjFxmSiXS
          claim_id: c_C8rZA7ViDsKZG2pvJby9Ep
          source_id: s_QCXfQmMjoNQqKRugr7PKZT
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
        id: c_Ej5vSz9ffb2e3BYUAcqtyk
        subject_person_id: p_249hfeG74f2k4d2rvhHU5d
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 813年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LZpqNYo6Wj2xZz66Hy4MZH
          claim_id: c_Ej5vSz9ffb2e3BYUAcqtyk
          source_id: s_QCXfQmMjoNQqKRugr7PKZT
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
        id: c_eYhGWJwgtGqw9o9smEqk9J
        subject_person_id: p_249hfeG74f2k4d2rvhHU5d
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端（764年—813年），唐人物。籍贯洛陽，曾任太常寺奉禮郎。（中国历代人物传记资料库 CBDB 192577）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YbWjSwxtZcAxlgkJXlzA7m
          claim_id: c_eYhGWJwgtGqw9o9smEqk9J
          source_id: s_QCXfQmMjoNQqKRugr7PKZT
          stance: supports
          locator: CBDB:192577
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hab5NiPvRCoT80Bai82eLf
        subject_person_id: p_euwEM6MRM5xpuaBi1NzoJT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_249hfeG74f2k4d2rvhHU5d
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A3LpUuyCh_srRYIp9DLs_D
          claim_id: c_hab5NiPvRCoT80Bai82eLf
          source_id: s_QCXfQmMjoNQqKRugr7PKZT
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_euwEM6MRM5xpuaBi1NzoJT
        status: active
        display_name: 王珍
        merged_into_person_id: null
  children:
    - claim:
        id: c_XEEGbAnTdSQBwT-ZwMP1N7
        subject_person_id: p_249hfeG74f2k4d2rvhHU5d
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KgeuPB7t5t9t6mRJ1g2GEr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yxiCSp4wtEXR7Y3KGY_skb
          claim_id: c_XEEGbAnTdSQBwT-ZwMP1N7
          source_id: s_QCXfQmMjoNQqKRugr7PKZT
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KgeuPB7t5t9t6mRJ1g2GEr
        status: active
        display_name: 王怡則
        merged_into_person_id: null
    - claim:
        id: c_LaD8XabeEFGA3rmaeABlet
        subject_person_id: p_249hfeG74f2k4d2rvhHU5d
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WRjT51TShCxVVBXDJFWpNY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SutuagbQEhgO0aUM0Yh6Jp
          claim_id: c_LaD8XabeEFGA3rmaeABlet
          source_id: s_QCXfQmMjoNQqKRugr7PKZT
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WRjT51TShCxVVBXDJFWpNY
        status: active
        display_name: 王元度
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王端

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王端 | accepted |
| birth.date | 764年 | accepted |
| death.date | 813年 | accepted |
| bio.summary | 王端（764年—813年），唐人物。籍贯洛陽，曾任太常寺奉禮郎。（中国历代人物传记资料库 CBDB 192577） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_euwEM6MRM5xpuaBi1NzoJT | 王珍 | accepted |
| children | p_KgeuPB7t5t9t6mRJ1g2GEr | 王怡則 | accepted |
| children | p_WRjT51TShCxVVBXDJFWpNY | 王元度 | accepted |

## 外部来源

- [中国历代人物传记资料库：王端（CBDB 192577）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192577&o=json)
