---
schema: wang-person/v1
id: p_EwDgLH5GRgdhsBuSp5fGjy
status: active
merged_into: null
display_name: 王處脩
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_u7ce2aHH2RoMQYXtujS9LL
        subject_person_id: p_EwDgLH5GRgdhsBuSp5fGjy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王處脩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NWyQ47C8d1DQPc63dU8UrF
          claim_id: c_u7ce2aHH2RoMQYXtujS9LL
          source_id: s_qJrWp38DstuqZQLBfP8pMF
          stance: supports
          locator: CBDB:189914
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（189914）
          source: &a1
            id: s_qJrWp38DstuqZQLBfP8pMF
            source_type: api_record
            title: 中国历代人物传记资料库：王處脩（CBDB 189914）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189914&o=json
            external_identifier: CBDB:189914
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.310Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_YcAtCzXjWHPWG1Mja1Lqv3
        subject_person_id: p_EwDgLH5GRgdhsBuSp5fGjy
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 897年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dYCXMQzMJ17yVxhhu5foaA
          claim_id: c_YcAtCzXjWHPWG1Mja1Lqv3
          source_id: s_qJrWp38DstuqZQLBfP8pMF
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
        id: c_Xt1kJFD4g7bBAsmMKSyZ1F
        subject_person_id: p_EwDgLH5GRgdhsBuSp5fGjy
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
        - id: cs_DmPwBN3BxdqLV6Gw2N4NEo
          claim_id: c_Xt1kJFD4g7bBAsmMKSyZ1F
          source_id: s_qJrWp38DstuqZQLBfP8pMF
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
        id: c_KObRnsuBMwG_8c8_TS0Tw5
        subject_person_id: p_Ggn2t8z4X4B4wro6LB38G3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EwDgLH5GRgdhsBuSp5fGjy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o_hpocVgxw9ORmSuboUOsG
          claim_id: c_KObRnsuBMwG_8c8_TS0Tw5
          source_id: s_qJrWp38DstuqZQLBfP8pMF
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Ggn2t8z4X4B4wro6LB38G3
        status: active
        display_name: 王虔暢
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王處脩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王處脩 | accepted |
| death.date | 897年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Ggn2t8z4X4B4wro6LB38G3 | 王虔暢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王處脩（CBDB 189914）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189914&o=json)
