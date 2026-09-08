---
schema: wang-person/v1
id: p_BSdKViSr47Ca2QyKQUdQhv
status: active
merged_into: null
display_name: 王汶
cbdb_id: 175557
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LKUpWFwQRADQZreGM74tNZ
        subject_person_id: p_BSdKViSr47Ca2QyKQUdQhv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汶（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175557 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_LzStoxbmh8tjufVgEQDWks
          claim_id: c_LKUpWFwQRADQZreGM74tNZ
          source_id: s_6ZdqX9e5ZfeMLL9Lf1YJx8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_6ZdqX9e5ZfeMLL9Lf1YJx8
            source_type: api_record
            title: 维基数据：王汶（Q45666400）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666400
            external_identifier: Q45666400
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:01.011Z
            metadata_json: null
        - id: cs_IKhluyFMbw8Sol97trhUUy
          claim_id: c_LKUpWFwQRADQZreGM74tNZ
          source_id: s_2AHLRY77AJBaCiBWxXD1KV
          stance: supports
          locator: CBDB:175557
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_2AHLRY77AJBaCiBWxXD1KV
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王汶（175557）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175557&o=json
            external_identifier: CBDB:175557
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:01.167Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_XmMyyueq21D6pqZEwXybhE
        subject_person_id: p_BSdKViSr47Ca2QyKQUdQhv
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
        - id: cs_fbFKq35kEpb45VGvfMoTVB
          claim_id: c_XmMyyueq21D6pqZEwXybhE
          source_id: s_6ZdqX9e5ZfeMLL9Lf1YJx8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_6ZdqX9e5ZfeMLL9Lf1YJx8
            source_type: api_record
            title: 维基数据：王汶（Q45666400）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666400
            external_identifier: Q45666400
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:01.011Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_oBLhUo6Mu3QxwxoC19h5Xx
        subject_person_id: p_BSdKViSr47Ca2QyKQUdQhv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汶
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7YrQxfD53RuKYz3aSoHaU5
          claim_id: c_oBLhUo6Mu3QxwxoC19h5Xx
          source_id: s_6ZdqX9e5ZfeMLL9Lf1YJx8
          stance: supports
          locator: Q45666400
          quotation: null
          interpretation_note: null
          source:
            id: s_6ZdqX9e5ZfeMLL9Lf1YJx8
            source_type: api_record
            title: 维基数据：王汶（Q45666400）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666400
            external_identifier: Q45666400
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:01.011Z
            metadata_json: null
        - id: cs_ii7SyZquj2BaAAsjzT5mZG
          claim_id: c_oBLhUo6Mu3QxwxoC19h5Xx
          source_id: s_2AHLRY77AJBaCiBWxXD1KV
          stance: supports
          locator: Q45666400
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Tbuyvqu12kkKprn8iRy6jo
        subject_person_id: p_FPisTavdR1h9GP2xzczNXG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BSdKViSr47Ca2QyKQUdQhv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9rzb4LEJvccAZ2Supkob5M
          claim_id: c_Tbuyvqu12kkKprn8iRy6jo
          source_id: s_voSJPovZEpdxhCGcBmtgv9
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_voSJPovZEpdxhCGcBmtgv9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王宰（175555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175555&o=json
            external_identifier: CBDB:175555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:35.807Z
            metadata_json: null
        - id: cs_fKjHTi6BMADkjqNLxJBEU8
          claim_id: c_Tbuyvqu12kkKprn8iRy6jo
          source_id: s_Z6xkyBZUAF7wA6GtshtnYB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Z6xkyBZUAF7wA6GtshtnYB
            source_type: api_record
            title: 维基数据：王宰（Q45666287）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666287
            external_identifier: Q45666287
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:35.625Z
            metadata_json: null
        - id: cs_Lwpwr7kM2Z4zn9knfbAzXm
          claim_id: c_Tbuyvqu12kkKprn8iRy6jo
          source_id: s_6ZdqX9e5ZfeMLL9Lf1YJx8
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_6ZdqX9e5ZfeMLL9Lf1YJx8
            source_type: api_record
            title: 维基数据：王汶（Q45666400）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666400
            external_identifier: Q45666400
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:01.011Z
            metadata_json: null
        - id: cs_RBAKYPD3REoBDHtJqQ6wUk
          claim_id: c_Tbuyvqu12kkKprn8iRy6jo
          source_id: s_2AHLRY77AJBaCiBWxXD1KV
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_2AHLRY77AJBaCiBWxXD1KV
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王汶（175557）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175557&o=json
            external_identifier: CBDB:175557
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:01.167Z
            metadata_json: null
      object_person:
        id: p_FPisTavdR1h9GP2xzczNXG
        status: active
        display_name: 王宰
        merged_into_person_id: null
  children:
    - claim:
        id: c_6hrM7E4BAjRoM3hMKK29p5
        subject_person_id: p_BSdKViSr47Ca2QyKQUdQhv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yuxPQkyrP7dfdub5aAyY47
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_1w6hG1p1B5hZm194FXtY5C
          claim_id: c_6hrM7E4BAjRoM3hMKK29p5
          source_id: s_2AHLRY77AJBaCiBWxXD1KV
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_2AHLRY77AJBaCiBWxXD1KV
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王汶（175557）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175557&o=json
            external_identifier: CBDB:175557
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:01.167Z
            metadata_json: null
        - id: cs_eYtjKrKLFcWG1b569dLpih
          claim_id: c_6hrM7E4BAjRoM3hMKK29p5
          source_id: s_6ZdqX9e5ZfeMLL9Lf1YJx8
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_6ZdqX9e5ZfeMLL9Lf1YJx8
            source_type: api_record
            title: 维基数据：王汶（Q45666400）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666400
            external_identifier: Q45666400
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:01.011Z
            metadata_json: null
        - id: cs_7DRMVuZQVCUAfDFWJKCDEG
          claim_id: c_6hrM7E4BAjRoM3hMKK29p5
          source_id: s_UnnSXxMzXcPuEQGcHsJ4fE
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_UnnSXxMzXcPuEQGcHsJ4fE
            source_type: api_record
            title: 维基数据：王众（Q45666453）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666453
            external_identifier: Q45666453
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:38.178Z
            metadata_json: null
        - id: cs_ufav5FWEjL6VXV9zww3goQ
          claim_id: c_6hrM7E4BAjRoM3hMKK29p5
          source_id: s_A4uwD3Brpn23JW7vRUpLuE
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_A4uwD3Brpn23JW7vRUpLuE
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王眾（175558）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175558&o=json
            external_identifier: CBDB:175558
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:38.329Z
            metadata_json: null
      object_person:
        id: p_yuxPQkyrP7dfdub5aAyY47
        status: active
        display_name: 王众
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王汶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王汶（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175557 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 783年 | accepted |
| name.primary | 王汶 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FPisTavdR1h9GP2xzczNXG | 王宰 | accepted |
| children | p_yuxPQkyrP7dfdub5aAyY47 | 王众 | accepted |

## 外部来源

- [维基数据：王汶（Q45666400）](https://www.wikidata.org/wiki/Q45666400)
- [维基数据：王宰（Q45666287）](https://www.wikidata.org/wiki/Q45666287)
- [维基数据：王众（Q45666453）](https://www.wikidata.org/wiki/Q45666453)
- [CBDB 中国历代人物传记资料库：王汶（175557）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175557&o=json)
- [CBDB 中国历代人物传记资料库：王宰（175555）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175555&o=json)
- [CBDB 中国历代人物传记资料库：王眾（175558）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175558&o=json)
