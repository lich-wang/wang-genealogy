---
schema: wang-person/v1
id: p_zq12paWxqfRQfLAfsBmo4u
status: active
merged_into: null
display_name: 王眾仲
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CxRC4xkVMZBRALhmzFGTMx
        subject_person_id: p_zq12paWxqfRQfLAfsBmo4u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王眾仲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dT8Ks6BFEk35fEbY7QLgG5
          claim_id: c_CxRC4xkVMZBRALhmzFGTMx
          source_id: s_4hj6iy8vZmgb2TCEwMtVv7
          stance: supports
          locator: CBDB:175709
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175709）
          source: &a1
            id: s_4hj6iy8vZmgb2TCEwMtVv7
            source_type: api_record
            title: 中国历代人物传记资料库：王眾仲（CBDB 175709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175709&o=json
            external_identifier: CBDB:175709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.070Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_6z6ZSuN7KkQ6FWwMU3xQns
        subject_person_id: p_zq12paWxqfRQfLAfsBmo4u
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 843年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dNwzFT8kW3ACxLhDtPza7i
          claim_id: c_6z6ZSuN7KkQ6FWwMU3xQns
          source_id: s_4hj6iy8vZmgb2TCEwMtVv7
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
        id: c_Hy27EZvcwsa3kXhqkPZrHD
        subject_person_id: p_zq12paWxqfRQfLAfsBmo4u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王眾仲（卒于843年），唐人物。籍贯宣州，曾任州刺史。（中国历代人物传记资料库 CBDB 175709）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dJ3y0nDRAJENEbbXY3xQkr
          claim_id: c_Hy27EZvcwsa3kXhqkPZrHD
          source_id: s_4hj6iy8vZmgb2TCEwMtVv7
          stance: supports
          locator: CBDB:175709
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_u3J8JVdJuV0s5GRdxoSyAq
        subject_person_id: p_jhGmz5PBmstGBfB54XPkH7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zq12paWxqfRQfLAfsBmo4u
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zyPrl4u_BH7pvnkj2aM7gD
          claim_id: c_u3J8JVdJuV0s5GRdxoSyAq
          source_id: s_8KQXdAGUQNLSGE52uUZPXp
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8KQXdAGUQNLSGE52uUZPXp
            source_type: api_record
            title: 中国历代人物传记资料库：王重（CBDB 175706）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175706&o=json
            external_identifier: CBDB:175706
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.067Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jhGmz5PBmstGBfB54XPkH7
        status: active
        display_name: 王重
        merged_into_person_id: null
  children:
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
          source:
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
      object_person:
        id: p_82X3C77Tnmz5EH9rMPC7QU
        status: active
        display_name: 王洧
        merged_into_person_id: null
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
          source:
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
      object_person:
        id: p_BSvRMS3VKTbeQ3PpPXoMkT
        status: active
        display_name: 王淙
        merged_into_person_id: null
    - claim:
        id: c_sctcob05soGpGHoyhLLuN1
        subject_person_id: p_zq12paWxqfRQfLAfsBmo4u
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HYw3h3gd2SPmfVE18GBoDH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PD1ATTKk05LMCgkroz1gKi
          claim_id: c_sctcob05soGpGHoyhLLuN1
          source_id: s_59DBsN2HGT57x16LufHKi6
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_59DBsN2HGT57x16LufHKi6
            source_type: api_record
            title: 中国历代人物传记资料库：王凝（CBDB 144880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144880&o=json
            external_identifier: CBDB:144880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.638Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HYw3h3gd2SPmfVE18GBoDH
        status: active
        display_name: 王凝
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王眾仲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王眾仲 | accepted |
| death.date | 843年 | accepted |
| bio.summary | 王眾仲（卒于843年），唐人物。籍贯宣州，曾任州刺史。（中国历代人物传记资料库 CBDB 175709） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jhGmz5PBmstGBfB54XPkH7 | 王重 | accepted |
| children | p_82X3C77Tnmz5EH9rMPC7QU | 王洧 | accepted |
| children | p_BSvRMS3VKTbeQ3PpPXoMkT | 王淙 | accepted |
| children | p_HYw3h3gd2SPmfVE18GBoDH | 王凝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淙（CBDB 175710）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175710&o=json)
- [中国历代人物传记资料库：王凝（CBDB 144880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144880&o=json)
- [中国历代人物传记资料库：王洧（CBDB 175713）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175713&o=json)
- [中国历代人物传记资料库：王重（CBDB 175706）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175706&o=json)
- [中国历代人物传记资料库：王眾仲（CBDB 175709）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175709&o=json)
