---
schema: wang-person/v1
id: p_uLaLPBxvrB4tfDFJc3FdjM
status: active
merged_into: null
display_name: 王媛
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vGxNQycARingUZmLf21U2w
        subject_person_id: p_uLaLPBxvrB4tfDFJc3FdjM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王媛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UPLc5YgDuhjGTJDK8yEqF9
          claim_id: c_vGxNQycARingUZmLf21U2w
          source_id: s_hnKLF1QG6P6nRULfCDfnaY
          stance: supports
          locator: CBDB:145882
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145882）
          source: &a1
            id: s_hnKLF1QG6P6nRULfCDfnaY
            source_type: api_record
            title: 中国历代人物传记资料库：王媛（CBDB 145882）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145882&o=json
            external_identifier: CBDB:145882
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.698Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_DUBx1iNmPhjEFQLFu2k4aw
        subject_person_id: p_uLaLPBxvrB4tfDFJc3FdjM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 788年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wy51qC7XQGpaguRJbsnuS7
          claim_id: c_DUBx1iNmPhjEFQLFu2k4aw
          source_id: s_hnKLF1QG6P6nRULfCDfnaY
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
        id: c_cKFiypDSmfp7Fdt4towKhU
        subject_person_id: p_uLaLPBxvrB4tfDFJc3FdjM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 812年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E2qLMMYpt6hHDAp6HdoriN
          claim_id: c_cKFiypDSmfp7Fdt4towKhU
          source_id: s_hnKLF1QG6P6nRULfCDfnaY
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
        id: c_54FJTnLJPdJuFY3WtzLAp3
        subject_person_id: p_uLaLPBxvrB4tfDFJc3FdjM
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
        - id: cs_Ksp8XBLwuMw8NQb2nGJDpG
          claim_id: c_54FJTnLJPdJuFY3WtzLAp3
          source_id: s_hnKLF1QG6P6nRULfCDfnaY
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
        id: c_wyD_Rj5CJ_kg9ALrsxhK-6
        subject_person_id: p_RpAdHFZNaiExFFHWwCkxTP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uLaLPBxvrB4tfDFJc3FdjM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-j3Vj3Ow21dmU4s-F3d2i4
          claim_id: c_wyD_Rj5CJ_kg9ALrsxhK-6
          source_id: s_hnKLF1QG6P6nRULfCDfnaY
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RpAdHFZNaiExFFHWwCkxTP
        status: active
        display_name: 王鄂
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王媛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王媛 | accepted |
| birth.date | 788年 | accepted |
| death.date | 812年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RpAdHFZNaiExFFHWwCkxTP | 王鄂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王媛（CBDB 145882）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145882&o=json)
