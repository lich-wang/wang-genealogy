---
schema: wang-person/v1
id: p_8Cwxv6G1RvcDFY4NCwixG2
status: active
merged_into: null
display_name: 王子西
cbdb_id: 175487
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jXmx8zKgDAJHBwbcMFGjRR
        subject_person_id: p_8Cwxv6G1RvcDFY4NCwixG2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子西（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任參軍。中国历代人物传记资料库（CBDB）以人物编号 175487 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_vM4bFcFgFCS3xCVd5zHmzu
          claim_id: c_jXmx8zKgDAJHBwbcMFGjRR
          source_id: s_tTQXfbtY1kaqzVJs9Ffjqb
          stance: supports
          locator: null
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
        - id: cs_1fJSSsTl4JZ8qF2ezIHku0
          claim_id: c_jXmx8zKgDAJHBwbcMFGjRR
          source_id: s_CGF3FWXfCPpiGutCgR3R9z
          stance: supports
          locator: CBDB:175487
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_WQhBebXn7CaaS92H1PFLFF
        subject_person_id: p_8Cwxv6G1RvcDFY4NCwixG2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 820年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0820-01-01
            latest: 0820-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CW8XNPoaWzqjs7YKYovS7M
          claim_id: c_WQhBebXn7CaaS92H1PFLFF
          source_id: s_tTQXfbtY1kaqzVJs9Ffjqb
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1Ay11SdHSSyRuYGdCVGBkW
        subject_person_id: p_8Cwxv6G1RvcDFY4NCwixG2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子西
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6wadT5txrx4mAc6ukMFjXE
          claim_id: c_1Ay11SdHSSyRuYGdCVGBkW
          source_id: s_CGF3FWXfCPpiGutCgR3R9z
          stance: supports
          locator: Q45662575
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_qPnxmeZPKKPz63npFTsnJk
          claim_id: c_1Ay11SdHSSyRuYGdCVGBkW
          source_id: s_tTQXfbtY1kaqzVJs9Ffjqb
          stance: supports
          locator: Q45662575
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
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_Temqm8d7G2BX5AMhsUSsKe
        status: active
        display_name: 王淮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王子西

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王子西（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任參軍。中国历代人物传记资料库（CBDB）以人物编号 175487 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 820年 | accepted |
| name.primary | 王子西 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Temqm8d7G2BX5AMhsUSsKe | 王淮 | accepted |

## 外部来源

- [维基数据：王淮（Q45662457）](https://www.wikidata.org/wiki/Q45662457)
- [维基数据：王子西（Q45662575）](https://www.wikidata.org/wiki/Q45662575)
- [CBDB 中国历代人物传记资料库：王淮（175485）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175485&o=json)
- [CBDB 中国历代人物传记资料库：王子西（175487）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175487&o=json)
