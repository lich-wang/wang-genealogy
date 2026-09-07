---
schema: wang-person/v1
id: p_gg1UgtGeCXPsZbGbRxxciL
status: active
merged_into: null
display_name: 王源采
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zfiCN3GEw3CELfYGrgZdA2
        subject_person_id: p_gg1UgtGeCXPsZbGbRxxciL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源采（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175596 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_oSNjeQrG8Dpq5aFcVpsvQj
          claim_id: c_zfiCN3GEw3CELfYGrgZdA2
          source_id: s_1V1N5CqgbbC8iNfh3VWMwF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_1V1N5CqgbbC8iNfh3VWMwF
            source_type: api_record
            title: 维基数据：王源采（Q45668371）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668371
            external_identifier: Q45668371
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:41.577Z
            metadata_json: null
        - id: cs_WOBVF4TzQ08YGLUGQz-YJE
          claim_id: c_zfiCN3GEw3CELfYGrgZdA2
          source_id: s_GPMJGyS2DpCP28UFKw1YX4
          stance: supports
          locator: CBDB:175596
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_GPMJGyS2DpCP28UFKw1YX4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源采（175596）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175596&o=json
            external_identifier: CBDB:175596
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:41.717Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_HDo5dzrdXv5ZxP2HTN1TF2
        subject_person_id: p_gg1UgtGeCXPsZbGbRxxciL
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
        - id: cs_gh4C7yM3NNQyqPFzM2F7MF
          claim_id: c_HDo5dzrdXv5ZxP2HTN1TF2
          source_id: s_1V1N5CqgbbC8iNfh3VWMwF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_1V1N5CqgbbC8iNfh3VWMwF
            source_type: api_record
            title: 维基数据：王源采（Q45668371）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668371
            external_identifier: Q45668371
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:41.577Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dx6K6UiDxeGmy7wjGMQPVA
        subject_person_id: p_gg1UgtGeCXPsZbGbRxxciL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源采
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2MT5sMdFZJZjsYNbikWL2a
          claim_id: c_dx6K6UiDxeGmy7wjGMQPVA
          source_id: s_GPMJGyS2DpCP28UFKw1YX4
          stance: supports
          locator: Q45668371
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_V9nXAK5FfkB3FsNgBVkDKT
          claim_id: c_dx6K6UiDxeGmy7wjGMQPVA
          source_id: s_1V1N5CqgbbC8iNfh3VWMwF
          stance: supports
          locator: Q45668371
          quotation: null
          interpretation_note: null
          source:
            id: s_1V1N5CqgbbC8iNfh3VWMwF
            source_type: api_record
            title: 维基数据：王源采（Q45668371）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668371
            external_identifier: Q45668371
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:41.577Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CE2XPL8pmKmLwWmqsMANBo
        subject_person_id: p_iDjU7xfWF1u1bfDbSWDe7b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gg1UgtGeCXPsZbGbRxxciL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_CBy4LFHLoXLaY8SKK1KYav
          claim_id: c_CE2XPL8pmKmLwWmqsMANBo
          source_id: s_19dKF6FW2uFWmfB9JTQYBZ
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_19dKF6FW2uFWmfB9JTQYBZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王濤（175594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175594&o=json
            external_identifier: CBDB:175594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:48.866Z
            metadata_json: null
        - id: cs_mv8k2GofGbnUaLrJBL5BQb
          claim_id: c_CE2XPL8pmKmLwWmqsMANBo
          source_id: s_oCtsBQHAxfAi2HUf2GR7z8
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_oCtsBQHAxfAi2HUf2GR7z8
            source_type: api_record
            title: 维基数据：王涛（Q45668270）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668270
            external_identifier: Q45668270
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:48.700Z
            metadata_json: null
        - id: cs_vHdEup2NumZJJDArmS2dN9
          claim_id: c_CE2XPL8pmKmLwWmqsMANBo
          source_id: s_1V1N5CqgbbC8iNfh3VWMwF
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_1V1N5CqgbbC8iNfh3VWMwF
            source_type: api_record
            title: 维基数据：王源采（Q45668371）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668371
            external_identifier: Q45668371
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:41.577Z
            metadata_json: null
        - id: cs_KpdFVBKNE9CeeJBetckB28
          claim_id: c_CE2XPL8pmKmLwWmqsMANBo
          source_id: s_GPMJGyS2DpCP28UFKw1YX4
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_GPMJGyS2DpCP28UFKw1YX4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源采（175596）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175596&o=json
            external_identifier: CBDB:175596
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:41.717Z
            metadata_json: null
      object_person:
        id: p_iDjU7xfWF1u1bfDbSWDe7b
        status: active
        display_name: 王涛
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王源采

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王源采（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175596 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 820年 | accepted |
| name.primary | 王源采 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iDjU7xfWF1u1bfDbSWDe7b | 王涛 | accepted |

## 外部来源

- [维基数据：王涛（Q45668270）](https://www.wikidata.org/wiki/Q45668270)
- [维基数据：王源采（Q45668371）](https://www.wikidata.org/wiki/Q45668371)
- [CBDB 中国历代人物传记资料库：王濤（175594）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175594&o=json)
- [CBDB 中国历代人物传记资料库：王源采（175596）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175596&o=json)
