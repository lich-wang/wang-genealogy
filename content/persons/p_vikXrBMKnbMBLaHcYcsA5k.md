---
schema: wang-person/v1
id: p_vikXrBMKnbMBLaHcYcsA5k
status: active
merged_into: null
display_name: 王德復
cbdb_id: 300362
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_geKL7bYgzWNFLHqqq4RvW5
        subject_person_id: p_vikXrBMKnbMBLaHcYcsA5k
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德復，明人物。嘉靖十七年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 300362）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_AkxOtbjdP2pRU-rl4hgkjr
          claim_id: c_geKL7bYgzWNFLHqqq4RvW5
          source_id: s_WSzNF8WdAKuJ1pjShXKjri
          stance: supports
          locator: CBDB:300362
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_WSzNF8WdAKuJ1pjShXKjri
            source_type: api_record
            title: 中国历代人物传记资料库：王德復（CBDB 300362）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300362&o=json
            external_identifier: CBDB:300362
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Tqi51Lx6G6GTtdU1zsF1P6
        subject_person_id: p_vikXrBMKnbMBLaHcYcsA5k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德復
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_566zic7GnbNvtMsu3PFUXG
          claim_id: c_Tqi51Lx6G6GTtdU1zsF1P6
          source_id: s_WSzNF8WdAKuJ1pjShXKjri
          stance: supports
          locator: CBDB:300362
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_keuJ_txcEyC3D7imVoSq60
        subject_person_id: p_djPzJATqP8N3fAgZuiGdme
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vikXrBMKnbMBLaHcYcsA5k
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tcSpLp5mwb_7tIfzZl9hMG
          claim_id: c_keuJ_txcEyC3D7imVoSq60
          source_id: s_dGt3DpgDWM9-2jdJMTDHWR
          stance: supports
          locator: CBDB：兄弟 王春復（203136）之父／母 王琥
          quotation: null
          interpretation_note: 由兄弟关系推断：王德復 与 王春復 为同胞（CBDB 记「弟」），王春復 之父／母即 王德復 之父／母。
          source:
            id: s_dGt3DpgDWM9-2jdJMTDHWR
            source_type: api_record
            title: 中国历代人物传记资料库：王德復（CBDB 300362）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300362&o=json
            external_identifier: CBDB:300362
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_djPzJATqP8N3fAgZuiGdme
        status: active
        display_name: 王琥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_1oG8OQcqAT3Z9j00aR-7Sj
        subject_person_id: p_PBPvLNJEK4jPNCWDSKfDp5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vikXrBMKnbMBLaHcYcsA5k
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hj7mm4WXx5SxGNTFWMWUn9
          claim_id: c_1oG8OQcqAT3Z9j00aR-7Sj
          source_id: s_dGt3DpgDWM9-2jdJMTDHWR
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203136 王春復）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dGt3DpgDWM9-2jdJMTDHWR
            source_type: api_record
            title: 中国历代人物传记资料库：王德復（CBDB 300362）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300362&o=json
            external_identifier: CBDB:300362
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PBPvLNJEK4jPNCWDSKfDp5
        status: active
        display_name: 王春復
        merged_into_person_id: null
---

# 王德復

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王德復，明人物。嘉靖十七年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 300362） | accepted |
| name.primary | 王德復 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_djPzJATqP8N3fAgZuiGdme | 王琥 | accepted |
| other | p_PBPvLNJEK4jPNCWDSKfDp5 | 王春復 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德復（CBDB 300362）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300362&o=json)
