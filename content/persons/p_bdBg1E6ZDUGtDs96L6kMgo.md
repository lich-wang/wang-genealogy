---
schema: wang-person/v1
id: p_bdBg1E6ZDUGtDs96L6kMgo
status: active
merged_into: null
display_name: 王汝揆
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PLy1aG8GFZxa2eJSLSwL4t
        subject_person_id: p_bdBg1E6ZDUGtDs96L6kMgo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝揆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RNaBFGkbDokq3CtSfZG2xu
          claim_id: c_PLy1aG8GFZxa2eJSLSwL4t
          source_id: s_DMBn8xGP7ZCv2YPCy1RuG1
          stance: supports
          locator: CBDB:69161
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69161）
          source: &a1
            id: s_DMBn8xGP7ZCv2YPCy1RuG1
            source_type: api_record
            title: 中国历代人物传记资料库：王汝揆（CBDB 69161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69161&o=json
            external_identifier: CBDB:69161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.133Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_wFy2u4KNTYj459ypMyysML
        subject_person_id: p_bdBg1E6ZDUGtDs96L6kMgo
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1863年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YtKDamVGoioqGoHz4KWoHW
          claim_id: c_wFy2u4KNTYj459ypMyysML
          source_id: s_DMBn8xGP7ZCv2YPCy1RuG1
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
        id: c_fQmFn7qdX4YLuQwu9UpgFo
        subject_person_id: p_bdBg1E6ZDUGtDs96L6kMgo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2UQ6BY8Qmri9tsyCcSipPb
          claim_id: c_fQmFn7qdX4YLuQwu9UpgFo
          source_id: s_DMBn8xGP7ZCv2YPCy1RuG1
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
        id: c_9DvoijkXI_YOJqzZYOhcNI
        subject_person_id: p_bdBg1E6ZDUGtDs96L6kMgo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pGRTUexW5zECSWAQa2RZoo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KO1CVqqrG6MfpwVARJp2Y8
          claim_id: c_9DvoijkXI_YOJqzZYOhcNI
          source_id: s_DMBn8xGP7ZCv2YPCy1RuG1
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12859：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pGRTUexW5zECSWAQa2RZoo
        status: active
        display_name: 王樹
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_v19bcr9TodoukQQf2l0P6O
        subject_person_id: p_bdBg1E6ZDUGtDs96L6kMgo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UZvZCvyPNM2QYs63ESS1aY
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LuPZJFgnIo3KfYjYfnTYCr
          claim_id: c_v19bcr9TodoukQQf2l0P6O
          source_id: s_DMBn8xGP7ZCv2YPCy1RuG1
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12859：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UZvZCvyPNM2QYs63ESS1aY
        status: active
        display_name: 王士藹
        merged_into_person_id: null
    - claim:
        id: c_cEUuRnB3Oh0gdW5GieKGx2
        subject_person_id: p_bdBg1E6ZDUGtDs96L6kMgo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_v7aUzZp4K1Qpnj3aQZXVNr
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GxtRkAmi7NC0_f3O1Y0lMV
          claim_id: c_cEUuRnB3Oh0gdW5GieKGx2
          source_id: s_DMBn8xGP7ZCv2YPCy1RuG1
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12859：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_v7aUzZp4K1Qpnj3aQZXVNr
        status: active
        display_name: 王士喆
        merged_into_person_id: null
    - claim:
        id: c_kOzAMmPcoHB6z16aXkhNpQ
        subject_person_id: p_bdBg1E6ZDUGtDs96L6kMgo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FhKBEjrFYva77LtJdwoQ5q
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_onziiNIMusE2cAdHZpIQMx
          claim_id: c_kOzAMmPcoHB6z16aXkhNpQ
          source_id: s_DMBn8xGP7ZCv2YPCy1RuG1
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12859：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FhKBEjrFYva77LtJdwoQ5q
        status: active
        display_name: 王念詒
        merged_into_person_id: null
  other: []
---

# 王汝揆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝揆 | accepted |
| death.date | 1863年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_pGRTUexW5zECSWAQa2RZoo | 王樹 | accepted |
| descendants | p_UZvZCvyPNM2QYs63ESS1aY | 王士藹 | accepted |
| descendants | p_v7aUzZp4K1Qpnj3aQZXVNr | 王士喆 | accepted |
| descendants | p_FhKBEjrFYva77LtJdwoQ5q | 王念詒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝揆（CBDB 69161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69161&o=json)
