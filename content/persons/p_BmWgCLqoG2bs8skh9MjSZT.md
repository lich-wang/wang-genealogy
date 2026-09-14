---
schema: wang-person/v1
id: p_BmWgCLqoG2bs8skh9MjSZT
status: active
merged_into: null
display_name: 王寬
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_k7Vh6fqxuR6vU8DsyixtEx
        subject_person_id: p_BmWgCLqoG2bs8skh9MjSZT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EAbWsGXQePJo2he3VPP7Si
          claim_id: c_k7Vh6fqxuR6vU8DsyixtEx
          source_id: s_pSMxm3LNXknL3ZejDQQ4qe
          stance: supports
          locator: CBDB:245704
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（245704）
          source: &a1
            id: s_pSMxm3LNXknL3ZejDQQ4qe
            source_type: api_record
            title: 中国历代人物传记资料库：王寬（CBDB 245704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245704&o=json
            external_identifier: CBDB:245704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.074Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7gXM1MYBvmevRXyHX8u9LK
        subject_person_id: p_BmWgCLqoG2bs8skh9MjSZT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寬，明人物。成化八年進士，籍贯文登。（中国历代人物传记资料库 CBDB 245704）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-qfobJjFVEkaaTSXIW98dG
          claim_id: c_7gXM1MYBvmevRXyHX8u9LK
          source_id: s_pSMxm3LNXknL3ZejDQQ4qe
          stance: supports
          locator: CBDB:245704
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DPd0IRlkNlORa8EfqytW68
        subject_person_id: p_P3bk3vpKCZxTvFzWKE93mj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BmWgCLqoG2bs8skh9MjSZT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fI_80hwTCUd67dN7544Xz4
          claim_id: c_DPd0IRlkNlORa8EfqytW68
          source_id: s_13mK4eiRjF8YlrrRnd5UFX
          stance: supports
          locator: CBDB：兄弟 王宏（199484）之父／母 王麟
          quotation: null
          interpretation_note: 由兄弟关系推断：王寬 与 王宏 为同胞（CBDB 记「兄」），王宏 之父／母即 王寬 之父／母。
          source:
            id: s_13mK4eiRjF8YlrrRnd5UFX
            source_type: api_record
            title: 中国历代人物传记资料库：王寬（CBDB 245704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245704&o=json
            external_identifier: CBDB:245704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_P3bk3vpKCZxTvFzWKE93mj
        status: active
        display_name: 王麟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_uEDoSZvkp2U-SX46YlZI6v
        subject_person_id: p_BmWgCLqoG2bs8skh9MjSZT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wEuXW2QRPfavvbFYPCJ1DK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e2WKX6gWkzIof8dtoO4ine
          claim_id: c_uEDoSZvkp2U-SX46YlZI6v
          source_id: s_13mK4eiRjF8YlrrRnd5UFX
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199484 王宏）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_13mK4eiRjF8YlrrRnd5UFX
            source_type: api_record
            title: 中国历代人物传记资料库：王寬（CBDB 245704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245704&o=json
            external_identifier: CBDB:245704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wEuXW2QRPfavvbFYPCJ1DK
        status: active
        display_name: 王宏
        merged_into_person_id: null
---

# 王寬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寬 | accepted |
| bio.summary | 王寬，明人物。成化八年進士，籍贯文登。（中国历代人物传记资料库 CBDB 245704） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_P3bk3vpKCZxTvFzWKE93mj | 王麟 | accepted |
| other | p_wEuXW2QRPfavvbFYPCJ1DK | 王宏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寬（CBDB 245704）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245704&o=json)
