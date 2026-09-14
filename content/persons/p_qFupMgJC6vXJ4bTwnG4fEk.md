---
schema: wang-person/v1
id: p_qFupMgJC6vXJ4bTwnG4fEk
status: active
merged_into: null
display_name: 王粟
cbdb_id: 252279
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2G3Nc7PZTxHr55juQB6cxK
        subject_person_id: p_qFupMgJC6vXJ4bTwnG4fEk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王粟，明人物。景泰五年進士，籍贯南溪。（中国历代人物传记资料库 CBDB 252279）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_DD9DKEG8QXBsHzxIGtj2sH
          claim_id: c_2G3Nc7PZTxHr55juQB6cxK
          source_id: s_LjMrXc3jPSJZ7NVGYiEP1b
          stance: supports
          locator: CBDB:252279
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_LjMrXc3jPSJZ7NVGYiEP1b
            source_type: api_record
            title: 中国历代人物传记资料库：王粟（CBDB 252279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252279&o=json
            external_identifier: CBDB:252279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_txD2DcBbVhvVvx91EeKrFy
        subject_person_id: p_qFupMgJC6vXJ4bTwnG4fEk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王粟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_aBqy7kEoQse3zppMemEK7y
          claim_id: c_txD2DcBbVhvVvx91EeKrFy
          source_id: s_LjMrXc3jPSJZ7NVGYiEP1b
          stance: supports
          locator: CBDB:252279
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7yluJGxFj6uvvOkIKu-Unm
        subject_person_id: p_iV3ZGAEu7iRtxc7pxEmjVQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qFupMgJC6vXJ4bTwnG4fEk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZeJA9iC2IwtC4npYDa1nRO
          claim_id: c_7yluJGxFj6uvvOkIKu-Unm
          source_id: s_U8H5Ge1K6fqwwoN8MIVwkn
          stance: supports
          locator: CBDB：兄弟 王穀（198288）之父／母 王宴
          quotation: null
          interpretation_note: 由兄弟关系推断：王粟 与 王穀 为同胞（CBDB 记「兄」），王穀 之父／母即 王粟 之父／母。
          source:
            id: s_U8H5Ge1K6fqwwoN8MIVwkn
            source_type: api_record
            title: 中国历代人物传记资料库：王粟（CBDB 252279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252279&o=json
            external_identifier: CBDB:252279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iV3ZGAEu7iRtxc7pxEmjVQ
        status: active
        display_name: 王宴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_HdRXkHmqmmkKk2uG-ANMLr
        subject_person_id: p_qFupMgJC6vXJ4bTwnG4fEk
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xRgAFF1QF89F297F8SmuRt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xi6dQpGT8Be-3m-AzjA9Dz
          claim_id: c_HdRXkHmqmmkKk2uG-ANMLr
          source_id: s_U8H5Ge1K6fqwwoN8MIVwkn
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198288 王穀）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_U8H5Ge1K6fqwwoN8MIVwkn
            source_type: api_record
            title: 中国历代人物传记资料库：王粟（CBDB 252279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252279&o=json
            external_identifier: CBDB:252279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xRgAFF1QF89F297F8SmuRt
        status: active
        display_name: 王穀
        merged_into_person_id: null
---

# 王粟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王粟，明人物。景泰五年進士，籍贯南溪。（中国历代人物传记资料库 CBDB 252279） | accepted |
| name.primary | 王粟 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iV3ZGAEu7iRtxc7pxEmjVQ | 王宴 | accepted |
| other | p_xRgAFF1QF89F297F8SmuRt | 王穀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王粟（CBDB 252279）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252279&o=json)
