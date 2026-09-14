---
schema: wang-person/v1
id: p_7PPbQ1RDtPEHJAbco5SQ4P
status: active
merged_into: null
display_name: 王芝
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3J5zWqPe1aGJRB42ED58hR
        subject_person_id: p_7PPbQ1RDtPEHJAbco5SQ4P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wpEnFLPSZgSteoSoB3meoC
          claim_id: c_3J5zWqPe1aGJRB42ED58hR
          source_id: s_EGmrQBNTTcFW1ouLyjs52T
          stance: supports
          locator: CBDB:279354
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279354）
          source: &a1
            id: s_EGmrQBNTTcFW1ouLyjs52T
            source_type: api_record
            title: 中国历代人物传记资料库：王芝（CBDB 279354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279354&o=json
            external_identifier: CBDB:279354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.982Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qZfykuG6RuproTFeWJXKLF
        subject_person_id: p_7PPbQ1RDtPEHJAbco5SQ4P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芝，明人物。正德六年進士，籍贯宣城。（中国历代人物传记资料库 CBDB 279354）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xy2_d5u1lLELU3DmTHk9Ib
          claim_id: c_qZfykuG6RuproTFeWJXKLF
          source_id: s_EGmrQBNTTcFW1ouLyjs52T
          stance: supports
          locator: CBDB:279354
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Sv64JxfvWAebERGgd-XcoS
        subject_person_id: p_QzvV4sG1QiUMXjGNxx2is5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7PPbQ1RDtPEHJAbco5SQ4P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6nrpJl2AJpJIVUikGlv3CJ
          claim_id: c_Sv64JxfvWAebERGgd-XcoS
          source_id: s_v-0UEGe5KybZf2YIkhHYup
          stance: supports
          locator: CBDB：兄弟 王遵（201860）之父／母 王度
          quotation: null
          interpretation_note: 由兄弟关系推断：王芝 与 王遵 为同胞（CBDB 记「兄」），王遵 之父／母即 王芝 之父／母。
          source:
            id: s_v-0UEGe5KybZf2YIkhHYup
            source_type: api_record
            title: 中国历代人物传记资料库：王芝（CBDB 279354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279354&o=json
            external_identifier: CBDB:279354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QzvV4sG1QiUMXjGNxx2is5
        status: active
        display_name: 王度
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_X6mOpgvl9CQISNCM8FGRK4
        subject_person_id: p_7PPbQ1RDtPEHJAbco5SQ4P
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kS75cqd3Wh2NjJNrFJL2j4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D645voqy7Ky6RwLBW_GEoS
          claim_id: c_X6mOpgvl9CQISNCM8FGRK4
          source_id: s_v-0UEGe5KybZf2YIkhHYup
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201860 王遵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_v-0UEGe5KybZf2YIkhHYup
            source_type: api_record
            title: 中国历代人物传记资料库：王芝（CBDB 279354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279354&o=json
            external_identifier: CBDB:279354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kS75cqd3Wh2NjJNrFJL2j4
        status: active
        display_name: 王遵
        merged_into_person_id: null
---

# 王芝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王芝 | accepted |
| bio.summary | 王芝，明人物。正德六年進士，籍贯宣城。（中国历代人物传记资料库 CBDB 279354） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QzvV4sG1QiUMXjGNxx2is5 | 王度 | accepted |
| other | p_kS75cqd3Wh2NjJNrFJL2j4 | 王遵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王芝（CBDB 279354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279354&o=json)
