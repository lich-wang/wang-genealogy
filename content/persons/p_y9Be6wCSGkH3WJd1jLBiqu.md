---
schema: wang-person/v1
id: p_y9Be6wCSGkH3WJd1jLBiqu
status: active
merged_into: null
display_name: 王相
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eF6A4PH18hvDjMKbi9HcWG
        subject_person_id: p_y9Be6wCSGkH3WJd1jLBiqu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GMRn5C2ojjDh3RZaUtMmvs
          claim_id: c_eF6A4PH18hvDjMKbi9HcWG
          source_id: s_DZxEYHuf2yj5mmqBWaWCDr
          stance: supports
          locator: CBDB:283521
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283521）
          source: &a1
            id: s_DZxEYHuf2yj5mmqBWaWCDr
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 283521）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283521&o=json
            external_identifier: CBDB:283521
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.139Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qrJiif3nVoGLWJJg9STo8e
        subject_person_id: p_y9Be6wCSGkH3WJd1jLBiqu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王相，明人物。正德十六年進士，籍贯固安。（中国历代人物传记资料库 CBDB 283521）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IsktbRq2-KZyvfzqFRXHmB
          claim_id: c_qrJiif3nVoGLWJJg9STo8e
          source_id: s_DZxEYHuf2yj5mmqBWaWCDr
          stance: supports
          locator: CBDB:283521
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source:
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
      object_person:
        id: p_9cPpJFUi1d46tFMj2MGDrb
        status: active
        display_name: 王煒
        merged_into_person_id: null
    - claim:
        id: c_IvoxGmLZbEUt63NLjW0x7c
        subject_person_id: p_y9Be6wCSGkH3WJd1jLBiqu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6XZXmLH4628ri2XJWR19h7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pt0XU4bcF4zObLVk3Zr5T3
          claim_id: c_IvoxGmLZbEUt63NLjW0x7c
          source_id: s_2c6P1z89rZhqS2m5XCFxq8
          stance: supports
          locator: CBDB：兄弟 王煒（202099）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王燁 与 王煒 为同胞（CBDB 记「弟」），王煒 之父／母即 王燁 之父／母。
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
        id: c_W71n87JgjOgMYlWBZ23fFd
        subject_person_id: p_y9Be6wCSGkH3WJd1jLBiqu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7n4YRG43tWti51VHd8x868
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c-iA1XtHAZrTpFViVmqTpn
          claim_id: c_W71n87JgjOgMYlWBZ23fFd
          source_id: s__mmEBfwmmrLlE0sLsyOtsf
          stance: supports
          locator: CBDB：兄弟 王煒（202099）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王烔 与 王煒 为同胞（CBDB 记「兄」），王煒 之父／母即 王烔 之父／母。
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
        id: c_DCONrbpytxAxfKgCbppU9o
        subject_person_id: p_y9Be6wCSGkH3WJd1jLBiqu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8j61m5VUywF63L1HFebBUf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kCjrbNoLRXN_Vj3v8zfxrL
          claim_id: c_DCONrbpytxAxfKgCbppU9o
          source_id: s_ceROc4MU1rcPbF2Qe5huJr
          stance: supports
          locator: CBDB：兄弟 王煒（202099）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王默 与 王煒 为同胞（CBDB 记「弟」），王煒 之父／母即 王默 之父／母。
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
        id: c_ki5_wzWc5Iz80JQxgwESdx
        subject_person_id: p_y9Be6wCSGkH3WJd1jLBiqu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MpScH1rYDWeCwhVwD6aJ3o
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MQzN6z6pOvjO7EiPdX2prC
          claim_id: c_ki5_wzWc5Iz80JQxgwESdx
          source_id: s_jP1SMLIeeMQTcChUY32YDz
          stance: supports
          locator: CBDB：兄弟 王煒（202099）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王炌 与 王煒 为同胞（CBDB 记「兄」），王煒 之父／母即 王炌 之父／母。
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
        id: c_W48MyaA2PboSiP8PIHz8fC
        subject_person_id: p_y9Be6wCSGkH3WJd1jLBiqu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VQ7W3k5VTusjKABf6MbiZR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dglApEl6bbMAEFCA6mD9ZQ
          claim_id: c_W48MyaA2PboSiP8PIHz8fC
          source_id: s_1NtnFQAc1_-9bZTD_bUv77
          stance: supports
          locator: CBDB：兄弟 王煒（202099）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王煥 与 王煒 为同胞（CBDB 记「弟」），王煒 之父／母即 王煥 之父／母。
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
        id: c_I-pvM1h9xIW9x9_sU7uYs3
        subject_person_id: p_y9Be6wCSGkH3WJd1jLBiqu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cji6F9PbUximyCd6AfnmxF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fxn6jpn_4IeGcQhbZpdewS
          claim_id: c_I-pvM1h9xIW9x9_sU7uYs3
          source_id: s_vXLVzNsWt3Zta7E34e4com
          stance: supports
          locator: CBDB：兄弟 王煒（202099）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王炳 与 王煒 为同胞（CBDB 记「兄」），王煒 之父／母即 王炳 之父／母。
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
        id: c_7Pw4JE9w4zCLtCj2YO2tzc
        subject_person_id: p_y9Be6wCSGkH3WJd1jLBiqu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wEfNDmzctZrhDZ6zg1mBe3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mIvHpZWxz7S9eM15TFtDVN
          claim_id: c_7Pw4JE9w4zCLtCj2YO2tzc
          source_id: s_qYixjKJaB3iOQdb8FxAco1
          stance: supports
          locator: CBDB：兄弟 王煒（202099）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王熠 与 王煒 为同胞（CBDB 记「弟」），王煒 之父／母即 王熠 之父／母。
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
        id: c_97R12IZGuPPfdVH4vhKGQP
        subject_person_id: p_y9Be6wCSGkH3WJd1jLBiqu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xcKo3zcN8Ca5EbrJ4pVs6G
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9iUQ2_pLQJnm9uad2ySvO7
          claim_id: c_97R12IZGuPPfdVH4vhKGQP
          source_id: s_Q7zEm1Uk08LDYx99YEzw1F
          stance: supports
          locator: CBDB：兄弟 王煒（202099）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王烜 与 王煒 为同胞（CBDB 记「兄」），王煒 之父／母即 王烜 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王相 | accepted |
| bio.summary | 王相，明人物。正德十六年進士，籍贯固安。（中国历代人物传记资料库 CBDB 283521） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_9cPpJFUi1d46tFMj2MGDrb | 王煒 | accepted |
| children | p_6XZXmLH4628ri2XJWR19h7 | 王燁 | accepted |
| children | p_7n4YRG43tWti51VHd8x868 | 王烔 | accepted |
| children | p_8j61m5VUywF63L1HFebBUf | 王默 | accepted |
| children | p_MpScH1rYDWeCwhVwD6aJ3o | 王炌 | accepted |
| children | p_VQ7W3k5VTusjKABf6MbiZR | 王煥 | accepted |
| children | p_cji6F9PbUximyCd6AfnmxF | 王炳 | accepted |
| children | p_wEfNDmzctZrhDZ6zg1mBe3 | 王熠 | accepted |
| children | p_xcKo3zcN8Ca5EbrJ4pVs6G | 王烜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王炳（CBDB 283533）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283533&o=json)
- [中国历代人物传记资料库：王煥（CBDB 283526）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283526&o=json)
- [中国历代人物传记资料库：王炌（CBDB 283530）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283530&o=json)
- [中国历代人物传记资料库：王默（CBDB 283525）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283525&o=json)
- [中国历代人物传记资料库：王烔（CBDB 283528）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283528&o=json)
- [中国历代人物传记资料库：王煒（CBDB 202099）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202099&o=json)
- [中国历代人物传记资料库：王相（CBDB 283521）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283521&o=json)
- [中国历代人物传记资料库：王烜（CBDB 283529）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283529&o=json)
- [中国历代人物传记资料库：王燁（CBDB 283527）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283527&o=json)
- [中国历代人物传记资料库：王熠（CBDB 283524）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283524&o=json)
