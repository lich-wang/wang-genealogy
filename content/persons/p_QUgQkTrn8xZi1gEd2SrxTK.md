---
schema: wang-person/v1
id: p_QUgQkTrn8xZi1gEd2SrxTK
status: active
merged_into: null
display_name: 王貞
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jTYVoHvPcNCP86YpHKJhiX
        subject_person_id: p_QUgQkTrn8xZi1gEd2SrxTK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3YTNPx4nkFxEnCVK7Rjf34
          claim_id: c_jTYVoHvPcNCP86YpHKJhiX
          source_id: s_tGGFTQP8s4zNaWGrS9fDFQ
          stance: supports
          locator: CBDB:190800
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190800）
          source: &a1
            id: s_tGGFTQP8s4zNaWGrS9fDFQ
            source_type: api_record
            title: 中国历代人物传记资料库：王貞（CBDB 190800）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190800&o=json
            external_identifier: CBDB:190800
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.337Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_B3xHGHFYHjd6vkrodifbKY
        subject_person_id: p_QUgQkTrn8xZi1gEd2SrxTK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 858年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HHNo9gxsMLcYSWQsFGXwJz
          claim_id: c_B3xHGHFYHjd6vkrodifbKY
          source_id: s_tGGFTQP8s4zNaWGrS9fDFQ
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
        id: c_AxhY1pHWSUxNNKJkiVQ1Kc
        subject_person_id: p_QUgQkTrn8xZi1gEd2SrxTK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貞（卒于858年），唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 190800）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GSM0AvNbsI8Ai1Nvy7tyfc
          claim_id: c_AxhY1pHWSUxNNKJkiVQ1Kc
          source_id: s_tGGFTQP8s4zNaWGrS9fDFQ
          stance: supports
          locator: CBDB:190800
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wUPuomlS4a-T2Qrb6SFSMA
        subject_person_id: p_HeGfMzKQ5r77Gp7MCsAkL6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QUgQkTrn8xZi1gEd2SrxTK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xcoyAp4JtMOz1bguu1OU95
          claim_id: c_wUPuomlS4a-T2Qrb6SFSMA
          source_id: s_tGGFTQP8s4zNaWGrS9fDFQ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HeGfMzKQ5r77Gp7MCsAkL6
        status: active
        display_name: 王仲舒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貞 | accepted |
| death.date | 858年 | accepted |
| bio.summary | 王貞（卒于858年），唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 190800） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HeGfMzKQ5r77Gp7MCsAkL6 | 王仲舒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王貞（CBDB 190800）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190800&o=json)
