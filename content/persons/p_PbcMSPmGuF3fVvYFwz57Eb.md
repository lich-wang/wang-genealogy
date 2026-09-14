---
schema: wang-person/v1
id: p_PbcMSPmGuF3fVvYFwz57Eb
status: active
merged_into: null
display_name: 王京
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AEYGJqnMQw1zGC4NM6KH8X
        subject_person_id: p_PbcMSPmGuF3fVvYFwz57Eb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王京
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NysNNvEAi6V8DXcVocq1Vy
          claim_id: c_AEYGJqnMQw1zGC4NM6KH8X
          source_id: s_gZTFcD9fNkmK38N3r5jBD1
          stance: supports
          locator: CBDB:269144
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（269144）
          source: &a1
            id: s_gZTFcD9fNkmK38N3r5jBD1
            source_type: api_record
            title: 中国历代人物传记资料库：王京（CBDB 269144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269144&o=json
            external_identifier: CBDB:269144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.805Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3uTNYJ9p5PP8n4JBGo6kGw
        subject_person_id: p_PbcMSPmGuF3fVvYFwz57Eb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王京，明人物。弘治九年進士，籍贯象山，曾任推官。（中国历代人物传记资料库 CBDB 269144）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yg28hD0KzoQT-Nf9g9R0yK
          claim_id: c_3uTNYJ9p5PP8n4JBGo6kGw
          source_id: s_gZTFcD9fNkmK38N3r5jBD1
          stance: supports
          locator: CBDB:269144
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_X_1b8Pkup6keMgPubje5XF
        subject_person_id: p_PbcMSPmGuF3fVvYFwz57Eb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_w2z816UY6mM4xzeNHAgB83
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SgIJ9CMT2rvXqhTUUhZqg4
          claim_id: c_X_1b8Pkup6keMgPubje5XF
          source_id: s_gZTFcD9fNkmK38N3r5jBD1
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第一百三十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_w2z816UY6mM4xzeNHAgB83
        status: active
        display_name: 王渙
        merged_into_person_id: null
    - claim:
        id: c_L3GKd7CD5_Sn83xgeCrekR
        subject_person_id: p_PbcMSPmGuF3fVvYFwz57Eb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5PDw9rzQL8EzF7fe3aL3qA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NVg9vafYk3uGdvMdfJceyH
          claim_id: c_L3GKd7CD5_Sn83xgeCrekR
          source_id: s_2fhBiIWPvLeY8loLnaE1lZ
          stance: supports
          locator: CBDB：兄弟 王渙（67928）之父／母 王京
          quotation: null
          interpretation_note: 由兄弟关系推断：王湧 与 王渙 为同胞（CBDB 记「弟」），王渙 之父／母即 王湧 之父／母。
          source:
            id: s_2fhBiIWPvLeY8loLnaE1lZ
            source_type: api_record
            title: 中国历代人物传记资料库：王湧（CBDB 269152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269152&o=json
            external_identifier: CBDB:269152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5PDw9rzQL8EzF7fe3aL3qA
        status: active
        display_name: 王湧
        merged_into_person_id: null
    - claim:
        id: c_IZqhnQVmFURNJ-kPHpAcuo
        subject_person_id: p_PbcMSPmGuF3fVvYFwz57Eb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7a8uh72EC1952tKZbL86pk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jZNfmiYZo6N33mLdns7ubn
          claim_id: c_IZqhnQVmFURNJ-kPHpAcuo
          source_id: s_G6SgQUqqFyH_GCvJzgqOYq
          stance: supports
          locator: CBDB：兄弟 王渙（67928）之父／母 王京
          quotation: null
          interpretation_note: 由兄弟关系推断：王濠 与 王渙 为同胞（CBDB 记「弟」），王渙 之父／母即 王濠 之父／母。
          source:
            id: s_G6SgQUqqFyH_GCvJzgqOYq
            source_type: api_record
            title: 中国历代人物传记资料库：王濠（CBDB 269153）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269153&o=json
            external_identifier: CBDB:269153
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7a8uh72EC1952tKZbL86pk
        status: active
        display_name: 王濠
        merged_into_person_id: null
    - claim:
        id: c_CQgO1Gc924FweEWKaJ-FUN
        subject_person_id: p_PbcMSPmGuF3fVvYFwz57Eb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7b6q5NoaWiswfYc6BFQsoU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lhczFfGIdfi6rlvTJ6g98W
          claim_id: c_CQgO1Gc924FweEWKaJ-FUN
          source_id: s_r1es8pqIOp7XGp790aJoPW
          stance: supports
          locator: CBDB：兄弟 王渙（67928）之父／母 王京
          quotation: null
          interpretation_note: 由兄弟关系推断：王源 与 王渙 为同胞（CBDB 记「弟」），王渙 之父／母即 王源 之父／母。
          source:
            id: s_r1es8pqIOp7XGp790aJoPW
            source_type: api_record
            title: 中国历代人物传记资料库：王源（CBDB 269148）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269148&o=json
            external_identifier: CBDB:269148
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7b6q5NoaWiswfYc6BFQsoU
        status: active
        display_name: 王源
        merged_into_person_id: null
    - claim:
        id: c_hvjftrkNHEluUZ7ZB4--77
        subject_person_id: p_PbcMSPmGuF3fVvYFwz57Eb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_T66WkW6gkf2UyhSk8A2ne4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BCwzS_jbAKPl6w4cjtkq1F
          claim_id: c_hvjftrkNHEluUZ7ZB4--77
          source_id: s_tLNsozr4KZ8onTpPffvyaP
          stance: supports
          locator: CBDB：兄弟 王渙（67928）之父／母 王京
          quotation: null
          interpretation_note: 由兄弟关系推断：王澤 与 王渙 为同胞（CBDB 记「弟」），王渙 之父／母即 王澤 之父／母。
          source:
            id: s_tLNsozr4KZ8onTpPffvyaP
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 269151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269151&o=json
            external_identifier: CBDB:269151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_T66WkW6gkf2UyhSk8A2ne4
        status: active
        display_name: 王澤
        merged_into_person_id: null
    - claim:
        id: c_ndK0kORWfU9077v988G3jh
        subject_person_id: p_PbcMSPmGuF3fVvYFwz57Eb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aJEwPUpJaM9WZbBbyTnDtb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5Z0abDFvF-qlduW0taNkCC
          claim_id: c_ndK0kORWfU9077v988G3jh
          source_id: s_UJVFaJ4QiNDYvLMalgqYWt
          stance: supports
          locator: CBDB：兄弟 王渙（67928）之父／母 王京
          quotation: null
          interpretation_note: 由兄弟关系推断：王演 与 王渙 为同胞（CBDB 记「弟」），王渙 之父／母即 王演 之父／母。
          source:
            id: s_UJVFaJ4QiNDYvLMalgqYWt
            source_type: api_record
            title: 中国历代人物传记资料库：王演（CBDB 269147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269147&o=json
            external_identifier: CBDB:269147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aJEwPUpJaM9WZbBbyTnDtb
        status: active
        display_name: 王演
        merged_into_person_id: null
    - claim:
        id: c_kpFM-b2qA6C7wJpB1eFrIv
        subject_person_id: p_PbcMSPmGuF3fVvYFwz57Eb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_duEBw4z1conX2ra9Q8wMEo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dq19Xem2iqt-ssJnl0Zt73
          claim_id: c_kpFM-b2qA6C7wJpB1eFrIv
          source_id: s_r-xHoExLDZHvhI-T_TlcVM
          stance: supports
          locator: CBDB：兄弟 王渙（67928）之父／母 王京
          quotation: null
          interpretation_note: 由兄弟关系推断：王涯 与 王渙 为同胞（CBDB 记「弟」），王渙 之父／母即 王涯 之父／母。
          source:
            id: s_r-xHoExLDZHvhI-T_TlcVM
            source_type: api_record
            title: 中国历代人物传记资料库：王涯（CBDB 269150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269150&o=json
            external_identifier: CBDB:269150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_duEBw4z1conX2ra9Q8wMEo
        status: active
        display_name: 王涯
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王京

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王京 | accepted |
| bio.summary | 王京，明人物。弘治九年進士，籍贯象山，曾任推官。（中国历代人物传记资料库 CBDB 269144） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_w2z816UY6mM4xzeNHAgB83 | 王渙 | accepted |
| children | p_5PDw9rzQL8EzF7fe3aL3qA | 王湧 | accepted |
| children | p_7a8uh72EC1952tKZbL86pk | 王濠 | accepted |
| children | p_7b6q5NoaWiswfYc6BFQsoU | 王源 | accepted |
| children | p_T66WkW6gkf2UyhSk8A2ne4 | 王澤 | accepted |
| children | p_aJEwPUpJaM9WZbBbyTnDtb | 王演 | accepted |
| children | p_duEBw4z1conX2ra9Q8wMEo | 王涯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王濠（CBDB 269153）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269153&o=json)
- [中国历代人物传记资料库：王京（CBDB 269144）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269144&o=json)
- [中国历代人物传记资料库：王涯（CBDB 269150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269150&o=json)
- [中国历代人物传记资料库：王演（CBDB 269147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269147&o=json)
- [中国历代人物传记资料库：王湧（CBDB 269152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269152&o=json)
- [中国历代人物传记资料库：王源（CBDB 269148）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269148&o=json)
- [中国历代人物传记资料库：王澤（CBDB 269151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269151&o=json)
