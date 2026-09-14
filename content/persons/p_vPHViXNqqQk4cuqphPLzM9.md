---
schema: wang-person/v1
id: p_vPHViXNqqQk4cuqphPLzM9
status: active
merged_into: null
display_name: 王夔
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nbP9KEkvQy4K2xgkZEYJdj
        subject_person_id: p_vPHViXNqqQk4cuqphPLzM9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UAjMNYithyn41NpB1mieTB
          claim_id: c_nbP9KEkvQy4K2xgkZEYJdj
          source_id: s_UJdDwEY6UP5xaB6SkW6UHw
          stance: supports
          locator: CBDB:248695
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（248695）
          source: &a1
            id: s_UJdDwEY6UP5xaB6SkW6UHw
            source_type: api_record
            title: 中国历代人物传记资料库：王夔（CBDB 248695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248695&o=json
            external_identifier: CBDB:248695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.158Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Vt5RkLFcLSZwDLwC9EFf9q
        subject_person_id: p_vPHViXNqqQk4cuqphPLzM9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夔，明人物。成化十一年進士，籍贯華亭。（中国历代人物传记资料库 CBDB 248695）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_d19l8pHiDR7QHNMM7b6o6-
          claim_id: c_Vt5RkLFcLSZwDLwC9EFf9q
          source_id: s_UJdDwEY6UP5xaB6SkW6UHw
          stance: supports
          locator: CBDB:248695
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_M9tLHd1Yt076zHd8pTVv-2
        subject_person_id: p_9B1FXBmYAzycryvGH6JiV6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vPHViXNqqQk4cuqphPLzM9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q38oCnEa99BihcLKRq5q1t
          claim_id: c_M9tLHd1Yt076zHd8pTVv-2
          source_id: s_oNolK4ay0lxcBdLcC69jvc
          stance: supports
          locator: CBDB：兄弟 王皋（199701）之父／母 王瑽
          quotation: null
          interpretation_note: 由兄弟关系推断：王夔 与 王皋 为同胞（CBDB 记「兄」），王皋 之父／母即 王夔 之父／母。
          source:
            id: s_oNolK4ay0lxcBdLcC69jvc
            source_type: api_record
            title: 中国历代人物传记资料库：王夔（CBDB 248695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248695&o=json
            external_identifier: CBDB:248695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9B1FXBmYAzycryvGH6JiV6
        status: active
        display_name: 王瑽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_oUa4gBUbmavzwYz9FPISaG
        subject_person_id: p_vPHViXNqqQk4cuqphPLzM9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zp2AZ2hRUut6GtZ8fNkjjs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eGmwUCxGyk6dte4Uz6Aq_q
          claim_id: c_oUa4gBUbmavzwYz9FPISaG
          source_id: s_oNolK4ay0lxcBdLcC69jvc
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199701 王皋）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oNolK4ay0lxcBdLcC69jvc
            source_type: api_record
            title: 中国历代人物传记资料库：王夔（CBDB 248695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248695&o=json
            external_identifier: CBDB:248695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zp2AZ2hRUut6GtZ8fNkjjs
        status: active
        display_name: 王皋
        merged_into_person_id: null
---

# 王夔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夔 | accepted |
| bio.summary | 王夔，明人物。成化十一年進士，籍贯華亭。（中国历代人物传记资料库 CBDB 248695） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9B1FXBmYAzycryvGH6JiV6 | 王瑽 | accepted |
| other | p_zp2AZ2hRUut6GtZ8fNkjjs | 王皋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王夔（CBDB 248695）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248695&o=json)
