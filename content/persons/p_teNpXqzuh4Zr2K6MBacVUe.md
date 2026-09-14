---
schema: wang-person/v1
id: p_teNpXqzuh4Zr2K6MBacVUe
status: active
merged_into: null
display_name: 王以纁
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rQPA29uMM882GLphyStcRt
        subject_person_id: p_teNpXqzuh4Zr2K6MBacVUe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以纁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_s2ENGKCiZJwUkabyVHc8e4
          claim_id: c_rQPA29uMM882GLphyStcRt
          source_id: s_FFH4FBXSewNzZgDMQnzAJa
          stance: supports
          locator: CBDB:209216
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（209216）
          source: &a1
            id: s_FFH4FBXSewNzZgDMQnzAJa
            source_type: api_record
            title: 中国历代人物传记资料库：王以纁（CBDB 209216）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209216&o=json
            external_identifier: CBDB:209216
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.979Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J5DZwYgSqcYUeYvaSGPKFp
        subject_person_id: p_teNpXqzuh4Zr2K6MBacVUe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以纁，明人物。隆慶五年進士，籍贯文安，曾任知府。（中国历代人物传记资料库 CBDB 209216）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WJiE_evjll8HkAdh38pHhY
          claim_id: c_J5DZwYgSqcYUeYvaSGPKFp
          source_id: s_FFH4FBXSewNzZgDMQnzAJa
          stance: supports
          locator: CBDB:209216
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_03kN3RU-lIKK92PJV0csza
        subject_person_id: p_s94RydQTdDQooKZ8AoB28k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_teNpXqzuh4Zr2K6MBacVUe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0CemzqusXoUhbq00w0sfTc
          claim_id: c_03kN3RU-lIKK92PJV0csza
          source_id: s_QKN92z2Nj2fUIvT9jFeh8u
          stance: supports
          locator: CBDB：兄弟 王緘（68345）之父／母 王儀
          quotation: null
          interpretation_note: 由兄弟关系推断：王以纁 与 王緘 为同胞（CBDB 记「弟」），王緘 之父／母即 王以纁 之父／母。
          source:
            id: s_QKN92z2Nj2fUIvT9jFeh8u
            source_type: api_record
            title: 中国历代人物传记资料库：王以纁（CBDB 209216）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209216&o=json
            external_identifier: CBDB:209216
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_s94RydQTdDQooKZ8AoB28k
        status: active
        display_name: 王儀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_zBs8iGTZYRjvq0MOWZebUB
        subject_person_id: p_Ux2gsGHcSC8JtKGeSs9ttp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_teNpXqzuh4Zr2K6MBacVUe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fl1larn_U_JvJjjw7pa2ID
          claim_id: c_zBs8iGTZYRjvq0MOWZebUB
          source_id: s_QKN92z2Nj2fUIvT9jFeh8u
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 68345 王緘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QKN92z2Nj2fUIvT9jFeh8u
            source_type: api_record
            title: 中国历代人物传记资料库：王以纁（CBDB 209216）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209216&o=json
            external_identifier: CBDB:209216
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ux2gsGHcSC8JtKGeSs9ttp
        status: active
        display_name: 王緘
        merged_into_person_id: null
---

# 王以纁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王以纁 | accepted |
| bio.summary | 王以纁，明人物。隆慶五年進士，籍贯文安，曾任知府。（中国历代人物传记资料库 CBDB 209216） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_s94RydQTdDQooKZ8AoB28k | 王儀 | accepted |
| other | p_Ux2gsGHcSC8JtKGeSs9ttp | 王緘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王以纁（CBDB 209216）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209216&o=json)
