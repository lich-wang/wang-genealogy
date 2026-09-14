---
schema: wang-person/v1
id: p_HJV1MFkLfcab9XeNGhGirk
status: active
merged_into: null
display_name: 王三錫
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kt23eenm5QNWj1Azv52snP
        subject_person_id: p_HJV1MFkLfcab9XeNGhGirk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GDkkKLVQZezHCNcick6skr
          claim_id: c_kt23eenm5QNWj1Azv52snP
          source_id: s_3ajKjPCM6FxJ4j7VgFruNH
          stance: supports
          locator: CBDB:312134
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（312134）
          source: &a1
            id: s_3ajKjPCM6FxJ4j7VgFruNH
            source_type: api_record
            title: 中国历代人物传记资料库：王三錫（CBDB 312134）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312134&o=json
            external_identifier: CBDB:312134
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.865Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DbTCoqbDj86R1eGFTtrgsS
        subject_person_id: p_HJV1MFkLfcab9XeNGhGirk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三錫，明人物。嘉靖二十九年進士，籍贯同安。（中国历代人物传记资料库 CBDB 312134）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_C0ma_Pe8Y33RZAfTTakP2g
          claim_id: c_DbTCoqbDj86R1eGFTtrgsS
          source_id: s_3ajKjPCM6FxJ4j7VgFruNH
          stance: supports
          locator: CBDB:312134
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0bE35FhDRdOhXlaueAiM0W
        subject_person_id: p_fn2qF87LdSpD7mFSUY9aBy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HJV1MFkLfcab9XeNGhGirk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JTNagzEdzphHc66Ud1Drrj
          claim_id: c_0bE35FhDRdOhXlaueAiM0W
          source_id: s_rkdMbzwTVw3WHP49A1FBpx
          stance: supports
          locator: CBDB：兄弟 王三接（203931）之父／母 王濟
          quotation: null
          interpretation_note: 由兄弟关系推断：王三錫 与 王三接 为同胞（CBDB 记「弟」），王三接 之父／母即 王三錫 之父／母。
          source:
            id: s_rkdMbzwTVw3WHP49A1FBpx
            source_type: api_record
            title: 中国历代人物传记资料库：王三錫（CBDB 312134）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312134&o=json
            external_identifier: CBDB:312134
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fn2qF87LdSpD7mFSUY9aBy
        status: active
        display_name: 王濟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_pUEXWi0NvZcFrZbzy2bOxR
        subject_person_id: p_HJV1MFkLfcab9XeNGhGirk
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hh8fhsCR2PRgT3HnPmoPSX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MMA6XgIufJseU27jIlVFQb
          claim_id: c_pUEXWi0NvZcFrZbzy2bOxR
          source_id: s_rkdMbzwTVw3WHP49A1FBpx
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203931 王三接）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rkdMbzwTVw3WHP49A1FBpx
            source_type: api_record
            title: 中国历代人物传记资料库：王三錫（CBDB 312134）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312134&o=json
            external_identifier: CBDB:312134
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hh8fhsCR2PRgT3HnPmoPSX
        status: active
        display_name: 王三接
        merged_into_person_id: null
---

# 王三錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三錫 | accepted |
| bio.summary | 王三錫，明人物。嘉靖二十九年進士，籍贯同安。（中国历代人物传记资料库 CBDB 312134） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fn2qF87LdSpD7mFSUY9aBy | 王濟 | accepted |
| other | p_hh8fhsCR2PRgT3HnPmoPSX | 王三接 | accepted |

## 外部来源

- [中国历代人物传记资料库：王三錫（CBDB 312134）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312134&o=json)
