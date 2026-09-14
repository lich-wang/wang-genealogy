---
schema: wang-person/v1
id: p_m1KPPjDFuB77sgosg8dB61
status: active
merged_into: null
display_name: 王有為
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cv8DSnCba2VJTpGgiCFp79
        subject_person_id: p_m1KPPjDFuB77sgosg8dB61
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有為
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ad5FjKjoQagoPtvcVYLsRt
          claim_id: c_cv8DSnCba2VJTpGgiCFp79
          source_id: s_gQ1iyNseF56QiyBot1tdVq
          stance: supports
          locator: CBDB:203722
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203722）
          source: &a1
            id: s_gQ1iyNseF56QiyBot1tdVq
            source_type: api_record
            title: 中国历代人物传记资料库：王有為（CBDB 203722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203722&o=json
            external_identifier: CBDB:203722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.798Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7YhFRrX14JgQ87fWhDb1wz
        subject_person_id: p_m1KPPjDFuB77sgosg8dB61
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1507年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A5vqRrz4ZdtURqcia2zVa6
          claim_id: c_7YhFRrX14JgQ87fWhDb1wz
          source_id: s_gQ1iyNseF56QiyBot1tdVq
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
        id: c_yQijHMwbM3NkTfSixBuoNe
        subject_person_id: p_m1KPPjDFuB77sgosg8dB61
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有為（生于1507年），明人物。明清進士進士，籍贯黔陽，入仕進士，曾任訓導。（中国历代人物传记资料库 CBDB 203722）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2a7LjC0IKpivNW5qA79w6j
          claim_id: c_yQijHMwbM3NkTfSixBuoNe
          source_id: s_gQ1iyNseF56QiyBot1tdVq
          stance: supports
          locator: CBDB:203722
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fGFo1HrfJ1LTKYraCMAbxa
        subject_person_id: p_XiFFgCxGPLXnJMQFHkL5MX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_m1KPPjDFuB77sgosg8dB61
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t3fP0h1zOuaYjLlsVVgLOG
          claim_id: c_fGFo1HrfJ1LTKYraCMAbxa
          source_id: s_gQ1iyNseF56QiyBot1tdVq
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第五十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XiFFgCxGPLXnJMQFHkL5MX
        status: active
        display_name: 王鵬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_fo5vPbF2C8w5Bf8wq4149J
        subject_person_id: p_m1KPPjDFuB77sgosg8dB61
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_8p8i7Z5DnFRpA5N3rwc9Uu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qHEwMSge3CPbuNpSXrMTYw
          claim_id: c_fo5vPbF2C8w5Bf8wq4149J
          source_id: s_pTPMWo7IU3UPqK27qpyceS
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第五十二名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pTPMWo7IU3UPqK27qpyceS
            source_type: api_record
            title: 中国历代人物传记资料库：何氏(王有為妻)（CBDB 309078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309078&o=json
            external_identifier: CBDB:309078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8p8i7Z5DnFRpA5N3rwc9Uu
        status: active
        display_name: 何氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_sd0YGXVMt4mnOT0uaRgXnI
        subject_person_id: p_9nLDDR64tTe6Yf8U9FsNKb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_m1KPPjDFuB77sgosg8dB61
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2YVGIAJgWJXUWXEr7AEFy1
          claim_id: c_sd0YGXVMt4mnOT0uaRgXnI
          source_id: s_gQ1iyNseF56QiyBot1tdVq
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第五十二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9nLDDR64tTe6Yf8U9FsNKb
        status: active
        display_name: 王紃
        merged_into_person_id: null
    - claim:
        id: c_Btbn6Iw7UE6h4oox47zTnV
        subject_person_id: p_ea1c741tbGsFRoxmHPKYXv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_m1KPPjDFuB77sgosg8dB61
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NhffR5s9bgNJnQuqNBvXs8
          claim_id: c_Btbn6Iw7UE6h4oox47zTnV
          source_id: s_gQ1iyNseF56QiyBot1tdVq
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第五十二名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ea1c741tbGsFRoxmHPKYXv
        status: active
        display_name: 王彥璋
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_L3ztVsnM29ERZndMYvpxE2
        subject_person_id: p_6ZA1HPpsbqBBBsxMD2HU8E
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_m1KPPjDFuB77sgosg8dB61
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QKssFDXPVBFCTdrRKrssHY
          claim_id: c_L3ztVsnM29ERZndMYvpxE2
          source_id: s_2wnKy6Y67A-B5VURXxskU7
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203722 王有為）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2wnKy6Y67A-B5VURXxskU7
            source_type: api_record
            title: 中国历代人物传记资料库：王有守（CBDB 309081）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309081&o=json
            external_identifier: CBDB:309081
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6ZA1HPpsbqBBBsxMD2HU8E
        status: active
        display_name: 王有守
        merged_into_person_id: null
    - claim:
        id: c_5OwO21vK-nG5mtFiulgrtZ
        subject_person_id: p_RwxHF1Ntsy8Aq41TEDYhAY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_m1KPPjDFuB77sgosg8dB61
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sbiSD6S1EPqqbIlZaWWOSM
          claim_id: c_5OwO21vK-nG5mtFiulgrtZ
          source_id: s_ZmGbx32Udb-1fg0HO9xGng
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203722 王有為）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ZmGbx32Udb-1fg0HO9xGng
            source_type: api_record
            title: 中国历代人物传记资料库：王有藩（CBDB 309082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309082&o=json
            external_identifier: CBDB:309082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RwxHF1Ntsy8Aq41TEDYhAY
        status: active
        display_name: 王有藩
        merged_into_person_id: null
    - claim:
        id: c_MU9vrMKA5uEfFXZj5a_M0n
        subject_person_id: p_fE1qPb3wvPQVPGAw5Pu7n9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_m1KPPjDFuB77sgosg8dB61
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U-fvtsfwLGfA5J6pn31D5N
          claim_id: c_MU9vrMKA5uEfFXZj5a_M0n
          source_id: s_v2KFNFOz0qysv6dUl2z5DU
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203722 王有為）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_v2KFNFOz0qysv6dUl2z5DU
            source_type: api_record
            title: 中国历代人物传记资料库：王有賢（CBDB 309080）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309080&o=json
            external_identifier: CBDB:309080
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fE1qPb3wvPQVPGAw5Pu7n9
        status: active
        display_name: 王有賢
        merged_into_person_id: null
    - claim:
        id: c_xdePaHyOVuG6p54dFGsPDp
        subject_person_id: p_m1KPPjDFuB77sgosg8dB61
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nKsY4L4FfA8dEDc3nH5XYS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Irvdkqx3ZTJvkLZQ1Ccvdu
          claim_id: c_xdePaHyOVuG6p54dFGsPDp
          source_id: s_2hazCDN3yDeSey7hXQBTaG
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203722 王有為）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2hazCDN3yDeSey7hXQBTaG
            source_type: api_record
            title: 中国历代人物传记资料库：王有道（CBDB 309079）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309079&o=json
            external_identifier: CBDB:309079
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nKsY4L4FfA8dEDc3nH5XYS
        status: active
        display_name: 王有道
        merged_into_person_id: null
    - claim:
        id: c_-atXdvY2h7rXCvkuo6uHuT
        subject_person_id: p_m1KPPjDFuB77sgosg8dB61
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ySzH8rSRmy2shrr3rmjntz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_48SyNDWP5eltFzB4DcclW0
          claim_id: c_-atXdvY2h7rXCvkuo6uHuT
          source_id: s_WqBVo85uO33LCraL9rl_9D
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203722 王有為）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WqBVo85uO33LCraL9rl_9D
            source_type: api_record
            title: 中国历代人物传记资料库：王有年（CBDB 309083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309083&o=json
            external_identifier: CBDB:309083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ySzH8rSRmy2shrr3rmjntz
        status: active
        display_name: 王有年
        merged_into_person_id: null
---

# 王有為

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王有為 | accepted |
| birth.date | 1507年 | accepted |
| bio.summary | 王有為（生于1507年），明人物。明清進士進士，籍贯黔陽，入仕進士，曾任訓導。（中国历代人物传记资料库 CBDB 203722） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XiFFgCxGPLXnJMQFHkL5MX | 王鵬 | accepted |
| spouses | p_8p8i7Z5DnFRpA5N3rwc9Uu | 何氏 | accepted |
| ancestors | p_9nLDDR64tTe6Yf8U9FsNKb | 王紃 | accepted |
| ancestors | p_ea1c741tbGsFRoxmHPKYXv | 王彥璋 | accepted |
| other | p_6ZA1HPpsbqBBBsxMD2HU8E | 王有守 | accepted |
| other | p_RwxHF1Ntsy8Aq41TEDYhAY | 王有藩 | accepted |
| other | p_fE1qPb3wvPQVPGAw5Pu7n9 | 王有賢 | accepted |
| other | p_nKsY4L4FfA8dEDc3nH5XYS | 王有道 | accepted |
| other | p_ySzH8rSRmy2shrr3rmjntz | 王有年 | accepted |

## 外部来源

- [中国历代人物传记资料库：何氏(王有為妻)（CBDB 309078）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309078&o=json)
- [中国历代人物传记资料库：王有道（CBDB 309079）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309079&o=json)
- [中国历代人物传记资料库：王有藩（CBDB 309082）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309082&o=json)
- [中国历代人物传记资料库：王有年（CBDB 309083）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309083&o=json)
- [中国历代人物传记资料库：王有守（CBDB 309081）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309081&o=json)
- [中国历代人物传记资料库：王有為（CBDB 203722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203722&o=json)
- [中国历代人物传记资料库：王有賢（CBDB 309080）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309080&o=json)
