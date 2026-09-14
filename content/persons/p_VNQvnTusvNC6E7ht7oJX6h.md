---
schema: wang-person/v1
id: p_VNQvnTusvNC6E7ht7oJX6h
status: active
merged_into: null
display_name: 王學舜
cbdb_id: 287451
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NnxKD3esB43g8nNv7n6Txi
        subject_person_id: p_VNQvnTusvNC6E7ht7oJX6h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學舜，明人物。嘉靖八年進士，籍贯安福，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 287451）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_yIDWXbATr4gPExYvAi8aZ9
          claim_id: c_NnxKD3esB43g8nNv7n6Txi
          source_id: s_PbgtimE3gzngNRs1MjZLY7
          stance: supports
          locator: CBDB:287451
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_PbgtimE3gzngNRs1MjZLY7
            source_type: api_record
            title: 中国历代人物传记资料库：王學舜（CBDB 287451）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287451&o=json
            external_identifier: CBDB:287451
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_uDcPp41zUwjU4Pn57rrBgD
        subject_person_id: p_VNQvnTusvNC6E7ht7oJX6h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學舜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_HGyZW6jP5uNeLm1zt8KVoB
          claim_id: c_uDcPp41zUwjU4Pn57rrBgD
          source_id: s_PbgtimE3gzngNRs1MjZLY7
          stance: supports
          locator: CBDB:287451
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_eonJwzwtVt0w1S9eXzF8Xs
        subject_person_id: p_EJz6NDNXPRUy1b3XSr2FQp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VNQvnTusvNC6E7ht7oJX6h
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hVGqhGyB3tNF0BDcOLLnIJ
          claim_id: c_eonJwzwtVt0w1S9eXzF8Xs
          source_id: s_yqV_elKtnesszEEr_8_PZf
          stance: supports
          locator: CBDB：兄弟 王學益（202399）之父／母 王稼
          quotation: null
          interpretation_note: 由兄弟关系推断：王學舜 与 王學益 为同胞（CBDB 记「弟」），王學益 之父／母即 王學舜 之父／母。
          source:
            id: s_yqV_elKtnesszEEr_8_PZf
            source_type: api_record
            title: 中国历代人物传记资料库：王學舜（CBDB 287451）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287451&o=json
            external_identifier: CBDB:287451
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EJz6NDNXPRUy1b3XSr2FQp
        status: active
        display_name: 王稼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_6OwFD1mgZwgLHwUnX8c3L5
        subject_person_id: p_EoY6249MAYNFPdVz2u3z4E
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_VNQvnTusvNC6E7ht7oJX6h
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t30aH5Zo-r3O4GNEI8iu6A
          claim_id: c_6OwFD1mgZwgLHwUnX8c3L5
          source_id: s_yqV_elKtnesszEEr_8_PZf
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202399 王學益）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_yqV_elKtnesszEEr_8_PZf
            source_type: api_record
            title: 中国历代人物传记资料库：王學舜（CBDB 287451）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287451&o=json
            external_identifier: CBDB:287451
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EoY6249MAYNFPdVz2u3z4E
        status: active
        display_name: 王學益
        merged_into_person_id: null
---

# 王學舜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王學舜，明人物。嘉靖八年進士，籍贯安福，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 287451） | accepted |
| name.primary | 王學舜 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EJz6NDNXPRUy1b3XSr2FQp | 王稼 | accepted |
| other | p_EoY6249MAYNFPdVz2u3z4E | 王學益 | accepted |

## 外部来源

- [中国历代人物传记资料库：王學舜（CBDB 287451）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287451&o=json)
