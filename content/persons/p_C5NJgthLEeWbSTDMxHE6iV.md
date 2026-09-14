---
schema: wang-person/v1
id: p_C5NJgthLEeWbSTDMxHE6iV
status: active
merged_into: null
display_name: 王寧
revision: 13
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wkeHnFV3JJxtZWXVdT8fX6
        subject_person_id: p_C5NJgthLEeWbSTDMxHE6iV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2UF485AfPWLdZoAoqonJwo
          claim_id: c_wkeHnFV3JJxtZWXVdT8fX6
          source_id: s_M8X3wh89XBfdrbhLFWVZiq
          stance: supports
          locator: CBDB:290256
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（290256）
          source: &a1
            id: s_M8X3wh89XBfdrbhLFWVZiq
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 290256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290256&o=json
            external_identifier: CBDB:290256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.326Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NL5Y62dv6obUSezUvah5KB
        subject_person_id: p_C5NJgthLEeWbSTDMxHE6iV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寧，明人物。嘉靖八年進士，籍贯德州。（中国历代人物传记资料库 CBDB 290256）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ruLROJuQe7zU0NkwbBsl1c
          claim_id: c_NL5Y62dv6obUSezUvah5KB
          source_id: s_M8X3wh89XBfdrbhLFWVZiq
          stance: supports
          locator: CBDB:290256
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_r9rOMRoNuOV_KkcBkWx7VN
        subject_person_id: p_C5NJgthLEeWbSTDMxHE6iV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Td2fuKuEoYV2zfraAXswcd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SFpW8uv3T7LghPBbqR2vC7
          claim_id: c_r9rOMRoNuOV_KkcBkWx7VN
          source_id: s_M8X3wh89XBfdrbhLFWVZiq
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百八十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Td2fuKuEoYV2zfraAXswcd
        status: active
        display_name: 王汝楫
        merged_into_person_id: null
    - claim:
        id: c_RyjHd2yS_5QXS2DsgwGqeR
        subject_person_id: p_C5NJgthLEeWbSTDMxHE6iV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1ueQH48Ni7qioRn4MKx7LM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ixniJau3P0AFh4ysYWVWPs
          claim_id: c_RyjHd2yS_5QXS2DsgwGqeR
          source_id: s_t6Bu-6O52ghZS1HMTiQmte
          stance: supports
          locator: CBDB：兄弟 王汝楫（202580）之父／母 王寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝礪 与 王汝楫 为同胞（CBDB 记「弟」），王汝楫 之父／母即 王汝礪 之父／母。
          source:
            id: s_t6Bu-6O52ghZS1HMTiQmte
            source_type: api_record
            title: 中国历代人物传记资料库：王汝礪（CBDB 290264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290264&o=json
            external_identifier: CBDB:290264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1ueQH48Ni7qioRn4MKx7LM
        status: active
        display_name: 王汝礪
        merged_into_person_id: null
    - claim:
        id: c_KctSereS-wIryP20Ciq4qo
        subject_person_id: p_C5NJgthLEeWbSTDMxHE6iV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HKDr4WqMxqe47AmDhxrfoZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JSFMIj62l19A6IhRBU5Pcc
          claim_id: c_KctSereS-wIryP20Ciq4qo
          source_id: s_Aq2lWW-28AWyUfOyBW6aur
          stance: supports
          locator: CBDB：兄弟 王汝楫（202580）之父／母 王寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝揆 与 王汝楫 为同胞（CBDB 记「兄」），王汝楫 之父／母即 王汝揆 之父／母。
          source:
            id: s_Aq2lWW-28AWyUfOyBW6aur
            source_type: api_record
            title: 中国历代人物传记资料库：王汝揆（CBDB 290269）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290269&o=json
            external_identifier: CBDB:290269
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HKDr4WqMxqe47AmDhxrfoZ
        status: active
        display_name: 王汝揆
        merged_into_person_id: null
    - claim:
        id: c_jOW_wI3YJUikyPTCbHh0eJ
        subject_person_id: p_C5NJgthLEeWbSTDMxHE6iV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RkGCEEHr53n9knPvtwYcMx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mqLb8zDT3urdkOwu7aFmgt
          claim_id: c_jOW_wI3YJUikyPTCbHh0eJ
          source_id: s_8R6ygHS1BlPy-Azzh5iEFw
          stance: supports
          locator: CBDB：兄弟 王汝楫（202580）之父／母 王寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝舟 与 王汝楫 为同胞（CBDB 记「兄」），王汝楫 之父／母即 王汝舟 之父／母。
          source:
            id: s_8R6ygHS1BlPy-Azzh5iEFw
            source_type: api_record
            title: 中国历代人物传记资料库：王汝舟（CBDB 290267）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290267&o=json
            external_identifier: CBDB:290267
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RkGCEEHr53n9knPvtwYcMx
        status: active
        display_name: 王汝舟
        merged_into_person_id: null
    - claim:
        id: c_aNONQe-gb_JcOSnu1QNLyB
        subject_person_id: p_C5NJgthLEeWbSTDMxHE6iV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SbwdTjQJ4U2AyWyjDGfSJT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tRtsHG-S4Sp5vzg105tFpB
          claim_id: c_aNONQe-gb_JcOSnu1QNLyB
          source_id: s_-R1Vm2m-2WUOLx7f4I6AgT
          stance: supports
          locator: CBDB：兄弟 王汝楫（202580）之父／母 王寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝欽 与 王汝楫 为同胞（CBDB 记「兄」），王汝楫 之父／母即 王汝欽 之父／母。
          source:
            id: s_-R1Vm2m-2WUOLx7f4I6AgT
            source_type: api_record
            title: 中国历代人物传记资料库：王汝欽（CBDB 290265）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290265&o=json
            external_identifier: CBDB:290265
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SbwdTjQJ4U2AyWyjDGfSJT
        status: active
        display_name: 王汝欽
        merged_into_person_id: null
    - claim:
        id: c_b3TNlhIcEBnS60ImuEyrch
        subject_person_id: p_C5NJgthLEeWbSTDMxHE6iV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aH4temuN1GwxFqxF8DG3DP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_US-bVFn95xSmP6FhmLrH_t
          claim_id: c_b3TNlhIcEBnS60ImuEyrch
          source_id: s_UtQ_y1eMO_xir8e8TBNQYj
          stance: supports
          locator: CBDB：兄弟 王汝楫（202580）之父／母 王寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝翼 与 王汝楫 为同胞（CBDB 记「弟」），王汝楫 之父／母即 王汝翼 之父／母。
          source:
            id: s_UtQ_y1eMO_xir8e8TBNQYj
            source_type: api_record
            title: 中国历代人物传记资料库：王汝翼（CBDB 290260）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290260&o=json
            external_identifier: CBDB:290260
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aH4temuN1GwxFqxF8DG3DP
        status: active
        display_name: 王汝翼
        merged_into_person_id: null
    - claim:
        id: c_VP_ZnCJIATUdlD4Ox1zM-3
        subject_person_id: p_C5NJgthLEeWbSTDMxHE6iV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_b3m7hRAK8FG8XFw2186M2U
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_--lR3y2A89h7u5X77nmzyq
          claim_id: c_VP_ZnCJIATUdlD4Ox1zM-3
          source_id: s_Ncjda2XpjKjqs2-3TRlhH4
          stance: supports
          locator: CBDB：兄弟 王汝楫（202580）之父／母 王寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝咨 与 王汝楫 为同胞（CBDB 记「兄」），王汝楫 之父／母即 王汝咨 之父／母。
          source:
            id: s_Ncjda2XpjKjqs2-3TRlhH4
            source_type: api_record
            title: 中国历代人物传记资料库：王汝咨（CBDB 290268）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290268&o=json
            external_identifier: CBDB:290268
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_b3m7hRAK8FG8XFw2186M2U
        status: active
        display_name: 王汝咨
        merged_into_person_id: null
    - claim:
        id: c_xY_SQtzydlkz3Ue1JQgiiP
        subject_person_id: p_C5NJgthLEeWbSTDMxHE6iV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bSgTQ1SdX3ywE4pyrdpy6w
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_25BopyIjoQMyC3aFGHhKFQ
          claim_id: c_xY_SQtzydlkz3Ue1JQgiiP
          source_id: s_O2OJnQ9SdLzU5qV-N46OB0
          stance: supports
          locator: CBDB：兄弟 王汝楫（202580）之父／母 王寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝為 与 王汝楫 为同胞（CBDB 记「弟」），王汝楫 之父／母即 王汝為 之父／母。
          source:
            id: s_O2OJnQ9SdLzU5qV-N46OB0
            source_type: api_record
            title: 中国历代人物传记资料库：王汝為（CBDB 290261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290261&o=json
            external_identifier: CBDB:290261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bSgTQ1SdX3ywE4pyrdpy6w
        status: active
        display_name: 王汝為
        merged_into_person_id: null
    - claim:
        id: c_dPsjcc_24iEZpVWOgTybwa
        subject_person_id: p_C5NJgthLEeWbSTDMxHE6iV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_giUkdBkH6m6S6QkQAtjAM9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hC57z6EHd9PZzp5mr7Drxy
          claim_id: c_dPsjcc_24iEZpVWOgTybwa
          source_id: s_rcCNl-aUYvxDJi8hiaFfUl
          stance: supports
          locator: CBDB：兄弟 王汝楫（202580）之父／母 王寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝甫 与 王汝楫 为同胞（CBDB 记「兄」），王汝楫 之父／母即 王汝甫 之父／母。
          source:
            id: s_rcCNl-aUYvxDJi8hiaFfUl
            source_type: api_record
            title: 中国历代人物传记资料库：王汝甫（CBDB 290266）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290266&o=json
            external_identifier: CBDB:290266
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_giUkdBkH6m6S6QkQAtjAM9
        status: active
        display_name: 王汝甫
        merged_into_person_id: null
    - claim:
        id: c_itr_8awPnAjXLxVp_Dhbah
        subject_person_id: p_C5NJgthLEeWbSTDMxHE6iV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pU9NzrAvexDBjksMgBLf2x
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cgEEw9NNaECV-IJCgiz945
          claim_id: c_itr_8awPnAjXLxVp_Dhbah
          source_id: s_C-bg82DgptsyG1s13du3t0
          stance: supports
          locator: CBDB：兄弟 王汝楫（202580）之父／母 王寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝相 与 王汝楫 为同胞（CBDB 记「兄」），王汝楫 之父／母即 王汝相 之父／母。
          source:
            id: s_C-bg82DgptsyG1s13du3t0
            source_type: api_record
            title: 中国历代人物传记资料库：王汝相（CBDB 290271）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290271&o=json
            external_identifier: CBDB:290271
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pU9NzrAvexDBjksMgBLf2x
        status: active
        display_name: 王汝相
        merged_into_person_id: null
    - claim:
        id: c_kVrh8tQOh5_lOrq_ZDQw20
        subject_person_id: p_C5NJgthLEeWbSTDMxHE6iV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_q6hJ3G7h1X6AKMxTGrzWNz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jz8a_wFhRpWWxexkkTd4dC
          claim_id: c_kVrh8tQOh5_lOrq_ZDQw20
          source_id: s_x5c8OdogL04PkixstV9mUv
          stance: supports
          locator: CBDB：兄弟 王汝楫（202580）之父／母 王寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝器 与 王汝楫 为同胞（CBDB 记「兄」），王汝楫 之父／母即 王汝器 之父／母。
          source:
            id: s_x5c8OdogL04PkixstV9mUv
            source_type: api_record
            title: 中国历代人物传记资料库：王汝器（CBDB 290270）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290270&o=json
            external_identifier: CBDB:290270
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_q6hJ3G7h1X6AKMxTGrzWNz
        status: active
        display_name: 王汝器
        merged_into_person_id: null
    - claim:
        id: c_JyCuJy9x59CEujBq8NBP1S
        subject_person_id: p_C5NJgthLEeWbSTDMxHE6iV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zstdLSCQipW4ZDdYUa7FBi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q56Lt2jqviiliKNIlOKYBn
          claim_id: c_JyCuJy9x59CEujBq8NBP1S
          source_id: s_SywfDrJSArSubrJ5o5aosQ
          stance: supports
          locator: CBDB：兄弟 王汝楫（202580）之父／母 王寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝明 与 王汝楫 为同胞（CBDB 记「弟」），王汝楫 之父／母即 王汝明 之父／母。
          source:
            id: s_SywfDrJSArSubrJ5o5aosQ
            source_type: api_record
            title: 中国历代人物传记资料库：王汝明（CBDB 290262）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290262&o=json
            external_identifier: CBDB:290262
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zstdLSCQipW4ZDdYUa7FBi
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

# 王寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寧 | accepted |
| bio.summary | 王寧，明人物。嘉靖八年進士，籍贯德州。（中国历代人物传记资料库 CBDB 290256） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Td2fuKuEoYV2zfraAXswcd | 王汝楫 | accepted |
| children | p_1ueQH48Ni7qioRn4MKx7LM | 王汝礪 | accepted |
| children | p_HKDr4WqMxqe47AmDhxrfoZ | 王汝揆 | accepted |
| children | p_RkGCEEHr53n9knPvtwYcMx | 王汝舟 | accepted |
| children | p_SbwdTjQJ4U2AyWyjDGfSJT | 王汝欽 | accepted |
| children | p_aH4temuN1GwxFqxF8DG3DP | 王汝翼 | accepted |
| children | p_b3m7hRAK8FG8XFw2186M2U | 王汝咨 | accepted |
| children | p_bSgTQ1SdX3ywE4pyrdpy6w | 王汝為 | accepted |
| children | p_giUkdBkH6m6S6QkQAtjAM9 | 王汝甫 | accepted |
| children | p_pU9NzrAvexDBjksMgBLf2x | 王汝相 | accepted |
| children | p_q6hJ3G7h1X6AKMxTGrzWNz | 王汝器 | accepted |
| children | p_zstdLSCQipW4ZDdYUa7FBi | 王汝明 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寧（CBDB 290256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290256&o=json)
- [中国历代人物传记资料库：王汝甫（CBDB 290266）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290266&o=json)
- [中国历代人物传记资料库：王汝揆（CBDB 290269）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290269&o=json)
- [中国历代人物传记资料库：王汝礪（CBDB 290264）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290264&o=json)
- [中国历代人物传记资料库：王汝明（CBDB 290262）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290262&o=json)
- [中国历代人物传记资料库：王汝器（CBDB 290270）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290270&o=json)
- [中国历代人物传记资料库：王汝欽（CBDB 290265）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290265&o=json)
- [中国历代人物传记资料库：王汝為（CBDB 290261）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290261&o=json)
- [中国历代人物传记资料库：王汝相（CBDB 290271）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290271&o=json)
- [中国历代人物传记资料库：王汝翼（CBDB 290260）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290260&o=json)
- [中国历代人物传记资料库：王汝舟（CBDB 290267）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290267&o=json)
- [中国历代人物传记资料库：王汝咨（CBDB 290268）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290268&o=json)
