---
schema: wang-person/v1
id: p_82X3C77Tnmz5EH9rMPC7QU
status: active
merged_into: null
display_name: 王洧
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_X7k2eiASbpQsiKY7sVLQWt
        subject_person_id: p_82X3C77Tnmz5EH9rMPC7QU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9ohSb5grCe2y5gSMfCJLP8
          claim_id: c_X7k2eiASbpQsiKY7sVLQWt
          source_id: s_681Av3E8NoHxucgmpQNawx
          stance: supports
          locator: CBDB:175713
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175713）
          source: &a1
            id: s_681Av3E8NoHxucgmpQNawx
            source_type: api_record
            title: 中国历代人物传记资料库：王洧（CBDB 175713）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175713&o=json
            external_identifier: CBDB:175713
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.074Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_bquR75mCseaerjK1FVsEdS
        subject_person_id: p_82X3C77Tnmz5EH9rMPC7QU
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 880年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zGAXhgncZ28HfCNm9jJd2Y
          claim_id: c_bquR75mCseaerjK1FVsEdS
          source_id: s_681Av3E8NoHxucgmpQNawx
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
        id: c_4RnAyK7Tcy6huNpibXDdNh
        subject_person_id: p_82X3C77Tnmz5EH9rMPC7QU
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
        - id: cs_kEK2o4eQf2SZpakbbRU33b
          claim_id: c_4RnAyK7Tcy6huNpibXDdNh
          source_id: s_681Av3E8NoHxucgmpQNawx
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
        id: c_Q4r7A5vWB0wHX7HimjMTQm
        subject_person_id: p_zq12paWxqfRQfLAfsBmo4u
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_82X3C77Tnmz5EH9rMPC7QU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hopYUu0kCg_nZ0STahtf_c
          claim_id: c_Q4r7A5vWB0wHX7HimjMTQm
          source_id: s_681Av3E8NoHxucgmpQNawx
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zq12paWxqfRQfLAfsBmo4u
        status: active
        display_name: 王眾仲
        merged_into_person_id: null
  children:
    - claim:
        id: c_VXfBlKFZ203kFmSzxSz1CE
        subject_person_id: p_82X3C77Tnmz5EH9rMPC7QU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xtaUB5KBLd2G7QtFg9eDxi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uG8Rftcd9qSlOCik-gzHFD
          claim_id: c_VXfBlKFZ203kFmSzxSz1CE
          source_id: s_681Av3E8NoHxucgmpQNawx
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xtaUB5KBLd2G7QtFg9eDxi
        status: active
        display_name: 王鉅
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王洧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洧 | accepted |
| death.date | 880年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zq12paWxqfRQfLAfsBmo4u | 王眾仲 | accepted |
| children | p_xtaUB5KBLd2G7QtFg9eDxi | 王鉅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王洧（CBDB 175713）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175713&o=json)
