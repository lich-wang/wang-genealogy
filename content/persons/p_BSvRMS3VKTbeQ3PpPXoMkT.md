---
schema: wang-person/v1
id: p_BSvRMS3VKTbeQ3PpPXoMkT
status: active
merged_into: null
display_name: 王淙
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xngSF9Ywf5rUMAPapc9CLs
        subject_person_id: p_BSvRMS3VKTbeQ3PpPXoMkT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FkTUkN6GFv1GwRBQt38oKp
          claim_id: c_xngSF9Ywf5rUMAPapc9CLs
          source_id: s_e62uELS3ZAyVLYhCLA24CQ
          stance: supports
          locator: CBDB:175710
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175710）
          source: &a1
            id: s_e62uELS3ZAyVLYhCLA24CQ
            source_type: api_record
            title: 中国历代人物传记资料库：王淙（CBDB 175710）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175710&o=json
            external_identifier: CBDB:175710
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.071Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_corxWgcPdwzCerKcLrR1HP
        subject_person_id: p_BSvRMS3VKTbeQ3PpPXoMkT
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
        - id: cs_c8ovrtFJPPXxhQQgmeZUQX
          claim_id: c_corxWgcPdwzCerKcLrR1HP
          source_id: s_e62uELS3ZAyVLYhCLA24CQ
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
        id: c_BWF9LAHUG9hkPmf978g8TM
        subject_person_id: p_BSvRMS3VKTbeQ3PpPXoMkT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淙（卒于880年），唐人物。籍贯宣州。（中国历代人物传记资料库 CBDB 175710）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NYz-EPfpX5dS5kNIMx5ioS
          claim_id: c_BWF9LAHUG9hkPmf978g8TM
          source_id: s_e62uELS3ZAyVLYhCLA24CQ
          stance: supports
          locator: CBDB:175710
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_EiBkJZf45qkGcOWFX2I4I3
        subject_person_id: p_zq12paWxqfRQfLAfsBmo4u
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BSvRMS3VKTbeQ3PpPXoMkT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oC_6mM5xaHiXLIDOp0L3FY
          claim_id: c_EiBkJZf45qkGcOWFX2I4I3
          source_id: s_e62uELS3ZAyVLYhCLA24CQ
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
        id: c_APSjue4eUilZ10y7dkzdSY
        subject_person_id: p_BSvRMS3VKTbeQ3PpPXoMkT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aUMHauCBVZEYnsGrafhEA8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WDkD0v-gWGQxrYP-vQBlpO
          claim_id: c_APSjue4eUilZ10y7dkzdSY
          source_id: s_jt1KEenAjGYWLA2UUg2kcr
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jt1KEenAjGYWLA2UUg2kcr
            source_type: api_record
            title: 中国历代人物传记资料库：王鎬（CBDB 175711）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175711&o=json
            external_identifier: CBDB:175711
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.072Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aUMHauCBVZEYnsGrafhEA8
        status: active
        display_name: 王鎬
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王淙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淙 | accepted |
| death.date | 880年 | accepted |
| bio.summary | 王淙（卒于880年），唐人物。籍贯宣州。（中国历代人物传记资料库 CBDB 175710） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zq12paWxqfRQfLAfsBmo4u | 王眾仲 | accepted |
| children | p_aUMHauCBVZEYnsGrafhEA8 | 王鎬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淙（CBDB 175710）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175710&o=json)
- [中国历代人物传记资料库：王鎬（CBDB 175711）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175711&o=json)
