---
schema: wang-person/v1
id: p_C76WEam8DrJz85GjQuBEXF
status: active
merged_into: null
display_name: 王頌蔚
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gsH1ZaYCZ9ZE7tCnJVRn2z
        subject_person_id: p_C76WEam8DrJz85GjQuBEXF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頌蔚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bkrabDHkMKEmsb2BMVZGge
          claim_id: c_gsH1ZaYCZ9ZE7tCnJVRn2z
          source_id: s_g2v8cqJ5RPSCgN3VLzp6tD
          stance: supports
          locator: CBDB:69381
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69381）
          source: &a1
            id: s_g2v8cqJ5RPSCgN3VLzp6tD
            source_type: api_record
            title: 中国历代人物传记资料库：王頌蔚（CBDB 69381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69381&o=json
            external_identifier: CBDB:69381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.236Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_T5eUHKfJZMYeBHF6qAWyDG
        subject_person_id: p_C76WEam8DrJz85GjQuBEXF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1849年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iCkyh6BJ6LkU3a6MpyTrAL
          claim_id: c_T5eUHKfJZMYeBHF6qAWyDG
          source_id: s_g2v8cqJ5RPSCgN3VLzp6tD
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
        id: c_QS3mawzbGreZa373D5Lsmw
        subject_person_id: p_C76WEam8DrJz85GjQuBEXF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1896年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yZxqHokKiKE6BuXo9jVU7m
          claim_id: c_QS3mawzbGreZa373D5Lsmw
          source_id: s_g2v8cqJ5RPSCgN3VLzp6tD
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
        id: c_KjmNT7N1quLDUTKes8AX8L
        subject_person_id: p_C76WEam8DrJz85GjQuBEXF
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
        - id: cs_qKUR1TR4ZLJNUv1yEwi9PA
          claim_id: c_KjmNT7N1quLDUTKes8AX8L
          source_id: s_g2v8cqJ5RPSCgN3VLzp6tD
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
        id: c_P1nRjR4fHeVheW-bcZpxyH
        subject_person_id: p_FgwX9g9y6cnoX1nYCtaJjE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C76WEam8DrJz85GjQuBEXF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3jyvthDz8bQV121AOHPKK2
          claim_id: c_P1nRjR4fHeVheW-bcZpxyH
          source_id: s_g2v8cqJ5RPSCgN3VLzp6tD
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13086：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FgwX9g9y6cnoX1nYCtaJjE
        status: active
        display_name: 王仁榮
        merged_into_person_id: null
  children:
    - claim:
        id: c_3QJeLC3UqqDnPV9qDifYvz
        subject_person_id: p_C76WEam8DrJz85GjQuBEXF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HsvMC5nfyPq1op4LsQrFQD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Wd5_O24-PUl2TwOY3hpnlF
          claim_id: c_3QJeLC3UqqDnPV9qDifYvz
          source_id: s_g2v8cqJ5RPSCgN3VLzp6tD
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13086：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HsvMC5nfyPq1op4LsQrFQD
        status: active
        display_name: 王季同
        merged_into_person_id: null
    - claim:
        id: c_SKH0XKEYvrkHrtvxwSUjs4
        subject_person_id: p_C76WEam8DrJz85GjQuBEXF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_v9mVj2SEBUGRFniDPfF8Xe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MvT7ivhumJIXf9nqpvT35y
          claim_id: c_SKH0XKEYvrkHrtvxwSUjs4
          source_id: s_g2v8cqJ5RPSCgN3VLzp6tD
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13086：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_v9mVj2SEBUGRFniDPfF8Xe
        status: active
        display_name: 王季點
        merged_into_person_id: null
    - claim:
        id: c_0HXfmmAojNp53kyxdIWSpU
        subject_person_id: p_C76WEam8DrJz85GjQuBEXF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_du1wv75PTsu7D1KzQJ7qDz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SRebPJW1mB9XhRo-HsYjmS
          claim_id: c_0HXfmmAojNp53kyxdIWSpU
          source_id: s_g2v8cqJ5RPSCgN3VLzp6tD
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13086：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_du1wv75PTsu7D1KzQJ7qDz
        status: active
        display_name: 王季緖
        merged_into_person_id: null
    - claim:
        id: c_acg6WO55_hhcr_eONt5b_S
        subject_person_id: p_C76WEam8DrJz85GjQuBEXF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_StHun8VFFH87mBmS8MCxBU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VcM5TjSzmtQnGYyVICcfz1
          claim_id: c_acg6WO55_hhcr_eONt5b_S
          source_id: s_g2v8cqJ5RPSCgN3VLzp6tD
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13086：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_StHun8VFFH87mBmS8MCxBU
        status: active
        display_name: 王季鋚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_6jhlDA3IBbxu7p52vcpbbe
        subject_person_id: p_Cj6M93AwGRJ5MiNLd6oWre
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_C76WEam8DrJz85GjQuBEXF
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9onsCBWdMmdx1RkPVDpbpY
          claim_id: c_6jhlDA3IBbxu7p52vcpbbe
          source_id: s_g2v8cqJ5RPSCgN3VLzp6tD
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13086：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Cj6M93AwGRJ5MiNLd6oWre
        status: active
        display_name: 王朝華
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_cIF2qKk--OvH3mTjGPsWZj
        subject_person_id: p_C76WEam8DrJz85GjQuBEXF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3HwM4h6E5W1BCtZKCaHLnu
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AlYkdpUaCtb4x-8vubxASU
          claim_id: c_cIF2qKk--OvH3mTjGPsWZj
          source_id: s_g2v8cqJ5RPSCgN3VLzp6tD
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13086：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3HwM4h6E5W1BCtZKCaHLnu
        status: active
        display_name: 王守兌
        merged_into_person_id: null
    - claim:
        id: c_6_UCJGOzUveJ619Ka4I6fI
        subject_person_id: p_C76WEam8DrJz85GjQuBEXF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_t5r6LquPNPfyQnnFrDjXCD
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Yth86bD-Q2HUuDK6bZ2dqw
          claim_id: c_6_UCJGOzUveJ619Ka4I6fI
          source_id: s_g2v8cqJ5RPSCgN3VLzp6tD
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13086：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_t5r6LquPNPfyQnnFrDjXCD
        status: active
        display_name: 王守則
        merged_into_person_id: null
    - claim:
        id: c_QXDvcHM8ulgLbWQBV9e9qD
        subject_person_id: p_C76WEam8DrJz85GjQuBEXF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jMismX26yCw4b2MB5ytzga
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hGUC3UyLr1U-6hgcxltYJ-
          claim_id: c_QXDvcHM8ulgLbWQBV9e9qD
          source_id: s_g2v8cqJ5RPSCgN3VLzp6tD
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13086：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jMismX26yCw4b2MB5ytzga
        status: active
        display_name: 王守恥
        merged_into_person_id: null
    - claim:
        id: c_EoGkk4yKPFBA4rnjIxjti1
        subject_person_id: p_C76WEam8DrJz85GjQuBEXF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_m2CHqDNQ7KPe1wSKww2A2V
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_euVvGkW0iAELmWZTs13Qfz
          claim_id: c_EoGkk4yKPFBA4rnjIxjti1
          source_id: s_g2v8cqJ5RPSCgN3VLzp6tD
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13086：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_m2CHqDNQ7KPe1wSKww2A2V
        status: active
        display_name: 王守泰
        merged_into_person_id: null
    - claim:
        id: c_vj2ZTNMTcGD0DdMWOniFbJ
        subject_person_id: p_C76WEam8DrJz85GjQuBEXF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MqH8u283nd4NvdhWejAKQj
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YFkWwz21eCQPuabmroiY6S
          claim_id: c_vj2ZTNMTcGD0DdMWOniFbJ
          source_id: s_g2v8cqJ5RPSCgN3VLzp6tD
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13086：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MqH8u283nd4NvdhWejAKQj
        status: active
        display_name: 王守鼎
        merged_into_person_id: null
    - claim:
        id: c_nQ6uADxFR4TyV_EXwEr4SY
        subject_person_id: p_C76WEam8DrJz85GjQuBEXF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_eUuC7b8D89AHBkambQdD3r
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OLKTTIqjYTGz1In8SX1uAi
          claim_id: c_nQ6uADxFR4TyV_EXwEr4SY
          source_id: s_g2v8cqJ5RPSCgN3VLzp6tD
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13086：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_eUuC7b8D89AHBkambQdD3r
        status: active
        display_name: 王守熾
        merged_into_person_id: null
    - claim:
        id: c_cLUEeKj-aO6GLB4w0-cyyn
        subject_person_id: p_C76WEam8DrJz85GjQuBEXF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WgAzpAW51TbQP1qCXJ8881
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ui6JZIGsEHXMz50hoXzjna
          claim_id: c_cLUEeKj-aO6GLB4w0-cyyn
          source_id: s_g2v8cqJ5RPSCgN3VLzp6tD
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13086：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WgAzpAW51TbQP1qCXJ8881
        status: active
        display_name: 王守競
        merged_into_person_id: null
  other: []
---

# 王頌蔚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王頌蔚 | accepted |
| birth.date | 1849年 | accepted |
| death.date | 1896年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FgwX9g9y6cnoX1nYCtaJjE | 王仁榮 | accepted |
| children | p_HsvMC5nfyPq1op4LsQrFQD | 王季同 | accepted |
| children | p_v9mVj2SEBUGRFniDPfF8Xe | 王季點 | accepted |
| children | p_du1wv75PTsu7D1KzQJ7qDz | 王季緖 | accepted |
| children | p_StHun8VFFH87mBmS8MCxBU | 王季鋚 | accepted |
| ancestors | p_Cj6M93AwGRJ5MiNLd6oWre | 王朝華 | accepted |
| descendants | p_3HwM4h6E5W1BCtZKCaHLnu | 王守兌 | accepted |
| descendants | p_t5r6LquPNPfyQnnFrDjXCD | 王守則 | accepted |
| descendants | p_jMismX26yCw4b2MB5ytzga | 王守恥 | accepted |
| descendants | p_m2CHqDNQ7KPe1wSKww2A2V | 王守泰 | accepted |
| descendants | p_MqH8u283nd4NvdhWejAKQj | 王守鼎 | accepted |
| descendants | p_eUuC7b8D89AHBkambQdD3r | 王守熾 | accepted |
| descendants | p_WgAzpAW51TbQP1qCXJ8881 | 王守競 | accepted |

## 外部来源

- [中国历代人物传记资料库：王頌蔚（CBDB 69381）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69381&o=json)
