---
schema: wang-person/v1
id: p_VLfme2j6JVKmdY6bLRnUg5
status: active
merged_into: null
display_name: 王法
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DKtJ2WrtKeHQfy5KK32JcA
        subject_person_id: p_VLfme2j6JVKmdY6bLRnUg5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王法
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZxZkCBjN1rRLvyRsBRHXKX
          claim_id: c_DKtJ2WrtKeHQfy5KK32JcA
          source_id: s_bCBKKNkA6YiPxLd61kAJv6
          stance: supports
          locator: CBDB:321152
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（321152）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_msSKYkdXygaUiWV2R3GGVL
        subject_person_id: p_VLfme2j6JVKmdY6bLRnUg5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王法，明人物。嘉靖三十五年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 321152）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pJJgQP6fJfO-nuBkeSj9T5
          claim_id: c_msSKYkdXygaUiWV2R3GGVL
          source_id: s_bCBKKNkA6YiPxLd61kAJv6
          stance: supports
          locator: CBDB:321152
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source: *a1
      object_person:
        id: p_T3W95sW7SgUDh6EEZUezDy
        status: active
        display_name: 王道充
        merged_into_person_id: null
    - claim:
        id: c_n8cnWRxAArBbceezhiCzFp
        subject_person_id: p_VLfme2j6JVKmdY6bLRnUg5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1jjskAT514Mx1SC274368i
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7Er6FJcRtqeJKbqNkREWea
          claim_id: c_n8cnWRxAArBbceezhiCzFp
          source_id: s_VqN-ZDouSHcyfFYhKN4NK-
          stance: supports
          locator: CBDB：兄弟 王道充（204586）之父／母 王法
          quotation: null
          interpretation_note: 由兄弟关系推断：王道育 与 王道充 为同胞（CBDB 记「兄」），王道充 之父／母即 王道育 之父／母。
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
        id: c_26MaDVpmXNgzdHH2O_C5RM
        subject_person_id: p_VLfme2j6JVKmdY6bLRnUg5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5M1xCcLfBj5oDWzdTWcwT1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vO-GYnm4JCaJk23gMziHr7
          claim_id: c_26MaDVpmXNgzdHH2O_C5RM
          source_id: s_CEug4tt3lHWicda3udQEZJ
          stance: supports
          locator: CBDB：兄弟 王道充（204586）之父／母 王法
          quotation: null
          interpretation_note: 由兄弟关系推断：王道方 与 王道充 为同胞（CBDB 记「兄」），王道充 之父／母即 王道方 之父／母。
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
        id: c_U8ias67iLgHTHdn8l0oQ4i
        subject_person_id: p_VLfme2j6JVKmdY6bLRnUg5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_81DMjM3QJQoHiop1CxEps7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FWrt8sOoRge_cVorAXhQmC
          claim_id: c_U8ias67iLgHTHdn8l0oQ4i
          source_id: s_gBTM2z-YIQmpxaJQrpy7U2
          stance: supports
          locator: CBDB：兄弟 王道充（204586）之父／母 王法
          quotation: null
          interpretation_note: 由兄弟关系推断：王道文 与 王道充 为同胞（CBDB 记「弟」），王道充 之父／母即 王道文 之父／母。
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
        id: c_0ny6ZSjUt1KK7B_7q3NEfe
        subject_person_id: p_VLfme2j6JVKmdY6bLRnUg5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GJqetPK5gGDANuRufVT12t
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I0mVvMqbXmKqXMzm3OeYVz
          claim_id: c_0ny6ZSjUt1KK7B_7q3NEfe
          source_id: s_2NZBE7emd21oyPLaEVmLLr
          stance: supports
          locator: CBDB：兄弟 王道充（204586）之父／母 王法
          quotation: null
          interpretation_note: 由兄弟关系推断：王道高 与 王道充 为同胞（CBDB 记「兄」），王道充 之父／母即 王道高 之父／母。
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
        id: c_-l6GABy8q6-YjQ50W3gjHH
        subject_person_id: p_VLfme2j6JVKmdY6bLRnUg5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MRkB3dav2Rf8fvLHBfqK33
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s67KVYOE5RM367GzcyqYn7
          claim_id: c_-l6GABy8q6-YjQ50W3gjHH
          source_id: s_3BOjZ9rSKQ3p9ZbXdDBF9H
          stance: supports
          locator: CBDB：兄弟 王道充（204586）之父／母 王法
          quotation: null
          interpretation_note: 由兄弟关系推断：王道齊 与 王道充 为同胞（CBDB 记「兄」），王道充 之父／母即 王道齊 之父／母。
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
        id: c_QE9NHG0MSygkEQkoSEgczg
        subject_person_id: p_VLfme2j6JVKmdY6bLRnUg5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NVb1E7GD56qHSiEaQ79KwH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YphXyINFcT4av4g7fs7Y4H
          claim_id: c_QE9NHG0MSygkEQkoSEgczg
          source_id: s_clFDyyeDA9vKBsJuQmwA76
          stance: supports
          locator: CBDB：兄弟 王道充（204586）之父／母 王法
          quotation: null
          interpretation_note: 由兄弟关系推断：王道章 与 王道充 为同胞（CBDB 记「兄」），王道充 之父／母即 王道章 之父／母。
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
        id: c_UPJuk39dlbLbqWVxzhK-rz
        subject_person_id: p_VLfme2j6JVKmdY6bLRnUg5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZNPxXbWuavxMMYBCWJq8KL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ImOTuGFjHDMT4xsqA1bm_6
          claim_id: c_UPJuk39dlbLbqWVxzhK-rz
          source_id: s_pqVP0NaV-7T-UM30x73IgM
          stance: supports
          locator: CBDB：兄弟 王道充（204586）之父／母 王法
          quotation: null
          interpretation_note: 由兄弟关系推断：王道玄 与 王道充 为同胞（CBDB 记「弟」），王道充 之父／母即 王道玄 之父／母。
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
        id: c_EpAO5PSfzcyDnYQjpeKIuE
        subject_person_id: p_VLfme2j6JVKmdY6bLRnUg5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cBo8TCQ6VUk2EJcPro7Lz1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IeO06rXGqNJIAqU9JtnJ_v
          claim_id: c_EpAO5PSfzcyDnYQjpeKIuE
          source_id: s_FnORhCoeSfdSoRkp6bVxiU
          stance: supports
          locator: CBDB：兄弟 王道充（204586）之父／母 王法
          quotation: null
          interpretation_note: 由兄弟关系推断：王道亨 与 王道充 为同胞（CBDB 记「弟」），王道充 之父／母即 王道亨 之父／母。
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
        id: c_zQhZUvluCjUQ1kam0YQB5D
        subject_person_id: p_VLfme2j6JVKmdY6bLRnUg5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nEb8d34PgSutcumUP5iu5j
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xc_appvGZIyYhRplRNQ64G
          claim_id: c_zQhZUvluCjUQ1kam0YQB5D
          source_id: s_OIJ1FrxxDrlQxSwgH8PpoJ
          stance: supports
          locator: CBDB：兄弟 王道充（204586）之父／母 王法
          quotation: null
          interpretation_note: 由兄弟关系推断：王道立 与 王道充 为同胞（CBDB 记「弟」），王道充 之父／母即 王道立 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王法

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王法 | accepted |
| bio.summary | 王法，明人物。嘉靖三十五年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 321152） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_T3W95sW7SgUDh6EEZUezDy | 王道充 | accepted |
| children | p_1jjskAT514Mx1SC274368i | 王道育 | accepted |
| children | p_5M1xCcLfBj5oDWzdTWcwT1 | 王道方 | accepted |
| children | p_81DMjM3QJQoHiop1CxEps7 | 王道文 | accepted |
| children | p_GJqetPK5gGDANuRufVT12t | 王道高 | accepted |
| children | p_MRkB3dav2Rf8fvLHBfqK33 | 王道齊 | accepted |
| children | p_NVb1E7GD56qHSiEaQ79KwH | 王道章 | accepted |
| children | p_ZNPxXbWuavxMMYBCWJq8KL | 王道玄 | accepted |
| children | p_cBo8TCQ6VUk2EJcPro7Lz1 | 王道亨 | accepted |
| children | p_nEb8d34PgSutcumUP5iu5j | 王道立 | accepted |

## 外部来源

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
