---
schema: wang-person/v1
id: p_uzsBphtDLN3vBPzmTBJLHq
status: active
merged_into: null
display_name: 王应
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SmgdUbE5gZg6FpybAD7GZG
        subject_person_id: p_uzsBphtDLN3vBPzmTBJLHq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王应（卒于875年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175502 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_BX2MFrby5GDbUvpMzdDfAN
          claim_id: c_SmgdUbE5gZg6FpybAD7GZG
          source_id: s_1wNJ7SRjVnzrgCFD4evCFY
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_1wNJ7SRjVnzrgCFD4evCFY
            source_type: api_record
            title: 维基数据：王应（Q45663434）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663434
            external_identifier: Q45663434
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:05.883Z
            metadata_json: null
        - id: cs_9klZbXq_N6cAGnBbuuwF2M
          claim_id: c_SmgdUbE5gZg6FpybAD7GZG
          source_id: s_iUvLu1d8zFYU7Zmkffotfv
          stance: supports
          locator: CBDB:175502
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_iUvLu1d8zFYU7Zmkffotfv
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王應（175502）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175502&o=json
            external_identifier: CBDB:175502
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:06.046Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_vVJpoazniZWCJ8yFopLrgX
        subject_person_id: p_uzsBphtDLN3vBPzmTBJLHq
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 875年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0875-01-01
            latest: 0875-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AgsMJdwrG6zjsdNQjSGKpa
          claim_id: c_vVJpoazniZWCJ8yFopLrgX
          source_id: s_1wNJ7SRjVnzrgCFD4evCFY
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_1wNJ7SRjVnzrgCFD4evCFY
            source_type: api_record
            title: 维基数据：王应（Q45663434）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663434
            external_identifier: Q45663434
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:05.883Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KNHBqGXkzc35nTYBmBRpC5
        subject_person_id: p_uzsBphtDLN3vBPzmTBJLHq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王应
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2wxbwtQ1XQ1KwgnTWNdBnJ
          claim_id: c_KNHBqGXkzc35nTYBmBRpC5
          source_id: s_iUvLu1d8zFYU7Zmkffotfv
          stance: supports
          locator: Q45663434
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_PLK6DkqrgzN2ihao5Qji9R
          claim_id: c_KNHBqGXkzc35nTYBmBRpC5
          source_id: s_1wNJ7SRjVnzrgCFD4evCFY
          stance: supports
          locator: Q45663434
          quotation: null
          interpretation_note: null
          source:
            id: s_1wNJ7SRjVnzrgCFD4evCFY
            source_type: api_record
            title: 维基数据：王应（Q45663434）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663434
            external_identifier: Q45663434
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:05.883Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_G7TqvHX6HF6UkNkmN9gDDT
        subject_person_id: p_TyJ2M3ZheRX5T2BF68hTVk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uzsBphtDLN3vBPzmTBJLHq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Jb7J4NQXe4foo4AJJeSjsT
          claim_id: c_G7TqvHX6HF6UkNkmN9gDDT
          source_id: s_obzovB79XtaLoD1NBN8fF4
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_obzovB79XtaLoD1NBN8fF4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源中（175500）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175500&o=json
            external_identifier: CBDB:175500
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:41.738Z
            metadata_json: null
        - id: cs_QCnH79hZFpKJpGbBh2xa8P
          claim_id: c_G7TqvHX6HF6UkNkmN9gDDT
          source_id: s_w6Eqp9zJRFFLrBraexCCYD
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_w6Eqp9zJRFFLrBraexCCYD
            source_type: api_record
            title: 维基数据：王源中（Q16903986）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16903986
            external_identifier: Q16903986
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:41.578Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%BA%90%E4%B8%AD
        - id: cs_bfj6cyW1vn36cvXfjdQgxc
          claim_id: c_G7TqvHX6HF6UkNkmN9gDDT
          source_id: s_1wNJ7SRjVnzrgCFD4evCFY
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_1wNJ7SRjVnzrgCFD4evCFY
            source_type: api_record
            title: 维基数据：王应（Q45663434）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663434
            external_identifier: Q45663434
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:05.883Z
            metadata_json: null
        - id: cs_XA9JvVJ4BfjDXe8NZzJvKW
          claim_id: c_G7TqvHX6HF6UkNkmN9gDDT
          source_id: s_iUvLu1d8zFYU7Zmkffotfv
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_iUvLu1d8zFYU7Zmkffotfv
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王應（175502）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175502&o=json
            external_identifier: CBDB:175502
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:06.046Z
            metadata_json: null
      object_person:
        id: p_TyJ2M3ZheRX5T2BF68hTVk
        status: active
        display_name: 王源中
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王应

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王应（卒于875年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175502 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 875年 | accepted |
| name.primary | 王应 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_TyJ2M3ZheRX5T2BF68hTVk | 王源中 | accepted |

## 外部来源

- [维基数据：王应（Q45663434）](https://www.wikidata.org/wiki/Q45663434)
- [维基数据：王源中（Q16903986）](https://www.wikidata.org/wiki/Q16903986)
- [CBDB 中国历代人物传记资料库：王應（175502）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175502&o=json)
- [CBDB 中国历代人物传记资料库：王源中（175500）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175500&o=json)
