---
schema: wang-person/v1
id: p_PgasUHaEjzoamewhrqMvcz
status: active
merged_into: null
display_name: 王象萃
cbdb_id: 220275
revision: 5
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fbNLPc9x8ntStubPXBK1KT
        subject_person_id: p_PgasUHaEjzoamewhrqMvcz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象萃，明人物。隆慶五年進士，籍贯新城。（中国历代人物传记资料库 CBDB 220275）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_0aU-JqIsHXFgCBy53G0ANy
          claim_id: c_fbNLPc9x8ntStubPXBK1KT
          source_id: s_SgeQwb9XaeWMv1NCNgtmoK
          stance: supports
          locator: CBDB:220275
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_SgeQwb9XaeWMv1NCNgtmoK
            source_type: api_record
            title: 中国历代人物传记资料库：王象萃（CBDB 220275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220275&o=json
            external_identifier: CBDB:220275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_jqeeLrNEGPh9NFKQ8dAQ5L
        subject_person_id: p_PgasUHaEjzoamewhrqMvcz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象萃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_maXJBNmrHKFjaA1hvJrB5n
          claim_id: c_jqeeLrNEGPh9NFKQ8dAQ5L
          source_id: s_SgeQwb9XaeWMv1NCNgtmoK
          stance: supports
          locator: CBDB:220275
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fsX3Dod2itn06P8KP53oNn
        subject_person_id: p_5yFg7DjLcFzFQKDBRDnwdx
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_PgasUHaEjzoamewhrqMvcz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m3ywWR1groq05gnBSmHYtL
          claim_id: c_fsX3Dod2itn06P8KP53oNn
          source_id: s_1ruaTTtD99q4-xxqFZYbyF
          stance: supports
          locator: CBDB：兄弟 王象乾（65764）之父／母 王之垣
          quotation: null
          interpretation_note: 由兄弟关系推断：王象萃 与 王象乾 为同胞（CBDB 记「兄」），王象乾 之父／母即 王象萃 之父／母。
          source:
            id: s_1ruaTTtD99q4-xxqFZYbyF
            source_type: api_record
            title: 中国历代人物传记资料库：王象萃（CBDB 220275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220275&o=json
            external_identifier: CBDB:220275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5yFg7DjLcFzFQKDBRDnwdx
        status: active
        display_name: 王之垣
        merged_into_person_id: null
    - claim:
        id: c_pWgXuElZ0o7ZRG2KfsbQ-d
        subject_person_id: p_VLPN2ybQtkqyCPrJiYL7vx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PgasUHaEjzoamewhrqMvcz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LVQuu7igOY_R0hKv1YbPPV
          claim_id: c_pWgXuElZ0o7ZRG2KfsbQ-d
          source_id: s_1ruaTTtD99q4-xxqFZYbyF
          stance: supports
          locator: CBDB：兄弟 王象蒙（206595）之父／母 王之辅
          quotation: null
          interpretation_note: 由兄弟关系推断：王象萃 与 王象蒙 为同胞（CBDB 记「兄」），王象蒙 之父／母即 王象萃 之父／母。
          source:
            id: s_1ruaTTtD99q4-xxqFZYbyF
            source_type: api_record
            title: 中国历代人物传记资料库：王象萃（CBDB 220275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220275&o=json
            external_identifier: CBDB:220275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VLPN2ybQtkqyCPrJiYL7vx
        status: active
        display_name: 王之辅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_FqnpgAVZ31KVLxz2_-iUcr
        subject_person_id: p_PgasUHaEjzoamewhrqMvcz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mNbLtBp7NLKek2NHmVT5fp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1WmZ2S35-9Nj-jZNIuy_H8
          claim_id: c_FqnpgAVZ31KVLxz2_-iUcr
          source_id: s_1ruaTTtD99q4-xxqFZYbyF
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 65764 王象乾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1ruaTTtD99q4-xxqFZYbyF
            source_type: api_record
            title: 中国历代人物传记资料库：王象萃（CBDB 220275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220275&o=json
            external_identifier: CBDB:220275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mNbLtBp7NLKek2NHmVT5fp
        status: active
        display_name: 王象乾
        merged_into_person_id: null
    - claim:
        id: c_kpWjJg94IBHdzmGDyl4gLv
        subject_person_id: p_PgasUHaEjzoamewhrqMvcz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UCuWmdu88wkXMEGK9geKmL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_piHljBTzt-4suDn3QetHON
          claim_id: c_kpWjJg94IBHdzmGDyl4gLv
          source_id: s_1ruaTTtD99q4-xxqFZYbyF
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206595 王象蒙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1ruaTTtD99q4-xxqFZYbyF
            source_type: api_record
            title: 中国历代人物传记资料库：王象萃（CBDB 220275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220275&o=json
            external_identifier: CBDB:220275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UCuWmdu88wkXMEGK9geKmL
        status: active
        display_name: 王象蒙
        merged_into_person_id: null
---

# 王象萃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王象萃，明人物。隆慶五年進士，籍贯新城。（中国历代人物传记资料库 CBDB 220275） | accepted |
| name.primary | 王象萃 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5yFg7DjLcFzFQKDBRDnwdx | 王之垣 | accepted |
| parents | p_VLPN2ybQtkqyCPrJiYL7vx | 王之辅 | accepted |
| other | p_mNbLtBp7NLKek2NHmVT5fp | 王象乾 | accepted |
| other | p_UCuWmdu88wkXMEGK9geKmL | 王象蒙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王象萃（CBDB 220275）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220275&o=json)
