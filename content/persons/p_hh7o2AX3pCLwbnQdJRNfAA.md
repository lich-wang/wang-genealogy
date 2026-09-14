---
schema: wang-person/v1
id: p_hh7o2AX3pCLwbnQdJRNfAA
status: active
merged_into: null
display_name: 王綱
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wPX7aykYxwscTBXFyRVGWc
        subject_person_id: p_hh7o2AX3pCLwbnQdJRNfAA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R3eFpV4aZZnyt26Ck8Hu2M
          claim_id: c_wPX7aykYxwscTBXFyRVGWc
          source_id: s_w4ziRJPUU4XSh9hQQeo2Kx
          stance: supports
          locator: CBDB:243166
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（243166）
          source: &a1
            id: s_w4ziRJPUU4XSh9hQQeo2Kx
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 243166）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243166&o=json
            external_identifier: CBDB:243166
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.989Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rfJNdMQxjVr49MnHtHHESH
        subject_person_id: p_hh7o2AX3pCLwbnQdJRNfAA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱，明人物。成化五年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 243166）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3q3PVE_nJdVO17MQNGMU8p
          claim_id: c_rfJNdMQxjVr49MnHtHHESH
          source_id: s_w4ziRJPUU4XSh9hQQeo2Kx
          stance: supports
          locator: CBDB:243166
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_-DOpVLvxEplfCqbcsGuxjO
        subject_person_id: p_hh7o2AX3pCLwbnQdJRNfAA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GiENj1L3SMUyiHFegryAJV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_azZ24H01E-YmD4ApKIEWjF
          claim_id: c_-DOpVLvxEplfCqbcsGuxjO
          source_id: s_w4ziRJPUU4XSh9hQQeo2Kx
          stance: supports
          locator: 成化五年進士登科錄:一卷，第二甲第五十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GiENj1L3SMUyiHFegryAJV
        status: active
        display_name: 王鼎
        merged_into_person_id: null
    - claim:
        id: c_jI0-jFUg_2jFwb96FUkruA
        subject_person_id: p_hh7o2AX3pCLwbnQdJRNfAA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ADCwD8mJr4YTwEg7bB9rKh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0AJOGBwLZJkJP4tPV4Jib0
          claim_id: c_jI0-jFUg_2jFwb96FUkruA
          source_id: s_k7snzxg1K5TgxFfw-wwc-R
          stance: supports
          locator: CBDB：兄弟 王鼎（67755）之父／母 王綱
          quotation: null
          interpretation_note: 由兄弟关系推断：王卣 与 王鼎 为同胞（CBDB 记「兄」），王鼎 之父／母即 王卣 之父／母。
          source:
            id: s_k7snzxg1K5TgxFfw-wwc-R
            source_type: api_record
            title: 中国历代人物传记资料库：王卣（CBDB 243172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243172&o=json
            external_identifier: CBDB:243172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ADCwD8mJr4YTwEg7bB9rKh
        status: active
        display_name: 王卣
        merged_into_person_id: null
    - claim:
        id: c_xIy9bK0TJfW7twSqlR-rdn
        subject_person_id: p_hh7o2AX3pCLwbnQdJRNfAA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AUCmhuQeP2ejE2Bpshux9Q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qB7yTjruPi9MuhTf_zvUw3
          claim_id: c_xIy9bK0TJfW7twSqlR-rdn
          source_id: s_sE_MkIZJ9_dO3SOR3MIx-j
          stance: supports
          locator: CBDB：兄弟 王鼎（67755）之父／母 王綱
          quotation: null
          interpretation_note: 由兄弟关系推断：王冠 与 王鼎 为同胞（CBDB 记「兄」），王鼎 之父／母即 王冠 之父／母。
          source:
            id: s_sE_MkIZJ9_dO3SOR3MIx-j
            source_type: api_record
            title: 中国历代人物传记资料库：王冠（CBDB 243170）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243170&o=json
            external_identifier: CBDB:243170
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AUCmhuQeP2ejE2Bpshux9Q
        status: active
        display_name: 王冠
        merged_into_person_id: null
    - claim:
        id: c_E1kq_Co5A8dYL3mTrM-hhn
        subject_person_id: p_hh7o2AX3pCLwbnQdJRNfAA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FS6HNQ1ATYPy5GsG7qTNT3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AbIvadPACYWKh1Xuxhq4rn
          claim_id: c_E1kq_Co5A8dYL3mTrM-hhn
          source_id: s_tGVeacpf8MRa6QFf99qlIo
          stance: supports
          locator: CBDB：兄弟 王鼎（67755）之父／母 王綱
          quotation: null
          interpretation_note: 由兄弟关系推断：王彝 与 王鼎 为同胞（CBDB 记「兄」），王鼎 之父／母即 王彝 之父／母。
          source:
            id: s_tGVeacpf8MRa6QFf99qlIo
            source_type: api_record
            title: 中国历代人物传记资料库：王彝（CBDB 243169）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243169&o=json
            external_identifier: CBDB:243169
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FS6HNQ1ATYPy5GsG7qTNT3
        status: active
        display_name: 王彝
        merged_into_person_id: null
    - claim:
        id: c_a6d6Gtl8YrFnaEHxUL6epd
        subject_person_id: p_hh7o2AX3pCLwbnQdJRNfAA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Gr4skSSp4WgrM2u8jonSLM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yoMQNjWeRT_FLQBk-d0x6Z
          claim_id: c_a6d6Gtl8YrFnaEHxUL6epd
          source_id: s_5uGv_C4JzkHs9FQak788Hp
          stance: supports
          locator: CBDB：兄弟 王鼎（67755）之父／母 王綱
          quotation: null
          interpretation_note: 由兄弟关系推断：王冕 与 王鼎 为同胞（CBDB 记「兄」），王鼎 之父／母即 王冕 之父／母。
          source:
            id: s_5uGv_C4JzkHs9FQak788Hp
            source_type: api_record
            title: 中国历代人物传记资料库：王冕（CBDB 243171）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243171&o=json
            external_identifier: CBDB:243171
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Gr4skSSp4WgrM2u8jonSLM
        status: active
        display_name: 王冕
        merged_into_person_id: null
    - claim:
        id: c_LZVw0ObAH_RHYEdTMw4aDP
        subject_person_id: p_hh7o2AX3pCLwbnQdJRNfAA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JrXCGcdeAggbBdG6dKucBz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MmNtXOqn-LS9pbY1JXU9MS
          claim_id: c_LZVw0ObAH_RHYEdTMw4aDP
          source_id: s_EYSOd_529ZRAWPvblTkdjV
          stance: supports
          locator: CBDB：兄弟 王鼎（67755）之父／母 王綱
          quotation: null
          interpretation_note: 由兄弟关系推断：王旒 与 王鼎 为同胞（CBDB 记「兄」），王鼎 之父／母即 王旒 之父／母。
          source:
            id: s_EYSOd_529ZRAWPvblTkdjV
            source_type: api_record
            title: 中国历代人物传记资料库：王旒（CBDB 243175）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243175&o=json
            external_identifier: CBDB:243175
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JrXCGcdeAggbBdG6dKucBz
        status: active
        display_name: 王旒
        merged_into_person_id: null
    - claim:
        id: c_ij1y6g0UqX6NbuDRfFHdVn
        subject_person_id: p_hh7o2AX3pCLwbnQdJRNfAA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Xt55xxKHy3bmMG4AnsnCtF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fk9-Fm-lNUExe0xuDqwz-e
          claim_id: c_ij1y6g0UqX6NbuDRfFHdVn
          source_id: s_RCA5EK0vq9h-SEbTC3BnPL
          stance: supports
          locator: CBDB：兄弟 王鼎（67755）之父／母 王綱
          quotation: null
          interpretation_note: 由兄弟关系推断：王冔 与 王鼎 为同胞（CBDB 记「兄」），王鼎 之父／母即 王冔 之父／母。
          source:
            id: s_RCA5EK0vq9h-SEbTC3BnPL
            source_type: api_record
            title: 中国历代人物传记资料库：王冔（CBDB 243173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243173&o=json
            external_identifier: CBDB:243173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Xt55xxKHy3bmMG4AnsnCtF
        status: active
        display_name: 王冔
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王綱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綱 | accepted |
| bio.summary | 王綱，明人物。成化五年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 243166） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_GiENj1L3SMUyiHFegryAJV | 王鼎 | accepted |
| children | p_ADCwD8mJr4YTwEg7bB9rKh | 王卣 | accepted |
| children | p_AUCmhuQeP2ejE2Bpshux9Q | 王冠 | accepted |
| children | p_FS6HNQ1ATYPy5GsG7qTNT3 | 王彝 | accepted |
| children | p_Gr4skSSp4WgrM2u8jonSLM | 王冕 | accepted |
| children | p_JrXCGcdeAggbBdG6dKucBz | 王旒 | accepted |
| children | p_Xt55xxKHy3bmMG4AnsnCtF | 王冔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綱（CBDB 243166）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243166&o=json)
- [中国历代人物传记资料库：王冠（CBDB 243170）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243170&o=json)
- [中国历代人物传记资料库：王旒（CBDB 243175）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243175&o=json)
- [中国历代人物传记资料库：王冕（CBDB 243171）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243171&o=json)
- [中国历代人物传记资料库：王冔（CBDB 243173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243173&o=json)
- [中国历代人物传记资料库：王彝（CBDB 243169）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243169&o=json)
- [中国历代人物传记资料库：王卣（CBDB 243172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243172&o=json)
