---
schema: wang-person/v1
id: p_zyrGRhnHa5tjEywfEHodVY
status: active
merged_into: null
display_name: 王晛
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ABrpZncHdNYD46ZLExiUMU
        subject_person_id: p_zyrGRhnHa5tjEywfEHodVY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Btpu2rsb3WbG9fGFVHS4QX
          claim_id: c_ABrpZncHdNYD46ZLExiUMU
          source_id: s_SfNvM1R8VDZF9J8Tv9KFxE
          stance: supports
          locator: CBDB:175821
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175821）
          source: &a1
            id: s_SfNvM1R8VDZF9J8Tv9KFxE
            source_type: api_record
            title: 中国历代人物传记资料库：王晛（CBDB 175821）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175821&o=json
            external_identifier: CBDB:175821
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.143Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_mQuGW2Gv1ZTEhmpq3CQuWi
        subject_person_id: p_zyrGRhnHa5tjEywfEHodVY
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 781年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ikyAjbsHEsuzm9hgvRY8hk
          claim_id: c_mQuGW2Gv1ZTEhmpq3CQuWi
          source_id: s_SfNvM1R8VDZF9J8Tv9KFxE
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
        id: c_mT2Eh9aVjCFnaNKPjBB2pY
        subject_person_id: p_zyrGRhnHa5tjEywfEHodVY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晛（卒于781年），唐人物。籍贯晉陽。（中国历代人物传记资料库 CBDB 175821）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WwQeF37CknFAecQrDqJy1i
          claim_id: c_mT2Eh9aVjCFnaNKPjBB2pY
          source_id: s_SfNvM1R8VDZF9J8Tv9KFxE
          stance: supports
          locator: CBDB:175821
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RjwjbcR-Cc3rpR2ifvhdo0
        subject_person_id: p_SGeMYrvQyjS48RnQNcBfCh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zyrGRhnHa5tjEywfEHodVY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RMq_IWaHfYiElEQIt3E1ro
          claim_id: c_RjwjbcR-Cc3rpR2ifvhdo0
          source_id: s_tif7iYmAbV5mFPFGRxQiXs
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tif7iYmAbV5mFPFGRxQiXs
            source_type: api_record
            title: 中国历代人物传记资料库：王昇（CBDB 175818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175818&o=json
            external_identifier: CBDB:175818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.140Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_SGeMYrvQyjS48RnQNcBfCh
        status: active
        display_name: 王昇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王晛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晛 | accepted |
| death.date | 781年 | accepted |
| bio.summary | 王晛（卒于781年），唐人物。籍贯晉陽。（中国历代人物传记资料库 CBDB 175821） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SGeMYrvQyjS48RnQNcBfCh | 王昇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昇（CBDB 175818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175818&o=json)
- [中国历代人物传记资料库：王晛（CBDB 175821）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175821&o=json)
