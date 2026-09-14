---
schema: wang-person/v1
id: p_kaRFgEVMADyEpNGFyiYQu5
status: active
merged_into: null
display_name: 王汝義
cbdb_id: 241030
revision: 6
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tHxP4DYyVutLwJ2Cpvqym3
        subject_person_id: p_kaRFgEVMADyEpNGFyiYQu5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝義，明人物。正統十三年進士，籍贯合州。（中国历代人物传记资料库 CBDB 241030）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_pZwmKFcabG15zp_Gh24neG
          claim_id: c_tHxP4DYyVutLwJ2Cpvqym3
          source_id: s_7tmLAYXPNhkFwWnLjNweWN
          stance: supports
          locator: CBDB:241030
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7tmLAYXPNhkFwWnLjNweWN
            source_type: api_record
            title: 中国历代人物传记资料库：王汝義（CBDB 241030）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241030&o=json
            external_identifier: CBDB:241030
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_p1wNHAi4C2kv7BLD6uWAMA
        subject_person_id: p_kaRFgEVMADyEpNGFyiYQu5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3GZKz1E7AzopWpueKxHJjB
          claim_id: c_p1wNHAi4C2kv7BLD6uWAMA
          source_id: s_7tmLAYXPNhkFwWnLjNweWN
          stance: supports
          locator: CBDB:241030
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_nEok3-7d4U5lsiPo3e4BQ1
        subject_person_id: p_kaRFgEVMADyEpNGFyiYQu5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yUh5Ys3GsJr5X9EvLigP9m
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uJxC-1aLtf-UYAkFgxC0UX
          claim_id: c_nEok3-7d4U5lsiPo3e4BQ1
          source_id: s_7tmLAYXPNhkFwWnLjNweWN
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第四十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7tmLAYXPNhkFwWnLjNweWN
            source_type: api_record
            title: 中国历代人物传记资料库：王汝義（CBDB 241030）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241030&o=json
            external_identifier: CBDB:241030
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_yUh5Ys3GsJr5X9EvLigP9m
        status: active
        display_name: 王璧
        merged_into_person_id: null
    - claim:
        id: c_i_9HhE8o1M8d6U0_AArVqC
        subject_person_id: p_kaRFgEVMADyEpNGFyiYQu5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_An9MoaQzb7STT5R9QRDiX4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uiZxhxSLF3NBY7Z_t7amE1
          claim_id: c_i_9HhE8o1M8d6U0_AArVqC
          source_id: s_P9Bbp7ylHsh7_EYx7wEL11
          stance: supports
          locator: CBDB：兄弟 王璧（208145）之父／母 王汝義
          quotation: null
          interpretation_note: 由兄弟关系推断：王璋 与 王璧 为同胞（CBDB 记「兄」），王璧 之父／母即 王璋 之父／母。
          source:
            id: s_P9Bbp7ylHsh7_EYx7wEL11
            source_type: api_record
            title: 中国历代人物传记资料库：王璋（CBDB 241036）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241036&o=json
            external_identifier: CBDB:241036
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_An9MoaQzb7STT5R9QRDiX4
        status: active
        display_name: 王璋
        merged_into_person_id: null
    - claim:
        id: c_qX4HvwwFjXD4C1wtFsdbwm
        subject_person_id: p_kaRFgEVMADyEpNGFyiYQu5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BVWFGMKZ6mBRGgbJEUqY4P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hPHkCua-kqpXkaKCBJB2_Z
          claim_id: c_qX4HvwwFjXD4C1wtFsdbwm
          source_id: s_tH4sfbyti33rX3za6pkEwy
          stance: supports
          locator: CBDB：兄弟 王璧（208145）之父／母 王汝義
          quotation: null
          interpretation_note: 由兄弟关系推断：王珪 与 王璧 为同胞（CBDB 记「兄」），王璧 之父／母即 王珪 之父／母。
          source:
            id: s_tH4sfbyti33rX3za6pkEwy
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 241034）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241034&o=json
            external_identifier: CBDB:241034
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BVWFGMKZ6mBRGgbJEUqY4P
        status: active
        display_name: 王珪
        merged_into_person_id: null
    - claim:
        id: c_5zJzrzvC6BNAj3X953kYOm
        subject_person_id: p_kaRFgEVMADyEpNGFyiYQu5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JC4xS6ndeTfcDNDrJZuDCx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kUUgmYlhXNAtP8XiisMEN0
          claim_id: c_5zJzrzvC6BNAj3X953kYOm
          source_id: s_GB6mfUtaMWbucTEHClrZII
          stance: supports
          locator: CBDB：兄弟 王璧（208145）之父／母 王汝義
          quotation: null
          interpretation_note: 由兄弟关系推断：王瓚 与 王璧 为同胞（CBDB 记「兄」），王璧 之父／母即 王瓚 之父／母。
          source:
            id: s_GB6mfUtaMWbucTEHClrZII
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 241035）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241035&o=json
            external_identifier: CBDB:241035
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JC4xS6ndeTfcDNDrJZuDCx
        status: active
        display_name: 王瓚
        merged_into_person_id: null
    - claim:
        id: c_LAdEjcJmVZhA6YFdTK-iGR
        subject_person_id: p_kaRFgEVMADyEpNGFyiYQu5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_k33S1s7NsjC167CaCVTDtd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hqqts4YUmi0Ayb8OAFptCK
          claim_id: c_LAdEjcJmVZhA6YFdTK-iGR
          source_id: s_DVfui97CDnLoAgOQZoNrNh
          stance: supports
          locator: CBDB：兄弟 王璧（208145）之父／母 王汝義
          quotation: null
          interpretation_note: 由兄弟关系推断：王瓊 与 王璧 为同胞（CBDB 记「兄」），王璧 之父／母即 王瓊 之父／母。
          source:
            id: s_DVfui97CDnLoAgOQZoNrNh
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 241037）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241037&o=json
            external_identifier: CBDB:241037
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_k33S1s7NsjC167CaCVTDtd
        status: active
        display_name: 王瓊
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王汝義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王汝義，明人物。正統十三年進士，籍贯合州。（中国历代人物传记资料库 CBDB 241030） | accepted |
| name.primary | 王汝義 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_yUh5Ys3GsJr5X9EvLigP9m | 王璧 | accepted |
| children | p_An9MoaQzb7STT5R9QRDiX4 | 王璋 | accepted |
| children | p_BVWFGMKZ6mBRGgbJEUqY4P | 王珪 | accepted |
| children | p_JC4xS6ndeTfcDNDrJZuDCx | 王瓚 | accepted |
| children | p_k33S1s7NsjC167CaCVTDtd | 王瓊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珪（CBDB 241034）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241034&o=json)
- [中国历代人物传记资料库：王瓊（CBDB 241037）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241037&o=json)
- [中国历代人物传记资料库：王汝義（CBDB 241030）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241030&o=json)
- [中国历代人物传记资料库：王瓚（CBDB 241035）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241035&o=json)
- [中国历代人物传记资料库：王璋（CBDB 241036）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241036&o=json)
