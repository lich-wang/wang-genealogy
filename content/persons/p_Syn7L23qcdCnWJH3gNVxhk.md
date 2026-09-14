---
schema: wang-person/v1
id: p_Syn7L23qcdCnWJH3gNVxhk
status: active
merged_into: null
display_name: 王國柱
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kL2p2J1tRs3hxPpui6tMeu
        subject_person_id: p_Syn7L23qcdCnWJH3gNVxhk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國柱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bqm5G7wCLDSDbRZeTBumpu
          claim_id: c_kL2p2J1tRs3hxPpui6tMeu
          source_id: s_e934oePsLt7rBWzJFsQKXK
          stance: supports
          locator: CBDB:221612
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221612）
          source: &a1
            id: s_e934oePsLt7rBWzJFsQKXK
            source_type: api_record
            title: 中国历代人物传记资料库：王國柱（CBDB 221612）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221612&o=json
            external_identifier: CBDB:221612
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.318Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8gh8Bphx3cEn4ZdUzJB6rL
        subject_person_id: p_Syn7L23qcdCnWJH3gNVxhk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國柱，明人物。萬曆八年進士，籍贯烏程，曾任參將、僉事、訓導。（中国历代人物传记资料库 CBDB 221612）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TaHGGC9UUMfNaJCmcKYkdz
          claim_id: c_8gh8Bphx3cEn4ZdUzJB6rL
          source_id: s_e934oePsLt7rBWzJFsQKXK
          stance: supports
          locator: CBDB:221612
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_UDLvmgqy5BbnCG_xVBYuyu
        subject_person_id: p_Syn7L23qcdCnWJH3gNVxhk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Vu5wPFU9etB1mZyT3n6avf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NS8Km9clhrQGpV2Kv4Og0b
          claim_id: c_UDLvmgqy5BbnCG_xVBYuyu
          source_id: s_e934oePsLt7rBWzJFsQKXK
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百零三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Vu5wPFU9etB1mZyT3n6avf
        status: active
        display_name: 王永寧
        merged_into_person_id: null
    - claim:
        id: c_WNbWwOg7mYOOHqpdRZEEC5
        subject_person_id: p_Syn7L23qcdCnWJH3gNVxhk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3BGTv7XukT3r475AYwkCG6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JTYzKpktAkeyivw2HVZUtd
          claim_id: c_WNbWwOg7mYOOHqpdRZEEC5
          source_id: s_jc9a7bB4n9iPMw6FMoEygu
          stance: supports
          locator: CBDB：兄弟 王永寧（206689）之父／母 王國柱
          quotation: null
          interpretation_note: 由兄弟关系推断：王永貞 与 王永寧 为同胞（CBDB 记「兄」），王永寧 之父／母即 王永貞 之父／母。
          source:
            id: s_jc9a7bB4n9iPMw6FMoEygu
            source_type: api_record
            title: 中国历代人物传记资料库：王永貞（CBDB 221619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221619&o=json
            external_identifier: CBDB:221619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3BGTv7XukT3r475AYwkCG6
        status: active
        display_name: 王永貞
        merged_into_person_id: null
    - claim:
        id: c__cmU-iXml-2LpHcxPTzIwY
        subject_person_id: p_Syn7L23qcdCnWJH3gNVxhk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A4uLh51GKJjJeaHMH6az6n
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TIOVvSG6zL35L2FJ9o5PmD
          claim_id: c__cmU-iXml-2LpHcxPTzIwY
          source_id: s_xeTKUaWciWRFuiqgoEcUki
          stance: supports
          locator: CBDB：兄弟 王永寧（206689）之父／母 王國柱
          quotation: null
          interpretation_note: 由兄弟关系推断：王永偉 与 王永寧 为同胞（CBDB 记「弟」），王永寧 之父／母即 王永偉 之父／母。
          source:
            id: s_xeTKUaWciWRFuiqgoEcUki
            source_type: api_record
            title: 中国历代人物传记资料库：王永偉（CBDB 221617）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221617&o=json
            external_identifier: CBDB:221617
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_A4uLh51GKJjJeaHMH6az6n
        status: active
        display_name: 王永偉
        merged_into_person_id: null
    - claim:
        id: c_AagZv7xkaACm-rsNcytkmI
        subject_person_id: p_Syn7L23qcdCnWJH3gNVxhk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EVMeUSv4ou7fHgbcEDn6f7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QIUU3TgfsG2LQ1rPwUAMT8
          claim_id: c_AagZv7xkaACm-rsNcytkmI
          source_id: s_RwOQ7uyLrIJuYqFJlJ4XM7
          stance: supports
          locator: CBDB：兄弟 王永寧（206689）之父／母 王國柱
          quotation: null
          interpretation_note: 由兄弟关系推断：王永明 与 王永寧 为同胞（CBDB 记「兄」），王永寧 之父／母即 王永明 之父／母。
          source:
            id: s_RwOQ7uyLrIJuYqFJlJ4XM7
            source_type: api_record
            title: 中国历代人物传记资料库：王永明（CBDB 221620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221620&o=json
            external_identifier: CBDB:221620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EVMeUSv4ou7fHgbcEDn6f7
        status: active
        display_name: 王永明
        merged_into_person_id: null
    - claim:
        id: c_Vgj-79nPEdj_n_v9HHulKE
        subject_person_id: p_Syn7L23qcdCnWJH3gNVxhk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GWBY7CNQAWrzqXLSvvUZtg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EFhbyRJ1yx5q2Qa6EMnxbB
          claim_id: c_Vgj-79nPEdj_n_v9HHulKE
          source_id: s_6tlA-Fqy1R7c45DbgR76C9
          stance: supports
          locator: CBDB：兄弟 王永寧（206689）之父／母 王國柱
          quotation: null
          interpretation_note: 由兄弟关系推断：王永昌 与 王永寧 为同胞（CBDB 记「弟」），王永寧 之父／母即 王永昌 之父／母。
          source:
            id: s_6tlA-Fqy1R7c45DbgR76C9
            source_type: api_record
            title: 中国历代人物传记资料库：王永昌（CBDB 221618）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221618&o=json
            external_identifier: CBDB:221618
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GWBY7CNQAWrzqXLSvvUZtg
        status: active
        display_name: 王永昌
        merged_into_person_id: null
    - claim:
        id: c_PB8l8QUAwqbIjMYkt5j0bC
        subject_person_id: p_Syn7L23qcdCnWJH3gNVxhk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Mvoi5b8Hozb21JQz5pNeHg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Kaek0C_9Sp2TTbMlLGk-aO
          claim_id: c_PB8l8QUAwqbIjMYkt5j0bC
          source_id: s_GBeVX8yMQBpL9HvEVM8y6c
          stance: supports
          locator: CBDB：兄弟 王永寧（206689）之父／母 王國柱
          quotation: null
          interpretation_note: 由兄弟关系推断：王永忠 与 王永寧 为同胞（CBDB 记「兄」），王永寧 之父／母即 王永忠 之父／母。
          source:
            id: s_GBeVX8yMQBpL9HvEVM8y6c
            source_type: api_record
            title: 中国历代人物传记资料库：王永忠（CBDB 221623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221623&o=json
            external_identifier: CBDB:221623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Mvoi5b8Hozb21JQz5pNeHg
        status: active
        display_name: 王永忠
        merged_into_person_id: null
    - claim:
        id: c_o2MS2h9NvhU2INDRLoYMgr
        subject_person_id: p_Syn7L23qcdCnWJH3gNVxhk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Zo5DweXWc4C5y5j7iRVVgd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7a58TPhhSC6pvPKbDRSeYl
          claim_id: c_o2MS2h9NvhU2INDRLoYMgr
          source_id: s_-dSY-AsrXeyb1DM3mOQI-N
          stance: supports
          locator: CBDB：兄弟 王永寧（206689）之父／母 王國柱
          quotation: null
          interpretation_note: 由兄弟关系推断：王永嘉 与 王永寧 为同胞（CBDB 记「兄」），王永寧 之父／母即 王永嘉 之父／母。
          source:
            id: s_-dSY-AsrXeyb1DM3mOQI-N
            source_type: api_record
            title: 中国历代人物传记资料库：王永嘉（CBDB 221624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221624&o=json
            external_identifier: CBDB:221624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Zo5DweXWc4C5y5j7iRVVgd
        status: active
        display_name: 王永嘉
        merged_into_person_id: null
    - claim:
        id: c_f5EIPiPAMFNF9zhYh904i3
        subject_person_id: p_Syn7L23qcdCnWJH3gNVxhk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hoiR5qTnipsgRQf7sFqbiX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fSp-k4XYKMElIxHaJB_IEo
          claim_id: c_f5EIPiPAMFNF9zhYh904i3
          source_id: s_9-qLG7RIez77JGvYA_kGQg
          stance: supports
          locator: CBDB：兄弟 王永寧（206689）之父／母 王國柱
          quotation: null
          interpretation_note: 由兄弟关系推断：王永慶 与 王永寧 为同胞（CBDB 记「兄」），王永寧 之父／母即 王永慶 之父／母。
          source:
            id: s_9-qLG7RIez77JGvYA_kGQg
            source_type: api_record
            title: 中国历代人物传记资料库：王永慶（CBDB 221622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221622&o=json
            external_identifier: CBDB:221622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hoiR5qTnipsgRQf7sFqbiX
        status: active
        display_name: 王永慶
        merged_into_person_id: null
    - claim:
        id: c_j8YnEsvsdy4UugiIsTl6Sj
        subject_person_id: p_Syn7L23qcdCnWJH3gNVxhk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jAWC9pLdoDy9ig1a59h9MZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5NmEskfRdkd0XM7FclfJ1g
          claim_id: c_j8YnEsvsdy4UugiIsTl6Sj
          source_id: s_Q3RYAE0YdMwaz8erpC0IDZ
          stance: supports
          locator: CBDB：兄弟 王永寧（206689）之父／母 王國柱
          quotation: null
          interpretation_note: 由兄弟关系推断：王永靖 与 王永寧 为同胞（CBDB 记「兄」），王永寧 之父／母即 王永靖 之父／母。
          source:
            id: s_Q3RYAE0YdMwaz8erpC0IDZ
            source_type: api_record
            title: 中国历代人物传记资料库：王永靖（CBDB 221621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221621&o=json
            external_identifier: CBDB:221621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jAWC9pLdoDy9ig1a59h9MZ
        status: active
        display_name: 王永靖
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王國柱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國柱 | accepted |
| bio.summary | 王國柱，明人物。萬曆八年進士，籍贯烏程，曾任參將、僉事、訓導。（中国历代人物传记资料库 CBDB 221612） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Vu5wPFU9etB1mZyT3n6avf | 王永寧 | accepted |
| children | p_3BGTv7XukT3r475AYwkCG6 | 王永貞 | accepted |
| children | p_A4uLh51GKJjJeaHMH6az6n | 王永偉 | accepted |
| children | p_EVMeUSv4ou7fHgbcEDn6f7 | 王永明 | accepted |
| children | p_GWBY7CNQAWrzqXLSvvUZtg | 王永昌 | accepted |
| children | p_Mvoi5b8Hozb21JQz5pNeHg | 王永忠 | accepted |
| children | p_Zo5DweXWc4C5y5j7iRVVgd | 王永嘉 | accepted |
| children | p_hoiR5qTnipsgRQf7sFqbiX | 王永慶 | accepted |
| children | p_jAWC9pLdoDy9ig1a59h9MZ | 王永靖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國柱（CBDB 221612）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221612&o=json)
- [中国历代人物传记资料库：王永昌（CBDB 221618）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221618&o=json)
- [中国历代人物传记资料库：王永嘉（CBDB 221624）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221624&o=json)
- [中国历代人物传记资料库：王永靖（CBDB 221621）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221621&o=json)
- [中国历代人物传记资料库：王永明（CBDB 221620）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221620&o=json)
- [中国历代人物传记资料库：王永慶（CBDB 221622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221622&o=json)
- [中国历代人物传记资料库：王永偉（CBDB 221617）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221617&o=json)
- [中国历代人物传记资料库：王永貞（CBDB 221619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221619&o=json)
- [中国历代人物传记资料库：王永忠（CBDB 221623）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221623&o=json)
