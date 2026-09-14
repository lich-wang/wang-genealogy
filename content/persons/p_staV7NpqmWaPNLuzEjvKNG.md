---
schema: wang-person/v1
id: p_staV7NpqmWaPNLuzEjvKNG
status: active
merged_into: null
display_name: 王宗寶
cbdb_id: 221967
revision: 7
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TJKkUBJ7K8tK6XSGeDnA4h
        subject_person_id: p_staV7NpqmWaPNLuzEjvKNG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗寶，明人物。萬曆八年進士，籍贯文安，曾任省祭官。（中国历代人物传记资料库 CBDB 221967）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_UDJ8S2pzhXD4BWFCBTP9-5
          claim_id: c_TJKkUBJ7K8tK6XSGeDnA4h
          source_id: s_t47BV8TEC9aNcfVnpVDK74
          stance: supports
          locator: CBDB:221967
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_t47BV8TEC9aNcfVnpVDK74
            source_type: api_record
            title: 中国历代人物传记资料库：王宗寶（CBDB 221967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221967&o=json
            external_identifier: CBDB:221967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SQAbH71PW2PmxH7V7qJX78
        subject_person_id: p_staV7NpqmWaPNLuzEjvKNG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗寶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CMqgZwLkjR7qSkD95JzJy1
          claim_id: c_SQAbH71PW2PmxH7V7qJX78
          source_id: s_t47BV8TEC9aNcfVnpVDK74
          stance: supports
          locator: CBDB:221967
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_1MNuoNWmQjBUNM-yRJkcRM
        subject_person_id: p_staV7NpqmWaPNLuzEjvKNG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nF3Cd5KS3rMLe16oeKeJ6Q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vA4oI_uXcjIKuWvdLhKPUJ
          claim_id: c_1MNuoNWmQjBUNM-yRJkcRM
          source_id: s_t47BV8TEC9aNcfVnpVDK74
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百三十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_t47BV8TEC9aNcfVnpVDK74
            source_type: api_record
            title: 中国历代人物传记资料库：王宗寶（CBDB 221967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221967&o=json
            external_identifier: CBDB:221967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_nF3Cd5KS3rMLe16oeKeJ6Q
        status: active
        display_name: 王應霖
        merged_into_person_id: null
    - claim:
        id: c_6roc7lnYR53sr5LiFfVujf
        subject_person_id: p_staV7NpqmWaPNLuzEjvKNG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2jdktdsRNXVjVNwJ9S8ZeA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I7M-9u88iwRZvwLV01jeCD
          claim_id: c_6roc7lnYR53sr5LiFfVujf
          source_id: s_pzeIC4KPyJiN-Il_p4e0Xs
          stance: supports
          locator: CBDB：兄弟 王應霖（206714）之父／母 王宗寶
          quotation: null
          interpretation_note: 由兄弟关系推断：王應兆 与 王應霖 为同胞（CBDB 记「兄」），王應霖 之父／母即 王應兆 之父／母。
          source:
            id: s_pzeIC4KPyJiN-Il_p4e0Xs
            source_type: api_record
            title: 中国历代人物传记资料库：王應兆（CBDB 221976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221976&o=json
            external_identifier: CBDB:221976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2jdktdsRNXVjVNwJ9S8ZeA
        status: active
        display_name: 王應兆
        merged_into_person_id: null
    - claim:
        id: c_btuKTBNvO7jnGP5vk9PAG7
        subject_person_id: p_staV7NpqmWaPNLuzEjvKNG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_P5YJfsxDaWNdmKbWD8tNH7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JNH7-UqjmD8HK6V5xycjMf
          claim_id: c_btuKTBNvO7jnGP5vk9PAG7
          source_id: s_zNcV82OF_GlAbGOO1affVJ
          stance: supports
          locator: CBDB：兄弟 王應霖（206714）之父／母 王宗寶
          quotation: null
          interpretation_note: 由兄弟关系推断：王應雲 与 王應霖 为同胞（CBDB 记「弟」），王應霖 之父／母即 王應雲 之父／母。
          source:
            id: s_zNcV82OF_GlAbGOO1affVJ
            source_type: api_record
            title: 中国历代人物传记资料库：王應雲（CBDB 221972）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221972&o=json
            external_identifier: CBDB:221972
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_P5YJfsxDaWNdmKbWD8tNH7
        status: active
        display_name: 王應雲
        merged_into_person_id: null
    - claim:
        id: c_Hl1UHfvVhjR6cJ632l4UQT
        subject_person_id: p_staV7NpqmWaPNLuzEjvKNG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_P7dC12JpCdNvQVgMYNSN8H
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NLrgXdABgpYV_TYBImEtSR
          claim_id: c_Hl1UHfvVhjR6cJ632l4UQT
          source_id: s_Nthxri2koP9XB0ORxxQEHh
          stance: supports
          locator: CBDB：兄弟 王應霖（206714）之父／母 王宗寶
          quotation: null
          interpretation_note: 由兄弟关系推断：王應期 与 王應霖 为同胞（CBDB 记「兄」），王應霖 之父／母即 王應期 之父／母。
          source:
            id: s_Nthxri2koP9XB0ORxxQEHh
            source_type: api_record
            title: 中国历代人物传记资料库：王應期（CBDB 221975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221975&o=json
            external_identifier: CBDB:221975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_P7dC12JpCdNvQVgMYNSN8H
        status: active
        display_name: 王應期
        merged_into_person_id: null
    - claim:
        id: c_Uz2kV7ZkokqAjcBMsZFCxo
        subject_person_id: p_staV7NpqmWaPNLuzEjvKNG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WZ741S3JhaLCQRpQHw8ebW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V9NVdr9kVdE1T5K3QcuJ-p
          claim_id: c_Uz2kV7ZkokqAjcBMsZFCxo
          source_id: s_BBtMMNKvKdQH2_7-3zN3qP
          stance: supports
          locator: CBDB：兄弟 王應霖（206714）之父／母 王宗寶
          quotation: null
          interpretation_note: 由兄弟关系推断：王裳 与 王應霖 为同胞（CBDB 记「弟」），王應霖 之父／母即 王裳 之父／母。
          source:
            id: s_BBtMMNKvKdQH2_7-3zN3qP
            source_type: api_record
            title: 中国历代人物传记资料库：王裳（CBDB 221973）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221973&o=json
            external_identifier: CBDB:221973
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WZ741S3JhaLCQRpQHw8ebW
        status: active
        display_name: 王裳
        merged_into_person_id: null
    - claim:
        id: c_GA3kLo7ejuq4sPXD-neTWu
        subject_person_id: p_staV7NpqmWaPNLuzEjvKNG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YQhQBTGLu3HDLg17XMvzUQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6qusCl_nMdYEM19ndvgzqZ
          claim_id: c_GA3kLo7ejuq4sPXD-neTWu
          source_id: s_I5hjSIbLWynpB5pAi4-Kpo
          stance: supports
          locator: CBDB：兄弟 王應霖（206714）之父／母 王宗寶
          quotation: null
          interpretation_note: 由兄弟关系推断：王褒德 与 王應霖 为同胞（CBDB 记「弟」），王應霖 之父／母即 王褒德 之父／母。
          source:
            id: s_I5hjSIbLWynpB5pAi4-Kpo
            source_type: api_record
            title: 中国历代人物传记资料库：王褒德（CBDB 221974）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221974&o=json
            external_identifier: CBDB:221974
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YQhQBTGLu3HDLg17XMvzUQ
        status: active
        display_name: 王褒德
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宗寶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宗寶，明人物。萬曆八年進士，籍贯文安，曾任省祭官。（中国历代人物传记资料库 CBDB 221967） | accepted |
| name.primary | 王宗寶 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_nF3Cd5KS3rMLe16oeKeJ6Q | 王應霖 | accepted |
| children | p_2jdktdsRNXVjVNwJ9S8ZeA | 王應兆 | accepted |
| children | p_P5YJfsxDaWNdmKbWD8tNH7 | 王應雲 | accepted |
| children | p_P7dC12JpCdNvQVgMYNSN8H | 王應期 | accepted |
| children | p_WZ741S3JhaLCQRpQHw8ebW | 王裳 | accepted |
| children | p_YQhQBTGLu3HDLg17XMvzUQ | 王褒德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王褒德（CBDB 221974）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221974&o=json)
- [中国历代人物传记资料库：王裳（CBDB 221973）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221973&o=json)
- [中国历代人物传记资料库：王應期（CBDB 221975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221975&o=json)
- [中国历代人物传记资料库：王應雲（CBDB 221972）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221972&o=json)
- [中国历代人物传记资料库：王應兆（CBDB 221976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221976&o=json)
- [中国历代人物传记资料库：王宗寶（CBDB 221967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221967&o=json)
