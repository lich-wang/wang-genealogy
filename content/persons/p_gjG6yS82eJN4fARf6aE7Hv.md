---
schema: wang-person/v1
id: p_gjG6yS82eJN4fARf6aE7Hv
status: active
merged_into: null
display_name: 王文貴
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eXoy47eHELPA3WGqzYj6dX
        subject_person_id: p_gjG6yS82eJN4fARf6aE7Hv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文貴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iwQVbfaxydX5YDA3tp72YG
          claim_id: c_eXoy47eHELPA3WGqzYj6dX
          source_id: s_r5QLrookMKsQP56opUdBRr
          stance: supports
          locator: CBDB:238293
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（238293）
          source: &a1
            id: s_r5QLrookMKsQP56opUdBRr
            source_type: api_record
            title: 中国历代人物传记资料库：王文貴（CBDB 238293）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238293&o=json
            external_identifier: CBDB:238293
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.878Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sypohbNKriaiitsPqcpq9R
        subject_person_id: p_gjG6yS82eJN4fARf6aE7Hv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ae4zVs8u1rZCqjW8T7DW3d
          claim_id: c_sypohbNKriaiitsPqcpq9R
          source_id: s_r5QLrookMKsQP56opUdBRr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_06NWinUPXcWTG09jJRSWPN
        subject_person_id: p_gjG6yS82eJN4fARf6aE7Hv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6e5ELnuv2E5KGPsNrAysQX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M2Gt4Mp-UjHKJoqpVBWSxW
          claim_id: c_06NWinUPXcWTG09jJRSWPN
          source_id: s_r5QLrookMKsQP56opUdBRr
          stance: supports
          locator: 正统七年進士登科錄:一卷，第三甲第三十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6e5ELnuv2E5KGPsNrAysQX
        status: active
        display_name: 王庾
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文貴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文貴 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_6e5ELnuv2E5KGPsNrAysQX | 王庾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文貴（CBDB 238293）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238293&o=json)
