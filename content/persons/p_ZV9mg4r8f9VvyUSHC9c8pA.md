---
schema: wang-person/v1
id: p_ZV9mg4r8f9VvyUSHC9c8pA
status: active
merged_into: null
display_name: 王君錫
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_92TzkugmwqSJ5v8n2LoDoM
        subject_person_id: p_ZV9mg4r8f9VvyUSHC9c8pA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oPhLwX138NG4Gbg4Nscq99
          claim_id: c_92TzkugmwqSJ5v8n2LoDoM
          source_id: s_5U67mkNdMJt9i6dF4WEa66
          stance: supports
          locator: CBDB:325023
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（325023）
          source: &a1
            id: s_5U67mkNdMJt9i6dF4WEa66
            source_type: api_record
            title: 中国历代人物传记资料库：王君錫（CBDB 325023）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325023&o=json
            external_identifier: CBDB:325023
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.195Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Lb6n22K7U1kNdrhpX1GkmP
        subject_person_id: p_ZV9mg4r8f9VvyUSHC9c8pA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君錫，明人物。嘉靖三十八年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 325023）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZXe8GNF_GxoGnsanEpDWI-
          claim_id: c_Lb6n22K7U1kNdrhpX1GkmP
          source_id: s_5U67mkNdMJt9i6dF4WEa66
          stance: supports
          locator: CBDB:325023
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ABNwmcCN5SRxo1ObIiiBAZ
        subject_person_id: p_3UKbRHPbQbqFq84iP2CGsh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZV9mg4r8f9VvyUSHC9c8pA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l9okcV8GIXvMppmNp2IiI4
          claim_id: c_ABNwmcCN5SRxo1ObIiiBAZ
          source_id: s_eewzCb4P8NGDW29AsBPQhs
          stance: supports
          locator: CBDB：兄弟 王君賞（204856）之父／母 王惠
          quotation: null
          interpretation_note: 由兄弟关系推断：王君錫 与 王君賞 为同胞（CBDB 记「弟」），王君賞 之父／母即 王君錫 之父／母。
          source:
            id: s_eewzCb4P8NGDW29AsBPQhs
            source_type: api_record
            title: 中国历代人物传记资料库：王君錫（CBDB 325023）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325023&o=json
            external_identifier: CBDB:325023
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3UKbRHPbQbqFq84iP2CGsh
        status: active
        display_name: 王惠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_rkRap_nhdCoLnVtjB4Uf8n
        subject_person_id: p_AsKndUgLV5THcrwWuRrJU9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZV9mg4r8f9VvyUSHC9c8pA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KaX2cGYXvBA8VWLwdi_bAo
          claim_id: c_rkRap_nhdCoLnVtjB4Uf8n
          source_id: s_eewzCb4P8NGDW29AsBPQhs
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204856 王君賞）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_eewzCb4P8NGDW29AsBPQhs
            source_type: api_record
            title: 中国历代人物传记资料库：王君錫（CBDB 325023）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325023&o=json
            external_identifier: CBDB:325023
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AsKndUgLV5THcrwWuRrJU9
        status: active
        display_name: 王君賞
        merged_into_person_id: null
---

# 王君錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王君錫 | accepted |
| bio.summary | 王君錫，明人物。嘉靖三十八年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 325023） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3UKbRHPbQbqFq84iP2CGsh | 王惠 | accepted |
| other | p_AsKndUgLV5THcrwWuRrJU9 | 王君賞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王君錫（CBDB 325023）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325023&o=json)
