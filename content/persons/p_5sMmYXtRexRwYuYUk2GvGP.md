---
schema: wang-person/v1
id: p_5sMmYXtRexRwYuYUk2GvGP
status: active
merged_into: null
display_name: 王允文
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_abnWPVkWBaLEVE3YR65dNw
        subject_person_id: p_5sMmYXtRexRwYuYUk2GvGP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dEDKNwCXLrRLbXn5yAHu9v
          claim_id: c_abnWPVkWBaLEVE3YR65dNw
          source_id: s_EGuP7RatW83eAhWrCGqvxP
          stance: supports
          locator: CBDB:215078
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（215078）
          source: &a1
            id: s_EGuP7RatW83eAhWrCGqvxP
            source_type: api_record
            title: 中国历代人物传记资料库：王允文（CBDB 215078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215078&o=json
            external_identifier: CBDB:215078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.180Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ae1W3zGDMt7MaxiCmd3E7m
        subject_person_id: p_5sMmYXtRexRwYuYUk2GvGP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允文，明人物。萬曆二年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 215078）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hY6a698Jo1VbbWlCsk4Y04
          claim_id: c_Ae1W3zGDMt7MaxiCmd3E7m
          source_id: s_EGuP7RatW83eAhWrCGqvxP
          stance: supports
          locator: CBDB:215078
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_j2NwN8nyXrjP3pOENtZ3Cj
        subject_person_id: p_5sMmYXtRexRwYuYUk2GvGP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Uu3PhDPTRD4oQGaMJP7i1y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fzDgg2Xm8C_VpWdHi4646b
          claim_id: c_j2NwN8nyXrjP3pOENtZ3Cj
          source_id: s_EGuP7RatW83eAhWrCGqvxP
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百八十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Uu3PhDPTRD4oQGaMJP7i1y
        status: active
        display_name: 王繼明
        merged_into_person_id: null
    - claim:
        id: c_cB1TTCRSdYjHaUB9pv_UTr
        subject_person_id: p_5sMmYXtRexRwYuYUk2GvGP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2FWo7seiKACem4WcFHvSY3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YJt5ssiWo2KDu1QhcjAmZS
          claim_id: c_cB1TTCRSdYjHaUB9pv_UTr
          source_id: s_cQtLFcYbFRYTzjHtUfnrtD
          stance: supports
          locator: CBDB：兄弟 王繼明（126880）之父／母 王允文
          quotation: null
          interpretation_note: 由兄弟关系推断：王繼旦 与 王繼明 为同胞（CBDB 记「兄」），王繼明 之父／母即 王繼旦 之父／母。
          source:
            id: s_cQtLFcYbFRYTzjHtUfnrtD
            source_type: api_record
            title: 中国历代人物传记资料库：王繼旦（CBDB 215085）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215085&o=json
            external_identifier: CBDB:215085
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2FWo7seiKACem4WcFHvSY3
        status: active
        display_name: 王繼旦
        merged_into_person_id: null
    - claim:
        id: c_ESpEJZBUudql9TzCXIJnn-
        subject_person_id: p_5sMmYXtRexRwYuYUk2GvGP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7orRPC4dAUdKkVVhgcBrpS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A0ImtQ7-TFShYvpWuc93CR
          claim_id: c_ESpEJZBUudql9TzCXIJnn-
          source_id: s_TY9zkZ70goHZWGt84kNGv8
          stance: supports
          locator: CBDB：兄弟 王繼明（126880）之父／母 王允文
          quotation: null
          interpretation_note: 由兄弟关系推断：王繼昭 与 王繼明 为同胞（CBDB 记「兄」），王繼明 之父／母即 王繼昭 之父／母。
          source:
            id: s_TY9zkZ70goHZWGt84kNGv8
            source_type: api_record
            title: 中国历代人物传记资料库：王繼昭（CBDB 215086）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215086&o=json
            external_identifier: CBDB:215086
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7orRPC4dAUdKkVVhgcBrpS
        status: active
        display_name: 王繼昭
        merged_into_person_id: null
    - claim:
        id: c_tiBIgj3jSMCOIbejRz_NEU
        subject_person_id: p_5sMmYXtRexRwYuYUk2GvGP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RkgPAAzN6XYGaHpH5KLt3F
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FDWAu1pSjZ9t0JLRDPPDPa
          claim_id: c_tiBIgj3jSMCOIbejRz_NEU
          source_id: s_cIkeAvahB6bNzrxVoblS6B
          stance: supports
          locator: CBDB：兄弟 王繼明（126880）之父／母 王允文
          quotation: null
          interpretation_note: 由兄弟关系推断：王如珪 与 王繼明 为同胞（CBDB 记「弟」），王繼明 之父／母即 王如珪 之父／母。
          source:
            id: s_cIkeAvahB6bNzrxVoblS6B
            source_type: api_record
            title: 中国历代人物传记资料库：王如珪（CBDB 215082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215082&o=json
            external_identifier: CBDB:215082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RkgPAAzN6XYGaHpH5KLt3F
        status: active
        display_name: 王如珪
        merged_into_person_id: null
    - claim:
        id: c_wUZ9LU4OuP63QrxWW1TIhM
        subject_person_id: p_5sMmYXtRexRwYuYUk2GvGP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Yra9TSxJfSZYYESyN2uWoA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q2u_l1Cwv_PTCvqDrl0DIw
          claim_id: c_wUZ9LU4OuP63QrxWW1TIhM
          source_id: s_54bPpTc7jN5cpSNzhOBgfa
          stance: supports
          locator: CBDB：兄弟 王繼明（126880）之父／母 王允文
          quotation: null
          interpretation_note: 由兄弟关系推断：王如璧 与 王繼明 为同胞（CBDB 记「兄」），王繼明 之父／母即 王如璧 之父／母。
          source:
            id: s_54bPpTc7jN5cpSNzhOBgfa
            source_type: api_record
            title: 中国历代人物传记资料库：王如璧（CBDB 215084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215084&o=json
            external_identifier: CBDB:215084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Yra9TSxJfSZYYESyN2uWoA
        status: active
        display_name: 王如璧
        merged_into_person_id: null
    - claim:
        id: c_II8QisbTWXk-_XAs9plvHK
        subject_person_id: p_5sMmYXtRexRwYuYUk2GvGP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xBW1ogj6ARr6cywSv1Y65v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VQ4yngDGImu-Tw1e-fH5-H
          claim_id: c_II8QisbTWXk-_XAs9plvHK
          source_id: s_DYLFXkqexIqKtxeWnxCAK6
          stance: supports
          locator: CBDB：兄弟 王繼明（126880）之父／母 王允文
          quotation: null
          interpretation_note: 由兄弟关系推断：王光蘊 与 王繼明 为同胞（CBDB 记「弟」），王繼明 之父／母即 王光蘊 之父／母。
          source:
            id: s_DYLFXkqexIqKtxeWnxCAK6
            source_type: api_record
            title: 中国历代人物传记资料库：王光蘊（CBDB 215083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215083&o=json
            external_identifier: CBDB:215083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xBW1ogj6ARr6cywSv1Y65v
        status: active
        display_name: 王光蘊
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王允文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王允文 | accepted |
| bio.summary | 王允文，明人物。萬曆二年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 215078） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Uu3PhDPTRD4oQGaMJP7i1y | 王繼明 | accepted |
| children | p_2FWo7seiKACem4WcFHvSY3 | 王繼旦 | accepted |
| children | p_7orRPC4dAUdKkVVhgcBrpS | 王繼昭 | accepted |
| children | p_RkgPAAzN6XYGaHpH5KLt3F | 王如珪 | accepted |
| children | p_Yra9TSxJfSZYYESyN2uWoA | 王如璧 | accepted |
| children | p_xBW1ogj6ARr6cywSv1Y65v | 王光蘊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王光蘊（CBDB 215083）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215083&o=json)
- [中国历代人物传记资料库：王繼旦（CBDB 215085）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215085&o=json)
- [中国历代人物传记资料库：王繼昭（CBDB 215086）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215086&o=json)
- [中国历代人物传记资料库：王如璧（CBDB 215084）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215084&o=json)
- [中国历代人物传记资料库：王如珪（CBDB 215082）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215082&o=json)
- [中国历代人物传记资料库：王允文（CBDB 215078）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215078&o=json)
