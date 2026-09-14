---
schema: wang-person/v1
id: p_YaWmd84uDmuR4z7SAP4Eam
status: active
merged_into: null
display_name: 王崇德
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pKgQDFrk4Tr4vVcESJmhb3
        subject_person_id: p_YaWmd84uDmuR4z7SAP4Eam
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HsoG5s5FLWm2NN4zjr9Axb
          claim_id: c_pKgQDFrk4Tr4vVcESJmhb3
          source_id: s_hQPa37YUT1hpcYJ1GEai5p
          stance: supports
          locator: CBDB:318728
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318728）
          source: &a1
            id: s_hQPa37YUT1hpcYJ1GEai5p
            source_type: api_record
            title: 中国历代人物传记资料库：王崇德（CBDB 318728）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318728&o=json
            external_identifier: CBDB:318728
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.021Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gAvVKFZ3EA7pm7q7CM1JPM
        subject_person_id: p_YaWmd84uDmuR4z7SAP4Eam
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇德，明人物。嘉靖三十二年進士，籍贯平鄉，曾任教授。（中国历代人物传记资料库 CBDB 318728）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cItRqS-iB6Ndr46gF7ewx6
          claim_id: c_gAvVKFZ3EA7pm7q7CM1JPM
          source_id: s_hQPa37YUT1hpcYJ1GEai5p
          stance: supports
          locator: CBDB:318728
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Od3aGJSRMwW0cqM7E1PgjG
        subject_person_id: p_YaWmd84uDmuR4z7SAP4Eam
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cDtAvQGzuVZRFeJxenEh2g
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GNOgFZb3AiomKz2ArQDlox
          claim_id: c_Od3aGJSRMwW0cqM7E1PgjG
          source_id: s_hQPa37YUT1hpcYJ1GEai5p
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百六十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cDtAvQGzuVZRFeJxenEh2g
        status: active
        display_name: 王可信
        merged_into_person_id: null
    - claim:
        id: c_IuTcRRNqkXZGJDALFBEL7v
        subject_person_id: p_YaWmd84uDmuR4z7SAP4Eam
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8mFJP2Y3Yw2EQdqbHRHn1D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WmtPykGdo-LYdoyFsCKhcc
          claim_id: c_IuTcRRNqkXZGJDALFBEL7v
          source_id: s_EFplVKxtU1u6ejjBrX6mgi
          stance: supports
          locator: CBDB：兄弟 王可信（204413）之父／母 王崇德
          quotation: null
          interpretation_note: 由兄弟关系推断：王可任 与 王可信 为同胞（CBDB 记「兄」），王可信 之父／母即 王可任 之父／母。
          source:
            id: s_EFplVKxtU1u6ejjBrX6mgi
            source_type: api_record
            title: 中国历代人物传记资料库：王可任（CBDB 318732）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318732&o=json
            external_identifier: CBDB:318732
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8mFJP2Y3Yw2EQdqbHRHn1D
        status: active
        display_name: 王可任
        merged_into_person_id: null
    - claim:
        id: c_gekqdQxrr00-l_S-Ao9Fbb
        subject_person_id: p_YaWmd84uDmuR4z7SAP4Eam
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GAhwHBL32MHPKrLBBb94dh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V5abcZ5U1i4XSX1XLVLrZN
          claim_id: c_gekqdQxrr00-l_S-Ao9Fbb
          source_id: s_XdM15zwEdeImkQzS1RQLxU
          stance: supports
          locator: CBDB：兄弟 王可信（204413）之父／母 王崇德
          quotation: null
          interpretation_note: 由兄弟关系推断：王可使 与 王可信 为同胞（CBDB 记「兄」），王可信 之父／母即 王可使 之父／母。
          source:
            id: s_XdM15zwEdeImkQzS1RQLxU
            source_type: api_record
            title: 中国历代人物传记资料库：王可使（CBDB 318734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318734&o=json
            external_identifier: CBDB:318734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GAhwHBL32MHPKrLBBb94dh
        status: active
        display_name: 王可使
        merged_into_person_id: null
    - claim:
        id: c_h57guq7Xq_Xysbgq1OFihZ
        subject_person_id: p_YaWmd84uDmuR4z7SAP4Eam
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_W5CQqhXv8GjNX1UhH3H9fP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9d7fVRPgB-QliE_4q_wmTn
          claim_id: c_h57guq7Xq_Xysbgq1OFihZ
          source_id: s_hszi-39s5_NID9rMAs3hSW
          stance: supports
          locator: CBDB：兄弟 王可信（204413）之父／母 王崇德
          quotation: null
          interpretation_note: 由兄弟关系推断：王可佳 与 王可信 为同胞（CBDB 记「兄」），王可信 之父／母即 王可佳 之父／母。
          source:
            id: s_hszi-39s5_NID9rMAs3hSW
            source_type: api_record
            title: 中国历代人物传记资料库：王可佳（CBDB 318735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318735&o=json
            external_identifier: CBDB:318735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_W5CQqhXv8GjNX1UhH3H9fP
        status: active
        display_name: 王可佳
        merged_into_person_id: null
    - claim:
        id: c_xR1SkEsakeTeQ-zQRNeeN2
        subject_person_id: p_YaWmd84uDmuR4z7SAP4Eam
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eKfSMwBRfJQQhnwYk2b6Tx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zjAQhYXvvEjYmr24HbSN6b
          claim_id: c_xR1SkEsakeTeQ-zQRNeeN2
          source_id: s_JAWSMeHXmrcs_lv76Yewe7
          stance: supports
          locator: CBDB：兄弟 王可信（204413）之父／母 王崇德
          quotation: null
          interpretation_note: 由兄弟关系推断：王可椅 与 王可信 为同胞（CBDB 记「兄」），王可信 之父／母即 王可椅 之父／母。
          source:
            id: s_JAWSMeHXmrcs_lv76Yewe7
            source_type: api_record
            title: 中国历代人物传记资料库：王可椅（CBDB 318733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318733&o=json
            external_identifier: CBDB:318733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eKfSMwBRfJQQhnwYk2b6Tx
        status: active
        display_name: 王可椅
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王崇德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇德 | accepted |
| bio.summary | 王崇德，明人物。嘉靖三十二年進士，籍贯平鄉，曾任教授。（中国历代人物传记资料库 CBDB 318728） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_cDtAvQGzuVZRFeJxenEh2g | 王可信 | accepted |
| children | p_8mFJP2Y3Yw2EQdqbHRHn1D | 王可任 | accepted |
| children | p_GAhwHBL32MHPKrLBBb94dh | 王可使 | accepted |
| children | p_W5CQqhXv8GjNX1UhH3H9fP | 王可佳 | accepted |
| children | p_eKfSMwBRfJQQhnwYk2b6Tx | 王可椅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇德（CBDB 318728）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318728&o=json)
- [中国历代人物传记资料库：王可佳（CBDB 318735）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318735&o=json)
- [中国历代人物传记资料库：王可任（CBDB 318732）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318732&o=json)
- [中国历代人物传记资料库：王可使（CBDB 318734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318734&o=json)
- [中国历代人物传记资料库：王可椅（CBDB 318733）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318733&o=json)
