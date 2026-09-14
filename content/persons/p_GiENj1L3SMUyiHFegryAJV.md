---
schema: wang-person/v1
id: p_GiENj1L3SMUyiHFegryAJV
status: active
merged_into: null
display_name: 王鼎
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2GpLhmWR1K3SwDp5GJdA3F
        subject_person_id: p_GiENj1L3SMUyiHFegryAJV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ku8JFbMUwmYdJFYU2PKGUS
          claim_id: c_2GpLhmWR1K3SwDp5GJdA3F
          source_id: s_HKvahBw6VeNXTdGFXN8HRh
          stance: supports
          locator: CBDB:67755
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67755）
          source: &a1
            id: s_HKvahBw6VeNXTdGFXN8HRh
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 67755）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67755&o=json
            external_identifier: CBDB:67755
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.009Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yETqsp43Q7y6QnoxZqym2g
        subject_person_id: p_GiENj1L3SMUyiHFegryAJV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎，明人物。明清進士進士，籍贯常熟，入仕進士，曾任布政使司參議、刑部主事、左參政。（中国历代人物传记资料库 CBDB 67755）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_a_ZBh-ufKFk-vJRo0G3Pec
          claim_id: c_yETqsp43Q7y6QnoxZqym2g
          source_id: s_HKvahBw6VeNXTdGFXN8HRh
          stance: supports
          locator: CBDB:67755
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source:
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
      object_person:
        id: p_hh7o2AX3pCLwbnQdJRNfAA
        status: active
        display_name: 王綱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_C4YeNej3DIHuMk5hQoplJu
        subject_person_id: p_Beacss7dS24nrMLnpSAAXX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GiENj1L3SMUyiHFegryAJV
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p18XfVWarDY5bvmvbqoTWy
          claim_id: c_C4YeNej3DIHuMk5hQoplJu
          source_id: s_5PCs7NQa8P51GNG2LZr6We
          stance: supports
          locator: 成化五年進士登科錄:一卷，第二甲第五十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5PCs7NQa8P51GNG2LZr6We
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 243164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243164&o=json
            external_identifier: CBDB:243164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.987Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Beacss7dS24nrMLnpSAAXX
        status: active
        display_name: 王佐
        merged_into_person_id: null
    - claim:
        id: c_-r3dEV-84pK6mV9qnO6dik
        subject_person_id: p_bzh99rteRVTFVmRD8728ws
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GiENj1L3SMUyiHFegryAJV
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kXwIX455ySD0Aedumpcy6N
          claim_id: c_-r3dEV-84pK6mV9qnO6dik
          source_id: s_xdVX7kEEjUojU4HtvLYBM4
          stance: supports
          locator: 成化五年進士登科錄:一卷，第二甲第五十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xdVX7kEEjUojU4HtvLYBM4
            source_type: api_record
            title: 中国历代人物传记资料库：王衡（CBDB 243165）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243165&o=json
            external_identifier: CBDB:243165
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.988Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bzh99rteRVTFVmRD8728ws
        status: active
        display_name: 王衡
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_odxv7Y5H6Xc3k4jjsqCK9q
        subject_person_id: p_ADCwD8mJr4YTwEg7bB9rKh
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GiENj1L3SMUyiHFegryAJV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h_gfRVaxgdt_7PgxiJp8dj
          claim_id: c_odxv7Y5H6Xc3k4jjsqCK9q
          source_id: s_k7snzxg1K5TgxFfw-wwc-R
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67755 王鼎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_3R83Y_OJRHXjqh41o2Jyal
        subject_person_id: p_AUCmhuQeP2ejE2Bpshux9Q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GiENj1L3SMUyiHFegryAJV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1jSQGujF36Qx-uAvOTQbda
          claim_id: c_3R83Y_OJRHXjqh41o2Jyal
          source_id: s_sE_MkIZJ9_dO3SOR3MIx-j
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67755 王鼎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c__nuGP21clKofQnDpLzzHjK
        subject_person_id: p_FS6HNQ1ATYPy5GsG7qTNT3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GiENj1L3SMUyiHFegryAJV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i7NhGSxpFw8-1wiLrmWiCn
          claim_id: c__nuGP21clKofQnDpLzzHjK
          source_id: s_tGVeacpf8MRa6QFf99qlIo
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67755 王鼎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_nqPigls4tA7JmjFCU1rvZR
        subject_person_id: p_GiENj1L3SMUyiHFegryAJV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Gr4skSSp4WgrM2u8jonSLM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FbIq9xfLHbiNStXzAOZXC6
          claim_id: c_nqPigls4tA7JmjFCU1rvZR
          source_id: s_5uGv_C4JzkHs9FQak788Hp
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67755 王鼎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_LTxxyWkO1gIZo_2no8ha6d
        subject_person_id: p_GiENj1L3SMUyiHFegryAJV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_JrXCGcdeAggbBdG6dKucBz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_79Ll3tCic5YcfXagzICko0
          claim_id: c_LTxxyWkO1gIZo_2no8ha6d
          source_id: s_EYSOd_529ZRAWPvblTkdjV
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67755 王鼎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_rLgfwOdXn2wBgbUwg6dy2_
        subject_person_id: p_GiENj1L3SMUyiHFegryAJV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Xt55xxKHy3bmMG4AnsnCtF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-YzHpMd0Ii6Mvdk1AJsSIu
          claim_id: c_rLgfwOdXn2wBgbUwg6dy2_
          source_id: s_RCA5EK0vq9h-SEbTC3BnPL
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67755 王鼎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎 | accepted |
| bio.summary | 王鼎，明人物。明清進士進士，籍贯常熟，入仕進士，曾任布政使司參議、刑部主事、左參政。（中国历代人物传记资料库 CBDB 67755） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hh7o2AX3pCLwbnQdJRNfAA | 王綱 | accepted |
| ancestors | p_Beacss7dS24nrMLnpSAAXX | 王佐 | accepted |
| ancestors | p_bzh99rteRVTFVmRD8728ws | 王衡 | accepted |
| other | p_ADCwD8mJr4YTwEg7bB9rKh | 王卣 | accepted |
| other | p_AUCmhuQeP2ejE2Bpshux9Q | 王冠 | accepted |
| other | p_FS6HNQ1ATYPy5GsG7qTNT3 | 王彝 | accepted |
| other | p_Gr4skSSp4WgrM2u8jonSLM | 王冕 | accepted |
| other | p_JrXCGcdeAggbBdG6dKucBz | 王旒 | accepted |
| other | p_Xt55xxKHy3bmMG4AnsnCtF | 王冔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鼎（CBDB 67755）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67755&o=json)
- [中国历代人物传记资料库：王綱（CBDB 243166）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243166&o=json)
- [中国历代人物传记资料库：王冠（CBDB 243170）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243170&o=json)
- [中国历代人物传记资料库：王衡（CBDB 243165）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243165&o=json)
- [中国历代人物传记资料库：王旒（CBDB 243175）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243175&o=json)
- [中国历代人物传记资料库：王冕（CBDB 243171）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243171&o=json)
- [中国历代人物传记资料库：王冔（CBDB 243173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243173&o=json)
- [中国历代人物传记资料库：王彝（CBDB 243169）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243169&o=json)
- [中国历代人物传记资料库：王卣（CBDB 243172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243172&o=json)
- [中国历代人物传记资料库：王佐（CBDB 243164）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243164&o=json)
