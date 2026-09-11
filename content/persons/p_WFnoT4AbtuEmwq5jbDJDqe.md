---
schema: wang-person/v1
id: p_WFnoT4AbtuEmwq5jbDJDqe
status: active
merged_into: null
display_name: 王恬
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UkJiGY9tKW8tCz3Pr7cKNw
        subject_person_id: p_WFnoT4AbtuEmwq5jbDJDqe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MAeQMvzDVT8n71AYyEroUh
          claim_id: c_UkJiGY9tKW8tCz3Pr7cKNw
          source_id: s_JuL1yAwLhY34c9tGyGgFKS
          stance: supports
          locator: CBDB:38258
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38258）
          source: &a1
            id: s_JuL1yAwLhY34c9tGyGgFKS
            source_type: api_record
            title: 中国历代人物传记资料库：王恬（CBDB 38258）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38258&o=json
            external_identifier: CBDB:38258
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.404Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xaPMdR1b1QEXhrfKjEkPwb
        subject_person_id: p_WFnoT4AbtuEmwq5jbDJDqe
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1110年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LVe3z5PyC4WXPLboFK3jkh
          claim_id: c_xaPMdR1b1QEXhrfKjEkPwb
          source_id: s_JuL1yAwLhY34c9tGyGgFKS
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
        id: c_9seEoe9jNZNq23odgs99ax
        subject_person_id: p_WFnoT4AbtuEmwq5jbDJDqe
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1174年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RMhnTfboSALnZwLK7MAhMi
          claim_id: c_9seEoe9jNZNq23odgs99ax
          source_id: s_JuL1yAwLhY34c9tGyGgFKS
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
        id: c_wtdcBHmgNrHQ6Me4zvFMa1
        subject_person_id: p_WFnoT4AbtuEmwq5jbDJDqe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恬（1110年—1174年），宋人物。籍贯永康，身份为地方士人/鄉紳。（中国历代人物传记资料库 CBDB 38258）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4n17ThJO3jt4joTTD3XhC0
          claim_id: c_wtdcBHmgNrHQ6Me4zvFMa1
          source_id: s_JuL1yAwLhY34c9tGyGgFKS
          stance: supports
          locator: CBDB:38258
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7RYQNaWjmyp7LSfWE4ScWH
        subject_person_id: p_tFBEWUgYjefES2HTxytcTA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WFnoT4AbtuEmwq5jbDJDqe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FeeEclvkMHjErcxkADy6by
          claim_id: c_7RYQNaWjmyp7LSfWE4ScWH
          source_id: s_JuL1yAwLhY34c9tGyGgFKS
          stance: supports
          locator: 全宋文，卷 5677：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tFBEWUgYjefES2HTxytcTA
        status: active
        display_name: 王有朋
        merged_into_person_id: null
  children:
    - claim:
        id: c_8I2eCNvpeigGoQUN5gXx9r
        subject_person_id: p_WFnoT4AbtuEmwq5jbDJDqe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7Q3M1Hbtu1HLXLHWBytBjr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SxKgi67JXG1l6KB1W9xbIn
          claim_id: c_8I2eCNvpeigGoQUN5gXx9r
          source_id: s_BXJX6woFPmQAM5SSBWFP8Y
          stance: supports
          locator: 全宋文，卷 5677：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BXJX6woFPmQAM5SSBWFP8Y
            source_type: api_record
            title: 中国历代人物传记资料库：王穎（CBDB 385852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385852&o=json
            external_identifier: CBDB:385852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.884Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7Q3M1Hbtu1HLXLHWBytBjr
        status: active
        display_name: 王穎
        merged_into_person_id: null
    - claim:
        id: c_i2Hzu1htltf3SQyhlA7Xi7
        subject_person_id: p_WFnoT4AbtuEmwq5jbDJDqe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_atRhzDs4oFYS811oM1atCv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5pMc5_c3oMKvsvWnFnffEO
          claim_id: c_i2Hzu1htltf3SQyhlA7Xi7
          source_id: s_xRkNTXpF2k4ZKYiz3nN2ng
          stance: supports
          locator: 全宋文，卷 5677：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xRkNTXpF2k4ZKYiz3nN2ng
            source_type: api_record
            title: 中国历代人物传记资料库：王碩（CBDB 384841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384841&o=json
            external_identifier: CBDB:384841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.876Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_atRhzDs4oFYS811oM1atCv
        status: active
        display_name: 王碩
        merged_into_person_id: null
    - claim:
        id: c_u5nDoKPA6TxuSSjMruOceW
        subject_person_id: p_WFnoT4AbtuEmwq5jbDJDqe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PcEuQQgHX77JBLMDejCXRZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cT63IdMkqkqJkabjyOUeLl
          claim_id: c_u5nDoKPA6TxuSSjMruOceW
          source_id: s_C1b7HWg38WNvktJWFRJvqU
          stance: supports
          locator: 全宋文，卷 5677：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_C1b7HWg38WNvktJWFRJvqU
            source_type: api_record
            title: 中国历代人物传记资料库：王頎（CBDB 385854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385854&o=json
            external_identifier: CBDB:385854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.885Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PcEuQQgHX77JBLMDejCXRZ
        status: active
        display_name: 王頎
        merged_into_person_id: null
    - claim:
        id: c_qNo4Qw2ziKAMmZX7KsGNyy
        subject_person_id: p_WFnoT4AbtuEmwq5jbDJDqe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QP3NwvKZSaBQQRph12F9S8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qbswn1eoZ4hPNxteOYxn8A
          claim_id: c_qNo4Qw2ziKAMmZX7KsGNyy
          source_id: s_bTSXycdJZLGF666BU27ZvF
          stance: supports
          locator: 全宋文，卷 5677：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bTSXycdJZLGF666BU27ZvF
            source_type: api_record
            title: 中国历代人物传记资料库：王頤（CBDB 34068）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34068&o=json
            external_identifier: CBDB:34068
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.076Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QP3NwvKZSaBQQRph12F9S8
        status: active
        display_name: 王頤
        merged_into_person_id: null
    - claim:
        id: c_U2PIitXyiGxPEyM4DRo--q
        subject_person_id: p_WFnoT4AbtuEmwq5jbDJDqe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MYmCtcLQMLLVJCWEXqgWgw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2z9Cfo0WwMeL8mUY5XBfLN
          claim_id: c_U2PIitXyiGxPEyM4DRo--q
          source_id: s_v81pFNAkQR56MkBoeoUH7Y
          stance: supports
          locator: 全宋文，卷 5677：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_v81pFNAkQR56MkBoeoUH7Y
            source_type: api_record
            title: 中国历代人物传记资料库：王覬（CBDB 385853）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385853&o=json
            external_identifier: CBDB:385853
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:21.809Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_MYmCtcLQMLLVJCWEXqgWgw
        status: active
        display_name: 王覬
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_0RgZo2eSiiOKVDUbAZKevd
        subject_person_id: p_WFnoT4AbtuEmwq5jbDJDqe
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_1hRe4yJwx1cWuPZopDscLA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c2g9hkbZWqPsW4j7v5Txby
          claim_id: c_0RgZo2eSiiOKVDUbAZKevd
          source_id: s_77sqBT_qLHVQ6H2yiw2hK5
          stance: supports
          locator: 全宋文，卷 5677：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_77sqBT_qLHVQ6H2yiw2hK5
            source_type: api_record
            title: 中国历代人物传记资料库：呂氏 (呂師傳女)（CBDB 385851）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385851&o=json
            external_identifier: CBDB:385851
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1hRe4yJwx1cWuPZopDscLA
        status: active
        display_name: 呂氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王恬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恬 | accepted |
| birth.date | 1110年 | accepted |
| death.date | 1174年 | accepted |
| bio.summary | 王恬（1110年—1174年），宋人物。籍贯永康，身份为地方士人/鄉紳。（中国历代人物传记资料库 CBDB 38258） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tFBEWUgYjefES2HTxytcTA | 王有朋 | accepted |
| children | p_7Q3M1Hbtu1HLXLHWBytBjr | 王穎 | accepted |
| children | p_atRhzDs4oFYS811oM1atCv | 王碩 | accepted |
| children | p_PcEuQQgHX77JBLMDejCXRZ | 王頎 | accepted |
| children | p_QP3NwvKZSaBQQRph12F9S8 | 王頤 | accepted |
| children | p_MYmCtcLQMLLVJCWEXqgWgw | 王覬 | accepted |
| spouses | p_1hRe4yJwx1cWuPZopDscLA | 呂氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：呂氏 (呂師傳女)（CBDB 385851）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385851&o=json)
- [中国历代人物传记资料库：王覬（CBDB 385853）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385853&o=json)
- [中国历代人物传记资料库：王頎（CBDB 385854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385854&o=json)
- [中国历代人物传记资料库：王碩（CBDB 384841）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384841&o=json)
- [中国历代人物传记资料库：王恬（CBDB 38258）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38258&o=json)
- [中国历代人物传记资料库：王頤（CBDB 34068）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34068&o=json)
- [中国历代人物传记资料库：王穎（CBDB 385852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385852&o=json)
