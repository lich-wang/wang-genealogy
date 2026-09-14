---
schema: wang-person/v1
id: p_WdRPeFwAMEzH5rEnyH9rR9
status: active
merged_into: null
display_name: 王旵
cbdb_id: 280924
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bXRQxUSHJzZT33F7PEvLcM
        subject_person_id: p_WdRPeFwAMEzH5rEnyH9rR9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旵，明人物。正德十二年進士，籍贯句容。（中国历代人物传记资料库 CBDB 280924）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_KKyT5y83NK9gotGM9qQFlu
          claim_id: c_bXRQxUSHJzZT33F7PEvLcM
          source_id: s_boUDLLKF4VfB7Y1v5vV1d8
          stance: supports
          locator: CBDB:280924
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_boUDLLKF4VfB7Y1v5vV1d8
            source_type: api_record
            title: 中国历代人物传记资料库：王旵（CBDB 280924）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280924&o=json
            external_identifier: CBDB:280924
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_VdsEqXjC2m1iDvABxKp8tL
        subject_person_id: p_WdRPeFwAMEzH5rEnyH9rR9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DiFFUyUeCiCjzaNPRoLzu9
          claim_id: c_VdsEqXjC2m1iDvABxKp8tL
          source_id: s_boUDLLKF4VfB7Y1v5vV1d8
          stance: supports
          locator: CBDB:280924
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_EcbySu9Pa3xnuruMjRqOaN
        subject_person_id: p_qGQsVR5gzeQy8Y9aNmPG9C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WdRPeFwAMEzH5rEnyH9rR9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4tvJ7AQHfL4z2y1hm5pLl-
          claim_id: c_EcbySu9Pa3xnuruMjRqOaN
          source_id: s_1GYh1cNlXclE3hqEajt_qa
          stance: supports
          locator: CBDB：兄弟 王暐（68343）之父／母 王槐
          quotation: null
          interpretation_note: 由兄弟关系推断：王旵 与 王暐 为同胞（CBDB 记「兄」），王暐 之父／母即 王旵 之父／母。
          source:
            id: s_1GYh1cNlXclE3hqEajt_qa
            source_type: api_record
            title: 中国历代人物传记资料库：王旵（CBDB 280924）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280924&o=json
            external_identifier: CBDB:280924
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qGQsVR5gzeQy8Y9aNmPG9C
        status: active
        display_name: 王槐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_pIGPF0K855vryCS64OEfo9
        subject_person_id: p_WdRPeFwAMEzH5rEnyH9rR9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qC31C42hD4UK4m3NDzMPZB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y4KGPpiUKpgteSjTstzPWt
          claim_id: c_pIGPF0K855vryCS64OEfo9
          source_id: s_1GYh1cNlXclE3hqEajt_qa
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68343 王暐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1GYh1cNlXclE3hqEajt_qa
            source_type: api_record
            title: 中国历代人物传记资料库：王旵（CBDB 280924）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280924&o=json
            external_identifier: CBDB:280924
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qC31C42hD4UK4m3NDzMPZB
        status: active
        display_name: 王暐
        merged_into_person_id: null
---

# 王旵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王旵，明人物。正德十二年進士，籍贯句容。（中国历代人物传记资料库 CBDB 280924） | accepted |
| name.primary | 王旵 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qGQsVR5gzeQy8Y9aNmPG9C | 王槐 | accepted |
| other | p_qC31C42hD4UK4m3NDzMPZB | 王暐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王旵（CBDB 280924）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280924&o=json)
