---
schema: wang-person/v1
id: p_zKiyG8Et428Qshx93cGmXx
status: active
merged_into: null
display_name: 王暟
cbdb_id: 175601
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Y7Auxy57NLP3RHsLNskFeB
        subject_person_id: p_zKiyG8Et428Qshx93cGmXx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暟（卒于709年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175601 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_NjJDe12KD4oQwEsD7fMBA3
          claim_id: c_Y7Auxy57NLP3RHsLNskFeB
          source_id: s_LzjmjT3XXrsixH4sLE4GU9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_LzjmjT3XXrsixH4sLE4GU9
            source_type: api_record
            title: 维基数据：王暟（Q45668621）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668621
            external_identifier: Q45668621
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:37.839Z
            metadata_json: null
        - id: cs_pR194Zdqvk3TkqeU4-sC-U
          claim_id: c_Y7Auxy57NLP3RHsLNskFeB
          source_id: s_3hPKehA9c7h47aCnSDEotF
          stance: supports
          locator: CBDB:175601
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_3hPKehA9c7h47aCnSDEotF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王暟（175601）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175601&o=json
            external_identifier: CBDB:175601
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:37.992Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_sbJ26gs9ySA6YKijT9Z5mX
        subject_person_id: p_zKiyG8Et428Qshx93cGmXx
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
        - id: cs_627YqcdMZ7evyhCSBVZjv5
          claim_id: c_sbJ26gs9ySA6YKijT9Z5mX
          source_id: s_LzjmjT3XXrsixH4sLE4GU9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_LzjmjT3XXrsixH4sLE4GU9
            source_type: api_record
            title: 维基数据：王暟（Q45668621）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668621
            external_identifier: Q45668621
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:37.839Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7MUHPYQp3euaFJEhTP8M5g
        subject_person_id: p_zKiyG8Et428Qshx93cGmXx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暟
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8p9zGWeq52JrtvnGWohmsA
          claim_id: c_7MUHPYQp3euaFJEhTP8M5g
          source_id: s_3hPKehA9c7h47aCnSDEotF
          stance: supports
          locator: Q45668621
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_NuemfgKCTB1euf93bsEVDq
          claim_id: c_7MUHPYQp3euaFJEhTP8M5g
          source_id: s_LzjmjT3XXrsixH4sLE4GU9
          stance: supports
          locator: Q45668621
          quotation: null
          interpretation_note: null
          source:
            id: s_LzjmjT3XXrsixH4sLE4GU9
            source_type: api_record
            title: 维基数据：王暟（Q45668621）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668621
            external_identifier: Q45668621
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:37.839Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BbyWjYFG33jUCajezrkrmg
        subject_person_id: p_ZSBMnefxQNX4zwGDPTrYX5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zKiyG8Et428Qshx93cGmXx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9t5H3w1mHK3c5JkSArdMxt
          claim_id: c_BbyWjYFG33jUCajezrkrmg
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
        - id: cs_FPW3rr2S4Lch1v8Ak8iYCC
          claim_id: c_BbyWjYFG33jUCajezrkrmg
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
        - id: cs_HEo39nFB4nz2WZi794tqj1
          claim_id: c_BbyWjYFG33jUCajezrkrmg
          source_id: s_LzjmjT3XXrsixH4sLE4GU9
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_LzjmjT3XXrsixH4sLE4GU9
            source_type: api_record
            title: 维基数据：王暟（Q45668621）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668621
            external_identifier: Q45668621
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:37.839Z
            metadata_json: null
        - id: cs_88mu5zhfU5Cc4x8ggf2S4k
          claim_id: c_BbyWjYFG33jUCajezrkrmg
          source_id: s_3hPKehA9c7h47aCnSDEotF
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_3hPKehA9c7h47aCnSDEotF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王暟（175601）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175601&o=json
            external_identifier: CBDB:175601
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:37.992Z
            metadata_json: null
      object_person:
        id: p_ZSBMnefxQNX4zwGDPTrYX5
        status: active
        display_name: 王方庆
        merged_into_person_id: null
  children:
    - claim:
        id: c_3S5E6q9Ey4xmJrevY62xW4
        subject_person_id: p_zKiyG8Et428Qshx93cGmXx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KpqPC2j15z76Q3HFtSem9K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_kFixT3bwBpvCLg88hjEzRu
          claim_id: c_3S5E6q9Ey4xmJrevY62xW4
          source_id: s_3hPKehA9c7h47aCnSDEotF
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_3hPKehA9c7h47aCnSDEotF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王暟（175601）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175601&o=json
            external_identifier: CBDB:175601
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:37.992Z
            metadata_json: null
        - id: cs_vD85STKZYfdJJKKDsCGq5X
          claim_id: c_3S5E6q9Ey4xmJrevY62xW4
          source_id: s_LzjmjT3XXrsixH4sLE4GU9
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_LzjmjT3XXrsixH4sLE4GU9
            source_type: api_record
            title: 维基数据：王暟（Q45668621）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668621
            external_identifier: Q45668621
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:37.839Z
            metadata_json: null
        - id: cs_A8ygRSUX8SdVCLe6MGGVrP
          claim_id: c_3S5E6q9Ey4xmJrevY62xW4
          source_id: s_7kXDCqpnt6ewqp27mbqWqD
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_7kXDCqpnt6ewqp27mbqWqD
            source_type: api_record
            title: 维基数据：王俶（Q45668672）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668672
            external_identifier: Q45668672
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:40.184Z
            metadata_json: null
        - id: cs_Ff3LEjgFT3LHZgLm1uw3aG
          claim_id: c_3S5E6q9Ey4xmJrevY62xW4
          source_id: s_u5UHwb2wZ2uPypoCMmhCiJ
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_u5UHwb2wZ2uPypoCMmhCiJ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王俶（175602）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175602&o=json
            external_identifier: CBDB:175602
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:40.349Z
            metadata_json: null
      object_person:
        id: p_KpqPC2j15z76Q3HFtSem9K
        status: active
        display_name: 王俶
        merged_into_person_id: null
    - claim:
        id: c_KNBnv6aH6Fxs1wxN3CpasD
        subject_person_id: p_zKiyG8Et428Qshx93cGmXx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6J5FgaE6YJNKbrrXMUiTZ6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_LQHiQ2ZL5C96DLPh8VLP6H
          claim_id: c_KNBnv6aH6Fxs1wxN3CpasD
          source_id: s_LzjmjT3XXrsixH4sLE4GU9
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_LzjmjT3XXrsixH4sLE4GU9
            source_type: api_record
            title: 维基数据：王暟（Q45668621）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668621
            external_identifier: Q45668621
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:37.839Z
            metadata_json: null
        - id: cs_Qh4X39U1D7DtuenJDGJAzP
          claim_id: c_KNBnv6aH6Fxs1wxN3CpasD
          source_id: s_3hPKehA9c7h47aCnSDEotF
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_3hPKehA9c7h47aCnSDEotF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王暟（175601）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175601&o=json
            external_identifier: CBDB:175601
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:37.992Z
            metadata_json: null
        - id: cs_FDWS1UaGZe4kbxwf4grrHy
          claim_id: c_KNBnv6aH6Fxs1wxN3CpasD
          source_id: s_fd1gQUjdf7KvE1BPLrqP9P
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_fd1gQUjdf7KvE1BPLrqP9P
            source_type: api_record
            title: 维基数据：王杰（Q45668821）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668821
            external_identifier: Q45668821
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:40.184Z
            metadata_json: null
        - id: cs_M4x8KfZfhpSimTHtbpi8So
          claim_id: c_KNBnv6aH6Fxs1wxN3CpasD
          source_id: s_Z5WQrJH3uBN8epNyoJJ5k1
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_Z5WQrJH3uBN8epNyoJJ5k1
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王傑（175605）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175605&o=json
            external_identifier: CBDB:175605
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:40.348Z
            metadata_json: null
      object_person:
        id: p_6J5FgaE6YJNKbrrXMUiTZ6
        status: active
        display_name: 王杰
        merged_into_person_id: null
    - claim:
        id: c_TYAfPSqrEShsWCknNuLLY9
        subject_person_id: p_zKiyG8Et428Qshx93cGmXx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pSBMj38n59vtLbkzXg38QC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_57j4rGhQVdQr4pRtytLyiz
          claim_id: c_TYAfPSqrEShsWCknNuLLY9
          source_id: s_LzjmjT3XXrsixH4sLE4GU9
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_LzjmjT3XXrsixH4sLE4GU9
            source_type: api_record
            title: 维基数据：王暟（Q45668621）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668621
            external_identifier: Q45668621
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:37.839Z
            metadata_json: null
        - id: cs_oAmvQ38XyHJuhA5mDCrDZ8
          claim_id: c_TYAfPSqrEShsWCknNuLLY9
          source_id: s_3hPKehA9c7h47aCnSDEotF
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_3hPKehA9c7h47aCnSDEotF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王暟（175601）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175601&o=json
            external_identifier: CBDB:175601
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:37.992Z
            metadata_json: null
        - id: cs_YLvqKSLq4ULKnqeHJ1o5fb
          claim_id: c_TYAfPSqrEShsWCknNuLLY9
          source_id: s_pbGMgAhEoF3Uqim1SYxEHr
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_pbGMgAhEoF3Uqim1SYxEHr
            source_type: api_record
            title: 维基数据：王仪（Q45669071）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669071
            external_identifier: Q45669071
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:40.184Z
            metadata_json: null
        - id: cs_gv6Me2cHCSA8rLLwBrvft8
          claim_id: c_TYAfPSqrEShsWCknNuLLY9
          source_id: s_HUS35mPqiHq1CT8qL5BQDW
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_HUS35mPqiHq1CT8qL5BQDW
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王儀（175610）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175610&o=json
            external_identifier: CBDB:175610
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:40.333Z
            metadata_json: null
      object_person:
        id: p_pSBMj38n59vtLbkzXg38QC
        status: active
        display_name: 王仪
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王暟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王暟（卒于709年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175601 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 709年 | accepted |
| name.primary | 王暟 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZSBMnefxQNX4zwGDPTrYX5 | 王方庆 | accepted |
| children | p_KpqPC2j15z76Q3HFtSem9K | 王俶 | accepted |
| children | p_6J5FgaE6YJNKbrrXMUiTZ6 | 王杰 | accepted |
| children | p_pSBMj38n59vtLbkzXg38QC | 王仪 | accepted |

## 外部来源

- [维基数据：王俶（Q45668672）](https://www.wikidata.org/wiki/Q45668672)
- [维基数据：王方庆（Q7478164）](https://www.wikidata.org/wiki/Q7478164)
- [维基数据：王杰（Q45668821）](https://www.wikidata.org/wiki/Q45668821)
- [维基数据：王暟（Q45668621）](https://www.wikidata.org/wiki/Q45668621)
- [维基数据：王仪（Q45669071）](https://www.wikidata.org/wiki/Q45669071)
- [CBDB 中国历代人物传记资料库：王綝（175451）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175451&o=json)
- [CBDB 中国历代人物传记资料库：王俶（175602）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175602&o=json)
- [CBDB 中国历代人物传记资料库：王傑（175605）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175605&o=json)
- [CBDB 中国历代人物传记资料库：王暟（175601）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175601&o=json)
- [CBDB 中国历代人物传记资料库：王儀（175610）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175610&o=json)
