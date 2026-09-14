---
schema: wang-person/v1
id: p_5dcsDxDKEpK12rMtB5o7pc
status: active
merged_into: null
display_name: 王瀚
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KUbpNU7QQw316A5aMNjoL7
        subject_person_id: p_5dcsDxDKEpK12rMtB5o7pc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iXkK7BekzxNR6BXvyAZNn1
          claim_id: c_KUbpNU7QQw316A5aMNjoL7
          source_id: s_s15gN8ahrfeQwPMjQ5Gfnc
          stance: supports
          locator: CBDB:10704
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10704）
          source: &a1
            id: s_s15gN8ahrfeQwPMjQ5Gfnc
            source_type: api_record
            title: 中国历代人物传记资料库：王瀚（CBDB 10704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10704&o=json
            external_identifier: CBDB:10704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.550Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CazND3hDN5suXBK1uCt5VA
        subject_person_id: p_5dcsDxDKEpK12rMtB5o7pc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀚，宋人物。籍贯金華，身份为理學家，曾任主管宮觀。（中国历代人物传记资料库 CBDB 10704）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SzkBmqDPovwkpo1QINZBpg
          claim_id: c_CazND3hDN5suXBK1uCt5VA
          source_id: s_s15gN8ahrfeQwPMjQ5Gfnc
          stance: supports
          locator: CBDB:10704
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_v7URt69nu_mwEvGnI7yo3o
        subject_person_id: p_UJHNJUefP1hMoQv16JZ99z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5dcsDxDKEpK12rMtB5o7pc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AmagCfq20xC6s5p1GUSB63
          claim_id: c_v7URt69nu_mwEvGnI7yo3o
          source_id: s_zDhdJOdKYbFJQR613OXTgt
          stance: supports
          locator: CBDB 亲属：父（KinPerson 10702）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_zDhdJOdKYbFJQR613OXTgt
            source_type: api_record
            title: 中国历代人物传记资料库：王瀚（CBDB 10704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10704&o=json
            external_identifier: CBDB:10704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UJHNJUefP1hMoQv16JZ99z
        status: active
        display_name: 王師愈
        merged_into_person_id: null
  children:
    - claim:
        id: c_5TnJrTipSBIpG9pS2X8V7-
        subject_person_id: p_5dcsDxDKEpK12rMtB5o7pc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kYGpXaLiEitGpz5LcQi99e
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Qu9x6KBGd3InNZEmobvO61
          claim_id: c_5TnJrTipSBIpG9pS2X8V7-
          source_id: s_g2UE1xthB45-jk5smV_kNN
          stance: supports
          locator: CBDB 亲属：父（KinPerson 10704）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_g2UE1xthB45-jk5smV_kNN
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 10708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10708&o=json
            external_identifier: CBDB:10708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kYGpXaLiEitGpz5LcQi99e
        status: active
        display_name: 王相
        merged_into_person_id: null
    - claim:
        id: c_lTNKWHrGGlf5TJGwN_GmZv
        subject_person_id: p_5dcsDxDKEpK12rMtB5o7pc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xJ2AEUyPMTTohuC4wiNdBg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_P09VHbmE_YGyGGbC9m_-up
          claim_id: c_lTNKWHrGGlf5TJGwN_GmZv
          source_id: s_oOrmdEhh4v-HNQLCS56hzJ
          stance: supports
          locator: CBDB 亲属：父（KinPerson 10704）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_oOrmdEhh4v-HNQLCS56hzJ
            source_type: api_record
            title: 中国历代人物传记资料库：王桐（CBDB 10707）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10707&o=json
            external_identifier: CBDB:10707
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xJ2AEUyPMTTohuC4wiNdBg
        status: active
        display_name: 王桐
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_OfRK2MKUl1Ek8oBLr44kXy
        subject_person_id: p_5dcsDxDKEpK12rMtB5o7pc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_L5k9PxZjgECP3K77h8evUM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W0UJkECJIs-B1Fw7XeC11m
          claim_id: c_OfRK2MKUl1Ek8oBLr44kXy
          source_id: s_zDhdJOdKYbFJQR613OXTgt
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 20528 王洽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zDhdJOdKYbFJQR613OXTgt
            source_type: api_record
            title: 中国历代人物传记资料库：王瀚（CBDB 10704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10704&o=json
            external_identifier: CBDB:10704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_L5k9PxZjgECP3K77h8evUM
        status: active
        display_name: 王洽
        merged_into_person_id: null
    - claim:
        id: c_vEZj8xwbwTf8GY4p22svkJ
        subject_person_id: p_5dcsDxDKEpK12rMtB5o7pc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sHdAN5iZAUFzUoML5n2TXi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gFh_ETnBV_QLpQzZJXowFy
          claim_id: c_vEZj8xwbwTf8GY4p22svkJ
          source_id: s_zDhdJOdKYbFJQR613OXTgt
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 10705 王漢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zDhdJOdKYbFJQR613OXTgt
            source_type: api_record
            title: 中国历代人物传记资料库：王瀚（CBDB 10704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10704&o=json
            external_identifier: CBDB:10704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sHdAN5iZAUFzUoML5n2TXi
        status: active
        display_name: 王漢
        merged_into_person_id: null
    - claim:
        id: c_nOXdV6gVRUFjwKMKR5Vl_l
        subject_person_id: p_5dcsDxDKEpK12rMtB5o7pc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_EECNEf54uV64Z6XQEJiiT2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eokfXNNdiKa0ILPN-y_lLM
          claim_id: c_nOXdV6gVRUFjwKMKR5Vl_l
          source_id: s_zDhdJOdKYbFJQR613OXTgt
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 39347 王治）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zDhdJOdKYbFJQR613OXTgt
            source_type: api_record
            title: 中国历代人物传记资料库：王瀚（CBDB 10704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10704&o=json
            external_identifier: CBDB:10704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EECNEf54uV64Z6XQEJiiT2
        status: active
        display_name: 王治
        merged_into_person_id: null
---

# 王瀚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瀚 | accepted |
| bio.summary | 王瀚，宋人物。籍贯金華，身份为理學家，曾任主管宮觀。（中国历代人物传记资料库 CBDB 10704） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UJHNJUefP1hMoQv16JZ99z | 王師愈 | accepted |
| children | p_kYGpXaLiEitGpz5LcQi99e | 王相 | accepted |
| children | p_xJ2AEUyPMTTohuC4wiNdBg | 王桐 | accepted |
| other | p_L5k9PxZjgECP3K77h8evUM | 王洽 | accepted |
| other | p_sHdAN5iZAUFzUoML5n2TXi | 王漢 | accepted |
| other | p_EECNEf54uV64Z6XQEJiiT2 | 王治 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瀚（CBDB 10704）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10704&o=json)
- [中国历代人物传记资料库：王桐（CBDB 10707）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10707&o=json)
- [中国历代人物传记资料库：王相（CBDB 10708）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10708&o=json)
