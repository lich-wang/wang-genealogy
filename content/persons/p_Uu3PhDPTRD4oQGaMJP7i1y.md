---
schema: wang-person/v1
id: p_Uu3PhDPTRD4oQGaMJP7i1y
status: active
merged_into: null
display_name: 王繼明
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9DixHM7YJS5np7ka6wiUsW
        subject_person_id: p_Uu3PhDPTRD4oQGaMJP7i1y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zN1g7BSG6pCjn4gcTe2Weh
          claim_id: c_9DixHM7YJS5np7ka6wiUsW
          source_id: s_SDp6kwAfqUvHiiZnG3xNsg
          stance: supports
          locator: CBDB:126880
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126880）
          source: &a1
            id: s_SDp6kwAfqUvHiiZnG3xNsg
            source_type: api_record
            title: 中国历代人物传记资料库：王繼明（CBDB 126880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126880&o=json
            external_identifier: CBDB:126880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.281Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tVn7XEJbsmGvv3s3uChgVu
        subject_person_id: p_Uu3PhDPTRD4oQGaMJP7i1y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼明，明人物。明清進士進士，籍贯永嘉，入仕進士，曾任兵備副使、縣令、知府。（中国历代人物传记资料库 CBDB 126880）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qq-Qk84cna8NfUwJZXAlLG
          claim_id: c_tVn7XEJbsmGvv3s3uChgVu
          source_id: s_SDp6kwAfqUvHiiZnG3xNsg
          stance: supports
          locator: CBDB:126880
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source:
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
      object_person:
        id: p_5sMmYXtRexRwYuYUk2GvGP
        status: active
        display_name: 王允文
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_wLO9pezThhU0UTRL9MmKcJ
        subject_person_id: p_BLobiWtWVSEQBtE86WxJzT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Uu3PhDPTRD4oQGaMJP7i1y
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9UovoVbjKY3inURtmJl6Dy
          claim_id: c_wLO9pezThhU0UTRL9MmKcJ
          source_id: s_1utwdnLN96H8ziLntjTCoV
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百八十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1utwdnLN96H8ziLntjTCoV
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 215077）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215077&o=json
            external_identifier: CBDB:215077
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.178Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BLobiWtWVSEQBtE86WxJzT
        status: active
        display_name: 王儼
        merged_into_person_id: null
    - claim:
        id: c_D__INUR-THNxcq229uOPxW
        subject_person_id: p_DwDt7yKjJo2QFYGKF8ki6V
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Uu3PhDPTRD4oQGaMJP7i1y
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LIw1TKildcIvYgWESavVf7
          claim_id: c_D__INUR-THNxcq229uOPxW
          source_id: s_pSXS8zHCq3mq2NrJ77YuaZ
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百八十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pSXS8zHCq3mq2NrJ77YuaZ
            source_type: api_record
            title: 中国历代人物传记资料库：王楫（CBDB 215076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215076&o=json
            external_identifier: CBDB:215076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.176Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DwDt7yKjJo2QFYGKF8ki6V
        status: active
        display_name: 王楫
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_ZYot-DGFsqowe_P6VwOmvu
        subject_person_id: p_2FWo7seiKACem4WcFHvSY3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Uu3PhDPTRD4oQGaMJP7i1y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EYrsOo4_eSpwsrsX3Ltcke
          claim_id: c_ZYot-DGFsqowe_P6VwOmvu
          source_id: s_cQtLFcYbFRYTzjHtUfnrtD
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126880 王繼明）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_5G1-nB_z8FwrYDSRugH4Ro
        subject_person_id: p_7orRPC4dAUdKkVVhgcBrpS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Uu3PhDPTRD4oQGaMJP7i1y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j9bbJT9Rx3RNQb75J7v2d5
          claim_id: c_5G1-nB_z8FwrYDSRugH4Ro
          source_id: s_TY9zkZ70goHZWGt84kNGv8
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126880 王繼明）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_I99qDBjv-orzPWycK3tI1X
        subject_person_id: p_RkgPAAzN6XYGaHpH5KLt3F
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Uu3PhDPTRD4oQGaMJP7i1y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y1G8JO7YVEAGBKCpa5795p
          claim_id: c_I99qDBjv-orzPWycK3tI1X
          source_id: s_cIkeAvahB6bNzrxVoblS6B
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126880 王繼明）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_UHRTa4PaBxDuWwXBDjnQVB
        subject_person_id: p_Uu3PhDPTRD4oQGaMJP7i1y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Yra9TSxJfSZYYESyN2uWoA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M_b0la9VITlev5mvuTxnKC
          claim_id: c_UHRTa4PaBxDuWwXBDjnQVB
          source_id: s_54bPpTc7jN5cpSNzhOBgfa
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126880 王繼明）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_n7QVYsJg3hWoI-ppfdI2J5
        subject_person_id: p_Uu3PhDPTRD4oQGaMJP7i1y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xBW1ogj6ARr6cywSv1Y65v
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WqAp4A9_tkyClm03wgXI4M
          claim_id: c_n7QVYsJg3hWoI-ppfdI2J5
          source_id: s_DYLFXkqexIqKtxeWnxCAK6
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126880 王繼明）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王繼明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼明 | accepted |
| bio.summary | 王繼明，明人物。明清進士進士，籍贯永嘉，入仕進士，曾任兵備副使、縣令、知府。（中国历代人物传记资料库 CBDB 126880） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5sMmYXtRexRwYuYUk2GvGP | 王允文 | accepted |
| ancestors | p_BLobiWtWVSEQBtE86WxJzT | 王儼 | accepted |
| ancestors | p_DwDt7yKjJo2QFYGKF8ki6V | 王楫 | accepted |
| other | p_2FWo7seiKACem4WcFHvSY3 | 王繼旦 | accepted |
| other | p_7orRPC4dAUdKkVVhgcBrpS | 王繼昭 | accepted |
| other | p_RkgPAAzN6XYGaHpH5KLt3F | 王如珪 | accepted |
| other | p_Yra9TSxJfSZYYESyN2uWoA | 王如璧 | accepted |
| other | p_xBW1ogj6ARr6cywSv1Y65v | 王光蘊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王光蘊（CBDB 215083）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215083&o=json)
- [中国历代人物传记资料库：王楫（CBDB 215076）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215076&o=json)
- [中国历代人物传记资料库：王繼旦（CBDB 215085）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215085&o=json)
- [中国历代人物传记资料库：王繼明（CBDB 126880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126880&o=json)
- [中国历代人物传记资料库：王繼昭（CBDB 215086）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215086&o=json)
- [中国历代人物传记资料库：王如璧（CBDB 215084）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215084&o=json)
- [中国历代人物传记资料库：王如珪（CBDB 215082）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215082&o=json)
- [中国历代人物传记资料库：王儼（CBDB 215077）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215077&o=json)
- [中国历代人物传记资料库：王允文（CBDB 215078）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215078&o=json)
