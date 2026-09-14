---
schema: wang-person/v1
id: p_xdMmyTQBkhL8iBNWY99mYL
status: active
merged_into: null
display_name: 王道公
cbdb_id: 313346
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6QQ8jjbvYuvCRZe8MKbVVw
        subject_person_id: p_xdMmyTQBkhL8iBNWY99mYL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道公，明人物。嘉靖二十九年進士，籍贯咸陽。（中国历代人物传记资料库 CBDB 313346）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_rr0MCk6dlD4ON-mKb5xCKy
          claim_id: c_6QQ8jjbvYuvCRZe8MKbVVw
          source_id: s_gR5JDkmn1mBUdag45t4u7Y
          stance: supports
          locator: CBDB:313346
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_gR5JDkmn1mBUdag45t4u7Y
            source_type: api_record
            title: 中国历代人物传记资料库：王道公（CBDB 313346）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313346&o=json
            external_identifier: CBDB:313346
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_RY13NoNBA7aFDL3EoqSoCx
        subject_person_id: p_xdMmyTQBkhL8iBNWY99mYL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道公
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZvisqASkTppRzA2PCCawdr
          claim_id: c_RY13NoNBA7aFDL3EoqSoCx
          source_id: s_gR5JDkmn1mBUdag45t4u7Y
          stance: supports
          locator: CBDB:313346
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_B4EEBE3DsqcEfl9Gd0HTVQ
        subject_person_id: p_5g7L2cx4uEGXE6LnD5Pz5F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xdMmyTQBkhL8iBNWY99mYL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gLH2d9Yzmzg5UTOIuhNn2q
          claim_id: c_B4EEBE3DsqcEfl9Gd0HTVQ
          source_id: s_0rgHzgedvKSJyKf9NIBD59
          stance: supports
          locator: CBDB：兄弟 王道直（204021）之父／母 王獻
          quotation: null
          interpretation_note: 由兄弟关系推断：王道公 与 王道直 为同胞（CBDB 记「兄」），王道直 之父／母即 王道公 之父／母。
          source:
            id: s_0rgHzgedvKSJyKf9NIBD59
            source_type: api_record
            title: 中国历代人物传记资料库：王道公（CBDB 313346）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313346&o=json
            external_identifier: CBDB:313346
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5g7L2cx4uEGXE6LnD5Pz5F
        status: active
        display_name: 王獻
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_qqSKtcWj7Wye0VAKFj9NL3
        subject_person_id: p_emRFonnZuCJKKPb7oDivvy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xdMmyTQBkhL8iBNWY99mYL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_la8AcoDZxUDSJfNA4JMS6l
          claim_id: c_qqSKtcWj7Wye0VAKFj9NL3
          source_id: s_0rgHzgedvKSJyKf9NIBD59
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204021 王道直）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0rgHzgedvKSJyKf9NIBD59
            source_type: api_record
            title: 中国历代人物传记资料库：王道公（CBDB 313346）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313346&o=json
            external_identifier: CBDB:313346
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_emRFonnZuCJKKPb7oDivvy
        status: active
        display_name: 王道直
        merged_into_person_id: null
---

# 王道公

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王道公，明人物。嘉靖二十九年進士，籍贯咸陽。（中国历代人物传记资料库 CBDB 313346） | accepted |
| name.primary | 王道公 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5g7L2cx4uEGXE6LnD5Pz5F | 王獻 | accepted |
| other | p_emRFonnZuCJKKPb7oDivvy | 王道直 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道公（CBDB 313346）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313346&o=json)
