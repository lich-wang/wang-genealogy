---
schema: wang-person/v1
id: p_GNtKZTHPd5yPoD89gT8VeP
status: active
merged_into: null
display_name: 王沐
cbdb_id: 175481
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_seRqh73vWBtqeqMA2KDRAC
        subject_person_id: p_GNtKZTHPd5yPoD89gT8VeP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沐（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任御史中丞。中国历代人物传记资料库（CBDB）以人物编号 175481 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_TeUKsKLW6FRMwCYuxcBzjp
          claim_id: c_seRqh73vWBtqeqMA2KDRAC
          source_id: s_9zW2vJE6i5toL1R1XyWZdR
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_9zW2vJE6i5toL1R1XyWZdR
            source_type: api_record
            title: 维基数据：王沐（Q45662222）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662222
            external_identifier: Q45662222
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:55.918Z
            metadata_json: null
        - id: cs_hqNqVtvVatRcWwUfnsPwnz
          claim_id: c_seRqh73vWBtqeqMA2KDRAC
          source_id: s_LB2YGsgdvzBVwKuUQoq186
          stance: supports
          locator: CBDB:175481
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_LB2YGsgdvzBVwKuUQoq186
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王沐（175481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175481&o=json
            external_identifier: CBDB:175481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:56.078Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_GV7waeUBkKJMYCz7GpsvhA
        subject_person_id: p_GNtKZTHPd5yPoD89gT8VeP
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
        - id: cs_pAq3JXc58BAXpPjNM6GiTN
          claim_id: c_GV7waeUBkKJMYCz7GpsvhA
          source_id: s_9zW2vJE6i5toL1R1XyWZdR
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_9zW2vJE6i5toL1R1XyWZdR
            source_type: api_record
            title: 维基数据：王沐（Q45662222）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662222
            external_identifier: Q45662222
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:55.918Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8WaKKB4ocQ9MwTmzoDdwyX
        subject_person_id: p_GNtKZTHPd5yPoD89gT8VeP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沐
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Rghsptp68xHVd7Bpi9hs7f
          claim_id: c_8WaKKB4ocQ9MwTmzoDdwyX
          source_id: s_9zW2vJE6i5toL1R1XyWZdR
          stance: supports
          locator: Q45662222
          quotation: null
          interpretation_note: null
          source:
            id: s_9zW2vJE6i5toL1R1XyWZdR
            source_type: api_record
            title: 维基数据：王沐（Q45662222）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662222
            external_identifier: Q45662222
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:55.918Z
            metadata_json: null
        - id: cs_s1FVWcUAKsqp8Ed9o68ze7
          claim_id: c_8WaKKB4ocQ9MwTmzoDdwyX
          source_id: s_LB2YGsgdvzBVwKuUQoq186
          stance: supports
          locator: Q45662222
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_E56yTj6ByaYdyuBn5G43Hc
        subject_person_id: p_Kc9Jf7R9CePnQgCjQWHCUx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GNtKZTHPd5yPoD89gT8VeP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_LLqk9F9EorWPnYg1aCf2ET
          claim_id: c_E56yTj6ByaYdyuBn5G43Hc
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
        - id: cs_UF3HkVE8hhtvAprtRXHztY
          claim_id: c_E56yTj6ByaYdyuBn5G43Hc
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
        - id: cs_QHYcqNSuZwfftQjoSsNiLM
          claim_id: c_E56yTj6ByaYdyuBn5G43Hc
          source_id: s_9zW2vJE6i5toL1R1XyWZdR
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_9zW2vJE6i5toL1R1XyWZdR
            source_type: api_record
            title: 维基数据：王沐（Q45662222）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662222
            external_identifier: Q45662222
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:55.918Z
            metadata_json: null
        - id: cs_zBTyivEbnnJkpTT1oCVf26
          claim_id: c_E56yTj6ByaYdyuBn5G43Hc
          source_id: s_LB2YGsgdvzBVwKuUQoq186
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_LB2YGsgdvzBVwKuUQoq186
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王沐（175481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175481&o=json
            external_identifier: CBDB:175481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:56.078Z
            metadata_json: null
      object_person:
        id: p_Kc9Jf7R9CePnQgCjQWHCUx
        status: active
        display_name: 王俌
        merged_into_person_id: null
  children:
    - claim:
        id: c_CNPf3q5hdMfNFWFnepCXUG
        subject_person_id: p_GNtKZTHPd5yPoD89gT8VeP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_c38tN16Fc9soQ3nEBvLYcA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_mT8Fha1a84Ew8JuttPYcB2
          claim_id: c_CNPf3q5hdMfNFWFnepCXUG
          source_id: s_LB2YGsgdvzBVwKuUQoq186
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_LB2YGsgdvzBVwKuUQoq186
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王沐（175481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175481&o=json
            external_identifier: CBDB:175481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:56.078Z
            metadata_json: null
        - id: cs_odHE6TsacsNZbJYL2ocZDw
          claim_id: c_CNPf3q5hdMfNFWFnepCXUG
          source_id: s_9zW2vJE6i5toL1R1XyWZdR
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_9zW2vJE6i5toL1R1XyWZdR
            source_type: api_record
            title: 维基数据：王沐（Q45662222）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662222
            external_identifier: Q45662222
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:55.918Z
            metadata_json: null
        - id: cs_7i1eUWJmkjwybWeD1vmQHH
          claim_id: c_CNPf3q5hdMfNFWFnepCXUG
          source_id: s_37Yfsm1uBvdXh1svk6sQN8
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_37Yfsm1uBvdXh1svk6sQN8
            source_type: api_record
            title: 维基数据：王源上（Q45662280）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662280
            external_identifier: Q45662280
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:27.941Z
            metadata_json: null
        - id: cs_7uzhxjQQHesGHLU1CvLjZe
          claim_id: c_CNPf3q5hdMfNFWFnepCXUG
          source_id: s_29GB5GBYM48Hh7Q9PaDMDP
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_29GB5GBYM48Hh7Q9PaDMDP
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源上（175482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175482&o=json
            external_identifier: CBDB:175482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:28.104Z
            metadata_json: null
      object_person:
        id: p_c38tN16Fc9soQ3nEBvLYcA
        status: active
        display_name: 王源上
        merged_into_person_id: null
    - claim:
        id: c_5M41JbXhQQTdb2hmFNH1D6
        subject_person_id: p_GNtKZTHPd5yPoD89gT8VeP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CTrYyLCUmQX23JSxsSQkqy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Ct8pQmZbbh56Gx5crkWNrH
          claim_id: c_5M41JbXhQQTdb2hmFNH1D6
          source_id: s_LB2YGsgdvzBVwKuUQoq186
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_LB2YGsgdvzBVwKuUQoq186
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王沐（175481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175481&o=json
            external_identifier: CBDB:175481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:56.078Z
            metadata_json: null
        - id: cs_jkgK7Rq58KD8DFkKr9eT5Z
          claim_id: c_5M41JbXhQQTdb2hmFNH1D6
          source_id: s_9zW2vJE6i5toL1R1XyWZdR
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_9zW2vJE6i5toL1R1XyWZdR
            source_type: api_record
            title: 维基数据：王沐（Q45662222）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662222
            external_identifier: Q45662222
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:55.918Z
            metadata_json: null
        - id: cs_KkPzgr72Utz5CY2XvWKma5
          claim_id: c_5M41JbXhQQTdb2hmFNH1D6
          source_id: s_GhTugbbsFrTm6ZrvopyYMU
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_GhTugbbsFrTm6ZrvopyYMU
            source_type: api_record
            title: 维基数据：王源长（Q45662338）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662338
            external_identifier: Q45662338
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:27.941Z
            metadata_json: null
        - id: cs_nhQFAXhBKiewP2KsQphGEg
          claim_id: c_5M41JbXhQQTdb2hmFNH1D6
          source_id: s_ox8PZzJQ11qSMo3K5A8L1z
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_ox8PZzJQ11qSMo3K5A8L1z
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源長（175483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175483&o=json
            external_identifier: CBDB:175483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:28.105Z
            metadata_json: null
      object_person:
        id: p_CTrYyLCUmQX23JSxsSQkqy
        status: active
        display_name: 王源长
        merged_into_person_id: null
    - claim:
        id: c_LFxpivL6DT187WxgoNKtWz
        subject_person_id: p_GNtKZTHPd5yPoD89gT8VeP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C6An3ARpFwsdjYzEcQRB7Z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_A4BfcA9e1hF1aa55yfY1oR
          claim_id: c_LFxpivL6DT187WxgoNKtWz
          source_id: s_LB2YGsgdvzBVwKuUQoq186
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_LB2YGsgdvzBVwKuUQoq186
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王沐（175481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175481&o=json
            external_identifier: CBDB:175481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:56.078Z
            metadata_json: null
        - id: cs_oF844HEyKKNNK7WAocR72q
          claim_id: c_LFxpivL6DT187WxgoNKtWz
          source_id: s_9zW2vJE6i5toL1R1XyWZdR
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_9zW2vJE6i5toL1R1XyWZdR
            source_type: api_record
            title: 维基数据：王沐（Q45662222）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662222
            external_identifier: Q45662222
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:55.918Z
            metadata_json: null
        - id: cs_Um8jHXCJZGFHKn2Gy7yDFR
          claim_id: c_LFxpivL6DT187WxgoNKtWz
          source_id: s_VCJSiaa7x2uwygWjUsTT6P
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_VCJSiaa7x2uwygWjUsTT6P
            source_type: api_record
            title: 维基数据：王源通（Q45662399）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662399
            external_identifier: Q45662399
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:27.941Z
            metadata_json: null
        - id: cs_skCXDQwbxE84u5SizdWaGi
          claim_id: c_LFxpivL6DT187WxgoNKtWz
          source_id: s_oAsLBQEK4FFwKkSL6NZhhK
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_oAsLBQEK4FFwKkSL6NZhhK
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源通（175484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175484&o=json
            external_identifier: CBDB:175484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:28.099Z
            metadata_json: null
      object_person:
        id: p_C6An3ARpFwsdjYzEcQRB7Z
        status: active
        display_name: 王源通
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王沐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王沐（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任御史中丞。中国历代人物传记资料库（CBDB）以人物编号 175481 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 783年 | accepted |
| name.primary | 王沐 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Kc9Jf7R9CePnQgCjQWHCUx | 王俌 | accepted |
| children | p_c38tN16Fc9soQ3nEBvLYcA | 王源上 | accepted |
| children | p_CTrYyLCUmQX23JSxsSQkqy | 王源长 | accepted |
| children | p_C6An3ARpFwsdjYzEcQRB7Z | 王源通 | accepted |

## 外部来源

- [维基数据：王俌（Q45660547）](https://www.wikidata.org/wiki/Q45660547)
- [维基数据：王沐（Q45662222）](https://www.wikidata.org/wiki/Q45662222)
- [维基数据：王源上（Q45662280）](https://www.wikidata.org/wiki/Q45662280)
- [维基数据：王源通（Q45662399）](https://www.wikidata.org/wiki/Q45662399)
- [维基数据：王源长（Q45662338）](https://www.wikidata.org/wiki/Q45662338)
- [CBDB 中国历代人物传记资料库：王俌（175453）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175453&o=json)
- [CBDB 中国历代人物传记资料库：王沐（175481）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175481&o=json)
- [CBDB 中国历代人物传记资料库：王源上（175482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175482&o=json)
- [CBDB 中国历代人物传记资料库：王源通（175484）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175484&o=json)
- [CBDB 中国历代人物传记资料库：王源長（175483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175483&o=json)
