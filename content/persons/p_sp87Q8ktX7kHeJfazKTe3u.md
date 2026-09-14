---
schema: wang-person/v1
id: p_sp87Q8ktX7kHeJfazKTe3u
status: active
merged_into: null
display_name: 王琛
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MfPiELguRmRVJKmFgJPHWZ
        subject_person_id: p_sp87Q8ktX7kHeJfazKTe3u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fDpyX1GB7he4M372MTh9Uk
          claim_id: c_MfPiELguRmRVJKmFgJPHWZ
          source_id: s_hzTHHrMFUApyr8aFpp62mv
          stance: supports
          locator: CBDB:282040
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282040）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kLaWYQYL7e6EXt1PpH6nTp
        subject_person_id: p_sp87Q8ktX7kHeJfazKTe3u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琛，明人物。正德十二年進士，籍贯渠縣。（中国历代人物传记资料库 CBDB 282040）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hW-dvl0dCk6Eo7qV1U52oU
          claim_id: c_kLaWYQYL7e6EXt1PpH6nTp
          source_id: s_hzTHHrMFUApyr8aFpp62mv
          stance: supports
          locator: CBDB:282040
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source: *a1
      object_person:
        id: p_Mm4Feno3TMRLDtespKCU2Q
        status: active
        display_name: 王翰臣
        merged_into_person_id: null
    - claim:
        id: c_f6Or_reHnH3Zbx2MzSE7fd
        subject_person_id: p_sp87Q8ktX7kHeJfazKTe3u
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KoUEahydEBZ5RR5FbMUezS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lwKZmfbkXVlR6p8u4qPvRO
          claim_id: c_f6Or_reHnH3Zbx2MzSE7fd
          source_id: s_KsRHobB--pzVIPmmf8h2zs
          stance: supports
          locator: CBDB：兄弟 王翰臣（202016）之父／母 王琛
          quotation: null
          interpretation_note: 由兄弟关系推断：王守臣 与 王翰臣 为同胞（CBDB 记「兄」），王翰臣 之父／母即 王守臣 之父／母。
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
        id: c_IXL40t3wofN7Sq1Oksqtkz
        subject_person_id: p_sp87Q8ktX7kHeJfazKTe3u
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Kvt6vcEt4vWYbu9NBw1aMi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Kv216NvlviK6DFTe7PDiC1
          claim_id: c_IXL40t3wofN7Sq1Oksqtkz
          source_id: s_uU-RWGMPciSBJvW1p8z5-G
          stance: supports
          locator: CBDB：兄弟 王翰臣（202016）之父／母 王琛
          quotation: null
          interpretation_note: 由兄弟关系推断：王甸臣 与 王翰臣 为同胞（CBDB 记「兄」），王翰臣 之父／母即 王甸臣 之父／母。
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
        id: c_AJ7jP4SfQMjwEuv-QF5C7X
        subject_person_id: p_sp87Q8ktX7kHeJfazKTe3u
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_niPWz32Lswxcn9bVNZ8Pxx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HjMWs-p3ZKA81-8DG5OuSY
          claim_id: c_AJ7jP4SfQMjwEuv-QF5C7X
          source_id: s_oxOil9jBbh5Svu6_fEJUlu
          stance: supports
          locator: CBDB：兄弟 王翰臣（202016）之父／母 王琛
          quotation: null
          interpretation_note: 由兄弟关系推断：王親臣 与 王翰臣 为同胞（CBDB 记「兄」），王翰臣 之父／母即 王親臣 之父／母。
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
        id: c__2FrIfHm8NGA0TNj9LxaR4
        subject_person_id: p_sp87Q8ktX7kHeJfazKTe3u
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rRx92rsgj5B1Dfj7HhD6jF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uII8aYib6m-nRpPQDWkaRK
          claim_id: c__2FrIfHm8NGA0TNj9LxaR4
          source_id: s_6gwtvM5bNLQPmxbdih9gTu
          stance: supports
          locator: CBDB：兄弟 王翰臣（202016）之父／母 王琛
          quotation: null
          interpretation_note: 由兄弟关系推断：王拱臣 与 王翰臣 为同胞（CBDB 记「兄」），王翰臣 之父／母即 王拱臣 之父／母。
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
        id: c_EumEvACv3z28i8ek00HUBP
        subject_person_id: p_sp87Q8ktX7kHeJfazKTe3u
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_snWxZhRQPAWrkTPkPaDJFQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1zcqEZ-7lhivbi5beCBfzj
          claim_id: c_EumEvACv3z28i8ek00HUBP
          source_id: s_lgjm_7BdWPnRtv9ccNSmVa
          stance: supports
          locator: CBDB：兄弟 王翰臣（202016）之父／母 王琛
          quotation: null
          interpretation_note: 由兄弟关系推断：王畿臣 与 王翰臣 为同胞（CBDB 记「兄」），王翰臣 之父／母即 王畿臣 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王琛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琛 | accepted |
| bio.summary | 王琛，明人物。正德十二年進士，籍贯渠縣。（中国历代人物传记资料库 CBDB 282040） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Mm4Feno3TMRLDtespKCU2Q | 王翰臣 | accepted |
| children | p_KoUEahydEBZ5RR5FbMUezS | 王守臣 | accepted |
| children | p_Kvt6vcEt4vWYbu9NBw1aMi | 王甸臣 | accepted |
| children | p_niPWz32Lswxcn9bVNZ8Pxx | 王親臣 | accepted |
| children | p_rRx92rsgj5B1Dfj7HhD6jF | 王拱臣 | accepted |
| children | p_snWxZhRQPAWrkTPkPaDJFQ | 王畿臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琛（CBDB 282040）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282040&o=json)
- [中国历代人物传记资料库：王甸臣（CBDB 282049）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282049&o=json)
- [中国历代人物传记资料库：王拱臣（CBDB 282045）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282045&o=json)
- [中国历代人物传记资料库：王畿臣（CBDB 282048）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282048&o=json)
- [中国历代人物传记资料库：王親臣（CBDB 282046）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282046&o=json)
- [中国历代人物传记资料库：王守臣（CBDB 282047）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282047&o=json)
