---
schema: wang-person/v1
id: p_Dfa1f6LajcccPqL7uqrxjU
status: active
merged_into: null
display_name: 王休
cbdb_id: 175537
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AsAq18nzJL16W41u2thYgk
        subject_person_id: p_Dfa1f6LajcccPqL7uqrxjU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王休（卒于746年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任令。中国历代人物传记资料库（CBDB）以人物编号 175537 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_huytx4bBVexouDB87fyVwY
          claim_id: c_AsAq18nzJL16W41u2thYgk
          source_id: s_8RPYaa1wyVvSG4zHHbeq2x
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_8RPYaa1wyVvSG4zHHbeq2x
            source_type: api_record
            title: 维基数据：王休（Q45665355）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665355
            external_identifier: Q45665355
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:35.624Z
            metadata_json: null
        - id: cs_xw2QBlmIdq2AXH5GIil6WG
          claim_id: c_AsAq18nzJL16W41u2thYgk
          source_id: s_2YSdYorimGUbsnTL7es8B3
          stance: supports
          locator: CBDB:175537
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_2YSdYorimGUbsnTL7es8B3
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王休（175537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175537&o=json
            external_identifier: CBDB:175537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:35.765Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_qRnQeZDKtf4ttXv9j9unG5
        subject_person_id: p_Dfa1f6LajcccPqL7uqrxjU
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
        - id: cs_PG4UfgWNZsGjjUDcdrCw4g
          claim_id: c_qRnQeZDKtf4ttXv9j9unG5
          source_id: s_8RPYaa1wyVvSG4zHHbeq2x
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_8RPYaa1wyVvSG4zHHbeq2x
            source_type: api_record
            title: 维基数据：王休（Q45665355）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665355
            external_identifier: Q45665355
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:35.624Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gRaiiPiexB5rVzQyE4YAEq
        subject_person_id: p_Dfa1f6LajcccPqL7uqrxjU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王休
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1fSdKzpC9X6Yr9rAcj1yYu
          claim_id: c_gRaiiPiexB5rVzQyE4YAEq
          source_id: s_8RPYaa1wyVvSG4zHHbeq2x
          stance: supports
          locator: Q45665355
          quotation: null
          interpretation_note: null
          source:
            id: s_8RPYaa1wyVvSG4zHHbeq2x
            source_type: api_record
            title: 维基数据：王休（Q45665355）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665355
            external_identifier: Q45665355
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:35.624Z
            metadata_json: null
        - id: cs_JzCjE4WzWT95m1b8nY2Lbd
          claim_id: c_gRaiiPiexB5rVzQyE4YAEq
          source_id: s_2YSdYorimGUbsnTL7es8B3
          stance: supports
          locator: Q45665355
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jFBAHMCDagPwMHc2ZPFUAg
        subject_person_id: p_f2E3depAV8At1mvv8ZEHkb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Dfa1f6LajcccPqL7uqrxjU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_E1cLaBzWVmKoGNMcy6CEag
          claim_id: c_jFBAHMCDagPwMHc2ZPFUAg
          source_id: s_QNQo7mJBnbbHv72Dx7JJC7
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_QNQo7mJBnbbHv72Dx7JJC7
            source_type: api_record
            title: 维基数据：王晦（Q45665300）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665300
            external_identifier: Q45665300
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:36.178Z
            metadata_json: null
        - id: cs_WwQkVbYkuPMpksE27Cn4v8
          claim_id: c_jFBAHMCDagPwMHc2ZPFUAg
          source_id: s_513aF8jUSjhNtJ8P3G3yvb
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_513aF8jUSjhNtJ8P3G3yvb
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晦（175536）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175536&o=json
            external_identifier: CBDB:175536
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:36.323Z
            metadata_json: null
        - id: cs_PMrAgsk4pLwZnuANJtdKhu
          claim_id: c_jFBAHMCDagPwMHc2ZPFUAg
          source_id: s_8RPYaa1wyVvSG4zHHbeq2x
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_8RPYaa1wyVvSG4zHHbeq2x
            source_type: api_record
            title: 维基数据：王休（Q45665355）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665355
            external_identifier: Q45665355
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:35.624Z
            metadata_json: null
        - id: cs_xFtPyNzyh1mdVPDG9wbtiu
          claim_id: c_jFBAHMCDagPwMHc2ZPFUAg
          source_id: s_2YSdYorimGUbsnTL7es8B3
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_2YSdYorimGUbsnTL7es8B3
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王休（175537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175537&o=json
            external_identifier: CBDB:175537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:35.765Z
            metadata_json: null
      object_person:
        id: p_f2E3depAV8At1mvv8ZEHkb
        status: active
        display_name: 王晦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王休

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王休（卒于746年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任令。中国历代人物传记资料库（CBDB）以人物编号 175537 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 746年 | accepted |
| name.primary | 王休 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_f2E3depAV8At1mvv8ZEHkb | 王晦 | accepted |

## 外部来源

- [维基数据：王晦（Q45665300）](https://www.wikidata.org/wiki/Q45665300)
- [维基数据：王休（Q45665355）](https://www.wikidata.org/wiki/Q45665355)
- [CBDB 中国历代人物传记资料库：王晦（175536）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175536&o=json)
- [CBDB 中国历代人物传记资料库：王休（175537）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175537&o=json)
