---
schema: wang-person/v1
id: p_uGE9BKx8cB8q7vxNwL7651
status: active
merged_into: null
display_name: 王宛
cbdb_id: 241844
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LQcqfsdzy9B9DcJRnaELTQ
        subject_person_id: p_uGE9BKx8cB8q7vxNwL7651
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宛，明人物。成化二年進士，籍贯涇縣。（中国历代人物传记资料库 CBDB 241844）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_JJVhnoUFjXaXKWJDzGqVwV
          claim_id: c_LQcqfsdzy9B9DcJRnaELTQ
          source_id: s_5R7ZHxkyW4zQ2pJ5Q4922Q
          stance: supports
          locator: CBDB:241844
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5R7ZHxkyW4zQ2pJ5Q4922Q
            source_type: api_record
            title: 中国历代人物传记资料库：王宛（CBDB 241844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241844&o=json
            external_identifier: CBDB:241844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_r44RYHqhPkLDLCXWdYSnqN
        subject_person_id: p_uGE9BKx8cB8q7vxNwL7651
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_kkKTKuus1x2QYny1nnsi4t
          claim_id: c_r44RYHqhPkLDLCXWdYSnqN
          source_id: s_5R7ZHxkyW4zQ2pJ5Q4922Q
          stance: supports
          locator: CBDB:241844
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5oix_mHgyZ2yvlvTFShSLy
        subject_person_id: p_eN26ab6vRMdN7dn1bE1CDf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uGE9BKx8cB8q7vxNwL7651
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nEPzMbQHKW2O99q2h9l5M_
          claim_id: c_5oix_mHgyZ2yvlvTFShSLy
          source_id: s_dV9S3_faAPNbXBKrXKQsqJ
          stance: supports
          locator: CBDB：兄弟 王得孚（126702）之父／母 王子榮
          quotation: null
          interpretation_note: 由兄弟关系推断：王宛 与 王得孚 为同胞（CBDB 记「弟」），王得孚 之父／母即 王宛 之父／母。
          source:
            id: s_dV9S3_faAPNbXBKrXKQsqJ
            source_type: api_record
            title: 中国历代人物传记资料库：王宛（CBDB 241844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241844&o=json
            external_identifier: CBDB:241844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eN26ab6vRMdN7dn1bE1CDf
        status: active
        display_name: 王子榮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_znUmc05kw-37Xs5fLlgBH1
        subject_person_id: p_7a2QWukYSmEM9zh4AA1o47
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uGE9BKx8cB8q7vxNwL7651
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tncJebRq_Ge4TNOgWpD0Df
          claim_id: c_znUmc05kw-37Xs5fLlgBH1
          source_id: s_dV9S3_faAPNbXBKrXKQsqJ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126702 王得孚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dV9S3_faAPNbXBKrXKQsqJ
            source_type: api_record
            title: 中国历代人物传记资料库：王宛（CBDB 241844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241844&o=json
            external_identifier: CBDB:241844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7a2QWukYSmEM9zh4AA1o47
        status: active
        display_name: 王得孚
        merged_into_person_id: null
---

# 王宛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宛，明人物。成化二年進士，籍贯涇縣。（中国历代人物传记资料库 CBDB 241844） | accepted |
| name.primary | 王宛 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_eN26ab6vRMdN7dn1bE1CDf | 王子榮 | accepted |
| other | p_7a2QWukYSmEM9zh4AA1o47 | 王得孚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宛（CBDB 241844）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241844&o=json)
