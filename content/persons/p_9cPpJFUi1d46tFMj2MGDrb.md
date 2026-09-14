---
schema: wang-person/v1
id: p_9cPpJFUi1d46tFMj2MGDrb
status: active
merged_into: null
display_name: 王煒
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_daPoAiiC29vr2sZCWZoAK7
        subject_person_id: p_9cPpJFUi1d46tFMj2MGDrb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6uJDyow6KiygQktQFCqVi6
          claim_id: c_daPoAiiC29vr2sZCWZoAK7
          source_id: s_oYEu5Xwri3kM83JFCb6pJB
          stance: supports
          locator: CBDB:202099
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202099）
          source: &a1
            id: s_oYEu5Xwri3kM83JFCb6pJB
            source_type: api_record
            title: 中国历代人物传记资料库：王煒（CBDB 202099）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202099&o=json
            external_identifier: CBDB:202099
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.719Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_q1SngmUKKxDt64KLPJvQSB
        subject_person_id: p_9cPpJFUi1d46tFMj2MGDrb
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1493年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xA8qnSNR1pfes4KF2v1sua
          claim_id: c_q1SngmUKKxDt64KLPJvQSB
          source_id: s_oYEu5Xwri3kM83JFCb6pJB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qRnHvtqSy4k3r2MzTZSVCu
        subject_person_id: p_9cPpJFUi1d46tFMj2MGDrb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煒（生于1493年），明人物。正德十六年進士，籍贯固安，入仕進士。（中国历代人物传记资料库 CBDB 202099）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3H8k7KQlCmbuZ_vuEAmm-L
          claim_id: c_qRnHvtqSy4k3r2MzTZSVCu
          source_id: s_oYEu5Xwri3kM83JFCb6pJB
          stance: supports
          locator: CBDB:202099
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_XhOeqjQW2bzOq594kVS_Tz
        subject_person_id: p_y9Be6wCSGkH3WJd1jLBiqu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9cPpJFUi1d46tFMj2MGDrb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ss9c8qPRalXsgtJPahtOpu
          claim_id: c_XhOeqjQW2bzOq594kVS_Tz
          source_id: s_oYEu5Xwri3kM83JFCb6pJB
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第四十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_y9Be6wCSGkH3WJd1jLBiqu
        status: active
        display_name: 王相
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Dg283v2Ykgs9PfcC3DSGqc
        subject_person_id: p_9cPpJFUi1d46tFMj2MGDrb
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_unYC3P7nT51T1KiAcUhLhX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SZljg3-zNCKTriQ0itTEtn
          claim_id: c_Dg283v2Ykgs9PfcC3DSGqc
          source_id: s_PHnKhCDGDHFNbkV-pb3Gef
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第四十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PHnKhCDGDHFNbkV-pb3Gef
            source_type: api_record
            title: 中国历代人物传记资料库：侯氏(王煒妻)（CBDB 283523）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283523&o=json
            external_identifier: CBDB:283523
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_unYC3P7nT51T1KiAcUhLhX
        status: active
        display_name: 侯氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_PZNxxUcKHheELIJm0u8jze
        subject_person_id: p_iXNKM9kyH3K89hV4G8Ptqa
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9cPpJFUi1d46tFMj2MGDrb
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K9X8MFEsDPy-XyYprd8TT6
          claim_id: c_PZNxxUcKHheELIJm0u8jze
          source_id: s_oYEu5Xwri3kM83JFCb6pJB
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第四十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iXNKM9kyH3K89hV4G8Ptqa
        status: active
        display_name: 王彥翔
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_USd4Ktqy6R-LRqBcOwVej2
        subject_person_id: p_6XZXmLH4628ri2XJWR19h7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_9cPpJFUi1d46tFMj2MGDrb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rvIIwVlfA7tnklZyUtACYc
          claim_id: c_USd4Ktqy6R-LRqBcOwVej2
          source_id: s_2c6P1z89rZhqS2m5XCFxq8
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202099 王煒）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2c6P1z89rZhqS2m5XCFxq8
            source_type: api_record
            title: 中国历代人物传记资料库：王燁（CBDB 283527）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283527&o=json
            external_identifier: CBDB:283527
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6XZXmLH4628ri2XJWR19h7
        status: active
        display_name: 王燁
        merged_into_person_id: null
    - claim:
        id: c_eHRLPABeiasKKjuq4pBk4y
        subject_person_id: p_7n4YRG43tWti51VHd8x868
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_9cPpJFUi1d46tFMj2MGDrb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hlpYJrulM6O8y6ZKmt-M4C
          claim_id: c_eHRLPABeiasKKjuq4pBk4y
          source_id: s__mmEBfwmmrLlE0sLsyOtsf
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202099 王煒）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__mmEBfwmmrLlE0sLsyOtsf
            source_type: api_record
            title: 中国历代人物传记资料库：王烔（CBDB 283528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283528&o=json
            external_identifier: CBDB:283528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7n4YRG43tWti51VHd8x868
        status: active
        display_name: 王烔
        merged_into_person_id: null
    - claim:
        id: c_PaL3yNfrwIaw1R70wS0E3_
        subject_person_id: p_8j61m5VUywF63L1HFebBUf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_9cPpJFUi1d46tFMj2MGDrb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G4zF6eP08Ayp5IDax2s7p6
          claim_id: c_PaL3yNfrwIaw1R70wS0E3_
          source_id: s_ceROc4MU1rcPbF2Qe5huJr
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202099 王煒）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ceROc4MU1rcPbF2Qe5huJr
            source_type: api_record
            title: 中国历代人物传记资料库：王默（CBDB 283525）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283525&o=json
            external_identifier: CBDB:283525
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8j61m5VUywF63L1HFebBUf
        status: active
        display_name: 王默
        merged_into_person_id: null
    - claim:
        id: c_jJ9fqG43raR3PIXo0JbBRG
        subject_person_id: p_9cPpJFUi1d46tFMj2MGDrb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_MpScH1rYDWeCwhVwD6aJ3o
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o8fZo5YgizwbrPnZMcSDss
          claim_id: c_jJ9fqG43raR3PIXo0JbBRG
          source_id: s_jP1SMLIeeMQTcChUY32YDz
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202099 王煒）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jP1SMLIeeMQTcChUY32YDz
            source_type: api_record
            title: 中国历代人物传记资料库：王炌（CBDB 283530）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283530&o=json
            external_identifier: CBDB:283530
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MpScH1rYDWeCwhVwD6aJ3o
        status: active
        display_name: 王炌
        merged_into_person_id: null
    - claim:
        id: c_NFEmPNVHNduDK0g-c6-MOI
        subject_person_id: p_9cPpJFUi1d46tFMj2MGDrb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_VQ7W3k5VTusjKABf6MbiZR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EF2xLS79h9PbB4GAO06cNa
          claim_id: c_NFEmPNVHNduDK0g-c6-MOI
          source_id: s_1NtnFQAc1_-9bZTD_bUv77
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202099 王煒）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1NtnFQAc1_-9bZTD_bUv77
            source_type: api_record
            title: 中国历代人物传记资料库：王煥（CBDB 283526）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283526&o=json
            external_identifier: CBDB:283526
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VQ7W3k5VTusjKABf6MbiZR
        status: active
        display_name: 王煥
        merged_into_person_id: null
    - claim:
        id: c_hN7SrREx9qZTdn1XtciNbx
        subject_person_id: p_9cPpJFUi1d46tFMj2MGDrb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cji6F9PbUximyCd6AfnmxF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YpTuVjrMGIti-a4QmRq_lQ
          claim_id: c_hN7SrREx9qZTdn1XtciNbx
          source_id: s_vXLVzNsWt3Zta7E34e4com
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202099 王煒）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vXLVzNsWt3Zta7E34e4com
            source_type: api_record
            title: 中国历代人物传记资料库：王炳（CBDB 283533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283533&o=json
            external_identifier: CBDB:283533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cji6F9PbUximyCd6AfnmxF
        status: active
        display_name: 王炳
        merged_into_person_id: null
    - claim:
        id: c_UUjXeEdw5rOiT527XmsERb
        subject_person_id: p_9cPpJFUi1d46tFMj2MGDrb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wEfNDmzctZrhDZ6zg1mBe3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ysGHH1FtusawagshbJ06op
          claim_id: c_UUjXeEdw5rOiT527XmsERb
          source_id: s_qYixjKJaB3iOQdb8FxAco1
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202099 王煒）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qYixjKJaB3iOQdb8FxAco1
            source_type: api_record
            title: 中国历代人物传记资料库：王熠（CBDB 283524）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283524&o=json
            external_identifier: CBDB:283524
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wEfNDmzctZrhDZ6zg1mBe3
        status: active
        display_name: 王熠
        merged_into_person_id: null
    - claim:
        id: c_T-OsCR4J-pu2-v84kIwttu
        subject_person_id: p_9cPpJFUi1d46tFMj2MGDrb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xcKo3zcN8Ca5EbrJ4pVs6G
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mNxsULDVlC0nD-57HBLU0b
          claim_id: c_T-OsCR4J-pu2-v84kIwttu
          source_id: s_Q7zEm1Uk08LDYx99YEzw1F
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202099 王煒）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Q7zEm1Uk08LDYx99YEzw1F
            source_type: api_record
            title: 中国历代人物传记资料库：王烜（CBDB 283529）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283529&o=json
            external_identifier: CBDB:283529
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xcKo3zcN8Ca5EbrJ4pVs6G
        status: active
        display_name: 王烜
        merged_into_person_id: null
---

# 王煒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王煒 | accepted |
| birth.date | 1493年 | accepted |
| bio.summary | 王煒（生于1493年），明人物。正德十六年進士，籍贯固安，入仕進士。（中国历代人物传记资料库 CBDB 202099） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_y9Be6wCSGkH3WJd1jLBiqu | 王相 | accepted |
| spouses | p_unYC3P7nT51T1KiAcUhLhX | 侯氏 | accepted |
| ancestors | p_iXNKM9kyH3K89hV4G8Ptqa | 王彥翔 | accepted |
| other | p_6XZXmLH4628ri2XJWR19h7 | 王燁 | accepted |
| other | p_7n4YRG43tWti51VHd8x868 | 王烔 | accepted |
| other | p_8j61m5VUywF63L1HFebBUf | 王默 | accepted |
| other | p_MpScH1rYDWeCwhVwD6aJ3o | 王炌 | accepted |
| other | p_VQ7W3k5VTusjKABf6MbiZR | 王煥 | accepted |
| other | p_cji6F9PbUximyCd6AfnmxF | 王炳 | accepted |
| other | p_wEfNDmzctZrhDZ6zg1mBe3 | 王熠 | accepted |
| other | p_xcKo3zcN8Ca5EbrJ4pVs6G | 王烜 | accepted |

## 外部来源

- [中国历代人物传记资料库：侯氏(王煒妻)（CBDB 283523）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283523&o=json)
- [中国历代人物传记资料库：王炳（CBDB 283533）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283533&o=json)
- [中国历代人物传记资料库：王煥（CBDB 283526）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283526&o=json)
- [中国历代人物传记资料库：王炌（CBDB 283530）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283530&o=json)
- [中国历代人物传记资料库：王默（CBDB 283525）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283525&o=json)
- [中国历代人物传记资料库：王烔（CBDB 283528）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283528&o=json)
- [中国历代人物传记资料库：王煒（CBDB 202099）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202099&o=json)
- [中国历代人物传记资料库：王烜（CBDB 283529）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283529&o=json)
- [中国历代人物传记资料库：王燁（CBDB 283527）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283527&o=json)
- [中国历代人物传记资料库：王熠（CBDB 283524）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283524&o=json)
