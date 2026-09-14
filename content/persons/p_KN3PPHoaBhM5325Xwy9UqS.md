---
schema: wang-person/v1
id: p_KN3PPHoaBhM5325Xwy9UqS
status: active
merged_into: null
display_name: 王璿
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3poiuk5u2VwzbDarTRwEEh
        subject_person_id: p_KN3PPHoaBhM5325Xwy9UqS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j7CqWX1CKvhHP8EAjeFoFV
          claim_id: c_3poiuk5u2VwzbDarTRwEEh
          source_id: s_pYsxXGwzMvxiwkGMD6VKGm
          stance: supports
          locator: CBDB:255297
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（255297）
          source: &a1
            id: s_pYsxXGwzMvxiwkGMD6VKGm
            source_type: api_record
            title: 中国历代人物传记资料库：王璿（CBDB 255297）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255297&o=json
            external_identifier: CBDB:255297
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.342Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SRDsA3jnKcEubtxfYFc9tL
        subject_person_id: p_KN3PPHoaBhM5325Xwy9UqS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璿，明人物。成化十七年進士，籍贯嘉善，曾任驛丞。（中国历代人物传记资料库 CBDB 255297）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2tx2nC8TchXjxmnAj0eyPK
          claim_id: c_SRDsA3jnKcEubtxfYFc9tL
          source_id: s_pYsxXGwzMvxiwkGMD6VKGm
          stance: supports
          locator: CBDB:255297
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CKSrFsPuDuc-A-sylMv6_O
        subject_person_id: p_c9qMmjg6ShUcbRMz8upxQ9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KN3PPHoaBhM5325Xwy9UqS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iYTziZevggremhApW8mb9V
          claim_id: c_CKSrFsPuDuc-A-sylMv6_O
          source_id: s_ZegnjelONE0gqcRsKwRsq7
          stance: supports
          locator: CBDB：兄弟 王琳（126709）之父／母 王景明
          quotation: null
          interpretation_note: 由兄弟关系推断：王璿 与 王琳 为同胞（CBDB 记「弟」），王琳 之父／母即 王璿 之父／母。
          source:
            id: s_ZegnjelONE0gqcRsKwRsq7
            source_type: api_record
            title: 中国历代人物传记资料库：王璿（CBDB 255297）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255297&o=json
            external_identifier: CBDB:255297
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_c9qMmjg6ShUcbRMz8upxQ9
        status: active
        display_name: 王景明
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_quxyfnZGqT1Xvw5YOh0IQK
        subject_person_id: p_KN3PPHoaBhM5325Xwy9UqS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aabBxXPLcM6N6VjGC9FrrY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5l9iVmrv-MXaMZ5gtlRe-N
          claim_id: c_quxyfnZGqT1Xvw5YOh0IQK
          source_id: s_ZegnjelONE0gqcRsKwRsq7
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126709 王琳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ZegnjelONE0gqcRsKwRsq7
            source_type: api_record
            title: 中国历代人物传记资料库：王璿（CBDB 255297）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255297&o=json
            external_identifier: CBDB:255297
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aabBxXPLcM6N6VjGC9FrrY
        status: active
        display_name: 王琳
        merged_into_person_id: null
---

# 王璿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璿 | accepted |
| bio.summary | 王璿，明人物。成化十七年進士，籍贯嘉善，曾任驛丞。（中国历代人物传记资料库 CBDB 255297） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_c9qMmjg6ShUcbRMz8upxQ9 | 王景明 | accepted |
| other | p_aabBxXPLcM6N6VjGC9FrrY | 王琳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璿（CBDB 255297）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255297&o=json)
