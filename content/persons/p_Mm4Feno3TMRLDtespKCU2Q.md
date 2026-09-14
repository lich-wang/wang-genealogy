---
schema: wang-person/v1
id: p_Mm4Feno3TMRLDtespKCU2Q
status: active
merged_into: null
display_name: 王翰臣
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LQEGhkaR8Ca6QwqqCY2CA1
        subject_person_id: p_Mm4Feno3TMRLDtespKCU2Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翰臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dmiopANrE1ukJNN68RoiGJ
          claim_id: c_LQEGhkaR8Ca6QwqqCY2CA1
          source_id: s_5sU9d7FMNJD9YM66ax9J7G
          stance: supports
          locator: CBDB:202016
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202016）
          source: &a1
            id: s_5sU9d7FMNJD9YM66ax9J7G
            source_type: api_record
            title: 中国历代人物传记资料库：王翰臣（CBDB 202016）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202016&o=json
            external_identifier: CBDB:202016
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.710Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_z9cfwM3UR1YY2kPUzARC9G
        subject_person_id: p_Mm4Feno3TMRLDtespKCU2Q
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1464年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CHAeXqSgi8aNtFRzRMzF37
          claim_id: c_z9cfwM3UR1YY2kPUzARC9G
          source_id: s_5sU9d7FMNJD9YM66ax9J7G
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
        id: c_d89wWU5DZ2QiGhDgQn7QVo
        subject_person_id: p_Mm4Feno3TMRLDtespKCU2Q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翰臣（生于1464年），明人物。明清進士進士，籍贯渠縣，入仕進士。（中国历代人物传记资料库 CBDB 202016）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YWIckpQSNeEqsZ22x5tHhd
          claim_id: c_d89wWU5DZ2QiGhDgQn7QVo
          source_id: s_5sU9d7FMNJD9YM66ax9J7G
          stance: supports
          locator: CBDB:202016
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Hq43fe_apg4yW8eizEcUTW
        subject_person_id: p_sp87Q8ktX7kHeJfazKTe3u
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Mm4Feno3TMRLDtespKCU2Q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ydsbDRHtcSHRB-MSKkcrcF
          claim_id: c_Hq43fe_apg4yW8eizEcUTW
          source_id: s_hzTHHrMFUApyr8aFpp62mv
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百三十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hzTHHrMFUApyr8aFpp62mv
            source_type: api_record
            title: 中国历代人物传记资料库：王琛（CBDB 282040）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282040&o=json
            external_identifier: CBDB:282040
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.076Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_sp87Q8ktX7kHeJfazKTe3u
        status: active
        display_name: 王琛
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_8tFTYCq7P0uXOEMDVn0H2U
        subject_person_id: p_Bhhn1fMJ8jMbPoeht3Ss3K
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Mm4Feno3TMRLDtespKCU2Q
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zeKGlNcvj9l26go6WKipuY
          claim_id: c_8tFTYCq7P0uXOEMDVn0H2U
          source_id: s_AeiEHY4g1rMD3XPmBVhxkZ
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百三十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AeiEHY4g1rMD3XPmBVhxkZ
            source_type: api_record
            title: 中国历代人物传记资料库：王原（CBDB 282038）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282038&o=json
            external_identifier: CBDB:282038
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.075Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Bhhn1fMJ8jMbPoeht3Ss3K
        status: active
        display_name: 王原
        merged_into_person_id: null
    - claim:
        id: c_T10DmJOwEpQLIO7nmRPZ7v
        subject_person_id: p_CjPAUgQ79UCV7hnFx1eT69
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Mm4Feno3TMRLDtespKCU2Q
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2UaeV0Vbs7hUzkf4Nw8V3_
          claim_id: c_T10DmJOwEpQLIO7nmRPZ7v
          source_id: s_Wh8xeRB4urrFxNMHJT5TR9
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百三十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Wh8xeRB4urrFxNMHJT5TR9
            source_type: api_record
            title: 中国历代人物传记资料库：王子明（CBDB 282039）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282039&o=json
            external_identifier: CBDB:282039
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.076Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CjPAUgQ79UCV7hnFx1eT69
        status: active
        display_name: 王子明
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_j8WvNkT4cJTcLxFJHKuQEZ
        subject_person_id: p_KoUEahydEBZ5RR5FbMUezS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Mm4Feno3TMRLDtespKCU2Q
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9rZyB3lBuQeDJjOJamOAdB
          claim_id: c_j8WvNkT4cJTcLxFJHKuQEZ
          source_id: s_KsRHobB--pzVIPmmf8h2zs
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202016 王翰臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KsRHobB--pzVIPmmf8h2zs
            source_type: api_record
            title: 中国历代人物传记资料库：王守臣（CBDB 282047）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282047&o=json
            external_identifier: CBDB:282047
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KoUEahydEBZ5RR5FbMUezS
        status: active
        display_name: 王守臣
        merged_into_person_id: null
    - claim:
        id: c_ALO8MnV49EdcwmXX6NUlU4
        subject_person_id: p_Kvt6vcEt4vWYbu9NBw1aMi
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Mm4Feno3TMRLDtespKCU2Q
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qU-7Ya6zfUp1GSFxM_GjUx
          claim_id: c_ALO8MnV49EdcwmXX6NUlU4
          source_id: s_uU-RWGMPciSBJvW1p8z5-G
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202016 王翰臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uU-RWGMPciSBJvW1p8z5-G
            source_type: api_record
            title: 中国历代人物传记资料库：王甸臣（CBDB 282049）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282049&o=json
            external_identifier: CBDB:282049
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Kvt6vcEt4vWYbu9NBw1aMi
        status: active
        display_name: 王甸臣
        merged_into_person_id: null
    - claim:
        id: c_WI3T8t2n95QkqFhrXEuuOa
        subject_person_id: p_Mm4Feno3TMRLDtespKCU2Q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_niPWz32Lswxcn9bVNZ8Pxx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q3im5H55q_5Wf9Ei7rgFi4
          claim_id: c_WI3T8t2n95QkqFhrXEuuOa
          source_id: s_oxOil9jBbh5Svu6_fEJUlu
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202016 王翰臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oxOil9jBbh5Svu6_fEJUlu
            source_type: api_record
            title: 中国历代人物传记资料库：王親臣（CBDB 282046）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282046&o=json
            external_identifier: CBDB:282046
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_niPWz32Lswxcn9bVNZ8Pxx
        status: active
        display_name: 王親臣
        merged_into_person_id: null
    - claim:
        id: c_iHfJztjaMgJAkJhu_dhzPj
        subject_person_id: p_Mm4Feno3TMRLDtespKCU2Q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rRx92rsgj5B1Dfj7HhD6jF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OhuGxJuLN2CZOhpaDqclMb
          claim_id: c_iHfJztjaMgJAkJhu_dhzPj
          source_id: s_6gwtvM5bNLQPmxbdih9gTu
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202016 王翰臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6gwtvM5bNLQPmxbdih9gTu
            source_type: api_record
            title: 中国历代人物传记资料库：王拱臣（CBDB 282045）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282045&o=json
            external_identifier: CBDB:282045
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rRx92rsgj5B1Dfj7HhD6jF
        status: active
        display_name: 王拱臣
        merged_into_person_id: null
    - claim:
        id: c_3A2aHTSQr0avrJ-xbmbpQC
        subject_person_id: p_Mm4Feno3TMRLDtespKCU2Q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_snWxZhRQPAWrkTPkPaDJFQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g4N0eQfUkA6N7SLyNwZruf
          claim_id: c_3A2aHTSQr0avrJ-xbmbpQC
          source_id: s_lgjm_7BdWPnRtv9ccNSmVa
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202016 王翰臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_lgjm_7BdWPnRtv9ccNSmVa
            source_type: api_record
            title: 中国历代人物传记资料库：王畿臣（CBDB 282048）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282048&o=json
            external_identifier: CBDB:282048
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_snWxZhRQPAWrkTPkPaDJFQ
        status: active
        display_name: 王畿臣
        merged_into_person_id: null
---

# 王翰臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翰臣 | accepted |
| birth.date | 1464年 | accepted |
| bio.summary | 王翰臣（生于1464年），明人物。明清進士進士，籍贯渠縣，入仕進士。（中国历代人物传记资料库 CBDB 202016） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sp87Q8ktX7kHeJfazKTe3u | 王琛 | accepted |
| ancestors | p_Bhhn1fMJ8jMbPoeht3Ss3K | 王原 | accepted |
| ancestors | p_CjPAUgQ79UCV7hnFx1eT69 | 王子明 | accepted |
| other | p_KoUEahydEBZ5RR5FbMUezS | 王守臣 | accepted |
| other | p_Kvt6vcEt4vWYbu9NBw1aMi | 王甸臣 | accepted |
| other | p_niPWz32Lswxcn9bVNZ8Pxx | 王親臣 | accepted |
| other | p_rRx92rsgj5B1Dfj7HhD6jF | 王拱臣 | accepted |
| other | p_snWxZhRQPAWrkTPkPaDJFQ | 王畿臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琛（CBDB 282040）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282040&o=json)
- [中国历代人物传记资料库：王甸臣（CBDB 282049）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282049&o=json)
- [中国历代人物传记资料库：王拱臣（CBDB 282045）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282045&o=json)
- [中国历代人物传记资料库：王翰臣（CBDB 202016）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202016&o=json)
- [中国历代人物传记资料库：王畿臣（CBDB 282048）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282048&o=json)
- [中国历代人物传记资料库：王親臣（CBDB 282046）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282046&o=json)
- [中国历代人物传记资料库：王守臣（CBDB 282047）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282047&o=json)
- [中国历代人物传记资料库：王原（CBDB 282038）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282038&o=json)
- [中国历代人物传记资料库：王子明（CBDB 282039）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282039&o=json)
