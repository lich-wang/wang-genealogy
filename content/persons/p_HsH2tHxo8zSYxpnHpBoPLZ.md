---
schema: wang-person/v1
id: p_HsH2tHxo8zSYxpnHpBoPLZ
status: active
merged_into: null
display_name: 王纉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HoNF56kdKMKSc8Br25m6A1
        subject_person_id: p_HsH2tHxo8zSYxpnHpBoPLZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DVvgyAPwzLPG93ea6FvbjX
          claim_id: c_HoNF56kdKMKSc8Br25m6A1
          source_id: s_K1iuQmdWg9rFYNjb5r3F8e
          stance: supports
          locator: CBDB:327954
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327954）
          source: &a1
            id: s_K1iuQmdWg9rFYNjb5r3F8e
            source_type: api_record
            title: 中国历代人物传记资料库：王纉（CBDB 327954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327954&o=json
            external_identifier: CBDB:327954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.275Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FLE29pVeq5u1uM4bLB9rqr
        subject_person_id: p_HsH2tHxo8zSYxpnHpBoPLZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纉，明人物。嘉靖四十一年進士，籍贯文安。（中国历代人物传记资料库 CBDB 327954）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mXbJC90q6ELCo9A7K_ObY6
          claim_id: c_FLE29pVeq5u1uM4bLB9rqr
          source_id: s_K1iuQmdWg9rFYNjb5r3F8e
          stance: supports
          locator: CBDB:327954
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_f6Uhqr6nKJjfI8nuePYE98
        subject_person_id: p_SJyiQsStHWbHq3jTTvu2vD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HsH2tHxo8zSYxpnHpBoPLZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__tpqFy0BLDWu4rIeQZQZVB
          claim_id: c_f6Uhqr6nKJjfI8nuePYE98
          source_id: s_js7rCQ3jhThXii4znjFPTF
          stance: supports
          locator: CBDB：兄弟 王以纁（205075）之父／母 王楫
          quotation: null
          interpretation_note: 由兄弟关系推断：王纉 与 王以纁 为同胞（CBDB 记「弟」），王以纁 之父／母即 王纉 之父／母。
          source:
            id: s_js7rCQ3jhThXii4znjFPTF
            source_type: api_record
            title: 中国历代人物传记资料库：王纉（CBDB 327954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327954&o=json
            external_identifier: CBDB:327954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SJyiQsStHWbHq3jTTvu2vD
        status: active
        display_name: 王楫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_9qjJJkrzeSPz-L84q-XOHk
        subject_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_HsH2tHxo8zSYxpnHpBoPLZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Grf2LwkRXE0j_eL9wA_Yzh
          claim_id: c_9qjJJkrzeSPz-L84q-XOHk
          source_id: s_js7rCQ3jhThXii4znjFPTF
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205075 王以纁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_js7rCQ3jhThXii4znjFPTF
            source_type: api_record
            title: 中国历代人物传记资料库：王纉（CBDB 327954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327954&o=json
            external_identifier: CBDB:327954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DYviEpoQ7QNEe7UQdPVSd4
        status: active
        display_name: 王以纁
        merged_into_person_id: null
---

# 王纉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王纉 | accepted |
| bio.summary | 王纉，明人物。嘉靖四十一年進士，籍贯文安。（中国历代人物传记资料库 CBDB 327954） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SJyiQsStHWbHq3jTTvu2vD | 王楫 | accepted |
| other | p_DYviEpoQ7QNEe7UQdPVSd4 | 王以纁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王纉（CBDB 327954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327954&o=json)
