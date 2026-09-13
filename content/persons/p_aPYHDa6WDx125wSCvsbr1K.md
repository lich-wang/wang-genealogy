---
schema: wang-person/v1
id: p_aPYHDa6WDx125wSCvsbr1K
status: active
merged_into: null
display_name: 王蒼書
cbdb_id: 26714
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AZKSSfAvpE7ZEMSghNg3iZ
        subject_person_id: p_aPYHDa6WDx125wSCvsbr1K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蒼書，史料所见人物。本项目依据《中国历代人物传记资料库：王蒼書（CBDB 26714）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_WEleNd_5EGhBIKuZ6rp85z
          claim_id: c_AZKSSfAvpE7ZEMSghNg3iZ
          source_id: s_qZ9HbyMktko3YsQRvnseuZ
          stance: supports
          locator: CBDB:26714
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_qZ9HbyMktko3YsQRvnseuZ
            source_type: api_record
            title: 中国历代人物传记资料库：王蒼書（CBDB 26714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26714&o=json
            external_identifier: CBDB:26714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dBCXkTaFUBvoBQnr1ZwYYS
        subject_person_id: p_aPYHDa6WDx125wSCvsbr1K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蒼書
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4M4xpJQxGf3Vpqt4K6Dx1u
          claim_id: c_dBCXkTaFUBvoBQnr1ZwYYS
          source_id: s_qZ9HbyMktko3YsQRvnseuZ
          stance: supports
          locator: CBDB:26714
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ddqX5pcGu7KBTAiYaquWj9
        subject_person_id: p_aPYHDa6WDx125wSCvsbr1K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_c2L9ykikiVd7Ps5dU11PRX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rsZmY5xLe92lf8JAQf1aA2
          claim_id: c_ddqX5pcGu7KBTAiYaquWj9
          source_id: s_enLTu5n97DKQfrcCVp4weJ
          stance: supports
          locator: CBDB 双向互证（父 王蒼書 ⇄ 子 王簡）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_enLTu5n97DKQfrcCVp4weJ
            source_type: api_record
            title: 中国历代人物传记资料库：王簡（CBDB 26715）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26715&o=json
            external_identifier: CBDB:26715
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.949Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_c2L9ykikiVd7Ps5dU11PRX
        status: active
        display_name: 王簡
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_ntK8BdaonAnXHVUDWHKn_G
        subject_person_id: p_26tLQutRv9RfwmDpym5T1E
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aPYHDa6WDx125wSCvsbr1K
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Lo1pTH_CvAMUsNUOdVBrD6
          claim_id: c_ntK8BdaonAnXHVUDWHKn_G
          source_id: s_NRMoGyPxVJjRUhF4g8gkDi
          stance: supports
          locator: CBDB 双向互证（孫 王蒼書 ⇄ 祖父 王從）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_NRMoGyPxVJjRUhF4g8gkDi
            source_type: api_record
            title: 中国历代人物传记资料库：王從（CBDB 17844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17844&o=json
            external_identifier: CBDB:17844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.694Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_26tLQutRv9RfwmDpym5T1E
        status: active
        display_name: 王從
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王蒼書

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王蒼書，史料所见人物。本项目依据《中国历代人物传记资料库：王蒼書（CBDB 26714）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王蒼書 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_c2L9ykikiVd7Ps5dU11PRX | 王簡 | accepted |
| ancestors | p_26tLQutRv9RfwmDpym5T1E | 王從 | accepted |

## 外部来源

- [中国历代人物传记资料库：王蒼書（CBDB 26714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26714&o=json)
- [中国历代人物传记资料库：王從（CBDB 17844）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17844&o=json)
- [中国历代人物传记资料库：王簡（CBDB 26715）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26715&o=json)
