---
schema: wang-person/v1
id: p_jD4NpGWdiWfpzPUEHh3hJB
status: active
merged_into: null
display_name: 王立言
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CefHELA539AoM57KEDxPc9
        subject_person_id: p_jD4NpGWdiWfpzPUEHh3hJB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2uz2h3h7HZETirQVQuXsvb
          claim_id: c_CefHELA539AoM57KEDxPc9
          source_id: s_ZRzXvzhuNDhy3LB7p24gDM
          stance: supports
          locator: CBDB:22228
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22228）
          source: &a1
            id: s_ZRzXvzhuNDhy3LB7p24gDM
            source_type: api_record
            title: 中国历代人物传记资料库：王立言（CBDB 22228）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22228&o=json
            external_identifier: CBDB:22228
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.856Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DXpMBE7Te4FUdDFXDEAG3d
        subject_person_id: p_jD4NpGWdiWfpzPUEHh3hJB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hgh5HQrASXWSQjc7SuX7zj
          claim_id: c_DXpMBE7Te4FUdDFXDEAG3d
          source_id: s_ZRzXvzhuNDhy3LB7p24gDM
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
        id: c_htlKR1d_y64Lt2Fz6PceS9
        subject_person_id: p_pk8ca4wN6UYLG59jDuQcaG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jD4NpGWdiWfpzPUEHh3hJB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y1cu6NyeFN5z1NcAr8Hnhd
          claim_id: c_htlKR1d_y64Lt2Fz6PceS9
          source_id: s_ZRzXvzhuNDhy3LB7p24gDM
          stance: supports
          locator: CBDB 双向互证（父 王養心 ⇄ 子 王立言）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_pk8ca4wN6UYLG59jDuQcaG
        status: active
        display_name: 王養心
        merged_into_person_id: null
  children:
    - claim:
        id: c_GYROjw7eTSIIOCV7mGn2jx
        subject_person_id: p_jD4NpGWdiWfpzPUEHh3hJB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mH9YexqNN2iaiH2AiQachx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9vwtBfrolpmwPGgH6ML95Z
          claim_id: c_GYROjw7eTSIIOCV7mGn2jx
          source_id: s_ZRzXvzhuNDhy3LB7p24gDM
          stance: supports
          locator: CBDB 双向互证（子 王濬仲 ⇄ 父 王立言）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_mH9YexqNN2iaiH2AiQachx
        status: active
        display_name: 王濬仲
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王立言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王立言 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pk8ca4wN6UYLG59jDuQcaG | 王養心 | accepted |
| children | p_mH9YexqNN2iaiH2AiQachx | 王濬仲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王立言（CBDB 22228）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22228&o=json)
