---
schema: wang-person/v1
id: p_G6A9Mv1GnTEMMvApxP4pWa
status: active
merged_into: null
display_name: 王融
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e6DhnrsMB6PUTV8hkSNp5B
        subject_person_id: p_G6A9Mv1GnTEMMvApxP4pWa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王融，史料所见人物。本项目依据《維基數據：王融》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_YMSAupL5pQEi0Vl8-LMoeg
          claim_id: c_e6DhnrsMB6PUTV8hkSNp5B
          source_id: s_hKoGvmAvsyR2xVzQX9fBWX
          stance: supports
          locator: Q22814786
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_hKoGvmAvsyR2xVzQX9fBWX
            source_type: api_record
            title: 維基數據：王融（Q22814786）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814786
            external_identifier: Q22814786
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:33.786Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_jqaWxCpt9K6esrQq9Ka9y8
        subject_person_id: p_G6A9Mv1GnTEMMvApxP4pWa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王融
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2yQUBTs1XRE1SHruGiEvfe
          claim_id: c_jqaWxCpt9K6esrQq9Ka9y8
          source_id: s_hKoGvmAvsyR2xVzQX9fBWX
          stance: supports
          locator: Q22814786
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yiV1aK9dgL4ne7rgZoVc5W
        subject_person_id: p_xf9mHYCEP9VyeEbrAsuExM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G6A9Mv1GnTEMMvApxP4pWa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_BcCrE3YaDVkHAQGs3jNrVP
          claim_id: c_yiV1aK9dgL4ne7rgZoVc5W
          source_id: s_usi9A3QdLgsHXzkSBTdf9P
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_usi9A3QdLgsHXzkSBTdf9P
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王融（25784）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25784&o=json
            external_identifier: CBDB:25784
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:51:33.735Z
            metadata_json: null
        - id: cs_i86fBZgXGSsXoNiFUVEyXv
          claim_id: c_yiV1aK9dgL4ne7rgZoVc5W
          source_id: s_hKoGvmAvsyR2xVzQX9fBWX
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_hKoGvmAvsyR2xVzQX9fBWX
            source_type: api_record
            title: 維基數據：王融（Q22814786）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814786
            external_identifier: Q22814786
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:33.786Z
            metadata_json: null
        - id: cs_GoWj3RETjKSkXKuuuSB2CD
          claim_id: c_yiV1aK9dgL4ne7rgZoVc5W
          source_id: s_E62U81cbJT7dBHVFDDwfqd
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_E62U81cbJT7dBHVFDDwfqd
            source_type: api_record
            title: 维基数据：王仁（Q22814785）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814785
            external_identifier: Q22814785
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:59.387Z
            metadata_json: null
        - id: cs_wDHbkXoqGQN1j9WxthqPsA
          claim_id: c_yiV1aK9dgL4ne7rgZoVc5W
          source_id: s_DC4LPUC297szmUsZqp59Mq
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_DC4LPUC297szmUsZqp59Mq
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王仁（25783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25783&o=json
            external_identifier: CBDB:25783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:59.525Z
            metadata_json: null
      object_person:
        id: p_xf9mHYCEP9VyeEbrAsuExM
        status: active
        display_name: 王仁
        merged_into_person_id: null
  children:
    - claim:
        id: c_62bbE3RkZw8vaBBzTx2tCc
        subject_person_id: p_G6A9Mv1GnTEMMvApxP4pWa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Xategg2TUsqjtsJGVyycV2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Wgj8j5gYoNxMH5ypDdqPtJ
          claim_id: c_62bbE3RkZw8vaBBzTx2tCc
          source_id: s_aE4danWB5J8ku3rRi7jSVQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_aE4danWB5J8ku3rRi7jSVQ
            source_type: website
            title: 中文维基百科：王祥
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/王祥
            external_identifier: Q710053
            license_code: CC-BY-SA-4.0
            accessed_at: null
            metadata_json: null
        - id: cs_PMfyCZxi98iWWJQJrpHHw5
          claim_id: c_62bbE3RkZw8vaBBzTx2tCc
          source_id: s_xJjGWjM3eAPuzx3FStgwtt
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_xJjGWjM3eAPuzx3FStgwtt
            source_type: api_record
            title: 維基數據：王祥（Q710053）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q710053
            external_identifier: Q710053
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:14:55.576Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A5%A5
        - id: cs_iT1H1nz3c8ySVCnmqDp9K1
          claim_id: c_62bbE3RkZw8vaBBzTx2tCc
          source_id: s_hKoGvmAvsyR2xVzQX9fBWX
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_hKoGvmAvsyR2xVzQX9fBWX
            source_type: api_record
            title: 維基數據：王融（Q22814786）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814786
            external_identifier: Q22814786
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:33.786Z
            metadata_json: null
      object_person:
        id: p_Xategg2TUsqjtsJGVyycV2
        status: active
        display_name: 王祥
        merged_into_person_id: null
    - claim:
        id: c_3PDpLEAoUdfo6qLGQSgwxj
        subject_person_id: p_G6A9Mv1GnTEMMvApxP4pWa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FLFcPPEXByru3j5c6vxzPG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_h3ujHHco7zi7S8tifcwKbq
          claim_id: c_3PDpLEAoUdfo6qLGQSgwxj
          source_id: s_usi9A3QdLgsHXzkSBTdf9P
          stance: supports
          locator: 亲属关系：次子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_usi9A3QdLgsHXzkSBTdf9P
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王融（25784）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25784&o=json
            external_identifier: CBDB:25784
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:51:33.735Z
            metadata_json: null
        - id: cs_i2Ny23WgB3CCe9Qr8NxQWm
          claim_id: c_3PDpLEAoUdfo6qLGQSgwxj
          source_id: s_hKoGvmAvsyR2xVzQX9fBWX
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_hKoGvmAvsyR2xVzQX9fBWX
            source_type: api_record
            title: 維基數據：王融（Q22814786）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814786
            external_identifier: Q22814786
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:33.786Z
            metadata_json: null
        - id: cs_fy9J1Pj8ZGL6LBs5XVikTd
          claim_id: c_3PDpLEAoUdfo6qLGQSgwxj
          source_id: s_fsjtxzP2W1VESx6nADFr1c
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_fsjtxzP2W1VESx6nADFr1c
            source_type: api_record
            title: 维基数据：王览（Q15907839）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15907839
            external_identifier: Q15907839
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:48.059Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A6%BD
        - id: cs_2q3MzkrCxcqdZxRmAmuUYP
          claim_id: c_3PDpLEAoUdfo6qLGQSgwxj
          source_id: s_swnKf3JBpuyif9tNQ2HSSs
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_swnKf3JBpuyif9tNQ2HSSs
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王覽（25786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25786&o=json
            external_identifier: CBDB:25786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:48:48.196Z
            metadata_json: null
        - id: cs_8H5X2Df29c5sNDKGp5KGq7
          claim_id: c_3PDpLEAoUdfo6qLGQSgwxj
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 二子：祥、覽。
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
        id: p_FLFcPPEXByru3j5c6vxzPG
        status: active
        display_name: 王览
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王融

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王融，史料所见人物。本项目依据《維基數據：王融》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王融 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xf9mHYCEP9VyeEbrAsuExM | 王仁 | accepted |
| children | p_Xategg2TUsqjtsJGVyycV2 | 王祥 | accepted |
| children | p_FLFcPPEXByru3j5c6vxzPG | 王览 | accepted |

## 外部来源

- [维基数据：王览（Q15907839）](https://www.wikidata.org/wiki/Q15907839)
- [维基数据：王仁（Q22814785）](https://www.wikidata.org/wiki/Q22814785)
- [維基數據：王融（Q22814786）](https://www.wikidata.org/wiki/Q22814786)
- [維基數據：王祥（Q710053）](https://www.wikidata.org/wiki/Q710053)
- [中文维基百科：王祥](https://zh.wikipedia.org/wiki/王祥)
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
- [CBDB 中国历代人物传记资料库：王覽（25786）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25786&o=json)
- [CBDB 中国历代人物传记资料库：王仁（25783）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25783&o=json)
- [CBDB 中国历代人物传记资料库：王融（25784）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25784&o=json)
