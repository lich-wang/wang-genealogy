---
schema: wang-person/v1
id: p_ABttrGR9ETMfaUWfuE5Xsi
status: active
merged_into: null
display_name: 王逸
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fZMQRaq11bYM995US3Uk9w
        subject_person_id: p_ABttrGR9ETMfaUWfuE5Xsi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逸（卒于857年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175421 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_5qVQSSGE7R2r5xSSFsHLtK
          claim_id: c_fZMQRaq11bYM995US3Uk9w
          source_id: s_CdjpQpB9o7sfhYkeEHMHCN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_CdjpQpB9o7sfhYkeEHMHCN
            source_type: api_record
            title: 维基数据：王逸（Q45658647）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658647
            external_identifier: Q45658647
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:58.710Z
            metadata_json: null
        - id: cs_FYyqu0tg_f_J0KkBgzn1aO
          claim_id: c_fZMQRaq11bYM995US3Uk9w
          source_id: s_jmGu5vS3p9GvQHE422FM7J
          stance: supports
          locator: CBDB:175421
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_jmGu5vS3p9GvQHE422FM7J
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王逸（175421）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175421&o=json
            external_identifier: CBDB:175421
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:58.863Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_TL4Z9XasAy1W3tLxyoHf2T
        subject_person_id: p_ABttrGR9ETMfaUWfuE5Xsi
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 857年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0857-01-01
            latest: 0857-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rqMznJVCWCeNzKmn2qU9nh
          claim_id: c_TL4Z9XasAy1W3tLxyoHf2T
          source_id: s_CdjpQpB9o7sfhYkeEHMHCN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_CdjpQpB9o7sfhYkeEHMHCN
            source_type: api_record
            title: 维基数据：王逸（Q45658647）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658647
            external_identifier: Q45658647
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:58.710Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dDv6QQq3tdQwLCjvnfxFhZ
        subject_person_id: p_ABttrGR9ETMfaUWfuE5Xsi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逸
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9XBYFCKkTg4ZANxnyQxsws
          claim_id: c_dDv6QQq3tdQwLCjvnfxFhZ
          source_id: s_CdjpQpB9o7sfhYkeEHMHCN
          stance: supports
          locator: Q45658647
          quotation: null
          interpretation_note: null
          source:
            id: s_CdjpQpB9o7sfhYkeEHMHCN
            source_type: api_record
            title: 维基数据：王逸（Q45658647）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658647
            external_identifier: Q45658647
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:58.710Z
            metadata_json: null
        - id: cs_zX4SAtF6yZy6HP1fGAuVoM
          claim_id: c_dDv6QQq3tdQwLCjvnfxFhZ
          source_id: s_jmGu5vS3p9GvQHE422FM7J
          stance: supports
          locator: Q45658647
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WAm3kN3WLHDaxFcFLMKF9o
        subject_person_id: p_zkLScucBk4JK57QATK1P5y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ABttrGR9ETMfaUWfuE5Xsi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_CVKgGXKbk19honGgqpApPt
          claim_id: c_WAm3kN3WLHDaxFcFLMKF9o
          source_id: s_z74bZ49AQL7hc4CKyB5mGw
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_z74bZ49AQL7hc4CKyB5mGw
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王添（175407）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175407&o=json
            external_identifier: CBDB:175407
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:24.586Z
            metadata_json: null
        - id: cs_W3N9ZQMTQLs3zzTRDcN3hz
          claim_id: c_WAm3kN3WLHDaxFcFLMKF9o
          source_id: s_fmTBFRP6UZ4fK1GZjEfVZU
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_fmTBFRP6UZ4fK1GZjEfVZU
            source_type: api_record
            title: 维基数据：王添（Q45657810）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657810
            external_identifier: Q45657810
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:24.425Z
            metadata_json: null
        - id: cs_cApTwABnyj834fTx4QpXHL
          claim_id: c_WAm3kN3WLHDaxFcFLMKF9o
          source_id: s_CdjpQpB9o7sfhYkeEHMHCN
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_CdjpQpB9o7sfhYkeEHMHCN
            source_type: api_record
            title: 维基数据：王逸（Q45658647）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658647
            external_identifier: Q45658647
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:58.710Z
            metadata_json: null
        - id: cs_Qv4TfY5G4epL5vs6SnzwAe
          claim_id: c_WAm3kN3WLHDaxFcFLMKF9o
          source_id: s_jmGu5vS3p9GvQHE422FM7J
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_jmGu5vS3p9GvQHE422FM7J
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王逸（175421）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175421&o=json
            external_identifier: CBDB:175421
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:58.863Z
            metadata_json: null
      object_person:
        id: p_zkLScucBk4JK57QATK1P5y
        status: active
        display_name: 王添
        merged_into_person_id: null
  children:
    - claim:
        id: c_kMMR1WwfVXpNjPuMDV34BQ
        subject_person_id: p_ABttrGR9ETMfaUWfuE5Xsi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YT3hNypc9vTDcDdbB8v8re
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_R19QRmHqDK6nhEv1kLHnHc
          claim_id: c_kMMR1WwfVXpNjPuMDV34BQ
          source_id: s_CdjpQpB9o7sfhYkeEHMHCN
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_CdjpQpB9o7sfhYkeEHMHCN
            source_type: api_record
            title: 维基数据：王逸（Q45658647）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658647
            external_identifier: Q45658647
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:58.710Z
            metadata_json: null
        - id: cs_ydHBnBAERBfztGHErJ3fHY
          claim_id: c_kMMR1WwfVXpNjPuMDV34BQ
          source_id: s_jmGu5vS3p9GvQHE422FM7J
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_jmGu5vS3p9GvQHE422FM7J
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王逸（175421）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175421&o=json
            external_identifier: CBDB:175421
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:58.863Z
            metadata_json: null
        - id: cs_MC5SMcFNv6uKAA1F8h9Z3q
          claim_id: c_kMMR1WwfVXpNjPuMDV34BQ
          source_id: s_NMwgJqK3DyF1HLyAqRFEsD
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_NMwgJqK3DyF1HLyAqRFEsD
            source_type: api_record
            title: 维基数据：王纲（Q45658706）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658706
            external_identifier: Q45658706
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:05.102Z
            metadata_json: null
        - id: cs_44Jru39pwwth5m3SyssAyp
          claim_id: c_kMMR1WwfVXpNjPuMDV34BQ
          source_id: s_ymqKkhBgBJUYBNc1cXVKjz
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_ymqKkhBgBJUYBNc1cXVKjz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王綱（175422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175422&o=json
            external_identifier: CBDB:175422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:05.256Z
            metadata_json: null
      object_person:
        id: p_YT3hNypc9vTDcDdbB8v8re
        status: active
        display_name: 王纲
        merged_into_person_id: null
    - claim:
        id: c_Gi54MKeyr6N8w5nV1c518j
        subject_person_id: p_ABttrGR9ETMfaUWfuE5Xsi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MubbBH9r4r6n8js4CcjVCN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_fYwCqgBVqkzcxmUJ2uQb9f
          claim_id: c_Gi54MKeyr6N8w5nV1c518j
          source_id: s_CdjpQpB9o7sfhYkeEHMHCN
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_CdjpQpB9o7sfhYkeEHMHCN
            source_type: api_record
            title: 维基数据：王逸（Q45658647）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658647
            external_identifier: Q45658647
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:58.710Z
            metadata_json: null
        - id: cs_hB2Q4xANnLoY1X4MLgBCJz
          claim_id: c_Gi54MKeyr6N8w5nV1c518j
          source_id: s_jmGu5vS3p9GvQHE422FM7J
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_jmGu5vS3p9GvQHE422FM7J
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王逸（175421）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175421&o=json
            external_identifier: CBDB:175421
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:58.863Z
            metadata_json: null
        - id: cs_dz6gZLNafhJJoJtqQmWYb8
          claim_id: c_Gi54MKeyr6N8w5nV1c518j
          source_id: s_7zavKkpQqmQoG7CB4Gaaxo
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_7zavKkpQqmQoG7CB4Gaaxo
            source_type: api_record
            title: 维基数据：王缟（Q45658763）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658763
            external_identifier: Q45658763
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:06.954Z
            metadata_json: null
        - id: cs_QgqAysfTWo77Ye3y5RtWBn
          claim_id: c_Gi54MKeyr6N8w5nV1c518j
          source_id: s_FPKQWGQsHbAKCyheacCo4g
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_FPKQWGQsHbAKCyheacCo4g
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王縞（175423）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175423&o=json
            external_identifier: CBDB:175423
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:07.104Z
            metadata_json: null
      object_person:
        id: p_MubbBH9r4r6n8js4CcjVCN
        status: active
        display_name: 王缟
        merged_into_person_id: null
    - claim:
        id: c_UhL31T2E42pKM2hWi71Ahg
        subject_person_id: p_ABttrGR9ETMfaUWfuE5Xsi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DmNGUDqJ9f8KfFV4KfAqgQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_EvfFNq36j8xhweJyEZ7Hus
          claim_id: c_UhL31T2E42pKM2hWi71Ahg
          source_id: s_CdjpQpB9o7sfhYkeEHMHCN
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_CdjpQpB9o7sfhYkeEHMHCN
            source_type: api_record
            title: 维基数据：王逸（Q45658647）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658647
            external_identifier: Q45658647
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:58.710Z
            metadata_json: null
        - id: cs_QnASDUkxmNUXodTFgM3pdS
          claim_id: c_UhL31T2E42pKM2hWi71Ahg
          source_id: s_jmGu5vS3p9GvQHE422FM7J
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_jmGu5vS3p9GvQHE422FM7J
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王逸（175421）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175421&o=json
            external_identifier: CBDB:175421
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:58.863Z
            metadata_json: null
        - id: cs_sCgGjv7dSw6x5G8dTB57cC
          claim_id: c_UhL31T2E42pKM2hWi71Ahg
          source_id: s_vbFSMszcmAogFc7PHxyHFZ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_vbFSMszcmAogFc7PHxyHFZ
            source_type: api_record
            title: 维基数据：王进（Q45658822）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658822
            external_identifier: Q45658822
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:06.955Z
            metadata_json: null
        - id: cs_7NyuRgexCdY2nPDKMZZK72
          claim_id: c_UhL31T2E42pKM2hWi71Ahg
          source_id: s_oYrdjnCzVDA38fhexV464o
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_oYrdjnCzVDA38fhexV464o
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王進（175424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175424&o=json
            external_identifier: CBDB:175424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:07.118Z
            metadata_json: null
      object_person:
        id: p_DmNGUDqJ9f8KfFV4KfAqgQ
        status: active
        display_name: 王进
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王逸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王逸（卒于857年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175421 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 857年 | accepted |
| name.primary | 王逸 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zkLScucBk4JK57QATK1P5y | 王添 | accepted |
| children | p_YT3hNypc9vTDcDdbB8v8re | 王纲 | accepted |
| children | p_MubbBH9r4r6n8js4CcjVCN | 王缟 | accepted |
| children | p_DmNGUDqJ9f8KfFV4KfAqgQ | 王进 | accepted |

## 外部来源

- [维基数据：王纲（Q45658706）](https://www.wikidata.org/wiki/Q45658706)
- [维基数据：王缟（Q45658763）](https://www.wikidata.org/wiki/Q45658763)
- [维基数据：王进（Q45658822）](https://www.wikidata.org/wiki/Q45658822)
- [维基数据：王添（Q45657810）](https://www.wikidata.org/wiki/Q45657810)
- [维基数据：王逸（Q45658647）](https://www.wikidata.org/wiki/Q45658647)
- [CBDB 中国历代人物传记资料库：王綱（175422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175422&o=json)
- [CBDB 中国历代人物传记资料库：王縞（175423）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175423&o=json)
- [CBDB 中国历代人物传记资料库：王進（175424）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175424&o=json)
- [CBDB 中国历代人物传记资料库：王添（175407）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175407&o=json)
- [CBDB 中国历代人物传记资料库：王逸（175421）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175421&o=json)
