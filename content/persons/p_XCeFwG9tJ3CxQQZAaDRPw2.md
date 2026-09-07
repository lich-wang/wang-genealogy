---
schema: wang-person/v1
id: p_XCeFwG9tJ3CxQQZAaDRPw2
status: active
merged_into: null
display_name: 王鼒
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PqX5xDPyXgcvwcrSwnBm4i
        subject_person_id: p_XCeFwG9tJ3CxQQZAaDRPw2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼒，南北朝人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 154143 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_UJp8w9JkoqGN2D2MX9rdBm
          claim_id: c_PqX5xDPyXgcvwcrSwnBm4i
          source_id: s_H38AfivXbhKVQWcQyxqL5W
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_H38AfivXbhKVQWcQyxqL5W
            source_type: api_record
            title: 维基数据：王鼒（Q45566627）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45566627
            external_identifier: Q45566627
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:59:56.263Z
            metadata_json: null
        - id: cs_dfxAHmXQetrNJaQO-bUQ8F
          claim_id: c_PqX5xDPyXgcvwcrSwnBm4i
          source_id: s_Wac8zdUyM6Acgp31ubAQga
          stance: supports
          locator: CBDB:154143
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Wac8zdUyM6Acgp31ubAQga
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鼒（154143）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154143&o=json
            external_identifier: CBDB:154143
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:59:56.601Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z9UXAoaCpg4d9MX8FC2Mct
        subject_person_id: p_XCeFwG9tJ3CxQQZAaDRPw2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼒
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WbiN3daLbeRBPEw6NpLgEN
          claim_id: c_Z9UXAoaCpg4d9MX8FC2Mct
          source_id: s_Wac8zdUyM6Acgp31ubAQga
          stance: supports
          locator: Q45566627
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_jiYfLuD87DsmmpFTLseDya
          claim_id: c_Z9UXAoaCpg4d9MX8FC2Mct
          source_id: s_H38AfivXbhKVQWcQyxqL5W
          stance: supports
          locator: Q45566627
          quotation: null
          interpretation_note: null
          source:
            id: s_H38AfivXbhKVQWcQyxqL5W
            source_type: api_record
            title: 维基数据：王鼒（Q45566627）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45566627
            external_identifier: Q45566627
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:59:56.263Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TCp87FxBxYEt6rqkVozKHj
        subject_person_id: p_rVSU7SGR7ggL3Y16sLKSe2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XCeFwG9tJ3CxQQZAaDRPw2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_1tLPAF13zWhV1Z8NPVe1wj
          claim_id: c_TCp87FxBxYEt6rqkVozKHj
          source_id: s_uYCbjkL9HT7KCAR6K4SZ9c
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_uYCbjkL9HT7KCAR6K4SZ9c
            source_type: api_record
            title: 维基数据：王褒（Q10416850）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10416850
            external_identifier: Q10416850
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:39:53.590Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A4%92_(%E5%8D%97%E5%8C%97%E6%9C%9D)
        - id: cs_jXMv5tKaL6tPkLxhHCMgMK
          claim_id: c_TCp87FxBxYEt6rqkVozKHj
          source_id: s_hiHG6cvQPHs7S7JeSAtB6D
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_hiHG6cvQPHs7S7JeSAtB6D
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王裒（157867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157867&o=json
            external_identifier: CBDB:157867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:39:53.727Z
            metadata_json: null
        - id: cs_pEm6U7Xd62KjGzW4pCQsok
          claim_id: c_TCp87FxBxYEt6rqkVozKHj
          source_id: s_H38AfivXbhKVQWcQyxqL5W
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_H38AfivXbhKVQWcQyxqL5W
            source_type: api_record
            title: 维基数据：王鼒（Q45566627）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45566627
            external_identifier: Q45566627
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:59:56.263Z
            metadata_json: null
        - id: cs_o74Non54BPvMbmQXMxkFAf
          claim_id: c_TCp87FxBxYEt6rqkVozKHj
          source_id: s_Wac8zdUyM6Acgp31ubAQga
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_Wac8zdUyM6Acgp31ubAQga
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鼒（154143）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154143&o=json
            external_identifier: CBDB:154143
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:59:56.601Z
            metadata_json: null
        - id: cs_2dPY3z6Fo5XHbaY31nhRY2
          claim_id: c_TCp87FxBxYEt6rqkVozKHj
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王褒 → 王鼒
          interpretation_note: null
          source:
            id: s_xEBYVW3xjFzLnp9P7pHZ2L
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:02:22.297Z
            metadata_json: null
        - id: cs_8P33pQ7hzxZmfgoYHKN52C
          claim_id: c_TCp87FxBxYEt6rqkVozKHj
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（生）
          quotation: 生鼒，字玉鉉，隋安都通守、石泉明威侯。
          interpretation_note: null
          source:
            id: s_XmK4uXKaoBAKcwvzzk8Dzr
            source_type: book
            title: 中文维基文库：新唐書/卷072中
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T10:12:55.026Z
            metadata_json: null
      object_person:
        id: p_rVSU7SGR7ggL3Y16sLKSe2
        status: active
        display_name: 王褒
        merged_into_person_id: null
  children:
    - claim:
        id: c_uLXD7FtSK7Xf4JGEzHxwrJ
        subject_person_id: p_XCeFwG9tJ3CxQQZAaDRPw2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ujGjqexGpFHSeeL644vaA9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_HUK839zvkEPmBFi8BB5bm4
          claim_id: c_uLXD7FtSK7Xf4JGEzHxwrJ
          source_id: s_Wac8zdUyM6Acgp31ubAQga
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_Wac8zdUyM6Acgp31ubAQga
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鼒（154143）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154143&o=json
            external_identifier: CBDB:154143
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:59:56.601Z
            metadata_json: null
        - id: cs_UzArEbvL7jbAwMZ4PG5PM4
          claim_id: c_uLXD7FtSK7Xf4JGEzHxwrJ
          source_id: s_H38AfivXbhKVQWcQyxqL5W
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_H38AfivXbhKVQWcQyxqL5W
            source_type: api_record
            title: 维基数据：王鼒（Q45566627）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45566627
            external_identifier: Q45566627
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:59:56.263Z
            metadata_json: null
        - id: cs_Vu7K9pGv5JVPBtms5Qsv8W
          claim_id: c_uLXD7FtSK7Xf4JGEzHxwrJ
          source_id: s_MuAKHk7C2oEADSy4mxkVHM
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_MuAKHk7C2oEADSy4mxkVHM
            source_type: api_record
            title: 维基数据：王弘直（Q45656974）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656974
            external_identifier: Q45656974
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:03:04.576Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BC%98%E7%9B%B4
        - id: cs_E4HsN9vdE1KukEmwAu1TwC
          claim_id: c_uLXD7FtSK7Xf4JGEzHxwrJ
          source_id: s_Nwn5LEBCq2tAp9BpBtAtnK
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_Nwn5LEBCq2tAp9BpBtAtnK
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王弘直（175393）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175393&o=json
            external_identifier: CBDB:175393
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:03:04.728Z
            metadata_json: null
      object_person:
        id: p_ujGjqexGpFHSeeL644vaA9
        status: active
        display_name: 王弘直
        merged_into_person_id: null
    - claim:
        id: c_mKcB8aKdjrS8LK41hKUGZQ
        subject_person_id: p_XCeFwG9tJ3CxQQZAaDRPw2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ghms3xa2yCWnMb7o2tgKE4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_EQK83aTb8zKp4m7XcjJaic
          claim_id: c_mKcB8aKdjrS8LK41hKUGZQ
          source_id: s_Wac8zdUyM6Acgp31ubAQga
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_Wac8zdUyM6Acgp31ubAQga
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鼒（154143）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154143&o=json
            external_identifier: CBDB:154143
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:59:56.601Z
            metadata_json: null
        - id: cs_cteGPXE7HbSRkHXiwjKNcu
          claim_id: c_mKcB8aKdjrS8LK41hKUGZQ
          source_id: s_H38AfivXbhKVQWcQyxqL5W
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_H38AfivXbhKVQWcQyxqL5W
            source_type: api_record
            title: 维基数据：王鼒（Q45566627）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45566627
            external_identifier: Q45566627
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:59:56.263Z
            metadata_json: null
        - id: cs_L1DjfNZegyTxzFSkViFvij
          claim_id: c_mKcB8aKdjrS8LK41hKUGZQ
          source_id: s_j6jdwhiGJQo39kTF1QVLj8
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_j6jdwhiGJQo39kTF1QVLj8
            source_type: api_record
            title: 维基数据：王弘让（Q45623145）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45623145
            external_identifier: Q45623145
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:03:06.357Z
            metadata_json: null
        - id: cs_xTpqaQsZ9Fq5eKpq8cFGoG
          claim_id: c_mKcB8aKdjrS8LK41hKUGZQ
          source_id: s_HKQLtTg4KcjMFuMBCVru2Q
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_HKQLtTg4KcjMFuMBCVru2Q
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王弘讓（154136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154136&o=json
            external_identifier: CBDB:154136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:03:06.507Z
            metadata_json: null
      object_person:
        id: p_Ghms3xa2yCWnMb7o2tgKE4
        status: active
        display_name: 王弘让
        merged_into_person_id: null
    - claim:
        id: c_ueD9FDq6H2ihAUtDMpMjQC
        subject_person_id: p_XCeFwG9tJ3CxQQZAaDRPw2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pRjGYWdJbBfU6XeVQFfhre
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_LUfedzEYckZCKA3NDPrHQD
          claim_id: c_ueD9FDq6H2ihAUtDMpMjQC
          source_id: s_H38AfivXbhKVQWcQyxqL5W
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_H38AfivXbhKVQWcQyxqL5W
            source_type: api_record
            title: 维基数据：王鼒（Q45566627）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45566627
            external_identifier: Q45566627
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:59:56.263Z
            metadata_json: null
        - id: cs_XeUhb9QZ3DH7N8EPnqo8NN
          claim_id: c_ueD9FDq6H2ihAUtDMpMjQC
          source_id: s_Wac8zdUyM6Acgp31ubAQga
          stance: supports
          locator: 亲属关系：女兒
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌彙編續集
          source:
            id: s_Wac8zdUyM6Acgp31ubAQga
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鼒（154143）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154143&o=json
            external_identifier: CBDB:154143
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:59:56.601Z
            metadata_json: null
        - id: cs_jPkgJ5MVwM8dcPd1LiBEwM
          claim_id: c_ueD9FDq6H2ihAUtDMpMjQC
          source_id: s_r7H32GbHUPLBw16hbysxBV
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_r7H32GbHUPLBw16hbysxBV
            source_type: api_record
            title: 维基数据：王氏（Q65803421）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65803421
            external_identifier: Q65803421
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:03:06.357Z
            metadata_json: null
        - id: cs_QJ7nm9zDfRpw33ndV8U3qz
          claim_id: c_ueD9FDq6H2ihAUtDMpMjQC
          source_id: s_ZeMytsihpgExDAqJChsrfe
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌彙編續集
          source:
            id: s_ZeMytsihpgExDAqJChsrfe
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王氏（142553）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142553&o=json
            external_identifier: CBDB:142553
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:03:06.514Z
            metadata_json: null
      object_person:
        id: p_pRjGYWdJbBfU6XeVQFfhre
        status: active
        display_name: 王氏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鼒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鼒，南北朝人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 154143 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王鼒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rVSU7SGR7ggL3Y16sLKSe2 | 王褒 | accepted |
| children | p_ujGjqexGpFHSeeL644vaA9 | 王弘直 | accepted |
| children | p_Ghms3xa2yCWnMb7o2tgKE4 | 王弘让 | accepted |
| children | p_pRjGYWdJbBfU6XeVQFfhre | 王氏 | accepted |

## 外部来源

- [维基数据：王褒（Q10416850）](https://www.wikidata.org/wiki/Q10416850)
- [维基数据：王弘让（Q45623145）](https://www.wikidata.org/wiki/Q45623145)
- [维基数据：王弘直（Q45656974）](https://www.wikidata.org/wiki/Q45656974)
- [维基数据：王氏（Q65803421）](https://www.wikidata.org/wiki/Q65803421)
- [维基数据：王鼒（Q45566627）](https://www.wikidata.org/wiki/Q45566627)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
- [CBDB 中国历代人物传记资料库：王弘讓（154136）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154136&o=json)
- [CBDB 中国历代人物传记资料库：王弘直（175393）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175393&o=json)
- [CBDB 中国历代人物传记资料库：王裒（157867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157867&o=json)
- [CBDB 中国历代人物传记资料库：王氏（142553）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142553&o=json)
- [CBDB 中国历代人物传记资料库：王鼒（154143）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154143&o=json)
