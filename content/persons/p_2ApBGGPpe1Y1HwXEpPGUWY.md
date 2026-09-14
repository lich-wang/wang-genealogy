---
schema: wang-person/v1
id: p_2ApBGGPpe1Y1HwXEpPGUWY
status: active
merged_into: null
display_name: 王景暘
cbdb_id: 214074
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mzovARk4hDUwremfLJNeym
        subject_person_id: p_2ApBGGPpe1Y1HwXEpPGUWY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景暘，明人物。萬曆二年進士，籍贯蕭山。（中国历代人物传记资料库 CBDB 214074）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_fZaVnPw7CGCYM-KXQn84Wh
          claim_id: c_mzovARk4hDUwremfLJNeym
          source_id: s_y8qMVktHEoUVJKj4GviYxE
          stance: supports
          locator: CBDB:214074
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_y8qMVktHEoUVJKj4GviYxE
            source_type: api_record
            title: 中国历代人物传记资料库：王景暘（CBDB 214074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214074&o=json
            external_identifier: CBDB:214074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DEu1ddkDbbEeheYkrgRviV
        subject_person_id: p_2ApBGGPpe1Y1HwXEpPGUWY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景暘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Wp8U4VJUX7HHjBRCe4PG5L
          claim_id: c_DEu1ddkDbbEeheYkrgRviV
          source_id: s_y8qMVktHEoUVJKj4GviYxE
          stance: supports
          locator: CBDB:214074
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kLlQvD_YvejtntpbOeIykS
        subject_person_id: p_kP6VABQWbKR9ndmes7Y926
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2ApBGGPpe1Y1HwXEpPGUWY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6eDQkwd5c7BJD61UcixGoB
          claim_id: c_kLlQvD_YvejtntpbOeIykS
          source_id: s_JscTc2--RQO5e8xNpYCWCM
          stance: supports
          locator: CBDB：兄弟 王景星（206153）之父／母 王武烈
          quotation: null
          interpretation_note: 由兄弟关系推断：王景暘 与 王景星 为同胞（CBDB 记「弟」），王景星 之父／母即 王景暘 之父／母。
          source:
            id: s_JscTc2--RQO5e8xNpYCWCM
            source_type: api_record
            title: 中国历代人物传记资料库：王景暘（CBDB 214074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214074&o=json
            external_identifier: CBDB:214074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kP6VABQWbKR9ndmes7Y926
        status: active
        display_name: 王武烈
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_e7NVNmYrh0WkHDzvJuY26n
        subject_person_id: p_2ApBGGPpe1Y1HwXEpPGUWY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_5GaxaL368Sw3VJAGUZoHG3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nnqdbPusc9JogbCeGmx1xk
          claim_id: c_e7NVNmYrh0WkHDzvJuY26n
          source_id: s_JscTc2--RQO5e8xNpYCWCM
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206153 王景星）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JscTc2--RQO5e8xNpYCWCM
            source_type: api_record
            title: 中国历代人物传记资料库：王景暘（CBDB 214074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214074&o=json
            external_identifier: CBDB:214074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5GaxaL368Sw3VJAGUZoHG3
        status: active
        display_name: 王景星
        merged_into_person_id: null
---

# 王景暘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王景暘，明人物。萬曆二年進士，籍贯蕭山。（中国历代人物传记资料库 CBDB 214074） | accepted |
| name.primary | 王景暘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kP6VABQWbKR9ndmes7Y926 | 王武烈 | accepted |
| other | p_5GaxaL368Sw3VJAGUZoHG3 | 王景星 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景暘（CBDB 214074）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214074&o=json)
