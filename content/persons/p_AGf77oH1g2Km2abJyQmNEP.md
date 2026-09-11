---
schema: wang-person/v1
id: p_AGf77oH1g2Km2abJyQmNEP
status: active
merged_into: null
display_name: 王清
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ohMTP4TdRMS3RnMppH4xRq
        subject_person_id: p_AGf77oH1g2Km2abJyQmNEP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8ma2UnRiW4SNHdVZbv8rxM
          claim_id: c_ohMTP4TdRMS3RnMppH4xRq
          source_id: s_Kz9fdZJB9V8XVMspsYaBa7
          stance: supports
          locator: CBDB:185914
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（185914）
          source: &a1
            id: s_Kz9fdZJB9V8XVMspsYaBa7
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 185914）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185914&o=json
            external_identifier: CBDB:185914
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.250Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_S7Cg2ggCvFNVUER4ors8YL
        subject_person_id: p_AGf77oH1g2Km2abJyQmNEP
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 800年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qr5CC62Hnc4Z62G5as2biA
          claim_id: c_S7Cg2ggCvFNVUER4ors8YL
          source_id: s_Kz9fdZJB9V8XVMspsYaBa7
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
        id: c_AvWkMjZAmHaEdoULTfFKiM
        subject_person_id: p_AGf77oH1g2Km2abJyQmNEP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清（卒于800年），唐人物。曾任縣尉。（中国历代人物传记资料库 CBDB 185914）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ShIYSBZ0LMVXfe_RW2niRs
          claim_id: c_AvWkMjZAmHaEdoULTfFKiM
          source_id: s_Kz9fdZJB9V8XVMspsYaBa7
          stance: supports
          locator: CBDB:185914
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_1LLcccg4Pxyr1yE3Qnjmyw
        subject_person_id: p_AGf77oH1g2Km2abJyQmNEP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_thiF1H5Z24YJrMKyh67X2Q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i5Op5ItTQap_Vrws8Czwcz
          claim_id: c_1LLcccg4Pxyr1yE3Qnjmyw
          source_id: s_Kz9fdZJB9V8XVMspsYaBa7
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_thiF1H5Z24YJrMKyh67X2Q
        status: active
        display_name: 王寶
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王清 | accepted |
| death.date | 800年 | accepted |
| bio.summary | 王清（卒于800年），唐人物。曾任縣尉。（中国历代人物传记资料库 CBDB 185914） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_thiF1H5Z24YJrMKyh67X2Q | 王寶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王清（CBDB 185914）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185914&o=json)
