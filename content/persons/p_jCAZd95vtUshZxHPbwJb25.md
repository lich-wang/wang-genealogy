---
schema: wang-person/v1
id: p_jCAZd95vtUshZxHPbwJb25
status: active
merged_into: null
display_name: 王奇
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_V2Nw71EkxENPYt58bpD9hq
        subject_person_id: p_jCAZd95vtUshZxHPbwJb25
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aJAxbFLnPyiNUcW1ht8Fab
          claim_id: c_V2Nw71EkxENPYt58bpD9hq
          source_id: s_wXFzjAuVdZjStZZzgNb6nz
          stance: supports
          locator: CBDB:386675
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（386675）
          source: &a1
            id: s_wXFzjAuVdZjStZZzgNb6nz
            source_type: api_record
            title: 中国历代人物传记资料库：王奇（CBDB 386675）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386675&o=json
            external_identifier: CBDB:386675
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.899Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zA1X4qwbA8M3DUtqDhndNT
        subject_person_id: p_jCAZd95vtUshZxHPbwJb25
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QDbWuUL1x4D98uWePBwfqT
          claim_id: c_zA1X4qwbA8M3DUtqDhndNT
          source_id: s_wXFzjAuVdZjStZZzgNb6nz
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
        id: c_CYsM1f0N4x7Hvky0Vqx_4d
        subject_person_id: p_hJs7Qvo7BVHkNfA4qF2GpU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jCAZd95vtUshZxHPbwJb25
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PGZne9O4eT64tj7o32OdyK
          claim_id: c_CYsM1f0N4x7Hvky0Vqx_4d
          source_id: s_95i5Te7uwSzC2L5Ks8gJJK
          stance: supports
          locator: CBDB 双向互证（子 王奇 ⇄ 父 王佖）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_95i5Te7uwSzC2L5Ks8gJJK
            source_type: api_record
            title: 中国历代人物传记资料库：王佖（CBDB 10700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10700&o=json
            external_identifier: CBDB:10700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.548Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hJs7Qvo7BVHkNfA4qF2GpU
        status: active
        display_name: 王佖
        merged_into_person_id: null
  children:
    - claim:
        id: c_vr7zgXSW31o23ulzOeyggm
        subject_person_id: p_jCAZd95vtUshZxHPbwJb25
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nTVozGACxLLaWGNjhMQxnM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ypaMY1yopJRj7eG4MarGya
          claim_id: c_vr7zgXSW31o23ulzOeyggm
          source_id: s_wXFzjAuVdZjStZZzgNb6nz
          stance: supports
          locator: CBDB 双向互证（子 王肖翁 ⇄ 父 王奇）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_nTVozGACxLLaWGNjhMQxnM
        status: active
        display_name: 王肖翁
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_JgjFiOHOZFdCdG0pJa8Qv9
        subject_person_id: p_UvehpGMJTzc9aejBRt9mWN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jCAZd95vtUshZxHPbwJb25
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bh9RwPbfjhKwmlnVZER02a
          claim_id: c_JgjFiOHOZFdCdG0pJa8Qv9
          source_id: s_wXFzjAuVdZjStZZzgNb6nz
          stance: supports
          locator: CBDB 双向互证（曾祖 王淮 ⇄ 曾孫; 重孫 王奇）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_UvehpGMJTzc9aejBRt9mWN
        status: active
        display_name: 王淮
        merged_into_person_id: null
    - claim:
        id: c_PHip8CHqupiXS87Z2T11jd
        subject_person_id: p_Kay7m1G1NMGwAheD73rEbt
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jCAZd95vtUshZxHPbwJb25
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PmAzAx5Gj2JhaAXygXcce7
          claim_id: c_PHip8CHqupiXS87Z2T11jd
          source_id: s_wXFzjAuVdZjStZZzgNb6nz
          stance: supports
          locator: CBDB 双向互证（祖父 王棟 ⇄ 孫 王奇）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_Kay7m1G1NMGwAheD73rEbt
        status: active
        display_name: 王棟
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王奇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王奇 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hJs7Qvo7BVHkNfA4qF2GpU | 王佖 | accepted |
| children | p_nTVozGACxLLaWGNjhMQxnM | 王肖翁 | accepted |
| ancestors | p_UvehpGMJTzc9aejBRt9mWN | 王淮 | accepted |
| ancestors | p_Kay7m1G1NMGwAheD73rEbt | 王棟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王佖（CBDB 10700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10700&o=json)
- [中国历代人物传记资料库：王奇（CBDB 386675）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386675&o=json)
