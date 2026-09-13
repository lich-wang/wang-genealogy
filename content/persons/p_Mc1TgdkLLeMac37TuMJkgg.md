---
schema: wang-person/v1
id: p_Mc1TgdkLLeMac37TuMJkgg
status: active
merged_into: null
display_name: 王延
cbdb_id: 34585
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kdCsQwL5n8z8USQxkhF3P5
        subject_person_id: p_Mc1TgdkLLeMac37TuMJkgg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延，明人物。籍贯吳縣，入仕恩蔭、蔭補。（中国历代人物传记资料库 CBDB 34585）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_HtWgvM6PYxSGZGfN7DVf8G
          claim_id: c_kdCsQwL5n8z8USQxkhF3P5
          source_id: s_oJ8FAXQ24SpR2CDBQw6JKL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_oJ8FAXQ24SpR2CDBQw6JKL
            source_type: api_record
            title: 维基数据：王延（Q45426464）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426464
            external_identifier: Q45426464
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:32.124Z
            metadata_json: null
        - id: cs_5pjBeog0JbNXXp-6EEW5Ov
          claim_id: c_kdCsQwL5n8z8USQxkhF3P5
          source_id: s_QPCYrFB55K36KxRqevJ5vK
          stance: supports
          locator: CBDB:34585
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_QPCYrFB55K36KxRqevJ5vK
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王延喆（34585）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34585&o=json
            external_identifier: CBDB:34585
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:32.301Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wDGAQVd6GBHvkwEETLMh5G
        subject_person_id: p_Mc1TgdkLLeMac37TuMJkgg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9LJpX8Wv7BWFoH1N1pmMpR
          claim_id: c_wDGAQVd6GBHvkwEETLMh5G
          source_id: s_oJ8FAXQ24SpR2CDBQw6JKL
          stance: supports
          locator: Q45426464
          quotation: null
          interpretation_note: null
          source:
            id: s_oJ8FAXQ24SpR2CDBQw6JKL
            source_type: api_record
            title: 维基数据：王延（Q45426464）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426464
            external_identifier: Q45426464
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:32.124Z
            metadata_json: null
        - id: cs_tPx5DJCZCtaaTDCKwn61jh
          claim_id: c_wDGAQVd6GBHvkwEETLMh5G
          source_id: s_QPCYrFB55K36KxRqevJ5vK
          stance: supports
          locator: Q45426464
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GykaKqdG1SXUZYpwhMfhn3
        subject_person_id: p_Wp6B6oFJWureDLbUWC4XTo
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Mc1TgdkLLeMac37TuMJkgg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6umQG1pm8DE4L2guZ1N3YC
          claim_id: c_GykaKqdG1SXUZYpwhMfhn3
          source_id: s_oJ8FAXQ24SpR2CDBQw6JKL
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_oJ8FAXQ24SpR2CDBQw6JKL
            source_type: api_record
            title: 维基数据：王延（Q45426464）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426464
            external_identifier: Q45426464
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:32.124Z
            metadata_json: null
        - id: cs_7j8SsEMC4x5JEZWUhfvFFD
          claim_id: c_GykaKqdG1SXUZYpwhMfhn3
          source_id: s_dWRCcR6daat23BeqA6jHUm
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_dWRCcR6daat23BeqA6jHUm
            source_type: api_record
            title: 维基数据：王鏊（Q15904946）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15904946
            external_identifier: Q15904946
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:35.973Z
            metadata_json: null
        - id: cs_ox68TwqaEyFi6X4r59mxRE
          claim_id: c_GykaKqdG1SXUZYpwhMfhn3
          source_id: s_5F5Mp5wNXSLuYE7mo8tsT9
          stance: supports
          locator: 亲属关系：長子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_5F5Mp5wNXSLuYE7mo8tsT9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鏊（34579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34579&o=json
            external_identifier: CBDB:34579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:08.975Z
            metadata_json: null
      object_person:
        id: p_Wp6B6oFJWureDLbUWC4XTo
        status: active
        display_name: 王鏊
        merged_into_person_id: null
  children:
    - claim:
        id: c_gD8paU8ThG4oXu7oK1hZq9
        subject_person_id: p_Mc1TgdkLLeMac37TuMJkgg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zQ4DLP517TduW9KBmShDJH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1eMCep47kaQ6Kn2PFC9qSK
          claim_id: c_gD8paU8ThG4oXu7oK1hZq9
          source_id: s_oJ8FAXQ24SpR2CDBQw6JKL
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_ES82TPD1NU6VvuPXwnX8TH
          claim_id: c_gD8paU8ThG4oXu7oK1hZq9
          source_id: s_81NCrSguBPreQrC4V4ZqQy
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_81NCrSguBPreQrC4V4ZqQy
            source_type: api_record
            title: 维基数据：王有壬（Q45426505）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426505
            external_identifier: Q45426505
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:33.804Z
            metadata_json: null
        - id: cs_ZKQvsWxv1CMZiJU2rFkcNq
          claim_id: c_gD8paU8ThG4oXu7oK1hZq9
          source_id: s_QPCYrFB55K36KxRqevJ5vK
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source: *a1
      object_person:
        id: p_zQ4DLP517TduW9KBmShDJH
        status: active
        display_name: 王有壬
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王延

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王延，明人物。籍贯吳縣，入仕恩蔭、蔭補。（中国历代人物传记资料库 CBDB 34585） | accepted |
| name.primary | 王延 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Wp6B6oFJWureDLbUWC4XTo | 王鏊 | accepted |
| children | p_zQ4DLP517TduW9KBmShDJH | 王有壬 | accepted |

## 外部来源

- [维基数据：王鏊（Q15904946）](https://www.wikidata.org/wiki/Q15904946)
- [维基数据：王延（Q45426464）](https://www.wikidata.org/wiki/Q45426464)
- [维基数据：王有壬（Q45426505）](https://www.wikidata.org/wiki/Q45426505)
- [CBDB 中国历代人物传记资料库：王鏊（34579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34579&o=json)
- [CBDB 中国历代人物传记资料库：王延喆（34585）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34585&o=json)
