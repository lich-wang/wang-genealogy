---
schema: wang-person/v1
id: p_TWpmF4vu7EQRcamByreerP
status: active
merged_into: null
display_name: 王延之
cbdb_id: 175447
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nHCyvWKvBqULrVL3kbcUfA
        subject_person_id: p_TWpmF4vu7EQRcamByreerP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延之（卒于746年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175447 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_yKbKGL1EX4Gogt4q5A8WfH
          claim_id: c_nHCyvWKvBqULrVL3kbcUfA
          source_id: s_vuaN3J1AYNonLkYd41btoG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_vuaN3J1AYNonLkYd41btoG
            source_type: api_record
            title: 维基数据：王延之（Q45660186）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660186
            external_identifier: Q45660186
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:28.974Z
            metadata_json: null
        - id: cs_LJT91RQlvtPpfv9s4aOiFq
          claim_id: c_nHCyvWKvBqULrVL3kbcUfA
          source_id: s_jsTsdGgHvYkvw4yrHK6vr4
          stance: supports
          locator: CBDB:175447
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_jsTsdGgHvYkvw4yrHK6vr4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王延之（175447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175447&o=json
            external_identifier: CBDB:175447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:29.134Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_uDz5NXFefaCweNSyH2s2wR
        subject_person_id: p_TWpmF4vu7EQRcamByreerP
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
        - id: cs_eZobNNG99TxRkyJMtRqySo
          claim_id: c_uDz5NXFefaCweNSyH2s2wR
          source_id: s_vuaN3J1AYNonLkYd41btoG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_vuaN3J1AYNonLkYd41btoG
            source_type: api_record
            title: 维基数据：王延之（Q45660186）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660186
            external_identifier: Q45660186
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:28.974Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_mr7yGq8Fwsq6ywJvfNaHfY
        subject_person_id: p_TWpmF4vu7EQRcamByreerP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延之
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CJo3JtrXsLyCPtpZE4n4Jr
          claim_id: c_mr7yGq8Fwsq6ywJvfNaHfY
          source_id: s_vuaN3J1AYNonLkYd41btoG
          stance: supports
          locator: Q45660186
          quotation: null
          interpretation_note: null
          source:
            id: s_vuaN3J1AYNonLkYd41btoG
            source_type: api_record
            title: 维基数据：王延之（Q45660186）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660186
            external_identifier: Q45660186
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:28.974Z
            metadata_json: null
        - id: cs_d3ZZqKhGAKoQYAqyi3uQxk
          claim_id: c_mr7yGq8Fwsq6ywJvfNaHfY
          source_id: s_jsTsdGgHvYkvw4yrHK6vr4
          stance: supports
          locator: Q45660186
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yiCUYtZxbNvZBmkmjN66Ye
        subject_person_id: p_S89vKPvai9yEMN4NRS1jZV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TWpmF4vu7EQRcamByreerP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_TxR3GPVBFWwHUu62bcZzkc
          claim_id: c_yiCUYtZxbNvZBmkmjN66Ye
          source_id: s_7U3EttuGHHZxeZjRyAGw86
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7U3EttuGHHZxeZjRyAGw86
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王愔（175443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175443&o=json
            external_identifier: CBDB:175443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:34.514Z
            metadata_json: null
        - id: cs_vrMREtX8pWC8ayvXdFTWW7
          claim_id: c_yiCUYtZxbNvZBmkmjN66Ye
          source_id: s_bq2C6a9K2XNsgtNLhEKd2B
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_bq2C6a9K2XNsgtNLhEKd2B
            source_type: api_record
            title: 维基数据：王愔（Q45659952）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659952
            external_identifier: Q45659952
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:34.351Z
            metadata_json: null
        - id: cs_aGyyd5dVJTJQk4fMudaHmx
          claim_id: c_yiCUYtZxbNvZBmkmjN66Ye
          source_id: s_vuaN3J1AYNonLkYd41btoG
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_vuaN3J1AYNonLkYd41btoG
            source_type: api_record
            title: 维基数据：王延之（Q45660186）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660186
            external_identifier: Q45660186
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:28.974Z
            metadata_json: null
        - id: cs_H6MWHePT5puXTVzbZ8sVHK
          claim_id: c_yiCUYtZxbNvZBmkmjN66Ye
          source_id: s_jsTsdGgHvYkvw4yrHK6vr4
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_jsTsdGgHvYkvw4yrHK6vr4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王延之（175447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175447&o=json
            external_identifier: CBDB:175447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:29.134Z
            metadata_json: null
      object_person:
        id: p_S89vKPvai9yEMN4NRS1jZV
        status: active
        display_name: 王愔
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王延之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王延之（卒于746年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175447 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 746年 | accepted |
| name.primary | 王延之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_S89vKPvai9yEMN4NRS1jZV | 王愔 | accepted |

## 外部来源

- [维基数据：王延之（Q45660186）](https://www.wikidata.org/wiki/Q45660186)
- [维基数据：王愔（Q45659952）](https://www.wikidata.org/wiki/Q45659952)
- [CBDB 中国历代人物传记资料库：王延之（175447）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175447&o=json)
- [CBDB 中国历代人物传记资料库：王愔（175443）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175443&o=json)
