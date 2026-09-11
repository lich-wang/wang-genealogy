---
schema: wang-person/v1
id: p_EYZbMdgB89m9nTMAVEYZW1
status: active
merged_into: null
display_name: 王仲璋
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_n92ziUjL95YsaSQnQLqjCc
        subject_person_id: p_EYZbMdgB89m9nTMAVEYZW1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲璋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eNbftzz9QWH1PVA5Jg9Zty
          claim_id: c_n92ziUjL95YsaSQnQLqjCc
          source_id: s_N6fdUC1wQvY1MF4eo2RbmL
          stance: supports
          locator: CBDB:175753
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175753）
          source: &a1
            id: s_N6fdUC1wQvY1MF4eo2RbmL
            source_type: api_record
            title: 中国历代人物传记资料库：王仲璋（CBDB 175753）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175753&o=json
            external_identifier: CBDB:175753
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.256Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_HTtZ8qyEDhy5cn1Vm1emv3
        subject_person_id: p_EYZbMdgB89m9nTMAVEYZW1
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 743年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1MsJwJBAzaAXkGaTvRk8QB
          claim_id: c_HTtZ8qyEDhy5cn1Vm1emv3
          source_id: s_N6fdUC1wQvY1MF4eo2RbmL
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
        id: c_PrL5woGr5Cx1AWgXYGWcBB
        subject_person_id: p_EYZbMdgB89m9nTMAVEYZW1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲璋（卒于743年），唐人物。籍贯河南。（中国历代人物传记资料库 CBDB 175753）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YUmHvZu7UP5ct9wgr3tYCH
          claim_id: c_PrL5woGr5Cx1AWgXYGWcBB
          source_id: s_N6fdUC1wQvY1MF4eo2RbmL
          stance: supports
          locator: CBDB:175753
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nNJdvJohsZwxr73H0Wq8TY
        subject_person_id: p_T2JshioRPfxgoYHCxfDYxt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EYZbMdgB89m9nTMAVEYZW1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uXk67nWdtq04zSgOa4gm-9
          claim_id: c_nNJdvJohsZwxr73H0Wq8TY
          source_id: s_N6fdUC1wQvY1MF4eo2RbmL
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_T2JshioRPfxgoYHCxfDYxt
        status: active
        display_name: 王守忠
        merged_into_person_id: null
  children:
    - claim:
        id: c_fUvAjdrd91qxnSoKMTt_z1
        subject_person_id: p_EYZbMdgB89m9nTMAVEYZW1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vfDXSYv21EJ7XU3BpbWwqR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3PAud7eKykRZkm3_SR8AnH
          claim_id: c_fUvAjdrd91qxnSoKMTt_z1
          source_id: s_N6fdUC1wQvY1MF4eo2RbmL
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vfDXSYv21EJ7XU3BpbWwqR
        status: active
        display_name: 王佇
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仲璋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲璋 | accepted |
| death.date | 743年 | accepted |
| bio.summary | 王仲璋（卒于743年），唐人物。籍贯河南。（中国历代人物传记资料库 CBDB 175753） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_T2JshioRPfxgoYHCxfDYxt | 王守忠 | accepted |
| children | p_vfDXSYv21EJ7XU3BpbWwqR | 王佇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仲璋（CBDB 175753）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175753&o=json)
