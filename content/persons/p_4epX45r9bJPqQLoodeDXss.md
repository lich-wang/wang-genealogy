---
schema: wang-person/v1
id: p_4epX45r9bJPqQLoodeDXss
status: active
merged_into: null
display_name: 王一陽
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pfcFvg7L3FYJHJJwmiJjyT
        subject_person_id: p_4epX45r9bJPqQLoodeDXss
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一陽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Kc1LLdx7VpTf3LnFoUJ3bE
          claim_id: c_pfcFvg7L3FYJHJJwmiJjyT
          source_id: s_mQ2Mbm44EcchNqrBaH456s
          stance: supports
          locator: CBDB:203535
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203535）
          source: &a1
            id: s_mQ2Mbm44EcchNqrBaH456s
            source_type: api_record
            title: 中国历代人物传记资料库：王一陽（CBDB 203535）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203535&o=json
            external_identifier: CBDB:203535
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.791Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ErC9kRbrhoDKMFm3x3qZYU
        subject_person_id: p_4epX45r9bJPqQLoodeDXss
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1510年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9HsNyhCwSUAXz8znf7Xdh9
          claim_id: c_ErC9kRbrhoDKMFm3x3qZYU
          source_id: s_mQ2Mbm44EcchNqrBaH456s
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yJdmAtgtPhVRJZE7rkHDnH
        subject_person_id: p_4epX45r9bJPqQLoodeDXss
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
        - id: cs_iZp4cw7ZqAmJiN7s85f5Jk
          claim_id: c_yJdmAtgtPhVRJZE7rkHDnH
          source_id: s_mQ2Mbm44EcchNqrBaH456s
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
        id: c_jIJJi_4bDWy8vZiPOLhbXI
        subject_person_id: p_toP613bi74YEw4TLd3hMCu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4epX45r9bJPqQLoodeDXss
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0J9i011CMDkAnwTGupM20c
          claim_id: c_jIJJi_4bDWy8vZiPOLhbXI
          source_id: s_mQ2Mbm44EcchNqrBaH456s
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第二甲第八十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_toP613bi74YEw4TLd3hMCu
        status: active
        display_name: 王遷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_VdABGjujICj78RVPUUlW-_
        subject_person_id: p_pJunG57MHAi2x423pkpYEA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4epX45r9bJPqQLoodeDXss
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DyynXuQ5-o1hBIVffOTBWt
          claim_id: c_VdABGjujICj78RVPUUlW-_
          source_id: s_mQ2Mbm44EcchNqrBaH456s
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第二甲第八十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pJunG57MHAi2x423pkpYEA
        status: active
        display_name: 王珏
        merged_into_person_id: null
    - claim:
        id: c_hqZyVoU5XKRN_-Wmng1Bju
        subject_person_id: p_TDSACRPuvvyZ91nEqE7y1X
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4epX45r9bJPqQLoodeDXss
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ved4MD7oO-GxLXjMa6sQrK
          claim_id: c_hqZyVoU5XKRN_-Wmng1Bju
          source_id: s_mQ2Mbm44EcchNqrBaH456s
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第二甲第八十八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TDSACRPuvvyZ91nEqE7y1X
        status: active
        display_name: 王輔
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王一陽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一陽 | accepted |
| birth.date | 1510年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_toP613bi74YEw4TLd3hMCu | 王遷 | accepted |
| ancestors | p_pJunG57MHAi2x423pkpYEA | 王珏 | accepted |
| ancestors | p_TDSACRPuvvyZ91nEqE7y1X | 王輔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一陽（CBDB 203535）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203535&o=json)
