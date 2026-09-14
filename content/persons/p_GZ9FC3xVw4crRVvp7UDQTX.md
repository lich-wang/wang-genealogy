---
schema: wang-person/v1
id: p_GZ9FC3xVw4crRVvp7UDQTX
status: active
merged_into: null
display_name: 王玭
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MQgrfHyWhCuKmkBFyFFadZ
        subject_person_id: p_GZ9FC3xVw4crRVvp7UDQTX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J7WLEL4MP7ThBK29yJg9Pf
          claim_id: c_MQgrfHyWhCuKmkBFyFFadZ
          source_id: s_WNKpdkk3yi4awpd41NnU58
          stance: supports
          locator: CBDB:208155
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208155）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_759G2Vzw8EEVjRXvXGtCK6
        subject_person_id: p_GZ9FC3xVw4crRVvp7UDQTX
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1417年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XfHhScUBaUXJugQFes2L2u
          claim_id: c_759G2Vzw8EEVjRXvXGtCK6
          source_id: s_WNKpdkk3yi4awpd41NnU58
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
        id: c_3q3xAMZocBdRvdDV8UuGQw
        subject_person_id: p_GZ9FC3xVw4crRVvp7UDQTX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玭（生于1417年），明人物。正統十三年進士，籍贯南靖，入仕進士。（中国历代人物传记资料库 CBDB 208155）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DAu2mYzW9qRHIIDyxRF8gM
          claim_id: c_3q3xAMZocBdRvdDV8UuGQw
          source_id: s_WNKpdkk3yi4awpd41NnU58
          stance: supports
          locator: CBDB:208155
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source: *a1
      object_person:
        id: p_6Tbz6rZoK81ZB5BwdE41k7
        status: active
        display_name: 王興弼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_3yu20W2uf_oHi-kL9VRAy1
        subject_person_id: p_GZ9FC3xVw4crRVvp7UDQTX
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_GGpPpPGjxpqJed9SdSfz9D
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__CrSMmssTsNLy6dhL6NVmm
          claim_id: c_3yu20W2uf_oHi-kL9VRAy1
          source_id: s_v_mU_IssHuAIlrbgGpeAAP
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第六十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_v_mU_IssHuAIlrbgGpeAAP
            source_type: api_record
            title: 中国历代人物传记资料库：蔡氏(王玭妻)（CBDB 241176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241176&o=json
            external_identifier: CBDB:241176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GGpPpPGjxpqJed9SdSfz9D
        status: active
        display_name: 蔡氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_1zHiNnAtURpDwLysWfsXc-
        subject_person_id: p_EPVRDWZKonkLB1kZwcARVu
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GZ9FC3xVw4crRVvp7UDQTX
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_erzil1uLF9uNRmeo-x9JVH
          claim_id: c_1zHiNnAtURpDwLysWfsXc-
          source_id: s_WNKpdkk3yi4awpd41NnU58
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第六十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EPVRDWZKonkLB1kZwcARVu
        status: active
        display_name: 王顯德
        merged_into_person_id: null
    - claim:
        id: c_lcCeMVBgveUNZzDX9eJaHT
        subject_person_id: p_kMQhT3dQbTnh3GYgpMAAPK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GZ9FC3xVw4crRVvp7UDQTX
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PTSJeaAhv-aLqxJTQF2Xo1
          claim_id: c_lcCeMVBgveUNZzDX9eJaHT
          source_id: s_WNKpdkk3yi4awpd41NnU58
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第六十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kMQhT3dQbTnh3GYgpMAAPK
        status: active
        display_name: 王保民
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_NGNSIwjMw_qlE_vPCluslQ
        subject_person_id: p_1WGQdJ4kt5mQs3LN8tz4xB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GZ9FC3xVw4crRVvp7UDQTX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dXeo3Pz3qmCom3RUo13eUc
          claim_id: c_NGNSIwjMw_qlE_vPCluslQ
          source_id: s_m4w-oVCdyRUE-q72seKUU-
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 208155 王玭）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_7-sc3vCy_WucspJl6erSDI
        subject_person_id: p_8NeLNfq79M84ozcRkiDW1b
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GZ9FC3xVw4crRVvp7UDQTX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d26Kr0ILMt03sxAvA2LtLY
          claim_id: c_7-sc3vCy_WucspJl6erSDI
          source_id: s_dp2BhVLMEDwQdcjXWVCGcF
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 208155 王玭）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_QIPyJhvwBgus-Rpq5EXoFI
        subject_person_id: p_GWsofKJpEbYC2MCfuoSMjA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GZ9FC3xVw4crRVvp7UDQTX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZiN-Kugmd8VwoOotSZ8e2A
          claim_id: c_QIPyJhvwBgus-Rpq5EXoFI
          source_id: s_Qk5QJHckG6_-fPVEUIq7Kf
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 208155 王玭）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_OeiRdGZ4342LTNUdklvYmF
        subject_person_id: p_GZ9FC3xVw4crRVvp7UDQTX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_SV8ZBmT5ovnbEf28K62S9r
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8jpsol6_sXGF9x_jVVtxGX
          claim_id: c_OeiRdGZ4342LTNUdklvYmF
          source_id: s_cMsZtzaV-IKBC3FVnMHdt3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 208155 王玭）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_MMo2qdD9DuFG-NcEs1tLrJ
        subject_person_id: p_GZ9FC3xVw4crRVvp7UDQTX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_X1HNFvM3BHppHWpk8ZM7Y3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mbWRGbYaBZ0lvFK2gQdoKz
          claim_id: c_MMo2qdD9DuFG-NcEs1tLrJ
          source_id: s_a2mGq3EqOLR3Lz8UfkKlaT
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 208155 王玭）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_LbF5InzdafqJlIW1Jex5QS
        subject_person_id: p_GZ9FC3xVw4crRVvp7UDQTX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZNh1e4gVAd5jRM6DJL4oty
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ixsJL6xLmrOGkcSIX2pms1
          claim_id: c_LbF5InzdafqJlIW1Jex5QS
          source_id: s_c0SgCfoZ82bxJUo78CZuo4
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 208155 王玭）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_qID0RV6_VDjxrOWfdvdP8K
        subject_person_id: p_GZ9FC3xVw4crRVvp7UDQTX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ioHAG7Z7qtpA8w57akPMuF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kZnyWScW8ujqdU_Gpq1nmM
          claim_id: c_qID0RV6_VDjxrOWfdvdP8K
          source_id: s_JIzWifrDvBelHaKQXM1v5d
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 208155 王玭）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王玭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玭 | accepted |
| birth.date | 1417年 | accepted |
| bio.summary | 王玭（生于1417年），明人物。正統十三年進士，籍贯南靖，入仕進士。（中国历代人物传记资料库 CBDB 208155） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6Tbz6rZoK81ZB5BwdE41k7 | 王興弼 | accepted |
| spouses | p_GGpPpPGjxpqJed9SdSfz9D | 蔡氏 | accepted |
| ancestors | p_EPVRDWZKonkLB1kZwcARVu | 王顯德 | accepted |
| ancestors | p_kMQhT3dQbTnh3GYgpMAAPK | 王保民 | accepted |
| other | p_1WGQdJ4kt5mQs3LN8tz4xB | 王弘亮 | accepted |
| other | p_8NeLNfq79M84ozcRkiDW1b | 王弘隆 | accepted |
| other | p_GWsofKJpEbYC2MCfuoSMjA | 王弘蘊 | accepted |
| other | p_SV8ZBmT5ovnbEf28K62S9r | 王弘政 | accepted |
| other | p_X1HNFvM3BHppHWpk8ZM7Y3 | 王弘耀 | accepted |
| other | p_ZNh1e4gVAd5jRM6DJL4oty | 王弘中 | accepted |
| other | p_ioHAG7Z7qtpA8w57akPMuF | 王弘舒 | accepted |

## 外部来源

- [中国历代人物传记资料库：蔡氏(王玭妻)（CBDB 241176）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241176&o=json)
- [中国历代人物传记资料库：王弘亮（CBDB 241177）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241177&o=json)
- [中国历代人物传记资料库：王弘隆（CBDB 241182）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241182&o=json)
- [中国历代人物传记资料库：王弘舒（CBDB 241183）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241183&o=json)
- [中国历代人物传记资料库：王弘耀（CBDB 241178）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241178&o=json)
- [中国历代人物传记资料库：王弘蘊（CBDB 241179）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241179&o=json)
- [中国历代人物传记资料库：王弘政（CBDB 241181）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241181&o=json)
- [中国历代人物传记资料库：王弘中（CBDB 241180）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241180&o=json)
- [中国历代人物传记资料库：王玭（CBDB 208155）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208155&o=json)
