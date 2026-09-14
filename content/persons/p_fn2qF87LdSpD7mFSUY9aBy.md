---
schema: wang-person/v1
id: p_fn2qF87LdSpD7mFSUY9aBy
status: active
merged_into: null
display_name: 王濟
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d8rcssZSbRTHnPW37kZW24
        subject_person_id: p_fn2qF87LdSpD7mFSUY9aBy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fjoC5tJV5ErhdvXSrG2f84
          claim_id: c_d8rcssZSbRTHnPW37kZW24
          source_id: s_AWXpp7PGgrbvo4HhzKdng3
          stance: supports
          locator: CBDB:312131
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（312131）
          source: &a1
            id: s_AWXpp7PGgrbvo4HhzKdng3
            source_type: api_record
            title: 中国历代人物传记资料库：王濟（CBDB 312131）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312131&o=json
            external_identifier: CBDB:312131
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.864Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dsD2QNwej77v3M1K4DyeQ6
        subject_person_id: p_fn2qF87LdSpD7mFSUY9aBy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟，明人物。嘉靖二十九年進士，籍贯同安。（中国历代人物传记资料库 CBDB 312131）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YruMn6em41A5b2WxEd9m46
          claim_id: c_dsD2QNwej77v3M1K4DyeQ6
          source_id: s_AWXpp7PGgrbvo4HhzKdng3
          stance: supports
          locator: CBDB:312131
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c__Zx_zhqpuJroNA9Hjh9JGz
        subject_person_id: p_fn2qF87LdSpD7mFSUY9aBy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hh8fhsCR2PRgT3HnPmoPSX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iSnrQpEgI_wN7w4RE88W9P
          claim_id: c__Zx_zhqpuJroNA9Hjh9JGz
          source_id: s_AWXpp7PGgrbvo4HhzKdng3
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第二甲第四十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hh8fhsCR2PRgT3HnPmoPSX
        status: active
        display_name: 王三接
        merged_into_person_id: null
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
        id: p_HJV1MFkLfcab9XeNGhGirk
        status: active
        display_name: 王三錫
        merged_into_person_id: null
    - claim:
        id: c_I7_OcYQhlHXixqNf9fB3CF
        subject_person_id: p_fn2qF87LdSpD7mFSUY9aBy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MMG96uL7Ktj4gzK2e3wPsU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zL7perwQWYL6pMBV5GHAxm
          claim_id: c_I7_OcYQhlHXixqNf9fB3CF
          source_id: s_lxYvc4LlhGho1wbomWso7p
          stance: supports
          locator: CBDB：兄弟 王三接（203931）之父／母 王濟
          quotation: null
          interpretation_note: 由兄弟关系推断：王三聘 与 王三接 为同胞（CBDB 记「兄」），王三接 之父／母即 王三聘 之父／母。
          source:
            id: s_lxYvc4LlhGho1wbomWso7p
            source_type: api_record
            title: 中国历代人物传记资料库：王三聘（CBDB 312135）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312135&o=json
            external_identifier: CBDB:312135
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MMG96uL7Ktj4gzK2e3wPsU
        status: active
        display_name: 王三聘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王濟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濟 | accepted |
| bio.summary | 王濟，明人物。嘉靖二十九年進士，籍贯同安。（中国历代人物传记资料库 CBDB 312131） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_hh8fhsCR2PRgT3HnPmoPSX | 王三接 | accepted |
| children | p_HJV1MFkLfcab9XeNGhGirk | 王三錫 | accepted |
| children | p_MMG96uL7Ktj4gzK2e3wPsU | 王三聘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王濟（CBDB 312131）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312131&o=json)
- [中国历代人物传记资料库：王三聘（CBDB 312135）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312135&o=json)
- [中国历代人物传记资料库：王三錫（CBDB 312134）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312134&o=json)
