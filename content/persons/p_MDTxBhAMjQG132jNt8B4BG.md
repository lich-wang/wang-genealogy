---
schema: wang-person/v1
id: p_MDTxBhAMjQG132jNt8B4BG
status: active
merged_into: null
display_name: 王懽
cbdb_id: 175523
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sHUg8ECAtAsfsnPfGM4wXL
        subject_person_id: p_MDTxBhAMjQG132jNt8B4BG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懽（卒于857年），唐人物。籍贯咸陽，曾任州文學。（中国历代人物传记资料库 CBDB 175523）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_kECHhRB7K9vJBnpBh1Azw8
          claim_id: c_sHUg8ECAtAsfsnPfGM4wXL
          source_id: s_CNcJ3AwttUAWdoziDD2ekq
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_CNcJ3AwttUAWdoziDD2ekq
            source_type: api_record
            title: 维基数据：王懽（Q45664597）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664597
            external_identifier: Q45664597
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:55.369Z
            metadata_json: null
        - id: cs_HdjOl8YeShUWbKdxNdup_V
          claim_id: c_sHUg8ECAtAsfsnPfGM4wXL
          source_id: s_fweRipWryMWbGVKHQ8JpuD
          stance: supports
          locator: CBDB:175523
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_fweRipWryMWbGVKHQ8JpuD
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王懽（175523）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175523&o=json
            external_identifier: CBDB:175523
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:55.515Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_55bHNz6jK41oBV3S86Hi91
        subject_person_id: p_MDTxBhAMjQG132jNt8B4BG
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
        - id: cs_kn6YVWxipb4jbd87MuWYDR
          claim_id: c_55bHNz6jK41oBV3S86Hi91
          source_id: s_CNcJ3AwttUAWdoziDD2ekq
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_CNcJ3AwttUAWdoziDD2ekq
            source_type: api_record
            title: 维基数据：王懽（Q45664597）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664597
            external_identifier: Q45664597
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:55.369Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_WDXHetLKrneNt7XPaygyqt
        subject_person_id: p_MDTxBhAMjQG132jNt8B4BG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懽
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2Lw454wLGVHAc2WeNK8Dn3
          claim_id: c_WDXHetLKrneNt7XPaygyqt
          source_id: s_fweRipWryMWbGVKHQ8JpuD
          stance: supports
          locator: Q45664597
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_67zkqabUFaozxgNZGmkxoi
          claim_id: c_WDXHetLKrneNt7XPaygyqt
          source_id: s_CNcJ3AwttUAWdoziDD2ekq
          stance: supports
          locator: Q45664597
          quotation: null
          interpretation_note: null
          source:
            id: s_CNcJ3AwttUAWdoziDD2ekq
            source_type: api_record
            title: 维基数据：王懽（Q45664597）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664597
            external_identifier: Q45664597
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:55.369Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_No1uciKqzQBRkkPuBbHdDN
        subject_person_id: p_D6hhALHQZy1JP2VSFANMPh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MDTxBhAMjQG132jNt8B4BG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_1Mqm3B7DRhWv4QTaji9pTg
          claim_id: c_No1uciKqzQBRkkPuBbHdDN
          source_id: s_3oMyBEHySC3D6bb2aQcy9P
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_3oMyBEHySC3D6bb2aQcy9P
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源端（175522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175522&o=json
            external_identifier: CBDB:175522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:34.969Z
            metadata_json: null
        - id: cs_jenLmKze6JLL5iM6buxojX
          claim_id: c_No1uciKqzQBRkkPuBbHdDN
          source_id: s_JJqoPbSbRFU4YwS9WEUpmJ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_JJqoPbSbRFU4YwS9WEUpmJ
            source_type: api_record
            title: 维基数据：王源端（Q45664542）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664542
            external_identifier: Q45664542
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:34.817Z
            metadata_json: null
        - id: cs_kEFKgk7zq15wwC5ERzPsLx
          claim_id: c_No1uciKqzQBRkkPuBbHdDN
          source_id: s_CNcJ3AwttUAWdoziDD2ekq
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_CNcJ3AwttUAWdoziDD2ekq
            source_type: api_record
            title: 维基数据：王懽（Q45664597）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664597
            external_identifier: Q45664597
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:55.369Z
            metadata_json: null
        - id: cs_Y3XS34A4F7KAThhudBWtKt
          claim_id: c_No1uciKqzQBRkkPuBbHdDN
          source_id: s_fweRipWryMWbGVKHQ8JpuD
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_fweRipWryMWbGVKHQ8JpuD
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王懽（175523）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175523&o=json
            external_identifier: CBDB:175523
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:55.515Z
            metadata_json: null
      object_person:
        id: p_D6hhALHQZy1JP2VSFANMPh
        status: active
        display_name: 王源端
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王懽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王懽（卒于857年），唐人物。籍贯咸陽，曾任州文學。（中国历代人物传记资料库 CBDB 175523） | accepted |
| death.date | 857年 | accepted |
| name.primary | 王懽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_D6hhALHQZy1JP2VSFANMPh | 王源端 | accepted |

## 外部来源

- [维基数据：王懽（Q45664597）](https://www.wikidata.org/wiki/Q45664597)
- [维基数据：王源端（Q45664542）](https://www.wikidata.org/wiki/Q45664542)
- [CBDB 中国历代人物传记资料库：王懽（175523）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175523&o=json)
- [CBDB 中国历代人物传记资料库：王源端（175522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175522&o=json)
