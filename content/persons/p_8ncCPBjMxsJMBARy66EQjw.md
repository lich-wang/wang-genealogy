---
schema: wang-person/v1
id: p_8ncCPBjMxsJMBARy66EQjw
status: active
merged_into: null
display_name: 王俊
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Tz3zut6XebzNW1HE7XZf11
        subject_person_id: p_8ncCPBjMxsJMBARy66EQjw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ahc4v48JA1UcLecY62eBi2
          claim_id: c_Tz3zut6XebzNW1HE7XZf11
          source_id: s_JnRsT8E8aeFTXk1y34KYhU
          stance: supports
          locator: CBDB:267650
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（267650）
          source: &a1
            id: s_JnRsT8E8aeFTXk1y34KYhU
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 267650）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267650&o=json
            external_identifier: CBDB:267650
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.784Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ofiZyDYmqVrxwN6DPa1fAK
        subject_person_id: p_8ncCPBjMxsJMBARy66EQjw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊，明人物。弘治九年進士，籍贯婺源。（中国历代人物传记资料库 CBDB 267650）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_71EGDp5c911G1QrzldjbS6
          claim_id: c_ofiZyDYmqVrxwN6DPa1fAK
          source_id: s_JnRsT8E8aeFTXk1y34KYhU
          stance: supports
          locator: CBDB:267650
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_NhMKt6ImoGTvjOQNA6pSF6
        subject_person_id: p_8ncCPBjMxsJMBARy66EQjw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qLd4Pf4cDMmmQ6kBWSiJ8T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jnud66OhOzt5WCHMU_2BDN
          claim_id: c_NhMKt6ImoGTvjOQNA6pSF6
          source_id: s_JnRsT8E8aeFTXk1y34KYhU
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第二甲第八十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qLd4Pf4cDMmmQ6kBWSiJ8T
        status: active
        display_name: 王壽
        merged_into_person_id: null
    - claim:
        id: c_tk85QG2XEOZAAl11MPkY21
        subject_person_id: p_8ncCPBjMxsJMBARy66EQjw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PAy7yCJuqqeX8LtX4fFuFY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dOIRZDawoOHczs99oCqZxB
          claim_id: c_tk85QG2XEOZAAl11MPkY21
          source_id: s_VI2zJ99fqOg9fTfkMPTFzX
          stance: supports
          locator: CBDB：兄弟 王壽（201134）之父／母 王俊
          quotation: null
          interpretation_note: 由兄弟关系推断：王翰 与 王壽 为同胞（CBDB 记「兄」），王壽 之父／母即 王翰 之父／母。
          source:
            id: s_VI2zJ99fqOg9fTfkMPTFzX
            source_type: api_record
            title: 中国历代人物传记资料库：王翰（CBDB 267655）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267655&o=json
            external_identifier: CBDB:267655
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PAy7yCJuqqeX8LtX4fFuFY
        status: active
        display_name: 王翰
        merged_into_person_id: null
    - claim:
        id: c_gWVBdURSiGzHTmKWJMjQiC
        subject_person_id: p_8ncCPBjMxsJMBARy66EQjw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nP9Fa1A3uFFEsjUPGC5JiM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0YWhNcCjWB922aaV3IJ95N
          claim_id: c_gWVBdURSiGzHTmKWJMjQiC
          source_id: s_UNANl8y5qBDKIMOFldjSeI
          stance: supports
          locator: CBDB：兄弟 王壽（201134）之父／母 王俊
          quotation: null
          interpretation_note: 由兄弟关系推断：王福 与 王壽 为同胞（CBDB 记「兄」），王壽 之父／母即 王福 之父／母。
          source:
            id: s_UNANl8y5qBDKIMOFldjSeI
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 267653）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267653&o=json
            external_identifier: CBDB:267653
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nP9Fa1A3uFFEsjUPGC5JiM
        status: active
        display_name: 王福
        merged_into_person_id: null
    - claim:
        id: c_QedyQN_Zcx83sFF7atIHCe
        subject_person_id: p_8ncCPBjMxsJMBARy66EQjw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oVMkDeWCpv83NhtocLaKdd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tXpxvxPhP5Am88TDgw2nFX
          claim_id: c_QedyQN_Zcx83sFF7atIHCe
          source_id: s_xcHnBL8B2xIF-1PTDux1Ca
          stance: supports
          locator: CBDB：兄弟 王壽（201134）之父／母 王俊
          quotation: null
          interpretation_note: 由兄弟关系推断：王康 与 王壽 为同胞（CBDB 记「兄」），王壽 之父／母即 王康 之父／母。
          source:
            id: s_xcHnBL8B2xIF-1PTDux1Ca
            source_type: api_record
            title: 中国历代人物传记资料库：王康（CBDB 267654）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267654&o=json
            external_identifier: CBDB:267654
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oVMkDeWCpv83NhtocLaKdd
        status: active
        display_name: 王康
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊 | accepted |
| bio.summary | 王俊，明人物。弘治九年進士，籍贯婺源。（中国历代人物传记资料库 CBDB 267650） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_qLd4Pf4cDMmmQ6kBWSiJ8T | 王壽 | accepted |
| children | p_PAy7yCJuqqeX8LtX4fFuFY | 王翰 | accepted |
| children | p_nP9Fa1A3uFFEsjUPGC5JiM | 王福 | accepted |
| children | p_oVMkDeWCpv83NhtocLaKdd | 王康 | accepted |

## 外部来源

- [中国历代人物传记资料库：王福（CBDB 267653）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267653&o=json)
- [中国历代人物传记资料库：王翰（CBDB 267655）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267655&o=json)
- [中国历代人物传记资料库：王俊（CBDB 267650）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267650&o=json)
- [中国历代人物传记资料库：王康（CBDB 267654）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267654&o=json)
