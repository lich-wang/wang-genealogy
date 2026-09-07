---
schema: wang-person/v1
id: p_Wdd9WrspYiEE72NGMNp75f
status: active
merged_into: null
display_name: 王鸿儒
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4Va50FWomAVFAtGl7GgKdv
        subject_person_id: p_Wdd9WrspYiEE72NGMNp75f
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鸿儒（1459年—1519年），史料所见人物。本项目依据《王鸿儒》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_QTKlZxPWBiK1Nxcl8dNhha
          claim_id: c_4Va50FWomAVFAtGl7GgKdv
          source_id: s_g1q73gKvB6bGzszoP8GtLg
          stance: supports
          locator: Q15933067
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_g1q73gKvB6bGzszoP8GtLg
            source_type: api_record
            title: 维基数据：王鸿儒（Q15933067）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15933067
            external_identifier: Q15933067
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:26.978Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_KMz4Lx7S48T79aj54WixiY
        subject_person_id: p_Wdd9WrspYiEE72NGMNp75f
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1459年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1459-01-01
            latest: 1459-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hBdZoWG1NPn6vu3mH1uLye
          claim_id: c_KMz4Lx7S48T79aj54WixiY
          source_id: s_g1q73gKvB6bGzszoP8GtLg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_g1q73gKvB6bGzszoP8GtLg
            source_type: api_record
            title: 维基数据：王鸿儒（Q15933067）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15933067
            external_identifier: Q15933067
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:26.978Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_zKL9KNaKkZMEVSa7kG1od6
        subject_person_id: p_Wdd9WrspYiEE72NGMNp75f
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1519年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1519-01-01
            latest: 1519-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_nKAARjjginGCaycHtF1yky
          claim_id: c_zKL9KNaKkZMEVSa7kG1od6
          source_id: s_g1q73gKvB6bGzszoP8GtLg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_g1q73gKvB6bGzszoP8GtLg
            source_type: api_record
            title: 维基数据：王鸿儒（Q15933067）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15933067
            external_identifier: Q15933067
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:26.978Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_YCp36brhJhq6226CyvnoRJ
        subject_person_id: p_Wdd9WrspYiEE72NGMNp75f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鸿儒
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KRo3frx86hyR527B426pKd
          claim_id: c_YCp36brhJhq6226CyvnoRJ
          source_id: s_g1q73gKvB6bGzszoP8GtLg
          stance: supports
          locator: Q15933067
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Lja4kG6wq2v3GTCYnJRw6i
        subject_person_id: p_PAQnJKUX1HHCzAwrFTb5md
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Wdd9WrspYiEE72NGMNp75f
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1aMkBMt3T1gLxVJrV7nQ82
          claim_id: c_Lja4kG6wq2v3GTCYnJRw6i
          source_id: s_aBqYKXy4FB34Qb4CoTKgaT
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_aBqYKXy4FB34Qb4CoTKgaT
            source_type: api_record
            title: 维基数据：王本（Q45491815）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45491815
            external_identifier: Q45491815
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:10.748Z
            metadata_json: null
        - id: cs_GZiKTADAKWbWpzof2jKtxg
          claim_id: c_Lja4kG6wq2v3GTCYnJRw6i
          source_id: s_g1q73gKvB6bGzszoP8GtLg
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_g1q73gKvB6bGzszoP8GtLg
            source_type: api_record
            title: 维基数据：王鸿儒（Q15933067）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15933067
            external_identifier: Q15933067
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:26.978Z
            metadata_json: null
      object_person:
        id: p_PAQnJKUX1HHCzAwrFTb5md
        status: active
        display_name: 王本
        merged_into_person_id: null
  children:
    - claim:
        id: c_xk4KPJv1taqGwjwcLRVkK3
        subject_person_id: p_Wdd9WrspYiEE72NGMNp75f
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_51Pca5wdng4NB9T2FpYuFX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5bKwbYsaBhXwYXKD11QJRF
          claim_id: c_xk4KPJv1taqGwjwcLRVkK3
          source_id: s_g1q73gKvB6bGzszoP8GtLg
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_g1q73gKvB6bGzszoP8GtLg
            source_type: api_record
            title: 维基数据：王鸿儒（Q15933067）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15933067
            external_identifier: Q15933067
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:26.978Z
            metadata_json: null
        - id: cs_WJD3g5r1TQjJKbqSb7GToZ
          claim_id: c_xk4KPJv1taqGwjwcLRVkK3
          source_id: s_6kSWPjkGQP4kypDPpgbhbH
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_6kSWPjkGQP4kypDPpgbhbH
            source_type: api_record
            title: 维基数据：王可（Q45603634）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45603634
            external_identifier: Q45603634
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:12.193Z
            metadata_json: null
      object_person:
        id: p_51Pca5wdng4NB9T2FpYuFX
        status: active
        display_name: 王可
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_iEEcp8x8imYR5sGc3AiADA
        subject_person_id: p_WdSei9h8Pyy5rewkZCDsYk
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Wdd9WrspYiEE72NGMNp75f
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7fiLyivW6dLtRBMmUc52HJ
          claim_id: c_iEEcp8x8imYR5sGc3AiADA
          source_id: s_g1q73gKvB6bGzszoP8GtLg
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_g1q73gKvB6bGzszoP8GtLg
            source_type: api_record
            title: 维基数据：王鸿儒（Q15933067）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15933067
            external_identifier: Q15933067
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:26.978Z
            metadata_json: null
        - id: cs_NJ2haMVGZPu81DDDJUf64c
          claim_id: c_iEEcp8x8imYR5sGc3AiADA
          source_id: s_bjFw9T2cPPGvXnE3wAqLf9
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_bjFw9T2cPPGvXnE3wAqLf9
            source_type: api_record
            title: 维基数据：吴氏（Q65863384）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65863384
            external_identifier: Q65863384
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:05.625Z
            metadata_json: null
        - id: cs_QQot37A422dqeyezSTL7sf
          claim_id: c_iEEcp8x8imYR5sGc3AiADA
          source_id: s_FJA22kz48wYtYnUG6KKP2H
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：成化二十三年進士登科錄:一卷
          source:
            id: s_FJA22kz48wYtYnUG6KKP2H
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鴻儒（33864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33864&o=json
            external_identifier: CBDB:33864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:55.540Z
            metadata_json: null
      object_person:
        id: p_WdSei9h8Pyy5rewkZCDsYk
        status: active
        display_name: 吴氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王鸿儒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鸿儒（1459年—1519年），史料所见人物。本项目依据《王鸿儒》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1459年 | accepted |
| death.date | 1519年 | accepted |
| name.primary | 王鸿儒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PAQnJKUX1HHCzAwrFTb5md | 王本 | accepted |
| children | p_51Pca5wdng4NB9T2FpYuFX | 王可 | accepted |
| spouses | p_WdSei9h8Pyy5rewkZCDsYk | 吴氏 | accepted |

## 外部来源

- [维基数据：王本（Q45491815）](https://www.wikidata.org/wiki/Q45491815)
- [维基数据：王鸿儒（Q15933067）](https://www.wikidata.org/wiki/Q15933067)
- [维基数据：王可（Q45603634）](https://www.wikidata.org/wiki/Q45603634)
- [维基数据：吴氏（Q65863384）](https://www.wikidata.org/wiki/Q65863384)
- [CBDB 中国历代人物传记资料库：王鴻儒（33864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33864&o=json)
