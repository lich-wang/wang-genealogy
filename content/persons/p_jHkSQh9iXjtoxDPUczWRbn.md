---
schema: wang-person/v1
id: p_jHkSQh9iXjtoxDPUczWRbn
status: active
merged_into: null
display_name: 王损
cbdb_id: 175552
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UMTS5c9hVx8p36Pi1u1mYX
        subject_person_id: p_jHkSQh9iXjtoxDPUczWRbn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王损（卒于916年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175552）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_En3JoGNWyGSGWPR9p779Mm
          claim_id: c_UMTS5c9hVx8p36Pi1u1mYX
          source_id: s_BrM3ADtYTrX5NQp9X83fLD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_BrM3ADtYTrX5NQp9X83fLD
            source_type: api_record
            title: 维基数据：王损（Q45666130）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666130
            external_identifier: Q45666130
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:46:17.202Z
            metadata_json: null
        - id: cs_qJ7k0RVeN0AXD5JhvZP62A
          claim_id: c_UMTS5c9hVx8p36Pi1u1mYX
          source_id: s_7xv3SWptPnep1Lz3B7tkat
          stance: supports
          locator: CBDB:175552
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7xv3SWptPnep1Lz3B7tkat
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王損（175552）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175552&o=json
            external_identifier: CBDB:175552
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:46:17.353Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_VCk1BQApSqCH4oHF1yX3XF
        subject_person_id: p_jHkSQh9iXjtoxDPUczWRbn
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
        - id: cs_h2xbBZLVRpoY2VXmf7XhC9
          claim_id: c_VCk1BQApSqCH4oHF1yX3XF
          source_id: s_BrM3ADtYTrX5NQp9X83fLD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_BrM3ADtYTrX5NQp9X83fLD
            source_type: api_record
            title: 维基数据：王损（Q45666130）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666130
            external_identifier: Q45666130
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:46:17.202Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fE6FG5jSzXr5xG33mr3PBM
        subject_person_id: p_jHkSQh9iXjtoxDPUczWRbn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王损
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CTFRrFat9Li9A6GpRYweMv
          claim_id: c_fE6FG5jSzXr5xG33mr3PBM
          source_id: s_BrM3ADtYTrX5NQp9X83fLD
          stance: supports
          locator: Q45666130
          quotation: null
          interpretation_note: null
          source:
            id: s_BrM3ADtYTrX5NQp9X83fLD
            source_type: api_record
            title: 维基数据：王损（Q45666130）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666130
            external_identifier: Q45666130
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:46:17.202Z
            metadata_json: null
        - id: cs_RZozXXPh6jMa92scn98zyL
          claim_id: c_fE6FG5jSzXr5xG33mr3PBM
          source_id: s_7xv3SWptPnep1Lz3B7tkat
          stance: supports
          locator: Q45666130
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_bZMEQQvgU6SqJkJRGjLZhT
        subject_person_id: p_99Hkm9ELDXXQemujiK4KXn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jHkSQh9iXjtoxDPUczWRbn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_43LqDABEKJ9zc2sRorRjEK
          claim_id: c_bZMEQQvgU6SqJkJRGjLZhT
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
        - id: cs_CLjzqYLQ1WV5qq7jc55RPN
          claim_id: c_bZMEQQvgU6SqJkJRGjLZhT
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
        - id: cs_dHGUdwjh35fqBi29cNrJUB
          claim_id: c_bZMEQQvgU6SqJkJRGjLZhT
          source_id: s_BrM3ADtYTrX5NQp9X83fLD
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_BrM3ADtYTrX5NQp9X83fLD
            source_type: api_record
            title: 维基数据：王损（Q45666130）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666130
            external_identifier: Q45666130
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:46:17.202Z
            metadata_json: null
        - id: cs_BGWnfVYrf5KXYHXt3wi4PE
          claim_id: c_bZMEQQvgU6SqJkJRGjLZhT
          source_id: s_7xv3SWptPnep1Lz3B7tkat
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7xv3SWptPnep1Lz3B7tkat
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王損（175552）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175552&o=json
            external_identifier: CBDB:175552
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:46:17.353Z
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

# 王损

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王损（卒于916年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175552） | accepted |
| death.date | 916年 | accepted |
| name.primary | 王损 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_99Hkm9ELDXXQemujiK4KXn | 王莓 | accepted |

## 外部来源

- [维基数据：王莓（Q45666023）](https://www.wikidata.org/wiki/Q45666023)
- [维基数据：王损（Q45666130）](https://www.wikidata.org/wiki/Q45666130)
- [CBDB 中国历代人物传记资料库：王莓（175550）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175550&o=json)
- [CBDB 中国历代人物传记资料库：王損（175552）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175552&o=json)
