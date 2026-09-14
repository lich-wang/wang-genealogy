---
schema: wang-person/v1
id: p_inpNf4kLCkEjT3u3AKwH2B
status: active
merged_into: null
display_name: 王世科
cbdb_id: 208609
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MnM2SkQ8rnmYF2P2QiSoG1
        subject_person_id: p_inpNf4kLCkEjT3u3AKwH2B
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世科，明人物。隆慶五年進士，籍贯宣城。（中国历代人物传记资料库 CBDB 208609）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_3c2LpSgk6AsArl8OjzybfQ
          claim_id: c_MnM2SkQ8rnmYF2P2QiSoG1
          source_id: s_8Xzvh8AtL39fo4BMZudffM
          stance: supports
          locator: CBDB:208609
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_8Xzvh8AtL39fo4BMZudffM
            source_type: api_record
            title: 中国历代人物传记资料库：王世科（CBDB 208609）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208609&o=json
            external_identifier: CBDB:208609
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_k3A82nLHbKyVWW6NSHHi5N
        subject_person_id: p_inpNf4kLCkEjT3u3AKwH2B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世科
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_M32pKbVKViiiMsXxH2KpJ7
          claim_id: c_k3A82nLHbKyVWW6NSHHi5N
          source_id: s_8Xzvh8AtL39fo4BMZudffM
          stance: supports
          locator: CBDB:208609
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_6YHrJS4jFqeu69kXpdiobj
        status: active
        display_name: 王大祥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
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
        id: p_CgzpCKBF2Cnch1g1qwE9Ao
        status: active
        display_name: 王世能
        merged_into_person_id: null
---

# 王世科

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王世科，明人物。隆慶五年進士，籍贯宣城。（中国历代人物传记资料库 CBDB 208609） | accepted |
| name.primary | 王世科 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6YHrJS4jFqeu69kXpdiobj | 王大祥 | accepted |
| other | p_CgzpCKBF2Cnch1g1qwE9Ao | 王世能 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世科（CBDB 208609）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208609&o=json)
