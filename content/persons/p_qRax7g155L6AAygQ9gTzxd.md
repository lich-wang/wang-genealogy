---
schema: wang-person/v1
id: p_qRax7g155L6AAygQ9gTzxd
status: active
merged_into: null
display_name: 王源蒙
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iSvukeDG6wsu12BkeY5bUn
        subject_person_id: p_qRax7g155L6AAygQ9gTzxd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源蒙（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任四門助教。中国历代人物传记资料库（CBDB）以人物编号 175524 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_GSPVfPC7ZonnB7FHANdCBa
          claim_id: c_iSvukeDG6wsu12BkeY5bUn
          source_id: s_d2jLjxNXGSV4t92fKFgsab
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_d2jLjxNXGSV4t92fKFgsab
            source_type: api_record
            title: 维基数据：王源蒙（Q45664652）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664652
            external_identifier: Q45664652
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:34.817Z
            metadata_json: null
        - id: cs_VE2jjjB2yzHvnaa6jdwiAX
          claim_id: c_iSvukeDG6wsu12BkeY5bUn
          source_id: s_7cEHvL2vrq8GSPQ7rojFnS
          stance: supports
          locator: CBDB:175524
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7cEHvL2vrq8GSPQ7rojFnS
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源蒙（175524）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175524&o=json
            external_identifier: CBDB:175524
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:34.975Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_aLkyNHaMrGhPgwt6pFM3qD
        subject_person_id: p_qRax7g155L6AAygQ9gTzxd
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
        - id: cs_S2oVJyKEEXpTLmAKWx24vQ
          claim_id: c_aLkyNHaMrGhPgwt6pFM3qD
          source_id: s_d2jLjxNXGSV4t92fKFgsab
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_d2jLjxNXGSV4t92fKFgsab
            source_type: api_record
            title: 维基数据：王源蒙（Q45664652）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664652
            external_identifier: Q45664652
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:34.817Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gycv4QC9nu7sqQaKeHEGDf
        subject_person_id: p_qRax7g155L6AAygQ9gTzxd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源蒙
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_nPmzU9RP4vtWBWsYEELYP8
          claim_id: c_gycv4QC9nu7sqQaKeHEGDf
          source_id: s_7cEHvL2vrq8GSPQ7rojFnS
          stance: supports
          locator: Q45664652
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_u5GCc5nDT6EmuDKCyGuUVB
          claim_id: c_gycv4QC9nu7sqQaKeHEGDf
          source_id: s_d2jLjxNXGSV4t92fKFgsab
          stance: supports
          locator: Q45664652
          quotation: null
          interpretation_note: null
          source:
            id: s_d2jLjxNXGSV4t92fKFgsab
            source_type: api_record
            title: 维基数据：王源蒙（Q45664652）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664652
            external_identifier: Q45664652
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:34.817Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yJphTMVnNGXQnb9E1Yjdqy
        subject_person_id: p_4wbLmXso7CEPndJiovTrS6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qRax7g155L6AAygQ9gTzxd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_7NHPWHiqUiah11QVJ4G4Ym
          claim_id: c_yJphTMVnNGXQnb9E1Yjdqy
          source_id: s_uCb6D1MQ7rqZFP4WWBbACN
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_uCb6D1MQ7rqZFP4WWBbACN
            source_type: api_record
            title: 维基数据：王涧（Q45663995）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663995
            external_identifier: Q45663995
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:59.369Z
            metadata_json: null
        - id: cs_mTPWa7eBGC2BsGuXxhcR6v
          claim_id: c_yJphTMVnNGXQnb9E1Yjdqy
          source_id: s_x9jX1CPvi1JzpZGHEakrCh
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_x9jX1CPvi1JzpZGHEakrCh
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王澗（175512）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175512&o=json
            external_identifier: CBDB:175512
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:59.523Z
            metadata_json: null
        - id: cs_rpHJVHNhNUEd7UBZisTQMr
          claim_id: c_yJphTMVnNGXQnb9E1Yjdqy
          source_id: s_d2jLjxNXGSV4t92fKFgsab
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_d2jLjxNXGSV4t92fKFgsab
            source_type: api_record
            title: 维基数据：王源蒙（Q45664652）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664652
            external_identifier: Q45664652
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:34.817Z
            metadata_json: null
        - id: cs_C4XuS4iM7m9dPsMrT2DKRr
          claim_id: c_yJphTMVnNGXQnb9E1Yjdqy
          source_id: s_7cEHvL2vrq8GSPQ7rojFnS
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7cEHvL2vrq8GSPQ7rojFnS
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源蒙（175524）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175524&o=json
            external_identifier: CBDB:175524
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:34.975Z
            metadata_json: null
      object_person:
        id: p_4wbLmXso7CEPndJiovTrS6
        status: active
        display_name: 王涧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王源蒙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王源蒙（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任四門助教。中国历代人物传记资料库（CBDB）以人物编号 175524 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 820年 | accepted |
| name.primary | 王源蒙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4wbLmXso7CEPndJiovTrS6 | 王涧 | accepted |

## 外部来源

- [维基数据：王涧（Q45663995）](https://www.wikidata.org/wiki/Q45663995)
- [维基数据：王源蒙（Q45664652）](https://www.wikidata.org/wiki/Q45664652)
- [CBDB 中国历代人物传记资料库：王澗（175512）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175512&o=json)
- [CBDB 中国历代人物传记资料库：王源蒙（175524）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175524&o=json)
