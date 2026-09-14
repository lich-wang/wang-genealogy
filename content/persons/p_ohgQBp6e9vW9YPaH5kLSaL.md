---
schema: wang-person/v1
id: p_ohgQBp6e9vW9YPaH5kLSaL
status: active
merged_into: null
display_name: 王用化
cbdb_id: 333041
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RZ3eh75fcsm77JiQcNHBMr
        subject_person_id: p_ohgQBp6e9vW9YPaH5kLSaL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用化，明人物。嘉靖四十四年進士，籍贯龍游，曾任儀賓。（中国历代人物传记资料库 CBDB 333041）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_MIQbF_e6uQ9M9YIUyS5jXU
          claim_id: c_RZ3eh75fcsm77JiQcNHBMr
          source_id: s_ZYo38fLf5oTGxABQ2fJTti
          stance: supports
          locator: CBDB:333041
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ZYo38fLf5oTGxABQ2fJTti
            source_type: api_record
            title: 中国历代人物传记资料库：王用化（CBDB 333041）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333041&o=json
            external_identifier: CBDB:333041
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q1vadsHbbnn74TJZqJYHPN
        subject_person_id: p_ohgQBp6e9vW9YPaH5kLSaL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用化
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_TA82cbdGj6BWJYLHJVyYGm
          claim_id: c_Q1vadsHbbnn74TJZqJYHPN
          source_id: s_ZYo38fLf5oTGxABQ2fJTti
          stance: supports
          locator: CBDB:333041
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_AHhXnrNpnIUvKawOw-dCf7
        subject_person_id: p_R5xXVMm2VFc9ZSK17QQRYB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ohgQBp6e9vW9YPaH5kLSaL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RUio11ZdmAg2InbUhC8ABM
          claim_id: c_AHhXnrNpnIUvKawOw-dCf7
          source_id: s_V1wBlldaNrkOI1WSQjGNZa
          stance: supports
          locator: CBDB：兄弟 王用章（126495）之父／母 王綱
          quotation: null
          interpretation_note: 由兄弟关系推断：王用化 与 王用章 为同胞（CBDB 记「弟」），王用章 之父／母即 王用化 之父／母。
          source:
            id: s_V1wBlldaNrkOI1WSQjGNZa
            source_type: api_record
            title: 中国历代人物传记资料库：王用化（CBDB 333041）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333041&o=json
            external_identifier: CBDB:333041
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_R5xXVMm2VFc9ZSK17QQRYB
        status: active
        display_name: 王綱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_4tRRExTPNbjSge3yp6k68V
        subject_person_id: p_HRB6JYhQLj6r8mmLxbphsR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ohgQBp6e9vW9YPaH5kLSaL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DJstf9syRmzv8rD7qldBkZ
          claim_id: c_4tRRExTPNbjSge3yp6k68V
          source_id: s_V1wBlldaNrkOI1WSQjGNZa
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126495 王用章）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_V1wBlldaNrkOI1WSQjGNZa
            source_type: api_record
            title: 中国历代人物传记资料库：王用化（CBDB 333041）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333041&o=json
            external_identifier: CBDB:333041
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HRB6JYhQLj6r8mmLxbphsR
        status: active
        display_name: 王用章
        merged_into_person_id: null
---

# 王用化

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王用化，明人物。嘉靖四十四年進士，籍贯龍游，曾任儀賓。（中国历代人物传记资料库 CBDB 333041） | accepted |
| name.primary | 王用化 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_R5xXVMm2VFc9ZSK17QQRYB | 王綱 | accepted |
| other | p_HRB6JYhQLj6r8mmLxbphsR | 王用章 | accepted |

## 外部来源

- [中国历代人物传记资料库：王用化（CBDB 333041）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333041&o=json)
