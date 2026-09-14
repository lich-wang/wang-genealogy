---
schema: wang-person/v1
id: p_gowA3oBCakD6RUbFUVQs5N
status: active
merged_into: null
display_name: 王珢
cbdb_id: 284306
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eEet7Yo6K3GtA6TBVhVXGc
        subject_person_id: p_gowA3oBCakD6RUbFUVQs5N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珢，明人物。正德十六年進士，籍贯唐山。（中国历代人物传记资料库 CBDB 284306）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_0sh21vQF7aYrdpiy53aQ0I
          claim_id: c_eEet7Yo6K3GtA6TBVhVXGc
          source_id: s_fDPEUwMx5fV4eKFwES2BuA
          stance: supports
          locator: CBDB:284306
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_fDPEUwMx5fV4eKFwES2BuA
            source_type: api_record
            title: 中国历代人物传记资料库：王珢（CBDB 284306）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284306&o=json
            external_identifier: CBDB:284306
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_mNjbQ74JWVigbZbzLzVT4M
        subject_person_id: p_gowA3oBCakD6RUbFUVQs5N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Lb3VkaB8GbxFgEcZVz4DxF
          claim_id: c_mNjbQ74JWVigbZbzLzVT4M
          source_id: s_fDPEUwMx5fV4eKFwES2BuA
          stance: supports
          locator: CBDB:284306
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_V3wDI7NZ9f5N5IiAVpByzo
        subject_person_id: p_CN2jDLgCox9JFiLJPyx2Za
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gowA3oBCakD6RUbFUVQs5N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UQ9X5OjNXNFrzJQR6x1jx7
          claim_id: c_V3wDI7NZ9f5N5IiAVpByzo
          source_id: s_W0ky_mgl51OBuQVqvGuiAy
          stance: supports
          locator: CBDB：兄弟 王密（202150）之父／母 王鎮
          quotation: null
          interpretation_note: 由兄弟关系推断：王珢 与 王密 为同胞（CBDB 记「兄」），王密 之父／母即 王珢 之父／母。
          source:
            id: s_W0ky_mgl51OBuQVqvGuiAy
            source_type: api_record
            title: 中国历代人物传记资料库：王珢（CBDB 284306）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284306&o=json
            external_identifier: CBDB:284306
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CN2jDLgCox9JFiLJPyx2Za
        status: active
        display_name: 王鎮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_fqg1SXTEnPiTJlmkSnIX_4
        subject_person_id: p_3VWyJNWMm17kXtvGcMVL5b
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gowA3oBCakD6RUbFUVQs5N
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sFe_KffJqCkiVkbZNJ19Ke
          claim_id: c_fqg1SXTEnPiTJlmkSnIX_4
          source_id: s_W0ky_mgl51OBuQVqvGuiAy
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202150 王密）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_W0ky_mgl51OBuQVqvGuiAy
            source_type: api_record
            title: 中国历代人物传记资料库：王珢（CBDB 284306）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284306&o=json
            external_identifier: CBDB:284306
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3VWyJNWMm17kXtvGcMVL5b
        status: active
        display_name: 王密
        merged_into_person_id: null
---

# 王珢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王珢，明人物。正德十六年進士，籍贯唐山。（中国历代人物传记资料库 CBDB 284306） | accepted |
| name.primary | 王珢 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CN2jDLgCox9JFiLJPyx2Za | 王鎮 | accepted |
| other | p_3VWyJNWMm17kXtvGcMVL5b | 王密 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珢（CBDB 284306）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284306&o=json)
