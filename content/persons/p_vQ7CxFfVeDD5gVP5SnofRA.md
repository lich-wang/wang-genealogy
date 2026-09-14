---
schema: wang-person/v1
id: p_vQ7CxFfVeDD5gVP5SnofRA
status: active
merged_into: null
display_name: 王言
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6TF39TNHLFNNdv5D49S5xn
        subject_person_id: p_vQ7CxFfVeDD5gVP5SnofRA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uNEp8PbEc22hBz1cy8zipn
          claim_id: c_6TF39TNHLFNNdv5D49S5xn
          source_id: s_bdh78hDyKTZYMt8wkfB4ky
          stance: supports
          locator: CBDB:331186
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（331186）
          source: &a1
            id: s_bdh78hDyKTZYMt8wkfB4ky
            source_type: api_record
            title: 中国历代人物传记资料库：王言（CBDB 331186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331186&o=json
            external_identifier: CBDB:331186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.361Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6NCxKyWdBuQYqASjFNDovg
        subject_person_id: p_vQ7CxFfVeDD5gVP5SnofRA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言，明人物。嘉靖四十四年進士，籍贯陽城。（中国历代人物传记资料库 CBDB 331186）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9eHLi-Oem7qbQimrmB1wft
          claim_id: c_6NCxKyWdBuQYqASjFNDovg
          source_id: s_bdh78hDyKTZYMt8wkfB4ky
          stance: supports
          locator: CBDB:331186
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_SvIybh73tngXBriaj4CYRm
        subject_person_id: p_vQ7CxFfVeDD5gVP5SnofRA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Tffvt8PaRx7qSEiYdDgfFH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3aefzIfXLT6Q2rRdzM-G32
          claim_id: c_SvIybh73tngXBriaj4CYRm
          source_id: s_bdh78hDyKTZYMt8wkfB4ky
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第九十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Tffvt8PaRx7qSEiYdDgfFH
        status: active
        display_name: 王淑陵
        merged_into_person_id: null
    - claim:
        id: c_1pgQ_BiqV-ORZOjAmWusdu
        subject_person_id: p_vQ7CxFfVeDD5gVP5SnofRA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6WucMbhkQXJwBzBACZWi7R
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wUAk71SpACsh02vyolT84x
          claim_id: c_1pgQ_BiqV-ORZOjAmWusdu
          source_id: s_ETvtZ7dZqE2-mIsRWlgroh
          stance: supports
          locator: CBDB：兄弟 王淑陵（205297）之父／母 王言
          quotation: null
          interpretation_note: 由兄弟关系推断：王淑通 与 王淑陵 为同胞（CBDB 记「兄」），王淑陵 之父／母即 王淑通 之父／母。
          source:
            id: s_ETvtZ7dZqE2-mIsRWlgroh
            source_type: api_record
            title: 中国历代人物传记资料库：王淑通（CBDB 331192）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331192&o=json
            external_identifier: CBDB:331192
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6WucMbhkQXJwBzBACZWi7R
        status: active
        display_name: 王淑通
        merged_into_person_id: null
    - claim:
        id: c_gre8ZQjAWaCP9qMyNudPKZ
        subject_person_id: p_vQ7CxFfVeDD5gVP5SnofRA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6ty1kreQG6ZpsK6jqSaE8y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IS4MDrcFWg_jic4nuXDp5o
          claim_id: c_gre8ZQjAWaCP9qMyNudPKZ
          source_id: s_5WTSeoO6Pkslgjy3OQpETo
          stance: supports
          locator: CBDB：兄弟 王淑陵（205297）之父／母 王言
          quotation: null
          interpretation_note: 由兄弟关系推断：王淑喬 与 王淑陵 为同胞（CBDB 记「兄」），王淑陵 之父／母即 王淑喬 之父／母。
          source:
            id: s_5WTSeoO6Pkslgjy3OQpETo
            source_type: api_record
            title: 中国历代人物传记资料库：王淑喬（CBDB 331191）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331191&o=json
            external_identifier: CBDB:331191
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6ty1kreQG6ZpsK6jqSaE8y
        status: active
        display_name: 王淑喬
        merged_into_person_id: null
    - claim:
        id: c_qPuVKaPF1YP3upTqJS8Nck
        subject_person_id: p_vQ7CxFfVeDD5gVP5SnofRA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EDzigNMTevNdyF2FMvjkcn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RUjW1CzSZNQaR-EMIlipvn
          claim_id: c_qPuVKaPF1YP3upTqJS8Nck
          source_id: s_9DbTVxmnyiLQM1wVeZ1iOm
          stance: supports
          locator: CBDB：兄弟 王淑陵（205297）之父／母 王言
          quotation: null
          interpretation_note: 由兄弟关系推断：王淑縉 与 王淑陵 为同胞（CBDB 记「兄」），王淑陵 之父／母即 王淑縉 之父／母。
          source:
            id: s_9DbTVxmnyiLQM1wVeZ1iOm
            source_type: api_record
            title: 中国历代人物传记资料库：王淑縉（CBDB 331195）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331195&o=json
            external_identifier: CBDB:331195
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EDzigNMTevNdyF2FMvjkcn
        status: active
        display_name: 王淑縉
        merged_into_person_id: null
    - claim:
        id: c__Dgw29rdHS1o3cCVnekwU7
        subject_person_id: p_vQ7CxFfVeDD5gVP5SnofRA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ry8CxWsNdxGZGd9kVJmqK6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yJ8JeWShY_Be4YsxYQDyjJ
          claim_id: c__Dgw29rdHS1o3cCVnekwU7
          source_id: s_Y3Q4lvIleeP3K9YqGEzbiD
          stance: supports
          locator: CBDB：兄弟 王淑陵（205297）之父／母 王言
          quotation: null
          interpretation_note: 由兄弟关系推断：王淑吉 与 王淑陵 为同胞（CBDB 记「兄」），王淑陵 之父／母即 王淑吉 之父／母。
          source:
            id: s_Y3Q4lvIleeP3K9YqGEzbiD
            source_type: api_record
            title: 中国历代人物传记资料库：王淑吉（CBDB 331197）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331197&o=json
            external_identifier: CBDB:331197
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ry8CxWsNdxGZGd9kVJmqK6
        status: active
        display_name: 王淑吉
        merged_into_person_id: null
    - claim:
        id: c_glaf7088USEeEuAynQzV2E
        subject_person_id: p_vQ7CxFfVeDD5gVP5SnofRA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TwDh5Y5nFZbMTDh7UouR38
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CzXaUERt8lVJu44wqjJjIG
          claim_id: c_glaf7088USEeEuAynQzV2E
          source_id: s_Freo1Su_wQBrRQYaei6Au_
          stance: supports
          locator: CBDB：兄弟 王淑陵（205297）之父／母 王言
          quotation: null
          interpretation_note: 由兄弟关系推断：王淑燦 与 王淑陵 为同胞（CBDB 记「兄」），王淑陵 之父／母即 王淑燦 之父／母。
          source:
            id: s_Freo1Su_wQBrRQYaei6Au_
            source_type: api_record
            title: 中国历代人物传记资料库：王淑燦（CBDB 331196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331196&o=json
            external_identifier: CBDB:331196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TwDh5Y5nFZbMTDh7UouR38
        status: active
        display_name: 王淑燦
        merged_into_person_id: null
    - claim:
        id: c_QdgeFAM-q4uc4wZYxaYeJX
        subject_person_id: p_vQ7CxFfVeDD5gVP5SnofRA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YSAbqVCxegBCEYgRaXR6U2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rmav4-2IVfnY19mRWkNBXO
          claim_id: c_QdgeFAM-q4uc4wZYxaYeJX
          source_id: s_82kHmowwEA6C7r11MFryH6
          stance: supports
          locator: CBDB：兄弟 王淑陵（205297）之父／母 王言
          quotation: null
          interpretation_note: 由兄弟关系推断：王淑旦 与 王淑陵 为同胞（CBDB 记「兄」），王淑陵 之父／母即 王淑旦 之父／母。
          source:
            id: s_82kHmowwEA6C7r11MFryH6
            source_type: api_record
            title: 中国历代人物传记资料库：王淑旦（CBDB 331194）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331194&o=json
            external_identifier: CBDB:331194
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YSAbqVCxegBCEYgRaXR6U2
        status: active
        display_name: 王淑旦
        merged_into_person_id: null
    - claim:
        id: c_a4A8_XiLwFEInufeTvtINY
        subject_person_id: p_vQ7CxFfVeDD5gVP5SnofRA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_x81DgwZM1tc16Nf4JHsvsx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yjBiLRElrwpL5lOitU_OYI
          claim_id: c_a4A8_XiLwFEInufeTvtINY
          source_id: s_es_Q_U-eRbaZaQy1rwPTAw
          stance: supports
          locator: CBDB：兄弟 王淑陵（205297）之父／母 王言
          quotation: null
          interpretation_note: 由兄弟关系推断：王淑曾 与 王淑陵 为同胞（CBDB 记「兄」），王淑陵 之父／母即 王淑曾 之父／母。
          source:
            id: s_es_Q_U-eRbaZaQy1rwPTAw
            source_type: api_record
            title: 中国历代人物传记资料库：王淑曾（CBDB 331193）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331193&o=json
            external_identifier: CBDB:331193
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_x81DgwZM1tc16Nf4JHsvsx
        status: active
        display_name: 王淑曾
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王言 | accepted |
| bio.summary | 王言，明人物。嘉靖四十四年進士，籍贯陽城。（中国历代人物传记资料库 CBDB 331186） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Tffvt8PaRx7qSEiYdDgfFH | 王淑陵 | accepted |
| children | p_6WucMbhkQXJwBzBACZWi7R | 王淑通 | accepted |
| children | p_6ty1kreQG6ZpsK6jqSaE8y | 王淑喬 | accepted |
| children | p_EDzigNMTevNdyF2FMvjkcn | 王淑縉 | accepted |
| children | p_Ry8CxWsNdxGZGd9kVJmqK6 | 王淑吉 | accepted |
| children | p_TwDh5Y5nFZbMTDh7UouR38 | 王淑燦 | accepted |
| children | p_YSAbqVCxegBCEYgRaXR6U2 | 王淑旦 | accepted |
| children | p_x81DgwZM1tc16Nf4JHsvsx | 王淑曾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淑燦（CBDB 331196）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331196&o=json)
- [中国历代人物传记资料库：王淑曾（CBDB 331193）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331193&o=json)
- [中国历代人物传记资料库：王淑旦（CBDB 331194）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331194&o=json)
- [中国历代人物传记资料库：王淑吉（CBDB 331197）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331197&o=json)
- [中国历代人物传记资料库：王淑縉（CBDB 331195）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331195&o=json)
- [中国历代人物传记资料库：王淑喬（CBDB 331191）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331191&o=json)
- [中国历代人物传记资料库：王淑通（CBDB 331192）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331192&o=json)
- [中国历代人物传记资料库：王言（CBDB 331186）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331186&o=json)
