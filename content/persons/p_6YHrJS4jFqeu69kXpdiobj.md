---
schema: wang-person/v1
id: p_6YHrJS4jFqeu69kXpdiobj
status: active
merged_into: null
display_name: 王大祥
cbdb_id: 208601
revision: 8
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XbKe1p6EGkEhofAGg3kaFK
        subject_person_id: p_6YHrJS4jFqeu69kXpdiobj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大祥，明人物。隆慶五年進士，籍贯宣城。（中国历代人物传记资料库 CBDB 208601）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_0eu-zPt8Fhy9U5Js3wv11V
          claim_id: c_XbKe1p6EGkEhofAGg3kaFK
          source_id: s_hQ3XyMK1g6c1ZyvtkKuZCM
          stance: supports
          locator: CBDB:208601
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wdBb47WzkESBxAk1T64Bnq
        subject_person_id: p_6YHrJS4jFqeu69kXpdiobj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1Wiuce8xgPiGmzyY5E4mJg
          claim_id: c_wdBb47WzkESBxAk1T64Bnq
          source_id: s_hQ3XyMK1g6c1ZyvtkKuZCM
          stance: supports
          locator: CBDB:208601
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
        id: p_CgzpCKBF2Cnch1g1qwE9Ao
        status: active
        display_name: 王世能
        merged_into_person_id: null
    - claim:
        id: c_TjRDpmBbcexAXc9VvTB_mb
        subject_person_id: p_6YHrJS4jFqeu69kXpdiobj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AkfQ8w96sptoeKVc6xQdP5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hJp8qk9gvZUgKs88zY_-kl
          claim_id: c_TjRDpmBbcexAXc9VvTB_mb
          source_id: s_JKNMBzJyEhWiyUmxMNbyJu
          stance: supports
          locator: CBDB：兄弟 王世能（205793）之父／母 王大祥
          quotation: null
          interpretation_note: 由兄弟关系推断：王世範 与 王世能 为同胞（CBDB 记「弟」），王世能 之父／母即 王世範 之父／母。
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
        id: c_ESA3XghscpgitONGNnwVl4
        subject_person_id: p_6YHrJS4jFqeu69kXpdiobj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XzQbJ25qhaxLXsCui7XRLL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SC3YvgcFKWhzZ1S29INmTd
          claim_id: c_ESA3XghscpgitONGNnwVl4
          source_id: s_DmwDZnVX3eMeG5j9sfrfop
          stance: supports
          locator: CBDB：兄弟 王世能（205793）之父／母 王大祥
          quotation: null
          interpretation_note: 由兄弟关系推断：王世濟 与 王世能 为同胞（CBDB 记「兄」），王世能 之父／母即 王世濟 之父／母。
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
        id: c_0VHg_cfsbgIzrD9PFYOOGf
        subject_person_id: p_6YHrJS4jFqeu69kXpdiobj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ccDHrZyPntVRhq9jSt3nxJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GYniy3UuSdtK3Beix7ErBA
          claim_id: c_0VHg_cfsbgIzrD9PFYOOGf
          source_id: s_SYkksk9MDu0wK1ICnvLauY
          stance: supports
          locator: CBDB：兄弟 王世能（205793）之父／母 王大祥
          quotation: null
          interpretation_note: 由兄弟关系推断：王世舉 与 王世能 为同胞（CBDB 记「兄」），王世能 之父／母即 王世舉 之父／母。
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
        id: c_l4BC06g4kWz5BhKiUoTV1B
        subject_person_id: p_6YHrJS4jFqeu69kXpdiobj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_inpNf4kLCkEjT3u3AKwH2B
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qeCdNuPQ7i1eLeo2uDw5kk
          claim_id: c_l4BC06g4kWz5BhKiUoTV1B
          source_id: s_ADp5tjbGJ8Jxa3jvI7qBiG
          stance: supports
          locator: CBDB：兄弟 王世能（205793）之父／母 王大祥
          quotation: null
          interpretation_note: 由兄弟关系推断：王世科 与 王世能 为同胞（CBDB 记「兄」），王世能 之父／母即 王世科 之父／母。
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
        id: c_Jl1JZe7CMFWCsaKvOflnA3
        subject_person_id: p_6YHrJS4jFqeu69kXpdiobj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nYmtkVy6Fx5T1UjL6CESmD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__tdf2OEoJy9sJ0AmWA3xG-
          claim_id: c_Jl1JZe7CMFWCsaKvOflnA3
          source_id: s_eyaasS3U6-HaE27fwMHOQN
          stance: supports
          locator: CBDB：兄弟 王世能（205793）之父／母 王大祥
          quotation: null
          interpretation_note: 由兄弟关系推断：王世熙 与 王世能 为同胞（CBDB 记「兄」），王世能 之父／母即 王世熙 之父／母。
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
        id: c_Uh-pvpkEo4ediECIfHrgLe
        subject_person_id: p_6YHrJS4jFqeu69kXpdiobj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yaqBB35ugjHxWAwyxd7uMt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iUEiCbOYUT5zNGiXE5dS0G
          claim_id: c_Uh-pvpkEo4ediECIfHrgLe
          source_id: s__DD6yd8VkPtm2-kuN-0EGm
          stance: supports
          locator: CBDB：兄弟 王世能（205793）之父／母 王大祥
          quotation: null
          interpretation_note: 由兄弟关系推断：王世英 与 王世能 为同胞（CBDB 记「兄」），王世能 之父／母即 王世英 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王大祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王大祥，明人物。隆慶五年進士，籍贯宣城。（中国历代人物传记资料库 CBDB 208601） | accepted |
| name.primary | 王大祥 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_CgzpCKBF2Cnch1g1qwE9Ao | 王世能 | accepted |
| children | p_AkfQ8w96sptoeKVc6xQdP5 | 王世範 | accepted |
| children | p_XzQbJ25qhaxLXsCui7XRLL | 王世濟 | accepted |
| children | p_ccDHrZyPntVRhq9jSt3nxJ | 王世舉 | accepted |
| children | p_inpNf4kLCkEjT3u3AKwH2B | 王世科 | accepted |
| children | p_nYmtkVy6Fx5T1UjL6CESmD | 王世熙 | accepted |
| children | p_yaqBB35ugjHxWAwyxd7uMt | 王世英 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大祥（CBDB 208601）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208601&o=json)
- [中国历代人物传记资料库：王世範（CBDB 208605）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208605&o=json)
- [中国历代人物传记资料库：王世濟（CBDB 208607）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208607&o=json)
- [中国历代人物传记资料库：王世舉（CBDB 208610）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208610&o=json)
- [中国历代人物传记资料库：王世科（CBDB 208609）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208609&o=json)
- [中国历代人物传记资料库：王世熙（CBDB 208608）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208608&o=json)
- [中国历代人物传记资料库：王世英（CBDB 208606）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208606&o=json)
