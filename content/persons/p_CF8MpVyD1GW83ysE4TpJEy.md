---
schema: wang-person/v1
id: p_CF8MpVyD1GW83ysE4TpJEy
status: active
merged_into: null
display_name: 王参
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H52vnWh1TxvF2Kx1QfpYd9
        subject_person_id: p_CF8MpVyD1GW83ysE4TpJEy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王参（卒于916年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175551 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_qp2bcWpFm13823Yg5k4vmC
          claim_id: c_H52vnWh1TxvF2Kx1QfpYd9
          source_id: s_jyDFJJNcM98SohmJuPFAQb
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_jyDFJJNcM98SohmJuPFAQb
            source_type: api_record
            title: 维基数据：王参（Q45666077）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666077
            external_identifier: Q45666077
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:46:15.307Z
            metadata_json: null
        - id: cs_W4ARu7-21nJ2SGYpx6N1ox
          claim_id: c_H52vnWh1TxvF2Kx1QfpYd9
          source_id: s_wyohY2TMzULzFMTcCY7Lp1
          stance: supports
          locator: CBDB:175551
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_wyohY2TMzULzFMTcCY7Lp1
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王參（175551）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175551&o=json
            external_identifier: CBDB:175551
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:46:15.610Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ZGk1NYXdLaorP752mheaAd
        subject_person_id: p_CF8MpVyD1GW83ysE4TpJEy
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 916年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0916-01-01
            latest: 0916-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wBXeErLeVdTXpxhtSQ5SXa
          claim_id: c_ZGk1NYXdLaorP752mheaAd
          source_id: s_jyDFJJNcM98SohmJuPFAQb
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_jyDFJJNcM98SohmJuPFAQb
            source_type: api_record
            title: 维基数据：王参（Q45666077）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666077
            external_identifier: Q45666077
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:46:15.307Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_avR8fHy44AQq9nHzbKQdYw
        subject_person_id: p_CF8MpVyD1GW83ysE4TpJEy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王参
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_EgJ7usfNp73JV9opT8Se33
          claim_id: c_avR8fHy44AQq9nHzbKQdYw
          source_id: s_jyDFJJNcM98SohmJuPFAQb
          stance: supports
          locator: Q45666077
          quotation: null
          interpretation_note: null
          source:
            id: s_jyDFJJNcM98SohmJuPFAQb
            source_type: api_record
            title: 维基数据：王参（Q45666077）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666077
            external_identifier: Q45666077
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:46:15.307Z
            metadata_json: null
        - id: cs_gLrPrxXAhR5uQhAQBsybcG
          claim_id: c_avR8fHy44AQq9nHzbKQdYw
          source_id: s_wyohY2TMzULzFMTcCY7Lp1
          stance: supports
          locator: Q45666077
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3uYjfWX6GXa47UFF3uFnfs
        subject_person_id: p_99Hkm9ELDXXQemujiK4KXn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CF8MpVyD1GW83ysE4TpJEy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_DEgNBxPVSPVXTqSwznzE7U
          claim_id: c_3uYjfWX6GXa47UFF3uFnfs
          source_id: s_QPy4RhEkk6rC686d7jbY6e
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_QPy4RhEkk6rC686d7jbY6e
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王莓（175550）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175550&o=json
            external_identifier: CBDB:175550
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:45:02.682Z
            metadata_json: null
        - id: cs_FZf2AxtUGdBYfMxnt8oCn5
          claim_id: c_3uYjfWX6GXa47UFF3uFnfs
          source_id: s_RzpXCQEuEaM28xpPjkF5iA
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_RzpXCQEuEaM28xpPjkF5iA
            source_type: api_record
            title: 维基数据：王莓（Q45666023）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666023
            external_identifier: Q45666023
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:45:02.530Z
            metadata_json: null
        - id: cs_yQuG1kCUJE3a1fTy7bVMuE
          claim_id: c_3uYjfWX6GXa47UFF3uFnfs
          source_id: s_jyDFJJNcM98SohmJuPFAQb
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_jyDFJJNcM98SohmJuPFAQb
            source_type: api_record
            title: 维基数据：王参（Q45666077）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666077
            external_identifier: Q45666077
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:46:15.307Z
            metadata_json: null
        - id: cs_Sisomoiik9fjjzWiv1BgFC
          claim_id: c_3uYjfWX6GXa47UFF3uFnfs
          source_id: s_wyohY2TMzULzFMTcCY7Lp1
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_wyohY2TMzULzFMTcCY7Lp1
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王參（175551）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175551&o=json
            external_identifier: CBDB:175551
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:46:15.610Z
            metadata_json: null
      object_person:
        id: p_99Hkm9ELDXXQemujiK4KXn
        status: active
        display_name: 王莓
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王参

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王参（卒于916年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175551 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 916年 | accepted |
| name.primary | 王参 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_99Hkm9ELDXXQemujiK4KXn | 王莓 | accepted |

## 外部来源

- [维基数据：王参（Q45666077）](https://www.wikidata.org/wiki/Q45666077)
- [维基数据：王莓（Q45666023）](https://www.wikidata.org/wiki/Q45666023)
- [CBDB 中国历代人物传记资料库：王參（175551）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175551&o=json)
- [CBDB 中国历代人物传记资料库：王莓（175550）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175550&o=json)
