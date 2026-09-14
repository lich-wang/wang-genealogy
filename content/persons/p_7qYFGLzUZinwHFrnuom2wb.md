---
schema: wang-person/v1
id: p_7qYFGLzUZinwHFrnuom2wb
status: active
merged_into: null
display_name: 王之惠
cbdb_id: 307690
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PJ1z9RZtDyBNVv7HMLXFbn
        subject_person_id: p_7qYFGLzUZinwHFrnuom2wb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之惠，明人物。嘉靖二十三年進士，籍贯石首。（中国历代人物传记资料库 CBDB 307690）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_1SOKcf3vvS6xgGRj2sYQsD
          claim_id: c_PJ1z9RZtDyBNVv7HMLXFbn
          source_id: s_i13X5GHDAeF96ECbt5mbef
          stance: supports
          locator: CBDB:307690
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_i13X5GHDAeF96ECbt5mbef
            source_type: api_record
            title: 中国历代人物传记资料库：王之惠（CBDB 307690）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307690&o=json
            external_identifier: CBDB:307690
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_v2rB4memAeHkRvkrxKEiHg
        subject_person_id: p_7qYFGLzUZinwHFrnuom2wb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之惠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hNzcw27WBTPaMi4SByiPXp
          claim_id: c_v2rB4memAeHkRvkrxKEiHg
          source_id: s_i13X5GHDAeF96ECbt5mbef
          stance: supports
          locator: CBDB:307690
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UWj76PhcAS6lpWzZGbu9gF
        subject_person_id: p_HxEM6RL9fRNSLHFJ3ioZEE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7qYFGLzUZinwHFrnuom2wb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_brwhTpntKXsS5rDV1JV-Y_
          claim_id: c_UWj76PhcAS6lpWzZGbu9gF
          source_id: s_GcPixvkPzApY0JuO2ZfIMk
          stance: supports
          locator: CBDB：兄弟 王之誥（124361）之父／母 王芳
          quotation: null
          interpretation_note: 由兄弟关系推断：王之惠 与 王之誥 为同胞（CBDB 记「兄」），王之誥 之父／母即 王之惠 之父／母。
          source:
            id: s_GcPixvkPzApY0JuO2ZfIMk
            source_type: api_record
            title: 中国历代人物传记资料库：王之惠（CBDB 307690）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307690&o=json
            external_identifier: CBDB:307690
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HxEM6RL9fRNSLHFJ3ioZEE
        status: active
        display_name: 王芳
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_B9o3PVqci8w1BG7AovHNoh
        subject_person_id: p_7qYFGLzUZinwHFrnuom2wb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_WQq7QzkQTzLqnMJ812eWYA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KBlfQEKHBvbepJY8urGQP8
          claim_id: c_B9o3PVqci8w1BG7AovHNoh
          source_id: s_GcPixvkPzApY0JuO2ZfIMk
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 124361 王之誥）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GcPixvkPzApY0JuO2ZfIMk
            source_type: api_record
            title: 中国历代人物传记资料库：王之惠（CBDB 307690）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307690&o=json
            external_identifier: CBDB:307690
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WQq7QzkQTzLqnMJ812eWYA
        status: active
        display_name: 王之誥
        merged_into_person_id: null
---

# 王之惠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王之惠，明人物。嘉靖二十三年進士，籍贯石首。（中国历代人物传记资料库 CBDB 307690） | accepted |
| name.primary | 王之惠 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HxEM6RL9fRNSLHFJ3ioZEE | 王芳 | accepted |
| other | p_WQq7QzkQTzLqnMJ812eWYA | 王之誥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之惠（CBDB 307690）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307690&o=json)
