---
schema: wang-person/v1
id: p_stumq3LKUX83aY7FDSYoQ9
status: active
merged_into: null
display_name: 王紹先
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4G3SCDqfHbCHenmvLZEU39
        subject_person_id: p_stumq3LKUX83aY7FDSYoQ9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹先
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xrNc9u5QC6mTK4CJ3JHRKp
          claim_id: c_4G3SCDqfHbCHenmvLZEU39
          source_id: s_51SNKp1DcDfU2auLpQ39Cr
          stance: supports
          locator: CBDB:206726
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206726）
          source: &a1
            id: s_51SNKp1DcDfU2auLpQ39Cr
            source_type: api_record
            title: 中国历代人物传记资料库：王紹先（CBDB 206726）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206726&o=json
            external_identifier: CBDB:206726
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.901Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_E5WJsmYBk6egWGCdpdgsKs
        subject_person_id: p_stumq3LKUX83aY7FDSYoQ9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1559年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jqpEpGWNxb7EAESMRvFLe6
          claim_id: c_E5WJsmYBk6egWGCdpdgsKs
          source_id: s_51SNKp1DcDfU2auLpQ39Cr
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
        id: c_7Z6e4pZEWaQTuNkFEbXeuG
        subject_person_id: p_stumq3LKUX83aY7FDSYoQ9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹先（生于1559年），明人物。明清進士進士，籍贯咸寧，入仕進士。（中国历代人物传记资料库 CBDB 206726）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Kjeci9la2EnHccx3nsiSKe
          claim_id: c_7Z6e4pZEWaQTuNkFEbXeuG
          source_id: s_51SNKp1DcDfU2auLpQ39Cr
          stance: supports
          locator: CBDB:206726
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TxDHEwS7pBQWCRkml8ZQzk
        subject_person_id: p_MzjvisS65eTZTH4c6EA4mL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_stumq3LKUX83aY7FDSYoQ9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WST65D7MHDJyzsxkcVGD0V
          claim_id: c_TxDHEwS7pBQWCRkml8ZQzk
          source_id: s_51SNKp1DcDfU2auLpQ39Cr
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第二甲第十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MzjvisS65eTZTH4c6EA4mL
        status: active
        display_name: 王昌功
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_zCjkz9NhzQmMeLdUCyUQ5Z
        subject_person_id: p_stumq3LKUX83aY7FDSYoQ9
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_pkpzoUkjchaQHfYiALSDMh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4RoEq_KkvhDAJS-0jgiWzy
          claim_id: c_zCjkz9NhzQmMeLdUCyUQ5Z
          source_id: s_tkdotZfBkD62uhEpJ1eUE6
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第二甲第十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tkdotZfBkD62uhEpJ1eUE6
            source_type: api_record
            title: 中国历代人物传记资料库：雒氏(王紹先妻)（CBDB 222278）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222278&o=json
            external_identifier: CBDB:222278
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pkpzoUkjchaQHfYiALSDMh
        status: active
        display_name: 雒氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_oGcPtet5cQVB52uitg5cKi
        subject_person_id: p_U6gQS1uZx6TnaacuyLTD96
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_stumq3LKUX83aY7FDSYoQ9
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sgb8QB5BiMKKURviY7lBwF
          claim_id: c_oGcPtet5cQVB52uitg5cKi
          source_id: s_51SNKp1DcDfU2auLpQ39Cr
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第二甲第十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_U6gQS1uZx6TnaacuyLTD96
        status: active
        display_name: 王懋
        merged_into_person_id: null
    - claim:
        id: c_j8msgjtkCh7G1Hr_j-ePcp
        subject_person_id: p_Ub1fRrchPGg2dwmwMQ21yb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_stumq3LKUX83aY7FDSYoQ9
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2ZRqbzWnUSwXSPtaWWTQXW
          claim_id: c_j8msgjtkCh7G1Hr_j-ePcp
          source_id: s_51SNKp1DcDfU2auLpQ39Cr
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第二甲第十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Ub1fRrchPGg2dwmwMQ21yb
        status: active
        display_name: 王用賢
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_7aIGOiDDo4mRVRu1b9aUB2
        subject_person_id: p_8ZyPWhFTG5KhhhubTquXQD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_stumq3LKUX83aY7FDSYoQ9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tivBu7o_0roQWv0a8kcAZZ
          claim_id: c_7aIGOiDDo4mRVRu1b9aUB2
          source_id: s_vtSy3A54TT4pxL4PzVakr1
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206726 王紹先）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vtSy3A54TT4pxL4PzVakr1
            source_type: api_record
            title: 中国历代人物传记资料库：王紹慶（CBDB 222281）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222281&o=json
            external_identifier: CBDB:222281
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8ZyPWhFTG5KhhhubTquXQD
        status: active
        display_name: 王紹慶
        merged_into_person_id: null
    - claim:
        id: c_6zFZ0tTOAPt_3Zc4KRhqUJ
        subject_person_id: p_8kzSpprqvBVxvPECr52ZAv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_stumq3LKUX83aY7FDSYoQ9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wti3nyf5GoP2GtHYCu6m3v
          claim_id: c_6zFZ0tTOAPt_3Zc4KRhqUJ
          source_id: s_IeYYSJvKDHhZ4U76YyTzFW
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206726 王紹先）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_IeYYSJvKDHhZ4U76YyTzFW
            source_type: api_record
            title: 中国历代人物传记资料库：王紹基（CBDB 222280）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222280&o=json
            external_identifier: CBDB:222280
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8kzSpprqvBVxvPECr52ZAv
        status: active
        display_name: 王紹基
        merged_into_person_id: null
    - claim:
        id: c_eVWhAfvyXy1phHIT4cDwaw
        subject_person_id: p_G1ykgCfKWZQhXAt9QemUyd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_stumq3LKUX83aY7FDSYoQ9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qCjdklvK-Hw2FC0Yc1_myL
          claim_id: c_eVWhAfvyXy1phHIT4cDwaw
          source_id: s_0_h0FChb9_0eJrFbV_xotM
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206726 王紹先）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0_h0FChb9_0eJrFbV_xotM
            source_type: api_record
            title: 中国历代人物传记资料库：王紹績（CBDB 222279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222279&o=json
            external_identifier: CBDB:222279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_G1ykgCfKWZQhXAt9QemUyd
        status: active
        display_name: 王紹績
        merged_into_person_id: null
---

# 王紹先

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹先 | accepted |
| birth.date | 1559年 | accepted |
| bio.summary | 王紹先（生于1559年），明人物。明清進士進士，籍贯咸寧，入仕進士。（中国历代人物传记资料库 CBDB 206726） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MzjvisS65eTZTH4c6EA4mL | 王昌功 | accepted |
| spouses | p_pkpzoUkjchaQHfYiALSDMh | 雒氏 | accepted |
| ancestors | p_U6gQS1uZx6TnaacuyLTD96 | 王懋 | accepted |
| ancestors | p_Ub1fRrchPGg2dwmwMQ21yb | 王用賢 | accepted |
| other | p_8ZyPWhFTG5KhhhubTquXQD | 王紹慶 | accepted |
| other | p_8kzSpprqvBVxvPECr52ZAv | 王紹基 | accepted |
| other | p_G1ykgCfKWZQhXAt9QemUyd | 王紹績 | accepted |

## 外部来源

- [中国历代人物传记资料库：雒氏(王紹先妻)（CBDB 222278）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222278&o=json)
- [中国历代人物传记资料库：王紹基（CBDB 222280）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222280&o=json)
- [中国历代人物传记资料库：王紹績（CBDB 222279）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222279&o=json)
- [中国历代人物传记资料库：王紹慶（CBDB 222281）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222281&o=json)
- [中国历代人物传记资料库：王紹先（CBDB 206726）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206726&o=json)
