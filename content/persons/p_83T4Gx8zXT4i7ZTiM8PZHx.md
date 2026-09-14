---
schema: wang-person/v1
id: p_83T4Gx8zXT4i7ZTiM8PZHx
status: active
merged_into: null
display_name: 王汝濟
cbdb_id: 318320
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Au2aCCDSisQFZiYQy2uLVQ
        subject_person_id: p_83T4Gx8zXT4i7ZTiM8PZHx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝濟，明人物。嘉靖三十二年進士，籍贯濱州，曾任典史。（中国历代人物传记资料库 CBDB 318320）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_2OQ4uMo5rgKOkqZA3kUk1V
          claim_id: c_Au2aCCDSisQFZiYQy2uLVQ
          source_id: s_Ww5qA8Wuto1NZ5iAX48n33
          stance: supports
          locator: CBDB:318320
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Ww5qA8Wuto1NZ5iAX48n33
            source_type: api_record
            title: 中国历代人物传记资料库：王汝濟（CBDB 318320）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318320&o=json
            external_identifier: CBDB:318320
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gGZepKJ3tStHbwKyEEmd3J
        subject_person_id: p_83T4Gx8zXT4i7ZTiM8PZHx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝濟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FP4BhCQkVYtKeCm41aJkZk
          claim_id: c_gGZepKJ3tStHbwKyEEmd3J
          source_id: s_Ww5qA8Wuto1NZ5iAX48n33
          stance: supports
          locator: CBDB:318320
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8_yhRfFY9L8w0cYZZW-TKS
        subject_person_id: p_EGM3NKNbuzivbf6yG7YfAa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_83T4Gx8zXT4i7ZTiM8PZHx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0GMCggoJK79jcKr4vMkMlk
          claim_id: c_8_yhRfFY9L8w0cYZZW-TKS
          source_id: s_t6heVWJpyzbZ85T9_cY5fe
          stance: supports
          locator: CBDB：兄弟 王汝言（126500）之父／母 王鎌
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝濟 与 王汝言 为同胞（CBDB 记「兄」），王汝言 之父／母即 王汝濟 之父／母。
          source:
            id: s_t6heVWJpyzbZ85T9_cY5fe
            source_type: api_record
            title: 中国历代人物传记资料库：王汝濟（CBDB 318320）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318320&o=json
            external_identifier: CBDB:318320
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EGM3NKNbuzivbf6yG7YfAa
        status: active
        display_name: 王鎌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_nygMGSPj7jMQaPuKWomiXU
        subject_person_id: p_83T4Gx8zXT4i7ZTiM8PZHx
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sNBx1By3rYXjFtLdVCyoze
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gn6fKYX5B6I66_6I_e8U_E
          claim_id: c_nygMGSPj7jMQaPuKWomiXU
          source_id: s_t6heVWJpyzbZ85T9_cY5fe
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126500 王汝言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_t6heVWJpyzbZ85T9_cY5fe
            source_type: api_record
            title: 中国历代人物传记资料库：王汝濟（CBDB 318320）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318320&o=json
            external_identifier: CBDB:318320
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sNBx1By3rYXjFtLdVCyoze
        status: active
        display_name: 王汝言
        merged_into_person_id: null
---

# 王汝濟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王汝濟，明人物。嘉靖三十二年進士，籍贯濱州，曾任典史。（中国历代人物传记资料库 CBDB 318320） | accepted |
| name.primary | 王汝濟 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EGM3NKNbuzivbf6yG7YfAa | 王鎌 | accepted |
| other | p_sNBx1By3rYXjFtLdVCyoze | 王汝言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝濟（CBDB 318320）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318320&o=json)
