---
schema: wang-person/v1
id: p_pY4bR9vVd19RvXkc3AZrMW
status: active
merged_into: null
display_name: 王彥禎
cbdb_id: 322373
revision: 10
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XwGbrNtMstJBNsxs3h4KQr
        subject_person_id: p_pY4bR9vVd19RvXkc3AZrMW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥禎，明人物。宣德五年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 322373）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_0EC_wy3T3_C6T9CrncJvJZ
          claim_id: c_XwGbrNtMstJBNsxs3h4KQr
          source_id: s_MHooNQCMWPSvQ3eGj6iVuR
          stance: supports
          locator: CBDB:322373
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_MHooNQCMWPSvQ3eGj6iVuR
            source_type: api_record
            title: 中国历代人物传记资料库：王彥禎（CBDB 322373）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322373&o=json
            external_identifier: CBDB:322373
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_i5JfABXfm8ubViHUDjeJNe
        subject_person_id: p_pY4bR9vVd19RvXkc3AZrMW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥禎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5rcyev8eCqTMsN4YEN7dTg
          claim_id: c_i5JfABXfm8ubViHUDjeJNe
          source_id: s_MHooNQCMWPSvQ3eGj6iVuR
          stance: supports
          locator: CBDB:322373
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_wcxtNCbbAnu25MzAFaipSB
        subject_person_id: p_pY4bR9vVd19RvXkc3AZrMW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Lt4MQ464DWHGJk9hxD73Kf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vKSXoQ7wh-nJm6YTNrl1Z8
          claim_id: c_wcxtNCbbAnu25MzAFaipSB
          source_id: s_oD9gKDpPboW2xg9Jhpaik1
          stance: supports
          locator: 宣德五年進士登科錄:一卷，第二甲第三十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oD9gKDpPboW2xg9Jhpaik1
            source_type: api_record
            title: 中国历代人物传记资料库：王偡（CBDB 204670）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204670&o=json
            external_identifier: CBDB:204670
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.833Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Lt4MQ464DWHGJk9hxD73Kf
        status: active
        display_name: 王偡
        merged_into_person_id: null
    - claim:
        id: c_xHlhjMXjGCrCt8IJd0ic_n
        subject_person_id: p_pY4bR9vVd19RvXkc3AZrMW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4SG5zDfPfmk4FBCh2jAA8J
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wncX0FLarJ5bs0A_qGlqcd
          claim_id: c_xHlhjMXjGCrCt8IJd0ic_n
          source_id: s_MSRkDYCRb_BoZ7TPVirPQG
          stance: supports
          locator: CBDB：兄弟 王偡（204670）之父／母 王彥禎
          quotation: null
          interpretation_note: 由兄弟关系推断：王儔 与 王偡 为同胞（CBDB 记「弟」），王偡 之父／母即 王儔 之父／母。
          source:
            id: s_MSRkDYCRb_BoZ7TPVirPQG
            source_type: api_record
            title: 中国历代人物传记资料库：王儔（CBDB 322378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322378&o=json
            external_identifier: CBDB:322378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4SG5zDfPfmk4FBCh2jAA8J
        status: active
        display_name: 王儔
        merged_into_person_id: null
    - claim:
        id: c_H9jfTET7st1nyV-IpHn9m3
        subject_person_id: p_pY4bR9vVd19RvXkc3AZrMW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EAH2kvfcJQsDAwQJHRtAXR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f8B6JWRQGZIbVA99dDOQVk
          claim_id: c_H9jfTET7st1nyV-IpHn9m3
          source_id: s_kfW8iGJSU6Ct9jY3fc8Ot2
          stance: supports
          locator: CBDB：兄弟 王偡（204670）之父／母 王彥禎
          quotation: null
          interpretation_note: 由兄弟关系推断：王儀 与 王偡 为同胞（CBDB 记「兄」），王偡 之父／母即 王儀 之父／母。
          source:
            id: s_kfW8iGJSU6Ct9jY3fc8Ot2
            source_type: api_record
            title: 中国历代人物传记资料库：王儀（CBDB 322384）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322384&o=json
            external_identifier: CBDB:322384
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EAH2kvfcJQsDAwQJHRtAXR
        status: active
        display_name: 王儀
        merged_into_person_id: null
    - claim:
        id: c_hwYRTO6Khyfx5f2A_sVEay
        subject_person_id: p_pY4bR9vVd19RvXkc3AZrMW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_K9nYCrNfyLTRCWzjTJDwpi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b_irMx9CPwVhKEHZp7HNU2
          claim_id: c_hwYRTO6Khyfx5f2A_sVEay
          source_id: s_cN8cX_xMUEdQ5jFnbJOkFy
          stance: supports
          locator: CBDB：兄弟 王偡（204670）之父／母 王彥禎
          quotation: null
          interpretation_note: 由兄弟关系推断：王倣 与 王偡 为同胞（CBDB 记「弟」），王偡 之父／母即 王倣 之父／母。
          source:
            id: s_cN8cX_xMUEdQ5jFnbJOkFy
            source_type: api_record
            title: 中国历代人物传记资料库：王倣（CBDB 322379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322379&o=json
            external_identifier: CBDB:322379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_K9nYCrNfyLTRCWzjTJDwpi
        status: active
        display_name: 王倣
        merged_into_person_id: null
    - claim:
        id: c_Xx5QW0mJIRGVlNXY4pgSMs
        subject_person_id: p_pY4bR9vVd19RvXkc3AZrMW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LZJep9CZ8t7FDEXdKWWJ5d
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dHWvWD8nvgA1ZJBZpyMYic
          claim_id: c_Xx5QW0mJIRGVlNXY4pgSMs
          source_id: s_BkRYsfXEbl5wQOPQKk_O8s
          stance: supports
          locator: CBDB：兄弟 王偡（204670）之父／母 王彥禎
          quotation: null
          interpretation_note: 由兄弟关系推断：王儼 与 王偡 为同胞（CBDB 记「兄」），王偡 之父／母即 王儼 之父／母。
          source:
            id: s_BkRYsfXEbl5wQOPQKk_O8s
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 322380）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322380&o=json
            external_identifier: CBDB:322380
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LZJep9CZ8t7FDEXdKWWJ5d
        status: active
        display_name: 王儼
        merged_into_person_id: null
    - claim:
        id: c_nnn7FhwbGTrj8Ah3g9gNnQ
        subject_person_id: p_pY4bR9vVd19RvXkc3AZrMW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Tc8QNzAuGXa5y32t3B3zYJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0y9qRMWz6gVOl-mkhAoWVM
          claim_id: c_nnn7FhwbGTrj8Ah3g9gNnQ
          source_id: s_mqNAmk6H0vyJzpC0V0fNHw
          stance: supports
          locator: CBDB：兄弟 王偡（204670）之父／母 王彥禎
          quotation: null
          interpretation_note: 由兄弟关系推断：王偃 与 王偡 为同胞（CBDB 记「兄」），王偡 之父／母即 王偃 之父／母。
          source:
            id: s_mqNAmk6H0vyJzpC0V0fNHw
            source_type: api_record
            title: 中国历代人物传记资料库：王偃（CBDB 322386）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322386&o=json
            external_identifier: CBDB:322386
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Tc8QNzAuGXa5y32t3B3zYJ
        status: active
        display_name: 王偃
        merged_into_person_id: null
    - claim:
        id: c_WT97IUJYMNezNM2ym-UzBD
        subject_person_id: p_pY4bR9vVd19RvXkc3AZrMW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_chSBQQ7ZATo3cFML7RosLG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CI74bQSyAWKRf02a1lu6eR
          claim_id: c_WT97IUJYMNezNM2ym-UzBD
          source_id: s_YaOIBIPnFSSZFn8AYrSVQG
          stance: supports
          locator: CBDB：兄弟 王偡（204670）之父／母 王彥禎
          quotation: null
          interpretation_note: 由兄弟关系推断：王佐 与 王偡 为同胞（CBDB 记「兄」），王偡 之父／母即 王佐 之父／母。
          source:
            id: s_YaOIBIPnFSSZFn8AYrSVQG
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 322381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322381&o=json
            external_identifier: CBDB:322381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_chSBQQ7ZATo3cFML7RosLG
        status: active
        display_name: 王佐
        merged_into_person_id: null
    - claim:
        id: c_4kSqxFYZ7i6gNzbhfcMZQq
        subject_person_id: p_pY4bR9vVd19RvXkc3AZrMW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vfbf9MXf9BdNgzCFBVUaAp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uQIl288pplgo3zxAhckll-
          claim_id: c_4kSqxFYZ7i6gNzbhfcMZQq
          source_id: s_pZAvdfEgwMM3LnNAY6Z1Is
          stance: supports
          locator: CBDB：兄弟 王偡（204670）之父／母 王彥禎
          quotation: null
          interpretation_note: 由兄弟关系推断：王儉 与 王偡 为同胞（CBDB 记「兄」），王偡 之父／母即 王儉 之父／母。
          source:
            id: s_pZAvdfEgwMM3LnNAY6Z1Is
            source_type: api_record
            title: 中国历代人物传记资料库：王儉（CBDB 322383）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322383&o=json
            external_identifier: CBDB:322383
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vfbf9MXf9BdNgzCFBVUaAp
        status: active
        display_name: 王儉
        merged_into_person_id: null
    - claim:
        id: c_xU5rdrXzs2_0LiKbLi5mdl
        subject_person_id: p_pY4bR9vVd19RvXkc3AZrMW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yRJKVCAcaprLGzLsBDsGAb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FbLSySq36smeHHb5ubuUqJ
          claim_id: c_xU5rdrXzs2_0LiKbLi5mdl
          source_id: s_zJJaeIvHw9KmEjKu_0a9cD
          stance: supports
          locator: CBDB：兄弟 王偡（204670）之父／母 王彥禎
          quotation: null
          interpretation_note: 由兄弟关系推断：王僖 与 王偡 为同胞（CBDB 记「兄」），王偡 之父／母即 王僖 之父／母。
          source:
            id: s_zJJaeIvHw9KmEjKu_0a9cD
            source_type: api_record
            title: 中国历代人物传记资料库：王僖（CBDB 322382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322382&o=json
            external_identifier: CBDB:322382
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yRJKVCAcaprLGzLsBDsGAb
        status: active
        display_name: 王僖
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王彥禎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王彥禎，明人物。宣德五年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 322373） | accepted |
| name.primary | 王彥禎 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Lt4MQ464DWHGJk9hxD73Kf | 王偡 | accepted |
| children | p_4SG5zDfPfmk4FBCh2jAA8J | 王儔 | accepted |
| children | p_EAH2kvfcJQsDAwQJHRtAXR | 王儀 | accepted |
| children | p_K9nYCrNfyLTRCWzjTJDwpi | 王倣 | accepted |
| children | p_LZJep9CZ8t7FDEXdKWWJ5d | 王儼 | accepted |
| children | p_Tc8QNzAuGXa5y32t3B3zYJ | 王偃 | accepted |
| children | p_chSBQQ7ZATo3cFML7RosLG | 王佐 | accepted |
| children | p_vfbf9MXf9BdNgzCFBVUaAp | 王儉 | accepted |
| children | p_yRJKVCAcaprLGzLsBDsGAb | 王僖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王儔（CBDB 322378）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322378&o=json)
- [中国历代人物传记资料库：王倣（CBDB 322379）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322379&o=json)
- [中国历代人物传记资料库：王儉（CBDB 322383）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322383&o=json)
- [中国历代人物传记资料库：王僖（CBDB 322382）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322382&o=json)
- [中国历代人物传记资料库：王偃（CBDB 322386）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322386&o=json)
- [中国历代人物传记资料库：王儼（CBDB 322380）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322380&o=json)
- [中国历代人物传记资料库：王彥禎（CBDB 322373）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322373&o=json)
- [中国历代人物传记资料库：王儀（CBDB 322384）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322384&o=json)
- [中国历代人物传记资料库：王偡（CBDB 204670）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204670&o=json)
- [中国历代人物传记资料库：王佐（CBDB 322381）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322381&o=json)
