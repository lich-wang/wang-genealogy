---
schema: wang-person/v1
id: p_FgR9VvAXpxLb9taXRJM7DE
status: active
merged_into: null
display_name: 王隆
cbdb_id: 30883
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BYKg3zAepgHF83jC4g9Z3h
        subject_person_id: p_FgR9VvAXpxLb9taXRJM7DE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王隆，隋人物。籍贯龍門。（中国历代人物传记资料库 CBDB 30883）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_9mK2KJpVqqQ6qGAR87LvX6
          claim_id: c_BYKg3zAepgHF83jC4g9Z3h
          source_id: s_Z1SMjtQ6s9uuwomo9vkqme
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_Z1SMjtQ6s9uuwomo9vkqme
            source_type: api_record
            title: 维基数据：王隆（Q45418703）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418703
            external_identifier: Q45418703
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:57.561Z
            metadata_json: null
        - id: cs_OS-W_-Ndxlm7PC9Z6BozF4
          claim_id: c_BYKg3zAepgHF83jC4g9Z3h
          source_id: s_cVBTHcFW8dh9kfXXkX7AwS
          stance: supports
          locator: CBDB:30883
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_cVBTHcFW8dh9kfXXkX7AwS
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王隆（30883）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30883&o=json
            external_identifier: CBDB:30883
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:09:57.713Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_X8KvENo9nFWyzPGtY41xbL
        subject_person_id: p_FgR9VvAXpxLb9taXRJM7DE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王隆
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PskJWCpzGBtGqPFApS9GSa
          claim_id: c_X8KvENo9nFWyzPGtY41xbL
          source_id: s_Z1SMjtQ6s9uuwomo9vkqme
          stance: supports
          locator: Q45418703
          quotation: null
          interpretation_note: null
          source:
            id: s_Z1SMjtQ6s9uuwomo9vkqme
            source_type: api_record
            title: 维基数据：王隆（Q45418703）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418703
            external_identifier: Q45418703
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:57.561Z
            metadata_json: null
        - id: cs_sHwsk88rjQzTMUWeN2jiyf
          claim_id: c_X8KvENo9nFWyzPGtY41xbL
          source_id: s_cVBTHcFW8dh9kfXXkX7AwS
          stance: supports
          locator: Q45418703
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1xsxQnb11svzucTJyQySx7
        subject_person_id: p_pGM7RMwCzi7kwVnBhRjRdL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FgR9VvAXpxLb9taXRJM7DE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_CFG2mPSMEGtwqUSgGgnF8m
          claim_id: c_1xsxQnb11svzucTJyQySx7
          source_id: s_cVBTHcFW8dh9kfXXkX7AwS
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_cVBTHcFW8dh9kfXXkX7AwS
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王隆（30883）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30883&o=json
            external_identifier: CBDB:30883
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:09:57.713Z
            metadata_json: null
        - id: cs_hgFNoJBo5G71Qtc2Tmf9tm
          claim_id: c_1xsxQnb11svzucTJyQySx7
          source_id: s_Z1SMjtQ6s9uuwomo9vkqme
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Z1SMjtQ6s9uuwomo9vkqme
            source_type: api_record
            title: 维基数据：王隆（Q45418703）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418703
            external_identifier: Q45418703
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:57.561Z
            metadata_json: null
        - id: cs_fZ6t4VV33Eutwg96ujj4JK
          claim_id: c_1xsxQnb11svzucTJyQySx7
          source_id: s_pS2AvoSTHQe1PygJoudYDu
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_pS2AvoSTHQe1PygJoudYDu
            source_type: api_record
            title: 维基数据：王杰（Q45418700）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418700
            external_identifier: Q45418700
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:25.154Z
            metadata_json: null
        - id: cs_Lq9MQhDVEsr4thC2Hozqpn
          claim_id: c_1xsxQnb11svzucTJyQySx7
          source_id: s_2GFRR8sizZhBqPZU9n4H1r
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_2GFRR8sizZhBqPZU9n4H1r
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王傑（30882）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30882&o=json
            external_identifier: CBDB:30882
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:14:25.290Z
            metadata_json: null
      object_person:
        id: p_pGM7RMwCzi7kwVnBhRjRdL
        status: active
        display_name: 王杰
        merged_into_person_id: null
  children:
    - claim:
        id: c_8nk9BhvfhLGMQV4qwUyQUW
        subject_person_id: p_FgR9VvAXpxLb9taXRJM7DE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_g8yjPAazS4duEjdSoPu22v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_FKcRC8c9zQ7shoDfMs8jzx
          claim_id: c_8nk9BhvfhLGMQV4qwUyQUW
          source_id: s_rxH1mb4ysDMZcdEp858Epm
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_rxH1mb4ysDMZcdEp858Epm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王通（11965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=11965&o=json
            external_identifier: CBDB:11965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:48:43.425Z
            metadata_json: null
        - id: cs_xfHeEqhsHgNRzvmKeYHS7k
          claim_id: c_8nk9BhvfhLGMQV4qwUyQUW
          source_id: s_XEyVmsJi464FkLSXdRq3Hb
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_XEyVmsJi464FkLSXdRq3Hb
            source_type: api_record
            title: 维基数据：王通（Q11573223）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573223
            external_identifier: Q11573223
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:43.288Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%80%9A_(%E9%9A%8B%E6%9C%9D)
        - id: cs_dJRzi3R46TL2pFNQA737b2
          claim_id: c_8nk9BhvfhLGMQV4qwUyQUW
          source_id: s_Z1SMjtQ6s9uuwomo9vkqme
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Z1SMjtQ6s9uuwomo9vkqme
            source_type: api_record
            title: 维基数据：王隆（Q45418703）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418703
            external_identifier: Q45418703
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:57.561Z
            metadata_json: null
        - id: cs_JGxYLZ9gMS53NY2eAWXpc4
          claim_id: c_8nk9BhvfhLGMQV4qwUyQUW
          source_id: s_cVBTHcFW8dh9kfXXkX7AwS
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_cVBTHcFW8dh9kfXXkX7AwS
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王隆（30883）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30883&o=json
            external_identifier: CBDB:30883
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:09:57.713Z
            metadata_json: null
      object_person:
        id: p_g8yjPAazS4duEjdSoPu22v
        status: active
        display_name: 王通
        merged_into_person_id: null
    - claim:
        id: c_QCPpcWHke5cSY8ebAa68CE
        subject_person_id: p_FgR9VvAXpxLb9taXRJM7DE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_X3JJsyr7Ks53ZodUM1Wd5k
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_orPG88bfkg1fHaeWvPMWsZ
          claim_id: c_QCPpcWHke5cSY8ebAa68CE
          source_id: s_Z1SMjtQ6s9uuwomo9vkqme
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Z1SMjtQ6s9uuwomo9vkqme
            source_type: api_record
            title: 维基数据：王隆（Q45418703）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418703
            external_identifier: Q45418703
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:57.561Z
            metadata_json: null
        - id: cs_QVNpnZKTVLgWDhWDwNagnG
          claim_id: c_QCPpcWHke5cSY8ebAa68CE
          source_id: s_ovdBSGJYm8G5tD5AW2ppbw
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_ovdBSGJYm8G5tD5AW2ppbw
            source_type: api_record
            title: 维基数据：王绩（Q2899207）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2899207
            external_identifier: Q2899207
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:16.721Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BB%A9
      object_person:
        id: p_X3JJsyr7Ks53ZodUM1Wd5k
        status: active
        display_name: 王绩
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王隆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王隆，隋人物。籍贯龍門。（中国历代人物传记资料库 CBDB 30883） | accepted |
| name.primary | 王隆 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pGM7RMwCzi7kwVnBhRjRdL | 王杰 | accepted |
| children | p_g8yjPAazS4duEjdSoPu22v | 王通 | accepted |
| children | p_X3JJsyr7Ks53ZodUM1Wd5k | 王绩 | accepted |

## 外部来源

- [维基数据：王绩（Q2899207）](https://www.wikidata.org/wiki/Q2899207)
- [维基数据：王杰（Q45418700）](https://www.wikidata.org/wiki/Q45418700)
- [维基数据：王隆（Q45418703）](https://www.wikidata.org/wiki/Q45418703)
- [维基数据：王通（Q11573223）](https://www.wikidata.org/wiki/Q11573223)
- [CBDB 中国历代人物传记资料库：王傑（30882）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30882&o=json)
- [CBDB 中国历代人物传记资料库：王隆（30883）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30883&o=json)
- [CBDB 中国历代人物传记资料库：王通（11965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=11965&o=json)
