---
schema: wang-person/v1
id: p_VCzugTfN1NUsZkRmPAN27h
status: active
merged_into: null
display_name: 王现
cbdb_id: 175606
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oFNGTQcKpiFfoN2hk6SH1t
        subject_person_id: p_VCzugTfN1NUsZkRmPAN27h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王现（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175606 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_5xTXsbtTaZkcvwbumCgRtc
          claim_id: c_oFNGTQcKpiFfoN2hk6SH1t
          source_id: s_FiXBmVmThrwT9DXXq9GYAt
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_FiXBmVmThrwT9DXXq9GYAt
            source_type: api_record
            title: 维基数据：王现（Q45668873）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668873
            external_identifier: Q45668873
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:50.483Z
            metadata_json: null
        - id: cs_jMD5xyoLxApMabjSohXf77
          claim_id: c_oFNGTQcKpiFfoN2hk6SH1t
          source_id: s_v8HG57NFjhTnDhqnEJEhAs
          stance: supports
          locator: CBDB:175606
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_v8HG57NFjhTnDhqnEJEhAs
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王現（175606）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175606&o=json
            external_identifier: CBDB:175606
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:50.673Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_vK6dJKsv5r283T9KSdfGM5
        subject_person_id: p_VCzugTfN1NUsZkRmPAN27h
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 783年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0783-01-01
            latest: 0783-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YTrH8jTQQs1a6FMpELZKhz
          claim_id: c_vK6dJKsv5r283T9KSdfGM5
          source_id: s_FiXBmVmThrwT9DXXq9GYAt
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_FiXBmVmThrwT9DXXq9GYAt
            source_type: api_record
            title: 维基数据：王现（Q45668873）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668873
            external_identifier: Q45668873
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:50.483Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rNFbNLvcwkPj7K8oRKPN88
        subject_person_id: p_VCzugTfN1NUsZkRmPAN27h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王现
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BRL7PnGaR4eegreQ3cMRB2
          claim_id: c_rNFbNLvcwkPj7K8oRKPN88
          source_id: s_FiXBmVmThrwT9DXXq9GYAt
          stance: supports
          locator: Q45668873
          quotation: null
          interpretation_note: null
          source:
            id: s_FiXBmVmThrwT9DXXq9GYAt
            source_type: api_record
            title: 维基数据：王现（Q45668873）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668873
            external_identifier: Q45668873
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:50.483Z
            metadata_json: null
        - id: cs_uan43AeZ5iqnYq5Bu39cMS
          claim_id: c_rNFbNLvcwkPj7K8oRKPN88
          source_id: s_v8HG57NFjhTnDhqnEJEhAs
          stance: supports
          locator: Q45668873
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2GUZ5w7wWGKGYVieRKaCJc
        subject_person_id: p_6J5FgaE6YJNKbrrXMUiTZ6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VCzugTfN1NUsZkRmPAN27h
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_BbL39Jbu3ATXJHtx7JCASk
          claim_id: c_2GUZ5w7wWGKGYVieRKaCJc
          source_id: s_Z5WQrJH3uBN8epNyoJJ5k1
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_Z5WQrJH3uBN8epNyoJJ5k1
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王傑（175605）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175605&o=json
            external_identifier: CBDB:175605
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:40.348Z
            metadata_json: null
        - id: cs_VyKeutBL6eJGT8Bg94fY5q
          claim_id: c_2GUZ5w7wWGKGYVieRKaCJc
          source_id: s_fd1gQUjdf7KvE1BPLrqP9P
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_fd1gQUjdf7KvE1BPLrqP9P
            source_type: api_record
            title: 维基数据：王杰（Q45668821）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668821
            external_identifier: Q45668821
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:40.184Z
            metadata_json: null
        - id: cs_4VKDMY4195hLqZAgC2BFAH
          claim_id: c_2GUZ5w7wWGKGYVieRKaCJc
          source_id: s_FiXBmVmThrwT9DXXq9GYAt
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_FiXBmVmThrwT9DXXq9GYAt
            source_type: api_record
            title: 维基数据：王现（Q45668873）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668873
            external_identifier: Q45668873
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:50.483Z
            metadata_json: null
        - id: cs_m16Wqxg62D3awre9fjcwFL
          claim_id: c_2GUZ5w7wWGKGYVieRKaCJc
          source_id: s_v8HG57NFjhTnDhqnEJEhAs
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_v8HG57NFjhTnDhqnEJEhAs
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王現（175606）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175606&o=json
            external_identifier: CBDB:175606
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:50.673Z
            metadata_json: null
      object_person:
        id: p_6J5FgaE6YJNKbrrXMUiTZ6
        status: active
        display_name: 王杰
        merged_into_person_id: null
  children:
    - claim:
        id: c_jbJmzrj7V58NzHdq4z3Hoq
        subject_person_id: p_VCzugTfN1NUsZkRmPAN27h
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vNHP4yCo1UueVsabVYAC5e
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_5vLLYr9b9H95qfzHHNCM3n
          claim_id: c_jbJmzrj7V58NzHdq4z3Hoq
          source_id: s_v8HG57NFjhTnDhqnEJEhAs
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_v8HG57NFjhTnDhqnEJEhAs
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王現（175606）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175606&o=json
            external_identifier: CBDB:175606
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:50.673Z
            metadata_json: null
        - id: cs_jwUakzm3Jmmsp8orRudsYs
          claim_id: c_jbJmzrj7V58NzHdq4z3Hoq
          source_id: s_FiXBmVmThrwT9DXXq9GYAt
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_FiXBmVmThrwT9DXXq9GYAt
            source_type: api_record
            title: 维基数据：王现（Q45668873）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668873
            external_identifier: Q45668873
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:50.483Z
            metadata_json: null
        - id: cs_39YUgyvgomud7pkDfUtxyy
          claim_id: c_jbJmzrj7V58NzHdq4z3Hoq
          source_id: s_E252MQJBFTYP4C879CgfJJ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_E252MQJBFTYP4C879CgfJJ
            source_type: api_record
            title: 维基数据：王源奕（Q45668921）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668921
            external_identifier: Q45668921
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:43.396Z
            metadata_json: null
        - id: cs_QHJfGZZbfc6pmGMkjiw5fG
          claim_id: c_jbJmzrj7V58NzHdq4z3Hoq
          source_id: s_2urkbw3QafNY8vKaH9FhrE
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_2urkbw3QafNY8vKaH9FhrE
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源奕（175607）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175607&o=json
            external_identifier: CBDB:175607
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:43.546Z
            metadata_json: null
      object_person:
        id: p_vNHP4yCo1UueVsabVYAC5e
        status: active
        display_name: 王源奕
        merged_into_person_id: null
    - claim:
        id: c_U9tnwF6NtRTnoTD6aTZHnu
        subject_person_id: p_VCzugTfN1NUsZkRmPAN27h
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8XxEGHP1f3juWK4AFhtszW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_C2mVE7JjtoBWdSe6kA4dCU
          claim_id: c_U9tnwF6NtRTnoTD6aTZHnu
          source_id: s_v8HG57NFjhTnDhqnEJEhAs
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_v8HG57NFjhTnDhqnEJEhAs
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王現（175606）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175606&o=json
            external_identifier: CBDB:175606
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:50.673Z
            metadata_json: null
        - id: cs_ocZEwmJGrNbuN3bqAabhPe
          claim_id: c_U9tnwF6NtRTnoTD6aTZHnu
          source_id: s_FiXBmVmThrwT9DXXq9GYAt
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_FiXBmVmThrwT9DXXq9GYAt
            source_type: api_record
            title: 维基数据：王现（Q45668873）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668873
            external_identifier: Q45668873
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:50.483Z
            metadata_json: null
        - id: cs_EQjjKdAd6ySFvQS5ZodpNN
          claim_id: c_U9tnwF6NtRTnoTD6aTZHnu
          source_id: s_JfrGpSbfe6nXfm7t3hoSQG
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_JfrGpSbfe6nXfm7t3hoSQG
            source_type: api_record
            title: 维基数据：王源奭（Q45668971）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668971
            external_identifier: Q45668971
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:43.396Z
            metadata_json: null
        - id: cs_yEe2kG85USvtQhZUE6XKd4
          claim_id: c_U9tnwF6NtRTnoTD6aTZHnu
          source_id: s_kv459fniVLWW5B2YocKPEC
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_kv459fniVLWW5B2YocKPEC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源奭（175608）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175608&o=json
            external_identifier: CBDB:175608
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:43.553Z
            metadata_json: null
      object_person:
        id: p_8XxEGHP1f3juWK4AFhtszW
        status: active
        display_name: 王源奭
        merged_into_person_id: null
    - claim:
        id: c_g97hVfWZgsEq6KdXpsbJu5
        subject_person_id: p_VCzugTfN1NUsZkRmPAN27h
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vLABSD5cPjkEwGAaWjtVtN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_1XAb9v1WaD7Ao7AbCJCaj6
          claim_id: c_g97hVfWZgsEq6KdXpsbJu5
          source_id: s_FiXBmVmThrwT9DXXq9GYAt
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_FiXBmVmThrwT9DXXq9GYAt
            source_type: api_record
            title: 维基数据：王现（Q45668873）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668873
            external_identifier: Q45668873
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:50.483Z
            metadata_json: null
        - id: cs_PKmLoRgZBjht4S6y7aEr7p
          claim_id: c_g97hVfWZgsEq6KdXpsbJu5
          source_id: s_v8HG57NFjhTnDhqnEJEhAs
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_v8HG57NFjhTnDhqnEJEhAs
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王現（175606）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175606&o=json
            external_identifier: CBDB:175606
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:50.673Z
            metadata_json: null
        - id: cs_DfNJHVANWckJEaD61jomH6
          claim_id: c_g97hVfWZgsEq6KdXpsbJu5
          source_id: s_4fbKo2k2cvu12QWCyEKDNB
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_4fbKo2k2cvu12QWCyEKDNB
            source_type: api_record
            title: 维基数据：王源爽（Q45669020）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669020
            external_identifier: Q45669020
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:43.396Z
            metadata_json: null
        - id: cs_AqMwpdjzSivDhvrgb1u8Fx
          claim_id: c_g97hVfWZgsEq6KdXpsbJu5
          source_id: s_JLY1WTtU6tJUvKwJwARzE1
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_JLY1WTtU6tJUvKwJwARzE1
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源爽（175609）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175609&o=json
            external_identifier: CBDB:175609
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:43.548Z
            metadata_json: null
      object_person:
        id: p_vLABSD5cPjkEwGAaWjtVtN
        status: active
        display_name: 王源爽
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王现

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王现（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175606 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 783年 | accepted |
| name.primary | 王现 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6J5FgaE6YJNKbrrXMUiTZ6 | 王杰 | accepted |
| children | p_vNHP4yCo1UueVsabVYAC5e | 王源奕 | accepted |
| children | p_8XxEGHP1f3juWK4AFhtszW | 王源奭 | accepted |
| children | p_vLABSD5cPjkEwGAaWjtVtN | 王源爽 | accepted |

## 外部来源

- [维基数据：王杰（Q45668821）](https://www.wikidata.org/wiki/Q45668821)
- [维基数据：王现（Q45668873）](https://www.wikidata.org/wiki/Q45668873)
- [维基数据：王源奭（Q45668971）](https://www.wikidata.org/wiki/Q45668971)
- [维基数据：王源爽（Q45669020）](https://www.wikidata.org/wiki/Q45669020)
- [维基数据：王源奕（Q45668921）](https://www.wikidata.org/wiki/Q45668921)
- [CBDB 中国历代人物传记资料库：王傑（175605）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175605&o=json)
- [CBDB 中国历代人物传记资料库：王現（175606）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175606&o=json)
- [CBDB 中国历代人物传记资料库：王源奭（175608）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175608&o=json)
- [CBDB 中国历代人物传记资料库：王源爽（175609）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175609&o=json)
- [CBDB 中国历代人物传记资料库：王源奕（175607）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175607&o=json)
