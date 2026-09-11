---
schema: wang-person/v1
id: p_tJA4SGo5rnDTPZB6FnPcWP
status: active
merged_into: null
display_name: 周氏
cbdb_id: 37792
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eruFM9CvtRbVmptXpNvC8D
        subject_person_id: p_tJA4SGo5rnDTPZB6FnPcWP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 周氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uj92oYPqW5NN76k6iMtPN1
          claim_id: c_eruFM9CvtRbVmptXpNvC8D
          source_id: s_wEkVgfUrxKckakiL9hkMpN
          stance: supports
          locator: Q45432073
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_wEkVgfUrxKckakiL9hkMpN
            source_type: api_record
            title: 维基数据：周氏（Q45432073）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45432073
            external_identifier: Q45432073
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_DhCeei9bVCYFBdJFpvg7Gb
          claim_id: c_eruFM9CvtRbVmptXpNvC8D
          source_id: s_ZbRR2qinMrmQKSJZ5nhy4i
          stance: supports
          locator: CBDB:37792
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_ZbRR2qinMrmQKSJZ5nhy4i
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：周氏（37792）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37792&o=json
            external_identifier: CBDB:37792
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Xv8mIaQZlj-FhhCb_tQlWX
        subject_person_id: p_tJA4SGo5rnDTPZB6FnPcWP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zAMNQJueCwPPKR5vjoLaAD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RfcV0ZLx5w5PaCzSjk_aLn
          claim_id: c_Xv8mIaQZlj-FhhCb_tQlWX
          source_id: s_ZbRR2qinMrmQKSJZ5nhy4i
          stance: supports
          locator: 宋人傳記資料索引(電子版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zAMNQJueCwPPKR5vjoLaAD
        status: active
        display_name: 王彦博
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_tGyE6Vpg4Y6NDkC3L7GpQZ
        subject_person_id: p_tJA4SGo5rnDTPZB6FnPcWP
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Ue4bc6JWNDY3CgoJjDceoC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ytkK5QrgZeGBxgtNu8VQ47
          claim_id: c_tGyE6Vpg4Y6NDkC3L7GpQZ
          source_id: s_wEkVgfUrxKckakiL9hkMpN
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_pUtycMAjmgxmoXHez6KEMc
          claim_id: c_tGyE6Vpg4Y6NDkC3L7GpQZ
          source_id: s_7fjU4ew89CPXuYB51QW2G2
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_7fjU4ew89CPXuYB51QW2G2
            source_type: api_record
            title: 维基数据：王丕（Q45409552）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45409552
            external_identifier: Q45409552
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:14.259Z
            metadata_json: null
        - id: cs_kchwVhEjTZ2jynRxspWXT7
          claim_id: c_tGyE6Vpg4Y6NDkC3L7GpQZ
          source_id: s_EiMgRxz8FvPwrjw5WC3uNG
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_EiMgRxz8FvPwrjw5WC3uNG
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王丕（26228）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26228&o=json
            external_identifier: CBDB:26228
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:14.430Z
            metadata_json: null
      object_person:
        id: p_Ue4bc6JWNDY3CgoJjDceoC
        status: active
        display_name: 王丕
        merged_into_person_id: null
  ancestors: []
  descendants:
    - claim:
        id: c_9uulRTBA2Iz-C_4SJNCPoa
        subject_person_id: p_tJA4SGo5rnDTPZB6FnPcWP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_A4y88KqDgYC7CBnr5hYZf3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cOMtE4KMJZT-RvSK5xGdIw
          claim_id: c_9uulRTBA2Iz-C_4SJNCPoa
          source_id: s_ZbRR2qinMrmQKSJZ5nhy4i
          stance: supports
          locator: 宋人傳記資料索引(電子版)：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_A4y88KqDgYC7CBnr5hYZf3
        status: active
        display_name: 王龜齡
        merged_into_person_id: null
    - claim:
        id: c_IH5VuZjcxJZzFnqPi7IX2h
        subject_person_id: p_tJA4SGo5rnDTPZB6FnPcWP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Bxf4gH2xyWjLA2FCR3BhN7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3Mom-65cH-S_1NJ31O5vSA
          claim_id: c_IH5VuZjcxJZzFnqPi7IX2h
          source_id: s_ZbRR2qinMrmQKSJZ5nhy4i
          stance: supports
          locator: 宋人傳記資料索引(電子版)：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Bxf4gH2xyWjLA2FCR3BhN7
        status: active
        display_name: 王松龄
        merged_into_person_id: null
    - claim:
        id: c_up25hxPvTxv1QCbpv_FIp_
        subject_person_id: p_tJA4SGo5rnDTPZB6FnPcWP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ib1JCPDpb1b5Zbw7uh5HuV
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qVsgIrrs5Lev_QIuMVCOqz
          claim_id: c_up25hxPvTxv1QCbpv_FIp_
          source_id: s_ZbRR2qinMrmQKSJZ5nhy4i
          stance: supports
          locator: 宋人傳記資料索引(電子版)：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ib1JCPDpb1b5Zbw7uh5HuV
        status: active
        display_name: 王彤
        merged_into_person_id: null
    - claim:
        id: c_N25NvcRn_ZvcWvHrckmS0n
        subject_person_id: p_tJA4SGo5rnDTPZB6FnPcWP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3Jpz1MJr19NoGHADTpC82d
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WVbA_pfL0B8JVyvy432lOR
          claim_id: c_N25NvcRn_ZvcWvHrckmS0n
          source_id: s_ZbRR2qinMrmQKSJZ5nhy4i
          stance: supports
          locator: 宋人傳記資料索引(電子版)：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3Jpz1MJr19NoGHADTpC82d
        status: active
        display_name: 王串
        merged_into_person_id: null
    - claim:
        id: c_15OzTxbIoogJHnMYW5kR7h
        subject_person_id: p_tJA4SGo5rnDTPZB6FnPcWP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TXR4BZHWFYBdp9oHRn9hCf
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YUot7l1Drjnz2KptasujCV
          claim_id: c_15OzTxbIoogJHnMYW5kR7h
          source_id: s_ZbRR2qinMrmQKSJZ5nhy4i
          stance: supports
          locator: 宋人傳記資料索引(電子版)：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TXR4BZHWFYBdp9oHRn9hCf
        status: active
        display_name: 王聿
        merged_into_person_id: null
    - claim:
        id: c_9Mxiks4-5Qow5pWElZ8Ez2
        subject_person_id: p_tJA4SGo5rnDTPZB6FnPcWP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kdXLrKQ2gAzwQuRiYauex1
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e-ZnvLqCbWSfjWhAQomEPG
          claim_id: c_9Mxiks4-5Qow5pWElZ8Ez2
          source_id: s_ZbRR2qinMrmQKSJZ5nhy4i
          stance: supports
          locator: 宋人傳記資料索引(電子版)：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kdXLrKQ2gAzwQuRiYauex1
        status: active
        display_name: 王中
        merged_into_person_id: null
    - claim:
        id: c_yBJfr2wp05oGMCbiDhE0l7
        subject_person_id: p_tJA4SGo5rnDTPZB6FnPcWP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Q29adPUD8QELC98tWHj9Az
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qt0W3Q50ZEVO6Z5QXr2LmY
          claim_id: c_yBJfr2wp05oGMCbiDhE0l7
          source_id: s_ZbRR2qinMrmQKSJZ5nhy4i
          stance: supports
          locator: 宋人傳記資料索引(電子版)：玄孫;四世孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Q29adPUD8QELC98tWHj9Az
        status: active
        display_name: 王懋
        merged_into_person_id: null
  other: []
---

# 周氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 周氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_zAMNQJueCwPPKR5vjoLaAD | 王彦博 | accepted |
| spouses | p_Ue4bc6JWNDY3CgoJjDceoC | 王丕 | accepted |
| descendants | p_A4y88KqDgYC7CBnr5hYZf3 | 王龜齡 | accepted |
| descendants | p_Bxf4gH2xyWjLA2FCR3BhN7 | 王松龄 | accepted |
| descendants | p_ib1JCPDpb1b5Zbw7uh5HuV | 王彤 | accepted |
| descendants | p_3Jpz1MJr19NoGHADTpC82d | 王串 | accepted |
| descendants | p_TXR4BZHWFYBdp9oHRn9hCf | 王聿 | accepted |
| descendants | p_kdXLrKQ2gAzwQuRiYauex1 | 王中 | accepted |
| descendants | p_Q29adPUD8QELC98tWHj9Az | 王懋 | accepted |

## 外部来源

- [维基数据：王丕（Q45409552）](https://www.wikidata.org/wiki/Q45409552)
- [维基数据：周氏（Q45432073）](https://www.wikidata.org/wiki/Q45432073)
- [CBDB 中国历代人物传记资料库：王丕（26228）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26228&o=json)
- [CBDB 中国历代人物传记资料库：周氏（37792）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37792&o=json)
