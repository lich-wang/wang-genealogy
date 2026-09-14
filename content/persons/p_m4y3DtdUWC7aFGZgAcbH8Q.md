---
schema: wang-person/v1
id: p_m4y3DtdUWC7aFGZgAcbH8Q
status: active
merged_into: null
display_name: 王守高
cbdb_id: 314100
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7Gy233AQJWFUvZcaT2aTAe
        subject_person_id: p_m4y3DtdUWC7aFGZgAcbH8Q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守高，明人物。嘉靖二十九年進士，籍贯歸善。（中国历代人物传记资料库 CBDB 314100）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_SQsyGI87fyThMFgPPefVpU
          claim_id: c_7Gy233AQJWFUvZcaT2aTAe
          source_id: s_FCyvTVsMfvwouWdxME6Z4o
          stance: supports
          locator: CBDB:314100
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_FCyvTVsMfvwouWdxME6Z4o
            source_type: api_record
            title: 中国历代人物传记资料库：王守高（CBDB 314100）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314100&o=json
            external_identifier: CBDB:314100
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7kFsLQS497dVxpZp6jpr5y
        subject_person_id: p_m4y3DtdUWC7aFGZgAcbH8Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守高
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_vMG7PnHo9fCoZtcNKDG9gX
          claim_id: c_7kFsLQS497dVxpZp6jpr5y
          source_id: s_FCyvTVsMfvwouWdxME6Z4o
          stance: supports
          locator: CBDB:314100
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Dq0PtBc9nJ4xbGflFtymw_
        subject_person_id: p_den6Qb7fcU9dqdvbGrfnab
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_m4y3DtdUWC7aFGZgAcbH8Q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zhrE8dlZlFsiUT52BebICl
          claim_id: c_Dq0PtBc9nJ4xbGflFtymw_
          source_id: s_wjka_cAOwXKgaR9Q15m8Zx
          stance: supports
          locator: CBDB：兄弟 王守充（204079）之父／母 王密
          quotation: null
          interpretation_note: 由兄弟关系推断：王守高 与 王守充 为同胞（CBDB 记「弟」），王守充 之父／母即 王守高 之父／母。
          source:
            id: s_wjka_cAOwXKgaR9Q15m8Zx
            source_type: api_record
            title: 中国历代人物传记资料库：王守高（CBDB 314100）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314100&o=json
            external_identifier: CBDB:314100
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_den6Qb7fcU9dqdvbGrfnab
        status: active
        display_name: 王密
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_tB9Hc7vu6hIYsSg3S-xsDT
        subject_person_id: p_Pf6TEXjGfNj869D16z8ZuG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_m4y3DtdUWC7aFGZgAcbH8Q
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n_bX2waeROawl3FZJceel7
          claim_id: c_tB9Hc7vu6hIYsSg3S-xsDT
          source_id: s_wjka_cAOwXKgaR9Q15m8Zx
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204079 王守充）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wjka_cAOwXKgaR9Q15m8Zx
            source_type: api_record
            title: 中国历代人物传记资料库：王守高（CBDB 314100）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314100&o=json
            external_identifier: CBDB:314100
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Pf6TEXjGfNj869D16z8ZuG
        status: active
        display_name: 王守充
        merged_into_person_id: null
---

# 王守高

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王守高，明人物。嘉靖二十九年進士，籍贯歸善。（中国历代人物传记资料库 CBDB 314100） | accepted |
| name.primary | 王守高 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_den6Qb7fcU9dqdvbGrfnab | 王密 | accepted |
| other | p_Pf6TEXjGfNj869D16z8ZuG | 王守充 | accepted |

## 外部来源

- [中国历代人物传记资料库：王守高（CBDB 314100）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314100&o=json)
