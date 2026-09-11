---
schema: wang-person/v1
id: p_aak7BTbPT1FPBghTmKpiVW
status: active
merged_into: null
display_name: 王收
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TNsuS3SySeRYd8YoyZPc5Q
        subject_person_id: p_aak7BTbPT1FPBghTmKpiVW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王收
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8qSZQagQFqj9R3t8uaDYu8
          claim_id: c_TNsuS3SySeRYd8YoyZPc5Q
          source_id: s_oNo9Hfx2vpoGM4Pu6R8WFy
          stance: supports
          locator: CBDB:175946
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175946）
          source: &a1
            id: s_oNo9Hfx2vpoGM4Pu6R8WFy
            source_type: api_record
            title: 中国历代人物传记资料库：王收（CBDB 175946）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175946&o=json
            external_identifier: CBDB:175946
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.213Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_SUBxL8LmxvHZxoe4m9nUmj
        subject_person_id: p_aak7BTbPT1FPBghTmKpiVW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 837年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Lm3A8HGXbzspeGQZHLCFKv
          claim_id: c_SUBxL8LmxvHZxoe4m9nUmj
          source_id: s_oNo9Hfx2vpoGM4Pu6R8WFy
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
        id: c_U5YfM5sAqMSREcSt8SB7y3
        subject_person_id: p_aak7BTbPT1FPBghTmKpiVW
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
        - id: cs_EaRPGwR3CzhL1pxXGRDbCW
          claim_id: c_U5YfM5sAqMSREcSt8SB7y3
          source_id: s_oNo9Hfx2vpoGM4Pu6R8WFy
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
        id: c_j6c2XPZKAuDuOpeBQjDT6r
        subject_person_id: p_Z9eKPAK6aboLcXL2xUEuDQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aak7BTbPT1FPBghTmKpiVW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pcnfpqO4C-FSDqHMt9Llh_
          claim_id: c_j6c2XPZKAuDuOpeBQjDT6r
          source_id: s_oNo9Hfx2vpoGM4Pu6R8WFy
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Z9eKPAK6aboLcXL2xUEuDQ
        status: active
        display_name: 王行古
        merged_into_person_id: null
  children:
    - claim:
        id: c_x9sh-_7ncS48eemNN8jO-_
        subject_person_id: p_aak7BTbPT1FPBghTmKpiVW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bdu1W8PsJpyj6YBFL29PeS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BL8621yMHW6bz7RpBWDxCR
          claim_id: c_x9sh-_7ncS48eemNN8jO-_
          source_id: s_oNo9Hfx2vpoGM4Pu6R8WFy
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bdu1W8PsJpyj6YBFL29PeS
        status: active
        display_name: 王超
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王收

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王收 | accepted |
| death.date | 837年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Z9eKPAK6aboLcXL2xUEuDQ | 王行古 | accepted |
| children | p_bdu1W8PsJpyj6YBFL29PeS | 王超 | accepted |

## 外部来源

- [中国历代人物传记资料库：王收（CBDB 175946）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175946&o=json)
