---
schema: wang-person/v1
id: p_j2Qr14aEdifzKDjQ5pCzA6
status: active
merged_into: null
display_name: 王文
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HTJGR8TSotc4ZYXwhxxoJ1
        subject_person_id: p_j2Qr14aEdifzKDjQ5pCzA6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UBPuj3NoinZH4t7aoWvR7y
          claim_id: c_HTJGR8TSotc4ZYXwhxxoJ1
          source_id: s_Rma8ozTsMazQKeq5mbM1x3
          stance: supports
          locator: CBDB:306646
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（306646）
          source: &a1
            id: s_Rma8ozTsMazQKeq5mbM1x3
            source_type: api_record
            title: 中国历代人物传记资料库：王文（CBDB 306646）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306646&o=json
            external_identifier: CBDB:306646
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.773Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Hk7X98JZUeNDFoJ4ZMws3s
        subject_person_id: p_j2Qr14aEdifzKDjQ5pCzA6
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
        - id: cs_JCnPaUFnm46F5qX7dZ5JDz
          claim_id: c_Hk7X98JZUeNDFoJ4ZMws3s
          source_id: s_Rma8ozTsMazQKeq5mbM1x3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_AcBuEpCB17CKw_g_WkTtap
        subject_person_id: p_j2Qr14aEdifzKDjQ5pCzA6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nMTfTHCiK68GBCA9Zmyxva
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VR9EAPUHiCxBNbf-jw9Oqo
          claim_id: c_AcBuEpCB17CKw_g_WkTtap
          source_id: s_Rma8ozTsMazQKeq5mbM1x3
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第四十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nMTfTHCiK68GBCA9Zmyxva
        status: active
        display_name: 王光祖
        merged_into_person_id: null
  other: []
---

# 王文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_nMTfTHCiK68GBCA9Zmyxva | 王光祖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文（CBDB 306646）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306646&o=json)
