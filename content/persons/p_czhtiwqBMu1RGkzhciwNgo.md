---
schema: wang-person/v1
id: p_czhtiwqBMu1RGkzhciwNgo
status: active
merged_into: null
display_name: 王昌
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uHFxSWNgm2YyZLE5KdT329
        subject_person_id: p_czhtiwqBMu1RGkzhciwNgo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TFWWbHC7zx8Q93Yw7AETfR
          claim_id: c_uHFxSWNgm2YyZLE5KdT329
          source_id: s_VfvhjG4nfdEYsi4AmYzZad
          stance: supports
          locator: CBDB:265934
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（265934）
          source: &a1
            id: s_VfvhjG4nfdEYsi4AmYzZad
            source_type: api_record
            title: 中国历代人物传记资料库：王昌（CBDB 265934）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265934&o=json
            external_identifier: CBDB:265934
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.705Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Rkwd3A4kBUwVxnPryurAqP
        subject_person_id: p_czhtiwqBMu1RGkzhciwNgo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌，明人物。弘治六年進士，籍贯無錫，曾任義官。（中国历代人物传记资料库 CBDB 265934）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7cjC9_dvWbrx4B1IkbnD7T
          claim_id: c_Rkwd3A4kBUwVxnPryurAqP
          source_id: s_VfvhjG4nfdEYsi4AmYzZad
          stance: supports
          locator: CBDB:265934
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_eYf0856_bDzqw6BIwp2OmF
        subject_person_id: p_czhtiwqBMu1RGkzhciwNgo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bVh1otR2HH59HH7rfKSMH9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_696uvTV3YBPHxeO5VUXRa8
          claim_id: c_eYf0856_bDzqw6BIwp2OmF
          source_id: s_VfvhjG4nfdEYsi4AmYzZad
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第一百二十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bVh1otR2HH59HH7rfKSMH9
        status: active
        display_name: 王德
        merged_into_person_id: null
    - claim:
        id: c_RSKuCAEWg1fQN06IGvHAl1
        subject_person_id: p_czhtiwqBMu1RGkzhciwNgo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1TdEwjEL19s1J7G5PHfNTM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JexZ5Ex_6650lSYw4pNlcY
          claim_id: c_RSKuCAEWg1fQN06IGvHAl1
          source_id: s_0tYDo9oK2fniBcTVgkYJwU
          stance: supports
          locator: CBDB：兄弟 王德（201011）之父／母 王昌
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝能 与 王德 为同胞（CBDB 记「弟」），王德 之父／母即 王汝能 之父／母。
          source:
            id: s_0tYDo9oK2fniBcTVgkYJwU
            source_type: api_record
            title: 中国历代人物传记资料库：王汝能（CBDB 265941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265941&o=json
            external_identifier: CBDB:265941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1TdEwjEL19s1J7G5PHfNTM
        status: active
        display_name: 王汝能
        merged_into_person_id: null
    - claim:
        id: c_PHNpT4OoYOrYUcB0Q6Si5k
        subject_person_id: p_czhtiwqBMu1RGkzhciwNgo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6T3TA3jDUyUkHWbCmXvJvH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-QU0R-PvaJXSubGUPuLFr_
          claim_id: c_PHNpT4OoYOrYUcB0Q6Si5k
          source_id: s_puxKrulYK5HtJ61EtVrumy
          stance: supports
          locator: CBDB：兄弟 王德（201011）之父／母 王昌
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝賢 与 王德 为同胞（CBDB 记「弟」），王德 之父／母即 王汝賢 之父／母。
          source:
            id: s_puxKrulYK5HtJ61EtVrumy
            source_type: api_record
            title: 中国历代人物传记资料库：王汝賢（CBDB 265939）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265939&o=json
            external_identifier: CBDB:265939
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6T3TA3jDUyUkHWbCmXvJvH
        status: active
        display_name: 王汝賢
        merged_into_person_id: null
    - claim:
        id: c_L992BD65fY7A_0JgMGAo1G
        subject_person_id: p_czhtiwqBMu1RGkzhciwNgo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_B9Pdw9C9qeF6k6crMywRYK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f8X5-01e4427XNoX8FUbTg
          claim_id: c_L992BD65fY7A_0JgMGAo1G
          source_id: s_ZF9Shz3yIaVnFFAVYR3UbG
          stance: supports
          locator: CBDB：兄弟 王德（201011）之父／母 王昌
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝端 与 王德 为同胞（CBDB 记「兄」），王德 之父／母即 王汝端 之父／母。
          source:
            id: s_ZF9Shz3yIaVnFFAVYR3UbG
            source_type: api_record
            title: 中国历代人物传记资料库：王汝端（CBDB 265943）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265943&o=json
            external_identifier: CBDB:265943
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_B9Pdw9C9qeF6k6crMywRYK
        status: active
        display_name: 王汝端
        merged_into_person_id: null
    - claim:
        id: c_GGp23UejUDJvAWTwWBpwHx
        subject_person_id: p_czhtiwqBMu1RGkzhciwNgo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZUSeBf3bwunYCNX9U7KU7r
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qXyrZPNJKbklZopzkfHsbS
          claim_id: c_GGp23UejUDJvAWTwWBpwHx
          source_id: s_BDhXSI5eTq1K4O-pEQSiw3
          stance: supports
          locator: CBDB：兄弟 王德（201011）之父／母 王昌
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝良 与 王德 为同胞（CBDB 记「弟」），王德 之父／母即 王汝良 之父／母。
          source:
            id: s_BDhXSI5eTq1K4O-pEQSiw3
            source_type: api_record
            title: 中国历代人物传记资料库：王汝良（CBDB 265940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265940&o=json
            external_identifier: CBDB:265940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZUSeBf3bwunYCNX9U7KU7r
        status: active
        display_name: 王汝良
        merged_into_person_id: null
    - claim:
        id: c_U1n4roiIGAw_WcKIcFjrGy
        subject_person_id: p_czhtiwqBMu1RGkzhciwNgo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uPMjhauhT8ZcPTwE45WUiB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6qBsgTCJVgYnU9tECAhdj1
          claim_id: c_U1n4roiIGAw_WcKIcFjrGy
          source_id: s_I8PPAaYYbTHy5O2d1vMvaK
          stance: supports
          locator: CBDB：兄弟 王德（201011）之父／母 王昌
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝明 与 王德 为同胞（CBDB 记「弟」），王德 之父／母即 王汝明 之父／母。
          source:
            id: s_I8PPAaYYbTHy5O2d1vMvaK
            source_type: api_record
            title: 中国历代人物传记资料库：王汝明（CBDB 265942）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265942&o=json
            external_identifier: CBDB:265942
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uPMjhauhT8ZcPTwE45WUiB
        status: active
        display_name: 王汝明
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昌 | accepted |
| bio.summary | 王昌，明人物。弘治六年進士，籍贯無錫，曾任義官。（中国历代人物传记资料库 CBDB 265934） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_bVh1otR2HH59HH7rfKSMH9 | 王德 | accepted |
| children | p_1TdEwjEL19s1J7G5PHfNTM | 王汝能 | accepted |
| children | p_6T3TA3jDUyUkHWbCmXvJvH | 王汝賢 | accepted |
| children | p_B9Pdw9C9qeF6k6crMywRYK | 王汝端 | accepted |
| children | p_ZUSeBf3bwunYCNX9U7KU7r | 王汝良 | accepted |
| children | p_uPMjhauhT8ZcPTwE45WUiB | 王汝明 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昌（CBDB 265934）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265934&o=json)
- [中国历代人物传记资料库：王汝端（CBDB 265943）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265943&o=json)
- [中国历代人物传记资料库：王汝良（CBDB 265940）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265940&o=json)
- [中国历代人物传记资料库：王汝明（CBDB 265942）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265942&o=json)
- [中国历代人物传记资料库：王汝能（CBDB 265941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265941&o=json)
- [中国历代人物传记资料库：王汝賢（CBDB 265939）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265939&o=json)
