---
schema: wang-person/v1
id: p_5oVCjNf3jZsLG4jhJ57YhB
status: active
merged_into: null
display_name: 王鸞
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GsTN8PsfvFRc9WwVj2LYm7
        subject_person_id: p_5oVCjNf3jZsLG4jhJ57YhB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鸞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JH1rY4u2JeJLvPkvwNwChN
          claim_id: c_GsTN8PsfvFRc9WwVj2LYm7
          source_id: s_g3HqFCjbQwEuwe98fW3qQm
          stance: supports
          locator: CBDB:294524
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294524）
          source: &a1
            id: s_g3HqFCjbQwEuwe98fW3qQm
            source_type: api_record
            title: 中国历代人物传记资料库：王鸞（CBDB 294524）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294524&o=json
            external_identifier: CBDB:294524
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.464Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FKevwk5xUazXUejQLQUW21
        subject_person_id: p_5oVCjNf3jZsLG4jhJ57YhB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鸞，明人物。嘉靖十一年進士，籍贯平湖。（中国历代人物传记资料库 CBDB 294524）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_282Ag50CHZttslo-Sl0C3Y
          claim_id: c_FKevwk5xUazXUejQLQUW21
          source_id: s_g3HqFCjbQwEuwe98fW3qQm
          stance: supports
          locator: CBDB:294524
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_gEQBnQb1LNBsryjWTIP9eP
        subject_person_id: p_5oVCjNf3jZsLG4jhJ57YhB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e7c3DhdEJw2765tvQyZA4M
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f09KABOggZlo4ghgkgsKmD
          claim_id: c_gEQBnQb1LNBsryjWTIP9eP
          source_id: s_g3HqFCjbQwEuwe98fW3qQm
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百零六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_e7c3DhdEJw2765tvQyZA4M
        status: active
        display_name: 王梅
        merged_into_person_id: null
    - claim:
        id: c_Ucogytyz5vsBucD68hfsL7
        subject_person_id: p_5oVCjNf3jZsLG4jhJ57YhB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_34MLAJVChWhCtAHLLwS4nt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jVxwZDwJfEN-xkWwag2eO1
          claim_id: c_Ucogytyz5vsBucD68hfsL7
          source_id: s_h-SBCqoGe7p6flGsPlh_TP
          stance: supports
          locator: CBDB：兄弟 王梅（202794）之父／母 王鸞
          quotation: null
          interpretation_note: 由兄弟关系推断：王森 与 王梅 为同胞（CBDB 记「兄」），王梅 之父／母即 王森 之父／母。
          source:
            id: s_h-SBCqoGe7p6flGsPlh_TP
            source_type: api_record
            title: 中国历代人物传记资料库：王森（CBDB 294533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294533&o=json
            external_identifier: CBDB:294533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_34MLAJVChWhCtAHLLwS4nt
        status: active
        display_name: 王森
        merged_into_person_id: null
    - claim:
        id: c_R2ljAdOFabEfSGSq_WZGG7
        subject_person_id: p_5oVCjNf3jZsLG4jhJ57YhB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QMi1LnNbguj92ntGMPvRYx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oVoasX5tll5MNxa5UXO1Fo
          claim_id: c_R2ljAdOFabEfSGSq_WZGG7
          source_id: s_BzYGG17sy2aIcG73yb-p5d
          stance: supports
          locator: CBDB：兄弟 王梅（202794）之父／母 王鸞
          quotation: null
          interpretation_note: 由兄弟关系推断：王校 与 王梅 为同胞（CBDB 记「兄」），王梅 之父／母即 王校 之父／母。
          source:
            id: s_BzYGG17sy2aIcG73yb-p5d
            source_type: api_record
            title: 中国历代人物传记资料库：王校（CBDB 294532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294532&o=json
            external_identifier: CBDB:294532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QMi1LnNbguj92ntGMPvRYx
        status: active
        display_name: 王校
        merged_into_person_id: null
    - claim:
        id: c_pmq8O4DRcQGYCn-EaqonbJ
        subject_person_id: p_5oVCjNf3jZsLG4jhJ57YhB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sWLBZw64B5znCfepJJGvqS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L5ns58YpkFZknCcpHE1jwK
          claim_id: c_pmq8O4DRcQGYCn-EaqonbJ
          source_id: s_hY1ZnLwCvGF4jClfN6oanU
          stance: supports
          locator: CBDB：兄弟 王梅（202794）之父／母 王鸞
          quotation: null
          interpretation_note: 由兄弟关系推断：王桂 与 王梅 为同胞（CBDB 记「弟」），王梅 之父／母即 王桂 之父／母。
          source:
            id: s_hY1ZnLwCvGF4jClfN6oanU
            source_type: api_record
            title: 中国历代人物传记资料库：王桂（CBDB 294529）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294529&o=json
            external_identifier: CBDB:294529
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sWLBZw64B5znCfepJJGvqS
        status: active
        display_name: 王桂
        merged_into_person_id: null
    - claim:
        id: c_j55G4sVcv28JSVbMtXO_ct
        subject_person_id: p_5oVCjNf3jZsLG4jhJ57YhB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tbChgD1hFMn4eQoFG92UXa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_saAt_60TwGm_OFLKXy3vI2
          claim_id: c_j55G4sVcv28JSVbMtXO_ct
          source_id: s_8NI7rODEqDZewGbfRBwpOw
          stance: supports
          locator: CBDB：兄弟 王梅（202794）之父／母 王鸞
          quotation: null
          interpretation_note: 由兄弟关系推断：王模 与 王梅 为同胞（CBDB 记「兄」），王梅 之父／母即 王模 之父／母。
          source:
            id: s_8NI7rODEqDZewGbfRBwpOw
            source_type: api_record
            title: 中国历代人物传记资料库：王模（CBDB 294531）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294531&o=json
            external_identifier: CBDB:294531
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tbChgD1hFMn4eQoFG92UXa
        status: active
        display_name: 王模
        merged_into_person_id: null
    - claim:
        id: c_qRj1b4leLOrY-UXpVgxCOf
        subject_person_id: p_5oVCjNf3jZsLG4jhJ57YhB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xLwPJkYcAPE7GJF9bNV476
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mpNgZi2RVec5od91ISElVV
          claim_id: c_qRj1b4leLOrY-UXpVgxCOf
          source_id: s_imB3GzWGLNyMmelhsaS396
          stance: supports
          locator: CBDB：兄弟 王梅（202794）之父／母 王鸞
          quotation: null
          interpretation_note: 由兄弟关系推断：王樞 与 王梅 为同胞（CBDB 记「兄」），王梅 之父／母即 王樞 之父／母。
          source:
            id: s_imB3GzWGLNyMmelhsaS396
            source_type: api_record
            title: 中国历代人物传记资料库：王樞（CBDB 294534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294534&o=json
            external_identifier: CBDB:294534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xLwPJkYcAPE7GJF9bNV476
        status: active
        display_name: 王樞
        merged_into_person_id: null
    - claim:
        id: c_ECu04jpvwc8QhvgUxO3xh7
        subject_person_id: p_5oVCjNf3jZsLG4jhJ57YhB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zLA5TsSxN97GFVAJwFFzjJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4GlFROjcKfyR4SoFh5X60D
          claim_id: c_ECu04jpvwc8QhvgUxO3xh7
          source_id: s_HCauhPkf8MDUzPa8oQWR5e
          stance: supports
          locator: CBDB：兄弟 王梅（202794）之父／母 王鸞
          quotation: null
          interpretation_note: 由兄弟关系推断：王槐 与 王梅 为同胞（CBDB 记「弟」），王梅 之父／母即 王槐 之父／母。
          source:
            id: s_HCauhPkf8MDUzPa8oQWR5e
            source_type: api_record
            title: 中国历代人物传记资料库：王槐（CBDB 294530）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294530&o=json
            external_identifier: CBDB:294530
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zLA5TsSxN97GFVAJwFFzjJ
        status: active
        display_name: 王槐
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鸞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鸞 | accepted |
| bio.summary | 王鸞，明人物。嘉靖十一年進士，籍贯平湖。（中国历代人物传记资料库 CBDB 294524） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_e7c3DhdEJw2765tvQyZA4M | 王梅 | accepted |
| children | p_34MLAJVChWhCtAHLLwS4nt | 王森 | accepted |
| children | p_QMi1LnNbguj92ntGMPvRYx | 王校 | accepted |
| children | p_sWLBZw64B5znCfepJJGvqS | 王桂 | accepted |
| children | p_tbChgD1hFMn4eQoFG92UXa | 王模 | accepted |
| children | p_xLwPJkYcAPE7GJF9bNV476 | 王樞 | accepted |
| children | p_zLA5TsSxN97GFVAJwFFzjJ | 王槐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王桂（CBDB 294529）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294529&o=json)
- [中国历代人物传记资料库：王槐（CBDB 294530）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294530&o=json)
- [中国历代人物传记资料库：王鸞（CBDB 294524）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294524&o=json)
- [中国历代人物传记资料库：王模（CBDB 294531）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294531&o=json)
- [中国历代人物传记资料库：王森（CBDB 294533）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294533&o=json)
- [中国历代人物传记资料库：王樞（CBDB 294534）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294534&o=json)
- [中国历代人物传记资料库：王校（CBDB 294532）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294532&o=json)
