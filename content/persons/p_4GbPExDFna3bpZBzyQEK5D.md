---
schema: wang-person/v1
id: p_4GbPExDFna3bpZBzyQEK5D
status: active
merged_into: null
display_name: 王崇古
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GxQLZXGS8KTPwD5WqKDSQN
        subject_person_id: p_4GbPExDFna3bpZBzyQEK5D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇古
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6YyALHRGkGdqUi46BnqUar
          claim_id: c_GxQLZXGS8KTPwD5WqKDSQN
          source_id: s_MU5GnZoDbPu96obnw6Nc5Z
          stance: supports
          locator: CBDB:124981
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（124981）
          source: &a1
            id: s_MU5GnZoDbPu96obnw6Nc5Z
            source_type: api_record
            title: 中国历代人物传记资料库：王崇古（CBDB 124981）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124981&o=json
            external_identifier: CBDB:124981
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.946Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4rBsozfnJRd65ToAszw8W9
        subject_person_id: p_4GbPExDFna3bpZBzyQEK5D
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1515年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tFicTwaKP7SgUZwWVTP7pF
          claim_id: c_4rBsozfnJRd65ToAszw8W9
          source_id: s_MU5GnZoDbPu96obnw6Nc5Z
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
        id: c_LsTimnG7ET1g91U9JRqvc4
        subject_person_id: p_4GbPExDFna3bpZBzyQEK5D
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1588年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_axpJYj7KrmwwHeoh22vb48
          claim_id: c_LsTimnG7ET1g91U9JRqvc4
          source_id: s_MU5GnZoDbPu96obnw6Nc5Z
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
        id: c_GrejMpUrv67AisT629Ps17
        subject_person_id: p_4GbPExDFna3bpZBzyQEK5D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gQRhxsL9VtmPSZqfCSJXgG
          claim_id: c_GrejMpUrv67AisT629Ps17
          source_id: s_MU5GnZoDbPu96obnw6Nc5Z
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_AG-cDsyP1fRpMCUDwEoa_Y
        subject_person_id: p_Gp6LFTibhfU4rxEHuRWuDg
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_4GbPExDFna3bpZBzyQEK5D
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_llAic8dTI3IJDj_BA5qqWp
          claim_id: c_AG-cDsyP1fRpMCUDwEoa_Y
          source_id: s_dLXVrEahMyQM54gQjR16G9
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第八十七名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dLXVrEahMyQM54gQjR16G9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：張氏（302972）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302972&o=json
            external_identifier: CBDB:302972
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:04.733Z
            metadata_json: null
      object_person:
        id: p_Gp6LFTibhfU4rxEHuRWuDg
        status: active
        display_name: 张氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_0rYTYuFWaZm5bNmceqFevx
        subject_person_id: p_QF2bE4nFJ23UCeYuUNVU4y
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4GbPExDFna3bpZBzyQEK5D
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a8I7NYIPKYBQ1YMNdZa7-C
          claim_id: c_0rYTYuFWaZm5bNmceqFevx
          source_id: s_vH64iAiKp2gTrnJMBPVsxH
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第八十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vH64iAiKp2gTrnJMBPVsxH
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王孟華（302966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302966&o=json
            external_identifier: CBDB:302966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_QF2bE4nFJ23UCeYuUNVU4y
        status: active
        display_name: 王孟华
        merged_into_person_id: null
    - claim:
        id: c_Cpa721XbOfRFGIPLHS8u9c
        subject_person_id: p_ptMfEt1rAT4WiPXRdKXa9c
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4GbPExDFna3bpZBzyQEK5D
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2eWw6_6AxCLeiT6Rfy_RsC
          claim_id: c_Cpa721XbOfRFGIPLHS8u9c
          source_id: s_McGXGnhaqmXfDMKXXBUtoM
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第八十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_McGXGnhaqmXfDMKXXBUtoM
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王馨（302967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302967&o=json
            external_identifier: CBDB:302967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:20.654Z
            metadata_json: null
      object_person:
        id: p_ptMfEt1rAT4WiPXRdKXa9c
        status: active
        display_name: 王馨
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_DLwnihAdMh_dJAItQjOHsP
        subject_person_id: p_4GbPExDFna3bpZBzyQEK5D
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6Fd9RZJkiLMNbHMJLar9HR
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QXYiRD1NJ2I3T1KNBWxbUJ
          claim_id: c_DLwnihAdMh_dJAItQjOHsP
          source_id: s_DdbCU2KVuBwpCH1KFYmszP
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），14977：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DdbCU2KVuBwpCH1KFYmszP
            source_type: api_record
            title: 中国历代人物传记资料库：王之模（CBDB 529289）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=529289&o=json
            external_identifier: CBDB:529289
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.349Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6Fd9RZJkiLMNbHMJLar9HR
        status: active
        display_name: 王之模
        merged_into_person_id: null
    - claim:
        id: c_lFVYjvx7FkyjGaLRO_oClS
        subject_person_id: p_4GbPExDFna3bpZBzyQEK5D
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BBf4BFLNNhaDseWeW653WQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aCJvrYlTgbFfNPVyCYGrEX
          claim_id: c_lFVYjvx7FkyjGaLRO_oClS
          source_id: s_xHNrFkJi1DiR75c74pA4xN
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），14977：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xHNrFkJi1DiR75c74pA4xN
            source_type: api_record
            title: 中国历代人物传记资料库：王之禎（CBDB 529288）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=529288&o=json
            external_identifier: CBDB:529288
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.349Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BBf4BFLNNhaDseWeW653WQ
        status: active
        display_name: 王之禎
        merged_into_person_id: null
    - claim:
        id: c_CfiUGyoELnoUSFdYnr1RL5
        subject_person_id: p_4GbPExDFna3bpZBzyQEK5D
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dfv7c6RbwBEAB3F1H21BXL
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yzewPx7rzOs0Kp7QmG7R1J
          claim_id: c_CfiUGyoELnoUSFdYnr1RL5
          source_id: s_CQ429q9NH3ibtzE9HU7xrF
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），14977：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CQ429q9NH3ibtzE9HU7xrF
            source_type: api_record
            title: 中国历代人物传记资料库：王隺孫（CBDB 529291）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=529291&o=json
            external_identifier: CBDB:529291
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.352Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dfv7c6RbwBEAB3F1H21BXL
        status: active
        display_name: 王隺孫
        merged_into_person_id: null
    - claim:
        id: c_LFCBXjsHztRxKB1p5vYr6x
        subject_person_id: p_4GbPExDFna3bpZBzyQEK5D
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_J4EJLXzMujtp2CmxhKR6dv
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5FrVXoIp7aT0Ik-YotgR6w
          claim_id: c_LFCBXjsHztRxKB1p5vYr6x
          source_id: s_xkEMtf9JPrCRNY41pKp8sj
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），14977：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xkEMtf9JPrCRNY41pKp8sj
            source_type: api_record
            title: 中国历代人物传记资料库：王宗孫（CBDB 529290）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=529290&o=json
            external_identifier: CBDB:529290
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.351Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_J4EJLXzMujtp2CmxhKR6dv
        status: active
        display_name: 王宗孫
        merged_into_person_id: null
  other: []
---

# 王崇古

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇古 | accepted |
| birth.date | 1515年 | accepted |
| death.date | 1588年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Gp6LFTibhfU4rxEHuRWuDg | 张氏 | accepted |
| ancestors | p_QF2bE4nFJ23UCeYuUNVU4y | 王孟华 | accepted |
| ancestors | p_ptMfEt1rAT4WiPXRdKXa9c | 王馨 | accepted |
| descendants | p_6Fd9RZJkiLMNbHMJLar9HR | 王之模 | accepted |
| descendants | p_BBf4BFLNNhaDseWeW653WQ | 王之禎 | accepted |
| descendants | p_dfv7c6RbwBEAB3F1H21BXL | 王隺孫 | accepted |
| descendants | p_J4EJLXzMujtp2CmxhKR6dv | 王宗孫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇古（CBDB 124981）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124981&o=json)
- [中国历代人物传记资料库：王隺孫（CBDB 529291）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=529291&o=json)
- [中国历代人物传记资料库：王之模（CBDB 529289）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=529289&o=json)
- [中国历代人物传记资料库：王之禎（CBDB 529288）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=529288&o=json)
- [中国历代人物传记资料库：王宗孫（CBDB 529290）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=529290&o=json)
- [CBDB 中国历代人物传记资料库：王孟華（302966）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302966&o=json)
- [CBDB 中国历代人物传记资料库：王馨（302967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302967&o=json)
- [CBDB 中国历代人物传记资料库：張氏（302972）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302972&o=json)
