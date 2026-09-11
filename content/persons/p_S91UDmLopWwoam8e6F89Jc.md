---
schema: wang-person/v1
id: p_S91UDmLopWwoam8e6F89Jc
status: active
merged_into: null
display_name: 王俊彥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_572vaNxwzBB8BWiojm5DsS
        subject_person_id: p_S91UDmLopWwoam8e6F89Jc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊彥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_w9irBBgx1mY5gpXMCrPH4k
          claim_id: c_572vaNxwzBB8BWiojm5DsS
          source_id: s_pUzhjajoLAKTyuZT2Q98QT
          stance: supports
          locator: CBDB:13476
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（13476）
          source: &a1
            id: s_pUzhjajoLAKTyuZT2Q98QT
            source_type: api_record
            title: 中国历代人物传记资料库：王俊彥（CBDB 13476）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13476&o=json
            external_identifier: CBDB:13476
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.619Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CeNyZdhUt5aqdrDr8A9KsC
        subject_person_id: p_S91UDmLopWwoam8e6F89Jc
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
        - id: cs_oKjGxNaanURA9vYRKhmwAi
          claim_id: c_CeNyZdhUt5aqdrDr8A9KsC
          source_id: s_pUzhjajoLAKTyuZT2Q98QT
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
        id: c__-bsPB9yHGdDttPVqoQ4PQ
        subject_person_id: p_2vFSweinS44zUFpk91U28q
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_S91UDmLopWwoam8e6F89Jc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0jibSsViZYIYHnVgn1_VnM
          claim_id: c__-bsPB9yHGdDttPVqoQ4PQ
          source_id: s_MXEn6srux9SnSuLUMnDoEu
          stance: supports
          locator: CBDB 双向互证（子 王俊彥 ⇄ 父 王忠）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_MXEn6srux9SnSuLUMnDoEu
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 13475）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13475&o=json
            external_identifier: CBDB:13475
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.618Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2vFSweinS44zUFpk91U28q
        status: active
        display_name: 王忠
        merged_into_person_id: null
    - claim:
        id: c_8QGMIGhxahDUL7U10FKrP2
        subject_person_id: p_sG13vw1kNPD6YQdSJvphMP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_S91UDmLopWwoam8e6F89Jc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iYP9wVSDircx_cn8MF4jE6
          claim_id: c_8QGMIGhxahDUL7U10FKrP2
          source_id: s_pUzhjajoLAKTyuZT2Q98QT
          stance: supports
          locator: CBDB 双向互证（父 王鞏 ⇄ 子 王俊彥）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_sG13vw1kNPD6YQdSJvphMP
        status: active
        display_name: 王鞏
        merged_into_person_id: null
  children:
    - claim:
        id: c_K8PExpNmXBwHPorjFvn24h
        subject_person_id: p_S91UDmLopWwoam8e6F89Jc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AT6TrLXfXNgCqXXBTHbNGY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i8Pr00J-OkScMu2XtkyzHb
          claim_id: c_K8PExpNmXBwHPorjFvn24h
          source_id: s_oofGmvA18cfJd9u5N8KNEo
          stance: supports
          locator: CBDB 双向互证（父 王俊彥 ⇄ 子 王佐）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_oofGmvA18cfJd9u5N8KNEo
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 13477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13477&o=json
            external_identifier: CBDB:13477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.620Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AT6TrLXfXNgCqXXBTHbNGY
        status: active
        display_name: 王佐
        merged_into_person_id: null
    - claim:
        id: c_KZ0vML8kAZNFkg66D1xjDi
        subject_person_id: p_S91UDmLopWwoam8e6F89Jc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_N42H3Mvh8FZZWnBhyJQuED
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4XGbbejsGM4bYu5BEv1oos
          claim_id: c_KZ0vML8kAZNFkg66D1xjDi
          source_id: s_EsNSAvpwp3LCo6mQrd5v4F
          stance: supports
          locator: CBDB 双向互证（父 王俊彥 ⇄ 子 王公袞）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_EsNSAvpwp3LCo6mQrd5v4F
            source_type: api_record
            title: 中国历代人物传记资料库：王公袞（CBDB 22224）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22224&o=json
            external_identifier: CBDB:22224
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.855Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_N42H3Mvh8FZZWnBhyJQuED
        status: active
        display_name: 王公袞
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_kSECppnNZQd_1Ps-9m-QCt
        subject_person_id: p_S91UDmLopWwoam8e6F89Jc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_s5BhBT8c6qD1BRcxk3t6Pe
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G6PJjwFvZmxtDtmg-JukxV
          claim_id: c_kSECppnNZQd_1Ps-9m-QCt
          source_id: s_bAn3K1MtrTCuXpx3K8z3YB
          stance: supports
          locator: CBDB 双向互证（祖父 王俊彥 ⇄ 孫 王建封）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_bAn3K1MtrTCuXpx3K8z3YB
            source_type: api_record
            title: 中国历代人物传记资料库：王建封（CBDB 13479）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13479&o=json
            external_identifier: CBDB:13479
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.621Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_s5BhBT8c6qD1BRcxk3t6Pe
        status: active
        display_name: 王建封
        merged_into_person_id: null
  other: []
---

# 王俊彥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊彥 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2vFSweinS44zUFpk91U28q | 王忠 | accepted |
| parents | p_sG13vw1kNPD6YQdSJvphMP | 王鞏 | accepted |
| children | p_AT6TrLXfXNgCqXXBTHbNGY | 王佐 | accepted |
| children | p_N42H3Mvh8FZZWnBhyJQuED | 王公袞 | accepted |
| descendants | p_s5BhBT8c6qD1BRcxk3t6Pe | 王建封 | accepted |

## 外部来源

- [中国历代人物传记资料库：王公袞（CBDB 22224）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22224&o=json)
- [中国历代人物传记资料库：王建封（CBDB 13479）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13479&o=json)
- [中国历代人物传记资料库：王俊彥（CBDB 13476）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13476&o=json)
- [中国历代人物传记资料库：王忠（CBDB 13475）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13475&o=json)
- [中国历代人物传记资料库：王佐（CBDB 13477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13477&o=json)
