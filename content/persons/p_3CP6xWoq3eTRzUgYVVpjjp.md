---
schema: wang-person/v1
id: p_3CP6xWoq3eTRzUgYVVpjjp
status: active
merged_into: null
display_name: 王牧
cbdb_id: 175455
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mMLhKvLizZh16yDAYN5R5P
        subject_person_id: p_3CP6xWoq3eTRzUgYVVpjjp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王牧（卒于819年），唐人物。籍贯咸陽，曾任未詳。（中国历代人物传记资料库 CBDB 175455）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_315CNrwUBezS6ACMTAeUUC
          claim_id: c_mMLhKvLizZh16yDAYN5R5P
          source_id: s_McU5MizCR2ytMQsND66NdQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_McU5MizCR2ytMQsND66NdQ
            source_type: api_record
            title: 维基数据：王牧（Q45660668）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660668
            external_identifier: Q45660668
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:24.426Z
            metadata_json: null
        - id: cs_ELvpe2UDcm_kxJWPUIrb2w
          claim_id: c_mMLhKvLizZh16yDAYN5R5P
          source_id: s_GD4XM94gg8vZ1K8LW3ELCD
          stance: supports
          locator: CBDB:175455
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_GD4XM94gg8vZ1K8LW3ELCD
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王牧（175455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175455&o=json
            external_identifier: CBDB:175455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:24.582Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_GfYQo3tkUKadoke3VfYWXE
        subject_person_id: p_3CP6xWoq3eTRzUgYVVpjjp
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 819年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0819-01-01
            latest: 0819-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_soEJsQyEjecCAL1P1eU9xJ
          claim_id: c_GfYQo3tkUKadoke3VfYWXE
          source_id: s_McU5MizCR2ytMQsND66NdQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_McU5MizCR2ytMQsND66NdQ
            source_type: api_record
            title: 维基数据：王牧（Q45660668）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660668
            external_identifier: Q45660668
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:24.426Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tiM1xcGow9My11Z3yJDZZ2
        subject_person_id: p_3CP6xWoq3eTRzUgYVVpjjp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王牧
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_U1aifEdFoA842dAtFFhKGq
          claim_id: c_tiM1xcGow9My11Z3yJDZZ2
          source_id: s_McU5MizCR2ytMQsND66NdQ
          stance: supports
          locator: Q45660668
          quotation: null
          interpretation_note: null
          source:
            id: s_McU5MizCR2ytMQsND66NdQ
            source_type: api_record
            title: 维基数据：王牧（Q45660668）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660668
            external_identifier: Q45660668
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:24.426Z
            metadata_json: null
        - id: cs_VEWyKxnDFp32LTPkeebiYi
          claim_id: c_tiM1xcGow9My11Z3yJDZZ2
          source_id: s_GD4XM94gg8vZ1K8LW3ELCD
          stance: supports
          locator: Q45660668
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_31MXZTJLARTogjv9NTcETm
        subject_person_id: p_Mfx73EGxmx5Kei6PX1Dz5V
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3CP6xWoq3eTRzUgYVVpjjp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_BBQyYTnjofjPPh3D4VsmdN
          claim_id: c_31MXZTJLARTogjv9NTcETm
          source_id: s_xEU7qamzNzH2Kqf76LHwey
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_xEU7qamzNzH2Kqf76LHwey
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王濡（175454）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175454&o=json
            external_identifier: CBDB:175454
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:56.078Z
            metadata_json: null
        - id: cs_reRJA2TLHJ1RGkoqS5N4cd
          claim_id: c_31MXZTJLARTogjv9NTcETm
          source_id: s_dP8YP9TivMwdEJ8gu57v3K
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_dP8YP9TivMwdEJ8gu57v3K
            source_type: api_record
            title: 维基数据：王濡（Q45660609）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660609
            external_identifier: Q45660609
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:55.917Z
            metadata_json: null
        - id: cs_yba36dLWsVpT7JEMBkAQgy
          claim_id: c_31MXZTJLARTogjv9NTcETm
          source_id: s_McU5MizCR2ytMQsND66NdQ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_McU5MizCR2ytMQsND66NdQ
            source_type: api_record
            title: 维基数据：王牧（Q45660668）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660668
            external_identifier: Q45660668
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:24.426Z
            metadata_json: null
        - id: cs_9pPEGXVjSneipbcF53zX4V
          claim_id: c_31MXZTJLARTogjv9NTcETm
          source_id: s_GD4XM94gg8vZ1K8LW3ELCD
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_GD4XM94gg8vZ1K8LW3ELCD
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王牧（175455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175455&o=json
            external_identifier: CBDB:175455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:24.582Z
            metadata_json: null
      object_person:
        id: p_Mfx73EGxmx5Kei6PX1Dz5V
        status: active
        display_name: 王濡
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王牧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王牧（卒于819年），唐人物。籍贯咸陽，曾任未詳。（中国历代人物传记资料库 CBDB 175455） | accepted |
| death.date | 819年 | accepted |
| name.primary | 王牧 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Mfx73EGxmx5Kei6PX1Dz5V | 王濡 | accepted |

## 外部来源

- [维基数据：王牧（Q45660668）](https://www.wikidata.org/wiki/Q45660668)
- [维基数据：王濡（Q45660609）](https://www.wikidata.org/wiki/Q45660609)
- [CBDB 中国历代人物传记资料库：王牧（175455）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175455&o=json)
- [CBDB 中国历代人物传记资料库：王濡（175454）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175454&o=json)
