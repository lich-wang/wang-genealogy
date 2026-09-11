---
schema: wang-person/v1
id: p_JRxQLCdnELN71C7FFfG44D
status: active
merged_into: null
display_name: 王子杰
cbdb_id: 150134
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_415K896qkB4rR3v2uiQKNW
        subject_person_id: p_JRxQLCdnELN71C7FFfG44D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子杰，史料所见人物。中国历代人物传记资料库（CBDB）以人物编号 150134 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_6susSFfeG5gRRLG661xMUk
          claim_id: c_415K896qkB4rR3v2uiQKNW
          source_id: s_X4jSCHW5ju9iPgUYTgtTpw
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_X4jSCHW5ju9iPgUYTgtTpw
            source_type: api_record
            title: 维基数据：王子杰（Q45678395）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45678395
            external_identifier: Q45678395
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:47.952Z
            metadata_json: null
        - id: cs_lXjzQEk2q1JE7GD2R1HoM9
          claim_id: c_415K896qkB4rR3v2uiQKNW
          source_id: s_gp6KaZNcX3D9D72CBP646a
          stance: supports
          locator: CBDB:150134
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_gp6KaZNcX3D9D72CBP646a
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王子傑（150134）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150134&o=json
            external_identifier: CBDB:150134
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:14:48.103Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nh591fi3VRnj57ZWwKiiiJ
        subject_person_id: p_JRxQLCdnELN71C7FFfG44D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子杰
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DHreJGDqo711xd2tHi2ftr
          claim_id: c_nh591fi3VRnj57ZWwKiiiJ
          source_id: s_gp6KaZNcX3D9D72CBP646a
          stance: supports
          locator: Q45678395
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_FX1No15wVQ83ACpCH4p9JN
          claim_id: c_nh591fi3VRnj57ZWwKiiiJ
          source_id: s_X4jSCHW5ju9iPgUYTgtTpw
          stance: supports
          locator: Q45678395
          quotation: null
          interpretation_note: null
          source:
            id: s_X4jSCHW5ju9iPgUYTgtTpw
            source_type: api_record
            title: 维基数据：王子杰（Q45678395）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45678395
            external_identifier: Q45678395
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:47.952Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_unF9y6E7w6LpjuKzxM7L2d
        subject_person_id: p_JRxQLCdnELN71C7FFfG44D
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_N6bQh9pnDkScrvHDXa2Wts
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_zFNdNEZqegsA8qWmaz1Lvm
          claim_id: c_unF9y6E7w6LpjuKzxM7L2d
          source_id: s_xQPsT5sBbbddERH371uuF4
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_xQPsT5sBbbddERH371uuF4
            source_type: api_record
            title: 维基数据：王信（Q45678428）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45678428
            external_identifier: Q45678428
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:15.108Z
            metadata_json: null
        - id: cs_eANveH7yr6j7kWYX8KFw8C
          claim_id: c_unF9y6E7w6LpjuKzxM7L2d
          source_id: s_X4jSCHW5ju9iPgUYTgtTpw
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_X4jSCHW5ju9iPgUYTgtTpw
            source_type: api_record
            title: 维基数据：王子杰（Q45678395）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45678395
            external_identifier: Q45678395
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:47.952Z
            metadata_json: null
      object_person:
        id: p_N6bQh9pnDkScrvHDXa2Wts
        status: active
        display_name: 王信
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_grhiL18B5mg3k0sbzeGy_g
        subject_person_id: p_JRxQLCdnELN71C7FFfG44D
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GMCTq5KrktL4A6wV97QsyN
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5GQmKNfrRoHvWlRqdLrTvN
          claim_id: c_grhiL18B5mg3k0sbzeGy_g
          source_id: s_gp6KaZNcX3D9D72CBP646a
          stance: supports
          locator: 唐代墓誌匯編:二卷，Shengli 28：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GMCTq5KrktL4A6wV97QsyN
        status: active
        display_name: 王德表
        merged_into_person_id: null
  other: []
---

# 王子杰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王子杰，史料所见人物。中国历代人物传记资料库（CBDB）以人物编号 150134 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王子杰 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_N6bQh9pnDkScrvHDXa2Wts | 王信 | accepted |
| descendants | p_GMCTq5KrktL4A6wV97QsyN | 王德表 | accepted |

## 外部来源

- [维基数据：王信（Q45678428）](https://www.wikidata.org/wiki/Q45678428)
- [维基数据：王子杰（Q45678395）](https://www.wikidata.org/wiki/Q45678395)
- [CBDB 中国历代人物传记资料库：王子傑（150134）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150134&o=json)
