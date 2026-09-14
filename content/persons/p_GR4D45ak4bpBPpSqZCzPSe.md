---
schema: wang-person/v1
id: p_GR4D45ak4bpBPpSqZCzPSe
status: active
merged_into: null
display_name: 王汴
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GD781wqKA33AuwRFu7CHbj
        subject_person_id: p_GR4D45ak4bpBPpSqZCzPSe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DQYmzkiRWcgUHDD9Ss8mob
          claim_id: c_GD781wqKA33AuwRFu7CHbj
          source_id: s_oLnfAtE2ddXtY2RDN9PgWM
          stance: supports
          locator: CBDB:284254
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（284254）
          source: &a1
            id: s_oLnfAtE2ddXtY2RDN9PgWM
            source_type: api_record
            title: 中国历代人物传记资料库：王汴（CBDB 284254）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284254&o=json
            external_identifier: CBDB:284254
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.192Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_m9S3rC3fZq9hbzBMm3s7HC
        subject_person_id: p_GR4D45ak4bpBPpSqZCzPSe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汴，明人物。正德十六年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 284254）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Hct2a4WJ5lEFRpKHLP_6I9
          claim_id: c_m9S3rC3fZq9hbzBMm3s7HC
          source_id: s_oLnfAtE2ddXtY2RDN9PgWM
          stance: supports
          locator: CBDB:284254
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__wJB9Jnw0soFfWE-eL9V_t
        subject_person_id: p_229EQbFCA3PP8BNNQ1HMQL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GR4D45ak4bpBPpSqZCzPSe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WU7lElwi3jKjQzycOnI3Eg
          claim_id: c__wJB9Jnw0soFfWE-eL9V_t
          source_id: s_hpe5C7-qQp9BphAkYwg5jJ
          stance: supports
          locator: CBDB：兄弟 王洙（202146）之父／母 王鎬
          quotation: null
          interpretation_note: 由兄弟关系推断：王汴 与 王洙 为同胞（CBDB 记「弟」），王洙 之父／母即 王汴 之父／母。
          source:
            id: s_hpe5C7-qQp9BphAkYwg5jJ
            source_type: api_record
            title: 中国历代人物传记资料库：王汴（CBDB 284254）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284254&o=json
            external_identifier: CBDB:284254
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_229EQbFCA3PP8BNNQ1HMQL
        status: active
        display_name: 王鎬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_0yk0VAioLCrlU_dJ6-YgA8
        subject_person_id: p_GR4D45ak4bpBPpSqZCzPSe
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ziFePMbdNLKAgyGGN4BwgX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__ObqIvn-Udhhy6Bvgr9SOV
          claim_id: c_0yk0VAioLCrlU_dJ6-YgA8
          source_id: s_hpe5C7-qQp9BphAkYwg5jJ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202146 王洙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hpe5C7-qQp9BphAkYwg5jJ
            source_type: api_record
            title: 中国历代人物传记资料库：王汴（CBDB 284254）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284254&o=json
            external_identifier: CBDB:284254
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ziFePMbdNLKAgyGGN4BwgX
        status: active
        display_name: 王洙
        merged_into_person_id: null
---

# 王汴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汴 | accepted |
| bio.summary | 王汴，明人物。正德十六年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 284254） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_229EQbFCA3PP8BNNQ1HMQL | 王鎬 | accepted |
| other | p_ziFePMbdNLKAgyGGN4BwgX | 王洙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汴（CBDB 284254）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284254&o=json)
