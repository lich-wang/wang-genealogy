---
schema: wang-person/v1
id: p_TD1TvnKHWVi268fxKgzDuM
status: active
merged_into: null
display_name: 王象晉
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Qvx6WJBfMMc6gyXaLTKAVA
        subject_person_id: p_TD1TvnKHWVi268fxKgzDuM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象晉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EpxNCSHFqQmYVeEj7rCYhF
          claim_id: c_Qvx6WJBfMMc6gyXaLTKAVA
          source_id: s_wB2T7DbsaFR8eqPsxwV6Hs
          stance: supports
          locator: CBDB:65763
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（65763）
          source: &a1
            id: s_wB2T7DbsaFR8eqPsxwV6Hs
            source_type: api_record
            title: 中国历代人物传记资料库：王象晉（CBDB 65763）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65763&o=json
            external_identifier: CBDB:65763
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.939Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2dLUaiea1tkaHVwuFTYrKt
        subject_person_id: p_TD1TvnKHWVi268fxKgzDuM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1561年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Kc9BaV4kCGhAEQsTh3msre
          claim_id: c_2dLUaiea1tkaHVwuFTYrKt
          source_id: s_wB2T7DbsaFR8eqPsxwV6Hs
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_FMNN8x8hjPBwYLEXdJxFMT
        subject_person_id: p_TD1TvnKHWVi268fxKgzDuM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1653年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CogDvLEL35uD5Dy546Jqrt
          claim_id: c_FMNN8x8hjPBwYLEXdJxFMT
          source_id: s_wB2T7DbsaFR8eqPsxwV6Hs
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7hAxLCeFJ5dqKB8bWSpq4Q
        subject_person_id: p_TD1TvnKHWVi268fxKgzDuM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象晉（1561年—1653年），清人物。明清進士進士，籍贯新城，身份为植物學家，入仕進士。（中国历代人物传记资料库 CBDB 65763）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HbAvQ3MhKFCw7uNJVMSL22
          claim_id: c_7hAxLCeFJ5dqKB8bWSpq4Q
          source_id: s_wB2T7DbsaFR8eqPsxwV6Hs
          stance: supports
          locator: CBDB:65763
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_OiFSSm2PDM24LmB4O_r-2J
        subject_person_id: p_5yFg7DjLcFzFQKDBRDnwdx
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_TD1TvnKHWVi268fxKgzDuM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0yqv2zvP2l93VQi8_mdQgh
          claim_id: c_OiFSSm2PDM24LmB4O_r-2J
          source_id: s_ncE1XNE-IywE3t9GEJxDe9
          stance: supports
          locator: CBDB：兄弟 王象乾（65764）之父／母 王之垣
          quotation: null
          interpretation_note: 由兄弟关系推断：王象晉 与 王象乾 为同胞（CBDB 记「兄」），王象乾 之父／母即 王象晉 之父／母。
          source:
            id: s_ncE1XNE-IywE3t9GEJxDe9
            source_type: api_record
            title: 中国历代人物传记资料库：王象晉（CBDB 65763）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65763&o=json
            external_identifier: CBDB:65763
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5yFg7DjLcFzFQKDBRDnwdx
        status: active
        display_name: 王之垣
        merged_into_person_id: null
    - claim:
        id: c_De57GqZxKJLI9O_ShKNVkc
        subject_person_id: p_AKu7Q79dhYjH69pKrRtR5y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TD1TvnKHWVi268fxKgzDuM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QhLbKF6Qew08eMP1lm4sO-
          claim_id: c_De57GqZxKJLI9O_ShKNVkc
          source_id: s_ncE1XNE-IywE3t9GEJxDe9
          stance: supports
          locator: CBDB：兄弟 王象坤（205267）之父／母 王之翰
          quotation: null
          interpretation_note: 由兄弟关系推断：王象晉 与 王象坤 为同胞（CBDB 记「兄」），王象坤 之父／母即 王象晉 之父／母。
          source:
            id: s_ncE1XNE-IywE3t9GEJxDe9
            source_type: api_record
            title: 中国历代人物传记资料库：王象晉（CBDB 65763）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65763&o=json
            external_identifier: CBDB:65763
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AKu7Q79dhYjH69pKrRtR5y
        status: active
        display_name: 王之翰
        merged_into_person_id: null
    - claim:
        id: c_YTwpqSJrzyDffTf2Kl2Kty
        subject_person_id: p_VLPN2ybQtkqyCPrJiYL7vx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TD1TvnKHWVi268fxKgzDuM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nJQFsCAd_QZm_uyQOBpZck
          claim_id: c_YTwpqSJrzyDffTf2Kl2Kty
          source_id: s_ncE1XNE-IywE3t9GEJxDe9
          stance: supports
          locator: CBDB：兄弟 王象蒙（206595）之父／母 王之辅
          quotation: null
          interpretation_note: 由兄弟关系推断：王象晉 与 王象蒙 为同胞（CBDB 记「兄」），王象蒙 之父／母即 王象晉 之父／母。
          source:
            id: s_ncE1XNE-IywE3t9GEJxDe9
            source_type: api_record
            title: 中国历代人物传记资料库：王象晉（CBDB 65763）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65763&o=json
            external_identifier: CBDB:65763
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VLPN2ybQtkqyCPrJiYL7vx
        status: active
        display_name: 王之辅
        merged_into_person_id: null
    - claim:
        id: c_Vgts-gxluCUXtJZasfnkoh
        subject_person_id: p_5r1wESpKqnWgbhR5AChbjE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TD1TvnKHWVi268fxKgzDuM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DxKZwyIKOA21E3PRZahXhU
          claim_id: c_Vgts-gxluCUXtJZasfnkoh
          source_id: s_ncE1XNE-IywE3t9GEJxDe9
          stance: supports
          locator: CBDB：兄弟 王象春（126731）之父／母 王之猷
          quotation: null
          interpretation_note: 由兄弟关系推断：王象晉 与 王象春 为同胞（CBDB 记「弟」），王象春 之父／母即 王象晉 之父／母。
          source:
            id: s_ncE1XNE-IywE3t9GEJxDe9
            source_type: api_record
            title: 中国历代人物传记资料库：王象晉（CBDB 65763）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65763&o=json
            external_identifier: CBDB:65763
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5r1wESpKqnWgbhR5AChbjE
        status: active
        display_name: 王之猷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_q91qEbUMx65k7z1TTpUcFo
        subject_person_id: p_TD1TvnKHWVi268fxKgzDuM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mNbLtBp7NLKek2NHmVT5fp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LioOrlH6YbV4ET11H2UBfu
          claim_id: c_q91qEbUMx65k7z1TTpUcFo
          source_id: s_ncE1XNE-IywE3t9GEJxDe9
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 65764 王象乾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ncE1XNE-IywE3t9GEJxDe9
            source_type: api_record
            title: 中国历代人物传记资料库：王象晉（CBDB 65763）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65763&o=json
            external_identifier: CBDB:65763
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mNbLtBp7NLKek2NHmVT5fp
        status: active
        display_name: 王象乾
        merged_into_person_id: null
    - claim:
        id: c_ycuUMzKsLfxkxVhKcW0kl-
        subject_person_id: p_TD1TvnKHWVi268fxKgzDuM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hkxRnkwdABHFBvtuuQxejY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ELRQUznCJuEqgyAJp0as_z
          claim_id: c_ycuUMzKsLfxkxVhKcW0kl-
          source_id: s_ncE1XNE-IywE3t9GEJxDe9
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205267 王象坤）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ncE1XNE-IywE3t9GEJxDe9
            source_type: api_record
            title: 中国历代人物传记资料库：王象晉（CBDB 65763）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65763&o=json
            external_identifier: CBDB:65763
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hkxRnkwdABHFBvtuuQxejY
        status: active
        display_name: 王象坤
        merged_into_person_id: null
    - claim:
        id: c_eoXEeT8DhQJqBce4Zi4oLq
        subject_person_id: p_TD1TvnKHWVi268fxKgzDuM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UCuWmdu88wkXMEGK9geKmL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MX0NrcN8XPlZ_oEAB0g7ge
          claim_id: c_eoXEeT8DhQJqBce4Zi4oLq
          source_id: s_ncE1XNE-IywE3t9GEJxDe9
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206595 王象蒙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ncE1XNE-IywE3t9GEJxDe9
            source_type: api_record
            title: 中国历代人物传记资料库：王象晉（CBDB 65763）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65763&o=json
            external_identifier: CBDB:65763
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UCuWmdu88wkXMEGK9geKmL
        status: active
        display_name: 王象蒙
        merged_into_person_id: null
    - claim:
        id: c_5TW8lk_A6K-FPp-Tz72Pv0
        subject_person_id: p_1vwHH8EjSEP1q2oifpwF8P
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TD1TvnKHWVi268fxKgzDuM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QbWRrp7Fds8Q24JDmAdRSz
          claim_id: c_5TW8lk_A6K-FPp-Tz72Pv0
          source_id: s_ncE1XNE-IywE3t9GEJxDe9
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126731 王象春）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ncE1XNE-IywE3t9GEJxDe9
            source_type: api_record
            title: 中国历代人物传记资料库：王象晉（CBDB 65763）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65763&o=json
            external_identifier: CBDB:65763
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1vwHH8EjSEP1q2oifpwF8P
        status: active
        display_name: 王象春
        merged_into_person_id: null
---

# 王象晉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王象晉 | accepted |
| birth.date | 1561年 | accepted |
| death.date | 1653年 | accepted |
| bio.summary | 王象晉（1561年—1653年），清人物。明清進士進士，籍贯新城，身份为植物學家，入仕進士。（中国历代人物传记资料库 CBDB 65763） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5yFg7DjLcFzFQKDBRDnwdx | 王之垣 | accepted |
| parents | p_AKu7Q79dhYjH69pKrRtR5y | 王之翰 | accepted |
| parents | p_VLPN2ybQtkqyCPrJiYL7vx | 王之辅 | accepted |
| parents | p_5r1wESpKqnWgbhR5AChbjE | 王之猷 | accepted |
| other | p_mNbLtBp7NLKek2NHmVT5fp | 王象乾 | accepted |
| other | p_hkxRnkwdABHFBvtuuQxejY | 王象坤 | accepted |
| other | p_UCuWmdu88wkXMEGK9geKmL | 王象蒙 | accepted |
| other | p_1vwHH8EjSEP1q2oifpwF8P | 王象春 | accepted |

## 外部来源

- [中国历代人物传记资料库：王象晉（CBDB 65763）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65763&o=json)
