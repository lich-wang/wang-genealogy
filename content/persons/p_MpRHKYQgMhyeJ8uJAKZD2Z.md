---
schema: wang-person/v1
id: p_MpRHKYQgMhyeJ8uJAKZD2Z
status: active
merged_into: null
display_name: 王榮貴
cbdb_id: 221573
revision: 10
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nzBNfSNbTeRK3bQTkD6hUc
        subject_person_id: p_MpRHKYQgMhyeJ8uJAKZD2Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮貴，明人物。萬曆八年進士，籍贯龍溪。（中国历代人物传记资料库 CBDB 221573）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_fs0ZEklrZ1MaPjyeIrDr0R
          claim_id: c_nzBNfSNbTeRK3bQTkD6hUc
          source_id: s_B4nFLqoT8yYgZs6KPb26Ey
          stance: supports
          locator: CBDB:221573
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_B4nFLqoT8yYgZs6KPb26Ey
            source_type: api_record
            title: 中国历代人物传记资料库：王榮貴（CBDB 221573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221573&o=json
            external_identifier: CBDB:221573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nArLBEgdDNHJ1Eu58wi65A
        subject_person_id: p_MpRHKYQgMhyeJ8uJAKZD2Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮貴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_J3xwZxVVh162KYHj3Pdqmy
          claim_id: c_nArLBEgdDNHJ1Eu58wi65A
          source_id: s_B4nFLqoT8yYgZs6KPb26Ey
          stance: supports
          locator: CBDB:221573
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_OLEqWglKs3uqEz2QdivYXW
        subject_person_id: p_MpRHKYQgMhyeJ8uJAKZD2Z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hnvFbFQMD3qoDJL59kCJv1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YmLQFt9Hy_cWZ0KRiM0r6u
          claim_id: c_OLEqWglKs3uqEz2QdivYXW
          source_id: s_USNXCoUtmKiaD7MqB2q9Qs
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_USNXCoUtmKiaD7MqB2q9Qs
            source_type: api_record
            title: 中国历代人物传记资料库：王應麟（CBDB 126851）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126851&o=json
            external_identifier: CBDB:126851
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.260Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hnvFbFQMD3qoDJL59kCJv1
        status: active
        display_name: 王應麟
        merged_into_person_id: null
    - claim:
        id: c_E4DZMgsiYnT5TUAhmfLCSm
        subject_person_id: p_MpRHKYQgMhyeJ8uJAKZD2Z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GByKTcLKi5FHpF19ChqCGj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kxq9-iPV0eSrjrB5MwPGxp
          claim_id: c_E4DZMgsiYnT5TUAhmfLCSm
          source_id: s_a0EPkzIP_DuvYe11FkVKVd
          stance: supports
          locator: CBDB：兄弟 王應麟（126851）之父／母 王榮貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王學孝 与 王應麟 为同胞（CBDB 记「弟」），王應麟 之父／母即 王學孝 之父／母。
          source:
            id: s_a0EPkzIP_DuvYe11FkVKVd
            source_type: api_record
            title: 中国历代人物传记资料库：王學孝（CBDB 221576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221576&o=json
            external_identifier: CBDB:221576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GByKTcLKi5FHpF19ChqCGj
        status: active
        display_name: 王學孝
        merged_into_person_id: null
    - claim:
        id: c_P8IVEez1rG1wIwrhAHxfs7
        subject_person_id: p_MpRHKYQgMhyeJ8uJAKZD2Z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_M1PFNJsfKadpAQXffxK3F9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tBInOq59DSb9tw-XhBCSLW
          claim_id: c_P8IVEez1rG1wIwrhAHxfs7
          source_id: s_cIKoDQGQESOxBDlJx1b7dR
          stance: supports
          locator: CBDB：兄弟 王應麟（126851）之父／母 王榮貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王應中 与 王應麟 为同胞（CBDB 记「弟」），王應麟 之父／母即 王應中 之父／母。
          source:
            id: s_cIKoDQGQESOxBDlJx1b7dR
            source_type: api_record
            title: 中国历代人物传记资料库：王應中（CBDB 221577）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221577&o=json
            external_identifier: CBDB:221577
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_M1PFNJsfKadpAQXffxK3F9
        status: active
        display_name: 王應中
        merged_into_person_id: null
    - claim:
        id: c_A0NN7Sg0o0W51FaES0NXcq
        subject_person_id: p_MpRHKYQgMhyeJ8uJAKZD2Z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VDBFAYpqqVNNp9HxYex1aB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R-sakaCROwN64PhUl8wYi5
          claim_id: c_A0NN7Sg0o0W51FaES0NXcq
          source_id: s_Wgp-IaF1f12yOl-Dt31VES
          stance: supports
          locator: CBDB：兄弟 王應麟（126851）之父／母 王榮貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王應薦 与 王應麟 为同胞（CBDB 记「兄」），王應麟 之父／母即 王應薦 之父／母。
          source:
            id: s_Wgp-IaF1f12yOl-Dt31VES
            source_type: api_record
            title: 中国历代人物传记资料库：王應薦（CBDB 221581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221581&o=json
            external_identifier: CBDB:221581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VDBFAYpqqVNNp9HxYex1aB
        status: active
        display_name: 王應薦
        merged_into_person_id: null
    - claim:
        id: c_jYMt1bZknZAM8hemJ0PCmQ
        subject_person_id: p_MpRHKYQgMhyeJ8uJAKZD2Z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XzgidddQvWK1wNQtCDyJ69
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jevt9FKvTm7YYJTePZnTl4
          claim_id: c_jYMt1bZknZAM8hemJ0PCmQ
          source_id: s_POrFTlk5u8EPN4gNmBfnRU
          stance: supports
          locator: CBDB：兄弟 王應麟（126851）之父／母 王榮貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王應賓 与 王應麟 为同胞（CBDB 记「兄」），王應麟 之父／母即 王應賓 之父／母。
          source:
            id: s_POrFTlk5u8EPN4gNmBfnRU
            source_type: api_record
            title: 中国历代人物传记资料库：王應賓（CBDB 221580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221580&o=json
            external_identifier: CBDB:221580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XzgidddQvWK1wNQtCDyJ69
        status: active
        display_name: 王應賓
        merged_into_person_id: null
    - claim:
        id: c_2HNOSdtpeaUKW9ona4Dd5s
        subject_person_id: p_MpRHKYQgMhyeJ8uJAKZD2Z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_f8cdeyyhqojaX8KjkiWgNJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YMFfxd-RJKrNxZRGcRAb9y
          claim_id: c_2HNOSdtpeaUKW9ona4Dd5s
          source_id: s_dGAmJvhGMnLBKMyY9q8FMs
          stance: supports
          locator: CBDB：兄弟 王應麟（126851）之父／母 王榮貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王應鵬 与 王應麟 为同胞（CBDB 记「兄」），王應麟 之父／母即 王應鵬 之父／母。
          source:
            id: s_dGAmJvhGMnLBKMyY9q8FMs
            source_type: api_record
            title: 中国历代人物传记资料库：王應鵬（CBDB 221582）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221582&o=json
            external_identifier: CBDB:221582
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_f8cdeyyhqojaX8KjkiWgNJ
        status: active
        display_name: 王應鵬
        merged_into_person_id: null
    - claim:
        id: c_DzbHyQhjSxalssHDk5GCHL
        subject_person_id: p_MpRHKYQgMhyeJ8uJAKZD2Z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sgqXBKDaEtRzyPGQeE3NpG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1Xfgsn0I9-SSISEpKHPnzW
          claim_id: c_DzbHyQhjSxalssHDk5GCHL
          source_id: s_C5HWilHm5vIk3U4NNaYTFm
          stance: supports
          locator: CBDB：兄弟 王應麟（126851）之父／母 王榮貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王應命 与 王應麟 为同胞（CBDB 记「兄」），王應麟 之父／母即 王應命 之父／母。
          source:
            id: s_C5HWilHm5vIk3U4NNaYTFm
            source_type: api_record
            title: 中国历代人物传记资料库：王應命（CBDB 221578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221578&o=json
            external_identifier: CBDB:221578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sgqXBKDaEtRzyPGQeE3NpG
        status: active
        display_name: 王應命
        merged_into_person_id: null
    - claim:
        id: c_5jYCJYyyZ2M7LGO50BQrXi
        subject_person_id: p_MpRHKYQgMhyeJ8uJAKZD2Z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vPvzYemegPB2rXY341CZT4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UjV3Hn813PvGNt4ol07McE
          claim_id: c_5jYCJYyyZ2M7LGO50BQrXi
          source_id: s_80xZqEuz0EYZqFKnB_n4kj
          stance: supports
          locator: CBDB：兄弟 王應麟（126851）之父／母 王榮貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王應鳳 与 王應麟 为同胞（CBDB 记「兄」），王應麟 之父／母即 王應鳳 之父／母。
          source:
            id: s_80xZqEuz0EYZqFKnB_n4kj
            source_type: api_record
            title: 中国历代人物传记资料库：王應鳳（CBDB 221579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221579&o=json
            external_identifier: CBDB:221579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vPvzYemegPB2rXY341CZT4
        status: active
        display_name: 王應鳳
        merged_into_person_id: null
    - claim:
        id: c_-FN3dMraq6YVIfk23GH_Z6
        subject_person_id: p_MpRHKYQgMhyeJ8uJAKZD2Z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yhjfNcH3MwkNWLHhAHkTdS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K4MOnfyNHfHm0KaOzIg0Vx
          claim_id: c_-FN3dMraq6YVIfk23GH_Z6
          source_id: s_Skyeohn_UKY3PSUEwyAel_
          stance: supports
          locator: CBDB：兄弟 王應麟（126851）之父／母 王榮貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王應麃 与 王應麟 为同胞（CBDB 记「兄」），王應麟 之父／母即 王應麃 之父／母。
          source:
            id: s_Skyeohn_UKY3PSUEwyAel_
            source_type: api_record
            title: 中国历代人物传记资料库：王應麃（CBDB 221584）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221584&o=json
            external_identifier: CBDB:221584
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yhjfNcH3MwkNWLHhAHkTdS
        status: active
        display_name: 王應麃
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王榮貴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王榮貴，明人物。萬曆八年進士，籍贯龍溪。（中国历代人物传记资料库 CBDB 221573） | accepted |
| name.primary | 王榮貴 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_hnvFbFQMD3qoDJL59kCJv1 | 王應麟 | accepted |
| children | p_GByKTcLKi5FHpF19ChqCGj | 王學孝 | accepted |
| children | p_M1PFNJsfKadpAQXffxK3F9 | 王應中 | accepted |
| children | p_VDBFAYpqqVNNp9HxYex1aB | 王應薦 | accepted |
| children | p_XzgidddQvWK1wNQtCDyJ69 | 王應賓 | accepted |
| children | p_f8cdeyyhqojaX8KjkiWgNJ | 王應鵬 | accepted |
| children | p_sgqXBKDaEtRzyPGQeE3NpG | 王應命 | accepted |
| children | p_vPvzYemegPB2rXY341CZT4 | 王應鳳 | accepted |
| children | p_yhjfNcH3MwkNWLHhAHkTdS | 王應麃 | accepted |

## 外部来源

- [中国历代人物传记资料库：王榮貴（CBDB 221573）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221573&o=json)
- [中国历代人物传记资料库：王學孝（CBDB 221576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221576&o=json)
- [中国历代人物传记资料库：王應賓（CBDB 221580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221580&o=json)
- [中国历代人物传记资料库：王應鳳（CBDB 221579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221579&o=json)
- [中国历代人物传记资料库：王應薦（CBDB 221581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221581&o=json)
- [中国历代人物传记资料库：王應麟（CBDB 126851）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126851&o=json)
- [中国历代人物传记资料库：王應命（CBDB 221578）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221578&o=json)
- [中国历代人物传记资料库：王應麃（CBDB 221584）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221584&o=json)
- [中国历代人物传记资料库：王應鵬（CBDB 221582）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221582&o=json)
- [中国历代人物传记资料库：王應中（CBDB 221577）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221577&o=json)
