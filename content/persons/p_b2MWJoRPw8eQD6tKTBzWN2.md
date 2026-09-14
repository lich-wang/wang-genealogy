---
schema: wang-person/v1
id: p_b2MWJoRPw8eQD6tKTBzWN2
status: active
merged_into: null
display_name: 王信之
cbdb_id: 239110
revision: 5
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qQoBJQMQoUvh7fozk8rMdJ
        subject_person_id: p_b2MWJoRPw8eQD6tKTBzWN2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信之，明人物。正统十年進士，籍贯濟寧州。（中国历代人物传记资料库 CBDB 239110）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Dj0_P5iuuOAw906TA7leOk
          claim_id: c_qQoBJQMQoUvh7fozk8rMdJ
          source_id: s_EtJM7W9b8qmz93PbRCJg2B
          stance: supports
          locator: CBDB:239110
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_EtJM7W9b8qmz93PbRCJg2B
            source_type: api_record
            title: 中国历代人物传记资料库：王信之（CBDB 239110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239110&o=json
            external_identifier: CBDB:239110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JJpdFXb6UMLo6R71z76LUP
        subject_person_id: p_b2MWJoRPw8eQD6tKTBzWN2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4jJRHnXVKAGysgZC6qF14q
          claim_id: c_JJpdFXb6UMLo6R71z76LUP
          source_id: s_EtJM7W9b8qmz93PbRCJg2B
          stance: supports
          locator: CBDB:239110
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_qGvjGbAmTdtNdZZuggdsS6
        subject_person_id: p_b2MWJoRPw8eQD6tKTBzWN2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EKnyL5yNzB3UQXTrkLtsAg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t18Q5tb-XCFuP3kZ1JMkc1
          claim_id: c_qGvjGbAmTdtNdZZuggdsS6
          source_id: s_ocnBND2ZpeAEqtQToHFBV8
          stance: supports
          locator: 正统十年進士登科錄:一卷，第二甲第二十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ocnBND2ZpeAEqtQToHFBV8
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 208004）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208004&o=json
            external_identifier: CBDB:208004
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.937Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EKnyL5yNzB3UQXTrkLtsAg
        status: active
        display_name: 王鎮
        merged_into_person_id: null
    - claim:
        id: c_ces9Z-uNMg7f1G_YFy8MES
        subject_person_id: p_b2MWJoRPw8eQD6tKTBzWN2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Mw6VH2JMwmJE9PBiDhv4CK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hhyMrDEVHKqsn6f0BbFBY1
          claim_id: c_ces9Z-uNMg7f1G_YFy8MES
          source_id: s_1dQjztfVc2_5CWP0WopvTb
          stance: supports
          locator: CBDB：兄弟 王鎮（208004）之父／母 王信之
          quotation: null
          interpretation_note: 由兄弟关系推断：王鎰 与 王鎮 为同胞（CBDB 记「弟」），王鎮 之父／母即 王鎰 之父／母。
          source:
            id: s_1dQjztfVc2_5CWP0WopvTb
            source_type: api_record
            title: 中国历代人物传记资料库：王鎰（CBDB 239114）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239114&o=json
            external_identifier: CBDB:239114
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Mw6VH2JMwmJE9PBiDhv4CK
        status: active
        display_name: 王鎰
        merged_into_person_id: null
    - claim:
        id: c_NrKN3uEAj1-lX4KCxNAuwM
        subject_person_id: p_b2MWJoRPw8eQD6tKTBzWN2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tyw5eLiEHesny1p23jQWBT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MF5E95ZHvcTV7D7vAl0_bG
          claim_id: c_NrKN3uEAj1-lX4KCxNAuwM
          source_id: s_5flcV1ySqdlB9fZlva5R3e
          stance: supports
          locator: CBDB：兄弟 王鎮（208004）之父／母 王信之
          quotation: null
          interpretation_note: 由兄弟关系推断：王鏞 与 王鎮 为同胞（CBDB 记「弟」），王鎮 之父／母即 王鏞 之父／母。
          source:
            id: s_5flcV1ySqdlB9fZlva5R3e
            source_type: api_record
            title: 中国历代人物传记资料库：王鏞（CBDB 239113）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239113&o=json
            external_identifier: CBDB:239113
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tyw5eLiEHesny1p23jQWBT
        status: active
        display_name: 王鏞
        merged_into_person_id: null
    - claim:
        id: c_iKRVoe4UXaUBn6pHVezbMV
        subject_person_id: p_b2MWJoRPw8eQD6tKTBzWN2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xDr4NHjZFUhRWbvucZtNmA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VTG2PxtAme-mYDXi22Dni6
          claim_id: c_iKRVoe4UXaUBn6pHVezbMV
          source_id: s_QEFVRRcmdqaiWuQIq94LfJ
          stance: supports
          locator: CBDB：兄弟 王鎮（208004）之父／母 王信之
          quotation: null
          interpretation_note: 由兄弟关系推断：王銳 与 王鎮 为同胞（CBDB 记「兄」），王鎮 之父／母即 王銳 之父／母。
          source:
            id: s_QEFVRRcmdqaiWuQIq94LfJ
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 239115）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239115&o=json
            external_identifier: CBDB:239115
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xDr4NHjZFUhRWbvucZtNmA
        status: active
        display_name: 王銳
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王信之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王信之，明人物。正统十年進士，籍贯濟寧州。（中国历代人物传记资料库 CBDB 239110） | accepted |
| name.primary | 王信之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_EKnyL5yNzB3UQXTrkLtsAg | 王鎮 | accepted |
| children | p_Mw6VH2JMwmJE9PBiDhv4CK | 王鎰 | accepted |
| children | p_tyw5eLiEHesny1p23jQWBT | 王鏞 | accepted |
| children | p_xDr4NHjZFUhRWbvucZtNmA | 王銳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王銳（CBDB 239115）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239115&o=json)
- [中国历代人物传记资料库：王信之（CBDB 239110）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239110&o=json)
- [中国历代人物传记资料库：王鎰（CBDB 239114）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239114&o=json)
- [中国历代人物传记资料库：王鏞（CBDB 239113）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239113&o=json)
- [中国历代人物传记资料库：王鎮（CBDB 208004）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208004&o=json)
