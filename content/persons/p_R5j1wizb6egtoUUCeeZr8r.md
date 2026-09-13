---
schema: wang-person/v1
id: p_R5j1wizb6egtoUUCeeZr8r
status: active
merged_into: null
display_name: 王恪
cbdb_id: 175516
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1RTLPvr3ja32QbSxULWSP4
        subject_person_id: p_R5j1wizb6egtoUUCeeZr8r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恪（卒于857年），唐人物。籍贯咸陽，曾任參軍。（中国历代人物传记资料库 CBDB 175516）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_Usdz1pkuge4ci5AKD66kw9
          claim_id: c_1RTLPvr3ja32QbSxULWSP4
          source_id: s_w63DtpVDi8Fi4Lp3RfWyDf
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_w63DtpVDi8Fi4Lp3RfWyDf
            source_type: api_record
            title: 维基数据：王恪（Q45664213）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664213
            external_identifier: Q45664213
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:51.856Z
            metadata_json: null
        - id: cs_P2qVMFqm1QsXmKXDcl_qZN
          claim_id: c_1RTLPvr3ja32QbSxULWSP4
          source_id: s_cxei3uZQoL5YF4AMexHT9E
          stance: supports
          locator: CBDB:175516
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_cxei3uZQoL5YF4AMexHT9E
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王恪（175516）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175516&o=json
            external_identifier: CBDB:175516
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:52.009Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_nGZoCgq5JNPqu3Ev2GBKTu
        subject_person_id: p_R5j1wizb6egtoUUCeeZr8r
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
        - id: cs_EGtaX7VQZ4zaySKTVayU3R
          claim_id: c_nGZoCgq5JNPqu3Ev2GBKTu
          source_id: s_w63DtpVDi8Fi4Lp3RfWyDf
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_w63DtpVDi8Fi4Lp3RfWyDf
            source_type: api_record
            title: 维基数据：王恪（Q45664213）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664213
            external_identifier: Q45664213
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:51.856Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GcyYjMMDRxv9DN9RanvWEn
        subject_person_id: p_R5j1wizb6egtoUUCeeZr8r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恪
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3PAPHyLg7iSpwUS7kqmrNB
          claim_id: c_GcyYjMMDRxv9DN9RanvWEn
          source_id: s_w63DtpVDi8Fi4Lp3RfWyDf
          stance: supports
          locator: Q45664213
          quotation: null
          interpretation_note: null
          source:
            id: s_w63DtpVDi8Fi4Lp3RfWyDf
            source_type: api_record
            title: 维基数据：王恪（Q45664213）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664213
            external_identifier: Q45664213
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:51.856Z
            metadata_json: null
        - id: cs_epN5gmGqsX2vuiLNNREJ1V
          claim_id: c_GcyYjMMDRxv9DN9RanvWEn
          source_id: s_cxei3uZQoL5YF4AMexHT9E
          stance: supports
          locator: Q45664213
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_aWqcG99x1Q37Lh44hjH2g1
        subject_person_id: p_Ang9eiGuniGWoebR7bHwTe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_R5j1wizb6egtoUUCeeZr8r
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_E99Xx8abAQaXaXiyHukHAx
          claim_id: c_aWqcG99x1Q37Lh44hjH2g1
          source_id: s_VCd9i2L3UPKSt61BT7yQco
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_VCd9i2L3UPKSt61BT7yQco
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源植（175513）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175513&o=json
            external_identifier: CBDB:175513
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:33.275Z
            metadata_json: null
        - id: cs_jGnWPsE8fZyFCLP1GVEdsC
          claim_id: c_aWqcG99x1Q37Lh44hjH2g1
          source_id: s_QpGCg8A8WLovPFGsSEKdz8
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_QpGCg8A8WLovPFGsSEKdz8
            source_type: api_record
            title: 维基数据：王源植（Q45664050）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664050
            external_identifier: Q45664050
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:33.132Z
            metadata_json: null
        - id: cs_ZnLARAZ2wrt5YEkwd4JfJG
          claim_id: c_aWqcG99x1Q37Lh44hjH2g1
          source_id: s_w63DtpVDi8Fi4Lp3RfWyDf
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_w63DtpVDi8Fi4Lp3RfWyDf
            source_type: api_record
            title: 维基数据：王恪（Q45664213）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664213
            external_identifier: Q45664213
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:51.856Z
            metadata_json: null
        - id: cs_ZCkzeuLfmrCsT1iqwQP8L2
          claim_id: c_aWqcG99x1Q37Lh44hjH2g1
          source_id: s_cxei3uZQoL5YF4AMexHT9E
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_cxei3uZQoL5YF4AMexHT9E
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王恪（175516）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175516&o=json
            external_identifier: CBDB:175516
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:52.009Z
            metadata_json: null
      object_person:
        id: p_Ang9eiGuniGWoebR7bHwTe
        status: active
        display_name: 王源植
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王恪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王恪（卒于857年），唐人物。籍贯咸陽，曾任參軍。（中国历代人物传记资料库 CBDB 175516） | accepted |
| death.date | 857年 | accepted |
| name.primary | 王恪 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Ang9eiGuniGWoebR7bHwTe | 王源植 | accepted |

## 外部来源

- [维基数据：王恪（Q45664213）](https://www.wikidata.org/wiki/Q45664213)
- [维基数据：王源植（Q45664050）](https://www.wikidata.org/wiki/Q45664050)
- [CBDB 中国历代人物传记资料库：王恪（175516）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175516&o=json)
- [CBDB 中国历代人物传记资料库：王源植（175513）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175513&o=json)
