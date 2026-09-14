---
schema: wang-person/v1
id: p_3drg2zTZv8jAo4PQxGKyBw
status: active
merged_into: null
display_name: 王鵬
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P3TakATZTLC7ZiaWkuE58H
        subject_person_id: p_3drg2zTZv8jAo4PQxGKyBw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鵬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CJ5ADCAQgTA1vf4eGTSJ5R
          claim_id: c_P3TakATZTLC7ZiaWkuE58H
          source_id: s_LQjGrKZaQ1ZpQVafi6iq4c
          stance: supports
          locator: CBDB:262608
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262608）
          source: &a1
            id: s_LQjGrKZaQ1ZpQVafi6iq4c
            source_type: api_record
            title: 中国历代人物传记资料库：王鵬（CBDB 262608）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262608&o=json
            external_identifier: CBDB:262608
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.596Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_W6Xmj8j3EtD7VQLHvqjzvC
        subject_person_id: p_3drg2zTZv8jAo4PQxGKyBw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鵬，明人物。弘治三年進士，籍贯吳縣。（中国历代人物传记资料库 CBDB 262608）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6eSIKJRyqm7hHJ1AHiymTb
          claim_id: c_W6Xmj8j3EtD7VQLHvqjzvC
          source_id: s_LQjGrKZaQ1ZpQVafi6iq4c
          stance: supports
          locator: CBDB:262608
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qVrZ4_Ue5suz5n1Q39Y5In
        subject_person_id: p_THF2LeRLB4NBKZ9TDPgftt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3drg2zTZv8jAo4PQxGKyBw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Yv5DuKIAR7L1qRCiwgvDiC
          claim_id: c_qVrZ4_Ue5suz5n1Q39Y5In
          source_id: s_HBJGX9NY7Iaruv_duecDRH
          stance: supports
          locator: CBDB：兄弟 王俸（200767）之父／母 王叔紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王鵬 与 王俸 为同胞（CBDB 记「弟」），王俸 之父／母即 王鵬 之父／母。
          source:
            id: s_HBJGX9NY7Iaruv_duecDRH
            source_type: api_record
            title: 中国历代人物传记资料库：王鵬（CBDB 262608）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262608&o=json
            external_identifier: CBDB:262608
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_THF2LeRLB4NBKZ9TDPgftt
        status: active
        display_name: 王叔紀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_mpdQgBAhh5H17KrXBv8PC5
        subject_person_id: p_2ivdyuT2PUd95aURm25j3Y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_3drg2zTZv8jAo4PQxGKyBw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wvLI4Aar9tPIgIUz6Lu-jv
          claim_id: c_mpdQgBAhh5H17KrXBv8PC5
          source_id: s_HBJGX9NY7Iaruv_duecDRH
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200767 王俸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HBJGX9NY7Iaruv_duecDRH
            source_type: api_record
            title: 中国历代人物传记资料库：王鵬（CBDB 262608）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262608&o=json
            external_identifier: CBDB:262608
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2ivdyuT2PUd95aURm25j3Y
        status: active
        display_name: 王俸
        merged_into_person_id: null
---

# 王鵬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鵬 | accepted |
| bio.summary | 王鵬，明人物。弘治三年進士，籍贯吳縣。（中国历代人物传记资料库 CBDB 262608） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_THF2LeRLB4NBKZ9TDPgftt | 王叔紀 | accepted |
| other | p_2ivdyuT2PUd95aURm25j3Y | 王俸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鵬（CBDB 262608）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262608&o=json)
