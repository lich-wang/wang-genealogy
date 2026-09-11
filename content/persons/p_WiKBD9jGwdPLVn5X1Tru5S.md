---
schema: wang-person/v1
id: p_WiKBD9jGwdPLVn5X1Tru5S
status: active
merged_into: null
display_name: 王炘
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HnDVbxH2VtuKVyXT1KhB1b
        subject_person_id: p_WiKBD9jGwdPLVn5X1Tru5S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HbyPXet48Qc4szVGhszTt4
          claim_id: c_HnDVbxH2VtuKVyXT1KhB1b
          source_id: s_Jh2jNsYrBoX2VK4SSJQufT
          stance: supports
          locator: CBDB:69244
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69244）
          source: &a1
            id: s_Jh2jNsYrBoX2VK4SSJQufT
            source_type: api_record
            title: 中国历代人物传记资料库：王炘（CBDB 69244）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69244&o=json
            external_identifier: CBDB:69244
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.170Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5wo2WXSPEYwW5kKvUgxNYA
        subject_person_id: p_WiKBD9jGwdPLVn5X1Tru5S
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1617年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qNhkHFv75kM86YRoiseyLM
          claim_id: c_5wo2WXSPEYwW5kKvUgxNYA
          source_id: s_Jh2jNsYrBoX2VK4SSJQufT
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_tDr5cjJ6Pbex92dZyi6Ew1
        subject_person_id: p_WiKBD9jGwdPLVn5X1Tru5S
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1672年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aoDM9SFgy56KHkDaGEEGnX
          claim_id: c_tDr5cjJ6Pbex92dZyi6Ew1
          source_id: s_Jh2jNsYrBoX2VK4SSJQufT
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
        id: c_xxKNQiYdsB9c3XkjfrLhvE
        subject_person_id: p_WiKBD9jGwdPLVn5X1Tru5S
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jqYexp8Lsj3XMveH8BhpXq
          claim_id: c_xxKNQiYdsB9c3XkjfrLhvE
          source_id: s_Jh2jNsYrBoX2VK4SSJQufT
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
        id: c__i3LfwN1EgCLq6bU4pq6oa
        subject_person_id: p_WiKBD9jGwdPLVn5X1Tru5S
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PjuZjM9vxj26BaS4qsF6d8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__YrIMN0WFYo_HIGhUFeP--
          claim_id: c__i3LfwN1EgCLq6bU4pq6oa
          source_id: s_3rdeJCTCbuPGig9WAycnwU
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1674, HuWenKai #240：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3rdeJCTCbuPGig9WAycnwU
            source_type: api_record
            title: 中国历代人物传记资料库：王淑昭（CBDB 72020）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72020&o=json
            external_identifier: CBDB:72020
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:36.789Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_PjuZjM9vxj26BaS4qsF6d8
        status: active
        display_name: 王淑昭
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王炘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炘 | accepted |
| birth.date | 1617年 | accepted |
| death.date | 1672年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_PjuZjM9vxj26BaS4qsF6d8 | 王淑昭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淑昭（CBDB 72020）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72020&o=json)
- [中国历代人物传记资料库：王炘（CBDB 69244）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69244&o=json)
