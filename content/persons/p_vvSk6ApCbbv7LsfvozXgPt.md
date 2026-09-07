---
schema: wang-person/v1
id: p_vvSk6ApCbbv7LsfvozXgPt
status: active
merged_into: null
display_name: 王洞玄
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7jVq1NoU4Euu2C3oFHtqgq
        subject_person_id: p_vvSk6ApCbbv7LsfvozXgPt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洞玄（卒于746年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任州司馬。中国历代人物传记资料库（CBDB）以人物编号 175632 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ntZu2kEdC3utrd6eckKFxN
          claim_id: c_7jVq1NoU4Euu2C3oFHtqgq
          source_id: s_fcBHnQjnQqcdmLoyL819N3
          stance: supports
          locator: null
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
        - id: cs_2AnfBQ5B7NyYUbN4-CT0aF
          claim_id: c_7jVq1NoU4Euu2C3oFHtqgq
          source_id: s_h3cP1v6ph4EwVn1ifFd5h3
          stance: supports
          locator: CBDB:175632
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_khvCqu5dMKc7ucX941nEPK
        subject_person_id: p_vvSk6ApCbbv7LsfvozXgPt
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
        - id: cs_3tsnCoYCsn7DUxpHHMFHLh
          claim_id: c_khvCqu5dMKc7ucX941nEPK
          source_id: s_fcBHnQjnQqcdmLoyL819N3
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Hz6KJSTReArW7EXchoEDjV
        subject_person_id: p_vvSk6ApCbbv7LsfvozXgPt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洞玄
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CyyGRbAeRSEbgL5FbiTM22
          claim_id: c_Hz6KJSTReArW7EXchoEDjV
          source_id: s_h3cP1v6ph4EwVn1ifFd5h3
          stance: supports
          locator: Q45670114
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_E3jmtL97E3eArJjZf2FS3B
          claim_id: c_Hz6KJSTReArW7EXchoEDjV
          source_id: s_fcBHnQjnQqcdmLoyL819N3
          stance: supports
          locator: Q45670114
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
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_B9cesCgD7mqBrmZ8ukgb39
        status: active
        display_name: 王𬀩
        merged_into_person_id: null
  children:
    - claim:
        id: c_7sAmMimRj9iPtXFHP1sJJD
        subject_person_id: p_vvSk6ApCbbv7LsfvozXgPt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LvqCxNG1L649zhQGJLHMih
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_75waNUT8uXnai2XpZUq5ZQ
          claim_id: c_7sAmMimRj9iPtXFHP1sJJD
          source_id: s_fcBHnQjnQqcdmLoyL819N3
          stance: supports
          locator: P40（子女）
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
        - id: cs_M8uPQ4ywhxQswi15iaQMta
          claim_id: c_7sAmMimRj9iPtXFHP1sJJD
          source_id: s_h3cP1v6ph4EwVn1ifFd5h3
          stance: supports
          locator: 亲属关系：子
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
        - id: cs_JQTikxBNsieK8G7325rsRF
          claim_id: c_7sAmMimRj9iPtXFHP1sJJD
          source_id: s_dJwRWxHogobnP1ZsiwV1qp
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_dJwRWxHogobnP1ZsiwV1qp
            source_type: api_record
            title: 维基数据：王彭（Q45670161）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670161
            external_identifier: Q45670161
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:54.206Z
            metadata_json: null
        - id: cs_pCBnuNnAHzHsYdweLHMopa
          claim_id: c_7sAmMimRj9iPtXFHP1sJJD
          source_id: s_LrZEvTAa4Zhf6AeuR31rM8
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_LrZEvTAa4Zhf6AeuR31rM8
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王彭（175633）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175633&o=json
            external_identifier: CBDB:175633
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:54.374Z
            metadata_json: null
      object_person:
        id: p_LvqCxNG1L649zhQGJLHMih
        status: active
        display_name: 王彭
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王洞玄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王洞玄（卒于746年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任州司馬。中国历代人物传记资料库（CBDB）以人物编号 175632 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 746年 | accepted |
| name.primary | 王洞玄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_B9cesCgD7mqBrmZ8ukgb39 | 王𬀩 | accepted |
| children | p_LvqCxNG1L649zhQGJLHMih | 王彭 | accepted |

## 外部来源

- [维基数据：王洞玄（Q45670114）](https://www.wikidata.org/wiki/Q45670114)
- [维基数据：王彭（Q45670161）](https://www.wikidata.org/wiki/Q45670161)
- [维基数据：王𬀩（Q45669308）](https://www.wikidata.org/wiki/Q45669308)
- [CBDB 中国历代人物传记资料库：王洞玄（175632）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175632&o=json)
- [CBDB 中国历代人物传记资料库：王彭（175633）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175633&o=json)
- [CBDB 中国历代人物传记资料库：王暐（175615）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175615&o=json)
