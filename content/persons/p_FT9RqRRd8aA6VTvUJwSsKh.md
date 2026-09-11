---
schema: wang-person/v1
id: p_FT9RqRRd8aA6VTvUJwSsKh
status: active
merged_into: null
display_name: 王述
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8xpuHM6mYHCB5RQpTCeKri
        subject_person_id: p_FT9RqRRd8aA6VTvUJwSsKh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王述
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rQTfNLfUF9Fsg4xa3k5z7K
          claim_id: c_8xpuHM6mYHCB5RQpTCeKri
          source_id: s_Z4fSgBune8n8AebnCNQ3RV
          stance: supports
          locator: CBDB:175929
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175929）
          source: &a1
            id: s_Z4fSgBune8n8AebnCNQ3RV
            source_type: api_record
            title: 中国历代人物传记资料库：王述（CBDB 175929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175929&o=json
            external_identifier: CBDB:175929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.205Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_FZ9DU8uU92TrPMFxze3xeK
        subject_person_id: p_FT9RqRRd8aA6VTvUJwSsKh
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 627年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nEMC2B6P6PHLvD7S5odjpb
          claim_id: c_FZ9DU8uU92TrPMFxze3xeK
          source_id: s_Z4fSgBune8n8AebnCNQ3RV
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
        id: c_JYHCV434Vs1mWPhv99xVjQ
        subject_person_id: p_FT9RqRRd8aA6VTvUJwSsKh
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
        - id: cs_RbTB14v9QyA2CaEPJAKNyS
          claim_id: c_JYHCV434Vs1mWPhv99xVjQ
          source_id: s_Z4fSgBune8n8AebnCNQ3RV
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
        id: c_LurHj854l6qDTWnlEGMT7A
        subject_person_id: p_dsKdJmxGEgXimyPn78iufE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FT9RqRRd8aA6VTvUJwSsKh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EVgfSx-ZHUgKYUX5gbzAOt
          claim_id: c_LurHj854l6qDTWnlEGMT7A
          source_id: s_Z4fSgBune8n8AebnCNQ3RV
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dsKdJmxGEgXimyPn78iufE
        status: active
        display_name: 王庆远
        merged_into_person_id: null
  children:
    - claim:
        id: c_XbTOr9ARzKZKJkkStj-aYV
        subject_person_id: p_FT9RqRRd8aA6VTvUJwSsKh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CeCKJToPiqJ44CrjN1dbFC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j0psWqMsRMvDHN5MQCvqSa
          claim_id: c_XbTOr9ARzKZKJkkStj-aYV
          source_id: s_Z4fSgBune8n8AebnCNQ3RV
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CeCKJToPiqJ44CrjN1dbFC
        status: active
        display_name: 王弘福
        merged_into_person_id: null
    - claim:
        id: c_9JQZUxQ-8bjTs_zlUC6d49
        subject_person_id: p_FT9RqRRd8aA6VTvUJwSsKh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9De1waQrNPPNQ2rPBDtZB4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lMec_cq8qA9qEdZi-A6NSD
          claim_id: c_9JQZUxQ-8bjTs_zlUC6d49
          source_id: s_Z4fSgBune8n8AebnCNQ3RV
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9De1waQrNPPNQ2rPBDtZB4
        status: active
        display_name: 王某
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王述

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王述 | accepted |
| death.date | 627年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dsKdJmxGEgXimyPn78iufE | 王庆远 | accepted |
| children | p_CeCKJToPiqJ44CrjN1dbFC | 王弘福 | accepted |
| children | p_9De1waQrNPPNQ2rPBDtZB4 | 王某 | accepted |

## 外部来源

- [中国历代人物传记资料库：王述（CBDB 175929）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175929&o=json)
