---
schema: wang-person/v1
id: p_rFTZAq6ze35imaHPVmA96A
status: active
merged_into: null
display_name: 王公權
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G5zxvFkBh7vyPJ2xsQb4iH
        subject_person_id: p_rFTZAq6ze35imaHPVmA96A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公權
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_x9Hg8n4R8QJUnH2HzVbkGy
          claim_id: c_G5zxvFkBh7vyPJ2xsQb4iH
          source_id: s_CgQjH5usLzWG6PYYEhW3kd
          stance: supports
          locator: CBDB:260517
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260517）
          source: &a1
            id: s_CgQjH5usLzWG6PYYEhW3kd
            source_type: api_record
            title: 中国历代人物传记资料库：王公權（CBDB 260517）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260517&o=json
            external_identifier: CBDB:260517
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.513Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4eTZd56bYLMBpqyjdDFMvz
        subject_person_id: p_rFTZAq6ze35imaHPVmA96A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公權，明人物。成化二十三年進士，籍贯天台，曾任教諭。（中国历代人物传记资料库 CBDB 260517）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_it9WWnaJ3o5b0FvKUWc8uJ
          claim_id: c_4eTZd56bYLMBpqyjdDFMvz
          source_id: s_CgQjH5usLzWG6PYYEhW3kd
          stance: supports
          locator: CBDB:260517
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_XnlXLs-camTy2pNaKJ2kS7
        subject_person_id: p_rFTZAq6ze35imaHPVmA96A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uxPkZUqsvSYKoUuB2wuXGH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XNAp6wmi_WQ6mJGulNyDta
          claim_id: c_XnlXLs-camTy2pNaKJ2kS7
          source_id: s_CgQjH5usLzWG6PYYEhW3kd
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百九十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uxPkZUqsvSYKoUuB2wuXGH
        status: active
        display_name: 王鐶
        merged_into_person_id: null
    - claim:
        id: c_Z7fbkULcVOfjhqlOh_HEFK
        subject_person_id: p_rFTZAq6ze35imaHPVmA96A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DrVjJr8V24bHx5gdjc9WRq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nAypLXAbmwl0ewboW4NC_p
          claim_id: c_Z7fbkULcVOfjhqlOh_HEFK
          source_id: s_g83OanfYUFSKQOOYzOmhfj
          stance: supports
          locator: CBDB：兄弟 王鐶（200621）之父／母 王公權
          quotation: null
          interpretation_note: 由兄弟关系推断：王錄 与 王鐶 为同胞（CBDB 记「兄」），王鐶 之父／母即 王錄 之父／母。
          source:
            id: s_g83OanfYUFSKQOOYzOmhfj
            source_type: api_record
            title: 中国历代人物传记资料库：王錄（CBDB 260528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260528&o=json
            external_identifier: CBDB:260528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DrVjJr8V24bHx5gdjc9WRq
        status: active
        display_name: 王錄
        merged_into_person_id: null
    - claim:
        id: c_N7pvCd33doEOMUNc8qXhdn
        subject_person_id: p_rFTZAq6ze35imaHPVmA96A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HFy6Mt2PnTfMzffEKYcbAN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QnXc7c3NIcTu7LaKuQ_up3
          claim_id: c_N7pvCd33doEOMUNc8qXhdn
          source_id: s_kVFPzSSm56pKjkuqJTMkv4
          stance: supports
          locator: CBDB：兄弟 王鐶（200621）之父／母 王公權
          quotation: null
          interpretation_note: 由兄弟关系推断：王鑑 与 王鐶 为同胞（CBDB 记「弟」），王鐶 之父／母即 王鑑 之父／母。
          source:
            id: s_kVFPzSSm56pKjkuqJTMkv4
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 260524）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260524&o=json
            external_identifier: CBDB:260524
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HFy6Mt2PnTfMzffEKYcbAN
        status: active
        display_name: 王鑑
        merged_into_person_id: null
    - claim:
        id: c_BcEmfuk9vffkhyaFyTXLqh
        subject_person_id: p_rFTZAq6ze35imaHPVmA96A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JCg7FxCWnu6HgyGJw6tThG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fnQLreoy_cwscoe10ALMcc
          claim_id: c_BcEmfuk9vffkhyaFyTXLqh
          source_id: s_az4M3myKF6Xp7uSKM-vQQk
          stance: supports
          locator: CBDB：兄弟 王鐶（200621）之父／母 王公權
          quotation: null
          interpretation_note: 由兄弟关系推断：王鑾 与 王鐶 为同胞（CBDB 记「弟」），王鐶 之父／母即 王鑾 之父／母。
          source:
            id: s_az4M3myKF6Xp7uSKM-vQQk
            source_type: api_record
            title: 中国历代人物传记资料库：王鑾（CBDB 260521）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260521&o=json
            external_identifier: CBDB:260521
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JCg7FxCWnu6HgyGJw6tThG
        status: active
        display_name: 王鑾
        merged_into_person_id: null
    - claim:
        id: c_ZOCinXrEHpp8V_iTbg534Z
        subject_person_id: p_rFTZAq6ze35imaHPVmA96A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PH4AcudypEqGoNfftUAAsH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g1tQoDuD3EertUI9dEViBJ
          claim_id: c_ZOCinXrEHpp8V_iTbg534Z
          source_id: s_wO92IkRdeynMMiFiXFflDz
          stance: supports
          locator: CBDB：兄弟 王鐶（200621）之父／母 王公權
          quotation: null
          interpretation_note: 由兄弟关系推断：王鐸 与 王鐶 为同胞（CBDB 记「弟」），王鐶 之父／母即 王鐸 之父／母。
          source:
            id: s_wO92IkRdeynMMiFiXFflDz
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 260523）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260523&o=json
            external_identifier: CBDB:260523
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PH4AcudypEqGoNfftUAAsH
        status: active
        display_name: 王鐸
        merged_into_person_id: null
    - claim:
        id: c_2YB2mMBNjIQgaEA8dmrHF7
        subject_person_id: p_rFTZAq6ze35imaHPVmA96A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XH3iLdDfjN4Sa3ep2zHA6A
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bNEQSSPopbe2AuiLEtfYst
          claim_id: c_2YB2mMBNjIQgaEA8dmrHF7
          source_id: s_D4h4a8Y1-BsZWRL77SLnNo
          stance: supports
          locator: CBDB：兄弟 王鐶（200621）之父／母 王公權
          quotation: null
          interpretation_note: 由兄弟关系推断：王釬 与 王鐶 为同胞（CBDB 记「兄」），王鐶 之父／母即 王釬 之父／母。
          source:
            id: s_D4h4a8Y1-BsZWRL77SLnNo
            source_type: api_record
            title: 中国历代人物传记资料库：王釬（CBDB 260527）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260527&o=json
            external_identifier: CBDB:260527
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XH3iLdDfjN4Sa3ep2zHA6A
        status: active
        display_name: 王釬
        merged_into_person_id: null
    - claim:
        id: c_5AszJDUR2fFYVOTJLC_aN2
        subject_person_id: p_rFTZAq6ze35imaHPVmA96A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ruQCRd1o12ag13C6VKMCVP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gh0WMZueWvWi_5UoOobouR
          claim_id: c_5AszJDUR2fFYVOTJLC_aN2
          source_id: s_V2pn6pDd3KyFTjvdq1ens0
          stance: supports
          locator: CBDB：兄弟 王鐶（200621）之父／母 王公權
          quotation: null
          interpretation_note: 由兄弟关系推断：王錚 与 王鐶 为同胞（CBDB 记「弟」），王鐶 之父／母即 王錚 之父／母。
          source:
            id: s_V2pn6pDd3KyFTjvdq1ens0
            source_type: api_record
            title: 中国历代人物传记资料库：王錚（CBDB 260522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260522&o=json
            external_identifier: CBDB:260522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ruQCRd1o12ag13C6VKMCVP
        status: active
        display_name: 王錚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王公權

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王公權 | accepted |
| bio.summary | 王公權，明人物。成化二十三年進士，籍贯天台，曾任教諭。（中国历代人物传记资料库 CBDB 260517） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_uxPkZUqsvSYKoUuB2wuXGH | 王鐶 | accepted |
| children | p_DrVjJr8V24bHx5gdjc9WRq | 王錄 | accepted |
| children | p_HFy6Mt2PnTfMzffEKYcbAN | 王鑑 | accepted |
| children | p_JCg7FxCWnu6HgyGJw6tThG | 王鑾 | accepted |
| children | p_PH4AcudypEqGoNfftUAAsH | 王鐸 | accepted |
| children | p_XH3iLdDfjN4Sa3ep2zHA6A | 王釬 | accepted |
| children | p_ruQCRd1o12ag13C6VKMCVP | 王錚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鐸（CBDB 260523）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260523&o=json)
- [中国历代人物传记资料库：王公權（CBDB 260517）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260517&o=json)
- [中国历代人物传记资料库：王釬（CBDB 260527）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260527&o=json)
- [中国历代人物传记资料库：王鑑（CBDB 260524）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260524&o=json)
- [中国历代人物传记资料库：王錄（CBDB 260528）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260528&o=json)
- [中国历代人物传记资料库：王鑾（CBDB 260521）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260521&o=json)
- [中国历代人物传记资料库：王錚（CBDB 260522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260522&o=json)
