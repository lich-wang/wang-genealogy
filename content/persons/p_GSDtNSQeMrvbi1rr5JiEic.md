---
schema: wang-person/v1
id: p_GSDtNSQeMrvbi1rr5JiEic
status: active
merged_into: null
display_name: 王台老
cbdb_id: 175403
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K6hCJ1u1zytTfrKe2ikDd3
        subject_person_id: p_GSDtNSQeMrvbi1rr5JiEic
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王台老（卒于894年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175403 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_rAbEpHZ6RMBiQxrYMoNSqr
          claim_id: c_K6hCJ1u1zytTfrKe2ikDd3
          source_id: s_5MufBdkkvbgiDWNRGUo3hP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_5MufBdkkvbgiDWNRGUo3hP
            source_type: api_record
            title: 维基数据：王台老（Q45657572）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657572
            external_identifier: Q45657572
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:03.116Z
            metadata_json: null
        - id: cs_ySgLDfayGtASwO4f7hY4ug
          claim_id: c_K6hCJ1u1zytTfrKe2ikDd3
          source_id: s_8wrfeNR8FvM2pvLatLd9Tc
          stance: supports
          locator: CBDB:175403
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_8wrfeNR8FvM2pvLatLd9Tc
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王台老（175403）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175403&o=json
            external_identifier: CBDB:175403
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:03.434Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_wjiBX6RDf78ERH3LZytJGV
        subject_person_id: p_GSDtNSQeMrvbi1rr5JiEic
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 894年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0894-01-01
            latest: 0894-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KWXEEjXsJ4agP4tGU8Ccnt
          claim_id: c_wjiBX6RDf78ERH3LZytJGV
          source_id: s_5MufBdkkvbgiDWNRGUo3hP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_5MufBdkkvbgiDWNRGUo3hP
            source_type: api_record
            title: 维基数据：王台老（Q45657572）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657572
            external_identifier: Q45657572
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:03.116Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_jM8qEdy1uNwiK7xrPjXDS1
        subject_person_id: p_GSDtNSQeMrvbi1rr5JiEic
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王台老
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7vHjVX7WTN2dawai5GNKRT
          claim_id: c_jM8qEdy1uNwiK7xrPjXDS1
          source_id: s_8wrfeNR8FvM2pvLatLd9Tc
          stance: supports
          locator: Q45657572
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_C88TPDbFNvLQqyEP4rAwkT
          claim_id: c_jM8qEdy1uNwiK7xrPjXDS1
          source_id: s_5MufBdkkvbgiDWNRGUo3hP
          stance: supports
          locator: Q45657572
          quotation: null
          interpretation_note: null
          source:
            id: s_5MufBdkkvbgiDWNRGUo3hP
            source_type: api_record
            title: 维基数据：王台老（Q45657572）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657572
            external_identifier: Q45657572
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:03.116Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VogzP66N3mGo2TNiBETSDY
        subject_person_id: p_dyB4AcJo45o8QK4CH5LKAB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GSDtNSQeMrvbi1rr5JiEic
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_6YyC5XKir6Mkp1HdmYqkiz
          claim_id: c_VogzP66N3mGo2TNiBETSDY
          source_id: s_deK5HymQLoE99RzxJ9Av2d
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_deK5HymQLoE99RzxJ9Av2d
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王建子（175402）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175402&o=json
            external_identifier: CBDB:175402
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:57.196Z
            metadata_json: null
        - id: cs_M8yqrN2jbs48jABNYSqwEj
          claim_id: c_VogzP66N3mGo2TNiBETSDY
          source_id: s_7U8QcEi8d8HSFNuF5rFPtW
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_7U8QcEi8d8HSFNuF5rFPtW
            source_type: api_record
            title: 维基数据：王建子（Q45657513）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657513
            external_identifier: Q45657513
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:57.050Z
            metadata_json: null
        - id: cs_hk1Xi59z69H1AvGDkLWTTN
          claim_id: c_VogzP66N3mGo2TNiBETSDY
          source_id: s_5MufBdkkvbgiDWNRGUo3hP
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_5MufBdkkvbgiDWNRGUo3hP
            source_type: api_record
            title: 维基数据：王台老（Q45657572）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657572
            external_identifier: Q45657572
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:03.116Z
            metadata_json: null
        - id: cs_UvTW5krmqbBHZvZUskKrcR
          claim_id: c_VogzP66N3mGo2TNiBETSDY
          source_id: s_8wrfeNR8FvM2pvLatLd9Tc
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_8wrfeNR8FvM2pvLatLd9Tc
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王台老（175403）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175403&o=json
            external_identifier: CBDB:175403
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:03.434Z
            metadata_json: null
      object_person:
        id: p_dyB4AcJo45o8QK4CH5LKAB
        status: active
        display_name: 王建子
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王台老

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王台老（卒于894年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175403 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 894年 | accepted |
| name.primary | 王台老 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dyB4AcJo45o8QK4CH5LKAB | 王建子 | accepted |

## 外部来源

- [维基数据：王建子（Q45657513）](https://www.wikidata.org/wiki/Q45657513)
- [维基数据：王台老（Q45657572）](https://www.wikidata.org/wiki/Q45657572)
- [CBDB 中国历代人物传记资料库：王建子（175402）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175402&o=json)
- [CBDB 中国历代人物传记资料库：王台老（175403）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175403&o=json)
