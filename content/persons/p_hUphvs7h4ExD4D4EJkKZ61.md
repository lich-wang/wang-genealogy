---
schema: wang-person/v1
id: p_hUphvs7h4ExD4D4EJkKZ61
status: active
merged_into: null
display_name: 王仲文
cbdb_id: 175573
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RyAf6y6sgWeN8BRtiWeeaX
        subject_person_id: p_hUphvs7h4ExD4D4EJkKZ61
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲文（卒于783年），唐人物。籍贯咸陽，曾任縣尉、未詳。（中国历代人物传记资料库 CBDB 175573）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_6y6j4b28BzQtTkYrXVPkCR
          claim_id: c_RyAf6y6sgWeN8BRtiWeeaX
          source_id: s_fbx5dbZ3NnyS61Gv3iaW9S
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_fbx5dbZ3NnyS61Gv3iaW9S
            source_type: api_record
            title: 维基数据：王仲文（Q45667250）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667250
            external_identifier: Q45667250
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:06.374Z
            metadata_json: null
        - id: cs_PioaHNA3LGglnnbNmDcvgZ
          claim_id: c_RyAf6y6sgWeN8BRtiWeeaX
          source_id: s_y8rQfU3JLW6ZBfxLSEyRcE
          stance: supports
          locator: CBDB:175573
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_y8rQfU3JLW6ZBfxLSEyRcE
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王仲文（175573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175573&o=json
            external_identifier: CBDB:175573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:06.536Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ovaGDCRyq381WXWp911a3E
        subject_person_id: p_hUphvs7h4ExD4D4EJkKZ61
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
        - id: cs_Lm5ojKUwvSCerJFcowjG6U
          claim_id: c_ovaGDCRyq381WXWp911a3E
          source_id: s_fbx5dbZ3NnyS61Gv3iaW9S
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_fbx5dbZ3NnyS61Gv3iaW9S
            source_type: api_record
            title: 维基数据：王仲文（Q45667250）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667250
            external_identifier: Q45667250
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:06.374Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7wWLVM1Ha8vJHZ7FJDUcmi
        subject_person_id: p_hUphvs7h4ExD4D4EJkKZ61
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲文
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4NJB9DGJVXBJS7pD2HCKuz
          claim_id: c_7wWLVM1Ha8vJHZ7FJDUcmi
          source_id: s_fbx5dbZ3NnyS61Gv3iaW9S
          stance: supports
          locator: Q45667250
          quotation: null
          interpretation_note: null
          source:
            id: s_fbx5dbZ3NnyS61Gv3iaW9S
            source_type: api_record
            title: 维基数据：王仲文（Q45667250）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667250
            external_identifier: Q45667250
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:06.374Z
            metadata_json: null
        - id: cs_yj885WzLXKaJZTFZnGyvDB
          claim_id: c_7wWLVM1Ha8vJHZ7FJDUcmi
          source_id: s_y8rQfU3JLW6ZBfxLSEyRcE
          stance: supports
          locator: Q45667250
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_T5xftPBV5ND4UVp6iHjP98
        subject_person_id: p_TG2Yq5C8bx1R5aGv84C1Qh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hUphvs7h4ExD4D4EJkKZ61
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_7KZUHa1HQFL68NCe8QmMwz
          claim_id: c_T5xftPBV5ND4UVp6iHjP98
          source_id: s_ZheKpgSfQ4gfiqJmAbC8uR
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_ZheKpgSfQ4gfiqJmAbC8uR
            source_type: api_record
            title: 维基数据：王宁（Q45667198）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667198
            external_identifier: Q45667198
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:38.290Z
            metadata_json: null
        - id: cs_FT16zP13WxaMCA8tybPA8Q
          claim_id: c_T5xftPBV5ND4UVp6iHjP98
          source_id: s_J9pJZvBKchhHHxeRL4gupL
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_J9pJZvBKchhHHxeRL4gupL
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王寧（175572）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175572&o=json
            external_identifier: CBDB:175572
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:38.443Z
            metadata_json: null
        - id: cs_oHNFBvnJEePLpKzG1HKfR2
          claim_id: c_T5xftPBV5ND4UVp6iHjP98
          source_id: s_fbx5dbZ3NnyS61Gv3iaW9S
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_fbx5dbZ3NnyS61Gv3iaW9S
            source_type: api_record
            title: 维基数据：王仲文（Q45667250）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667250
            external_identifier: Q45667250
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:06.374Z
            metadata_json: null
        - id: cs_6SmFgPM47zgsr9QyS7ZAMr
          claim_id: c_T5xftPBV5ND4UVp6iHjP98
          source_id: s_y8rQfU3JLW6ZBfxLSEyRcE
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_y8rQfU3JLW6ZBfxLSEyRcE
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王仲文（175573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175573&o=json
            external_identifier: CBDB:175573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:06.536Z
            metadata_json: null
      object_person:
        id: p_TG2Yq5C8bx1R5aGv84C1Qh
        status: active
        display_name: 王宁
        merged_into_person_id: null
  children:
    - claim:
        id: c_fxtLqMUog94dwZoyj6USoY
        subject_person_id: p_hUphvs7h4ExD4D4EJkKZ61
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hNsjFK5zLQMnAN2YvRPhJe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_iPN6guHiNf8EjUJqbV2ufE
          claim_id: c_fxtLqMUog94dwZoyj6USoY
          source_id: s_fbx5dbZ3NnyS61Gv3iaW9S
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_fbx5dbZ3NnyS61Gv3iaW9S
            source_type: api_record
            title: 维基数据：王仲文（Q45667250）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667250
            external_identifier: Q45667250
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:06.374Z
            metadata_json: null
        - id: cs_skuJS4GFKHT9YnJ8MAASsA
          claim_id: c_fxtLqMUog94dwZoyj6USoY
          source_id: s_y8rQfU3JLW6ZBfxLSEyRcE
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_y8rQfU3JLW6ZBfxLSEyRcE
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王仲文（175573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175573&o=json
            external_identifier: CBDB:175573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:06.536Z
            metadata_json: null
        - id: cs_eEnvF6wGeKxp9JjX9fRhKC
          claim_id: c_fxtLqMUog94dwZoyj6USoY
          source_id: s_zSiEwWe75zTx9MuTFHDR4K
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_zSiEwWe75zTx9MuTFHDR4K
            source_type: api_record
            title: 维基数据：王忠君（Q45667302）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667302
            external_identifier: Q45667302
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:50.185Z
            metadata_json: null
        - id: cs_DXNC33LWeA7S5fDHiiTG26
          claim_id: c_fxtLqMUog94dwZoyj6USoY
          source_id: s_QfnruTSWwXPNQnBU8cQ9Vf
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_QfnruTSWwXPNQnBU8cQ9Vf
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王忠君（175574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175574&o=json
            external_identifier: CBDB:175574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:50.374Z
            metadata_json: null
      object_person:
        id: p_hNsjFK5zLQMnAN2YvRPhJe
        status: active
        display_name: 王忠君
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仲文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仲文（卒于783年），唐人物。籍贯咸陽，曾任縣尉、未詳。（中国历代人物传记资料库 CBDB 175573） | accepted |
| death.date | 783年 | accepted |
| name.primary | 王仲文 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_TG2Yq5C8bx1R5aGv84C1Qh | 王宁 | accepted |
| children | p_hNsjFK5zLQMnAN2YvRPhJe | 王忠君 | accepted |

## 外部来源

- [维基数据：王宁（Q45667198）](https://www.wikidata.org/wiki/Q45667198)
- [维基数据：王忠君（Q45667302）](https://www.wikidata.org/wiki/Q45667302)
- [维基数据：王仲文（Q45667250）](https://www.wikidata.org/wiki/Q45667250)
- [CBDB 中国历代人物传记资料库：王寧（175572）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175572&o=json)
- [CBDB 中国历代人物传记资料库：王忠君（175574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175574&o=json)
- [CBDB 中国历代人物传记资料库：王仲文（175573）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175573&o=json)
