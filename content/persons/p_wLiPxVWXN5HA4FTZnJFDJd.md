---
schema: wang-person/v1
id: p_wLiPxVWXN5HA4FTZnJFDJd
status: active
merged_into: null
display_name: 王應華
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WVSaQQJM49LMKrrF5f3MtD
        subject_person_id: p_wLiPxVWXN5HA4FTZnJFDJd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sjYREqNJtQsMwh3Wm1w4AP
          claim_id: c_WVSaQQJM49LMKrrF5f3MtD
          source_id: s_7vUvs6vFcY5E6sbB2cwxwF
          stance: supports
          locator: CBDB:264770
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（264770）
          source: &a1
            id: s_7vUvs6vFcY5E6sbB2cwxwF
            source_type: api_record
            title: 中国历代人物传记资料库：王應華（CBDB 264770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264770&o=json
            external_identifier: CBDB:264770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.671Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Emg28NH6mfWeoKBz8Z8Nwr
        subject_person_id: p_wLiPxVWXN5HA4FTZnJFDJd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應華，明人物。弘治六年進士，籍贯太和。（中国历代人物传记资料库 CBDB 264770）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kLIt5IovGRZVu2hc9yBQJa
          claim_id: c_Emg28NH6mfWeoKBz8Z8Nwr
          source_id: s_7vUvs6vFcY5E6sbB2cwxwF
          stance: supports
          locator: CBDB:264770
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8HEp6177Ld-HKFpTh823qn
        subject_person_id: p_XJby7SFFzaZ2pkf21xuAQZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wLiPxVWXN5HA4FTZnJFDJd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zjqUDDhsNf3HdV5s0VE0LC
          claim_id: c_8HEp6177Ld-HKFpTh823qn
          source_id: s_74BktygABhG__BF5LsPleV
          stance: supports
          locator: CBDB：兄弟 王應奎（200930）之父／母 王珏
          quotation: null
          interpretation_note: 由兄弟关系推断：王應華 与 王應奎 为同胞（CBDB 记「兄」），王應奎 之父／母即 王應華 之父／母。
          source:
            id: s_74BktygABhG__BF5LsPleV
            source_type: api_record
            title: 中国历代人物传记资料库：王應華（CBDB 264770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264770&o=json
            external_identifier: CBDB:264770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XJby7SFFzaZ2pkf21xuAQZ
        status: active
        display_name: 王珏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_-lYmp3EzN9I8C-acTUAXGv
        subject_person_id: p_QeQKrjZirVTXRydZQsQCp7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wLiPxVWXN5HA4FTZnJFDJd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JCbK4-T1me6v6QZ_wkUN77
          claim_id: c_-lYmp3EzN9I8C-acTUAXGv
          source_id: s_74BktygABhG__BF5LsPleV
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200930 王應奎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_74BktygABhG__BF5LsPleV
            source_type: api_record
            title: 中国历代人物传记资料库：王應華（CBDB 264770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264770&o=json
            external_identifier: CBDB:264770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QeQKrjZirVTXRydZQsQCp7
        status: active
        display_name: 王應奎
        merged_into_person_id: null
---

# 王應華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應華 | accepted |
| bio.summary | 王應華，明人物。弘治六年進士，籍贯太和。（中国历代人物传记资料库 CBDB 264770） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XJby7SFFzaZ2pkf21xuAQZ | 王珏 | accepted |
| other | p_QeQKrjZirVTXRydZQsQCp7 | 王應奎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應華（CBDB 264770）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264770&o=json)
