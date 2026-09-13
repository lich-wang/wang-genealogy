---
schema: wang-person/v1
id: p_1x6HsbaXVvAskaJLVUNJ57
status: active
merged_into: null
display_name: 王佶
cbdb_id: 175637
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yRPFgS57D3Q4PtpsWsysb5
        subject_person_id: p_1x6HsbaXVvAskaJLVUNJ57
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佶（卒于746年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175637）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_FUm2p55HnYbxEJaj3YgpsH
          claim_id: c_yRPFgS57D3Q4PtpsWsysb5
          source_id: s_mpfJS3Dm2iJzhWVdaLndjb
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_mpfJS3Dm2iJzhWVdaLndjb
            source_type: api_record
            title: 维基数据：王佶（Q45670344）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670344
            external_identifier: Q45670344
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:43.809Z
            metadata_json: null
        - id: cs_wuy5G-STSOPIuuObUdVdKQ
          claim_id: c_yRPFgS57D3Q4PtpsWsysb5
          source_id: s_BimgtsRM5Qe1AcfHQx8WbA
          stance: supports
          locator: CBDB:175637
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_BimgtsRM5Qe1AcfHQx8WbA
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王佶（175637）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175637&o=json
            external_identifier: CBDB:175637
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:43.995Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_BcXqH1Qn8siKPd1uniRZtP
        subject_person_id: p_1x6HsbaXVvAskaJLVUNJ57
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 746年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0746-01-01
            latest: 0746-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LqbxjCdUQ1LnRg75mLG4zw
          claim_id: c_BcXqH1Qn8siKPd1uniRZtP
          source_id: s_mpfJS3Dm2iJzhWVdaLndjb
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_mpfJS3Dm2iJzhWVdaLndjb
            source_type: api_record
            title: 维基数据：王佶（Q45670344）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670344
            external_identifier: Q45670344
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:43.809Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_z9wEwx5JRD967Yi99v2qGq
        subject_person_id: p_1x6HsbaXVvAskaJLVUNJ57
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佶
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_K411eAN5hPa8mKSVnxWmrH
          claim_id: c_z9wEwx5JRD967Yi99v2qGq
          source_id: s_mpfJS3Dm2iJzhWVdaLndjb
          stance: supports
          locator: Q45670344
          quotation: null
          interpretation_note: null
          source:
            id: s_mpfJS3Dm2iJzhWVdaLndjb
            source_type: api_record
            title: 维基数据：王佶（Q45670344）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670344
            external_identifier: Q45670344
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:43.809Z
            metadata_json: null
        - id: cs_k4SENqvpUMt6gEWRskJ9ML
          claim_id: c_z9wEwx5JRD967Yi99v2qGq
          source_id: s_BimgtsRM5Qe1AcfHQx8WbA
          stance: supports
          locator: Q45670344
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VMQjz9AVYyDNTP7WvUa8gD
        subject_person_id: p_YHE2NJ9LSwowSpyQD68iW1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1x6HsbaXVvAskaJLVUNJ57
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_GSFNaGAGdMec6VBsgxnHz9
          claim_id: c_VMQjz9AVYyDNTP7WvUa8gD
          source_id: s_k7pnfCmMHnCgceNnh6JLHJ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_k7pnfCmMHnCgceNnh6JLHJ
            source_type: api_record
            title: 维基数据：王晖（Q45670207）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670207
            external_identifier: Q45670207
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:39.704Z
            metadata_json: null
        - id: cs_xZoMGUVwG7YAytWwoX6ET9
          claim_id: c_VMQjz9AVYyDNTP7WvUa8gD
          source_id: s_v43uG4Av9fcuPA2Dw8jAmB
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_v43uG4Av9fcuPA2Dw8jAmB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王暉（175634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175634&o=json
            external_identifier: CBDB:175634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:39.839Z
            metadata_json: null
        - id: cs_gREgpJseJZgGzTDWvXKu8s
          claim_id: c_VMQjz9AVYyDNTP7WvUa8gD
          source_id: s_mpfJS3Dm2iJzhWVdaLndjb
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_mpfJS3Dm2iJzhWVdaLndjb
            source_type: api_record
            title: 维基数据：王佶（Q45670344）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670344
            external_identifier: Q45670344
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:43.809Z
            metadata_json: null
        - id: cs_vkNJYMZJSdkrQqJU6LFoXb
          claim_id: c_VMQjz9AVYyDNTP7WvUa8gD
          source_id: s_BimgtsRM5Qe1AcfHQx8WbA
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_BimgtsRM5Qe1AcfHQx8WbA
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王佶（175637）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175637&o=json
            external_identifier: CBDB:175637
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:43.995Z
            metadata_json: null
      object_person:
        id: p_YHE2NJ9LSwowSpyQD68iW1
        status: active
        display_name: 王晖
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王佶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王佶（卒于746年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175637） | accepted |
| death.date | 746年 | accepted |
| name.primary | 王佶 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YHE2NJ9LSwowSpyQD68iW1 | 王晖 | accepted |

## 外部来源

- [维基数据：王晖（Q45670207）](https://www.wikidata.org/wiki/Q45670207)
- [维基数据：王佶（Q45670344）](https://www.wikidata.org/wiki/Q45670344)
- [CBDB 中国历代人物传记资料库：王暉（175634）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175634&o=json)
- [CBDB 中国历代人物传记资料库：王佶（175637）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175637&o=json)
