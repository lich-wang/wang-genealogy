---
schema: wang-person/v1
id: p_qVCWqTf627v4gtL73YQFoU
status: active
merged_into: null
display_name: 王元鼎
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ysP7NynEjzQBbuCY1bvUQr
        subject_person_id: p_qVCWqTf627v4gtL73YQFoU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A5nF7xvj7Aga6SPKHA9dfz
          claim_id: c_ysP7NynEjzQBbuCY1bvUQr
          source_id: s_HBFeA7cS3mYNGAmUczLUXZ
          stance: supports
          locator: CBDB:175780
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175780）
          source: &a1
            id: s_HBFeA7cS3mYNGAmUczLUXZ
            source_type: api_record
            title: 中国历代人物传记资料库：王元鼎（CBDB 175780）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175780&o=json
            external_identifier: CBDB:175780
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.121Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Xvv3n1h6cijLGBME8qAKod
        subject_person_id: p_qVCWqTf627v4gtL73YQFoU
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 678年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MYgoNynZHJqofb7zLX8TBr
          claim_id: c_Xvv3n1h6cijLGBME8qAKod
          source_id: s_HBFeA7cS3mYNGAmUczLUXZ
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
        id: c_KYVLMWgdKW34BcRnLPfa7f
        subject_person_id: p_qVCWqTf627v4gtL73YQFoU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元鼎（卒于678年），唐人物。籍贯丹徒。（中国历代人物传记资料库 CBDB 175780）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_82R5KCXxPKGtPB6KAMwMoZ
          claim_id: c_KYVLMWgdKW34BcRnLPfa7f
          source_id: s_HBFeA7cS3mYNGAmUczLUXZ
          stance: supports
          locator: CBDB:175780
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_OjAWRVE-wyIDOw6r3g2U4P
        subject_person_id: p_WmFTihaGM8KRJSc8kBpUBP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qVCWqTf627v4gtL73YQFoU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O-2uvaefF3LGp_ynNXuDbr
          claim_id: c_OjAWRVE-wyIDOw6r3g2U4P
          source_id: s_HBFeA7cS3mYNGAmUczLUXZ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WmFTihaGM8KRJSc8kBpUBP
        status: active
        display_name: 王友札
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元鼎 | accepted |
| death.date | 678年 | accepted |
| bio.summary | 王元鼎（卒于678年），唐人物。籍贯丹徒。（中国历代人物传记资料库 CBDB 175780） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WmFTihaGM8KRJSc8kBpUBP | 王友札 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元鼎（CBDB 175780）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175780&o=json)
