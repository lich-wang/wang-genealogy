---
schema: wang-person/v1
id: p_Kay7m1G1NMGwAheD73rEbt
status: active
merged_into: null
display_name: 王棟
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NU8Dbya34EhMyqM4Xqsq85
        subject_person_id: p_Kay7m1G1NMGwAheD73rEbt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1TZjdrfALojdeJaXQD7ECf
          claim_id: c_NU8Dbya34EhMyqM4Xqsq85
          source_id: s_Cd2m3HdzzCnHy2zH6GM15W
          stance: supports
          locator: CBDB:10721
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10721）
          source: &a1
            id: s_Cd2m3HdzzCnHy2zH6GM15W
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 10721）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10721&o=json
            external_identifier: CBDB:10721
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.557Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6TDzsbkzPUgrRkwNz8yuSP
        subject_person_id: p_Kay7m1G1NMGwAheD73rEbt
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
        - id: cs_pLC6DspPyMR2UhonjnG6Sn
          claim_id: c_6TDzsbkzPUgrRkwNz8yuSP
          source_id: s_Cd2m3HdzzCnHy2zH6GM15W
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
        id: c_cC0U1l1HQneVVjiRJMkVN5
        subject_person_id: p_Kay7m1G1NMGwAheD73rEbt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hJs7Qvo7BVHkNfA4qF2GpU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QdqOskwTKGFkK8UEiGQ1WG
          claim_id: c_cC0U1l1HQneVVjiRJMkVN5
          source_id: s_95i5Te7uwSzC2L5Ks8gJJK
          stance: supports
          locator: CBDB 双向互证（父 王棟 ⇄ 子 王佖）
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
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
          source:
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
      object_person:
        id: p_jCAZd95vtUshZxHPbwJb25
        status: active
        display_name: 王奇
        merged_into_person_id: null
    - claim:
        id: c_bj7ObDNUkS0VUNNenwqe7B
        subject_person_id: p_Kay7m1G1NMGwAheD73rEbt
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nTVozGACxLLaWGNjhMQxnM
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AFiSiBYzKBSMnnPcVAp3C7
          claim_id: c_bj7ObDNUkS0VUNNenwqe7B
          source_id: s_Cd2m3HdzzCnHy2zH6GM15W
          stance: supports
          locator: CBDB 双向互证（曾孫; 重孫 王肖翁 ⇄ 曾祖 王棟）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_nTVozGACxLLaWGNjhMQxnM
        status: active
        display_name: 王肖翁
        merged_into_person_id: null
  other: []
---

# 王棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王棟 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_hJs7Qvo7BVHkNfA4qF2GpU | 王佖 | accepted |
| descendants | p_jCAZd95vtUshZxHPbwJb25 | 王奇 | accepted |
| descendants | p_nTVozGACxLLaWGNjhMQxnM | 王肖翁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王佖（CBDB 10700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10700&o=json)
- [中国历代人物传记资料库：王棟（CBDB 10721）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10721&o=json)
- [中国历代人物传记资料库：王奇（CBDB 386675）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386675&o=json)
