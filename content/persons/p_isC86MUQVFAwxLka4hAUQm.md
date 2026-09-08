---
schema: wang-person/v1
id: p_isC86MUQVFAwxLka4hAUQm
status: active
merged_into: null
display_name: 王恁
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VZonwiDWbmGE0DoofAnscd
        subject_person_id: p_isC86MUQVFAwxLka4hAUQm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恁（?—?），唐朝光州固始縣人，五代十国之閩國开国國王太祖王審知的父親。據說，他家本來是琅琊郡人，王恁的曾祖父王曄為光州定城縣令，遂遷居河南，成為固始人。祖父王友、父親王蘊玉和他都在固始務農。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_CWZr5DGdmtfFlRaWtq2J0P
          claim_id: c_VZonwiDWbmGE0DoofAnscd
          source_id: s_5tzRE_QlQ1kU-SkOBxEd8a
          stance: supports
          locator: 导言
          quotation: 王恁（?—?），唐朝光州固始縣人，五代十国之閩國开国國王太祖王審
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_5tzRE_QlQ1kU-SkOBxEd8a
            source_type: website
            title: 中文维基百科：王恁
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%81%81
            external_identifier: Q10414256
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_cTKofWS2Q3WMPBbu9i9a8B
        subject_person_id: p_isC86MUQVFAwxLka4hAUQm
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 884年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0884-01-01
            latest: 0884-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_bmjaWxgJgd3nLFZ5bzKGkJ
          claim_id: c_cTKofWS2Q3WMPBbu9i9a8B
          source_id: s_RqEZvF3HBBL9kjQtbUJk14
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_RqEZvF3HBBL9kjQtbUJk14
            source_type: api_record
            title: 维基数据：王恁（Q10414256）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10414256
            external_identifier: Q10414256
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:43.213Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HFuZYJmbjs1Lwhq39qnWb8
        subject_person_id: p_isC86MUQVFAwxLka4hAUQm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恁
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_YGB8NRVKNt2EHHQw6N3iU1
          claim_id: c_HFuZYJmbjs1Lwhq39qnWb8
          source_id: s_RqEZvF3HBBL9kjQtbUJk14
          stance: supports
          locator: Q10414256
          quotation: null
          interpretation_note: null
          source:
            id: s_RqEZvF3HBBL9kjQtbUJk14
            source_type: api_record
            title: 维基数据：王恁（Q10414256）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10414256
            external_identifier: Q10414256
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:43.213Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yYd8mNPPwnN8Kci7U8sDUj
        subject_person_id: p_YC1TwQRY7uJP9GEZJCoGCU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_isC86MUQVFAwxLka4hAUQm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GAYhs29gbfiu9528soMAw8
          claim_id: c_yYd8mNPPwnN8Kci7U8sDUj
          source_id: s_5tzRE_QlQ1kU-SkOBxEd8a
          stance: supports
          locator: 导言：父親
          quotation: 據說，他家本來是琅琊郡人，王恁的曾祖父王曄為光州定城縣令，遂遷居河南，成為固始人。祖父王友、父親王蘊玉和他都在固始務農。
          interpretation_note: 条文明确称王蘊玉为王恁的父亲。
          source:
            id: s_5tzRE_QlQ1kU-SkOBxEd8a
            source_type: website
            title: 中文维基百科：王恁
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%81%81
            external_identifier: Q10414256
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person:
        id: p_YC1TwQRY7uJP9GEZJCoGCU
        status: active
        display_name: 王蘊玉
        merged_into_person_id: null
  children:
    - claim:
        id: c_UVubgU3RFJwuSiECa9QuaP
        subject_person_id: p_isC86MUQVFAwxLka4hAUQm
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_AoyiXMcFCT7FwHgBRpLSXs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4KqQ6BFtVQJD16FFwzegLx
          claim_id: c_UVubgU3RFJwuSiECa9QuaP
          source_id: s_sSxvNN3BABUhHQMuA1b9s9
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_sSxvNN3BABUhHQMuA1b9s9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王某（194931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194931&o=json
            external_identifier: CBDB:194931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:24.079Z
            metadata_json: null
        - id: cs_MPSJ3mWYkAuqSBNcKVz3qs
          claim_id: c_UVubgU3RFJwuSiECa9QuaP
          source_id: s_RqEZvF3HBBL9kjQtbUJk14
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_RqEZvF3HBBL9kjQtbUJk14
            source_type: api_record
            title: 维基数据：王恁（Q10414256）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10414256
            external_identifier: Q10414256
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:43.213Z
            metadata_json: null
        - id: cs_qq8yksfX2KPWx4J7L65AQf
          claim_id: c_UVubgU3RFJwuSiECa9QuaP
          source_id: s_VVbFqZPBaPQYXSvkQYDfAp
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_VVbFqZPBaPQYXSvkQYDfAp
            source_type: api_record
            title: 维基数据：王潮（Q517036）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q517036
            external_identifier: Q517036
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:53.402Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%BD%AE
      object_person:
        id: p_AoyiXMcFCT7FwHgBRpLSXs
        status: active
        display_name: 王潮
        merged_into_person_id: null
    - claim:
        id: c_vuDpvpYz2AHx9vKNcayTKV
        subject_person_id: p_isC86MUQVFAwxLka4hAUQm
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_8YMP7N65fqbbLv9pMGphFA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_coU4McYzECshucbdu7SkLR
          claim_id: c_vuDpvpYz2AHx9vKNcayTKV
          source_id: s_sSxvNN3BABUhHQMuA1b9s9
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_sSxvNN3BABUhHQMuA1b9s9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王某（194931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194931&o=json
            external_identifier: CBDB:194931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:24.079Z
            metadata_json: null
        - id: cs_m1821KDQqDAgyCbNHcFWPv
          claim_id: c_vuDpvpYz2AHx9vKNcayTKV
          source_id: s_RqEZvF3HBBL9kjQtbUJk14
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_RqEZvF3HBBL9kjQtbUJk14
            source_type: api_record
            title: 维基数据：王恁（Q10414256）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10414256
            external_identifier: Q10414256
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:43.213Z
            metadata_json: null
        - id: cs_xXsM4RHZL5NmZSJsRTn1be
          claim_id: c_vuDpvpYz2AHx9vKNcayTKV
          source_id: s_BYvayLpGj9Y1h85cB71ggG
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_BYvayLpGj9Y1h85cB71ggG
            source_type: api_record
            title: 维基数据：王审知（Q708354）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q708354
            external_identifier: Q708354
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:53.403Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%A9%E7%9F%A5
      object_person:
        id: p_8YMP7N65fqbbLv9pMGphFA
        status: active
        display_name: 王审知
        merged_into_person_id: null
    - claim:
        id: c_6NH53FD4LcmZf3DsvHhk6f
        subject_person_id: p_isC86MUQVFAwxLka4hAUQm
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_MuYkDS8mpb2qZmr2nMXp8j
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JwsjbvBr4hUxLJdTrC5W2F
          claim_id: c_6NH53FD4LcmZf3DsvHhk6f
          source_id: s_sSxvNN3BABUhHQMuA1b9s9
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_sSxvNN3BABUhHQMuA1b9s9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王某（194931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194931&o=json
            external_identifier: CBDB:194931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:24.079Z
            metadata_json: null
        - id: cs_QzaU4L2qgYKmzQXJ1waUCw
          claim_id: c_6NH53FD4LcmZf3DsvHhk6f
          source_id: s_RqEZvF3HBBL9kjQtbUJk14
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_RqEZvF3HBBL9kjQtbUJk14
            source_type: api_record
            title: 维基数据：王恁（Q10414256）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10414256
            external_identifier: Q10414256
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:43.213Z
            metadata_json: null
        - id: cs_soQAZCJm4T39C4iTojYmqf
          claim_id: c_6NH53FD4LcmZf3DsvHhk6f
          source_id: s_uoN7o4pbmETcU2UELnb51z
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_uoN7o4pbmETcU2UELnb51z
            source_type: api_record
            title: 维基数据：王审邽（Q15931601）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15931601
            external_identifier: Q15931601
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:22.809Z
            metadata_json: null
      object_person:
        id: p_MuYkDS8mpb2qZmr2nMXp8j
        status: active
        display_name: 王审邽
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Pqfw9Qd63cwKE5pQC8GQTU
        subject_person_id: p_isC86MUQVFAwxLka4hAUQm
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_swGTfUWn8frJNKHxALMCy1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TLLbzrFUN5DMnhwDRXSZHi
          claim_id: c_Pqfw9Qd63cwKE5pQC8GQTU
          source_id: s_sFfUA5H75d1Su6JfpBLtcx
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_sFfUA5H75d1Su6JfpBLtcx
            source_type: api_record
            title: 维基数据：秦國太夫人（Q17066741）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q17066741
            external_identifier: Q17066741
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:55.754Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E8%91%A3%E5%A4%AA%E5%A4%AB%E4%BA%BA
        - id: cs_TiVrbHfaSV1zQRPHMLD6AX
          claim_id: c_Pqfw9Qd63cwKE5pQC8GQTU
          source_id: s_RqEZvF3HBBL9kjQtbUJk14
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_RqEZvF3HBBL9kjQtbUJk14
            source_type: api_record
            title: 维基数据：王恁（Q10414256）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10414256
            external_identifier: Q10414256
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:43.213Z
            metadata_json: null
      object_person:
        id: p_swGTfUWn8frJNKHxALMCy1
        status: active
        display_name: 秦國太夫人
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王恁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王恁（?—?），唐朝光州固始縣人，五代十国之閩國开国國王太祖王審知的父親。據說，他家本來是琅琊郡人，王恁的曾祖父王曄為光州定城縣令，遂遷居河南，成為固始人。祖父王友、父親王蘊玉和他都在固始務農。 | accepted |
| death.date | 884年 | accepted |
| name.primary | 王恁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YC1TwQRY7uJP9GEZJCoGCU | 王蘊玉 | accepted |
| children | p_AoyiXMcFCT7FwHgBRpLSXs | 王潮 | accepted |
| children | p_8YMP7N65fqbbLv9pMGphFA | 王审知 | accepted |
| children | p_MuYkDS8mpb2qZmr2nMXp8j | 王审邽 | accepted |
| spouses | p_swGTfUWn8frJNKHxALMCy1 | 秦國太夫人 | accepted |

## 外部来源

- [维基数据：秦國太夫人（Q17066741）](https://www.wikidata.org/wiki/Q17066741)
- [维基数据：王潮（Q517036）](https://www.wikidata.org/wiki/Q517036)
- [维基数据：王恁（Q10414256）](https://www.wikidata.org/wiki/Q10414256)
- [维基数据：王审邽（Q15931601）](https://www.wikidata.org/wiki/Q15931601)
- [维基数据：王审知（Q708354）](https://www.wikidata.org/wiki/Q708354)
- [中文维基百科：王恁](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%81%81)
- [CBDB 中国历代人物传记资料库：王某（194931）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194931&o=json)
