---
schema: wang-person/v1
id: p_zf7oFPjrmgHFZY3CMeGN4N
status: active
merged_into: null
display_name: 王雄
cbdb_id: 175590
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Dmjia66eh7bVZA4DDQub2e
        subject_person_id: p_zf7oFPjrmgHFZY3CMeGN4N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雄（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175590 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_tJY5fuHReqFZjEzoBhVTpa
          claim_id: c_Dmjia66eh7bVZA4DDQub2e
          source_id: s_px1NUSsYaEBQuTAERBMMR2
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_px1NUSsYaEBQuTAERBMMR2
            source_type: api_record
            title: 维基数据：王雄（Q45668070）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668070
            external_identifier: Q45668070
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:48.700Z
            metadata_json: null
        - id: cs_6d0bWz_542FtvzXhz9l1wk
          claim_id: c_Dmjia66eh7bVZA4DDQub2e
          source_id: s_7J6bC9Jw738AyDyjEjmr12
          stance: supports
          locator: CBDB:175590
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7J6bC9Jw738AyDyjEjmr12
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王雄（175590）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175590&o=json
            external_identifier: CBDB:175590
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:48.911Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_rF1vGwpUs6WKyxQ6PNEEb7
        subject_person_id: p_zf7oFPjrmgHFZY3CMeGN4N
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
        - id: cs_3P2zzcGtJFGALnD8eLY2o8
          claim_id: c_rF1vGwpUs6WKyxQ6PNEEb7
          source_id: s_px1NUSsYaEBQuTAERBMMR2
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_px1NUSsYaEBQuTAERBMMR2
            source_type: api_record
            title: 维基数据：王雄（Q45668070）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668070
            external_identifier: Q45668070
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:48.700Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KhZHJcq5LUL2LSg9AMaUGW
        subject_person_id: p_zf7oFPjrmgHFZY3CMeGN4N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雄
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QUHAG1iE2FXdnrRB79pMod
          claim_id: c_KhZHJcq5LUL2LSg9AMaUGW
          source_id: s_7J6bC9Jw738AyDyjEjmr12
          stance: supports
          locator: Q45668070
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_gTs5Q2PqUBe7nNbTRKM6Ef
          claim_id: c_KhZHJcq5LUL2LSg9AMaUGW
          source_id: s_px1NUSsYaEBQuTAERBMMR2
          stance: supports
          locator: Q45668070
          quotation: null
          interpretation_note: null
          source:
            id: s_px1NUSsYaEBQuTAERBMMR2
            source_type: api_record
            title: 维基数据：王雄（Q45668070）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668070
            external_identifier: Q45668070
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:48.700Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hMeKnkEApNAKXj8r26Rs8R
        subject_person_id: p_DbKg6Z6wj4BMKWgbEDKMoY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zf7oFPjrmgHFZY3CMeGN4N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_1E9n1D2nBG8AoM4cMg1MUw
          claim_id: c_hMeKnkEApNAKXj8r26Rs8R
          source_id: s_recuu9Amqp1U8r1h1hCCMC
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_recuu9Amqp1U8r1h1hCCMC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王佾（175585）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175585&o=json
            external_identifier: CBDB:175585
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:38.458Z
            metadata_json: null
        - id: cs_AKB5RzTa8GZAJj4B7wLvgM
          claim_id: c_hMeKnkEApNAKXj8r26Rs8R
          source_id: s_7N34zb2284KFZYJKH7nrDo
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_7N34zb2284KFZYJKH7nrDo
            source_type: api_record
            title: 维基数据：王佾（Q45667814）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667814
            external_identifier: Q45667814
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:38.291Z
            metadata_json: null
        - id: cs_Z7TdkZcFHKCVwrEsyCADZS
          claim_id: c_hMeKnkEApNAKXj8r26Rs8R
          source_id: s_px1NUSsYaEBQuTAERBMMR2
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_px1NUSsYaEBQuTAERBMMR2
            source_type: api_record
            title: 维基数据：王雄（Q45668070）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668070
            external_identifier: Q45668070
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:48.700Z
            metadata_json: null
        - id: cs_oQ4ubBZ3qACZEiQAuhuFtS
          claim_id: c_hMeKnkEApNAKXj8r26Rs8R
          source_id: s_7J6bC9Jw738AyDyjEjmr12
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7J6bC9Jw738AyDyjEjmr12
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王雄（175590）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175590&o=json
            external_identifier: CBDB:175590
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:48.911Z
            metadata_json: null
      object_person:
        id: p_DbKg6Z6wj4BMKWgbEDKMoY
        status: active
        display_name: 王佾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王雄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王雄（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175590 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 783年 | accepted |
| name.primary | 王雄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DbKg6Z6wj4BMKWgbEDKMoY | 王佾 | accepted |

## 外部来源

- [维基数据：王雄（Q45668070）](https://www.wikidata.org/wiki/Q45668070)
- [维基数据：王佾（Q45667814）](https://www.wikidata.org/wiki/Q45667814)
- [CBDB 中国历代人物传记资料库：王雄（175590）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175590&o=json)
- [CBDB 中国历代人物传记资料库：王佾（175585）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175585&o=json)
