---
schema: wang-person/v1
id: p_MKMdTsEPQpxH1HJth5KaAp
status: active
merged_into: null
display_name: 王觉
cbdb_id: 175626
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kkzoFYiPUvA1QCyuZF7eZm
        subject_person_id: p_MKMdTsEPQpxH1HJth5KaAp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觉（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175626 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ptCouddru5ALYwTWwu2Lx9
          claim_id: c_kkzoFYiPUvA1QCyuZF7eZm
          source_id: s_jhxafNuz9qqd1GX4MM6NqH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_jhxafNuz9qqd1GX4MM6NqH
            source_type: api_record
            title: 维基数据：王觉（Q45669828）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669828
            external_identifier: Q45669828
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:47.112Z
            metadata_json: null
        - id: cs_i7tL_BJpsTAWg532_746TF
          claim_id: c_kkzoFYiPUvA1QCyuZF7eZm
          source_id: s_ZCvz5UmDswKwXyua42MdPC
          stance: supports
          locator: CBDB:175626
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ZCvz5UmDswKwXyua42MdPC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王覺（175626）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175626&o=json
            external_identifier: CBDB:175626
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:47.282Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_P9Ru1csGKnfYeJ6dVYuuKk
        subject_person_id: p_MKMdTsEPQpxH1HJth5KaAp
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
        - id: cs_7i2zHyXGYN4p6wSesoHGWC
          claim_id: c_P9Ru1csGKnfYeJ6dVYuuKk
          source_id: s_jhxafNuz9qqd1GX4MM6NqH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_jhxafNuz9qqd1GX4MM6NqH
            source_type: api_record
            title: 维基数据：王觉（Q45669828）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669828
            external_identifier: Q45669828
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:47.112Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AFVJy8ysGs7AUiN5uwDqjn
        subject_person_id: p_MKMdTsEPQpxH1HJth5KaAp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觉
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2NPKYBPfJm4Fg7L8v2isHm
          claim_id: c_AFVJy8ysGs7AUiN5uwDqjn
          source_id: s_jhxafNuz9qqd1GX4MM6NqH
          stance: supports
          locator: Q45669828
          quotation: null
          interpretation_note: null
          source:
            id: s_jhxafNuz9qqd1GX4MM6NqH
            source_type: api_record
            title: 维基数据：王觉（Q45669828）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669828
            external_identifier: Q45669828
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:47.112Z
            metadata_json: null
        - id: cs_gFbwzC8V9Tmt3bN3L3GL2Z
          claim_id: c_AFVJy8ysGs7AUiN5uwDqjn
          source_id: s_ZCvz5UmDswKwXyua42MdPC
          stance: supports
          locator: Q45669828
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QzDxmKNB39jLsRjyh6Vz28
        subject_person_id: p_23foehJQLDEs5RDFCrfjor
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MKMdTsEPQpxH1HJth5KaAp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_6NQ7MMT7d22Nt8D5iYfURu
          claim_id: c_QzDxmKNB39jLsRjyh6Vz28
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
        - id: cs_Myc5qW58qKRP8M1Yajt9CM
          claim_id: c_QzDxmKNB39jLsRjyh6Vz28
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
        - id: cs_2mYx592X3LVMh15AUNy7fQ
          claim_id: c_QzDxmKNB39jLsRjyh6Vz28
          source_id: s_jhxafNuz9qqd1GX4MM6NqH
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_jhxafNuz9qqd1GX4MM6NqH
            source_type: api_record
            title: 维基数据：王觉（Q45669828）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669828
            external_identifier: Q45669828
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:47.112Z
            metadata_json: null
        - id: cs_SNGoPS5MTKq8RP9mwtShfy
          claim_id: c_QzDxmKNB39jLsRjyh6Vz28
          source_id: s_ZCvz5UmDswKwXyua42MdPC
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_ZCvz5UmDswKwXyua42MdPC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王覺（175626）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175626&o=json
            external_identifier: CBDB:175626
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:47.282Z
            metadata_json: null
      object_person:
        id: p_23foehJQLDEs5RDFCrfjor
        status: active
        display_name: 王和友
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王觉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王觉（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175626 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 820年 | accepted |
| name.primary | 王觉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_23foehJQLDEs5RDFCrfjor | 王和友 | accepted |

## 外部来源

- [维基数据：王和友（Q45669592）](https://www.wikidata.org/wiki/Q45669592)
- [维基数据：王觉（Q45669828）](https://www.wikidata.org/wiki/Q45669828)
- [CBDB 中国历代人物传记资料库：王和友（175621）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175621&o=json)
- [CBDB 中国历代人物传记资料库：王覺（175626）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175626&o=json)
