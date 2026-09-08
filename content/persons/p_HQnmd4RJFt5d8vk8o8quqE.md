---
schema: wang-person/v1
id: p_HQnmd4RJFt5d8vk8o8quqE
status: active
merged_into: null
display_name: 王海
cbdb_id: 175401
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XyszuwbhB83vWA5CEKBDKA
        subject_person_id: p_HQnmd4RJFt5d8vk8o8quqE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王海（卒于820年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175401 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_pTT6aBYBS1TN9kLTW7Bc6J
          claim_id: c_XyszuwbhB83vWA5CEKBDKA
          source_id: s_isJBstWqKzB45ufLR5ozHM
          stance: supports
          locator: null
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
        - id: cs_-e92u650ZbRFGauyo-qcdz
          claim_id: c_XyszuwbhB83vWA5CEKBDKA
          source_id: s_zSTh8eU5n33uxyVAJyJML5
          stance: supports
          locator: CBDB:175401
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_djUmS6bP4cDUkACGxJNQCP
        subject_person_id: p_HQnmd4RJFt5d8vk8o8quqE
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
        - id: cs_bJzUSys9HLEj3TU5ZyVCPC
          claim_id: c_djUmS6bP4cDUkACGxJNQCP
          source_id: s_isJBstWqKzB45ufLR5ozHM
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TXxz7fhdtHSd5JqPKJ3FTE
        subject_person_id: p_HQnmd4RJFt5d8vk8o8quqE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王海
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Ap9cmi77D13TXkvchafJzd
          claim_id: c_TXxz7fhdtHSd5JqPKJ3FTE
          source_id: s_zSTh8eU5n33uxyVAJyJML5
          stance: supports
          locator: Q45657452
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_H4ZM1FVxacUQpZo69sx5Np
          claim_id: c_TXxz7fhdtHSd5JqPKJ3FTE
          source_id: s_isJBstWqKzB45ufLR5ozHM
          stance: supports
          locator: Q45657452
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
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_HBYpSKCLuQzJprEM9fFEYP
        status: active
        display_name: 王珪
        merged_into_person_id: null
  children:
    - claim:
        id: c_PjgDPXLunmPSDEogV4em1m
        subject_person_id: p_HQnmd4RJFt5d8vk8o8quqE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dyB4AcJo45o8QK4CH5LKAB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Rm6Nz3AsB5BQvhayt6BDmH
          claim_id: c_PjgDPXLunmPSDEogV4em1m
          source_id: s_zSTh8eU5n33uxyVAJyJML5
          stance: supports
          locator: 亲属关系：子
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
        - id: cs_cPGKX1ZNcGyJaDtLmzcKag
          claim_id: c_PjgDPXLunmPSDEogV4em1m
          source_id: s_isJBstWqKzB45ufLR5ozHM
          stance: supports
          locator: P40（子女）
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
        - id: cs_eYeLKcbrk8dQ4eDvGCJkPt
          claim_id: c_PjgDPXLunmPSDEogV4em1m
          source_id: s_7U8QcEi8d8HSFNuF5rFPtW
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_7U8QcEi8d8HSFNuF5rFPtW
            source_type: api_record
            title: 维基数据：王建子（Q45657513）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657513
            external_identifier: Q45657513
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:57.050Z
            metadata_json: null
        - id: cs_LmFbi8Yy8CZ58nerJe1YGz
          claim_id: c_PjgDPXLunmPSDEogV4em1m
          source_id: s_deK5HymQLoE99RzxJ9Av2d
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_deK5HymQLoE99RzxJ9Av2d
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王建子（175402）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175402&o=json
            external_identifier: CBDB:175402
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:57.196Z
            metadata_json: null
      object_person:
        id: p_dyB4AcJo45o8QK4CH5LKAB
        status: active
        display_name: 王建子
        merged_into_person_id: null
    - claim:
        id: c_4JW49qBJ15DNW7CF5d9ZqP
        subject_person_id: p_HQnmd4RJFt5d8vk8o8quqE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cZBud2fMcDR6rn4NqeNQf3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_NYx9ntYQgk9uwu9C4feXEW
          claim_id: c_4JW49qBJ15DNW7CF5d9ZqP
          source_id: s_isJBstWqKzB45ufLR5ozHM
          stance: supports
          locator: P40（子女）
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
        - id: cs_WVwF8EBumY9hJmRk93GEu4
          claim_id: c_4JW49qBJ15DNW7CF5d9ZqP
          source_id: s_zSTh8eU5n33uxyVAJyJML5
          stance: supports
          locator: 亲属关系：子
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
        - id: cs_YkZgdbwrMRfK5U9ArfBvR1
          claim_id: c_4JW49qBJ15DNW7CF5d9ZqP
          source_id: s_gxC4334CKRU2fVv2oRotcA
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_gxC4334CKRU2fVv2oRotcA
            source_type: api_record
            title: 维基数据：王铨（Q45657634）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657634
            external_identifier: Q45657634
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:57.050Z
            metadata_json: null
        - id: cs_btM2Rud1c6brNN46xAgPxm
          claim_id: c_4JW49qBJ15DNW7CF5d9ZqP
          source_id: s_wppNwAcNRHuUX9Wdo6H1RQ
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_wppNwAcNRHuUX9Wdo6H1RQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王銓（175404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175404&o=json
            external_identifier: CBDB:175404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:57.211Z
            metadata_json: null
      object_person:
        id: p_cZBud2fMcDR6rn4NqeNQf3
        status: active
        display_name: 王铨
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王海

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王海（卒于820年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175401 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 820年 | accepted |
| name.primary | 王海 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HBYpSKCLuQzJprEM9fFEYP | 王珪 | accepted |
| children | p_dyB4AcJo45o8QK4CH5LKAB | 王建子 | accepted |
| children | p_cZBud2fMcDR6rn4NqeNQf3 | 王铨 | accepted |

## 外部来源

- [维基数据：王珪（Q45657394）](https://www.wikidata.org/wiki/Q45657394)
- [维基数据：王海（Q45657452）](https://www.wikidata.org/wiki/Q45657452)
- [维基数据：王建子（Q45657513）](https://www.wikidata.org/wiki/Q45657513)
- [维基数据：王铨（Q45657634）](https://www.wikidata.org/wiki/Q45657634)
- [CBDB 中国历代人物传记资料库：王珪（175400）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175400&o=json)
- [CBDB 中国历代人物传记资料库：王海（175401）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175401&o=json)
- [CBDB 中国历代人物传记资料库：王建子（175402）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175402&o=json)
- [CBDB 中国历代人物传记资料库：王銓（175404）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175404&o=json)
