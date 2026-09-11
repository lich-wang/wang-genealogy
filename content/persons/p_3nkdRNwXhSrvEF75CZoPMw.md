---
schema: wang-person/v1
id: p_3nkdRNwXhSrvEF75CZoPMw
status: active
merged_into: null
display_name: 王演
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oUp7rgiRkFaQ6GgxHQ3VQf
        subject_person_id: p_3nkdRNwXhSrvEF75CZoPMw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王演
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A7S6yoghLgMAr5hHtJJhXk
          claim_id: c_oUp7rgiRkFaQ6GgxHQ3VQf
          source_id: s_oUY55k1UJtMUGpWGGzFsAz
          stance: supports
          locator: CBDB:21272
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（21272）
          source: &a1
            id: s_oUY55k1UJtMUGpWGGzFsAz
            source_type: api_record
            title: 中国历代人物传记资料库：王演（CBDB 21272）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21272&o=json
            external_identifier: CBDB:21272
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.767Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SBQSZ3ME4HcoEVwqaxbuHr
        subject_person_id: p_3nkdRNwXhSrvEF75CZoPMw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为五代人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A9uUUym3ujcQUQMhBq2LeU
          claim_id: c_SBQSZ3ME4HcoEVwqaxbuHr
          source_id: s_oUY55k1UJtMUGpWGGzFsAz
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
        id: c_d5Yx461mVryRVS2MMlmP9p
        subject_person_id: p_UZ62qd81aSCiNYHYHLsP4F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3nkdRNwXhSrvEF75CZoPMw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QAMn8TcP2CtRB_elLA3Q_V
          claim_id: c_d5Yx461mVryRVS2MMlmP9p
          source_id: s_oUY55k1UJtMUGpWGGzFsAz
          stance: supports
          locator: CBDB 双向互证（父 王坑 ⇄ 子 王演）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_UZ62qd81aSCiNYHYHLsP4F
        status: active
        display_name: 王坑
        merged_into_person_id: null
  children:
    - claim:
        id: c_l-8_3pbLf2xlo_rVrDEcEX
        subject_person_id: p_3nkdRNwXhSrvEF75CZoPMw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MidTUhibT32K4Xg5RL8sUj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_37l2fbqZPxjfXoJifWj1LQ
          claim_id: c_l-8_3pbLf2xlo_rVrDEcEX
          source_id: s_oUY55k1UJtMUGpWGGzFsAz
          stance: supports
          locator: CBDB 双向互证（子 王承謙 ⇄ 父 王演）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_MidTUhibT32K4Xg5RL8sUj
        status: active
        display_name: 王承謙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王演

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王演 | accepted |
| bio.summary | CBDB 记载为五代人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UZ62qd81aSCiNYHYHLsP4F | 王坑 | accepted |
| children | p_MidTUhibT32K4Xg5RL8sUj | 王承謙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王演（CBDB 21272）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21272&o=json)
