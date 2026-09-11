---
schema: wang-person/v1
id: p_94dDbMbKJAD59aKbdEvHPz
status: active
merged_into: null
display_name: 王愛
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6XWKER3oYHNfYNMdENzxRB
        subject_person_id: p_94dDbMbKJAD59aKbdEvHPz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_w1nxaNHWHxWnMi4mrSeBTE
          claim_id: c_6XWKER3oYHNfYNMdENzxRB
          source_id: s_ePLDEJ7rK62rXWD8VSG5vH
          stance: supports
          locator: CBDB:207364
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207364）
          source: &a1
            id: s_ePLDEJ7rK62rXWD8VSG5vH
            source_type: api_record
            title: 中国历代人物传记资料库：王愛（CBDB 207364）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207364&o=json
            external_identifier: CBDB:207364
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.920Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_JXDQEuCYC6sG8YGzjoV41Y
        subject_person_id: p_94dDbMbKJAD59aKbdEvHPz
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1563年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_evPJJkZWo7Xpu1MyaZnFq7
          claim_id: c_JXDQEuCYC6sG8YGzjoV41Y
          source_id: s_ePLDEJ7rK62rXWD8VSG5vH
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
        id: c_WhkcL9AYtjavw3JfQy7rBD
        subject_person_id: p_94dDbMbKJAD59aKbdEvHPz
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
        - id: cs_xnHr8pvoMQyAKm2pfcrtpM
          claim_id: c_WhkcL9AYtjavw3JfQy7rBD
          source_id: s_ePLDEJ7rK62rXWD8VSG5vH
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
        id: c_kmHSJ-wa1gGOgVT85c2wqE
        subject_person_id: p_MpnPQPFrjgGqPhyc9PJ3Sr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_94dDbMbKJAD59aKbdEvHPz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cBvuG36YhwJb9uvDIgzZ4T
          claim_id: c_kmHSJ-wa1gGOgVT85c2wqE
          source_id: s_ePLDEJ7rK62rXWD8VSG5vH
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第一百四十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MpnPQPFrjgGqPhyc9PJ3Sr
        status: active
        display_name: 王鐘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_1sEz7YJRrd-q66yWNk4_F-
        subject_person_id: p_7swUKsKoNEGAA5EpxnRxgf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_94dDbMbKJAD59aKbdEvHPz
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0Du6OOA_zcVPA7u8yv_1Fw
          claim_id: c_1sEz7YJRrd-q66yWNk4_F-
          source_id: s_ePLDEJ7rK62rXWD8VSG5vH
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第一百四十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7swUKsKoNEGAA5EpxnRxgf
        status: active
        display_name: 王祖壽
        merged_into_person_id: null
    - claim:
        id: c_8ewmRqsX-rXyLosbn3t8P-
        subject_person_id: p_d3CEFj65Tejb6yCUo7M2L2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_94dDbMbKJAD59aKbdEvHPz
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NopDFXa8dIz7-d25q8C3ID
          claim_id: c_8ewmRqsX-rXyLosbn3t8P-
          source_id: s_ePLDEJ7rK62rXWD8VSG5vH
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第一百四十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_d3CEFj65Tejb6yCUo7M2L2
        status: active
        display_name: 王龍
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王愛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王愛 | accepted |
| birth.date | 1563年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MpnPQPFrjgGqPhyc9PJ3Sr | 王鐘 | accepted |
| ancestors | p_7swUKsKoNEGAA5EpxnRxgf | 王祖壽 | accepted |
| ancestors | p_d3CEFj65Tejb6yCUo7M2L2 | 王龍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王愛（CBDB 207364）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207364&o=json)
