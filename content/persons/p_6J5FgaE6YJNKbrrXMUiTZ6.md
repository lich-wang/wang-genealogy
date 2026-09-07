---
schema: wang-person/v1
id: p_6J5FgaE6YJNKbrrXMUiTZ6
status: active
merged_into: null
display_name: 王杰
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6FCvaLWeePRtuPgiXt5sUq
        subject_person_id: p_6J5FgaE6YJNKbrrXMUiTZ6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杰（卒于746年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175605 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_uvBGBXPwcEW245TxRC8R83
          claim_id: c_6FCvaLWeePRtuPgiXt5sUq
          source_id: s_fd1gQUjdf7KvE1BPLrqP9P
          stance: supports
          locator: null
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
        - id: cs_Zm2taJRdffudGcFk3EUVx3
          claim_id: c_6FCvaLWeePRtuPgiXt5sUq
          source_id: s_Z5WQrJH3uBN8epNyoJJ5k1
          stance: supports
          locator: CBDB:175605
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_moyU7zV38b3BK2YyzZsFmG
        subject_person_id: p_6J5FgaE6YJNKbrrXMUiTZ6
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
        - id: cs_12dHhhBDvUcLNt7YmVkb1A
          claim_id: c_moyU7zV38b3BK2YyzZsFmG
          source_id: s_fd1gQUjdf7KvE1BPLrqP9P
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kz6v78JuAdykV8EupQx9aY
        subject_person_id: p_6J5FgaE6YJNKbrrXMUiTZ6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杰
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FV3nVgn8LPtfpW1MqbuJxG
          claim_id: c_kz6v78JuAdykV8EupQx9aY
          source_id: s_fd1gQUjdf7KvE1BPLrqP9P
          stance: supports
          locator: Q45668821
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
        - id: cs_ZANN6hknj3kRWy3ErMjdNK
          claim_id: c_kz6v78JuAdykV8EupQx9aY
          source_id: s_Z5WQrJH3uBN8epNyoJJ5k1
          stance: supports
          locator: Q45668821
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_zKiyG8Et428Qshx93cGmXx
        status: active
        display_name: 王暟
        merged_into_person_id: null
  children:
    - claim:
        id: c_2GUZ5w7wWGKGYVieRKaCJc
        subject_person_id: p_6J5FgaE6YJNKbrrXMUiTZ6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VCzugTfN1NUsZkRmPAN27h
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_BbL39Jbu3ATXJHtx7JCASk
          claim_id: c_2GUZ5w7wWGKGYVieRKaCJc
          source_id: s_Z5WQrJH3uBN8epNyoJJ5k1
          stance: supports
          locator: 亲属关系：子
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
        - id: cs_VyKeutBL6eJGT8Bg94fY5q
          claim_id: c_2GUZ5w7wWGKGYVieRKaCJc
          source_id: s_fd1gQUjdf7KvE1BPLrqP9P
          stance: supports
          locator: P40（子女）
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
        - id: cs_4VKDMY4195hLqZAgC2BFAH
          claim_id: c_2GUZ5w7wWGKGYVieRKaCJc
          source_id: s_FiXBmVmThrwT9DXXq9GYAt
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_FiXBmVmThrwT9DXXq9GYAt
            source_type: api_record
            title: 维基数据：王现（Q45668873）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668873
            external_identifier: Q45668873
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:50.483Z
            metadata_json: null
        - id: cs_m16Wqxg62D3awre9fjcwFL
          claim_id: c_2GUZ5w7wWGKGYVieRKaCJc
          source_id: s_v8HG57NFjhTnDhqnEJEhAs
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_v8HG57NFjhTnDhqnEJEhAs
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王現（175606）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175606&o=json
            external_identifier: CBDB:175606
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:50.673Z
            metadata_json: null
      object_person:
        id: p_VCzugTfN1NUsZkRmPAN27h
        status: active
        display_name: 王现
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王杰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王杰（卒于746年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175605 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 746年 | accepted |
| name.primary | 王杰 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zKiyG8Et428Qshx93cGmXx | 王暟 | accepted |
| children | p_VCzugTfN1NUsZkRmPAN27h | 王现 | accepted |

## 外部来源

- [维基数据：王杰（Q45668821）](https://www.wikidata.org/wiki/Q45668821)
- [维基数据：王暟（Q45668621）](https://www.wikidata.org/wiki/Q45668621)
- [维基数据：王现（Q45668873）](https://www.wikidata.org/wiki/Q45668873)
- [CBDB 中国历代人物传记资料库：王傑（175605）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175605&o=json)
- [CBDB 中国历代人物传记资料库：王暟（175601）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175601&o=json)
- [CBDB 中国历代人物传记资料库：王現（175606）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175606&o=json)
