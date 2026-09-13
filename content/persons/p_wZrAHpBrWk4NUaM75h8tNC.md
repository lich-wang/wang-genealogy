---
schema: wang-person/v1
id: p_wZrAHpBrWk4NUaM75h8tNC
status: active
merged_into: null
display_name: 王退思
cbdb_id: 175525
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MG2iBeFM391taB2WXTCkny
        subject_person_id: p_wZrAHpBrWk4NUaM75h8tNC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王退思（卒于820年），唐人物。籍贯咸陽，曾任丞。（中国历代人物传记资料库 CBDB 175525）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_1zEr5kReKZakGPHmPpLp9D
          claim_id: c_MG2iBeFM391taB2WXTCkny
          source_id: s_zPiXWU7CVFs285ZbPSBwKr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_zPiXWU7CVFs285ZbPSBwKr
            source_type: api_record
            title: 维基数据：王退思（Q45664707）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664707
            external_identifier: Q45664707
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:34.817Z
            metadata_json: null
        - id: cs_ZoXGo0L1BHmZvSNwlJrbzG
          claim_id: c_MG2iBeFM391taB2WXTCkny
          source_id: s_rRtgF9TFTSc4CUuxMQG81A
          stance: supports
          locator: CBDB:175525
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_rRtgF9TFTSc4CUuxMQG81A
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王退思（175525）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175525&o=json
            external_identifier: CBDB:175525
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:34.971Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_pwkdaVaH5HUhsCJKyu2SEK
        subject_person_id: p_wZrAHpBrWk4NUaM75h8tNC
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
        - id: cs_vK5c36wux7UZM6QuYNxSKf
          claim_id: c_pwkdaVaH5HUhsCJKyu2SEK
          source_id: s_zPiXWU7CVFs285ZbPSBwKr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_zPiXWU7CVFs285ZbPSBwKr
            source_type: api_record
            title: 维基数据：王退思（Q45664707）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664707
            external_identifier: Q45664707
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:34.817Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Hu8MvX8YDSPiorapND4zQT
        subject_person_id: p_wZrAHpBrWk4NUaM75h8tNC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王退思
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_aDHvbZhKVUX5ta6FtQnUim
          claim_id: c_Hu8MvX8YDSPiorapND4zQT
          source_id: s_rRtgF9TFTSc4CUuxMQG81A
          stance: supports
          locator: Q45664707
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_zFRara3u7kC3pz4Jt6aHN9
          claim_id: c_Hu8MvX8YDSPiorapND4zQT
          source_id: s_zPiXWU7CVFs285ZbPSBwKr
          stance: supports
          locator: Q45664707
          quotation: null
          interpretation_note: null
          source:
            id: s_zPiXWU7CVFs285ZbPSBwKr
            source_type: api_record
            title: 维基数据：王退思（Q45664707）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664707
            external_identifier: Q45664707
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:34.817Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9tSRDBiYsSYFfBqB38nhuz
        subject_person_id: p_4wbLmXso7CEPndJiovTrS6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wZrAHpBrWk4NUaM75h8tNC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Cx9xScDA3wsFYHckWximx3
          claim_id: c_9tSRDBiYsSYFfBqB38nhuz
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
        - id: cs_d2N8ng76271DonZ2KHsL6Z
          claim_id: c_9tSRDBiYsSYFfBqB38nhuz
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
        - id: cs_PXkb1yjhxZ9SvsSKpwC2UP
          claim_id: c_9tSRDBiYsSYFfBqB38nhuz
          source_id: s_zPiXWU7CVFs285ZbPSBwKr
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_zPiXWU7CVFs285ZbPSBwKr
            source_type: api_record
            title: 维基数据：王退思（Q45664707）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664707
            external_identifier: Q45664707
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:34.817Z
            metadata_json: null
        - id: cs_po4dR9FXy5NxF5rjepJzZS
          claim_id: c_9tSRDBiYsSYFfBqB38nhuz
          source_id: s_rRtgF9TFTSc4CUuxMQG81A
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_rRtgF9TFTSc4CUuxMQG81A
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王退思（175525）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175525&o=json
            external_identifier: CBDB:175525
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:34.971Z
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

# 王退思

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王退思（卒于820年），唐人物。籍贯咸陽，曾任丞。（中国历代人物传记资料库 CBDB 175525） | accepted |
| death.date | 820年 | accepted |
| name.primary | 王退思 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4wbLmXso7CEPndJiovTrS6 | 王涧 | accepted |

## 外部来源

- [维基数据：王涧（Q45663995）](https://www.wikidata.org/wiki/Q45663995)
- [维基数据：王退思（Q45664707）](https://www.wikidata.org/wiki/Q45664707)
- [CBDB 中国历代人物传记资料库：王澗（175512）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175512&o=json)
- [CBDB 中国历代人物传记资料库：王退思（175525）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175525&o=json)
