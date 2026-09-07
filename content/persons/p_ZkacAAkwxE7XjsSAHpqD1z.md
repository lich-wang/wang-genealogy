---
schema: wang-person/v1
id: p_ZkacAAkwxE7XjsSAHpqD1z
status: active
merged_into: null
display_name: 王奉𬤇
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_czVZPGnxKgfAbrU2V6HPXj
        subject_person_id: p_ZkacAAkwxE7XjsSAHpqD1z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奉𬤇，宋人物。CBDB 记录其籍贯记录为元城。中国历代人物传记资料库（CBDB）以人物编号 22198 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_j9HzFU87WgK4dUxpC9WnDL
          claim_id: c_czVZPGnxKgfAbrU2V6HPXj
          source_id: s_wmrCJ8wnVjEj7szEbc4HGF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_wmrCJ8wnVjEj7szEbc4HGF
            source_type: api_record
            title: 维基数据：王奉𬤇（Q45402025）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45402025
            external_identifier: Q45402025
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:03:04.576Z
            metadata_json: null
        - id: cs_9I6ke-KEwyCQ6uWFjz-hV-
          claim_id: c_czVZPGnxKgfAbrU2V6HPXj
          source_id: s_Wrrjo1GnqPD6RAhizPQMsA
          stance: supports
          locator: CBDB:22198
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Wrrjo1GnqPD6RAhizPQMsA
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王奉諲（22198）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22198&o=json
            external_identifier: CBDB:22198
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:03:04.910Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_cDPrfXkRYd3K1n1qHJEahP
        subject_person_id: p_ZkacAAkwxE7XjsSAHpqD1z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奉𬤇
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_h2m5MRZSMj7ZWfTdvu2zFi
          claim_id: c_cDPrfXkRYd3K1n1qHJEahP
          source_id: s_wmrCJ8wnVjEj7szEbc4HGF
          stance: supports
          locator: Q45402025
          quotation: null
          interpretation_note: null
          source:
            id: s_wmrCJ8wnVjEj7szEbc4HGF
            source_type: api_record
            title: 维基数据：王奉𬤇（Q45402025）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45402025
            external_identifier: Q45402025
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:03:04.576Z
            metadata_json: null
        - id: cs_usabuqgr5uT7NPgPJW7YQN
          claim_id: c_cDPrfXkRYd3K1n1qHJEahP
          source_id: s_Wrrjo1GnqPD6RAhizPQMsA
          stance: supports
          locator: Q45402025
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dSmbHrcRvXXJiTAsiCDfC6
        subject_person_id: p_BTTT39zJRrthz8CvFztroS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZkacAAkwxE7XjsSAHpqD1z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_8zeUGS6MKgZVnu4to14ENp
          claim_id: c_dSmbHrcRvXXJiTAsiCDfC6
          source_id: s_Wrrjo1GnqPD6RAhizPQMsA
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_Wrrjo1GnqPD6RAhizPQMsA
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王奉諲（22198）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22198&o=json
            external_identifier: CBDB:22198
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:03:04.910Z
            metadata_json: null
        - id: cs_TT5WNxQEENmCKJW4wPKz77
          claim_id: c_dSmbHrcRvXXJiTAsiCDfC6
          source_id: s_wmrCJ8wnVjEj7szEbc4HGF
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_wmrCJ8wnVjEj7szEbc4HGF
            source_type: api_record
            title: 维基数据：王奉𬤇（Q45402025）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45402025
            external_identifier: Q45402025
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:03:04.576Z
            metadata_json: null
        - id: cs_emTKtLq6ESKBZXR4f3YjJ5
          claim_id: c_dSmbHrcRvXXJiTAsiCDfC6
          source_id: s_KKQ5dqvsG41hp486vQJadZ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_KKQ5dqvsG41hp486vQJadZ
            source_type: api_record
            title: 维基数据：王廷温（Q45402023）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45402023
            external_identifier: Q45402023
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:19.422Z
            metadata_json: null
        - id: cs_WS78WBbmGdVYnXPtcKHtKb
          claim_id: c_dSmbHrcRvXXJiTAsiCDfC6
          source_id: s_QCKEtd5U5mCKxmV7UzgwQm
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_QCKEtd5U5mCKxmV7UzgwQm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王廷溫（22197）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22197&o=json
            external_identifier: CBDB:22197
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:19.719Z
            metadata_json: null
      object_person:
        id: p_BTTT39zJRrthz8CvFztroS
        status: active
        display_name: 王廷温
        merged_into_person_id: null
  children:
    - claim:
        id: c_c7sZ6e9Uvci1MRkfw4S67w
        subject_person_id: p_ZkacAAkwxE7XjsSAHpqD1z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KGRi1kNs9wSQNE2Say4FzP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9SyTAY3aokKHh699hsiSBV
          claim_id: c_c7sZ6e9Uvci1MRkfw4S67w
          source_id: s_rGPB9At8CwEqMh17TwRhNm
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_rGPB9At8CwEqMh17TwRhNm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王珙（22200）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22200&o=json
            external_identifier: CBDB:22200
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:59:56.411Z
            metadata_json: null
        - id: cs_jVkr36qfPxgKtGDC6FCFci
          claim_id: c_c7sZ6e9Uvci1MRkfw4S67w
          source_id: s_4zqxM1jC7WNSS5HTnHd2Z2
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_4zqxM1jC7WNSS5HTnHd2Z2
            source_type: api_record
            title: 维基数据：王珙（Q45402027）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45402027
            external_identifier: Q45402027
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:59:56.262Z
            metadata_json: null
        - id: cs_DwdVnbJC5DLCKoi3LBBNvT
          claim_id: c_c7sZ6e9Uvci1MRkfw4S67w
          source_id: s_wmrCJ8wnVjEj7szEbc4HGF
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_wmrCJ8wnVjEj7szEbc4HGF
            source_type: api_record
            title: 维基数据：王奉𬤇（Q45402025）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45402025
            external_identifier: Q45402025
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:03:04.576Z
            metadata_json: null
        - id: cs_9Ezwdaipcqgi3c8Bn2ELtL
          claim_id: c_c7sZ6e9Uvci1MRkfw4S67w
          source_id: s_Wrrjo1GnqPD6RAhizPQMsA
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_Wrrjo1GnqPD6RAhizPQMsA
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王奉諲（22198）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22198&o=json
            external_identifier: CBDB:22198
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:03:04.910Z
            metadata_json: null
      object_person:
        id: p_KGRi1kNs9wSQNE2Say4FzP
        status: active
        display_name: 王珙
        merged_into_person_id: null
    - claim:
        id: c_SVq9w1mTpZmZ4VjC3yf26f
        subject_person_id: p_ZkacAAkwxE7XjsSAHpqD1z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_K6bLFVt8Asek8FkfEuXRF2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_37F2mRn4tAn5vMm2nBxEUZ
          claim_id: c_SVq9w1mTpZmZ4VjC3yf26f
          source_id: s_wmrCJ8wnVjEj7szEbc4HGF
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_wmrCJ8wnVjEj7szEbc4HGF
            source_type: api_record
            title: 维基数据：王奉𬤇（Q45402025）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45402025
            external_identifier: Q45402025
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:03:04.576Z
            metadata_json: null
        - id: cs_LEnLuVp29Nw1vJKphN2QUD
          claim_id: c_SVq9w1mTpZmZ4VjC3yf26f
          source_id: s_Wrrjo1GnqPD6RAhizPQMsA
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_Wrrjo1GnqPD6RAhizPQMsA
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王奉諲（22198）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22198&o=json
            external_identifier: CBDB:22198
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:03:04.910Z
            metadata_json: null
        - id: cs_ijWgWyQAeEV5fDA66GxaAS
          claim_id: c_SVq9w1mTpZmZ4VjC3yf26f
          source_id: s_sG11N16iwwoL262dQodHHf
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_sG11N16iwwoL262dQodHHf
            source_type: api_record
            title: 维基数据：王乙（Q45402026）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45402026
            external_identifier: Q45402026
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:19.423Z
            metadata_json: null
        - id: cs_9bG1k4cttg2FvH6yvwj1Q6
          claim_id: c_SVq9w1mTpZmZ4VjC3yf26f
          source_id: s_dKEktPoXRHEtGtrCHnMBE7
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_dKEktPoXRHEtGtrCHnMBE7
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王乙（22199）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22199&o=json
            external_identifier: CBDB:22199
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:19.749Z
            metadata_json: null
      object_person:
        id: p_K6bLFVt8Asek8FkfEuXRF2
        status: active
        display_name: 王乙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王奉𬤇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王奉𬤇，宋人物。CBDB 记录其籍贯记录为元城。中国历代人物传记资料库（CBDB）以人物编号 22198 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王奉𬤇 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BTTT39zJRrthz8CvFztroS | 王廷温 | accepted |
| children | p_KGRi1kNs9wSQNE2Say4FzP | 王珙 | accepted |
| children | p_K6bLFVt8Asek8FkfEuXRF2 | 王乙 | accepted |

## 外部来源

- [维基数据：王奉𬤇（Q45402025）](https://www.wikidata.org/wiki/Q45402025)
- [维基数据：王珙（Q45402027）](https://www.wikidata.org/wiki/Q45402027)
- [维基数据：王廷温（Q45402023）](https://www.wikidata.org/wiki/Q45402023)
- [维基数据：王乙（Q45402026）](https://www.wikidata.org/wiki/Q45402026)
- [CBDB 中国历代人物传记资料库：王奉諲（22198）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22198&o=json)
- [CBDB 中国历代人物传记资料库：王珙（22200）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22200&o=json)
- [CBDB 中国历代人物传记资料库：王廷溫（22197）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22197&o=json)
- [CBDB 中国历代人物传记资料库：王乙（22199）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22199&o=json)
