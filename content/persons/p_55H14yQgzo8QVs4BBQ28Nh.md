---
schema: wang-person/v1
id: p_55H14yQgzo8QVs4BBQ28Nh
status: active
merged_into: null
display_name: 王角
cbdb_id: 306626
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8sXQHW6vd37ajGeh6TtZ6o
        subject_person_id: p_55H14yQgzo8QVs4BBQ28Nh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王角，明人物。嘉靖二十三年進士，籍贯漢陽。（中国历代人物传记资料库 CBDB 306626）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_mYQawzpmM2KDlSACrL_ANq
          claim_id: c_8sXQHW6vd37ajGeh6TtZ6o
          source_id: s_vQU4sKUvFtskQ2Mj1bo95n
          stance: supports
          locator: CBDB:306626
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_vQU4sKUvFtskQ2Mj1bo95n
            source_type: api_record
            title: 中国历代人物传记资料库：王角（CBDB 306626）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306626&o=json
            external_identifier: CBDB:306626
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tCZo7PuFJK6ehNn5imB2jV
        subject_person_id: p_55H14yQgzo8QVs4BBQ28Nh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王角
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Dup1NnwCFK4FpcTncQv9ET
          claim_id: c_tCZo7PuFJK6ehNn5imB2jV
          source_id: s_vQU4sKUvFtskQ2Mj1bo95n
          stance: supports
          locator: CBDB:306626
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0EAOIGIpEFUbmQzXCJz7xp
        subject_person_id: p_asR7CUjP1iXKvRkyGBMSJF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_55H14yQgzo8QVs4BBQ28Nh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4xBiP3rr9Ktqkl1a4xA8gK
          claim_id: c_0EAOIGIpEFUbmQzXCJz7xp
          source_id: s_VlvXqS6svoXHt2UWEsBP0N
          stance: supports
          locator: CBDB：兄弟 王斛（203566）之父／母 王教
          quotation: null
          interpretation_note: 由兄弟关系推断：王角 与 王斛 为同胞（CBDB 记「弟」），王斛 之父／母即 王角 之父／母。
          source:
            id: s_VlvXqS6svoXHt2UWEsBP0N
            source_type: api_record
            title: 中国历代人物传记资料库：王角（CBDB 306626）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306626&o=json
            external_identifier: CBDB:306626
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_asR7CUjP1iXKvRkyGBMSJF
        status: active
        display_name: 王教
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_SJ4sjq_crcFRfOmzZMBwrT
        subject_person_id: p_55H14yQgzo8QVs4BBQ28Nh
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DCXEWHeu41hY7yzKSpPNK7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lBtQ14DKKWHGCGKJnDWJVz
          claim_id: c_SJ4sjq_crcFRfOmzZMBwrT
          source_id: s_VlvXqS6svoXHt2UWEsBP0N
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203566 王斛）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VlvXqS6svoXHt2UWEsBP0N
            source_type: api_record
            title: 中国历代人物传记资料库：王角（CBDB 306626）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306626&o=json
            external_identifier: CBDB:306626
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DCXEWHeu41hY7yzKSpPNK7
        status: active
        display_name: 王斛
        merged_into_person_id: null
---

# 王角

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王角，明人物。嘉靖二十三年進士，籍贯漢陽。（中国历代人物传记资料库 CBDB 306626） | accepted |
| name.primary | 王角 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_asR7CUjP1iXKvRkyGBMSJF | 王教 | accepted |
| other | p_DCXEWHeu41hY7yzKSpPNK7 | 王斛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王角（CBDB 306626）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306626&o=json)
