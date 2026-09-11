---
schema: wang-person/v1
id: p_ByByjCwT9Wgwc6nJLBGiit
status: active
merged_into: null
display_name: 王臧
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_h1EGignDw3H4aHLdpDwuKg
        subject_person_id: p_ByByjCwT9Wgwc6nJLBGiit
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QaEM6GCRUBKDafySWoLDNM
          claim_id: c_h1EGignDw3H4aHLdpDwuKg
          source_id: s_THPAtfVam3t7CKGtujFwbi
          stance: supports
          locator: CBDB:169091
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（169091）
          source: &a1
            id: s_THPAtfVam3t7CKGtujFwbi
            source_type: api_record
            title: 中国历代人物传记资料库：王臧（CBDB 169091）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169091&o=json
            external_identifier: CBDB:169091
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.228Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_4Gh1J1ZWKRRRM14sD6L2sV
        subject_person_id: p_ByByjCwT9Wgwc6nJLBGiit
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 777年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YhEnbgdNdVf1JKXTKDXC24
          claim_id: c_4Gh1J1ZWKRRRM14sD6L2sV
          source_id: s_THPAtfVam3t7CKGtujFwbi
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
        id: c_E3tkAPfCvD8PrUdLABaLjZ
        subject_person_id: p_ByByjCwT9Wgwc6nJLBGiit
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
        - id: cs_kLeLtRDinXF7ok3bHyZuoS
          claim_id: c_E3tkAPfCvD8PrUdLABaLjZ
          source_id: s_THPAtfVam3t7CKGtujFwbi
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
        id: c_2IkXXkjyHMZBik4URNl4uX
        subject_person_id: p_d7se9UivDFXRMfVXTck1VV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ByByjCwT9Wgwc6nJLBGiit
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vjBf2sveA_j_GMFiZ6Fv4I
          claim_id: c_2IkXXkjyHMZBik4URNl4uX
          source_id: s_THPAtfVam3t7CKGtujFwbi
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_d7se9UivDFXRMfVXTck1VV
        status: active
        display_name: 王今伯
        merged_into_person_id: null
  children:
    - claim:
        id: c_W-ajkPUycsBbDPvYc6nb3t
        subject_person_id: p_ByByjCwT9Wgwc6nJLBGiit
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vvHSQNDSfE6nLUen9b792c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HFe41s9wr6O-B9A-B7QDUf
          claim_id: c_W-ajkPUycsBbDPvYc6nb3t
          source_id: s_THPAtfVam3t7CKGtujFwbi
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vvHSQNDSfE6nLUen9b792c
        status: active
        display_name: 王正言
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王臧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王臧 | accepted |
| death.date | 777年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_d7se9UivDFXRMfVXTck1VV | 王今伯 | accepted |
| children | p_vvHSQNDSfE6nLUen9b792c | 王正言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王臧（CBDB 169091）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169091&o=json)
