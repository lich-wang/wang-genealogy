---
schema: wang-person/v1
id: p_kPVUDqmRJviwWheZyyk9pk
status: active
merged_into: null
display_name: 王绍
cbdb_id: 175541
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K6MoFJaNKJKcohni2pJ13H
        subject_person_id: p_kPVUDqmRJviwWheZyyk9pk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王绍（卒于731年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175541）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_t6LRMGBW2jKrrJzXfFCJd5
          claim_id: c_K6MoFJaNKJKcohni2pJ13H
          source_id: s_6yz5c6VonMr27dJGXCQudW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_6yz5c6VonMr27dJGXCQudW
            source_type: api_record
            title: 维基数据：王绍（Q45665515）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665515
            external_identifier: Q45665515
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:50.185Z
            metadata_json: null
        - id: cs_nrD1pC0LDTNsu0BPanODPZ
          claim_id: c_K6MoFJaNKJKcohni2pJ13H
          source_id: s_DPpMP6xXykbVKBLZJZvPA2
          stance: supports
          locator: CBDB:175541
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_DPpMP6xXykbVKBLZJZvPA2
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王紹（175541）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175541&o=json
            external_identifier: CBDB:175541
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:50.369Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_oipXDQi6Cegy5GFZXD1XrS
        subject_person_id: p_kPVUDqmRJviwWheZyyk9pk
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 731年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0731-01-01
            latest: 0731-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Wc53samai8mbYNeinomW3K
          claim_id: c_oipXDQi6Cegy5GFZXD1XrS
          source_id: s_6yz5c6VonMr27dJGXCQudW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_6yz5c6VonMr27dJGXCQudW
            source_type: api_record
            title: 维基数据：王绍（Q45665515）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665515
            external_identifier: Q45665515
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:50.185Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kBZU5X9AMKAud2zckCejTA
        subject_person_id: p_kPVUDqmRJviwWheZyyk9pk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王绍
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ACGnJRnKR3BdMWwe3BTM3q
          claim_id: c_kBZU5X9AMKAud2zckCejTA
          source_id: s_DPpMP6xXykbVKBLZJZvPA2
          stance: supports
          locator: Q45665515
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_X3Lr2qU1hf21kFahGtaydS
          claim_id: c_kBZU5X9AMKAud2zckCejTA
          source_id: s_6yz5c6VonMr27dJGXCQudW
          stance: supports
          locator: Q45665515
          quotation: null
          interpretation_note: null
          source:
            id: s_6yz5c6VonMr27dJGXCQudW
            source_type: api_record
            title: 维基数据：王绍（Q45665515）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665515
            external_identifier: Q45665515
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:50.185Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dns25JfHD9kmGM7LsRefsq
        subject_person_id: p_2NTHSuTRAQfY7rnLH41fx7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kPVUDqmRJviwWheZyyk9pk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Bae6AAbirzECBz1c8xLZY4
          claim_id: c_dns25JfHD9kmGM7LsRefsq
          source_id: s_eRrFti22ak1JuurWMbB8MF
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_eRrFti22ak1JuurWMbB8MF
            source_type: api_record
            title: 维基数据：王仲连（Q45665461）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665461
            external_identifier: Q45665461
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:01.010Z
            metadata_json: null
        - id: cs_TaBrfw4qdpL4NQdog5n52n
          claim_id: c_dns25JfHD9kmGM7LsRefsq
          source_id: s_VtRYHnhDAVQax6saLZ9QEq
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_VtRYHnhDAVQax6saLZ9QEq
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王仲連（175540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175540&o=json
            external_identifier: CBDB:175540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:01.171Z
            metadata_json: null
        - id: cs_BrVyJpffXh654nru7aDfxD
          claim_id: c_dns25JfHD9kmGM7LsRefsq
          source_id: s_6yz5c6VonMr27dJGXCQudW
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_6yz5c6VonMr27dJGXCQudW
            source_type: api_record
            title: 维基数据：王绍（Q45665515）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665515
            external_identifier: Q45665515
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:50.185Z
            metadata_json: null
        - id: cs_4Jaj8t31HZfWzfJZGujcYT
          claim_id: c_dns25JfHD9kmGM7LsRefsq
          source_id: s_DPpMP6xXykbVKBLZJZvPA2
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_DPpMP6xXykbVKBLZJZvPA2
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王紹（175541）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175541&o=json
            external_identifier: CBDB:175541
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:50.369Z
            metadata_json: null
      object_person:
        id: p_2NTHSuTRAQfY7rnLH41fx7
        status: active
        display_name: 王仲连
        merged_into_person_id: null
  children:
    - claim:
        id: c_JZauJNycmT58Bum9ACjCdP
        subject_person_id: p_kPVUDqmRJviwWheZyyk9pk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_o3CtQwgPCb9SPDjiw6AWp7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_iBx9b2D8KTzF39N56KcGw9
          claim_id: c_JZauJNycmT58Bum9ACjCdP
          source_id: s_DPpMP6xXykbVKBLZJZvPA2
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_DPpMP6xXykbVKBLZJZvPA2
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王紹（175541）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175541&o=json
            external_identifier: CBDB:175541
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:50.369Z
            metadata_json: null
        - id: cs_yaUoTyC4qdCo8oDb5PNnch
          claim_id: c_JZauJNycmT58Bum9ACjCdP
          source_id: s_6yz5c6VonMr27dJGXCQudW
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_6yz5c6VonMr27dJGXCQudW
            source_type: api_record
            title: 维基数据：王绍（Q45665515）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665515
            external_identifier: Q45665515
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:50.185Z
            metadata_json: null
        - id: cs_22L7V3E1sKLA5UuScAb5sX
          claim_id: c_JZauJNycmT58Bum9ACjCdP
          source_id: s_8JJBz2XuxNkrWkBP19JReT
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_8JJBz2XuxNkrWkBP19JReT
            source_type: api_record
            title: 维基数据：王玙（Q7967736）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q7967736
            external_identifier: Q7967736
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:05.883Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8E%99
        - id: cs_xa8oLhRVu4syweMXHs8pUj
          claim_id: c_JZauJNycmT58Bum9ACjCdP
          source_id: s_y7Ty8hHvBFKCvjH2p9WUi9
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_y7Ty8hHvBFKCvjH2p9WUi9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王璵（175542）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175542&o=json
            external_identifier: CBDB:175542
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:06.035Z
            metadata_json: null
      object_person:
        id: p_o3CtQwgPCb9SPDjiw6AWp7
        status: active
        display_name: 王玙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王绍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王绍（卒于731年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175541） | accepted |
| death.date | 731年 | accepted |
| name.primary | 王绍 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2NTHSuTRAQfY7rnLH41fx7 | 王仲连 | accepted |
| children | p_o3CtQwgPCb9SPDjiw6AWp7 | 王玙 | accepted |

## 外部来源

- [维基数据：王绍（Q45665515）](https://www.wikidata.org/wiki/Q45665515)
- [维基数据：王玙（Q7967736）](https://www.wikidata.org/wiki/Q7967736)
- [维基数据：王仲连（Q45665461）](https://www.wikidata.org/wiki/Q45665461)
- [CBDB 中国历代人物传记资料库：王紹（175541）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175541&o=json)
- [CBDB 中国历代人物传记资料库：王璵（175542）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175542&o=json)
- [CBDB 中国历代人物传记资料库：王仲連（175540）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175540&o=json)
