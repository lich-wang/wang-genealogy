---
schema: wang-person/v1
id: p_59QovxVPXCB82j7aTmqHP5
status: active
merged_into: null
display_name: 王祿
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z6np16x7AuAaEHDCkFbjb7
        subject_person_id: p_59QovxVPXCB82j7aTmqHP5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nBxjcu6a3iD2f9mAKkHgCU
          claim_id: c_z6np16x7AuAaEHDCkFbjb7
          source_id: s_jhGiBpAd374GsdJA3tw5wA
          stance: supports
          locator: CBDB:282819
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282819）
          source: &a1
            id: s_jhGiBpAd374GsdJA3tw5wA
            source_type: api_record
            title: 中国历代人物传记资料库：王祿（CBDB 282819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282819&o=json
            external_identifier: CBDB:282819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.108Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WBYxKDERwfp5o8F6KaEca9
        subject_person_id: p_59QovxVPXCB82j7aTmqHP5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祿，明人物。正德十二年進士，籍贯建平。（中国历代人物传记资料库 CBDB 282819）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ci1kZgSLA3NbfyxYYtD2wG
          claim_id: c_WBYxKDERwfp5o8F6KaEca9
          source_id: s_jhGiBpAd374GsdJA3tw5wA
          stance: supports
          locator: CBDB:282819
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0vtMnJItnMDxODrYxMDYoe
        subject_person_id: p_rMH6azHPPfCWNVYvRKv58F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_59QovxVPXCB82j7aTmqHP5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FmzdXhThC3hIOisQigu5Ob
          claim_id: c_0vtMnJItnMDxODrYxMDYoe
          source_id: s_USbXKNKEoGBpbKylea6Ws1
          stance: supports
          locator: CBDB：兄弟 王祐（202067）之父／母 王璲
          quotation: null
          interpretation_note: 由兄弟关系推断：王祿 与 王祐 为同胞（CBDB 记「兄」），王祐 之父／母即 王祿 之父／母。
          source:
            id: s_USbXKNKEoGBpbKylea6Ws1
            source_type: api_record
            title: 中国历代人物传记资料库：王祿（CBDB 282819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282819&o=json
            external_identifier: CBDB:282819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rMH6azHPPfCWNVYvRKv58F
        status: active
        display_name: 王璲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_CVhvjyQBwFNt5hDyp6_oN8
        subject_person_id: p_59QovxVPXCB82j7aTmqHP5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fVVctU3oARvj93SKk81Eji
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H3gPwtFkWkYMM136VIuhsO
          claim_id: c_CVhvjyQBwFNt5hDyp6_oN8
          source_id: s_USbXKNKEoGBpbKylea6Ws1
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202067 王祐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_USbXKNKEoGBpbKylea6Ws1
            source_type: api_record
            title: 中国历代人物传记资料库：王祿（CBDB 282819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282819&o=json
            external_identifier: CBDB:282819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fVVctU3oARvj93SKk81Eji
        status: active
        display_name: 王祐
        merged_into_person_id: null
---

# 王祿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祿 | accepted |
| bio.summary | 王祿，明人物。正德十二年進士，籍贯建平。（中国历代人物传记资料库 CBDB 282819） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rMH6azHPPfCWNVYvRKv58F | 王璲 | accepted |
| other | p_fVVctU3oARvj93SKk81Eji | 王祐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王祿（CBDB 282819）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282819&o=json)
