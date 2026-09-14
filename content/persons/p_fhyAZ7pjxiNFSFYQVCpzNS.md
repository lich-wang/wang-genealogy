---
schema: wang-person/v1
id: p_fhyAZ7pjxiNFSFYQVCpzNS
status: active
merged_into: null
display_name: 王執法
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F1pKqLobJjWJ8gFyoKwUKF
        subject_person_id: p_fhyAZ7pjxiNFSFYQVCpzNS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王執法
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3qbF861AyRZ91nsMprHE8x
          claim_id: c_F1pKqLobJjWJ8gFyoKwUKF
          source_id: s_HkWwHv4gHiYU5JxfeDrHxb
          stance: supports
          locator: CBDB:330529
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（330529）
          source: &a1
            id: s_HkWwHv4gHiYU5JxfeDrHxb
            source_type: api_record
            title: 中国历代人物传记资料库：王執法（CBDB 330529）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330529&o=json
            external_identifier: CBDB:330529
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.353Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PYZFZXDrn4aHfcMkmgmrmn
        subject_person_id: p_fhyAZ7pjxiNFSFYQVCpzNS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王執法，明人物。嘉靖四十四年進士，籍贯崑山，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 330529）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xYORbMLTiEkK9gFYVgFhk4
          claim_id: c_PYZFZXDrn4aHfcMkmgmrmn
          source_id: s_HkWwHv4gHiYU5JxfeDrHxb
          stance: supports
          locator: CBDB:330529
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CNRxwvp1Pljq2_UmKkn4N7
        subject_person_id: p_u84RG1pPeLw4QLHw6xBnkL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fhyAZ7pjxiNFSFYQVCpzNS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zYo0XWrYKGo-pJa2azRIqs
          claim_id: c_CNRxwvp1Pljq2_UmKkn4N7
          source_id: s_RxmKSd78ICjES8oXhfVySP
          stance: supports
          locator: CBDB：兄弟 王執禮（126683）之父／母 王可大
          quotation: null
          interpretation_note: 由兄弟关系推断：王執法 与 王執禮 为同胞（CBDB 记「兄」），王執禮 之父／母即 王執法 之父／母。
          source:
            id: s_RxmKSd78ICjES8oXhfVySP
            source_type: api_record
            title: 中国历代人物传记资料库：王執法（CBDB 330529）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330529&o=json
            external_identifier: CBDB:330529
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_u84RG1pPeLw4QLHw6xBnkL
        status: active
        display_name: 王可大
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_bBz8nOn1Xst3XuIan1D0sU
        subject_person_id: p_fhyAZ7pjxiNFSFYQVCpzNS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hwqZhRmhj6vWvdBxFiX9dy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7e1Pfl9T_UUdZ9pjhQpXqM
          claim_id: c_bBz8nOn1Xst3XuIan1D0sU
          source_id: s_RxmKSd78ICjES8oXhfVySP
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126683 王執禮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_RxmKSd78ICjES8oXhfVySP
            source_type: api_record
            title: 中国历代人物传记资料库：王執法（CBDB 330529）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330529&o=json
            external_identifier: CBDB:330529
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hwqZhRmhj6vWvdBxFiX9dy
        status: active
        display_name: 王執禮
        merged_into_person_id: null
---

# 王執法

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王執法 | accepted |
| bio.summary | 王執法，明人物。嘉靖四十四年進士，籍贯崑山，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 330529） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_u84RG1pPeLw4QLHw6xBnkL | 王可大 | accepted |
| other | p_hwqZhRmhj6vWvdBxFiX9dy | 王執禮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王執法（CBDB 330529）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330529&o=json)
