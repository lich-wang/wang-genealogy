---
schema: wang-person/v1
id: p_pRHuzHP7LP57EjcGVi8LER
status: active
merged_into: null
display_name: 王宽
cbdb_id: 175627
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z7L5o69PQGZEQaLKTRzAa9
        subject_person_id: p_pRHuzHP7LP57EjcGVi8LER
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宽（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175627 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_AGR2d2e7Z3sVmCzZnBWjw9
          claim_id: c_z7L5o69PQGZEQaLKTRzAa9
          source_id: s_hf4Q9ztJJp4QWox7LnXALW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_hf4Q9ztJJp4QWox7LnXALW
            source_type: api_record
            title: 维基数据：王宽（Q45669877）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669877
            external_identifier: Q45669877
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:47.113Z
            metadata_json: null
        - id: cs_Wnws4EL4-9jmnbi-Vz31tJ
          claim_id: c_z7L5o69PQGZEQaLKTRzAa9
          source_id: s_USn8sBuvCM1w3dvyHmCUND
          stance: supports
          locator: CBDB:175627
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_USn8sBuvCM1w3dvyHmCUND
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王寬（175627）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175627&o=json
            external_identifier: CBDB:175627
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:47.271Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_6ry2ZCDb8HnbFVACwKfL6C
        subject_person_id: p_pRHuzHP7LP57EjcGVi8LER
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 820年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0820-01-01
            latest: 0820-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uFaNku6fdAZc9rwDDLFRfo
          claim_id: c_6ry2ZCDb8HnbFVACwKfL6C
          source_id: s_hf4Q9ztJJp4QWox7LnXALW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_hf4Q9ztJJp4QWox7LnXALW
            source_type: api_record
            title: 维基数据：王宽（Q45669877）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669877
            external_identifier: Q45669877
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:47.113Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ne7pTQnwGDz9U9oAKpYvWz
        subject_person_id: p_pRHuzHP7LP57EjcGVi8LER
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宽
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KG3DS8yJUMdaHtFgV1UpEs
          claim_id: c_ne7pTQnwGDz9U9oAKpYvWz
          source_id: s_hf4Q9ztJJp4QWox7LnXALW
          stance: supports
          locator: Q45669877
          quotation: null
          interpretation_note: null
          source:
            id: s_hf4Q9ztJJp4QWox7LnXALW
            source_type: api_record
            title: 维基数据：王宽（Q45669877）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669877
            external_identifier: Q45669877
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:47.113Z
            metadata_json: null
        - id: cs_imdDtrukZX58UK2MqASnwu
          claim_id: c_ne7pTQnwGDz9U9oAKpYvWz
          source_id: s_USn8sBuvCM1w3dvyHmCUND
          stance: supports
          locator: Q45669877
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yRCrNtt4dVKUgb39mdWmdC
        subject_person_id: p_23foehJQLDEs5RDFCrfjor
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pRHuzHP7LP57EjcGVi8LER
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_1HHovmBSdALkU3qCVwMgT3
          claim_id: c_yRCrNtt4dVKUgb39mdWmdC
          source_id: s_7LD1gMiGQkjeJwpT5zAGPD
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7LD1gMiGQkjeJwpT5zAGPD
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王和友（175621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175621&o=json
            external_identifier: CBDB:175621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:52.517Z
            metadata_json: null
        - id: cs_VJt2etNSmHiSUE5bzXGgQP
          claim_id: c_yRCrNtt4dVKUgb39mdWmdC
          source_id: s_vqrPHSCb5pHgvC2azHnXzg
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_vqrPHSCb5pHgvC2azHnXzg
            source_type: api_record
            title: 维基数据：王和友（Q45669592）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669592
            external_identifier: Q45669592
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:52.356Z
            metadata_json: null
        - id: cs_y5q3StJBmXjATnAY99bVMg
          claim_id: c_yRCrNtt4dVKUgb39mdWmdC
          source_id: s_hf4Q9ztJJp4QWox7LnXALW
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_hf4Q9ztJJp4QWox7LnXALW
            source_type: api_record
            title: 维基数据：王宽（Q45669877）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669877
            external_identifier: Q45669877
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:47.113Z
            metadata_json: null
        - id: cs_ZLGkwKSm3pREoduaALBxyA
          claim_id: c_yRCrNtt4dVKUgb39mdWmdC
          source_id: s_USn8sBuvCM1w3dvyHmCUND
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_USn8sBuvCM1w3dvyHmCUND
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王寬（175627）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175627&o=json
            external_identifier: CBDB:175627
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:47.271Z
            metadata_json: null
      object_person:
        id: p_23foehJQLDEs5RDFCrfjor
        status: active
        display_name: 王和友
        merged_into_person_id: null
  children:
    - claim:
        id: c_VXSPzMKXHRSiwB5bL2z9gT
        subject_person_id: p_pRHuzHP7LP57EjcGVi8LER
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8myG3p4WJKvxQYBhGkT12V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ApiUXbU426U61E1UgSuhee
          claim_id: c_VXSPzMKXHRSiwB5bL2z9gT
          source_id: s_hf4Q9ztJJp4QWox7LnXALW
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_hf4Q9ztJJp4QWox7LnXALW
            source_type: api_record
            title: 维基数据：王宽（Q45669877）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669877
            external_identifier: Q45669877
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:47.113Z
            metadata_json: null
        - id: cs_yTzGEd1BTGBfpP3GVAh2Mr
          claim_id: c_VXSPzMKXHRSiwB5bL2z9gT
          source_id: s_USn8sBuvCM1w3dvyHmCUND
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_USn8sBuvCM1w3dvyHmCUND
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王寬（175627）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175627&o=json
            external_identifier: CBDB:175627
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:47.271Z
            metadata_json: null
        - id: cs_74NRrWRfJ5BYhjP4mKL2nN
          claim_id: c_VXSPzMKXHRSiwB5bL2z9gT
          source_id: s_LCFqGPGJMp1duDMdvn4AQ6
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_LCFqGPGJMp1duDMdvn4AQ6
            source_type: api_record
            title: 维基数据：王相老（Q45669924）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669924
            external_identifier: Q45669924
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:07.663Z
            metadata_json: null
        - id: cs_7NR8RMoj8igku1KXrDM747
          claim_id: c_VXSPzMKXHRSiwB5bL2z9gT
          source_id: s_gL3oGs7rHhd14uc48kM6G9
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_gL3oGs7rHhd14uc48kM6G9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王相老（175628）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175628&o=json
            external_identifier: CBDB:175628
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:07.829Z
            metadata_json: null
      object_person:
        id: p_8myG3p4WJKvxQYBhGkT12V
        status: active
        display_name: 王相老
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宽（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175627 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 820年 | accepted |
| name.primary | 王宽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_23foehJQLDEs5RDFCrfjor | 王和友 | accepted |
| children | p_8myG3p4WJKvxQYBhGkT12V | 王相老 | accepted |

## 外部来源

- [维基数据：王和友（Q45669592）](https://www.wikidata.org/wiki/Q45669592)
- [维基数据：王宽（Q45669877）](https://www.wikidata.org/wiki/Q45669877)
- [维基数据：王相老（Q45669924）](https://www.wikidata.org/wiki/Q45669924)
- [CBDB 中国历代人物传记资料库：王和友（175621）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175621&o=json)
- [CBDB 中国历代人物传记资料库：王寬（175627）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175627&o=json)
- [CBDB 中国历代人物传记资料库：王相老（175628）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175628&o=json)
