---
schema: wang-person/v1
id: p_KrQPoCtGgBA1JmWKQJxS4S
status: active
merged_into: null
display_name: 王检
cbdb_id: 175433
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QEv5ov6dSuhoPFyFH9xSdP
        subject_person_id: p_KrQPoCtGgBA1JmWKQJxS4S
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王检（卒于857年），唐人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 175433）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_84FVQsSHCHeNrpezQJDsV7
          claim_id: c_QEv5ov6dSuhoPFyFH9xSdP
          source_id: s_Sw97HPd7Fe46sQh4RLCNGi
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_Sw97HPd7Fe46sQh4RLCNGi
            source_type: api_record
            title: 维基数据：王检（Q45659357）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659357
            external_identifier: Q45659357
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:58.710Z
            metadata_json: null
        - id: cs_7UXJHxUYYdPhVyx2An0OSc
          claim_id: c_QEv5ov6dSuhoPFyFH9xSdP
          source_id: s_hELwR14JcJR4bXoJDih8yb
          stance: supports
          locator: CBDB:175433
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_hELwR14JcJR4bXoJDih8yb
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王檢（175433）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175433&o=json
            external_identifier: CBDB:175433
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:58.861Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_X3v93F63boLV2CPEh3Kwu3
        subject_person_id: p_KrQPoCtGgBA1JmWKQJxS4S
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
        - id: cs_qbuJWhMsUDAdR49dsuVAj4
          claim_id: c_X3v93F63boLV2CPEh3Kwu3
          source_id: s_Sw97HPd7Fe46sQh4RLCNGi
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_Sw97HPd7Fe46sQh4RLCNGi
            source_type: api_record
            title: 维基数据：王检（Q45659357）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659357
            external_identifier: Q45659357
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:58.710Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8JoR7Efyqu9uyLvqiyvG5Z
        subject_person_id: p_KrQPoCtGgBA1JmWKQJxS4S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王检
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Q4B6GGrGYJdEjnGS1ZDi9Z
          claim_id: c_8JoR7Efyqu9uyLvqiyvG5Z
          source_id: s_Sw97HPd7Fe46sQh4RLCNGi
          stance: supports
          locator: Q45659357
          quotation: null
          interpretation_note: null
          source:
            id: s_Sw97HPd7Fe46sQh4RLCNGi
            source_type: api_record
            title: 维基数据：王检（Q45659357）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659357
            external_identifier: Q45659357
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:58.710Z
            metadata_json: null
        - id: cs_werYSE2dfzgJ6vFh6EBW7A
          claim_id: c_8JoR7Efyqu9uyLvqiyvG5Z
          source_id: s_hELwR14JcJR4bXoJDih8yb
          stance: supports
          locator: Q45659357
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_m3wz1oJxYwLtKgmjnD7afG
        subject_person_id: p_zkLScucBk4JK57QATK1P5y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KrQPoCtGgBA1JmWKQJxS4S
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Mn6RZM5Hz3ZE7vHcAWFSKm
          claim_id: c_m3wz1oJxYwLtKgmjnD7afG
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
        - id: cs_zfPrjguFLrkbHao7t9cJoQ
          claim_id: c_m3wz1oJxYwLtKgmjnD7afG
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
        - id: cs_wysM9FbfxC1HNQG19ZkZKE
          claim_id: c_m3wz1oJxYwLtKgmjnD7afG
          source_id: s_Sw97HPd7Fe46sQh4RLCNGi
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Sw97HPd7Fe46sQh4RLCNGi
            source_type: api_record
            title: 维基数据：王检（Q45659357）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659357
            external_identifier: Q45659357
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:58.710Z
            metadata_json: null
        - id: cs_nEPrMKLf8CSKCJekFaQdaf
          claim_id: c_m3wz1oJxYwLtKgmjnD7afG
          source_id: s_hELwR14JcJR4bXoJDih8yb
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_hELwR14JcJR4bXoJDih8yb
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王檢（175433）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175433&o=json
            external_identifier: CBDB:175433
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:58.861Z
            metadata_json: null
      object_person:
        id: p_zkLScucBk4JK57QATK1P5y
        status: active
        display_name: 王添
        merged_into_person_id: null
  children:
    - claim:
        id: c_NyGB6dp9ex8FFuQW8UdJgP
        subject_person_id: p_KrQPoCtGgBA1JmWKQJxS4S
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MnDiqNwWr2tdGy1C6WX8aV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_m7X1H8nbhgk6gRwYcL8p9v
          claim_id: c_NyGB6dp9ex8FFuQW8UdJgP
          source_id: s_hELwR14JcJR4bXoJDih8yb
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_hELwR14JcJR4bXoJDih8yb
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王檢（175433）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175433&o=json
            external_identifier: CBDB:175433
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:58.861Z
            metadata_json: null
        - id: cs_pyAJMqd7L9ZZ4Sc1J3a6g9
          claim_id: c_NyGB6dp9ex8FFuQW8UdJgP
          source_id: s_Sw97HPd7Fe46sQh4RLCNGi
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Sw97HPd7Fe46sQh4RLCNGi
            source_type: api_record
            title: 维基数据：王检（Q45659357）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659357
            external_identifier: Q45659357
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:58.710Z
            metadata_json: null
        - id: cs_CXb2P93fFJV2QEJLAYT7vH
          claim_id: c_NyGB6dp9ex8FFuQW8UdJgP
          source_id: s_CrUodSAYP8bgb4mJTT77VB
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_CrUodSAYP8bgb4mJTT77VB
            source_type: api_record
            title: 维基数据：王昌嗣（Q45659415）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659415
            external_identifier: Q45659415
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:10.336Z
            metadata_json: null
        - id: cs_NLQ15MXhnVgE2KJC9K3FYN
          claim_id: c_NyGB6dp9ex8FFuQW8UdJgP
          source_id: s_qWCLM4GUM5Dc4TNLi13srp
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_qWCLM4GUM5Dc4TNLi13srp
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王昌嗣（175434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175434&o=json
            external_identifier: CBDB:175434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:10.519Z
            metadata_json: null
      object_person:
        id: p_MnDiqNwWr2tdGy1C6WX8aV
        status: active
        display_name: 王昌嗣
        merged_into_person_id: null
    - claim:
        id: c_r8KD9MNRpLc79PBoAEECM5
        subject_person_id: p_KrQPoCtGgBA1JmWKQJxS4S
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_797Nfwx1qA2gNTU2uaGRpc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Lnr2aXXFGT4LxP1s5Unk8m
          claim_id: c_r8KD9MNRpLc79PBoAEECM5
          source_id: s_Sw97HPd7Fe46sQh4RLCNGi
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Sw97HPd7Fe46sQh4RLCNGi
            source_type: api_record
            title: 维基数据：王检（Q45659357）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659357
            external_identifier: Q45659357
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:58.710Z
            metadata_json: null
        - id: cs_N5xTEDpA4rjoTNaaWuZJhU
          claim_id: c_r8KD9MNRpLc79PBoAEECM5
          source_id: s_hELwR14JcJR4bXoJDih8yb
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_hELwR14JcJR4bXoJDih8yb
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王檢（175433）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175433&o=json
            external_identifier: CBDB:175433
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:58.861Z
            metadata_json: null
        - id: cs_Eej1DAZd4VEsjC7ykt5GMd
          claim_id: c_r8KD9MNRpLc79PBoAEECM5
          source_id: s_SK4CoP1iHZSqTTCFUDU8Kv
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_SK4CoP1iHZSqTTCFUDU8Kv
            source_type: api_record
            title: 维基数据：王昌裔（Q45659534）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659534
            external_identifier: Q45659534
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:10.336Z
            metadata_json: null
        - id: cs_Z7PXwrNuVnyM4xz6Fu8pmQ
          claim_id: c_r8KD9MNRpLc79PBoAEECM5
          source_id: s_b1HAZxMZH8MQUL943dhgfb
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_b1HAZxMZH8MQUL943dhgfb
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王昌裔（175436）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175436&o=json
            external_identifier: CBDB:175436
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:10.477Z
            metadata_json: null
      object_person:
        id: p_797Nfwx1qA2gNTU2uaGRpc
        status: active
        display_name: 王昌裔
        merged_into_person_id: null
    - claim:
        id: c_R4KyosijfEpCJbzS1NJ8yP
        subject_person_id: p_KrQPoCtGgBA1JmWKQJxS4S
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kV8VX5GGaT2N2wTmkZoPM2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_6LMBqYXggHH8VyMV9K8ZtB
          claim_id: c_R4KyosijfEpCJbzS1NJ8yP
          source_id: s_hELwR14JcJR4bXoJDih8yb
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_hELwR14JcJR4bXoJDih8yb
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王檢（175433）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175433&o=json
            external_identifier: CBDB:175433
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:58.861Z
            metadata_json: null
        - id: cs_dW8Ng1LPE1t1dSsDjq1bHp
          claim_id: c_R4KyosijfEpCJbzS1NJ8yP
          source_id: s_Sw97HPd7Fe46sQh4RLCNGi
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Sw97HPd7Fe46sQh4RLCNGi
            source_type: api_record
            title: 维基数据：王检（Q45659357）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659357
            external_identifier: Q45659357
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:58.710Z
            metadata_json: null
        - id: cs_bCFnHTDddMCCAUxxzP2AyK
          claim_id: c_R4KyosijfEpCJbzS1NJ8yP
          source_id: s_5tBeZoikUSXNz2QHdno8G8
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_5tBeZoikUSXNz2QHdno8G8
            source_type: api_record
            title: 维基数据：王潀（Q45659594）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659594
            external_identifier: Q45659594
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:10.336Z
            metadata_json: null
        - id: cs_WdWFD3GGtQfh8LRyg6RADS
          claim_id: c_R4KyosijfEpCJbzS1NJ8yP
          source_id: s_mFWBf4QkzW5W2Spkfrwe8e
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_mFWBf4QkzW5W2Spkfrwe8e
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王潀（175437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175437&o=json
            external_identifier: CBDB:175437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:10.478Z
            metadata_json: null
      object_person:
        id: p_kV8VX5GGaT2N2wTmkZoPM2
        status: active
        display_name: 王潀
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王检

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王检（卒于857年），唐人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 175433） | accepted |
| death.date | 857年 | accepted |
| name.primary | 王检 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zkLScucBk4JK57QATK1P5y | 王添 | accepted |
| children | p_MnDiqNwWr2tdGy1C6WX8aV | 王昌嗣 | accepted |
| children | p_797Nfwx1qA2gNTU2uaGRpc | 王昌裔 | accepted |
| children | p_kV8VX5GGaT2N2wTmkZoPM2 | 王潀 | accepted |

## 外部来源

- [维基数据：王昌嗣（Q45659415）](https://www.wikidata.org/wiki/Q45659415)
- [维基数据：王昌裔（Q45659534）](https://www.wikidata.org/wiki/Q45659534)
- [维基数据：王潀（Q45659594）](https://www.wikidata.org/wiki/Q45659594)
- [维基数据：王检（Q45659357）](https://www.wikidata.org/wiki/Q45659357)
- [维基数据：王添（Q45657810）](https://www.wikidata.org/wiki/Q45657810)
- [CBDB 中国历代人物传记资料库：王昌嗣（175434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175434&o=json)
- [CBDB 中国历代人物传记资料库：王昌裔（175436）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175436&o=json)
- [CBDB 中国历代人物传记资料库：王潀（175437）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175437&o=json)
- [CBDB 中国历代人物传记资料库：王檢（175433）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175433&o=json)
- [CBDB 中国历代人物传记资料库：王添（175407）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175407&o=json)
