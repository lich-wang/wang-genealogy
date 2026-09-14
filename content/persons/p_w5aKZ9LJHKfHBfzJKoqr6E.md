---
schema: wang-person/v1
id: p_w5aKZ9LJHKfHBfzJKoqr6E
status: active
merged_into: null
display_name: 王正愚
cbdb_id: 288247
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vsmGteyuXCgRrGh32VgogR
        subject_person_id: p_w5aKZ9LJHKfHBfzJKoqr6E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正愚，明人物。嘉靖八年進士，籍贯餘姚，曾任主簿。（中国历代人物传记资料库 CBDB 288247）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Uk2vl7v5GCBG61H2edFwet
          claim_id: c_vsmGteyuXCgRrGh32VgogR
          source_id: s_m6C26PvdMYNN8AHKgJRpJ7
          stance: supports
          locator: CBDB:288247
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_m6C26PvdMYNN8AHKgJRpJ7
            source_type: api_record
            title: 中国历代人物传记资料库：王正愚（CBDB 288247）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288247&o=json
            external_identifier: CBDB:288247
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SaDXD6nUnoRHb8eB4kGkuL
        subject_person_id: p_w5aKZ9LJHKfHBfzJKoqr6E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正愚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JFgheZpVhRjHnjSFAkWN71
          claim_id: c_SaDXD6nUnoRHb8eB4kGkuL
          source_id: s_m6C26PvdMYNN8AHKgJRpJ7
          stance: supports
          locator: CBDB:288247
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KEdae-m4h02XA-OiLSrMWJ
        subject_person_id: p_HjMSGWaaseFRH9Rnqfpx53
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_w5aKZ9LJHKfHBfzJKoqr6E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QaDTZ08e4b_GO6UR9SbmNt
          claim_id: c_KEdae-m4h02XA-OiLSrMWJ
          source_id: s_VGr4zoEaRDqLNbtlMLs9yO
          stance: supports
          locator: CBDB：兄弟 王正思（202442）之父／母 王守礼
          quotation: null
          interpretation_note: 由兄弟关系推断：王正愚 与 王正思 为同胞（CBDB 记「兄」），王正思 之父／母即 王正愚 之父／母。
          source:
            id: s_VGr4zoEaRDqLNbtlMLs9yO
            source_type: api_record
            title: 中国历代人物传记资料库：王正愚（CBDB 288247）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288247&o=json
            external_identifier: CBDB:288247
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HjMSGWaaseFRH9Rnqfpx53
        status: active
        display_name: 王守礼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_bVffYi8MIGNR5zbyvdnZTL
        subject_person_id: p_qfyAqTA3PGUUXcgAsCUJEh
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_w5aKZ9LJHKfHBfzJKoqr6E
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oP6lTH1ZcOHV2st10OHofZ
          claim_id: c_bVffYi8MIGNR5zbyvdnZTL
          source_id: s_VGr4zoEaRDqLNbtlMLs9yO
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202442 王正思）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VGr4zoEaRDqLNbtlMLs9yO
            source_type: api_record
            title: 中国历代人物传记资料库：王正愚（CBDB 288247）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288247&o=json
            external_identifier: CBDB:288247
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qfyAqTA3PGUUXcgAsCUJEh
        status: active
        display_name: 王正思
        merged_into_person_id: null
---

# 王正愚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王正愚，明人物。嘉靖八年進士，籍贯餘姚，曾任主簿。（中国历代人物传记资料库 CBDB 288247） | accepted |
| name.primary | 王正愚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HjMSGWaaseFRH9Rnqfpx53 | 王守礼 | accepted |
| other | p_qfyAqTA3PGUUXcgAsCUJEh | 王正思 | accepted |

## 外部来源

- [中国历代人物传记资料库：王正愚（CBDB 288247）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288247&o=json)
