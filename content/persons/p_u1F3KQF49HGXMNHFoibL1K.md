---
schema: wang-person/v1
id: p_u1F3KQF49HGXMNHFoibL1K
status: active
merged_into: null
display_name: 全氏
revision: 1
cbdb_id: 145340
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_URp3waDMcBqFD0jUpHVOux
        subject_person_id: p_u1F3KQF49HGXMNHFoibL1K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 全氏（792—824），唐人物。籍贯河南。（中国历代人物传记资料库 CBDB 145340）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rJp7GQu8ZJGGcAUiweSMpf
          claim_id: c_URp3waDMcBqFD0jUpHVOux
          source_id: s_gI_oAlBSIqCQ37EFniZVzF
          stance: supports
          locator: CBDB:145340
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_gI_oAlBSIqCQ37EFniZVzF
            source_type: api_record
            title: 中国历代人物传记资料库：全氏(王叔異妻)（CBDB 145340）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145340&o=json
            external_identifier: CBDB:145340
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tjTgf0vJb2wTcKjk2P2bnr
        subject_person_id: p_u1F3KQF49HGXMNHFoibL1K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 全氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RMA_XbBXnbT3tAyd-Z3cAm
          claim_id: c_tjTgf0vJb2wTcKjk2P2bnr
          source_id: s_gI_oAlBSIqCQ37EFniZVzF
          stance: supports
          locator: CBDB:145340
          quotation: null
          interpretation_note: CBDB 明确记录的王叔異配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c__w5xF14sUssz_TPs5EA-Ug
        subject_person_id: p_CfuPVhQbMWC9BHasnXLGgd
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_u1F3KQF49HGXMNHFoibL1K
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oYdMFrDhxTFOLuijquaCX3
          claim_id: c__w5xF14sUssz_TPs5EA-Ug
          source_id: s_gI_oAlBSIqCQ37EFniZVzF
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CfuPVhQbMWC9BHasnXLGgd
        status: active
        display_name: 王叔異
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 全氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 全氏（792—824），唐人物。籍贯河南。（中国历代人物传记资料库 CBDB 145340） | accepted |
| name.primary | 全氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_CfuPVhQbMWC9BHasnXLGgd | 王叔異 | accepted |

## 外部来源

- [中国历代人物传记资料库：全氏(王叔異妻)（CBDB 145340）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145340&o=json)
