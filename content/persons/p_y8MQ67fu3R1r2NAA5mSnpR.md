---
schema: wang-person/v1
id: p_y8MQ67fu3R1r2NAA5mSnpR
status: active
merged_into: null
display_name: 王燦
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XgMaiENrCxNHtfvmW5tFvL
        subject_person_id: p_y8MQ67fu3R1r2NAA5mSnpR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o9VjN4CURbsMBrDmzSDDjC
          claim_id: c_XgMaiENrCxNHtfvmW5tFvL
          source_id: s_MVSW7PUcX372VkrTrVkAD2
          stance: supports
          locator: CBDB:296936
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（296936）
          source: &a1
            id: s_MVSW7PUcX372VkrTrVkAD2
            source_type: api_record
            title: 中国历代人物传记资料库：王燦（CBDB 296936）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296936&o=json
            external_identifier: CBDB:296936
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.532Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D7ZPGVAas9BR4PAqnHiQeQ
        subject_person_id: p_y8MQ67fu3R1r2NAA5mSnpR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燦，明人物。嘉靖十四年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 296936）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XokfESJxEZrjU4W0EpmvrL
          claim_id: c_D7ZPGVAas9BR4PAqnHiQeQ
          source_id: s_MVSW7PUcX372VkrTrVkAD2
          stance: supports
          locator: CBDB:296936
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_aCQLU1dAMz52cfP4oYYm2-
        subject_person_id: p_wVWD91i8nHFULhDK68aKM7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_y8MQ67fu3R1r2NAA5mSnpR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3pdB1FlfF27f81UM4PgTj3
          claim_id: c_aCQLU1dAMz52cfP4oYYm2-
          source_id: s_cAOKR8c3rq4BjCAdvy9h-6
          stance: supports
          locator: CBDB：兄弟 王燁（126822）之父／母 王材
          quotation: null
          interpretation_note: 由兄弟关系推断：王燦 与 王燁 为同胞（CBDB 记「弟」），王燁 之父／母即 王燦 之父／母。
          source:
            id: s_cAOKR8c3rq4BjCAdvy9h-6
            source_type: api_record
            title: 中国历代人物传记资料库：王燦（CBDB 296936）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296936&o=json
            external_identifier: CBDB:296936
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wVWD91i8nHFULhDK68aKM7
        status: active
        display_name: 王材
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_nPpr30fDAsqpXSAs2d3CM5
        subject_person_id: p_ve3PDbNGqaNQgddGuw2C43
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_y8MQ67fu3R1r2NAA5mSnpR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kfXCLUQuEObAC-nRjY6haD
          claim_id: c_nPpr30fDAsqpXSAs2d3CM5
          source_id: s_cAOKR8c3rq4BjCAdvy9h-6
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126822 王燁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cAOKR8c3rq4BjCAdvy9h-6
            source_type: api_record
            title: 中国历代人物传记资料库：王燦（CBDB 296936）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296936&o=json
            external_identifier: CBDB:296936
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ve3PDbNGqaNQgddGuw2C43
        status: active
        display_name: 王燁
        merged_into_person_id: null
---

# 王燦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王燦 | accepted |
| bio.summary | 王燦，明人物。嘉靖十四年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 296936） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wVWD91i8nHFULhDK68aKM7 | 王材 | accepted |
| other | p_ve3PDbNGqaNQgddGuw2C43 | 王燁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王燦（CBDB 296936）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296936&o=json)
