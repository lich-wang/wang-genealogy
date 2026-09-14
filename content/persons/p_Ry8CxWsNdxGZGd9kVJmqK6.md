---
schema: wang-person/v1
id: p_Ry8CxWsNdxGZGd9kVJmqK6
status: active
merged_into: null
display_name: 王淑吉
cbdb_id: 331197
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PoidF4Bmr6grxSE4P6ZUWq
        subject_person_id: p_Ry8CxWsNdxGZGd9kVJmqK6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑吉，明人物。嘉靖四十四年進士，籍贯陽城。（中国历代人物传记资料库 CBDB 331197）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_eA5bLWKRL0oWxpF_NAqxU3
          claim_id: c_PoidF4Bmr6grxSE4P6ZUWq
          source_id: s_a56eX18cxrsdzZFdVZeWJz
          stance: supports
          locator: CBDB:331197
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_a56eX18cxrsdzZFdVZeWJz
            source_type: api_record
            title: 中国历代人物传记资料库：王淑吉（CBDB 331197）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331197&o=json
            external_identifier: CBDB:331197
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tdnyUZDDLyQLVwkAQJQFNk
        subject_person_id: p_Ry8CxWsNdxGZGd9kVJmqK6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑吉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_x6HAGCv7xjCmL997KLMEQX
          claim_id: c_tdnyUZDDLyQLVwkAQJQFNk
          source_id: s_a56eX18cxrsdzZFdVZeWJz
          stance: supports
          locator: CBDB:331197
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__Dgw29rdHS1o3cCVnekwU7
        subject_person_id: p_vQ7CxFfVeDD5gVP5SnofRA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ry8CxWsNdxGZGd9kVJmqK6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yJ8JeWShY_Be4YsxYQDyjJ
          claim_id: c__Dgw29rdHS1o3cCVnekwU7
          source_id: s_Y3Q4lvIleeP3K9YqGEzbiD
          stance: supports
          locator: CBDB：兄弟 王淑陵（205297）之父／母 王言
          quotation: null
          interpretation_note: 由兄弟关系推断：王淑吉 与 王淑陵 为同胞（CBDB 记「兄」），王淑陵 之父／母即 王淑吉 之父／母。
          source:
            id: s_Y3Q4lvIleeP3K9YqGEzbiD
            source_type: api_record
            title: 中国历代人物传记资料库：王淑吉（CBDB 331197）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331197&o=json
            external_identifier: CBDB:331197
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vQ7CxFfVeDD5gVP5SnofRA
        status: active
        display_name: 王言
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_61g8BTTJiFR6PLgbtrKN8e
        subject_person_id: p_Ry8CxWsNdxGZGd9kVJmqK6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Tffvt8PaRx7qSEiYdDgfFH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Nnn7XB1iLA6qxq1_3vXMGH
          claim_id: c_61g8BTTJiFR6PLgbtrKN8e
          source_id: s_Y3Q4lvIleeP3K9YqGEzbiD
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205297 王淑陵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Y3Q4lvIleeP3K9YqGEzbiD
            source_type: api_record
            title: 中国历代人物传记资料库：王淑吉（CBDB 331197）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331197&o=json
            external_identifier: CBDB:331197
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Tffvt8PaRx7qSEiYdDgfFH
        status: active
        display_name: 王淑陵
        merged_into_person_id: null
---

# 王淑吉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王淑吉，明人物。嘉靖四十四年進士，籍贯陽城。（中国历代人物传记资料库 CBDB 331197） | accepted |
| name.primary | 王淑吉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vQ7CxFfVeDD5gVP5SnofRA | 王言 | accepted |
| other | p_Tffvt8PaRx7qSEiYdDgfFH | 王淑陵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淑吉（CBDB 331197）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331197&o=json)
