---
schema: wang-person/v1
id: p_hpHcMFX8XKT64kHX5tREso
status: active
merged_into: null
display_name: 王率祖
cbdb_id: 334094
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5ZPkKBBatT4FxUwUNdeyp4
        subject_person_id: p_hpHcMFX8XKT64kHX5tREso
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王率祖，明人物。隆慶二年進士，籍贯南陽。（中国历代人物传记资料库 CBDB 334094）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_jZ_lQkngqpc1oxcSq5ZzUd
          claim_id: c_5ZPkKBBatT4FxUwUNdeyp4
          source_id: s_vzpCzVd5JF6Hpic4YKRd7o
          stance: supports
          locator: CBDB:334094
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_vzpCzVd5JF6Hpic4YKRd7o
            source_type: api_record
            title: 中国历代人物传记资料库：王率祖（CBDB 334094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334094&o=json
            external_identifier: CBDB:334094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8EdAjmt2KmN4TEQA8hSJ5u
        subject_person_id: p_hpHcMFX8XKT64kHX5tREso
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王率祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_uj461AcE2GQHKbqNuVbLER
          claim_id: c_8EdAjmt2KmN4TEQA8hSJ5u
          source_id: s_vzpCzVd5JF6Hpic4YKRd7o
          stance: supports
          locator: CBDB:334094
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7AMgNLrCe4OTwpqcrVT9Ci
        subject_person_id: p_51Pca5wdng4NB9T2FpYuFX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hpHcMFX8XKT64kHX5tREso
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5gJQ50GxKY_lQWqjKHUMy9
          claim_id: c_7AMgNLrCe4OTwpqcrVT9Ci
          source_id: s_3uKbG8tM9ZJIsKiGuUtWhp
          stance: supports
          locator: CBDB：兄弟 王汝鲁（126502）之父／母 王可
          quotation: null
          interpretation_note: 由兄弟关系推断：王率祖 与 王汝鲁 为同胞（CBDB 记「兄」），王汝鲁 之父／母即 王率祖 之父／母。
          source:
            id: s_3uKbG8tM9ZJIsKiGuUtWhp
            source_type: api_record
            title: 中国历代人物传记资料库：王率祖（CBDB 334094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334094&o=json
            external_identifier: CBDB:334094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_51Pca5wdng4NB9T2FpYuFX
        status: active
        display_name: 王可
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_2xoj9rIl0cxOzxBlhitWgj
        subject_person_id: p_hpHcMFX8XKT64kHX5tREso
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_iRoPCMQGG7T8QWQEfbMdBx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QzptuCU02LLACnY34RL78X
          claim_id: c_2xoj9rIl0cxOzxBlhitWgj
          source_id: s_3uKbG8tM9ZJIsKiGuUtWhp
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126502 王汝魯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3uKbG8tM9ZJIsKiGuUtWhp
            source_type: api_record
            title: 中国历代人物传记资料库：王率祖（CBDB 334094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334094&o=json
            external_identifier: CBDB:334094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iRoPCMQGG7T8QWQEfbMdBx
        status: active
        display_name: 王汝鲁
        merged_into_person_id: null
---

# 王率祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王率祖，明人物。隆慶二年進士，籍贯南陽。（中国历代人物传记资料库 CBDB 334094） | accepted |
| name.primary | 王率祖 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_51Pca5wdng4NB9T2FpYuFX | 王可 | accepted |
| other | p_iRoPCMQGG7T8QWQEfbMdBx | 王汝鲁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王率祖（CBDB 334094）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334094&o=json)
