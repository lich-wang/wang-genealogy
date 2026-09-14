---
schema: wang-person/v1
id: p_JRNXV236M9H6uA15akL81F
status: active
merged_into: null
display_name: 王初
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uJMhmJwSUSAYCJ2W3ryQmw
        subject_person_id: p_JRNXV236M9H6uA15akL81F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王初
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vEvAHHv11fmJoywNeCAXjG
          claim_id: c_uJMhmJwSUSAYCJ2W3ryQmw
          source_id: s_8PBXU3kpLFCzXjNM6gBR6b
          stance: supports
          locator: CBDB:282818
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282818）
          source: &a1
            id: s_8PBXU3kpLFCzXjNM6gBR6b
            source_type: api_record
            title: 中国历代人物传记资料库：王初（CBDB 282818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282818&o=json
            external_identifier: CBDB:282818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.107Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4eig4TxPS5KbzG985xqRRK
        subject_person_id: p_JRNXV236M9H6uA15akL81F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王初，明人物。正德十二年進士，籍贯建平。（中国历代人物传记资料库 CBDB 282818）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5vwON_I5FABY1qby9Qgr0P
          claim_id: c_4eig4TxPS5KbzG985xqRRK
          source_id: s_8PBXU3kpLFCzXjNM6gBR6b
          stance: supports
          locator: CBDB:282818
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fsSW4SxbWpAfeLHYCaTZej
        subject_person_id: p_rMH6azHPPfCWNVYvRKv58F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JRNXV236M9H6uA15akL81F
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lFI9D42nEvQCsZ9IjaA-IX
          claim_id: c_fsSW4SxbWpAfeLHYCaTZej
          source_id: s_CkBFh1vAL1uaohcxT505F0
          stance: supports
          locator: CBDB：兄弟 王祐（202067）之父／母 王璲
          quotation: null
          interpretation_note: 由兄弟关系推断：王初 与 王祐 为同胞（CBDB 记「弟」），王祐 之父／母即 王初 之父／母。
          source:
            id: s_CkBFh1vAL1uaohcxT505F0
            source_type: api_record
            title: 中国历代人物传记资料库：王初（CBDB 282818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282818&o=json
            external_identifier: CBDB:282818
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
        id: c_q1PX32ob4i19AuMQ1k9i5d
        subject_person_id: p_JRNXV236M9H6uA15akL81F
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
        - id: cs_r5WKf_mP6qTw5Wp-r-rxfN
          claim_id: c_q1PX32ob4i19AuMQ1k9i5d
          source_id: s_CkBFh1vAL1uaohcxT505F0
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202067 王祐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_CkBFh1vAL1uaohcxT505F0
            source_type: api_record
            title: 中国历代人物传记资料库：王初（CBDB 282818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282818&o=json
            external_identifier: CBDB:282818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fVVctU3oARvj93SKk81Eji
        status: active
        display_name: 王祐
        merged_into_person_id: null
---

# 王初

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王初 | accepted |
| bio.summary | 王初，明人物。正德十二年進士，籍贯建平。（中国历代人物传记资料库 CBDB 282818） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rMH6azHPPfCWNVYvRKv58F | 王璲 | accepted |
| other | p_fVVctU3oARvj93SKk81Eji | 王祐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王初（CBDB 282818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282818&o=json)
