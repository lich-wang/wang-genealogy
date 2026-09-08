---
schema: wang-person/v1
id: p_HBYpSKCLuQzJprEM9fFEYP
status: active
merged_into: null
display_name: 王珪
cbdb_id: 175400
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QEBjAWBEpGjHiDrzZq2Ubq
        subject_person_id: p_HBYpSKCLuQzJprEM9fFEYP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珪（卒于783年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任州別駕。中国历代人物传记资料库（CBDB）以人物编号 175400 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_mZC4YF8M4we2i8zECZuGoP
          claim_id: c_QEBjAWBEpGjHiDrzZq2Ubq
          source_id: s_rHFx8TixMdN4H4AWzKa9GQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_rHFx8TixMdN4H4AWzKa9GQ
            source_type: api_record
            title: 维基数据：王珪（Q45657394）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657394
            external_identifier: Q45657394
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:46.267Z
            metadata_json: null
        - id: cs_txRiLEk1rGtZ-HozhBEDwa
          claim_id: c_QEBjAWBEpGjHiDrzZq2Ubq
          source_id: s_ooRW3hYfLg1RmMZTefBpof
          stance: supports
          locator: CBDB:175400
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ooRW3hYfLg1RmMZTefBpof
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王珪（175400）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175400&o=json
            external_identifier: CBDB:175400
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:46.443Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_6oA5TCurJRj6Cp4544MDCA
        subject_person_id: p_HBYpSKCLuQzJprEM9fFEYP
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
        - id: cs_DUpxK839FofWi2thBhP2NU
          claim_id: c_6oA5TCurJRj6Cp4544MDCA
          source_id: s_rHFx8TixMdN4H4AWzKa9GQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_rHFx8TixMdN4H4AWzKa9GQ
            source_type: api_record
            title: 维基数据：王珪（Q45657394）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657394
            external_identifier: Q45657394
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:46.267Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6HXwE4rSZkPQfZVZM1GMiy
        subject_person_id: p_HBYpSKCLuQzJprEM9fFEYP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珪
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VEz3JucmY42dP2UF8Btuja
          claim_id: c_6HXwE4rSZkPQfZVZM1GMiy
          source_id: s_ooRW3hYfLg1RmMZTefBpof
          stance: supports
          locator: Q45657394
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_wZh5b57bPnohFH4swWcYFG
          claim_id: c_6HXwE4rSZkPQfZVZM1GMiy
          source_id: s_rHFx8TixMdN4H4AWzKa9GQ
          stance: supports
          locator: Q45657394
          quotation: null
          interpretation_note: null
          source:
            id: s_rHFx8TixMdN4H4AWzKa9GQ
            source_type: api_record
            title: 维基数据：王珪（Q45657394）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657394
            external_identifier: Q45657394
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:46.267Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yYZgHhzivEwEWaMZdxf61H
        subject_person_id: p_AXX2yqTEDSvrtatzvjW4d2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HBYpSKCLuQzJprEM9fFEYP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_JTwjgRdu3uY3DzsqbCiXGL
          claim_id: c_yYZgHhzivEwEWaMZdxf61H
          source_id: s_fHtUP7uYmGwRn4mSm4BoMN
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_fHtUP7uYmGwRn4mSm4BoMN
            source_type: api_record
            title: 维基数据：王希倩（Q45657334）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657334
            external_identifier: Q45657334
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:27.013Z
            metadata_json: null
        - id: cs_tBdZd8FqBcXN7Z7DW49owd
          claim_id: c_yYZgHhzivEwEWaMZdxf61H
          source_id: s_NcVuNK6Q2LSEH14AP2Ezsn
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_NcVuNK6Q2LSEH14AP2Ezsn
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王希倩（175399）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175399&o=json
            external_identifier: CBDB:175399
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:27.329Z
            metadata_json: null
        - id: cs_MbePLyorkEMKf8kMHrWyfg
          claim_id: c_yYZgHhzivEwEWaMZdxf61H
          source_id: s_rHFx8TixMdN4H4AWzKa9GQ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_rHFx8TixMdN4H4AWzKa9GQ
            source_type: api_record
            title: 维基数据：王珪（Q45657394）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657394
            external_identifier: Q45657394
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:46.267Z
            metadata_json: null
        - id: cs_JSEigtJbKLtoG1LagH38bv
          claim_id: c_yYZgHhzivEwEWaMZdxf61H
          source_id: s_ooRW3hYfLg1RmMZTefBpof
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_ooRW3hYfLg1RmMZTefBpof
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王珪（175400）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175400&o=json
            external_identifier: CBDB:175400
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:46.443Z
            metadata_json: null
      object_person:
        id: p_AXX2yqTEDSvrtatzvjW4d2
        status: active
        display_name: 王希倩
        merged_into_person_id: null
  children:
    - claim:
        id: c_APHUfuT4WMD5G3fXHyyUeA
        subject_person_id: p_HBYpSKCLuQzJprEM9fFEYP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HQnmd4RJFt5d8vk8o8quqE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_mE3WMJSDf7L3YQ29MS3Cup
          claim_id: c_APHUfuT4WMD5G3fXHyyUeA
          source_id: s_rHFx8TixMdN4H4AWzKa9GQ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_rHFx8TixMdN4H4AWzKa9GQ
            source_type: api_record
            title: 维基数据：王珪（Q45657394）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657394
            external_identifier: Q45657394
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:46.267Z
            metadata_json: null
        - id: cs_zcRgZAcKqW6mWmyTUruXF4
          claim_id: c_APHUfuT4WMD5G3fXHyyUeA
          source_id: s_ooRW3hYfLg1RmMZTefBpof
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_ooRW3hYfLg1RmMZTefBpof
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王珪（175400）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175400&o=json
            external_identifier: CBDB:175400
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:46.443Z
            metadata_json: null
        - id: cs_RRKZn9L8qDq5HprSFH4ew7
          claim_id: c_APHUfuT4WMD5G3fXHyyUeA
          source_id: s_isJBstWqKzB45ufLR5ozHM
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_isJBstWqKzB45ufLR5ozHM
            source_type: api_record
            title: 维基数据：王海（Q45657452）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657452
            external_identifier: Q45657452
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:22.596Z
            metadata_json: null
        - id: cs_jKpPbxrQ5E1kwtmvsJN9Tv
          claim_id: c_APHUfuT4WMD5G3fXHyyUeA
          source_id: s_zSTh8eU5n33uxyVAJyJML5
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_zSTh8eU5n33uxyVAJyJML5
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王海（175401）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175401&o=json
            external_identifier: CBDB:175401
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:22.874Z
            metadata_json: null
      object_person:
        id: p_HQnmd4RJFt5d8vk8o8quqE
        status: active
        display_name: 王海
        merged_into_person_id: null
    - claim:
        id: c_5EQaLu8JvL3i9tfbtBGaJ1
        subject_person_id: p_HBYpSKCLuQzJprEM9fFEYP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zkLScucBk4JK57QATK1P5y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_PtF1EuBFeuf2tzJ2L5DNtU
          claim_id: c_5EQaLu8JvL3i9tfbtBGaJ1
          source_id: s_rHFx8TixMdN4H4AWzKa9GQ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_rHFx8TixMdN4H4AWzKa9GQ
            source_type: api_record
            title: 维基数据：王珪（Q45657394）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657394
            external_identifier: Q45657394
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:46.267Z
            metadata_json: null
        - id: cs_ZRoJFQsFCzo6iek2ogKWkZ
          claim_id: c_5EQaLu8JvL3i9tfbtBGaJ1
          source_id: s_ooRW3hYfLg1RmMZTefBpof
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_ooRW3hYfLg1RmMZTefBpof
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王珪（175400）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175400&o=json
            external_identifier: CBDB:175400
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:46.443Z
            metadata_json: null
        - id: cs_qr2EH9FkU17cMaRQAnYzNg
          claim_id: c_5EQaLu8JvL3i9tfbtBGaJ1
          source_id: s_fmTBFRP6UZ4fK1GZjEfVZU
          stance: supports
          locator: P22（父）
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
        - id: cs_8nbzfE4y7ZAbyYg3dDmZSM
          claim_id: c_5EQaLu8JvL3i9tfbtBGaJ1
          source_id: s_z74bZ49AQL7hc4CKyB5mGw
          stance: supports
          locator: 亲属关系：父
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
      object_person:
        id: p_zkLScucBk4JK57QATK1P5y
        status: active
        display_name: 王添
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王珪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王珪（卒于783年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任州別駕。中国历代人物传记资料库（CBDB）以人物编号 175400 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 783年 | accepted |
| name.primary | 王珪 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AXX2yqTEDSvrtatzvjW4d2 | 王希倩 | accepted |
| children | p_HQnmd4RJFt5d8vk8o8quqE | 王海 | accepted |
| children | p_zkLScucBk4JK57QATK1P5y | 王添 | accepted |

## 外部来源

- [维基数据：王珪（Q45657394）](https://www.wikidata.org/wiki/Q45657394)
- [维基数据：王海（Q45657452）](https://www.wikidata.org/wiki/Q45657452)
- [维基数据：王添（Q45657810）](https://www.wikidata.org/wiki/Q45657810)
- [维基数据：王希倩（Q45657334）](https://www.wikidata.org/wiki/Q45657334)
- [CBDB 中国历代人物传记资料库：王珪（175400）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175400&o=json)
- [CBDB 中国历代人物传记资料库：王海（175401）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175401&o=json)
- [CBDB 中国历代人物传记资料库：王添（175407）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175407&o=json)
- [CBDB 中国历代人物传记资料库：王希倩（175399）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175399&o=json)
