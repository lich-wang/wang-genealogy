---
schema: wang-person/v1
id: p_B9cesCgD7mqBrmZ8ukgb39
status: active
merged_into: null
display_name: 王𬀩
cbdb_id: 175615
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MWKt784xVhCLpU97BVbVd6
        subject_person_id: p_B9cesCgD7mqBrmZ8ukgb39
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王𬀩（卒于709年），唐人物。籍贯咸陽，曾任州刺史、州司馬。（中国历代人物传记资料库 CBDB 175615）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_M6W6iqUaY9zbA7AXE6GdSP
          claim_id: c_MWKt784xVhCLpU97BVbVd6
          source_id: s_9DUNPSybp79wPKVDVb9GAw
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_9DUNPSybp79wPKVDVb9GAw
            source_type: api_record
            title: 维基数据：王𬀩（Q45669308）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669308
            external_identifier: Q45669308
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:39.704Z
            metadata_json: null
        - id: cs_B3E4Hyd7x3_KyQCz2vn9Sx
          claim_id: c_MWKt784xVhCLpU97BVbVd6
          source_id: s_EHCAqKCwCRdaE933qgr38h
          stance: supports
          locator: CBDB:175615
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_EHCAqKCwCRdaE933qgr38h
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王暐（175615）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175615&o=json
            external_identifier: CBDB:175615
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:39.863Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_dFFXTYSdR19ABzpo3WZnf7
        subject_person_id: p_B9cesCgD7mqBrmZ8ukgb39
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 709年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0709-01-01
            latest: 0709-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_a7zosrwafwDCaJi9jJBUsJ
          claim_id: c_dFFXTYSdR19ABzpo3WZnf7
          source_id: s_9DUNPSybp79wPKVDVb9GAw
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_9DUNPSybp79wPKVDVb9GAw
            source_type: api_record
            title: 维基数据：王𬀩（Q45669308）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669308
            external_identifier: Q45669308
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:39.704Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_bnDDV3B1TRUZSG2sFQ3c9h
        subject_person_id: p_B9cesCgD7mqBrmZ8ukgb39
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王𬀩
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_39i6fxH5QzXZhuG8j3R43c
          claim_id: c_bnDDV3B1TRUZSG2sFQ3c9h
          source_id: s_EHCAqKCwCRdaE933qgr38h
          stance: supports
          locator: Q45669308
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_xw8DK8qZnAGEwxGxD8dUVU
          claim_id: c_bnDDV3B1TRUZSG2sFQ3c9h
          source_id: s_9DUNPSybp79wPKVDVb9GAw
          stance: supports
          locator: Q45669308
          quotation: null
          interpretation_note: null
          source:
            id: s_9DUNPSybp79wPKVDVb9GAw
            source_type: api_record
            title: 维基数据：王𬀩（Q45669308）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669308
            external_identifier: Q45669308
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:39.704Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gZhdFUfb4BSg1zb998rFLB
        subject_person_id: p_ZSBMnefxQNX4zwGDPTrYX5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_B9cesCgD7mqBrmZ8ukgb39
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ScSSyHjtbcNn9up4zgfUNE
          claim_id: c_gZhdFUfb4BSg1zb998rFLB
          source_id: s_CTC777F2HSKbjF4ZdjzJur
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_CTC777F2HSKbjF4ZdjzJur
            source_type: api_record
            title: 维基数据：王方庆（Q7478164）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q7478164
            external_identifier: Q7478164
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:19.421Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%96%B9%E5%BA%86
        - id: cs_kq2aKQPjS2xK8KxGo4zCH7
          claim_id: c_gZhdFUfb4BSg1zb998rFLB
          source_id: s_7Npqc2V4HZVXpCQ8BDZJQV
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7Npqc2V4HZVXpCQ8BDZJQV
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王綝（175451）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175451&o=json
            external_identifier: CBDB:175451
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:19.563Z
            metadata_json: null
        - id: cs_8Cyd8y3vxmAWpqh8FugtYA
          claim_id: c_gZhdFUfb4BSg1zb998rFLB
          source_id: s_9DUNPSybp79wPKVDVb9GAw
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_9DUNPSybp79wPKVDVb9GAw
            source_type: api_record
            title: 维基数据：王𬀩（Q45669308）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669308
            external_identifier: Q45669308
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:39.704Z
            metadata_json: null
        - id: cs_Krk65v6CdGjXKF15Ksh1vD
          claim_id: c_gZhdFUfb4BSg1zb998rFLB
          source_id: s_EHCAqKCwCRdaE933qgr38h
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_EHCAqKCwCRdaE933qgr38h
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王暐（175615）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175615&o=json
            external_identifier: CBDB:175615
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:39.863Z
            metadata_json: null
      object_person:
        id: p_ZSBMnefxQNX4zwGDPTrYX5
        status: active
        display_name: 王方庆
        merged_into_person_id: null
  children:
    - claim:
        id: c_qJGg8TFZB3zK85xbRswmbJ
        subject_person_id: p_B9cesCgD7mqBrmZ8ukgb39
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cHtNMDSwmNv3KVwwrUz5on
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Ldvi5XkvYtD4cWAU99UhAE
          claim_id: c_qJGg8TFZB3zK85xbRswmbJ
          source_id: s_EHCAqKCwCRdaE933qgr38h
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_EHCAqKCwCRdaE933qgr38h
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王暐（175615）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175615&o=json
            external_identifier: CBDB:175615
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:39.863Z
            metadata_json: null
        - id: cs_dCEbBV6Y1NDFN8wfUWbvPr
          claim_id: c_qJGg8TFZB3zK85xbRswmbJ
          source_id: s_9DUNPSybp79wPKVDVb9GAw
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_9DUNPSybp79wPKVDVb9GAw
            source_type: api_record
            title: 维基数据：王𬀩（Q45669308）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669308
            external_identifier: Q45669308
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:39.704Z
            metadata_json: null
        - id: cs_KTBDLY4viQhcbykGoeBprV
          claim_id: c_qJGg8TFZB3zK85xbRswmbJ
          source_id: s_vJMAPG2rgpEXX3nmUaohGB
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_vJMAPG2rgpEXX3nmUaohGB
            source_type: api_record
            title: 维基数据：王佺（Q45669354）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669354
            external_identifier: Q45669354
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:42.038Z
            metadata_json: null
        - id: cs_9MnNrz2Hk5158Bdn6kfBQQ
          claim_id: c_qJGg8TFZB3zK85xbRswmbJ
          source_id: s_o8AiVFYZcp8SHbnWq7bpz4
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_o8AiVFYZcp8SHbnWq7bpz4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王佺（175616）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175616&o=json
            external_identifier: CBDB:175616
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:42.217Z
            metadata_json: null
      object_person:
        id: p_cHtNMDSwmNv3KVwwrUz5on
        status: active
        display_name: 王佺
        merged_into_person_id: null
    - claim:
        id: c_meYAsUz9oT4y3GVNr5VTNV
        subject_person_id: p_B9cesCgD7mqBrmZ8ukgb39
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ekuHegWSELBqMS1r7Zus3F
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_V6TLkR1zDPUVSPPDY3R7rq
          claim_id: c_meYAsUz9oT4y3GVNr5VTNV
          source_id: s_9DUNPSybp79wPKVDVb9GAw
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_9DUNPSybp79wPKVDVb9GAw
            source_type: api_record
            title: 维基数据：王𬀩（Q45669308）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669308
            external_identifier: Q45669308
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:39.704Z
            metadata_json: null
        - id: cs_tmw9zpZ7N8TmBPTgRmzGh4
          claim_id: c_meYAsUz9oT4y3GVNr5VTNV
          source_id: s_EHCAqKCwCRdaE933qgr38h
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_EHCAqKCwCRdaE933qgr38h
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王暐（175615）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175615&o=json
            external_identifier: CBDB:175615
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:39.863Z
            metadata_json: null
        - id: cs_nQBMjMw7v1nB8sbHaNo2Xy
          claim_id: c_meYAsUz9oT4y3GVNr5VTNV
          source_id: s_1FqjXbKPKZnqaQHDGpRWQV
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_1FqjXbKPKZnqaQHDGpRWQV
            source_type: api_record
            title: 维基数据：王佋（Q45669971）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669971
            external_identifier: Q45669971
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:42.039Z
            metadata_json: null
        - id: cs_J2Nxugzptxdr2Lc4HueNpM
          claim_id: c_meYAsUz9oT4y3GVNr5VTNV
          source_id: s_TYq8ZZgnxdCp9nr5UphnHR
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_TYq8ZZgnxdCp9nr5UphnHR
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王佋（175629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175629&o=json
            external_identifier: CBDB:175629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:42.222Z
            metadata_json: null
      object_person:
        id: p_ekuHegWSELBqMS1r7Zus3F
        status: active
        display_name: 王佋
        merged_into_person_id: null
    - claim:
        id: c_cSrhX3j9MFYmLQ97XoG9K9
        subject_person_id: p_B9cesCgD7mqBrmZ8ukgb39
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vvSk6ApCbbv7LsfvozXgPt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_dA1CxnPJEEXKXmPyN334K1
          claim_id: c_cSrhX3j9MFYmLQ97XoG9K9
          source_id: s_9DUNPSybp79wPKVDVb9GAw
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_9DUNPSybp79wPKVDVb9GAw
            source_type: api_record
            title: 维基数据：王𬀩（Q45669308）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669308
            external_identifier: Q45669308
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:39.704Z
            metadata_json: null
        - id: cs_gPT4YFco8mGbXJujGrh5gg
          claim_id: c_cSrhX3j9MFYmLQ97XoG9K9
          source_id: s_EHCAqKCwCRdaE933qgr38h
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_EHCAqKCwCRdaE933qgr38h
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王暐（175615）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175615&o=json
            external_identifier: CBDB:175615
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:39.863Z
            metadata_json: null
        - id: cs_9aXcJxMbBfVMLHLgke8Vcy
          claim_id: c_cSrhX3j9MFYmLQ97XoG9K9
          source_id: s_fcBHnQjnQqcdmLoyL819N3
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_fcBHnQjnQqcdmLoyL819N3
            source_type: api_record
            title: 维基数据：王洞玄（Q45670114）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670114
            external_identifier: Q45670114
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:42.039Z
            metadata_json: null
        - id: cs_XoFqvPT3aXWToCY7om8FTs
          claim_id: c_cSrhX3j9MFYmLQ97XoG9K9
          source_id: s_h3cP1v6ph4EwVn1ifFd5h3
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_h3cP1v6ph4EwVn1ifFd5h3
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王洞玄（175632）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175632&o=json
            external_identifier: CBDB:175632
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:42.225Z
            metadata_json: null
      object_person:
        id: p_vvSk6ApCbbv7LsfvozXgPt
        status: active
        display_name: 王洞玄
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王𬀩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王𬀩（卒于709年），唐人物。籍贯咸陽，曾任州刺史、州司馬。（中国历代人物传记资料库 CBDB 175615） | accepted |
| death.date | 709年 | accepted |
| name.primary | 王𬀩 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZSBMnefxQNX4zwGDPTrYX5 | 王方庆 | accepted |
| children | p_cHtNMDSwmNv3KVwwrUz5on | 王佺 | accepted |
| children | p_ekuHegWSELBqMS1r7Zus3F | 王佋 | accepted |
| children | p_vvSk6ApCbbv7LsfvozXgPt | 王洞玄 | accepted |

## 外部来源

- [维基数据：王洞玄（Q45670114）](https://www.wikidata.org/wiki/Q45670114)
- [维基数据：王方庆（Q7478164）](https://www.wikidata.org/wiki/Q7478164)
- [维基数据：王佺（Q45669354）](https://www.wikidata.org/wiki/Q45669354)
- [维基数据：王𬀩（Q45669308）](https://www.wikidata.org/wiki/Q45669308)
- [维基数据：王佋（Q45669971）](https://www.wikidata.org/wiki/Q45669971)
- [CBDB 中国历代人物传记资料库：王綝（175451）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175451&o=json)
- [CBDB 中国历代人物传记资料库：王洞玄（175632）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175632&o=json)
- [CBDB 中国历代人物传记资料库：王佺（175616）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175616&o=json)
- [CBDB 中国历代人物传记资料库：王暐（175615）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175615&o=json)
- [CBDB 中国历代人物传记资料库：王佋（175629）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175629&o=json)
