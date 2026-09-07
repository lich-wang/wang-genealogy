---
schema: wang-person/v1
id: p_Bj4npy2dwWzLgZ5Xv5E7QD
status: active
merged_into: null
display_name: 王嗣恭
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ja4x8FPLM69KTAULMt8rg4
        subject_person_id: p_Bj4npy2dwWzLgZ5Xv5E7QD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣恭（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175563 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_r8ymrSMdJS5cqSwJCWVDDq
          claim_id: c_Ja4x8FPLM69KTAULMt8rg4
          source_id: s_xiWRTgYrqNJmVo4GQWkpue
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_xiWRTgYrqNJmVo4GQWkpue
            source_type: api_record
            title: 维基数据：王嗣恭（Q45666720）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666720
            external_identifier: Q45666720
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:02.869Z
            metadata_json: null
        - id: cs_PJnAi8LeGDcoTLvGl_NCqC
          claim_id: c_Ja4x8FPLM69KTAULMt8rg4
          source_id: s_ftpjDbKJaPHz3P3mLC444F
          stance: supports
          locator: CBDB:175563
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ftpjDbKJaPHz3P3mLC444F
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王嗣恭（175563）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175563&o=json
            external_identifier: CBDB:175563
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:03.009Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Qp5QwK4PdQPJq6WBkeaw1K
        subject_person_id: p_Bj4npy2dwWzLgZ5Xv5E7QD
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
        - id: cs_b22PFXY5EzLHdXCe81KWf1
          claim_id: c_Qp5QwK4PdQPJq6WBkeaw1K
          source_id: s_xiWRTgYrqNJmVo4GQWkpue
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_xiWRTgYrqNJmVo4GQWkpue
            source_type: api_record
            title: 维基数据：王嗣恭（Q45666720）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666720
            external_identifier: Q45666720
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:02.869Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_aduNv8VdX4AWEqwJPUKeCK
        subject_person_id: p_Bj4npy2dwWzLgZ5Xv5E7QD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣恭
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MSchJLoySBCFgLuwDAyVSW
          claim_id: c_aduNv8VdX4AWEqwJPUKeCK
          source_id: s_ftpjDbKJaPHz3P3mLC444F
          stance: supports
          locator: Q45666720
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_NdLpPhWxwQJ1gp9Dgyn6CE
          claim_id: c_aduNv8VdX4AWEqwJPUKeCK
          source_id: s_xiWRTgYrqNJmVo4GQWkpue
          stance: supports
          locator: Q45666720
          quotation: null
          interpretation_note: null
          source:
            id: s_xiWRTgYrqNJmVo4GQWkpue
            source_type: api_record
            title: 维基数据：王嗣恭（Q45666720）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666720
            external_identifier: Q45666720
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:02.869Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_C4oSayrkCrEGEa8qsdc3uG
        subject_person_id: p_FPisTavdR1h9GP2xzczNXG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Bj4npy2dwWzLgZ5Xv5E7QD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_TBjQU8264ZzVtywPYxnV9u
          claim_id: c_C4oSayrkCrEGEa8qsdc3uG
          source_id: s_Z6xkyBZUAF7wA6GtshtnYB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Z6xkyBZUAF7wA6GtshtnYB
            source_type: api_record
            title: 维基数据：王宰（Q45666287）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666287
            external_identifier: Q45666287
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:35.625Z
            metadata_json: null
        - id: cs_mRtdnkBy4gUAKL2pRhSZvo
          claim_id: c_C4oSayrkCrEGEa8qsdc3uG
          source_id: s_voSJPovZEpdxhCGcBmtgv9
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_voSJPovZEpdxhCGcBmtgv9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王宰（175555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175555&o=json
            external_identifier: CBDB:175555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:35.807Z
            metadata_json: null
        - id: cs_di4WGrPYL4cgZSqFVd9drD
          claim_id: c_C4oSayrkCrEGEa8qsdc3uG
          source_id: s_xiWRTgYrqNJmVo4GQWkpue
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_xiWRTgYrqNJmVo4GQWkpue
            source_type: api_record
            title: 维基数据：王嗣恭（Q45666720）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666720
            external_identifier: Q45666720
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:02.869Z
            metadata_json: null
        - id: cs_TGduYGFbvz2DJi5qD6Xaq4
          claim_id: c_C4oSayrkCrEGEa8qsdc3uG
          source_id: s_ftpjDbKJaPHz3P3mLC444F
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_ftpjDbKJaPHz3P3mLC444F
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王嗣恭（175563）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175563&o=json
            external_identifier: CBDB:175563
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:03.009Z
            metadata_json: null
      object_person:
        id: p_FPisTavdR1h9GP2xzczNXG
        status: active
        display_name: 王宰
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王嗣恭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王嗣恭（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175563 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 783年 | accepted |
| name.primary | 王嗣恭 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FPisTavdR1h9GP2xzczNXG | 王宰 | accepted |

## 外部来源

- [维基数据：王嗣恭（Q45666720）](https://www.wikidata.org/wiki/Q45666720)
- [维基数据：王宰（Q45666287）](https://www.wikidata.org/wiki/Q45666287)
- [CBDB 中国历代人物传记资料库：王嗣恭（175563）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175563&o=json)
- [CBDB 中国历代人物传记资料库：王宰（175555）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175555&o=json)
