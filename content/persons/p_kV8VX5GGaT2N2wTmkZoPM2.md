---
schema: wang-person/v1
id: p_kV8VX5GGaT2N2wTmkZoPM2
status: active
merged_into: null
display_name: 王潀
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TYqAAn3Wb54mTEmtC9nEHG
        subject_person_id: p_kV8VX5GGaT2N2wTmkZoPM2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潀（卒于894年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任令。中国历代人物传记资料库（CBDB）以人物编号 175437 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_89T2sRG784mLnFqKAJbTgV
          claim_id: c_TYqAAn3Wb54mTEmtC9nEHG
          source_id: s_5tBeZoikUSXNz2QHdno8G8
          stance: supports
          locator: null
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
        - id: cs_niSoJmfvOeHVZfppVJEh1_
          claim_id: c_TYqAAn3Wb54mTEmtC9nEHG
          source_id: s_mFWBf4QkzW5W2Spkfrwe8e
          stance: supports
          locator: CBDB:175437
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_BiuELqVHNBMqWs4Qm9pSHb
        subject_person_id: p_kV8VX5GGaT2N2wTmkZoPM2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 894年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0894-01-01
            latest: 0894-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VDSWdLcqFMJUk5nU4fFPCF
          claim_id: c_BiuELqVHNBMqWs4Qm9pSHb
          source_id: s_5tBeZoikUSXNz2QHdno8G8
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EpNFFYEiE7N6hFF1xuPx6F
        subject_person_id: p_kV8VX5GGaT2N2wTmkZoPM2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潀
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BfKhxXJMW3j3fE3UFCRAxn
          claim_id: c_EpNFFYEiE7N6hFF1xuPx6F
          source_id: s_mFWBf4QkzW5W2Spkfrwe8e
          stance: supports
          locator: Q45659594
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_jWS5CQkzH4vWHohi2LUGLk
          claim_id: c_EpNFFYEiE7N6hFF1xuPx6F
          source_id: s_5tBeZoikUSXNz2QHdno8G8
          stance: supports
          locator: Q45659594
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
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_KrQPoCtGgBA1JmWKQJxS4S
        status: active
        display_name: 王检
        merged_into_person_id: null
  children:
    - claim:
        id: c_eA5C316WqoMgsgf2DSJqgB
        subject_person_id: p_kV8VX5GGaT2N2wTmkZoPM2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ovcNw2cCKn5NamDgXnnXPJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_bBqQwy9Kk2zHEzoApuiRFJ
          claim_id: c_eA5C316WqoMgsgf2DSJqgB
          source_id: s_mFWBf4QkzW5W2Spkfrwe8e
          stance: supports
          locator: 亲属关系：子
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
        - id: cs_mAar49ffH545Zt1PHoeMEB
          claim_id: c_eA5C316WqoMgsgf2DSJqgB
          source_id: s_5tBeZoikUSXNz2QHdno8G8
          stance: supports
          locator: P40（子女）
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
        - id: cs_D9h3nuo8W72MAYqBk1629V
          claim_id: c_eA5C316WqoMgsgf2DSJqgB
          source_id: s_mMUETYouNV6RfDQHhCL3Wh
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_mMUETYouNV6RfDQHhCL3Wh
            source_type: api_record
            title: 维基数据：王潨（Q45659654）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659654
            external_identifier: Q45659654
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:41.553Z
            metadata_json: null
        - id: cs_HUrYDF34K8wfMzG2RRHMB7
          claim_id: c_eA5C316WqoMgsgf2DSJqgB
          source_id: s_sZtCqj2FsN7wEWyNd1a5Em
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_sZtCqj2FsN7wEWyNd1a5Em
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王潨（175438）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175438&o=json
            external_identifier: CBDB:175438
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:41.725Z
            metadata_json: null
      object_person:
        id: p_ovcNw2cCKn5NamDgXnnXPJ
        status: active
        display_name: 王潨
        merged_into_person_id: null
    - claim:
        id: c_ugZ2KVmF8kM987ohkWrvGG
        subject_person_id: p_kV8VX5GGaT2N2wTmkZoPM2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5eTXvYXgYni5cRv9jFh1WH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_YWVcX3zAVG75AUNh3XYZNa
          claim_id: c_ugZ2KVmF8kM987ohkWrvGG
          source_id: s_mFWBf4QkzW5W2Spkfrwe8e
          stance: supports
          locator: 亲属关系：子
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
        - id: cs_nT8sXiDqAEFrAPBxaq1aJC
          claim_id: c_ugZ2KVmF8kM987ohkWrvGG
          source_id: s_5tBeZoikUSXNz2QHdno8G8
          stance: supports
          locator: P40（子女）
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
        - id: cs_Mn3XH5hZ3xbAF2UyndDnBT
          claim_id: c_ugZ2KVmF8kM987ohkWrvGG
          source_id: s_JA5qpSN4QPREHvrR12XWEK
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_JA5qpSN4QPREHvrR12XWEK
            source_type: api_record
            title: 维基数据：王知古（Q45659711）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659711
            external_identifier: Q45659711
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:41.554Z
            metadata_json: null
        - id: cs_dkppW3V8QHib9Qix2ey9H7
          claim_id: c_ugZ2KVmF8kM987ohkWrvGG
          source_id: s_7JwPChwJUFiF5s8KuM3FV4
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7JwPChwJUFiF5s8KuM3FV4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王知古（175439）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175439&o=json
            external_identifier: CBDB:175439
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:41.737Z
            metadata_json: null
      object_person:
        id: p_5eTXvYXgYni5cRv9jFh1WH
        status: active
        display_name: 王知古
        merged_into_person_id: null
    - claim:
        id: c_MXCU89BWsgNhX3iDBPDv9N
        subject_person_id: p_kV8VX5GGaT2N2wTmkZoPM2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sx5SEy4ZbuewAPsbA6hNGm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_S3SFGPy8J8rBtvWFCXs3a4
          claim_id: c_MXCU89BWsgNhX3iDBPDv9N
          source_id: s_5tBeZoikUSXNz2QHdno8G8
          stance: supports
          locator: P40（子女）
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
        - id: cs_pCpqUWvucugfWicL5Y6P9F
          claim_id: c_MXCU89BWsgNhX3iDBPDv9N
          source_id: s_mFWBf4QkzW5W2Spkfrwe8e
          stance: supports
          locator: 亲属关系：子
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
        - id: cs_h1QLy7bLHnfXooLBjMSnNx
          claim_id: c_MXCU89BWsgNhX3iDBPDv9N
          source_id: s_3M8Dy1kb99taDVaqW5Vd6h
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_3M8Dy1kb99taDVaqW5Vd6h
            source_type: api_record
            title: 维基数据：王希古（Q45659772）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659772
            external_identifier: Q45659772
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:41.554Z
            metadata_json: null
        - id: cs_jNKeAvmGkvYPEGda8hYY82
          claim_id: c_MXCU89BWsgNhX3iDBPDv9N
          source_id: s_3JgZSJks7wC7GLB1XA4Fjy
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_3JgZSJks7wC7GLB1XA4Fjy
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王希古（175440）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175440&o=json
            external_identifier: CBDB:175440
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:41.714Z
            metadata_json: null
      object_person:
        id: p_sx5SEy4ZbuewAPsbA6hNGm
        status: active
        display_name: 王希古
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王潀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王潀（卒于894年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任令。中国历代人物传记资料库（CBDB）以人物编号 175437 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 894年 | accepted |
| name.primary | 王潀 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KrQPoCtGgBA1JmWKQJxS4S | 王检 | accepted |
| children | p_ovcNw2cCKn5NamDgXnnXPJ | 王潨 | accepted |
| children | p_5eTXvYXgYni5cRv9jFh1WH | 王知古 | accepted |
| children | p_sx5SEy4ZbuewAPsbA6hNGm | 王希古 | accepted |

## 外部来源

- [维基数据：王潀（Q45659594）](https://www.wikidata.org/wiki/Q45659594)
- [维基数据：王潨（Q45659654）](https://www.wikidata.org/wiki/Q45659654)
- [维基数据：王检（Q45659357）](https://www.wikidata.org/wiki/Q45659357)
- [维基数据：王希古（Q45659772）](https://www.wikidata.org/wiki/Q45659772)
- [维基数据：王知古（Q45659711）](https://www.wikidata.org/wiki/Q45659711)
- [CBDB 中国历代人物传记资料库：王潀（175437）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175437&o=json)
- [CBDB 中国历代人物传记资料库：王潨（175438）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175438&o=json)
- [CBDB 中国历代人物传记资料库：王檢（175433）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175433&o=json)
- [CBDB 中国历代人物传记资料库：王希古（175440）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175440&o=json)
- [CBDB 中国历代人物传记资料库：王知古（175439）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175439&o=json)
