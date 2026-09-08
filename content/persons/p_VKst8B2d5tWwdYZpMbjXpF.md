---
schema: wang-person/v1
id: p_VKst8B2d5tWwdYZpMbjXpF
status: active
merged_into: null
display_name: 王砺
cbdb_id: 15706
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XkPnQpx8utaN25f6S7t2BP
        subject_person_id: p_VKst8B2d5tWwdYZpMbjXpF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王砺，宋人物。CBDB 记录其籍贯记录为虞城，入仕记录为科舉: 進士(籠統)，曾任秘書省少監、太師。中国历代人物传记资料库（CBDB）以人物编号 15706 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_FhodEvgmPLkEkDnwvtKkKA
          claim_id: c_XkPnQpx8utaN25f6S7t2BP
          source_id: s_cEzQFMJKfXkebXkBavgjxf
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_cEzQFMJKfXkebXkBavgjxf
            source_type: api_record
            title: 维基数据：王砺（Q45381094）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45381094
            external_identifier: Q45381094
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:00.249Z
            metadata_json: null
        - id: cs_RAxZ5nDbJyTZgJFvIkhSub
          claim_id: c_XkPnQpx8utaN25f6S7t2BP
          source_id: s_k4sFmeLJCYGtEaPGKsQ95C
          stance: supports
          locator: CBDB:15706
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_k4sFmeLJCYGtEaPGKsQ95C
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王礪（15706）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=15706&o=json
            external_identifier: CBDB:15706
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:00.404Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KZ7PPrHfj3J4HTXYM98XsG
        subject_person_id: p_VKst8B2d5tWwdYZpMbjXpF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王砺
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FmSvhU3136gGfnPgMG25Vf
          claim_id: c_KZ7PPrHfj3J4HTXYM98XsG
          source_id: s_k4sFmeLJCYGtEaPGKsQ95C
          stance: supports
          locator: Q45381094
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_mpPi9TvYiqUHTxoo6g6s9K
          claim_id: c_KZ7PPrHfj3J4HTXYM98XsG
          source_id: s_cEzQFMJKfXkebXkBavgjxf
          stance: supports
          locator: Q45381094
          quotation: null
          interpretation_note: null
          source:
            id: s_cEzQFMJKfXkebXkBavgjxf
            source_type: api_record
            title: 维基数据：王砺（Q45381094）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45381094
            external_identifier: Q45381094
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:00.249Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_P1rzAToioYiMEaWp9iVTER
        subject_person_id: p_diPVGy9BzMjoKiUc6icH9N
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VKst8B2d5tWwdYZpMbjXpF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4kxiYMQW42xETGpYTmdCeG
          claim_id: c_P1rzAToioYiMEaWp9iVTER
          source_id: s_cEzQFMJKfXkebXkBavgjxf
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_iEd9BmZp1muex6WGQ4Hr9q
          claim_id: c_P1rzAToioYiMEaWp9iVTER
          source_id: s_gUKLxhVWyMb8FFrDMHt15y
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_gUKLxhVWyMb8FFrDMHt15y
            source_type: api_record
            title: 维基数据：王化（Q45381148）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45381148
            external_identifier: Q45381148
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:14.100Z
            metadata_json: null
        - id: cs_L8V1HMrJdDeF4bj8dE1PZJ
          claim_id: c_P1rzAToioYiMEaWp9iVTER
          source_id: s_pQVBrrHKLnxGfctpqEstQY
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_pQVBrrHKLnxGfctpqEstQY
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王化（15747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=15747&o=json
            external_identifier: CBDB:15747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:14.252Z
            metadata_json: null
      object_person:
        id: p_diPVGy9BzMjoKiUc6icH9N
        status: active
        display_name: 王化
        merged_into_person_id: null
  children:
    - claim:
        id: c_nzTgQx8HuRmT4WGDijdTDZ
        subject_person_id: p_VKst8B2d5tWwdYZpMbjXpF
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_eJ5xPSqX9C5GQJFJ6vhqFc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_okPWrB2kyhfa91CPK8v9fN
          claim_id: c_nzTgQx8HuRmT4WGDijdTDZ
          source_id: s_bAVZu7wS9x2wcXBfq2WzC1
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_bAVZu7wS9x2wcXBfq2WzC1
            source_type: api_record
            title: 维基数据：王洙（Q15935485）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15935485
            external_identifier: Q15935485
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:33.095Z
            metadata_json: null
        - id: cs_vfp38C1K9cbJGTUgMf9mKz
          claim_id: c_nzTgQx8HuRmT4WGDijdTDZ
          source_id: s_cEzQFMJKfXkebXkBavgjxf
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_cEzQFMJKfXkebXkBavgjxf
            source_type: api_record
            title: 维基数据：王砺（Q45381094）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45381094
            external_identifier: Q45381094
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:00.249Z
            metadata_json: null
      object_person:
        id: p_eJ5xPSqX9C5GQJFJ6vhqFc
        status: active
        display_name: 王洙
        merged_into_person_id: null
    - claim:
        id: c_CXRfRM3tvwko6vT5kFjCr8
        subject_person_id: p_VKst8B2d5tWwdYZpMbjXpF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_X1JHNSNn6VXFCTFVn6HXuA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i7TcpWjNE8WtKypJ7m753t
          claim_id: c_CXRfRM3tvwko6vT5kFjCr8
          source_id: s_cEzQFMJKfXkebXkBavgjxf
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_88fSjbB32bdMk5mGriKwCJ
          claim_id: c_CXRfRM3tvwko6vT5kFjCr8
          source_id: s_GDCh7KN73yY43YCNHFB3qh
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_GDCh7KN73yY43YCNHFB3qh
            source_type: api_record
            title: 维基数据：王涣（Q45362965）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45362965
            external_identifier: Q45362965
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:12.061Z
            metadata_json: null
        - id: cs_vkWs7MzXd3R1BURtxQgFpt
          claim_id: c_CXRfRM3tvwko6vT5kFjCr8
          source_id: s_k4sFmeLJCYGtEaPGKsQ95C
          stance: supports
          locator: 亲属关系：長子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source: *a1
      object_person:
        id: p_X1JHNSNn6VXFCTFVn6HXuA
        status: active
        display_name: 王涣
        merged_into_person_id: null
    - claim:
        id: c_ZPBKkPRWMgoVQP9PxnPtEH
        subject_person_id: p_VKst8B2d5tWwdYZpMbjXpF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MTk1zakKvoc4HW2SfG5Ese
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c7D16URyEt7saqjFKJHFB3
          claim_id: c_ZPBKkPRWMgoVQP9PxnPtEH
          source_id: s_cEzQFMJKfXkebXkBavgjxf
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_HNBPBYhv3P18URJMLq5faK
          claim_id: c_ZPBKkPRWMgoVQP9PxnPtEH
          source_id: s_9haVnYnB1Mu8a5ABupm314
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_9haVnYnB1Mu8a5ABupm314
            source_type: api_record
            title: 维基数据：王渎（Q45363040）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45363040
            external_identifier: Q45363040
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:12.061Z
            metadata_json: null
        - id: cs_3EaTSW6C8xN89JmsQ1JSdh
          claim_id: c_ZPBKkPRWMgoVQP9PxnPtEH
          source_id: s_k4sFmeLJCYGtEaPGKsQ95C
          stance: supports
          locator: 亲属关系：次子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source: *a1
      object_person:
        id: p_MTk1zakKvoc4HW2SfG5Ese
        status: active
        display_name: 王渎
        merged_into_person_id: null
    - claim:
        id: c_gBfHB6ZfygAvHWcA3Mn1Lf
        subject_person_id: p_VKst8B2d5tWwdYZpMbjXpF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_596s4A8i6r9PRN7rPGV3NA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MVetjREmA8Kd9TbLH7f238
          claim_id: c_gBfHB6ZfygAvHWcA3Mn1Lf
          source_id: s_cEzQFMJKfXkebXkBavgjxf
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_T2Edg7QJ2drW2PaXB8SEF1
          claim_id: c_gBfHB6ZfygAvHWcA3Mn1Lf
          source_id: s_aKFCcrAdwRKYro8X2TNC6a
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_aKFCcrAdwRKYro8X2TNC6a
            source_type: api_record
            title: 维基数据：王演（Q45363055）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45363055
            external_identifier: Q45363055
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:14.100Z
            metadata_json: null
        - id: cs_CmR9MFHX3wUBQYZYGFekN7
          claim_id: c_gBfHB6ZfygAvHWcA3Mn1Lf
          source_id: s_k4sFmeLJCYGtEaPGKsQ95C
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source: *a1
      object_person:
        id: p_596s4A8i6r9PRN7rPGV3NA
        status: active
        display_name: 王演
        merged_into_person_id: null
    - claim:
        id: c_MLqnsKBCgfGBj6vyzYDcn8
        subject_person_id: p_VKst8B2d5tWwdYZpMbjXpF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ro6G6j28vQb3THHmGL9bxo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uLMBWd6XxN4tYN2Vhxc3p7
          claim_id: c_MLqnsKBCgfGBj6vyzYDcn8
          source_id: s_cEzQFMJKfXkebXkBavgjxf
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_pvLzLA2kga2YESaQcEvyK3
          claim_id: c_MLqnsKBCgfGBj6vyzYDcn8
          source_id: s_HJKcTcPnUSmSmFGwkGRuvk
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_HJKcTcPnUSmSmFGwkGRuvk
            source_type: api_record
            title: 维基数据：王冲（Q45381153）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45381153
            external_identifier: Q45381153
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:14.100Z
            metadata_json: null
        - id: cs_iVkLBpQt5AcsYkgHisS8HH
          claim_id: c_MLqnsKBCgfGBj6vyzYDcn8
          source_id: s_k4sFmeLJCYGtEaPGKsQ95C
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source: *a1
      object_person:
        id: p_ro6G6j28vQb3THHmGL9bxo
        status: active
        display_name: 王冲
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王砺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王砺，宋人物。CBDB 记录其籍贯记录为虞城，入仕记录为科舉: 進士(籠統)，曾任秘書省少監、太師。中国历代人物传记资料库（CBDB）以人物编号 15706 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王砺 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_diPVGy9BzMjoKiUc6icH9N | 王化 | accepted |
| children | p_eJ5xPSqX9C5GQJFJ6vhqFc | 王洙 | accepted |
| children | p_X1JHNSNn6VXFCTFVn6HXuA | 王涣 | accepted |
| children | p_MTk1zakKvoc4HW2SfG5Ese | 王渎 | accepted |
| children | p_596s4A8i6r9PRN7rPGV3NA | 王演 | accepted |
| children | p_ro6G6j28vQb3THHmGL9bxo | 王冲 | accepted |

## 外部来源

- [维基数据：王冲（Q45381153）](https://www.wikidata.org/wiki/Q45381153)
- [维基数据：王渎（Q45363040）](https://www.wikidata.org/wiki/Q45363040)
- [维基数据：王化（Q45381148）](https://www.wikidata.org/wiki/Q45381148)
- [维基数据：王涣（Q45362965）](https://www.wikidata.org/wiki/Q45362965)
- [维基数据：王砺（Q45381094）](https://www.wikidata.org/wiki/Q45381094)
- [维基数据：王演（Q45363055）](https://www.wikidata.org/wiki/Q45363055)
- [维基数据：王洙（Q15935485）](https://www.wikidata.org/wiki/Q15935485)
- [CBDB 中国历代人物传记资料库：王化（15747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=15747&o=json)
- [CBDB 中国历代人物传记资料库：王礪（15706）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=15706&o=json)
