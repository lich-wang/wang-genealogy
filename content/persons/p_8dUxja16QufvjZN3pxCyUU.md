---
schema: wang-person/v1
id: p_8dUxja16QufvjZN3pxCyUU
status: active
merged_into: null
display_name: 王連
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RB835S9DPBr9Q4VTyDP4xq
        subject_person_id: p_8dUxja16QufvjZN3pxCyUU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王連
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TUMffkGgz9wo97NaSdFHTu
          claim_id: c_RB835S9DPBr9Q4VTyDP4xq
          source_id: s_oyfc5UUZtcBsh5HEGaSNXK
          stance: supports
          locator: CBDB:169867
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（169867）
          source: &a1
            id: s_oyfc5UUZtcBsh5HEGaSNXK
            source_type: api_record
            title: 中国历代人物传记资料库：王連（CBDB 169867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169867&o=json
            external_identifier: CBDB:169867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.025Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_gxhQQFDL6bB3QFQiiGYTnt
        subject_person_id: p_8dUxja16QufvjZN3pxCyUU
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 765年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5DTZoMeDLxYFXKhi7PeRNh
          claim_id: c_gxhQQFDL6bB3QFQiiGYTnt
          source_id: s_oyfc5UUZtcBsh5HEGaSNXK
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
        id: c_AcYSczjNhFk1wLcY63nPSz
        subject_person_id: p_8dUxja16QufvjZN3pxCyUU
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
        - id: cs_ybMPPpJdF8U2ai1tsFLbzh
          claim_id: c_AcYSczjNhFk1wLcY63nPSz
          source_id: s_oyfc5UUZtcBsh5HEGaSNXK
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
        id: c_QoN2KOvTvY0ihWjB5ew4yU
        subject_person_id: p_LjPkZQBn66RY63k5PWTV5Y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8dUxja16QufvjZN3pxCyUU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d_tVqdmtIVioWfD3I8ct1R
          claim_id: c_QoN2KOvTvY0ihWjB5ew4yU
          source_id: s_oyfc5UUZtcBsh5HEGaSNXK
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LjPkZQBn66RY63k5PWTV5Y
        status: active
        display_name: 王亮
        merged_into_person_id: null
  children:
    - claim:
        id: c_FEbVvq9kXgKmcxwujVfCXv
        subject_person_id: p_8dUxja16QufvjZN3pxCyUU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vG24H9X7wmLEEn1XrdiCWd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EWJE8oil2vaqHfAqAPf7UR
          claim_id: c_FEbVvq9kXgKmcxwujVfCXv
          source_id: s_oyfc5UUZtcBsh5HEGaSNXK
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vG24H9X7wmLEEn1XrdiCWd
        status: active
        display_name: 王戩
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王連

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王連 | accepted |
| death.date | 765年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LjPkZQBn66RY63k5PWTV5Y | 王亮 | accepted |
| children | p_vG24H9X7wmLEEn1XrdiCWd | 王戩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王連（CBDB 169867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169867&o=json)
