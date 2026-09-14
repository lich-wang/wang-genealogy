---
schema: wang-person/v1
id: p_MzSbgo14YeqMM4tZwAP8Aq
status: active
merged_into: null
display_name: 王佐
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SSsCLx6jwwmExrNgJVpgq6
        subject_person_id: p_MzSbgo14YeqMM4tZwAP8Aq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J6d6AQzCuYfS5kurdSJ4YP
          claim_id: c_SSsCLx6jwwmExrNgJVpgq6
          source_id: s_akL3dvGVKZrP3F1gMtcrD8
          stance: supports
          locator: CBDB:326388
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（326388）
          source: &a1
            id: s_akL3dvGVKZrP3F1gMtcrD8
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 326388）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326388&o=json
            external_identifier: CBDB:326388
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.215Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gp7rXPyj1qLTggmxkjXntX
        subject_person_id: p_MzSbgo14YeqMM4tZwAP8Aq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐，明人物。嘉靖四十一年進士，籍贯莆田。（中国历代人物传记资料库 CBDB 326388）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tn9Eu6G3hz0qspsJOmd3Bu
          claim_id: c_gp7rXPyj1qLTggmxkjXntX
          source_id: s_akL3dvGVKZrP3F1gMtcrD8
          stance: supports
          locator: CBDB:326388
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2z6_HKJRUPsbcPHAYqzsM0
        subject_person_id: p_mxcPanzqKKzAH8GE9Zk1aa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MzSbgo14YeqMM4tZwAP8Aq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ax5-GAVxFbPRchlQBoY6WJ
          claim_id: c_2z6_HKJRUPsbcPHAYqzsM0
          source_id: s_ynHteAzS_Owz_B5G5xZdcR
          stance: supports
          locator: CBDB：兄弟 王宜（204956）之父／母 王絹
          quotation: null
          interpretation_note: 由兄弟关系推断：王佐 与 王宜 为同胞（CBDB 记「弟」），王宜 之父／母即 王佐 之父／母。
          source:
            id: s_ynHteAzS_Owz_B5G5xZdcR
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 326388）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326388&o=json
            external_identifier: CBDB:326388
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mxcPanzqKKzAH8GE9Zk1aa
        status: active
        display_name: 王絹
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_jJMN2x0OrIgTqUA5uo050c
        subject_person_id: p_MzSbgo14YeqMM4tZwAP8Aq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zRoaCHSKLmhLA6JAg13u3d
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8l7Dy6tuvxeJkfMRGjtsWn
          claim_id: c_jJMN2x0OrIgTqUA5uo050c
          source_id: s_ynHteAzS_Owz_B5G5xZdcR
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204956 王宜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ynHteAzS_Owz_B5G5xZdcR
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 326388）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326388&o=json
            external_identifier: CBDB:326388
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zRoaCHSKLmhLA6JAg13u3d
        status: active
        display_name: 王宜
        merged_into_person_id: null
---

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐 | accepted |
| bio.summary | 王佐，明人物。嘉靖四十一年進士，籍贯莆田。（中国历代人物传记资料库 CBDB 326388） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mxcPanzqKKzAH8GE9Zk1aa | 王絹 | accepted |
| other | p_zRoaCHSKLmhLA6JAg13u3d | 王宜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王佐（CBDB 326388）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326388&o=json)
