---
schema: wang-person/v1
id: p_SKAAS87vUb3PSuWpKJFHwQ
status: active
merged_into: null
display_name: 孟氏
revision: 1
cbdb_id: 699434
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dCI7exqH-5a2Om8_4rQXDf
        subject_person_id: p_SKAAS87vUb3PSuWpKJFHwQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孟氏，宋人物。籍贯上黨。（中国历代人物传记资料库 CBDB 699434）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vDbVPt5c-ERBSOwucglJSs
          claim_id: c_dCI7exqH-5a2Om8_4rQXDf
          source_id: s_Xl6-M3DqdXpgfyxo-6PNaB
          stance: supports
          locator: CBDB:699434
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Xl6-M3DqdXpgfyxo-6PNaB
            source_type: api_record
            title: 中国历代人物传记资料库：孟氏(王用妻)（CBDB 699434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699434&o=json
            external_identifier: CBDB:699434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TfyUeXRYcIkMsUo7oK3gGO
        subject_person_id: p_SKAAS87vUb3PSuWpKJFHwQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孟氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YFenEugexzNUcZagCrq3c-
          claim_id: c_TfyUeXRYcIkMsUo7oK3gGO
          source_id: s_Xl6-M3DqdXpgfyxo-6PNaB
          stance: supports
          locator: CBDB:699434
          quotation: null
          interpretation_note: CBDB 明确记录的王用配偶
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
        id: c_AeiesmgrGL791LWKk5uL_a
        subject_person_id: p_P9pk3GX9ak89DEB5HLBBuW
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_SKAAS87vUb3PSuWpKJFHwQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IW7rVX6BPOfIBMsIFyLVVz
          claim_id: c_AeiesmgrGL791LWKk5uL_a
          source_id: s_Xl6-M3DqdXpgfyxo-6PNaB
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，48：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_P9pk3GX9ak89DEB5HLBBuW
        status: active
        display_name: 王用
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 孟氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 孟氏，宋人物。籍贯上黨。（中国历代人物传记资料库 CBDB 699434） | accepted |
| name.primary | 孟氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_P9pk3GX9ak89DEB5HLBBuW | 王用 | accepted |

## 外部来源

- [中国历代人物传记资料库：孟氏(王用妻)（CBDB 699434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699434&o=json)
