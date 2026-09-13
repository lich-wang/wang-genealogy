---
schema: wang-person/v1
id: p_saaECjeVK4P193bjeUAPMi
status: active
merged_into: null
display_name: 王略
cbdb_id: 158876
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rY6BPM74D3gDz4A3KA1fBt
        subject_person_id: p_saaECjeVK4P193bjeUAPMi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王略，唐人物。籍贯晉陽，曾任縣令。（中国历代人物传记资料库 CBDB 158876）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_F2X3ePEmzmMg68UbJarBAR
          claim_id: c_rY6BPM74D3gDz4A3KA1fBt
          source_id: s_StMUDSYowhGJX93fCnxVTc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_StMUDSYowhGJX93fCnxVTc
            source_type: api_record
            title: 维基数据：王略（Q45582459）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45582459
            external_identifier: Q45582459
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:22.582Z
            metadata_json: null
        - id: cs_Um4ZzkN7BZuJtzSXo4NvLx
          claim_id: c_rY6BPM74D3gDz4A3KA1fBt
          source_id: s_9USFL5tt9dE3CPDEbeNHfo
          stance: supports
          locator: CBDB:158876
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_9USFL5tt9dE3CPDEbeNHfo
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王略（158876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158876&o=json
            external_identifier: CBDB:158876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:18:22.750Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1NSNt89HA5yGiZ1NCQeBG6
        subject_person_id: p_saaECjeVK4P193bjeUAPMi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王略
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3wR3AwVtoyd2LSPYaAYbsp
          claim_id: c_1NSNt89HA5yGiZ1NCQeBG6
          source_id: s_StMUDSYowhGJX93fCnxVTc
          stance: supports
          locator: Q45582459
          quotation: null
          interpretation_note: null
          source:
            id: s_StMUDSYowhGJX93fCnxVTc
            source_type: api_record
            title: 维基数据：王略（Q45582459）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45582459
            external_identifier: Q45582459
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:22.582Z
            metadata_json: null
        - id: cs_EYrTFNrLc2H2GtyHVZ4rMM
          claim_id: c_1NSNt89HA5yGiZ1NCQeBG6
          source_id: s_9USFL5tt9dE3CPDEbeNHfo
          stance: supports
          locator: Q45582459
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_B7umEJQ2SyXMcDdzV6Lx5z
        subject_person_id: p_tZSNhH7X75TMs1JoKXMurc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_saaECjeVK4P193bjeUAPMi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_SbnrYYXHYwCdCytvnLUCjG
          claim_id: c_B7umEJQ2SyXMcDdzV6Lx5z
          source_id: s_9E5KHi3w99hCFdpN24Bib5
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_9E5KHi3w99hCFdpN24Bib5
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王綸（158874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158874&o=json
            external_identifier: CBDB:158874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:14:49.536Z
            metadata_json: null
        - id: cs_cR9ysnUs5xALozn4BEBSfm
          claim_id: c_B7umEJQ2SyXMcDdzV6Lx5z
          source_id: s_oJYCJKdmMoNxLZgSNAtPYR
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_oJYCJKdmMoNxLZgSNAtPYR
            source_type: api_record
            title: 维基数据：王纶（Q45582330）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45582330
            external_identifier: Q45582330
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:49.386Z
            metadata_json: null
        - id: cs_eoX4eCfN1RfhZonRa6nE5D
          claim_id: c_B7umEJQ2SyXMcDdzV6Lx5z
          source_id: s_StMUDSYowhGJX93fCnxVTc
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_StMUDSYowhGJX93fCnxVTc
            source_type: api_record
            title: 维基数据：王略（Q45582459）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45582459
            external_identifier: Q45582459
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:22.582Z
            metadata_json: null
        - id: cs_Naxz7YhaA4HqR6H7WMRfgF
          claim_id: c_B7umEJQ2SyXMcDdzV6Lx5z
          source_id: s_9USFL5tt9dE3CPDEbeNHfo
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_9USFL5tt9dE3CPDEbeNHfo
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王略（158876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158876&o=json
            external_identifier: CBDB:158876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:18:22.750Z
            metadata_json: null
      object_person:
        id: p_tZSNhH7X75TMs1JoKXMurc
        status: active
        display_name: 王纶
        merged_into_person_id: null
  children:
    - claim:
        id: c_Dek23LErAnBDUB6PRK7HPm
        subject_person_id: p_saaECjeVK4P193bjeUAPMi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eDMQCgCV7Pas3zdeuj3KE2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_BGieB2yRBrCfd4G4KHRYdw
          claim_id: c_Dek23LErAnBDUB6PRK7HPm
          source_id: s_StMUDSYowhGJX93fCnxVTc
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_StMUDSYowhGJX93fCnxVTc
            source_type: api_record
            title: 维基数据：王略（Q45582459）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45582459
            external_identifier: Q45582459
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:22.582Z
            metadata_json: null
        - id: cs_gr3FGpnsqe4wDyoxC6qjMn
          claim_id: c_Dek23LErAnBDUB6PRK7HPm
          source_id: s_9USFL5tt9dE3CPDEbeNHfo
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_9USFL5tt9dE3CPDEbeNHfo
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王略（158876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158876&o=json
            external_identifier: CBDB:158876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:18:22.750Z
            metadata_json: null
        - id: cs_QFYoyTi4ptz3mRf6y52PjT
          claim_id: c_Dek23LErAnBDUB6PRK7HPm
          source_id: s_DTLzUXRk4EaPsrbfefdin1
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_DTLzUXRk4EaPsrbfefdin1
            source_type: api_record
            title: 维基数据：王翘（Q45472680）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45472680
            external_identifier: Q45472680
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:38.390Z
            metadata_json: null
        - id: cs_516yJVFhQdSD7UBSQqBSFi
          claim_id: c_Dek23LErAnBDUB6PRK7HPm
          source_id: s_B3cpVp9wjUDAUSzSM1Kj1j
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_B3cpVp9wjUDAUSzSM1Kj1j
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王翹（193294）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193294&o=json
            external_identifier: CBDB:193294
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:25:38.551Z
            metadata_json: null
      object_person:
        id: p_eDMQCgCV7Pas3zdeuj3KE2
        status: active
        display_name: 王翘
        merged_into_person_id: null
    - claim:
        id: c_tpQ6hbp8R9xFDPJmszCAXH
        subject_person_id: p_saaECjeVK4P193bjeUAPMi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_riJJsaXCL8C4KFLVPRybNk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_8G4Q178LTyoKs5iQdQwnDQ
          claim_id: c_tpQ6hbp8R9xFDPJmszCAXH
          source_id: s_StMUDSYowhGJX93fCnxVTc
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_StMUDSYowhGJX93fCnxVTc
            source_type: api_record
            title: 维基数据：王略（Q45582459）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45582459
            external_identifier: Q45582459
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:22.582Z
            metadata_json: null
        - id: cs_Qx46KdDWvRqtCxE6zeN7AJ
          claim_id: c_tpQ6hbp8R9xFDPJmszCAXH
          source_id: s_9USFL5tt9dE3CPDEbeNHfo
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_9USFL5tt9dE3CPDEbeNHfo
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王略（158876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158876&o=json
            external_identifier: CBDB:158876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:18:22.750Z
            metadata_json: null
        - id: cs_K75g7oVR5g9QL8D9sFc1G2
          claim_id: c_tpQ6hbp8R9xFDPJmszCAXH
          source_id: s_RFLhRAYBr7qDPqJtd88cAM
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_RFLhRAYBr7qDPqJtd88cAM
            source_type: api_record
            title: 维基数据：王翱（Q45546232）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45546232
            external_identifier: Q45546232
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:40.338Z
            metadata_json: null
        - id: cs_L18c4L4xQAehpsGx9j2tn9
          claim_id: c_tpQ6hbp8R9xFDPJmszCAXH
          source_id: s_uWb2a9ZZyQqGyGvDK17RDm
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_uWb2a9ZZyQqGyGvDK17RDm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王翱（141842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141842&o=json
            external_identifier: CBDB:141842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:25:40.494Z
            metadata_json: null
      object_person:
        id: p_riJJsaXCL8C4KFLVPRybNk
        status: active
        display_name: 王翱
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_6sJ67YoURTi66MuSZK9hwe
        subject_person_id: p_SVQGGUX1afvv7PxRUXJumG
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_saaECjeVK4P193bjeUAPMi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_6oxSFjFZ6VyULgJjjjKXA2
          claim_id: c_6sJ67YoURTi66MuSZK9hwe
          source_id: s_9USFL5tt9dE3CPDEbeNHfo
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_9USFL5tt9dE3CPDEbeNHfo
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王略（158876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158876&o=json
            external_identifier: CBDB:158876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:18:22.750Z
            metadata_json: null
        - id: cs_fokFwMdhY7EwHoEemSvdFv
          claim_id: c_6sJ67YoURTi66MuSZK9hwe
          source_id: s_StMUDSYowhGJX93fCnxVTc
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_StMUDSYowhGJX93fCnxVTc
            source_type: api_record
            title: 维基数据：王略（Q45582459）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45582459
            external_identifier: Q45582459
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:22.582Z
            metadata_json: null
        - id: cs_yKasB5SJTL3Sj3fs53bbxt
          claim_id: c_6sJ67YoURTi66MuSZK9hwe
          source_id: s_NDKBhNtyNMkRh5tmc4P3cG
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_NDKBhNtyNMkRh5tmc4P3cG
            source_type: api_record
            title: 维基数据：崔缊（Q45447645）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45447645
            external_identifier: Q45447645
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:36.508Z
            metadata_json: null
        - id: cs_wMDLQKizpAMvCKBmUgz3Hm
          claim_id: c_6sJ67YoURTi66MuSZK9hwe
          source_id: s_8wabgWKv5p5Tvv3g9NTYnz
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_8wabgWKv5p5Tvv3g9NTYnz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：崔緼（145159）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145159&o=json
            external_identifier: CBDB:145159
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:25:36.663Z
            metadata_json: null
      object_person:
        id: p_SVQGGUX1afvv7PxRUXJumG
        status: active
        display_name: 崔缊
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王略

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王略，唐人物。籍贯晉陽，曾任縣令。（中国历代人物传记资料库 CBDB 158876） | accepted |
| name.primary | 王略 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tZSNhH7X75TMs1JoKXMurc | 王纶 | accepted |
| children | p_eDMQCgCV7Pas3zdeuj3KE2 | 王翘 | accepted |
| children | p_riJJsaXCL8C4KFLVPRybNk | 王翱 | accepted |
| spouses | p_SVQGGUX1afvv7PxRUXJumG | 崔缊 | accepted |

## 外部来源

- [维基数据：崔缊（Q45447645）](https://www.wikidata.org/wiki/Q45447645)
- [维基数据：王翱（Q45546232）](https://www.wikidata.org/wiki/Q45546232)
- [维基数据：王略（Q45582459）](https://www.wikidata.org/wiki/Q45582459)
- [维基数据：王纶（Q45582330）](https://www.wikidata.org/wiki/Q45582330)
- [维基数据：王翘（Q45472680）](https://www.wikidata.org/wiki/Q45472680)
- [CBDB 中国历代人物传记资料库：崔緼（145159）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145159&o=json)
- [CBDB 中国历代人物传记资料库：王翱（141842）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141842&o=json)
- [CBDB 中国历代人物传记资料库：王略（158876）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158876&o=json)
- [CBDB 中国历代人物传记资料库：王綸（158874）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158874&o=json)
- [CBDB 中国历代人物传记资料库：王翹（193294）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193294&o=json)
