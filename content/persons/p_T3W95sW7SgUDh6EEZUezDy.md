---
schema: wang-person/v1
id: p_T3W95sW7SgUDh6EEZUezDy
status: active
merged_into: null
display_name: 王道充
revision: 13
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5V9ro7NVD7F5KHqXc7B5Uc
        subject_person_id: p_T3W95sW7SgUDh6EEZUezDy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道充
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TBD2SyV3B26f3GdtAsmbQh
          claim_id: c_5V9ro7NVD7F5KHqXc7B5Uc
          source_id: s_W2uVhTnnk3MbPxMDojKRnj
          stance: supports
          locator: CBDB:204586
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204586）
          source: &a1
            id: s_W2uVhTnnk3MbPxMDojKRnj
            source_type: api_record
            title: 中国历代人物传记资料库：王道充（CBDB 204586）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204586&o=json
            external_identifier: CBDB:204586
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.830Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_H51u8bN6WHHefqUQGeM11v
        subject_person_id: p_T3W95sW7SgUDh6EEZUezDy
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1526年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8BdvG94TuS7uPzWLC1R6BB
          claim_id: c_H51u8bN6WHHefqUQGeM11v
          source_id: s_W2uVhTnnk3MbPxMDojKRnj
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
        id: c_J544vHdCgnABHvywPrF8QQ
        subject_person_id: p_T3W95sW7SgUDh6EEZUezDy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道充（生于1526年），明人物。明清進士進士，籍贯常熟，入仕進士。（中国历代人物传记资料库 CBDB 204586）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UHBh9zmhg4KQrXRTqAmimd
          claim_id: c_J544vHdCgnABHvywPrF8QQ
          source_id: s_W2uVhTnnk3MbPxMDojKRnj
          stance: supports
          locator: CBDB:204586
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_V1wwuVVBYO1SsLv3ZUSk4b
        subject_person_id: p_VLfme2j6JVKmdY6bLRnUg5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_T3W95sW7SgUDh6EEZUezDy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4I-fzHW2n8zbFYqzy75taO
          claim_id: c_V1wwuVVBYO1SsLv3ZUSk4b
          source_id: s_bCBKKNkA6YiPxLd61kAJv6
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第一百一十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bCBKKNkA6YiPxLd61kAJv6
            source_type: api_record
            title: 中国历代人物传记资料库：王法（CBDB 321152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321152&o=json
            external_identifier: CBDB:321152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.083Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_VLfme2j6JVKmdY6bLRnUg5
        status: active
        display_name: 王法
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_H9hZGJm7LDE849A-DE2QqI
        subject_person_id: p_aZs7RsspgmyvRkoqMGX2uh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_T3W95sW7SgUDh6EEZUezDy
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1lMebgUBExp3AOKH7MBlWl
          claim_id: c_H9hZGJm7LDE849A-DE2QqI
          source_id: s_jzUeXJcwtBWDMLGmqCFspt
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第一百一十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jzUeXJcwtBWDMLGmqCFspt
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 321150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321150&o=json
            external_identifier: CBDB:321150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.082Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aZs7RsspgmyvRkoqMGX2uh
        status: active
        display_name: 王賓
        merged_into_person_id: null
    - claim:
        id: c_iKE3JPfxTN5GdYG5Kx3r5t
        subject_person_id: p_yrFPjE4tPK92ux9Ny5qWph
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_T3W95sW7SgUDh6EEZUezDy
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_68soi4AJtqZpdDGbbMQdv0
          claim_id: c_iKE3JPfxTN5GdYG5Kx3r5t
          source_id: s_5qGHo6BLKLyKRQZVZyjcgv
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第一百一十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5qGHo6BLKLyKRQZVZyjcgv
            source_type: api_record
            title: 中国历代人物传记资料库：王謹（CBDB 321149）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321149&o=json
            external_identifier: CBDB:321149
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.080Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_yrFPjE4tPK92ux9Ny5qWph
        status: active
        display_name: 王謹
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_yDATIP8kYyruZ36UnZKeX8
        subject_person_id: p_1jjskAT514Mx1SC274368i
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_T3W95sW7SgUDh6EEZUezDy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3Vvyv7DQuApLNK7BbViB4m
          claim_id: c_yDATIP8kYyruZ36UnZKeX8
          source_id: s_VqN-ZDouSHcyfFYhKN4NK-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204586 王道充）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VqN-ZDouSHcyfFYhKN4NK-
            source_type: api_record
            title: 中国历代人物传记资料库：王道育（CBDB 321161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321161&o=json
            external_identifier: CBDB:321161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1jjskAT514Mx1SC274368i
        status: active
        display_name: 王道育
        merged_into_person_id: null
    - claim:
        id: c_fsfUxQ3EM5MYdoe5GBvMN3
        subject_person_id: p_5M1xCcLfBj5oDWzdTWcwT1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_T3W95sW7SgUDh6EEZUezDy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GBx6M2KOQYUnScd7zyd9N9
          claim_id: c_fsfUxQ3EM5MYdoe5GBvMN3
          source_id: s_CEug4tt3lHWicda3udQEZJ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204586 王道充）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_CEug4tt3lHWicda3udQEZJ
            source_type: api_record
            title: 中国历代人物传记资料库：王道方（CBDB 321163）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321163&o=json
            external_identifier: CBDB:321163
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5M1xCcLfBj5oDWzdTWcwT1
        status: active
        display_name: 王道方
        merged_into_person_id: null
    - claim:
        id: c_B4QkuGbwN-fd_T24xt3hnT
        subject_person_id: p_81DMjM3QJQoHiop1CxEps7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_T3W95sW7SgUDh6EEZUezDy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VJ6EobKYeYr0t5mkUBS-1u
          claim_id: c_B4QkuGbwN-fd_T24xt3hnT
          source_id: s_gBTM2z-YIQmpxaJQrpy7U2
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204586 王道充）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gBTM2z-YIQmpxaJQrpy7U2
            source_type: api_record
            title: 中国历代人物传记资料库：王道文（CBDB 321158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321158&o=json
            external_identifier: CBDB:321158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_81DMjM3QJQoHiop1CxEps7
        status: active
        display_name: 王道文
        merged_into_person_id: null
    - claim:
        id: c_vIvavKOoZaY8Nt6Diqa96c
        subject_person_id: p_GJqetPK5gGDANuRufVT12t
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_T3W95sW7SgUDh6EEZUezDy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MfCzZiU12FxifRVfL27yVi
          claim_id: c_vIvavKOoZaY8Nt6Diqa96c
          source_id: s_2NZBE7emd21oyPLaEVmLLr
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204586 王道充）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2NZBE7emd21oyPLaEVmLLr
            source_type: api_record
            title: 中国历代人物传记资料库：王道高（CBDB 321164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321164&o=json
            external_identifier: CBDB:321164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GJqetPK5gGDANuRufVT12t
        status: active
        display_name: 王道高
        merged_into_person_id: null
    - claim:
        id: c_ZA7aYyfsXezsouW1g3mWbk
        subject_person_id: p_MRkB3dav2Rf8fvLHBfqK33
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_T3W95sW7SgUDh6EEZUezDy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RrvVlmM8jjUo49Dh-thAe-
          claim_id: c_ZA7aYyfsXezsouW1g3mWbk
          source_id: s_3BOjZ9rSKQ3p9ZbXdDBF9H
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204586 王道充）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3BOjZ9rSKQ3p9ZbXdDBF9H
            source_type: api_record
            title: 中国历代人物传记资料库：王道齊（CBDB 321160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321160&o=json
            external_identifier: CBDB:321160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MRkB3dav2Rf8fvLHBfqK33
        status: active
        display_name: 王道齊
        merged_into_person_id: null
    - claim:
        id: c_jLSJ6oh1YHzMnvQ-Y5j_a5
        subject_person_id: p_NVb1E7GD56qHSiEaQ79KwH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_T3W95sW7SgUDh6EEZUezDy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fRGyDxUxmQpn_IN56im6s8
          claim_id: c_jLSJ6oh1YHzMnvQ-Y5j_a5
          source_id: s_clFDyyeDA9vKBsJuQmwA76
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204586 王道充）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_clFDyyeDA9vKBsJuQmwA76
            source_type: api_record
            title: 中国历代人物传记资料库：王道章（CBDB 321159）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321159&o=json
            external_identifier: CBDB:321159
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NVb1E7GD56qHSiEaQ79KwH
        status: active
        display_name: 王道章
        merged_into_person_id: null
    - claim:
        id: c_j0fTbJzRbnt3aYsR9hA7Eo
        subject_person_id: p_T3W95sW7SgUDh6EEZUezDy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZNPxXbWuavxMMYBCWJq8KL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cF-6K7UlFaebQlqXWAis37
          claim_id: c_j0fTbJzRbnt3aYsR9hA7Eo
          source_id: s_pqVP0NaV-7T-UM30x73IgM
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204586 王道充）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_pqVP0NaV-7T-UM30x73IgM
            source_type: api_record
            title: 中国历代人物传记资料库：王道玄（CBDB 321156）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321156&o=json
            external_identifier: CBDB:321156
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZNPxXbWuavxMMYBCWJq8KL
        status: active
        display_name: 王道玄
        merged_into_person_id: null
    - claim:
        id: c_apfJoft0A6-wXrrcNZjcEb
        subject_person_id: p_T3W95sW7SgUDh6EEZUezDy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cBo8TCQ6VUk2EJcPro7Lz1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KvMImwcJL9CaVHGgHtqtTE
          claim_id: c_apfJoft0A6-wXrrcNZjcEb
          source_id: s_FnORhCoeSfdSoRkp6bVxiU
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204586 王道充）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_FnORhCoeSfdSoRkp6bVxiU
            source_type: api_record
            title: 中国历代人物传记资料库：王道亨（CBDB 321155）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321155&o=json
            external_identifier: CBDB:321155
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cBo8TCQ6VUk2EJcPro7Lz1
        status: active
        display_name: 王道亨
        merged_into_person_id: null
    - claim:
        id: c_iPqpljh4gzlIPUcW24Tj1J
        subject_person_id: p_T3W95sW7SgUDh6EEZUezDy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nEb8d34PgSutcumUP5iu5j
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H32oNCXTIgoLlh0Lb5D_sR
          claim_id: c_iPqpljh4gzlIPUcW24Tj1J
          source_id: s_OIJ1FrxxDrlQxSwgH8PpoJ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204586 王道充）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OIJ1FrxxDrlQxSwgH8PpoJ
            source_type: api_record
            title: 中国历代人物传记资料库：王道立（CBDB 321157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321157&o=json
            external_identifier: CBDB:321157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nEb8d34PgSutcumUP5iu5j
        status: active
        display_name: 王道立
        merged_into_person_id: null
---

# 王道充

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道充 | accepted |
| birth.date | 1526年 | accepted |
| bio.summary | 王道充（生于1526年），明人物。明清進士進士，籍贯常熟，入仕進士。（中国历代人物传记资料库 CBDB 204586） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VLfme2j6JVKmdY6bLRnUg5 | 王法 | accepted |
| ancestors | p_aZs7RsspgmyvRkoqMGX2uh | 王賓 | accepted |
| ancestors | p_yrFPjE4tPK92ux9Ny5qWph | 王謹 | accepted |
| other | p_1jjskAT514Mx1SC274368i | 王道育 | accepted |
| other | p_5M1xCcLfBj5oDWzdTWcwT1 | 王道方 | accepted |
| other | p_81DMjM3QJQoHiop1CxEps7 | 王道文 | accepted |
| other | p_GJqetPK5gGDANuRufVT12t | 王道高 | accepted |
| other | p_MRkB3dav2Rf8fvLHBfqK33 | 王道齊 | accepted |
| other | p_NVb1E7GD56qHSiEaQ79KwH | 王道章 | accepted |
| other | p_ZNPxXbWuavxMMYBCWJq8KL | 王道玄 | accepted |
| other | p_cBo8TCQ6VUk2EJcPro7Lz1 | 王道亨 | accepted |
| other | p_nEb8d34PgSutcumUP5iu5j | 王道立 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賓（CBDB 321150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321150&o=json)
- [中国历代人物传记资料库：王道充（CBDB 204586）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204586&o=json)
- [中国历代人物传记资料库：王道方（CBDB 321163）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321163&o=json)
- [中国历代人物传记资料库：王道高（CBDB 321164）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321164&o=json)
- [中国历代人物传记资料库：王道亨（CBDB 321155）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321155&o=json)
- [中国历代人物传记资料库：王道立（CBDB 321157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321157&o=json)
- [中国历代人物传记资料库：王道齊（CBDB 321160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321160&o=json)
- [中国历代人物传记资料库：王道文（CBDB 321158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321158&o=json)
- [中国历代人物传记资料库：王道玄（CBDB 321156）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321156&o=json)
- [中国历代人物传记资料库：王道育（CBDB 321161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321161&o=json)
- [中国历代人物传记资料库：王道章（CBDB 321159）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321159&o=json)
- [中国历代人物传记资料库：王法（CBDB 321152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321152&o=json)
- [中国历代人物传记资料库：王謹（CBDB 321149）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321149&o=json)
