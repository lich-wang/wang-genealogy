---
schema: wang-person/v1
id: p_WraTkBN5C4QZUftfcAFUgW
status: active
merged_into: null
display_name: 王逷
cbdb_id: 175441
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wjVbEENDsUs7yPhvP5AdvX
        subject_person_id: p_WraTkBN5C4QZUftfcAFUgW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逷（卒于857年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任令。中国历代人物传记资料库（CBDB）以人物编号 175441 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_KNTqbd85NFFb7M3urFJH8n
          claim_id: c_wjVbEENDsUs7yPhvP5AdvX
          source_id: s_52KNN14n2Xx8Po1X696bwZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_52KNN14n2Xx8Po1X696bwZ
            source_type: api_record
            title: 维基数据：王逷（Q45659831）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659831
            external_identifier: Q45659831
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:58.711Z
            metadata_json: null
        - id: cs_XlqXBoZ9oYvdmsf50ogx53
          claim_id: c_wjVbEENDsUs7yPhvP5AdvX
          source_id: s_8j4ztgmttyK1yniG3WtRWN
          stance: supports
          locator: CBDB:175441
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_8j4ztgmttyK1yniG3WtRWN
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王逷（175441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175441&o=json
            external_identifier: CBDB:175441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:58.855Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_pHEVbJrxLpM1u6xt5Uh6ZC
        subject_person_id: p_WraTkBN5C4QZUftfcAFUgW
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
        - id: cs_LjsXoe6aGac3NF8PWKy1Z4
          claim_id: c_pHEVbJrxLpM1u6xt5Uh6ZC
          source_id: s_52KNN14n2Xx8Po1X696bwZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_52KNN14n2Xx8Po1X696bwZ
            source_type: api_record
            title: 维基数据：王逷（Q45659831）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659831
            external_identifier: Q45659831
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:58.711Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_oiaxsMRdCr1yqiPTo4oCRG
        subject_person_id: p_WraTkBN5C4QZUftfcAFUgW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逷
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Yh8QLUJGpWD3Xs6DaooD6J
          claim_id: c_oiaxsMRdCr1yqiPTo4oCRG
          source_id: s_52KNN14n2Xx8Po1X696bwZ
          stance: supports
          locator: Q45659831
          quotation: null
          interpretation_note: null
          source:
            id: s_52KNN14n2Xx8Po1X696bwZ
            source_type: api_record
            title: 维基数据：王逷（Q45659831）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659831
            external_identifier: Q45659831
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:58.711Z
            metadata_json: null
        - id: cs_pHHSJQqbzPexxmzd1JkPeL
          claim_id: c_oiaxsMRdCr1yqiPTo4oCRG
          source_id: s_8j4ztgmttyK1yniG3WtRWN
          stance: supports
          locator: Q45659831
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1oyLGFHixG1ftCTHRsLc1Z
        subject_person_id: p_zkLScucBk4JK57QATK1P5y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WraTkBN5C4QZUftfcAFUgW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_gLwGA5BY3XAeX55qzMYPpP
          claim_id: c_1oyLGFHixG1ftCTHRsLc1Z
          source_id: s_fmTBFRP6UZ4fK1GZjEfVZU
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_fmTBFRP6UZ4fK1GZjEfVZU
            source_type: api_record
            title: 维基数据：王添（Q45657810）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657810
            external_identifier: Q45657810
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:24.425Z
            metadata_json: null
        - id: cs_gM79W95GAvuL6qVWY5aEh1
          claim_id: c_1oyLGFHixG1ftCTHRsLc1Z
          source_id: s_z74bZ49AQL7hc4CKyB5mGw
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_z74bZ49AQL7hc4CKyB5mGw
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王添（175407）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175407&o=json
            external_identifier: CBDB:175407
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:24.586Z
            metadata_json: null
        - id: cs_e9dk6rVYjt9G2k2AWaB5t2
          claim_id: c_1oyLGFHixG1ftCTHRsLc1Z
          source_id: s_52KNN14n2Xx8Po1X696bwZ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_52KNN14n2Xx8Po1X696bwZ
            source_type: api_record
            title: 维基数据：王逷（Q45659831）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659831
            external_identifier: Q45659831
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:58.711Z
            metadata_json: null
        - id: cs_K5Fhcigy1X5A1eiuxtUf5F
          claim_id: c_1oyLGFHixG1ftCTHRsLc1Z
          source_id: s_8j4ztgmttyK1yniG3WtRWN
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_8j4ztgmttyK1yniG3WtRWN
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王逷（175441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175441&o=json
            external_identifier: CBDB:175441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:58.855Z
            metadata_json: null
      object_person:
        id: p_zkLScucBk4JK57QATK1P5y
        status: active
        display_name: 王添
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王逷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王逷（卒于857年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任令。中国历代人物传记资料库（CBDB）以人物编号 175441 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 857年 | accepted |
| name.primary | 王逷 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zkLScucBk4JK57QATK1P5y | 王添 | accepted |

## 外部来源

- [维基数据：王逷（Q45659831）](https://www.wikidata.org/wiki/Q45659831)
- [维基数据：王添（Q45657810）](https://www.wikidata.org/wiki/Q45657810)
- [CBDB 中国历代人物传记资料库：王逷（175441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175441&o=json)
- [CBDB 中国历代人物传记资料库：王添（175407）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175407&o=json)
