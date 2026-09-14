---
schema: wang-person/v1
id: p_4EEgBQWAFUW189KU5BXtAJ
status: active
merged_into: null
display_name: 王志龍
cbdb_id: 235161
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dNYA92jq8Zza3XEcd5G5CW
        subject_person_id: p_4EEgBQWAFUW189KU5BXtAJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志龍，明人物。籍贯崑山。（中国历代人物传记资料库 CBDB 235161）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_FnN8tGTSOUcChGQutcRTZg
          claim_id: c_dNYA92jq8Zza3XEcd5G5CW
          source_id: s_XEnQ2kMbLw4QtmFQYpVc3e
          stance: supports
          locator: CBDB:235161
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_XEnQ2kMbLw4QtmFQYpVc3e
            source_type: api_record
            title: 中国历代人物传记资料库：王志龍（CBDB 235161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235161&o=json
            external_identifier: CBDB:235161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Bv4kPbN5qbuE9RzEzzv12C
        subject_person_id: p_4EEgBQWAFUW189KU5BXtAJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NBB3Yh58vXJaR6LLg5XQft
          claim_id: c_Bv4kPbN5qbuE9RzEzzv12C
          source_id: s_XEnQ2kMbLw4QtmFQYpVc3e
          stance: supports
          locator: CBDB:235161
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_I8d3woIA1S6jtWgDdMelef
        subject_person_id: p_cUEh25oPwuAacU7D2hTAPV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4EEgBQWAFUW189KU5BXtAJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nQfk0IMlMwShs5gYG1oS1S
          claim_id: c_I8d3woIA1S6jtWgDdMelef
          source_id: s_gfXjnGJ686CrjiHqG9Rf44
          stance: supports
          locator: CBDB：兄弟 王志堅（126537）之父／母 王臨亨
          quotation: null
          interpretation_note: 由兄弟关系推断：王志龍 与 王志堅 为同胞（CBDB 记「兄」），王志堅 之父／母即 王志龍 之父／母。
          source:
            id: s_gfXjnGJ686CrjiHqG9Rf44
            source_type: api_record
            title: 中国历代人物传记资料库：王志龍（CBDB 235161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235161&o=json
            external_identifier: CBDB:235161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cUEh25oPwuAacU7D2hTAPV
        status: active
        display_name: 王臨亨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_E69taKClgzNXLwRHvWlK6h
        subject_person_id: p_4EEgBQWAFUW189KU5BXtAJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_WP2TCGKdqkuWFjHVRTiLcW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XzDLusSjUpqSZAETgcLNvi
          claim_id: c_E69taKClgzNXLwRHvWlK6h
          source_id: s_gfXjnGJ686CrjiHqG9Rf44
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126537 王志堅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gfXjnGJ686CrjiHqG9Rf44
            source_type: api_record
            title: 中国历代人物传记资料库：王志龍（CBDB 235161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235161&o=json
            external_identifier: CBDB:235161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WP2TCGKdqkuWFjHVRTiLcW
        status: active
        display_name: 王志堅
        merged_into_person_id: null
---

# 王志龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王志龍，明人物。籍贯崑山。（中国历代人物传记资料库 CBDB 235161） | accepted |
| name.primary | 王志龍 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cUEh25oPwuAacU7D2hTAPV | 王臨亨 | accepted |
| other | p_WP2TCGKdqkuWFjHVRTiLcW | 王志堅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王志龍（CBDB 235161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235161&o=json)
