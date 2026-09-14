---
schema: wang-person/v1
id: p_229EQbFCA3PP8BNNQ1HMQL
status: active
merged_into: null
display_name: 王鎬
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D7er4evZGCvKyvUhkWurWB
        subject_person_id: p_229EQbFCA3PP8BNNQ1HMQL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_51bTDGxPkKgZHpgYFMKphi
          claim_id: c_D7er4evZGCvKyvUhkWurWB
          source_id: s_a9nhVp9EnwoF8N2xcY2o8R
          stance: supports
          locator: CBDB:284247
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（284247）
          source: &a1
            id: s_a9nhVp9EnwoF8N2xcY2o8R
            source_type: api_record
            title: 中国历代人物传记资料库：王鎬（CBDB 284247）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284247&o=json
            external_identifier: CBDB:284247
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.189Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6DB2hz4tmbB2CRQo3UD19s
        subject_person_id: p_229EQbFCA3PP8BNNQ1HMQL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎬，明人物。正德十六年進士，籍贯臨海，曾任知縣。（中国历代人物传记资料库 CBDB 284247）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_g92Ur8Ae5zYUTK4UlphYJ3
          claim_id: c_6DB2hz4tmbB2CRQo3UD19s
          source_id: s_a9nhVp9EnwoF8N2xcY2o8R
          stance: supports
          locator: CBDB:284247
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_vcDakHTOUNs_NtG3NKwMgG
        subject_person_id: p_229EQbFCA3PP8BNNQ1HMQL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ziFePMbdNLKAgyGGN4BwgX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IhGA8xNg7_vizoCXdNmNRn
          claim_id: c_vcDakHTOUNs_NtG3NKwMgG
          source_id: s_a9nhVp9EnwoF8N2xcY2o8R
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ziFePMbdNLKAgyGGN4BwgX
        status: active
        display_name: 王洙
        merged_into_person_id: null
    - claim:
        id: c_2iPUud25ZG7rnAsoZ1Y6aN
        subject_person_id: p_229EQbFCA3PP8BNNQ1HMQL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BjB45LHMpMdyCLtRMz28q6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5Mld2eTi6r7tXXD-xwWcqD
          claim_id: c_2iPUud25ZG7rnAsoZ1Y6aN
          source_id: s_WM2hdeBnewpH0xuBFWKo7-
          stance: supports
          locator: CBDB：兄弟 王洙（202146）之父／母 王鎬
          quotation: null
          interpretation_note: 由兄弟关系推断：王汲 与 王洙 为同胞（CBDB 记「弟」），王洙 之父／母即 王汲 之父／母。
          source:
            id: s_WM2hdeBnewpH0xuBFWKo7-
            source_type: api_record
            title: 中国历代人物传记资料库：王汲（CBDB 284256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284256&o=json
            external_identifier: CBDB:284256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BjB45LHMpMdyCLtRMz28q6
        status: active
        display_name: 王汲
        merged_into_person_id: null
    - claim:
        id: c__wJB9Jnw0soFfWE-eL9V_t
        subject_person_id: p_229EQbFCA3PP8BNNQ1HMQL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GR4D45ak4bpBPpSqZCzPSe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WU7lElwi3jKjQzycOnI3Eg
          claim_id: c__wJB9Jnw0soFfWE-eL9V_t
          source_id: s_hpe5C7-qQp9BphAkYwg5jJ
          stance: supports
          locator: CBDB：兄弟 王洙（202146）之父／母 王鎬
          quotation: null
          interpretation_note: 由兄弟关系推断：王汴 与 王洙 为同胞（CBDB 记「弟」），王洙 之父／母即 王汴 之父／母。
          source:
            id: s_hpe5C7-qQp9BphAkYwg5jJ
            source_type: api_record
            title: 中国历代人物传记资料库：王汴（CBDB 284254）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284254&o=json
            external_identifier: CBDB:284254
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GR4D45ak4bpBPpSqZCzPSe
        status: active
        display_name: 王汴
        merged_into_person_id: null
    - claim:
        id: c_MaORADKMotIbTHcOu7e1ia
        subject_person_id: p_229EQbFCA3PP8BNNQ1HMQL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HsXZiVC5cACnAa2snywDdb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mT13dKtbOlfTgE3PfyD3pE
          claim_id: c_MaORADKMotIbTHcOu7e1ia
          source_id: s_fi2DXOpYoL8CKchIA3j92P
          stance: supports
          locator: CBDB：兄弟 王洙（202146）之父／母 王鎬
          quotation: null
          interpretation_note: 由兄弟关系推断：王泌 与 王洙 为同胞（CBDB 记「弟」），王洙 之父／母即 王泌 之父／母。
          source:
            id: s_fi2DXOpYoL8CKchIA3j92P
            source_type: api_record
            title: 中国历代人物传记资料库：王泌（CBDB 284250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284250&o=json
            external_identifier: CBDB:284250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HsXZiVC5cACnAa2snywDdb
        status: active
        display_name: 王泌
        merged_into_person_id: null
    - claim:
        id: c_TrWIy9hS3pOVhfiSSM3MJs
        subject_person_id: p_229EQbFCA3PP8BNNQ1HMQL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NLVSsqFEALrqsyQdea698j
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K1h8zbBCQwGsriQ_hvCCPx
          claim_id: c_TrWIy9hS3pOVhfiSSM3MJs
          source_id: s_wd-3FPlbFgodvqnwB-Vgb5
          stance: supports
          locator: CBDB：兄弟 王洙（202146）之父／母 王鎬
          quotation: null
          interpretation_note: 由兄弟关系推断：王匯 与 王洙 为同胞（CBDB 记「弟」），王洙 之父／母即 王匯 之父／母。
          source:
            id: s_wd-3FPlbFgodvqnwB-Vgb5
            source_type: api_record
            title: 中国历代人物传记资料库：王匯（CBDB 284253）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284253&o=json
            external_identifier: CBDB:284253
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NLVSsqFEALrqsyQdea698j
        status: active
        display_name: 王匯
        merged_into_person_id: null
    - claim:
        id: c_l_t1BO7LYFWEGbKJF7flQ3
        subject_person_id: p_229EQbFCA3PP8BNNQ1HMQL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Wb6uKtiEP6ePo6mtvwb7P8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9A0OLJHFVQ4iLTv4DEEXK7
          claim_id: c_l_t1BO7LYFWEGbKJF7flQ3
          source_id: s_hJmBBccfr-_kvvYAtj4vKm
          stance: supports
          locator: CBDB：兄弟 王洙（202146）之父／母 王鎬
          quotation: null
          interpretation_note: 由兄弟关系推断：王淑 与 王洙 为同胞（CBDB 记「弟」），王洙 之父／母即 王淑 之父／母。
          source:
            id: s_hJmBBccfr-_kvvYAtj4vKm
            source_type: api_record
            title: 中国历代人物传记资料库：王淑（CBDB 284257）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284257&o=json
            external_identifier: CBDB:284257
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Wb6uKtiEP6ePo6mtvwb7P8
        status: active
        display_name: 王淑
        merged_into_person_id: null
    - claim:
        id: c_Ac9z1eW3QG3Y0AccqA4JQb
        subject_person_id: p_229EQbFCA3PP8BNNQ1HMQL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jrykkmzrQXq266DY21HkgQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_597_TBNhcTZarIoY-HHRDy
          claim_id: c_Ac9z1eW3QG3Y0AccqA4JQb
          source_id: s_A5P0yfuOrecrPkphDhZ-6r
          stance: supports
          locator: CBDB：兄弟 王洙（202146）之父／母 王鎬
          quotation: null
          interpretation_note: 由兄弟关系推断：王灌 与 王洙 为同胞（CBDB 记「弟」），王洙 之父／母即 王灌 之父／母。
          source:
            id: s_A5P0yfuOrecrPkphDhZ-6r
            source_type: api_record
            title: 中国历代人物传记资料库：王灌（CBDB 284252）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284252&o=json
            external_identifier: CBDB:284252
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jrykkmzrQXq266DY21HkgQ
        status: active
        display_name: 王灌
        merged_into_person_id: null
    - claim:
        id: c__j8BIjYzTLkBiRlA4ptqUT
        subject_person_id: p_229EQbFCA3PP8BNNQ1HMQL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xQGD9wzEMAZCH7mBvFtR3r
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R0I2-hAcXHWdoloGVhnT5Y
          claim_id: c__j8BIjYzTLkBiRlA4ptqUT
          source_id: s_cI17UApEhYci_952pCIzbI
          stance: supports
          locator: CBDB：兄弟 王洙（202146）之父／母 王鎬
          quotation: null
          interpretation_note: 由兄弟关系推断：王漙 与 王洙 为同胞（CBDB 记「弟」），王洙 之父／母即 王漙 之父／母。
          source:
            id: s_cI17UApEhYci_952pCIzbI
            source_type: api_record
            title: 中国历代人物传记资料库：王漙（CBDB 284251）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284251&o=json
            external_identifier: CBDB:284251
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xQGD9wzEMAZCH7mBvFtR3r
        status: active
        display_name: 王漙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鎬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎬 | accepted |
| bio.summary | 王鎬，明人物。正德十六年進士，籍贯臨海，曾任知縣。（中国历代人物传记资料库 CBDB 284247） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ziFePMbdNLKAgyGGN4BwgX | 王洙 | accepted |
| children | p_BjB45LHMpMdyCLtRMz28q6 | 王汲 | accepted |
| children | p_GR4D45ak4bpBPpSqZCzPSe | 王汴 | accepted |
| children | p_HsXZiVC5cACnAa2snywDdb | 王泌 | accepted |
| children | p_NLVSsqFEALrqsyQdea698j | 王匯 | accepted |
| children | p_Wb6uKtiEP6ePo6mtvwb7P8 | 王淑 | accepted |
| children | p_jrykkmzrQXq266DY21HkgQ | 王灌 | accepted |
| children | p_xQGD9wzEMAZCH7mBvFtR3r | 王漙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汴（CBDB 284254）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284254&o=json)
- [中国历代人物传记资料库：王灌（CBDB 284252）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284252&o=json)
- [中国历代人物传记资料库：王鎬（CBDB 284247）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284247&o=json)
- [中国历代人物传记资料库：王匯（CBDB 284253）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284253&o=json)
- [中国历代人物传记资料库：王汲（CBDB 284256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284256&o=json)
- [中国历代人物传记资料库：王泌（CBDB 284250）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284250&o=json)
- [中国历代人物传记资料库：王淑（CBDB 284257）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284257&o=json)
- [中国历代人物传记资料库：王漙（CBDB 284251）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284251&o=json)
