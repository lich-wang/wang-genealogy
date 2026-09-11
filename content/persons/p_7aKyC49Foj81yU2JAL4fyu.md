---
schema: wang-person/v1
id: p_7aKyC49Foj81yU2JAL4fyu
status: active
merged_into: null
display_name: 王子奇
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yiDW1qwp3iRJpVo352j8J7
        subject_person_id: p_7aKyC49Foj81yU2JAL4fyu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子奇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TUfjPbwWTSJnR4m4H2QV5a
          claim_id: c_yiDW1qwp3iRJpVo352j8J7
          source_id: s_jD1DQDPJHvcnrhPP4C6vAU
          stance: supports
          locator: CBDB:150087
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（150087）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Lg1JNR93MzxuE4xGAnHg5D
        subject_person_id: p_7aKyC49Foj81yU2JAL4fyu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子奇，唐人物。籍贯北芒山，曾任縣尉。（中国历代人物传记资料库 CBDB 150087）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PYd5cCMeTHLEZuftEdDDfM
          claim_id: c_Lg1JNR93MzxuE4xGAnHg5D
          source_id: s_jD1DQDPJHvcnrhPP4C6vAU
          stance: supports
          locator: CBDB:150087
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source: *a1
      object_person:
        id: p_AdgrHD2drpt44saj1nVHwe
        status: active
        display_name: 王孝京
        merged_into_person_id: null
  children:
    - claim:
        id: c_k6fzCBZ6Sf4Wu1a-agCGT1
        subject_person_id: p_7aKyC49Foj81yU2JAL4fyu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NCS3HnSp4Dd5E3wHDitrKB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-MUuFc-yK05sKQdRwo74Xk
          claim_id: c_k6fzCBZ6Sf4Wu1a-agCGT1
          source_id: s_jD1DQDPJHvcnrhPP4C6vAU
          stance: supports
          locator: 唐代墓誌匯編:二卷，Shengli 17：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NCS3HnSp4Dd5E3wHDitrKB
        status: active
        display_name: 王慶祚
        merged_into_person_id: null
    - claim:
        id: c_J3MtByDzbPvrDhG89VELo5
        subject_person_id: p_7aKyC49Foj81yU2JAL4fyu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FZBVJd6jbuAX1MdG4pCguo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SQA8Of3wxxiP3yE7ufATMK
          claim_id: c_J3MtByDzbPvrDhG89VELo5
          source_id: s_jD1DQDPJHvcnrhPP4C6vAU
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FZBVJd6jbuAX1MdG4pCguo
        status: active
        display_name: 王慶賢
        merged_into_person_id: null
    - claim:
        id: c_ULXlUDoUJJeJ3Ss2n9nual
        subject_person_id: p_7aKyC49Foj81yU2JAL4fyu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HbKpidhDiRmUPur5YohRi2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1vxx4nSbxIMk0_GMqD7_Cb
          claim_id: c_ULXlUDoUJJeJ3Ss2n9nual
          source_id: s_jD1DQDPJHvcnrhPP4C6vAU
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HbKpidhDiRmUPur5YohRi2
        status: active
        display_name: 王慶符
        merged_into_person_id: null
    - claim:
        id: c_xj3lbrLiwBLh7DEz1Yq2iY
        subject_person_id: p_7aKyC49Foj81yU2JAL4fyu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iu9UaxBeRfU2eFCxfWLHRN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OYetepeUkKhPYAtT5Ann45
          claim_id: c_xj3lbrLiwBLh7DEz1Yq2iY
          source_id: s_jD1DQDPJHvcnrhPP4C6vAU
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iu9UaxBeRfU2eFCxfWLHRN
        status: active
        display_name: 王慶詵
        merged_into_person_id: null
    - claim:
        id: c_PqjhfglAfa9vuXjO36DDFy
        subject_person_id: p_7aKyC49Foj81yU2JAL4fyu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UK93VBS5BK4cKhhMFBCUAP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EMfO4Hh0oKF5byhrFFG_AX
          claim_id: c_PqjhfglAfa9vuXjO36DDFy
          source_id: s_jD1DQDPJHvcnrhPP4C6vAU
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UK93VBS5BK4cKhhMFBCUAP
        status: active
        display_name: 王慶玄
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王子奇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子奇 | accepted |
| bio.summary | 王子奇，唐人物。籍贯北芒山，曾任縣尉。（中国历代人物传记资料库 CBDB 150087） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AdgrHD2drpt44saj1nVHwe | 王孝京 | accepted |
| children | p_NCS3HnSp4Dd5E3wHDitrKB | 王慶祚 | accepted |
| children | p_FZBVJd6jbuAX1MdG4pCguo | 王慶賢 | accepted |
| children | p_HbKpidhDiRmUPur5YohRi2 | 王慶符 | accepted |
| children | p_iu9UaxBeRfU2eFCxfWLHRN | 王慶詵 | accepted |
| children | p_UK93VBS5BK4cKhhMFBCUAP | 王慶玄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王子奇（CBDB 150087）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150087&o=json)
