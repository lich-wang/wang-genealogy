---
schema: wang-person/v1
id: p_Wuk38nfNXd8MstdrtJSBPC
status: active
merged_into: null
display_name: 王德進
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Fncg7B7QjLAL5Z2JckieCe
        subject_person_id: p_Wuk38nfNXd8MstdrtJSBPC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德進
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TkJaf87waCjcJjDPiz4DM8
          claim_id: c_Fncg7B7QjLAL5Z2JckieCe
          source_id: s_bppn4ozNnWVXcWYqFkZ3HK
          stance: supports
          locator: CBDB:145301
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145301）
          source: &a1
            id: s_bppn4ozNnWVXcWYqFkZ3HK
            source_type: api_record
            title: 中国历代人物传记资料库：王德進（CBDB 145301）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145301&o=json
            external_identifier: CBDB:145301
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.661Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gx8DbLCG4T2mpF6aj7om5V
        subject_person_id: p_Wuk38nfNXd8MstdrtJSBPC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 753年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4T7RC2y9CAUKRo49bB9ePf
          claim_id: c_gx8DbLCG4T2mpF6aj7om5V
          source_id: s_bppn4ozNnWVXcWYqFkZ3HK
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
        id: c_D7NV1vETHEkx2xDnr7XBFh
        subject_person_id: p_Wuk38nfNXd8MstdrtJSBPC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 804年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UVWerKR7n3iiMS9FdrgWAm
          claim_id: c_D7NV1vETHEkx2xDnr7XBFh
          source_id: s_bppn4ozNnWVXcWYqFkZ3HK
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
        id: c_9fQCJKaZB7642fZmEwLu4p
        subject_person_id: p_Wuk38nfNXd8MstdrtJSBPC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德進（753年—804年），唐人物。籍贯河南，曾任縣主簿。（中国历代人物传记资料库 CBDB 145301）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kBbFb5NX_eC7nikmfQVA3G
          claim_id: c_9fQCJKaZB7642fZmEwLu4p
          source_id: s_bppn4ozNnWVXcWYqFkZ3HK
          stance: supports
          locator: CBDB:145301
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uJ3LtEEbTmsZi_CdPdDRxn
        subject_person_id: p_cZX36FsZfyp13UCG1A5dAD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Wuk38nfNXd8MstdrtJSBPC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-Ldo-c6HxRdLszL_r8Yi4M
          claim_id: c_uJ3LtEEbTmsZi_CdPdDRxn
          source_id: s_bppn4ozNnWVXcWYqFkZ3HK
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cZX36FsZfyp13UCG1A5dAD
        status: active
        display_name: 王子建
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王德進

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德進 | accepted |
| birth.date | 753年 | accepted |
| death.date | 804年 | accepted |
| bio.summary | 王德進（753年—804年），唐人物。籍贯河南，曾任縣主簿。（中国历代人物传记资料库 CBDB 145301） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cZX36FsZfyp13UCG1A5dAD | 王子建 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德進（CBDB 145301）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145301&o=json)
