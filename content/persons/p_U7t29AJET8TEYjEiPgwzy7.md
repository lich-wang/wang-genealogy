---
schema: wang-person/v1
id: p_U7t29AJET8TEYjEiPgwzy7
status: active
merged_into: null
display_name: 王用康
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_14cEJEuArnfEp7qDgfQbJk
        subject_person_id: p_U7t29AJET8TEYjEiPgwzy7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用康
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Rc7k6eQGjPq1CHMJq7LPj9
          claim_id: c_14cEJEuArnfEp7qDgfQbJk
          source_id: s_2wi9i84bFy5q4DewSiuGQB
          stance: supports
          locator: CBDB:324575
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（324575）
          source: &a1
            id: s_2wi9i84bFy5q4DewSiuGQB
            source_type: api_record
            title: 中国历代人物传记资料库：王用康（CBDB 324575）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324575&o=json
            external_identifier: CBDB:324575
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.191Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VPVqaFmmaV5QAdHs7g6aPU
        subject_person_id: p_U7t29AJET8TEYjEiPgwzy7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用康，明人物。嘉靖三十八年進士，籍贯南充。（中国历代人物传记资料库 CBDB 324575）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_902cdLLjGcVi3D8NUAMF3W
          claim_id: c_VPVqaFmmaV5QAdHs7g6aPU
          source_id: s_2wi9i84bFy5q4DewSiuGQB
          stance: supports
          locator: CBDB:324575
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oHadBBtgpMUhDhcU5ECe11
        subject_person_id: p_oZ4kQSFi4x4MxZ3DEL5Xbj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_U7t29AJET8TEYjEiPgwzy7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K9jja5AsByXVrsKbmYTRwx
          claim_id: c_oHadBBtgpMUhDhcU5ECe11
          source_id: s_gGjC5Fy7xXdGd0kj42_Z5R
          stance: supports
          locator: CBDB：兄弟 王用楨（204826）之父／母 王纘宗
          quotation: null
          interpretation_note: 由兄弟关系推断：王用康 与 王用楨 为同胞（CBDB 记「兄」），王用楨 之父／母即 王用康 之父／母。
          source:
            id: s_gGjC5Fy7xXdGd0kj42_Z5R
            source_type: api_record
            title: 中国历代人物传记资料库：王用康（CBDB 324575）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324575&o=json
            external_identifier: CBDB:324575
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oZ4kQSFi4x4MxZ3DEL5Xbj
        status: active
        display_name: 王纘宗
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_tryihcj7ig6UjSdC3EfCSu
        subject_person_id: p_U7t29AJET8TEYjEiPgwzy7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hpB2Y5ktFHzZw4LUr2KGvj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rywSsDF2NhM6SuQaUPb1JZ
          claim_id: c_tryihcj7ig6UjSdC3EfCSu
          source_id: s_gGjC5Fy7xXdGd0kj42_Z5R
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204826 王用楨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gGjC5Fy7xXdGd0kj42_Z5R
            source_type: api_record
            title: 中国历代人物传记资料库：王用康（CBDB 324575）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324575&o=json
            external_identifier: CBDB:324575
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hpB2Y5ktFHzZw4LUr2KGvj
        status: active
        display_name: 王用楨
        merged_into_person_id: null
---

# 王用康

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用康 | accepted |
| bio.summary | 王用康，明人物。嘉靖三十八年進士，籍贯南充。（中国历代人物传记资料库 CBDB 324575） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oZ4kQSFi4x4MxZ3DEL5Xbj | 王纘宗 | accepted |
| other | p_hpB2Y5ktFHzZw4LUr2KGvj | 王用楨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王用康（CBDB 324575）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324575&o=json)
