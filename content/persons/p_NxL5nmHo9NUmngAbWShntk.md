---
schema: wang-person/v1
id: p_NxL5nmHo9NUmngAbWShntk
status: active
merged_into: null
display_name: 王延璋
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pi2NSUY5nLUt6onTCCSMvv
        subject_person_id: p_NxL5nmHo9NUmngAbWShntk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延璋（卒于746年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175444 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_hjU76r42czrMQtB3VgrS3A
          claim_id: c_pi2NSUY5nLUt6onTCCSMvv
          source_id: s_GC65NEi1va7kUxBQCDcsih
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_GC65NEi1va7kUxBQCDcsih
            source_type: api_record
            title: 维基数据：王延璋（Q45660010）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660010
            external_identifier: Q45660010
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:27.014Z
            metadata_json: null
        - id: cs_zZDXh8IhJpJqRPT56jLCEQ
          claim_id: c_pi2NSUY5nLUt6onTCCSMvv
          source_id: s_sx67dk3w173DCdUmaKMCgW
          stance: supports
          locator: CBDB:175444
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_sx67dk3w173DCdUmaKMCgW
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王延璋（175444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175444&o=json
            external_identifier: CBDB:175444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:27.334Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_8zvKfqURPvJS9A4KxzJmuN
        subject_person_id: p_NxL5nmHo9NUmngAbWShntk
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
        - id: cs_KFETvwrHvSjZ9mrxs4GFq9
          claim_id: c_8zvKfqURPvJS9A4KxzJmuN
          source_id: s_GC65NEi1va7kUxBQCDcsih
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_GC65NEi1va7kUxBQCDcsih
            source_type: api_record
            title: 维基数据：王延璋（Q45660010）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660010
            external_identifier: Q45660010
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:27.014Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jc7qxzGd9A9juX2ZNGtPGv
        subject_person_id: p_NxL5nmHo9NUmngAbWShntk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延璋
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_UF3C7cWgwxWzFo1k7tQcAw
          claim_id: c_Jc7qxzGd9A9juX2ZNGtPGv
          source_id: s_GC65NEi1va7kUxBQCDcsih
          stance: supports
          locator: Q45660010
          quotation: null
          interpretation_note: null
          source:
            id: s_GC65NEi1va7kUxBQCDcsih
            source_type: api_record
            title: 维基数据：王延璋（Q45660010）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660010
            external_identifier: Q45660010
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:27.014Z
            metadata_json: null
        - id: cs_d8gkJHKDWQspzkNMfByuH6
          claim_id: c_Jc7qxzGd9A9juX2ZNGtPGv
          source_id: s_sx67dk3w173DCdUmaKMCgW
          stance: supports
          locator: Q45660010
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_M1m6GBrk94xRi3P4mG29po
        subject_person_id: p_S89vKPvai9yEMN4NRS1jZV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NxL5nmHo9NUmngAbWShntk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_MHExvgjbi8mBTrYm9sjQPR
          claim_id: c_M1m6GBrk94xRi3P4mG29po
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
        - id: cs_qN62CCGdnGQnpwJm2aUhZZ
          claim_id: c_M1m6GBrk94xRi3P4mG29po
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
        - id: cs_MKsBtLQaVvY32bdDxaBesS
          claim_id: c_M1m6GBrk94xRi3P4mG29po
          source_id: s_GC65NEi1va7kUxBQCDcsih
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_GC65NEi1va7kUxBQCDcsih
            source_type: api_record
            title: 维基数据：王延璋（Q45660010）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660010
            external_identifier: Q45660010
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:27.014Z
            metadata_json: null
        - id: cs_CA4YaGTJjMmYhHH1axNG9x
          claim_id: c_M1m6GBrk94xRi3P4mG29po
          source_id: s_sx67dk3w173DCdUmaKMCgW
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_sx67dk3w173DCdUmaKMCgW
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王延璋（175444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175444&o=json
            external_identifier: CBDB:175444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:27.334Z
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

# 王延璋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王延璋（卒于746年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175444 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 746年 | accepted |
| name.primary | 王延璋 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_S89vKPvai9yEMN4NRS1jZV | 王愔 | accepted |

## 外部来源

- [维基数据：王延璋（Q45660010）](https://www.wikidata.org/wiki/Q45660010)
- [维基数据：王愔（Q45659952）](https://www.wikidata.org/wiki/Q45659952)
- [CBDB 中国历代人物传记资料库：王延璋（175444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175444&o=json)
- [CBDB 中国历代人物传记资料库：王愔（175443）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175443&o=json)
