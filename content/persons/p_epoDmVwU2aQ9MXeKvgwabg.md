---
schema: wang-person/v1
id: p_epoDmVwU2aQ9MXeKvgwabg
status: active
merged_into: null
display_name: 王罕
cbdb_id: 175622
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nthnjo4uHTN4d7UAUrSTEe
        subject_person_id: p_epoDmVwU2aQ9MXeKvgwabg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王罕（卒于820年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175622）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_B1EkzTcq9dAfRJ9kHw4yAd
          claim_id: c_nthnjo4uHTN4d7UAUrSTEe
          source_id: s_wanu2myQ7yuhKpoADZ7Psr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_wanu2myQ7yuhKpoADZ7Psr
            source_type: api_record
            title: 维基数据：王罕（Q45669640）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669640
            external_identifier: Q45669640
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:47.112Z
            metadata_json: null
        - id: cs_Su8INtRKHFNqjvHynKWXVT
          claim_id: c_nthnjo4uHTN4d7UAUrSTEe
          source_id: s_yfd7wRNFGqvCG1fcNyxVVn
          stance: supports
          locator: CBDB:175622
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_yfd7wRNFGqvCG1fcNyxVVn
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王罕（175622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175622&o=json
            external_identifier: CBDB:175622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:47.270Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_sGxXpMzFciFCUvtoAVwGM2
        subject_person_id: p_epoDmVwU2aQ9MXeKvgwabg
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 820年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0820-01-01
            latest: 0820-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tTLM8jCr69i2UH2G5gMaaD
          claim_id: c_sGxXpMzFciFCUvtoAVwGM2
          source_id: s_wanu2myQ7yuhKpoADZ7Psr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_wanu2myQ7yuhKpoADZ7Psr
            source_type: api_record
            title: 维基数据：王罕（Q45669640）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669640
            external_identifier: Q45669640
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:47.112Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_F1McW1ge35gRYmy5EoAvuc
        subject_person_id: p_epoDmVwU2aQ9MXeKvgwabg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王罕
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AgjE2myzLEEa2iaF88fNGU
          claim_id: c_F1McW1ge35gRYmy5EoAvuc
          source_id: s_wanu2myQ7yuhKpoADZ7Psr
          stance: supports
          locator: Q45669640
          quotation: null
          interpretation_note: null
          source:
            id: s_wanu2myQ7yuhKpoADZ7Psr
            source_type: api_record
            title: 维基数据：王罕（Q45669640）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669640
            external_identifier: Q45669640
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:47.112Z
            metadata_json: null
        - id: cs_PmXvngkjLnc4xuHEyeR8Bm
          claim_id: c_F1McW1ge35gRYmy5EoAvuc
          source_id: s_yfd7wRNFGqvCG1fcNyxVVn
          stance: supports
          locator: Q45669640
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DmhQNJfbvnLmh8Tvm7tAh2
        subject_person_id: p_23foehJQLDEs5RDFCrfjor
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_epoDmVwU2aQ9MXeKvgwabg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_CoVPJFmePtABt4d9xY3HAX
          claim_id: c_DmhQNJfbvnLmh8Tvm7tAh2
          source_id: s_vqrPHSCb5pHgvC2azHnXzg
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_vqrPHSCb5pHgvC2azHnXzg
            source_type: api_record
            title: 维基数据：王和友（Q45669592）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669592
            external_identifier: Q45669592
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:52.356Z
            metadata_json: null
        - id: cs_G8eMRWomfMpw7XhsF6c4En
          claim_id: c_DmhQNJfbvnLmh8Tvm7tAh2
          source_id: s_7LD1gMiGQkjeJwpT5zAGPD
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7LD1gMiGQkjeJwpT5zAGPD
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王和友（175621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175621&o=json
            external_identifier: CBDB:175621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:52.517Z
            metadata_json: null
        - id: cs_pPQHou3isqhC3kqC6cBPuD
          claim_id: c_DmhQNJfbvnLmh8Tvm7tAh2
          source_id: s_wanu2myQ7yuhKpoADZ7Psr
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_wanu2myQ7yuhKpoADZ7Psr
            source_type: api_record
            title: 维基数据：王罕（Q45669640）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669640
            external_identifier: Q45669640
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:47.112Z
            metadata_json: null
        - id: cs_iWo1G3XYrCzNm6EoMNLxPw
          claim_id: c_DmhQNJfbvnLmh8Tvm7tAh2
          source_id: s_yfd7wRNFGqvCG1fcNyxVVn
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_yfd7wRNFGqvCG1fcNyxVVn
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王罕（175622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175622&o=json
            external_identifier: CBDB:175622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:47.270Z
            metadata_json: null
      object_person:
        id: p_23foehJQLDEs5RDFCrfjor
        status: active
        display_name: 王和友
        merged_into_person_id: null
  children:
    - claim:
        id: c_p5UFeGBua1FQGRoPfM3gM7
        subject_person_id: p_epoDmVwU2aQ9MXeKvgwabg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NF8podpLsEgEc39ofXyyLv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_39WL8SnmBUx6rJQJfmfavu
          claim_id: c_p5UFeGBua1FQGRoPfM3gM7
          source_id: s_yfd7wRNFGqvCG1fcNyxVVn
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_yfd7wRNFGqvCG1fcNyxVVn
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王罕（175622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175622&o=json
            external_identifier: CBDB:175622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:47.270Z
            metadata_json: null
        - id: cs_EqEs8FajPsHnKLJmXM8kwY
          claim_id: c_p5UFeGBua1FQGRoPfM3gM7
          source_id: s_wanu2myQ7yuhKpoADZ7Psr
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_wanu2myQ7yuhKpoADZ7Psr
            source_type: api_record
            title: 维基数据：王罕（Q45669640）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669640
            external_identifier: Q45669640
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:47.112Z
            metadata_json: null
        - id: cs_VgwBwzA2pAArGk2k8Y9PBP
          claim_id: c_p5UFeGBua1FQGRoPfM3gM7
          source_id: s_KgqgFE3oCMhc3oCeQxpDQF
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_KgqgFE3oCMhc3oCeQxpDQF
            source_type: api_record
            title: 维基数据：王亭（Q45669688）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669688
            external_identifier: Q45669688
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:07.662Z
            metadata_json: null
        - id: cs_dPbycnFBjrCHZ61fRkQTw1
          claim_id: c_p5UFeGBua1FQGRoPfM3gM7
          source_id: s_EsLKVWKFTiR6F1Ps4XJsD1
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_EsLKVWKFTiR6F1Ps4XJsD1
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王亭（175623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175623&o=json
            external_identifier: CBDB:175623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:07.865Z
            metadata_json: null
      object_person:
        id: p_NF8podpLsEgEc39ofXyyLv
        status: active
        display_name: 王亭
        merged_into_person_id: null
    - claim:
        id: c_XecfWrRFUwXYYNTDXGp5Dk
        subject_person_id: p_epoDmVwU2aQ9MXeKvgwabg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vzCfY5P8EPpPuqcBKJVNdK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_L5VJG2Zr6CjwK74Zdm1U7j
          claim_id: c_XecfWrRFUwXYYNTDXGp5Dk
          source_id: s_wanu2myQ7yuhKpoADZ7Psr
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_wanu2myQ7yuhKpoADZ7Psr
            source_type: api_record
            title: 维基数据：王罕（Q45669640）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669640
            external_identifier: Q45669640
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:47.112Z
            metadata_json: null
        - id: cs_fYJWN6JdKExwbsiN4J7qjS
          claim_id: c_XecfWrRFUwXYYNTDXGp5Dk
          source_id: s_yfd7wRNFGqvCG1fcNyxVVn
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_yfd7wRNFGqvCG1fcNyxVVn
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王罕（175622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175622&o=json
            external_identifier: CBDB:175622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:47.270Z
            metadata_json: null
        - id: cs_gJwqau5GzntdrHnuj55Qhq
          claim_id: c_XecfWrRFUwXYYNTDXGp5Dk
          source_id: s_jF1wTPLdgMvg7oKNXgwxHE
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_jF1wTPLdgMvg7oKNXgwxHE
            source_type: api_record
            title: 维基数据：王谢老（Q45669734）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669734
            external_identifier: Q45669734
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:07.663Z
            metadata_json: null
        - id: cs_3K7BA4SsjReGiNEQ5yJZJW
          claim_id: c_XecfWrRFUwXYYNTDXGp5Dk
          source_id: s_ssXJ6ihvaXGSMQ43geKku8
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_ssXJ6ihvaXGSMQ43geKku8
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王謝老（175624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175624&o=json
            external_identifier: CBDB:175624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:07.837Z
            metadata_json: null
      object_person:
        id: p_vzCfY5P8EPpPuqcBKJVNdK
        status: active
        display_name: 王谢老
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王罕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王罕（卒于820年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175622） | accepted |
| death.date | 820年 | accepted |
| name.primary | 王罕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_23foehJQLDEs5RDFCrfjor | 王和友 | accepted |
| children | p_NF8podpLsEgEc39ofXyyLv | 王亭 | accepted |
| children | p_vzCfY5P8EPpPuqcBKJVNdK | 王谢老 | accepted |

## 外部来源

- [维基数据：王罕（Q45669640）](https://www.wikidata.org/wiki/Q45669640)
- [维基数据：王和友（Q45669592）](https://www.wikidata.org/wiki/Q45669592)
- [维基数据：王亭（Q45669688）](https://www.wikidata.org/wiki/Q45669688)
- [维基数据：王谢老（Q45669734）](https://www.wikidata.org/wiki/Q45669734)
- [CBDB 中国历代人物传记资料库：王罕（175622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175622&o=json)
- [CBDB 中国历代人物传记资料库：王和友（175621）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175621&o=json)
- [CBDB 中国历代人物传记资料库：王亭（175623）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175623&o=json)
- [CBDB 中国历代人物传记资料库：王謝老（175624）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175624&o=json)
