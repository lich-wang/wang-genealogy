---
schema: wang-person/v1
id: p_vt3AmcVCzP9pkvd9zscCbg
status: active
merged_into: null
display_name: 王學吾
cbdb_id: 287453
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RhRx4TU7QiLVbQ2G9rxinz
        subject_person_id: p_vt3AmcVCzP9pkvd9zscCbg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學吾，明人物。嘉靖八年進士，籍贯安福，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 287453）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_YiipFAsqy6gnL-zhKvRu0M
          claim_id: c_RhRx4TU7QiLVbQ2G9rxinz
          source_id: s_ZbnGCYczgUjW1ne4FvJXQS
          stance: supports
          locator: CBDB:287453
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ZbnGCYczgUjW1ne4FvJXQS
            source_type: api_record
            title: 中国历代人物传记资料库：王學吾（CBDB 287453）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287453&o=json
            external_identifier: CBDB:287453
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_256ArZWVx6TGGAsiyYwQnF
        subject_person_id: p_vt3AmcVCzP9pkvd9zscCbg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學吾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QjrD1D6fwBw8TePmZQbqES
          claim_id: c_256ArZWVx6TGGAsiyYwQnF
          source_id: s_ZbnGCYczgUjW1ne4FvJXQS
          stance: supports
          locator: CBDB:287453
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-20zzaotlNmrozQ-7omlRE
        subject_person_id: p_EJz6NDNXPRUy1b3XSr2FQp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vt3AmcVCzP9pkvd9zscCbg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EDZnyLnrVTK7dWzI7QkrIa
          claim_id: c_-20zzaotlNmrozQ-7omlRE
          source_id: s_85AhDQmoCmhEvEaV63EoR8
          stance: supports
          locator: CBDB：兄弟 王學益（202399）之父／母 王稼
          quotation: null
          interpretation_note: 由兄弟关系推断：王學吾 与 王學益 为同胞（CBDB 记「弟」），王學益 之父／母即 王學吾 之父／母。
          source:
            id: s_85AhDQmoCmhEvEaV63EoR8
            source_type: api_record
            title: 中国历代人物传记资料库：王學吾（CBDB 287453）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287453&o=json
            external_identifier: CBDB:287453
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EJz6NDNXPRUy1b3XSr2FQp
        status: active
        display_name: 王稼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_EQT6TlXay9h8Z6C_OTJh5z
        subject_person_id: p_EoY6249MAYNFPdVz2u3z4E
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vt3AmcVCzP9pkvd9zscCbg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eN8iDCRmzlujxi9lqoga1Q
          claim_id: c_EQT6TlXay9h8Z6C_OTJh5z
          source_id: s_85AhDQmoCmhEvEaV63EoR8
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202399 王學益）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_85AhDQmoCmhEvEaV63EoR8
            source_type: api_record
            title: 中国历代人物传记资料库：王學吾（CBDB 287453）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287453&o=json
            external_identifier: CBDB:287453
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EoY6249MAYNFPdVz2u3z4E
        status: active
        display_name: 王學益
        merged_into_person_id: null
---

# 王學吾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王學吾，明人物。嘉靖八年進士，籍贯安福，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 287453） | accepted |
| name.primary | 王學吾 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EJz6NDNXPRUy1b3XSr2FQp | 王稼 | accepted |
| other | p_EoY6249MAYNFPdVz2u3z4E | 王學益 | accepted |

## 外部来源

- [中国历代人物传记资料库：王學吾（CBDB 287453）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287453&o=json)
