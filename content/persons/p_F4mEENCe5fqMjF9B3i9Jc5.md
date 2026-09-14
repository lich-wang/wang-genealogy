---
schema: wang-person/v1
id: p_F4mEENCe5fqMjF9B3i9Jc5
status: active
merged_into: null
display_name: 王三重
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5CHSnnp8vNCsdGhTCVNfCJ
        subject_person_id: p_F4mEENCe5fqMjF9B3i9Jc5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三重
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RnUbYHGU9DmtFpysKEv84R
          claim_id: c_5CHSnnp8vNCsdGhTCVNfCJ
          source_id: s_Sh9R47YxXd5RQnmikxCsDt
          stance: supports
          locator: CBDB:297446
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297446）
          source: &a1
            id: s_Sh9R47YxXd5RQnmikxCsDt
            source_type: api_record
            title: 中国历代人物传记资料库：王三重（CBDB 297446）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297446&o=json
            external_identifier: CBDB:297446
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.572Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kCT6oQB2cnjX6XwgMesgcx
        subject_person_id: p_F4mEENCe5fqMjF9B3i9Jc5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三重，明人物。嘉靖十四年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 297446）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_chW1imSHj91FHHPD4_Q3Ql
          claim_id: c_kCT6oQB2cnjX6XwgMesgcx
          source_id: s_Sh9R47YxXd5RQnmikxCsDt
          stance: supports
          locator: CBDB:297446
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PZEzvQCsfJGXGqCLOJQtef
        subject_person_id: p_VmxMBQPfyxUr32ATQz1Ta9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_F4mEENCe5fqMjF9B3i9Jc5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DLqmVJjIGCh_bxTxniDuDx
          claim_id: c_PZEzvQCsfJGXGqCLOJQtef
          source_id: s_vNrnECc7km1ko-slX1INls
          stance: supports
          locator: CBDB：兄弟 王三接（126450）之父／母 王時暘
          quotation: null
          interpretation_note: 由兄弟关系推断：王三重 与 王三接 为同胞（CBDB 记「兄」），王三接 之父／母即 王三重 之父／母。
          source:
            id: s_vNrnECc7km1ko-slX1INls
            source_type: api_record
            title: 中国历代人物传记资料库：王三重（CBDB 297446）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297446&o=json
            external_identifier: CBDB:297446
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VmxMBQPfyxUr32ATQz1Ta9
        status: active
        display_name: 王時暘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Vpr1kRiGqOBni2yVGQMWL8
        subject_person_id: p_F4mEENCe5fqMjF9B3i9Jc5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GQ5Yfy9Q67yZ3hJuaQcGg3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0mxDo6AH45K_EQfhuh-crI
          claim_id: c_Vpr1kRiGqOBni2yVGQMWL8
          source_id: s_vNrnECc7km1ko-slX1INls
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126450 王三接）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vNrnECc7km1ko-slX1INls
            source_type: api_record
            title: 中国历代人物传记资料库：王三重（CBDB 297446）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297446&o=json
            external_identifier: CBDB:297446
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GQ5Yfy9Q67yZ3hJuaQcGg3
        status: active
        display_name: 王三接
        merged_into_person_id: null
---

# 王三重

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三重 | accepted |
| bio.summary | 王三重，明人物。嘉靖十四年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 297446） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VmxMBQPfyxUr32ATQz1Ta9 | 王時暘 | accepted |
| other | p_GQ5Yfy9Q67yZ3hJuaQcGg3 | 王三接 | accepted |

## 外部来源

- [中国历代人物传记资料库：王三重（CBDB 297446）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297446&o=json)
