---
schema: wang-person/v1
id: p_jFuufzfY72LPXJ1cXZRs83
status: active
merged_into: null
display_name: 王琳
cbdb_id: 250184
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E9RP6hi7AMRCDDkKHp8hoT
        subject_person_id: p_jFuufzfY72LPXJ1cXZRs83
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琳，明人物。成化十一年進士。（中国历代人物传记资料库 CBDB 250184）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_hyA1E5eTc7fbu6owJC6G4e
          claim_id: c_E9RP6hi7AMRCDDkKHp8hoT
          source_id: s_H7oK5fFS5buGRQJqjruUQC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_H7oK5fFS5buGRQJqjruUQC
            source_type: api_record
            title: 维基数据：王琳（Q45637271）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45637271
            external_identifier: Q45637271
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:47.952Z
            metadata_json: null
        - id: cs_yUSpg9iEpwwjpelEDDH2ZO
          claim_id: c_E9RP6hi7AMRCDDkKHp8hoT
          source_id: s_5CTC9PP5XcyABkj8rGNpL3
          stance: supports
          locator: CBDB:250184
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5CTC9PP5XcyABkj8rGNpL3
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王琳（250184）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250184&o=json
            external_identifier: CBDB:250184
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:14:48.119Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wEoNqV883NoaQkRHJR1pnJ
        subject_person_id: p_jFuufzfY72LPXJ1cXZRs83
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琳
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8aDv3opiBSfwxyYaKbpyAZ
          claim_id: c_wEoNqV883NoaQkRHJR1pnJ
          source_id: s_5CTC9PP5XcyABkj8rGNpL3
          stance: supports
          locator: Q45637271
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_HdoitKATKESa7AEUeZd8Qp
          claim_id: c_wEoNqV883NoaQkRHJR1pnJ
          source_id: s_H7oK5fFS5buGRQJqjruUQC
          stance: supports
          locator: Q45637271
          quotation: null
          interpretation_note: null
          source:
            id: s_H7oK5fFS5buGRQJqjruUQC
            source_type: api_record
            title: 维基数据：王琳（Q45637271）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45637271
            external_identifier: Q45637271
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:47.952Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7S24uRepgy77bcFFG5mJDd
        subject_person_id: p_gH1X7mqhSnv3LstMzbAkAu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jFuufzfY72LPXJ1cXZRs83
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_M9UvhqMy1733jtW4NeVdd5
          claim_id: c_7S24uRepgy77bcFFG5mJDd
          source_id: s_H7oK5fFS5buGRQJqjruUQC
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_H7oK5fFS5buGRQJqjruUQC
            source_type: api_record
            title: 维基数据：王琳（Q45637271）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45637271
            external_identifier: Q45637271
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:47.952Z
            metadata_json: null
        - id: cs_JVus2qV7PHan48oYZw2TrA
          claim_id: c_7S24uRepgy77bcFFG5mJDd
          source_id: s_qaNLR8tVSPMvpW4G6jGPCv
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_qaNLR8tVSPMvpW4G6jGPCv
            source_type: api_record
            title: 维基数据：王质（Q45637209）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45637209
            external_identifier: Q45637209
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:22.582Z
            metadata_json: null
      object_person:
        id: p_gH1X7mqhSnv3LstMzbAkAu
        status: active
        display_name: 王质
        merged_into_person_id: null
  children:
    - claim:
        id: c_GGwbF1EeKt3XbdCtBucLDw
        subject_person_id: p_jFuufzfY72LPXJ1cXZRs83
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hhmhrJoJhGam6MtTDBQHpt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_RDwy7ApJBrrNJHCS32CXvX
          claim_id: c_GGwbF1EeKt3XbdCtBucLDw
          source_id: s_kkjVXEanZ4kgny7SvGjgRQ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_kkjVXEanZ4kgny7SvGjgRQ
            source_type: api_record
            title: 维基数据：王辂（Q45443021）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45443021
            external_identifier: Q45443021
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:11.042Z
            metadata_json: null
        - id: cs_CB8owB9a9YBX94hc524UmV
          claim_id: c_GGwbF1EeKt3XbdCtBucLDw
          source_id: s_H7oK5fFS5buGRQJqjruUQC
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_H7oK5fFS5buGRQJqjruUQC
            source_type: api_record
            title: 维基数据：王琳（Q45637271）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45637271
            external_identifier: Q45637271
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:47.952Z
            metadata_json: null
      object_person:
        id: p_hhmhrJoJhGam6MtTDBQHpt
        status: active
        display_name: 王辂
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_ep16w2U3bXAPoJcfLebtC9
        subject_person_id: p_jFuufzfY72LPXJ1cXZRs83
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_U2Fggori7BCBLtrGmDkhHG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WabEe7GdE58KxnyS9zWXGo
          claim_id: c_ep16w2U3bXAPoJcfLebtC9
          source_id: s_43NcmX3fqpgyecqBk9Mp3P
          stance: supports
          locator: 条文：条文识读（祖）（2世）
          quotation: 祖父王琳
          interpretation_note: null
          source:
            id: s_43NcmX3fqpgyecqBk9Mp3P
            source_type: website
            title: 中文维基百科：王僑 (成化進士)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%91_(%E6%88%90%E5%8C%96%E9%80%B2%E5%A3%AB)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:09.293Z
            metadata_json: null
      object_person:
        id: p_U2Fggori7BCBLtrGmDkhHG
        status: active
        display_name: 王侨
        merged_into_person_id: null
    - claim:
        id: c_Sqx67jefaSqq_QLlRzaWFn
        subject_person_id: p_jFuufzfY72LPXJ1cXZRs83
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2CY82LiLunPZpBKWzpBz3S
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_csd8s7hi9s0vIhNKHrNDCy
          claim_id: c_Sqx67jefaSqq_QLlRzaWFn
          source_id: s_KiKcwY7ixByX4xMwNVCevX
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第五十九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KiKcwY7ixByX4xMwNVCevX
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王倬（126663）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126663&o=json
            external_identifier: CBDB:126663
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:55.585Z
            metadata_json: null
      object_person:
        id: p_2CY82LiLunPZpBKWzpBz3S
        status: active
        display_name: 王倬
        merged_into_person_id: null
  other: []
---

# 王琳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王琳，明人物。成化十一年進士。（中国历代人物传记资料库 CBDB 250184） | accepted |
| name.primary | 王琳 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gH1X7mqhSnv3LstMzbAkAu | 王质 | accepted |
| children | p_hhmhrJoJhGam6MtTDBQHpt | 王辂 | accepted |
| descendants | p_U2Fggori7BCBLtrGmDkhHG | 王侨 | accepted |
| descendants | p_2CY82LiLunPZpBKWzpBz3S | 王倬 | accepted |

## 外部来源

- [维基数据：王琳（Q45637271）](https://www.wikidata.org/wiki/Q45637271)
- [维基数据：王辂（Q45443021）](https://www.wikidata.org/wiki/Q45443021)
- [维基数据：王质（Q45637209）](https://www.wikidata.org/wiki/Q45637209)
- [中文维基百科：王僑 (成化進士)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%91_(%E6%88%90%E5%8C%96%E9%80%B2%E5%A3%AB))
- [CBDB 中国历代人物传记资料库：王琳（250184）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250184&o=json)
- [CBDB 中国历代人物传记资料库：王倬（126663）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126663&o=json)
