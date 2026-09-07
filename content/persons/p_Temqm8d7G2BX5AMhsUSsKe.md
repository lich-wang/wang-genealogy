---
schema: wang-person/v1
id: p_Temqm8d7G2BX5AMhsUSsKe
status: active
merged_into: null
display_name: 王淮
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sQHMWzU2QpwhDwVjFu1KRz
        subject_person_id: p_Temqm8d7G2BX5AMhsUSsKe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淮（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任御史中丞。中国历代人物传记资料库（CBDB）以人物编号 175485 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_8n62B7WVe2ACh8CrDfCU5k
          claim_id: c_sQHMWzU2QpwhDwVjFu1KRz
          source_id: s_oP3nDo3PJy5MiFhowymRjU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_oP3nDo3PJy5MiFhowymRjU
            source_type: api_record
            title: 维基数据：王淮（Q45662457）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662457
            external_identifier: Q45662457
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:57.665Z
            metadata_json: null
        - id: cs_WccPrqqMZ0nmfBW6nHFnj1
          claim_id: c_sQHMWzU2QpwhDwVjFu1KRz
          source_id: s_g91cQTxn2A1Y9WJ81nRhWQ
          stance: supports
          locator: CBDB:175485
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_g91cQTxn2A1Y9WJ81nRhWQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王淮（175485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175485&o=json
            external_identifier: CBDB:175485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:57.829Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_V5PW2i9WeNY7uAijWphA4c
        subject_person_id: p_Temqm8d7G2BX5AMhsUSsKe
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
        - id: cs_sePojGMdYSEi8WTc3rMtrf
          claim_id: c_V5PW2i9WeNY7uAijWphA4c
          source_id: s_oP3nDo3PJy5MiFhowymRjU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_oP3nDo3PJy5MiFhowymRjU
            source_type: api_record
            title: 维基数据：王淮（Q45662457）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662457
            external_identifier: Q45662457
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:57.665Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HDg36eNchcpyEy3ymWHGKr
        subject_person_id: p_Temqm8d7G2BX5AMhsUSsKe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淮
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1XHd6FMZWcBszJNpgpEQhq
          claim_id: c_HDg36eNchcpyEy3ymWHGKr
          source_id: s_g91cQTxn2A1Y9WJ81nRhWQ
          stance: supports
          locator: Q45662457
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_kcvsX5GCXxSZd8DWZTMBAt
          claim_id: c_HDg36eNchcpyEy3ymWHGKr
          source_id: s_oP3nDo3PJy5MiFhowymRjU
          stance: supports
          locator: Q45662457
          quotation: null
          interpretation_note: null
          source:
            id: s_oP3nDo3PJy5MiFhowymRjU
            source_type: api_record
            title: 维基数据：王淮（Q45662457）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662457
            external_identifier: Q45662457
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:57.665Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_XyYmJyhSgdPRMpQoBHwi5h
        subject_person_id: p_Kc9Jf7R9CePnQgCjQWHCUx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Temqm8d7G2BX5AMhsUSsKe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_GptBCcVPzonv9H65Ao4BgW
          claim_id: c_XyYmJyhSgdPRMpQoBHwi5h
          source_id: s_vyWmh7JBAZcLjsXumeRUjc
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_vyWmh7JBAZcLjsXumeRUjc
            source_type: api_record
            title: 维基数据：王俌（Q45660547）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660547
            external_identifier: Q45660547
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:27.013Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BF%8C_(%E5%94%90%E6%9C%9D)
        - id: cs_ofMmAsHGz2XE1oKERLzJNK
          claim_id: c_XyYmJyhSgdPRMpQoBHwi5h
          source_id: s_nB16U2nhz9j6YJvQSAZzMC
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_nB16U2nhz9j6YJvQSAZzMC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王俌（175453）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175453&o=json
            external_identifier: CBDB:175453
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:27.181Z
            metadata_json: null
        - id: cs_NkwUMJGiqYPfi241uKaRAH
          claim_id: c_XyYmJyhSgdPRMpQoBHwi5h
          source_id: s_oP3nDo3PJy5MiFhowymRjU
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_oP3nDo3PJy5MiFhowymRjU
            source_type: api_record
            title: 维基数据：王淮（Q45662457）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662457
            external_identifier: Q45662457
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:57.665Z
            metadata_json: null
        - id: cs_nh98X9fvCb6fc6DwSMzuZE
          claim_id: c_XyYmJyhSgdPRMpQoBHwi5h
          source_id: s_g91cQTxn2A1Y9WJ81nRhWQ
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_g91cQTxn2A1Y9WJ81nRhWQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王淮（175485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175485&o=json
            external_identifier: CBDB:175485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:57.829Z
            metadata_json: null
      object_person:
        id: p_Kc9Jf7R9CePnQgCjQWHCUx
        status: active
        display_name: 王俌
        merged_into_person_id: null
  children:
    - claim:
        id: c_QxnH2CJP7HPGHn7u8tEVzE
        subject_person_id: p_Temqm8d7G2BX5AMhsUSsKe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e6CDHZCnGQLWRpjW3mGy4W
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_UKTY7ZfN5nxCNXMFJVVBGT
          claim_id: c_QxnH2CJP7HPGHn7u8tEVzE
          source_id: s_g91cQTxn2A1Y9WJ81nRhWQ
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_g91cQTxn2A1Y9WJ81nRhWQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王淮（175485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175485&o=json
            external_identifier: CBDB:175485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:57.829Z
            metadata_json: null
        - id: cs_q49JTfRGr98m4ECsDmwDj7
          claim_id: c_QxnH2CJP7HPGHn7u8tEVzE
          source_id: s_oP3nDo3PJy5MiFhowymRjU
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_oP3nDo3PJy5MiFhowymRjU
            source_type: api_record
            title: 维基数据：王淮（Q45662457）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662457
            external_identifier: Q45662457
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:57.665Z
            metadata_json: null
        - id: cs_SNdDvnk3Sjz1CmwUQLp21F
          claim_id: c_QxnH2CJP7HPGHn7u8tEVzE
          source_id: s_BsdJdSP43GBd4RKLpqYYrP
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_BsdJdSP43GBd4RKLpqYYrP
            source_type: api_record
            title: 维基数据：王子文（Q45662517）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662517
            external_identifier: Q45662517
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:29.640Z
            metadata_json: null
        - id: cs_8S8fuWuME4vQY28VcSZ9Jf
          claim_id: c_QxnH2CJP7HPGHn7u8tEVzE
          source_id: s_GFyLhXmLA1UJps3QnDhBxZ
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_GFyLhXmLA1UJps3QnDhBxZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王子文（175486）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175486&o=json
            external_identifier: CBDB:175486
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:29.796Z
            metadata_json: null
      object_person:
        id: p_e6CDHZCnGQLWRpjW3mGy4W
        status: active
        display_name: 王子文
        merged_into_person_id: null
    - claim:
        id: c_UbhtfB6q8qKdMK9PJC8jpF
        subject_person_id: p_Temqm8d7G2BX5AMhsUSsKe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8Cwxv6G1RvcDFY4NCwixG2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_QjJ1fasJShd8UE9uJjsZ7D
          claim_id: c_UbhtfB6q8qKdMK9PJC8jpF
          source_id: s_g91cQTxn2A1Y9WJ81nRhWQ
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_g91cQTxn2A1Y9WJ81nRhWQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王淮（175485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175485&o=json
            external_identifier: CBDB:175485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:57.829Z
            metadata_json: null
        - id: cs_acKbaRZ24AKL2A6LQqXcMg
          claim_id: c_UbhtfB6q8qKdMK9PJC8jpF
          source_id: s_oP3nDo3PJy5MiFhowymRjU
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_oP3nDo3PJy5MiFhowymRjU
            source_type: api_record
            title: 维基数据：王淮（Q45662457）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662457
            external_identifier: Q45662457
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:57.665Z
            metadata_json: null
        - id: cs_LQ6eMQSSWDYjdULL9cd3L1
          claim_id: c_UbhtfB6q8qKdMK9PJC8jpF
          source_id: s_tTQXfbtY1kaqzVJs9Ffjqb
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_tTQXfbtY1kaqzVJs9Ffjqb
            source_type: api_record
            title: 维基数据：王子西（Q45662575）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662575
            external_identifier: Q45662575
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:29.641Z
            metadata_json: null
        - id: cs_AZfXKK4nJDbfGpNTyie7cX
          claim_id: c_UbhtfB6q8qKdMK9PJC8jpF
          source_id: s_CGF3FWXfCPpiGutCgR3R9z
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_CGF3FWXfCPpiGutCgR3R9z
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王子西（175487）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175487&o=json
            external_identifier: CBDB:175487
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:29.799Z
            metadata_json: null
      object_person:
        id: p_8Cwxv6G1RvcDFY4NCwixG2
        status: active
        display_name: 王子西
        merged_into_person_id: null
    - claim:
        id: c_1K9GwH57n4oNGMFpWF94SZ
        subject_person_id: p_Temqm8d7G2BX5AMhsUSsKe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AM279y1FBWLXDup9iNRGPt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_3McthoYCu7zeHPBDW1397Q
          claim_id: c_1K9GwH57n4oNGMFpWF94SZ
          source_id: s_g91cQTxn2A1Y9WJ81nRhWQ
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_g91cQTxn2A1Y9WJ81nRhWQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王淮（175485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175485&o=json
            external_identifier: CBDB:175485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:57.829Z
            metadata_json: null
        - id: cs_8v4yh2Mxzb9zkVVyFTt9QP
          claim_id: c_1K9GwH57n4oNGMFpWF94SZ
          source_id: s_oP3nDo3PJy5MiFhowymRjU
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_oP3nDo3PJy5MiFhowymRjU
            source_type: api_record
            title: 维基数据：王淮（Q45662457）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662457
            external_identifier: Q45662457
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:57.665Z
            metadata_json: null
        - id: cs_hUGPD1aJtmtJsbnFHUf8ze
          claim_id: c_1K9GwH57n4oNGMFpWF94SZ
          source_id: s_xbXkKm3xYoCRN7njq4TJie
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_xbXkKm3xYoCRN7njq4TJie
            source_type: api_record
            title: 维基数据：王子尚（Q45662635）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662635
            external_identifier: Q45662635
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:29.641Z
            metadata_json: null
        - id: cs_x8fxXbf5W5n8BMNjhWYBwq
          claim_id: c_1K9GwH57n4oNGMFpWF94SZ
          source_id: s_ne8pUP8ifjvRpT4X2jvPqt
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_ne8pUP8ifjvRpT4X2jvPqt
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王子尚（175488）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175488&o=json
            external_identifier: CBDB:175488
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:29.799Z
            metadata_json: null
      object_person:
        id: p_AM279y1FBWLXDup9iNRGPt
        status: active
        display_name: 王子尚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王淮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王淮（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任御史中丞。中国历代人物传记资料库（CBDB）以人物编号 175485 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 783年 | accepted |
| name.primary | 王淮 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Kc9Jf7R9CePnQgCjQWHCUx | 王俌 | accepted |
| children | p_e6CDHZCnGQLWRpjW3mGy4W | 王子文 | accepted |
| children | p_8Cwxv6G1RvcDFY4NCwixG2 | 王子西 | accepted |
| children | p_AM279y1FBWLXDup9iNRGPt | 王子尚 | accepted |

## 外部来源

- [维基数据：王俌（Q45660547）](https://www.wikidata.org/wiki/Q45660547)
- [维基数据：王淮（Q45662457）](https://www.wikidata.org/wiki/Q45662457)
- [维基数据：王子尚（Q45662635）](https://www.wikidata.org/wiki/Q45662635)
- [维基数据：王子文（Q45662517）](https://www.wikidata.org/wiki/Q45662517)
- [维基数据：王子西（Q45662575）](https://www.wikidata.org/wiki/Q45662575)
- [CBDB 中国历代人物传记资料库：王俌（175453）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175453&o=json)
- [CBDB 中国历代人物传记资料库：王淮（175485）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175485&o=json)
- [CBDB 中国历代人物传记资料库：王子尚（175488）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175488&o=json)
- [CBDB 中国历代人物传记资料库：王子文（175486）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175486&o=json)
- [CBDB 中国历代人物传记资料库：王子西（175487）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175487&o=json)
