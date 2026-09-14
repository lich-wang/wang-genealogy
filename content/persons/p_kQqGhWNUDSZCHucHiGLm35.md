---
schema: wang-person/v1
id: p_kQqGhWNUDSZCHucHiGLm35
status: active
merged_into: null
display_name: 王軻
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_t75zmKTsYxZz5CnaDQGrPS
        subject_person_id: p_kQqGhWNUDSZCHucHiGLm35
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fF7ft8E7Yvz3aoVAEE7UdP
          claim_id: c_t75zmKTsYxZz5CnaDQGrPS
          source_id: s_v2aDFzpkd5PGUDALPaGj3V
          stance: supports
          locator: CBDB:303250
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（303250）
          source: &a1
            id: s_v2aDFzpkd5PGUDALPaGj3V
            source_type: api_record
            title: 中国历代人物传记资料库：王軻（CBDB 303250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303250&o=json
            external_identifier: CBDB:303250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.684Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HSB9djubW2m9U8W9w3opEt
        subject_person_id: p_kQqGhWNUDSZCHucHiGLm35
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軻，明人物。嘉靖二十年進士，籍贯保定。（中国历代人物传记资料库 CBDB 303250）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2YWmxWB-CGaBasICG2nREJ
          claim_id: c_HSB9djubW2m9U8W9w3opEt
          source_id: s_v2aDFzpkd5PGUDALPaGj3V
          stance: supports
          locator: CBDB:303250
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Wt9txuckFuD2yrpR5ZU6o5
        subject_person_id: p_33joHpVQH9KnqRAf9nqpnS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kQqGhWNUDSZCHucHiGLm35
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YsmeZ5NJQsiQeaClm5WcGX
          claim_id: c_Wt9txuckFuD2yrpR5ZU6o5
          source_id: s_smyX-aqe0uY91R6j7NJZIE
          stance: supports
          locator: CBDB：兄弟 王顯忠（126894）之父／母 王誥
          quotation: null
          interpretation_note: 由兄弟关系推断：王軻 与 王顯忠 为同胞（CBDB 记「弟」），王顯忠 之父／母即 王軻 之父／母。
          source:
            id: s_smyX-aqe0uY91R6j7NJZIE
            source_type: api_record
            title: 中国历代人物传记资料库：王軻（CBDB 303250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303250&o=json
            external_identifier: CBDB:303250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_33joHpVQH9KnqRAf9nqpnS
        status: active
        display_name: 王誥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_F_tLpGOMQ-hx68_9nzmOjd
        subject_person_id: p_epPvqgMmGoGqHpEYGAeBox
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kQqGhWNUDSZCHucHiGLm35
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_auwDuuAqx0F5DoHvzYtlrA
          claim_id: c_F_tLpGOMQ-hx68_9nzmOjd
          source_id: s_smyX-aqe0uY91R6j7NJZIE
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126894 王顯忠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_smyX-aqe0uY91R6j7NJZIE
            source_type: api_record
            title: 中国历代人物传记资料库：王軻（CBDB 303250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303250&o=json
            external_identifier: CBDB:303250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_epPvqgMmGoGqHpEYGAeBox
        status: active
        display_name: 王顯忠
        merged_into_person_id: null
---

# 王軻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王軻 | accepted |
| bio.summary | 王軻，明人物。嘉靖二十年進士，籍贯保定。（中国历代人物传记资料库 CBDB 303250） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_33joHpVQH9KnqRAf9nqpnS | 王誥 | accepted |
| other | p_epPvqgMmGoGqHpEYGAeBox | 王顯忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王軻（CBDB 303250）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303250&o=json)
