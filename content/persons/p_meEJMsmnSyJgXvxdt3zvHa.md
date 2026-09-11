---
schema: wang-person/v1
id: p_meEJMsmnSyJgXvxdt3zvHa
status: active
merged_into: null
display_name: 王逆修
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8xWRwQL4EDG1my3C8K5KhW
        subject_person_id: p_meEJMsmnSyJgXvxdt3zvHa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逆修
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zJbaFRw4ao778osYtHdPai
          claim_id: c_8xWRwQL4EDG1my3C8K5KhW
          source_id: s_TDk5jVoLtbDiipRDH6amS1
          stance: supports
          locator: CBDB:145292
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145292）
          source: &a1
            id: s_TDk5jVoLtbDiipRDH6amS1
            source_type: api_record
            title: 中国历代人物传记资料库：王逆修（CBDB 145292）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145292&o=json
            external_identifier: CBDB:145292
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.225Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PNBkHdNtGseW17krPRw5z5
        subject_person_id: p_meEJMsmnSyJgXvxdt3zvHa
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 773年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EoRyb8gDgA9UQQ6ruX61UC
          claim_id: c_PNBkHdNtGseW17krPRw5z5
          source_id: s_TDk5jVoLtbDiipRDH6amS1
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
        id: c_2PpV4tVy7gYPEoN77tVvpT
        subject_person_id: p_meEJMsmnSyJgXvxdt3zvHa
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 823年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FMWQhHEcWdDuGWt4FvFmv7
          claim_id: c_2PpV4tVy7gYPEoN77tVvpT
          source_id: s_TDk5jVoLtbDiipRDH6amS1
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
        id: c_GCPT8zuyuGqC9txWEwiBnQ
        subject_person_id: p_meEJMsmnSyJgXvxdt3zvHa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逆修（773年—823年），唐人物。籍贯豐州，曾任監察御史、都虞候。（中国历代人物传记资料库 CBDB 145292）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZbSedhHaVkxUW92DUnT6FX
          claim_id: c_GCPT8zuyuGqC9txWEwiBnQ
          source_id: s_TDk5jVoLtbDiipRDH6amS1
          stance: supports
          locator: CBDB:145292
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_q-CDFO1caHBZUI0W3Epc5y
        subject_person_id: p_7VtVn2P2atR33u6A8tLqwk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_meEJMsmnSyJgXvxdt3zvHa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3SPIcilPciteO77lTd0iKs
          claim_id: c_q-CDFO1caHBZUI0W3Epc5y
          source_id: s_TDk5jVoLtbDiipRDH6amS1
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7VtVn2P2atR33u6A8tLqwk
        status: active
        display_name: 王諫
        merged_into_person_id: null
  children:
    - claim:
        id: c_2jn_SlKY2uaGrIx4Jfmvr6
        subject_person_id: p_meEJMsmnSyJgXvxdt3zvHa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GhcftFFv7bteMjJZwTKCkF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OCzChk78IMVTV8pXELkxvt
          claim_id: c_2jn_SlKY2uaGrIx4Jfmvr6
          source_id: s_TDk5jVoLtbDiipRDH6amS1
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GhcftFFv7bteMjJZwTKCkF
        status: active
        display_name: 王昌銳
        merged_into_person_id: null
    - claim:
        id: c_i0D8Z_evvjY1tq1jDnLff1
        subject_person_id: p_meEJMsmnSyJgXvxdt3zvHa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EqUQzim757jJ6Mr5G2v9og
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yVczi7YKVG--1o3XfbI55T
          claim_id: c_i0D8Z_evvjY1tq1jDnLff1
          source_id: s_TDk5jVoLtbDiipRDH6amS1
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EqUQzim757jJ6Mr5G2v9og
        status: active
        display_name: 王昌鉥
        merged_into_person_id: null
    - claim:
        id: c_kF6LICb7NNHmR8viyBK2Ne
        subject_person_id: p_meEJMsmnSyJgXvxdt3zvHa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vCGBgbgvgrm36F1yrFyGJH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v6CQcYbtNJHS0KtScQTpFG
          claim_id: c_kF6LICb7NNHmR8viyBK2Ne
          source_id: s_TDk5jVoLtbDiipRDH6amS1
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vCGBgbgvgrm36F1yrFyGJH
        status: active
        display_name: 王昌鉷
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王逆修

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王逆修 | accepted |
| birth.date | 773年 | accepted |
| death.date | 823年 | accepted |
| bio.summary | 王逆修（773年—823年），唐人物。籍贯豐州，曾任監察御史、都虞候。（中国历代人物传记资料库 CBDB 145292） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7VtVn2P2atR33u6A8tLqwk | 王諫 | accepted |
| children | p_GhcftFFv7bteMjJZwTKCkF | 王昌銳 | accepted |
| children | p_EqUQzim757jJ6Mr5G2v9og | 王昌鉥 | accepted |
| children | p_vCGBgbgvgrm36F1yrFyGJH | 王昌鉷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王逆修（CBDB 145292）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145292&o=json)
