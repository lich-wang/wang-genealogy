---
schema: wang-person/v1
id: p_nTV1T9RX74vHEA3tyMaebm
status: active
merged_into: null
display_name: 王與齡
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_egBFVPUg7n5MFPoHzzKQEm
        subject_person_id: p_nTV1T9RX74vHEA3tyMaebm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王與齡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_y9ieNaaoujaRFt1o5PbS5T
          claim_id: c_egBFVPUg7n5MFPoHzzKQEm
          source_id: s_VNsrGWznq4wS5HwLa4u6ov
          stance: supports
          locator: CBDB:68464
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68464）
          source: &a1
            id: s_VNsrGWznq4wS5HwLa4u6ov
            source_type: api_record
            title: 中国历代人物传记资料库：王與齡（CBDB 68464）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68464&o=json
            external_identifier: CBDB:68464
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.073Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kkop8pr3DEXgL4Yv2LSbwV
        subject_person_id: p_nTV1T9RX74vHEA3tyMaebm
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1508年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zgwWZhoY6JGs7idP43bcSB
          claim_id: c_kkop8pr3DEXgL4Yv2LSbwV
          source_id: s_VNsrGWznq4wS5HwLa4u6ov
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
        id: c_d3ZtW1HriH5mrWRX4xPKcv
        subject_person_id: p_nTV1T9RX74vHEA3tyMaebm
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1564年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JNgxwXD7oW7TEpq6353ma6
          claim_id: c_d3ZtW1HriH5mrWRX4xPKcv
          source_id: s_VNsrGWznq4wS5HwLa4u6ov
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
        id: c_GDDqRqvgpMJ9dRTTDLEQs6
        subject_person_id: p_nTV1T9RX74vHEA3tyMaebm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王與齡（1508年—1564年），明人物。明清進士進士，籍贯鄉寧，入仕進士，曾任府推官、戶部湖廣司主事、吏部稽勳司員外郎。（中国历代人物传记资料库 CBDB 68464）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_y8N6kHnjK8RzYwgyU3nZjn
          claim_id: c_GDDqRqvgpMJ9dRTTDLEQs6
          source_id: s_VNsrGWznq4wS5HwLa4u6ov
          stance: supports
          locator: CBDB:68464
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_y8BO6IFrr1or262DOvxm5L
        subject_person_id: p_KHASkzeAzAbrH4KC5REzz6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nTV1T9RX74vHEA3tyMaebm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vR8flGAu7JF6SVKd2tDJ6P
          claim_id: c_y8BO6IFrr1or262DOvxm5L
          source_id: s_VNsrGWznq4wS5HwLa4u6ov
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百七十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KHASkzeAzAbrH4KC5REzz6
        status: active
        display_name: 王爵
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_4z1vZkmLgpR8V1vdE3ruL6
        subject_person_id: p_nTV1T9RX74vHEA3tyMaebm
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_b83k4g1WnCibKe1zSFCq2F
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_go1qh4bsiUtk096OGg4MF-
          claim_id: c_4z1vZkmLgpR8V1vdE3ruL6
          source_id: s_VNsrGWznq4wS5HwLa4u6ov
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百七十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_b83k4g1WnCibKe1zSFCq2F
        status: active
        display_name: 高氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_Iz3YiirdX4EPqZsHBstDgE
        subject_person_id: p_FxDnZ7tzsLrvZRviCHaK5y
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nTV1T9RX74vHEA3tyMaebm
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mhcUwAOM6bZr0ar7TznN0g
          claim_id: c_Iz3YiirdX4EPqZsHBstDgE
          source_id: s_VNsrGWznq4wS5HwLa4u6ov
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百七十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FxDnZ7tzsLrvZRviCHaK5y
        status: active
        display_name: 王睿
        merged_into_person_id: null
    - claim:
        id: c_2ThUw0DJiMfRFXCY9iAwtJ
        subject_person_id: p_qa4sYo9q4waHmECZyCZ8M3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nTV1T9RX74vHEA3tyMaebm
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KYOAJRT5qsOXfoICSc_ZAB
          claim_id: c_2ThUw0DJiMfRFXCY9iAwtJ
          source_id: s_VNsrGWznq4wS5HwLa4u6ov
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百七十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qa4sYo9q4waHmECZyCZ8M3
        status: active
        display_name: 王文
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王與齡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王與齡 | accepted |
| birth.date | 1508年 | accepted |
| death.date | 1564年 | accepted |
| bio.summary | 王與齡（1508年—1564年），明人物。明清進士進士，籍贯鄉寧，入仕進士，曾任府推官、戶部湖廣司主事、吏部稽勳司員外郎。（中国历代人物传记资料库 CBDB 68464） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KHASkzeAzAbrH4KC5REzz6 | 王爵 | accepted |
| spouses | p_b83k4g1WnCibKe1zSFCq2F | 高氏 | accepted |
| ancestors | p_FxDnZ7tzsLrvZRviCHaK5y | 王睿 | accepted |
| ancestors | p_qa4sYo9q4waHmECZyCZ8M3 | 王文 | accepted |

## 外部来源

- [中国历代人物传记资料库：王與齡（CBDB 68464）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68464&o=json)
