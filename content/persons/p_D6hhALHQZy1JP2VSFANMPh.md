---
schema: wang-person/v1
id: p_D6hhALHQZy1JP2VSFANMPh
status: active
merged_into: null
display_name: 王源端
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_b8i6HUec76b8dmZsirHh6x
        subject_person_id: p_D6hhALHQZy1JP2VSFANMPh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源端（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任令。中国历代人物传记资料库（CBDB）以人物编号 175522 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Qdfjqmbt2JxzHP7eiQDM8q
          claim_id: c_b8i6HUec76b8dmZsirHh6x
          source_id: s_JJqoPbSbRFU4YwS9WEUpmJ
          stance: supports
          locator: null
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
        - id: cs_1WZdpYqYf9s4bgFE-jH5hP
          claim_id: c_b8i6HUec76b8dmZsirHh6x
          source_id: s_3oMyBEHySC3D6bb2aQcy9P
          stance: supports
          locator: CBDB:175522
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_xZ66UCokwrkfVcRH2L7vkM
        subject_person_id: p_D6hhALHQZy1JP2VSFANMPh
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
        - id: cs_4m6VWQ65MfupMvLQLRxSSW
          claim_id: c_xZ66UCokwrkfVcRH2L7vkM
          source_id: s_JJqoPbSbRFU4YwS9WEUpmJ
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AYF2VCCo5ThZccATLEMn2J
        subject_person_id: p_D6hhALHQZy1JP2VSFANMPh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源端
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_79mU5rVA2sX2EJNEFxoifT
          claim_id: c_AYF2VCCo5ThZccATLEMn2J
          source_id: s_JJqoPbSbRFU4YwS9WEUpmJ
          stance: supports
          locator: Q45664542
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
        - id: cs_PaEPQYPnKYQ1MAnCLwrQhR
          claim_id: c_AYF2VCCo5ThZccATLEMn2J
          source_id: s_3oMyBEHySC3D6bb2aQcy9P
          stance: supports
          locator: Q45664542
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_M3BhAD6B7H6FiTmTBuUyuq
        subject_person_id: p_4wbLmXso7CEPndJiovTrS6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D6hhALHQZy1JP2VSFANMPh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_SvHhbeRCXFYXpfmHGdhCj7
          claim_id: c_M3BhAD6B7H6FiTmTBuUyuq
          source_id: s_x9jX1CPvi1JzpZGHEakrCh
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_x9jX1CPvi1JzpZGHEakrCh
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王澗（175512）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175512&o=json
            external_identifier: CBDB:175512
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:59.523Z
            metadata_json: null
        - id: cs_zysD2av5rF5DikC3LwijK3
          claim_id: c_M3BhAD6B7H6FiTmTBuUyuq
          source_id: s_uCb6D1MQ7rqZFP4WWBbACN
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_uCb6D1MQ7rqZFP4WWBbACN
            source_type: api_record
            title: 维基数据：王涧（Q45663995）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663995
            external_identifier: Q45663995
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:59.369Z
            metadata_json: null
        - id: cs_xsm8aYS2HrSo3kXpgkk9N9
          claim_id: c_M3BhAD6B7H6FiTmTBuUyuq
          source_id: s_JJqoPbSbRFU4YwS9WEUpmJ
          stance: supports
          locator: P22（父）
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
        - id: cs_NaCHG1jSDFYPgFKnTbshos
          claim_id: c_M3BhAD6B7H6FiTmTBuUyuq
          source_id: s_3oMyBEHySC3D6bb2aQcy9P
          stance: supports
          locator: 亲属关系：父
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
      object_person:
        id: p_4wbLmXso7CEPndJiovTrS6
        status: active
        display_name: 王涧
        merged_into_person_id: null
  children:
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
        id: p_MDTxBhAMjQG132jNt8B4BG
        status: active
        display_name: 王懽
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王源端

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王源端（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任令。中国历代人物传记资料库（CBDB）以人物编号 175522 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 820年 | accepted |
| name.primary | 王源端 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4wbLmXso7CEPndJiovTrS6 | 王涧 | accepted |
| children | p_MDTxBhAMjQG132jNt8B4BG | 王懽 | accepted |

## 外部来源

- [维基数据：王懽（Q45664597）](https://www.wikidata.org/wiki/Q45664597)
- [维基数据：王涧（Q45663995）](https://www.wikidata.org/wiki/Q45663995)
- [维基数据：王源端（Q45664542）](https://www.wikidata.org/wiki/Q45664542)
- [CBDB 中国历代人物传记资料库：王懽（175523）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175523&o=json)
- [CBDB 中国历代人物传记资料库：王澗（175512）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175512&o=json)
- [CBDB 中国历代人物传记资料库：王源端（175522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175522&o=json)
