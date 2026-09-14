---
schema: wang-person/v1
id: p_uDirupxgX4n5Uue7GWds8u
status: active
merged_into: null
display_name: 王廷錄
cbdb_id: 279537
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9Mb7aoyHmJ3XvAZCBKPxG9
        subject_person_id: p_uDirupxgX4n5Uue7GWds8u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷錄，明人物。正德十二年進士，籍贯黃岡，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 279537）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_L6HxOVDScd_oqv6T3XFBR3
          claim_id: c_9Mb7aoyHmJ3XvAZCBKPxG9
          source_id: s_N6A3sL7rQ9Qi7C9Mjn9Lbx
          stance: supports
          locator: CBDB:279537
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_N6A3sL7rQ9Qi7C9Mjn9Lbx
            source_type: api_record
            title: 中国历代人物传记资料库：王廷錄（CBDB 279537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279537&o=json
            external_identifier: CBDB:279537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_eoS3ojVsb44RQXDuX9J6L2
        subject_person_id: p_uDirupxgX4n5Uue7GWds8u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷錄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DaBjV1QrMxaWPDuP4ExEio
          claim_id: c_eoS3ojVsb44RQXDuX9J6L2
          source_id: s_N6A3sL7rQ9Qi7C9Mjn9Lbx
          stance: supports
          locator: CBDB:279537
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_e3dUff6avdJyiRqirLm6Rl
        subject_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uDirupxgX4n5Uue7GWds8u
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o1XzwG7_P6435gf-x_AeN-
          claim_id: c_e3dUff6avdJyiRqirLm6Rl
          source_id: s_aioNf64PJTnB7lVZXO4tZA
          stance: supports
          locator: CBDB：兄弟 王廷陳（34668）之父／母 王濟
          quotation: null
          interpretation_note: 由兄弟关系推断：王廷錄 与 王廷陳 为同胞（CBDB 记「弟」），王廷陳 之父／母即 王廷錄 之父／母。
          source:
            id: s_aioNf64PJTnB7lVZXO4tZA
            source_type: api_record
            title: 中国历代人物传记资料库：王廷錄（CBDB 279537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279537&o=json
            external_identifier: CBDB:279537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CF5LJP7gMSDjjxZDLTJKd5
        status: active
        display_name: 王濟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_5TMLPB5syVTcvy7f2K8MaC
        subject_person_id: p_qLcC4SmUNJ1rkkQyeeqtKk
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uDirupxgX4n5Uue7GWds8u
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZawKbzOm50Tfkm-1GuT-1p
          claim_id: c_5TMLPB5syVTcvy7f2K8MaC
          source_id: s_aioNf64PJTnB7lVZXO4tZA
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 34668 王廷陳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_aioNf64PJTnB7lVZXO4tZA
            source_type: api_record
            title: 中国历代人物传记资料库：王廷錄（CBDB 279537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279537&o=json
            external_identifier: CBDB:279537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qLcC4SmUNJ1rkkQyeeqtKk
        status: active
        display_name: 王廷陳
        merged_into_person_id: null
---

# 王廷錄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王廷錄，明人物。正德十二年進士，籍贯黃岡，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 279537） | accepted |
| name.primary | 王廷錄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CF5LJP7gMSDjjxZDLTJKd5 | 王濟 | accepted |
| other | p_qLcC4SmUNJ1rkkQyeeqtKk | 王廷陳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷錄（CBDB 279537）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279537&o=json)
