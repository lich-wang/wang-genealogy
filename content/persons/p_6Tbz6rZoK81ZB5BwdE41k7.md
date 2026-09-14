---
schema: wang-person/v1
id: p_6Tbz6rZoK81ZB5BwdE41k7
status: active
merged_into: null
display_name: 王興弼
cbdb_id: 241173
revision: 9
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HnhqQiueRNNFSVNDN9tpgo
        subject_person_id: p_6Tbz6rZoK81ZB5BwdE41k7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王興弼，明人物。正統十三年進士，籍贯南靖。（中国历代人物传记资料库 CBDB 241173）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_c_8mm6PPXQZ9UYMsK2viVO
          claim_id: c_HnhqQiueRNNFSVNDN9tpgo
          source_id: s_emn6Lq3vML1yn7NPsHDHEW
          stance: supports
          locator: CBDB:241173
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_emn6Lq3vML1yn7NPsHDHEW
            source_type: api_record
            title: 中国历代人物传记资料库：王興弼（CBDB 241173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241173&o=json
            external_identifier: CBDB:241173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HATdS7T68vC5LTWASTbJAz
        subject_person_id: p_6Tbz6rZoK81ZB5BwdE41k7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王興弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_f4naaxx1fbypGrsywTw3eG
          claim_id: c_HATdS7T68vC5LTWASTbJAz
          source_id: s_emn6Lq3vML1yn7NPsHDHEW
          stance: supports
          locator: CBDB:241173
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_HS-oqMnMiv_ZOxh_tDQIHW
        subject_person_id: p_6Tbz6rZoK81ZB5BwdE41k7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GZ9FC3xVw4crRVvp7UDQTX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wvd-IXCFleVIJZWcFQZpry
          claim_id: c_HS-oqMnMiv_ZOxh_tDQIHW
          source_id: s_WNKpdkk3yi4awpd41NnU58
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第六十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WNKpdkk3yi4awpd41NnU58
            source_type: api_record
            title: 中国历代人物传记资料库：王玭（CBDB 208155）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208155&o=json
            external_identifier: CBDB:208155
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.949Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GZ9FC3xVw4crRVvp7UDQTX
        status: active
        display_name: 王玭
        merged_into_person_id: null
    - claim:
        id: c_t_Vc5uNMmS0eCMFAdc8Bel
        subject_person_id: p_6Tbz6rZoK81ZB5BwdE41k7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1WGQdJ4kt5mQs3LN8tz4xB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sjbMDH-e_1BNxrttVcO8sb
          claim_id: c_t_Vc5uNMmS0eCMFAdc8Bel
          source_id: s_m4w-oVCdyRUE-q72seKUU-
          stance: supports
          locator: CBDB：兄弟 王玭（208155）之父／母 王興弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王弘亮 与 王玭 为同胞（CBDB 记「弟」），王玭 之父／母即 王弘亮 之父／母。
          source:
            id: s_m4w-oVCdyRUE-q72seKUU-
            source_type: api_record
            title: 中国历代人物传记资料库：王弘亮（CBDB 241177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241177&o=json
            external_identifier: CBDB:241177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1WGQdJ4kt5mQs3LN8tz4xB
        status: active
        display_name: 王弘亮
        merged_into_person_id: null
    - claim:
        id: c_BIe7mLGqKEoRfhzRDg1M05
        subject_person_id: p_6Tbz6rZoK81ZB5BwdE41k7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8NeLNfq79M84ozcRkiDW1b
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ezb-toleH4JWyHDxGwElpM
          claim_id: c_BIe7mLGqKEoRfhzRDg1M05
          source_id: s_dp2BhVLMEDwQdcjXWVCGcF
          stance: supports
          locator: CBDB：兄弟 王玭（208155）之父／母 王興弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王弘隆 与 王玭 为同胞（CBDB 记「兄」），王玭 之父／母即 王弘隆 之父／母。
          source:
            id: s_dp2BhVLMEDwQdcjXWVCGcF
            source_type: api_record
            title: 中国历代人物传记资料库：王弘隆（CBDB 241182）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241182&o=json
            external_identifier: CBDB:241182
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8NeLNfq79M84ozcRkiDW1b
        status: active
        display_name: 王弘隆
        merged_into_person_id: null
    - claim:
        id: c_eEppo-EEL3yt_L9rDCm-kf
        subject_person_id: p_6Tbz6rZoK81ZB5BwdE41k7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GWsofKJpEbYC2MCfuoSMjA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qg03eVrdsw6EL3JKgRb1S-
          claim_id: c_eEppo-EEL3yt_L9rDCm-kf
          source_id: s_Qk5QJHckG6_-fPVEUIq7Kf
          stance: supports
          locator: CBDB：兄弟 王玭（208155）之父／母 王興弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王弘蘊 与 王玭 为同胞（CBDB 记「弟」），王玭 之父／母即 王弘蘊 之父／母。
          source:
            id: s_Qk5QJHckG6_-fPVEUIq7Kf
            source_type: api_record
            title: 中国历代人物传记资料库：王弘蘊（CBDB 241179）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241179&o=json
            external_identifier: CBDB:241179
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GWsofKJpEbYC2MCfuoSMjA
        status: active
        display_name: 王弘蘊
        merged_into_person_id: null
    - claim:
        id: c_8vKi4Tbg1DWYIHcHbt338Y
        subject_person_id: p_6Tbz6rZoK81ZB5BwdE41k7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SV8ZBmT5ovnbEf28K62S9r
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EpDuqItcOSpwudLbdE_EzZ
          claim_id: c_8vKi4Tbg1DWYIHcHbt338Y
          source_id: s_cMsZtzaV-IKBC3FVnMHdt3
          stance: supports
          locator: CBDB：兄弟 王玭（208155）之父／母 王興弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王弘政 与 王玭 为同胞（CBDB 记「兄」），王玭 之父／母即 王弘政 之父／母。
          source:
            id: s_cMsZtzaV-IKBC3FVnMHdt3
            source_type: api_record
            title: 中国历代人物传记资料库：王弘政（CBDB 241181）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241181&o=json
            external_identifier: CBDB:241181
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SV8ZBmT5ovnbEf28K62S9r
        status: active
        display_name: 王弘政
        merged_into_person_id: null
    - claim:
        id: c_ptcCumbeusYOvMOboznSaW
        subject_person_id: p_6Tbz6rZoK81ZB5BwdE41k7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_X1HNFvM3BHppHWpk8ZM7Y3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QfE0l5VVU4rge6ThLbgst-
          claim_id: c_ptcCumbeusYOvMOboznSaW
          source_id: s_a2mGq3EqOLR3Lz8UfkKlaT
          stance: supports
          locator: CBDB：兄弟 王玭（208155）之父／母 王興弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王弘耀 与 王玭 为同胞（CBDB 记「弟」），王玭 之父／母即 王弘耀 之父／母。
          source:
            id: s_a2mGq3EqOLR3Lz8UfkKlaT
            source_type: api_record
            title: 中国历代人物传记资料库：王弘耀（CBDB 241178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241178&o=json
            external_identifier: CBDB:241178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_X1HNFvM3BHppHWpk8ZM7Y3
        status: active
        display_name: 王弘耀
        merged_into_person_id: null
    - claim:
        id: c_Dwc00BWXwYfBTgKdgSbW-0
        subject_person_id: p_6Tbz6rZoK81ZB5BwdE41k7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZNh1e4gVAd5jRM6DJL4oty
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g0GsPTW0n-9KLt18mgFitt
          claim_id: c_Dwc00BWXwYfBTgKdgSbW-0
          source_id: s_c0SgCfoZ82bxJUo78CZuo4
          stance: supports
          locator: CBDB：兄弟 王玭（208155）之父／母 王興弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王弘中 与 王玭 为同胞（CBDB 记「弟」），王玭 之父／母即 王弘中 之父／母。
          source:
            id: s_c0SgCfoZ82bxJUo78CZuo4
            source_type: api_record
            title: 中国历代人物传记资料库：王弘中（CBDB 241180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241180&o=json
            external_identifier: CBDB:241180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZNh1e4gVAd5jRM6DJL4oty
        status: active
        display_name: 王弘中
        merged_into_person_id: null
    - claim:
        id: c_wSygNcmCCMQ939g6I3rHMS
        subject_person_id: p_6Tbz6rZoK81ZB5BwdE41k7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ioHAG7Z7qtpA8w57akPMuF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y_DmQD_PdoeaoHHJUu5dgQ
          claim_id: c_wSygNcmCCMQ939g6I3rHMS
          source_id: s_JIzWifrDvBelHaKQXM1v5d
          stance: supports
          locator: CBDB：兄弟 王玭（208155）之父／母 王興弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王弘舒 与 王玭 为同胞（CBDB 记「兄」），王玭 之父／母即 王弘舒 之父／母。
          source:
            id: s_JIzWifrDvBelHaKQXM1v5d
            source_type: api_record
            title: 中国历代人物传记资料库：王弘舒（CBDB 241183）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241183&o=json
            external_identifier: CBDB:241183
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ioHAG7Z7qtpA8w57akPMuF
        status: active
        display_name: 王弘舒
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王興弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王興弼，明人物。正統十三年進士，籍贯南靖。（中国历代人物传记资料库 CBDB 241173） | accepted |
| name.primary | 王興弼 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_GZ9FC3xVw4crRVvp7UDQTX | 王玭 | accepted |
| children | p_1WGQdJ4kt5mQs3LN8tz4xB | 王弘亮 | accepted |
| children | p_8NeLNfq79M84ozcRkiDW1b | 王弘隆 | accepted |
| children | p_GWsofKJpEbYC2MCfuoSMjA | 王弘蘊 | accepted |
| children | p_SV8ZBmT5ovnbEf28K62S9r | 王弘政 | accepted |
| children | p_X1HNFvM3BHppHWpk8ZM7Y3 | 王弘耀 | accepted |
| children | p_ZNh1e4gVAd5jRM6DJL4oty | 王弘中 | accepted |
| children | p_ioHAG7Z7qtpA8w57akPMuF | 王弘舒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弘亮（CBDB 241177）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241177&o=json)
- [中国历代人物传记资料库：王弘隆（CBDB 241182）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241182&o=json)
- [中国历代人物传记资料库：王弘舒（CBDB 241183）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241183&o=json)
- [中国历代人物传记资料库：王弘耀（CBDB 241178）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241178&o=json)
- [中国历代人物传记资料库：王弘蘊（CBDB 241179）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241179&o=json)
- [中国历代人物传记资料库：王弘政（CBDB 241181）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241181&o=json)
- [中国历代人物传记资料库：王弘中（CBDB 241180）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241180&o=json)
- [中国历代人物传记资料库：王玭（CBDB 208155）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208155&o=json)
- [中国历代人物传记资料库：王興弼（CBDB 241173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241173&o=json)
