---
schema: wang-person/v1
id: p_BXAv45PCN4HiV4iu43Sso3
status: active
merged_into: null
display_name: 王時方
cbdb_id: 287094
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3gQFjx3eD18YzgU3KQVniK
        subject_person_id: p_BXAv45PCN4HiV4iu43Sso3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時方，明人物。永樂十年進士，籍贯南康。（中国历代人物传记资料库 CBDB 287094）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_U3h40Lp87Cf1o50JlfSdEU
          claim_id: c_3gQFjx3eD18YzgU3KQVniK
          source_id: s_ZW9CDvptr172b9SjboAAd7
          stance: supports
          locator: CBDB:287094
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ZW9CDvptr172b9SjboAAd7
            source_type: api_record
            title: 中国历代人物传记资料库：王時方（CBDB 287094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287094&o=json
            external_identifier: CBDB:287094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kZ4TsPcDtcUbsUzPDUm965
        subject_person_id: p_BXAv45PCN4HiV4iu43Sso3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時方
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LNk49UnFrTSWgBLTqmJt8w
          claim_id: c_kZ4TsPcDtcUbsUzPDUm965
          source_id: s_ZW9CDvptr172b9SjboAAd7
          stance: supports
          locator: CBDB:287094
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ncSSaxbgnzlUR8QS_EEbo5
        subject_person_id: p_SeUwbsi3ek9as5xjE9GYzB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BXAv45PCN4HiV4iu43Sso3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RsBwTn37kP_Bk6t5XgREz2
          claim_id: c_ncSSaxbgnzlUR8QS_EEbo5
          source_id: s_mNUzcTxu3y_CbRU3rE-Xhx
          stance: supports
          locator: CBDB：兄弟 王時習（202373）之父／母 王敏道
          quotation: null
          interpretation_note: 由兄弟关系推断：王時方 与 王時習 为同胞（CBDB 记「兄」），王時習 之父／母即 王時方 之父／母。
          source:
            id: s_mNUzcTxu3y_CbRU3rE-Xhx
            source_type: api_record
            title: 中国历代人物传记资料库：王時方（CBDB 287094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287094&o=json
            external_identifier: CBDB:287094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SeUwbsi3ek9as5xjE9GYzB
        status: active
        display_name: 王敏道
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_EloHU3I-xzPkDVwIDMD-4w
        subject_person_id: p_BXAv45PCN4HiV4iu43Sso3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_s2J6v6Z1BCr8cEtWSejd2v
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S1CUsCY1FeoGJpqX4ldhHA
          claim_id: c_EloHU3I-xzPkDVwIDMD-4w
          source_id: s_mNUzcTxu3y_CbRU3rE-Xhx
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202373 王時習）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mNUzcTxu3y_CbRU3rE-Xhx
            source_type: api_record
            title: 中国历代人物传记资料库：王時方（CBDB 287094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287094&o=json
            external_identifier: CBDB:287094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_s2J6v6Z1BCr8cEtWSejd2v
        status: active
        display_name: 王時習
        merged_into_person_id: null
---

# 王時方

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王時方，明人物。永樂十年進士，籍贯南康。（中国历代人物传记资料库 CBDB 287094） | accepted |
| name.primary | 王時方 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SeUwbsi3ek9as5xjE9GYzB | 王敏道 | accepted |
| other | p_s2J6v6Z1BCr8cEtWSejd2v | 王時習 | accepted |

## 外部来源

- [中国历代人物传记资料库：王時方（CBDB 287094）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287094&o=json)
