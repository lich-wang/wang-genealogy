---
schema: wang-person/v1
id: p_CgzpCKBF2Cnch1g1qwE9Ao
status: active
merged_into: null
display_name: 王世能
cbdb_id: 205793
revision: 10
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DSi3GXwXzP2Zzs9Ac3vnem
        subject_person_id: p_CgzpCKBF2Cnch1g1qwE9Ao
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世能（生于1536年），明人物。明清進士進士，籍贯宣城，入仕進士。（中国历代人物传记资料库 CBDB 205793）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_eWncWtzIDVk6ONq7u3jgfz
          claim_id: c_DSi3GXwXzP2Zzs9Ac3vnem
          source_id: s_CX9ukcMWhFuD7CCi9yprcK
          stance: supports
          locator: CBDB:205793
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_CX9ukcMWhFuD7CCi9yprcK
            source_type: api_record
            title: 中国历代人物传记资料库：王世能（CBDB 205793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205793&o=json
            external_identifier: CBDB:205793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Fg8SVrgNVdd8GhBtFpbHf9
        subject_person_id: p_CgzpCKBF2Cnch1g1qwE9Ao
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1536年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1536-01-01
            latest: 1536-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vsAmVGs7xrfSGB485KuwE4
          claim_id: c_Fg8SVrgNVdd8GhBtFpbHf9
          source_id: s_CX9ukcMWhFuD7CCi9yprcK
          stance: supports
          locator: CBDB:205793
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1536
          source:
            id: s_CX9ukcMWhFuD7CCi9yprcK
            source_type: api_record
            title: 中国历代人物传记资料库：王世能（CBDB 205793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205793&o=json
            external_identifier: CBDB:205793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_J2wJTrgZpSSmN2kAjGA2MB
        subject_person_id: p_CgzpCKBF2Cnch1g1qwE9Ao
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世能
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_y1mHYZ6Hz75a97CfLKipxj
          claim_id: c_J2wJTrgZpSSmN2kAjGA2MB
          source_id: s_CX9ukcMWhFuD7CCi9yprcK
          stance: supports
          locator: CBDB:205793
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1536
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Q-apkLo78dcetCCVUEwUBd
        subject_person_id: p_6YHrJS4jFqeu69kXpdiobj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CgzpCKBF2Cnch1g1qwE9Ao
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Glros8Ez95KbtMMEtjAvPZ
          claim_id: c_Q-apkLo78dcetCCVUEwUBd
          source_id: s_hQ3XyMK1g6c1ZyvtkKuZCM
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第二甲第六十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hQ3XyMK1g6c1ZyvtkKuZCM
            source_type: api_record
            title: 中国历代人物传记资料库：王大祥（CBDB 208601）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208601&o=json
            external_identifier: CBDB:208601
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_6YHrJS4jFqeu69kXpdiobj
        status: active
        display_name: 王大祥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_qBPeLjx8Ya5DiihwakBXlE
        subject_person_id: p_PvyCBtvgFt1A6tKBuzUbEc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CgzpCKBF2Cnch1g1qwE9Ao
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OT-Zqz1ldlq17NEQRXMuo5
          claim_id: c_qBPeLjx8Ya5DiihwakBXlE
          source_id: s_sG5Ltd7tZS8dvjK5HF191z
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第二甲第六十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sG5Ltd7tZS8dvjK5HF191z
            source_type: api_record
            title: 中国历代人物传记资料库：王文正（CBDB 208599）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208599&o=json
            external_identifier: CBDB:208599
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.950Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PvyCBtvgFt1A6tKBuzUbEc
        status: active
        display_name: 王文正
        merged_into_person_id: null
    - claim:
        id: c_PKGHRow_Wi7IhLO57jAM6s
        subject_person_id: p_yQCRVHipLWZ8c2x5fSSsjT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CgzpCKBF2Cnch1g1qwE9Ao
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WDBIfI21mh542eqqlPcdp-
          claim_id: c_PKGHRow_Wi7IhLO57jAM6s
          source_id: s_hfm9bzWw65dmJMVzUtsjbn
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第二甲第六十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hfm9bzWw65dmJMVzUtsjbn
            source_type: api_record
            title: 中国历代人物传记资料库：王宗興（CBDB 208600）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208600&o=json
            external_identifier: CBDB:208600
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.950Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_yQCRVHipLWZ8c2x5fSSsjT
        status: active
        display_name: 王宗興
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_VKesU_OXH5a277-0i8ZVhz
        subject_person_id: p_AkfQ8w96sptoeKVc6xQdP5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_CgzpCKBF2Cnch1g1qwE9Ao
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1q2dP_XlUG4kfubF-ol3_9
          claim_id: c_VKesU_OXH5a277-0i8ZVhz
          source_id: s_JKNMBzJyEhWiyUmxMNbyJu
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205793 王世能）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JKNMBzJyEhWiyUmxMNbyJu
            source_type: api_record
            title: 中国历代人物传记资料库：王世範（CBDB 208605）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208605&o=json
            external_identifier: CBDB:208605
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AkfQ8w96sptoeKVc6xQdP5
        status: active
        display_name: 王世範
        merged_into_person_id: null
    - claim:
        id: c_-uAH4dJBeIhrao2Titdueb
        subject_person_id: p_CgzpCKBF2Cnch1g1qwE9Ao
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XzQbJ25qhaxLXsCui7XRLL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wRutxk6Gh10eA5nqD5NBH-
          claim_id: c_-uAH4dJBeIhrao2Titdueb
          source_id: s_DmwDZnVX3eMeG5j9sfrfop
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205793 王世能）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_DmwDZnVX3eMeG5j9sfrfop
            source_type: api_record
            title: 中国历代人物传记资料库：王世濟（CBDB 208607）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208607&o=json
            external_identifier: CBDB:208607
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XzQbJ25qhaxLXsCui7XRLL
        status: active
        display_name: 王世濟
        merged_into_person_id: null
    - claim:
        id: c_SA6sjT7LoQCIiIamSoQq6a
        subject_person_id: p_CgzpCKBF2Cnch1g1qwE9Ao
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ccDHrZyPntVRhq9jSt3nxJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fH-I7DOf_uorgojj3Z7nkv
          claim_id: c_SA6sjT7LoQCIiIamSoQq6a
          source_id: s_SYkksk9MDu0wK1ICnvLauY
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205793 王世能）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_SYkksk9MDu0wK1ICnvLauY
            source_type: api_record
            title: 中国历代人物传记资料库：王世舉（CBDB 208610）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208610&o=json
            external_identifier: CBDB:208610
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ccDHrZyPntVRhq9jSt3nxJ
        status: active
        display_name: 王世舉
        merged_into_person_id: null
    - claim:
        id: c_bn5cz8TxnbwWYMJ7eT9VYJ
        subject_person_id: p_CgzpCKBF2Cnch1g1qwE9Ao
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_inpNf4kLCkEjT3u3AKwH2B
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NQ5C_4zikM1bXitCBe3P9J
          claim_id: c_bn5cz8TxnbwWYMJ7eT9VYJ
          source_id: s_ADp5tjbGJ8Jxa3jvI7qBiG
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205793 王世能）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ADp5tjbGJ8Jxa3jvI7qBiG
            source_type: api_record
            title: 中国历代人物传记资料库：王世科（CBDB 208609）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208609&o=json
            external_identifier: CBDB:208609
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_inpNf4kLCkEjT3u3AKwH2B
        status: active
        display_name: 王世科
        merged_into_person_id: null
    - claim:
        id: c_-oII7pt9bZr5iz-zg9Njv9
        subject_person_id: p_CgzpCKBF2Cnch1g1qwE9Ao
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nYmtkVy6Fx5T1UjL6CESmD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nERRzn2yffaZzR_HC3fQR3
          claim_id: c_-oII7pt9bZr5iz-zg9Njv9
          source_id: s_eyaasS3U6-HaE27fwMHOQN
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205793 王世能）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_eyaasS3U6-HaE27fwMHOQN
            source_type: api_record
            title: 中国历代人物传记资料库：王世熙（CBDB 208608）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208608&o=json
            external_identifier: CBDB:208608
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nYmtkVy6Fx5T1UjL6CESmD
        status: active
        display_name: 王世熙
        merged_into_person_id: null
    - claim:
        id: c_dbIh43zF64tDOuz9K6hWrI
        subject_person_id: p_CgzpCKBF2Cnch1g1qwE9Ao
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yaqBB35ugjHxWAwyxd7uMt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_odCvfoBUKdlkejHMEgYHIZ
          claim_id: c_dbIh43zF64tDOuz9K6hWrI
          source_id: s__DD6yd8VkPtm2-kuN-0EGm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205793 王世能）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__DD6yd8VkPtm2-kuN-0EGm
            source_type: api_record
            title: 中国历代人物传记资料库：王世英（CBDB 208606）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208606&o=json
            external_identifier: CBDB:208606
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yaqBB35ugjHxWAwyxd7uMt
        status: active
        display_name: 王世英
        merged_into_person_id: null
---

# 王世能

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王世能（生于1536年），明人物。明清進士進士，籍贯宣城，入仕進士。（中国历代人物传记资料库 CBDB 205793） | accepted |
| birth.date | 1536年 | accepted |
| name.primary | 王世能 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6YHrJS4jFqeu69kXpdiobj | 王大祥 | accepted |
| ancestors | p_PvyCBtvgFt1A6tKBuzUbEc | 王文正 | accepted |
| ancestors | p_yQCRVHipLWZ8c2x5fSSsjT | 王宗興 | accepted |
| other | p_AkfQ8w96sptoeKVc6xQdP5 | 王世範 | accepted |
| other | p_XzQbJ25qhaxLXsCui7XRLL | 王世濟 | accepted |
| other | p_ccDHrZyPntVRhq9jSt3nxJ | 王世舉 | accepted |
| other | p_inpNf4kLCkEjT3u3AKwH2B | 王世科 | accepted |
| other | p_nYmtkVy6Fx5T1UjL6CESmD | 王世熙 | accepted |
| other | p_yaqBB35ugjHxWAwyxd7uMt | 王世英 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大祥（CBDB 208601）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208601&o=json)
- [中国历代人物传记资料库：王世範（CBDB 208605）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208605&o=json)
- [中国历代人物传记资料库：王世濟（CBDB 208607）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208607&o=json)
- [中国历代人物传记资料库：王世舉（CBDB 208610）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208610&o=json)
- [中国历代人物传记资料库：王世科（CBDB 208609）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208609&o=json)
- [中国历代人物传记资料库：王世能（CBDB 205793）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205793&o=json)
- [中国历代人物传记资料库：王世熙（CBDB 208608）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208608&o=json)
- [中国历代人物传记资料库：王世英（CBDB 208606）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208606&o=json)
- [中国历代人物传记资料库：王文正（CBDB 208599）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208599&o=json)
- [中国历代人物传记资料库：王宗興（CBDB 208600）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208600&o=json)
