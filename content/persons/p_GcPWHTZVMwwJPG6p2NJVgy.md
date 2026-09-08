---
schema: wang-person/v1
id: p_GcPWHTZVMwwJPG6p2NJVgy
status: active
merged_into: null
display_name: 王贽
cbdb_id: 175496
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9S2fcZn4HW5TRUACMDz9oF
        subject_person_id: p_GcPWHTZVMwwJPG6p2NJVgy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王贽（卒于857年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175496 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_zrcX1rbqpx12K2bMvy2o2Z
          claim_id: c_9S2fcZn4HW5TRUACMDz9oF
          source_id: s_CeGCxyGckf337sWReWKutS
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_CeGCxyGckf337sWReWKutS
            source_type: api_record
            title: 维基数据：王贽（Q45663095）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663095
            external_identifier: Q45663095
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:50.064Z
            metadata_json: null
        - id: cs_nBmh9TWdL-cA0Zbm2Djsfe
          claim_id: c_9S2fcZn4HW5TRUACMDz9oF
          source_id: s_qEBkRAgYM9Wsmbr1wGFeb7
          stance: supports
          locator: CBDB:175496
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_qEBkRAgYM9Wsmbr1wGFeb7
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王贄（175496）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175496&o=json
            external_identifier: CBDB:175496
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:50.222Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ekJj6bNQGzQ4TEqfisdXFa
        subject_person_id: p_GcPWHTZVMwwJPG6p2NJVgy
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 857年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0857-01-01
            latest: 0857-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2M9djz1W1rTyVVxchGCkH6
          claim_id: c_ekJj6bNQGzQ4TEqfisdXFa
          source_id: s_CeGCxyGckf337sWReWKutS
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_CeGCxyGckf337sWReWKutS
            source_type: api_record
            title: 维基数据：王贽（Q45663095）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663095
            external_identifier: Q45663095
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:50.064Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Gz6foaaaRz2SiBCHNCzde6
        subject_person_id: p_GcPWHTZVMwwJPG6p2NJVgy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王贽
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BPADjZqMRDKzSBMu4MxajC
          claim_id: c_Gz6foaaaRz2SiBCHNCzde6
          source_id: s_CeGCxyGckf337sWReWKutS
          stance: supports
          locator: Q45663095
          quotation: null
          interpretation_note: null
          source:
            id: s_CeGCxyGckf337sWReWKutS
            source_type: api_record
            title: 维基数据：王贽（Q45663095）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663095
            external_identifier: Q45663095
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:50.064Z
            metadata_json: null
        - id: cs_Yb8FqiJexHHbuNJNc6rA3F
          claim_id: c_Gz6foaaaRz2SiBCHNCzde6
          source_id: s_qEBkRAgYM9Wsmbr1wGFeb7
          stance: supports
          locator: Q45663095
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_AvWbiuqx3rwqTEusj39D5B
        subject_person_id: p_SDFpyQ9WQCR839CKSQL9E1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GcPWHTZVMwwJPG6p2NJVgy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ScAr17es8Kc8HqS2aY9Aj5
          claim_id: c_AvWbiuqx3rwqTEusj39D5B
          source_id: s_CC8cxfJwpULd6yy84PKXh5
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_CC8cxfJwpULd6yy84PKXh5
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王魯卿（175492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175492&o=json
            external_identifier: CBDB:175492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:31.602Z
            metadata_json: null
        - id: cs_tqYPknqJnCdbPLCzHQTKEb
          claim_id: c_AvWbiuqx3rwqTEusj39D5B
          source_id: s_xzHUN5MYJEcaQpwBnKkrAA
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_xzHUN5MYJEcaQpwBnKkrAA
            source_type: api_record
            title: 维基数据：王鲁卿（Q45662864）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662864
            external_identifier: Q45662864
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:31.447Z
            metadata_json: null
        - id: cs_tfmF9jxEjJD3L8VUveisob
          claim_id: c_AvWbiuqx3rwqTEusj39D5B
          source_id: s_CeGCxyGckf337sWReWKutS
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_CeGCxyGckf337sWReWKutS
            source_type: api_record
            title: 维基数据：王贽（Q45663095）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663095
            external_identifier: Q45663095
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:50.064Z
            metadata_json: null
        - id: cs_2tZmei3X33Zh965nKPiVwL
          claim_id: c_AvWbiuqx3rwqTEusj39D5B
          source_id: s_qEBkRAgYM9Wsmbr1wGFeb7
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_qEBkRAgYM9Wsmbr1wGFeb7
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王贄（175496）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175496&o=json
            external_identifier: CBDB:175496
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:50.222Z
            metadata_json: null
      object_person:
        id: p_SDFpyQ9WQCR839CKSQL9E1
        status: active
        display_name: 王鲁卿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王贽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王贽（卒于857年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175496 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 857年 | accepted |
| name.primary | 王贽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SDFpyQ9WQCR839CKSQL9E1 | 王鲁卿 | accepted |

## 外部来源

- [维基数据：王鲁卿（Q45662864）](https://www.wikidata.org/wiki/Q45662864)
- [维基数据：王贽（Q45663095）](https://www.wikidata.org/wiki/Q45663095)
- [CBDB 中国历代人物传记资料库：王魯卿（175492）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175492&o=json)
- [CBDB 中国历代人物传记资料库：王贄（175496）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175496&o=json)
