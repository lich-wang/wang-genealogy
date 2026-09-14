---
schema: wang-person/v1
id: p_1dZvkuZQM68RGosi7sKQG6
status: active
merged_into: null
display_name: 王牧
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ekq25U174wB5CS8upDQA1f
        subject_person_id: p_1dZvkuZQM68RGosi7sKQG6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王牧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iymweCbQHYEitaQCL4i5zz
          claim_id: c_Ekq25U174wB5CS8upDQA1f
          source_id: s_23Eur8dHG5z5XoNb5X39oh
          stance: supports
          locator: CBDB:241088
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241088）
          source: &a1
            id: s_23Eur8dHG5z5XoNb5X39oh
            source_type: api_record
            title: 中国历代人物传记资料库：王牧（CBDB 241088）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241088&o=json
            external_identifier: CBDB:241088
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.943Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_un6NgA5Dh2njvKTK4fBEq2
        subject_person_id: p_1dZvkuZQM68RGosi7sKQG6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王牧，明人物。正統十三年進士，籍贯安州，曾任縣訓導。（中国历代人物传记资料库 CBDB 241088）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GwkLMYc0UdIptqJhf4o1YL
          claim_id: c_un6NgA5Dh2njvKTK4fBEq2
          source_id: s_23Eur8dHG5z5XoNb5X39oh
          stance: supports
          locator: CBDB:241088
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6xNbh47lkGj3T4xRgIc27g
        subject_person_id: p_HJQdCKF1NWQxF4BJ2ijpLL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1dZvkuZQM68RGosi7sKQG6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_URNRvPrCQCNRdUriXfdGAR
          claim_id: c_6xNbh47lkGj3T4xRgIc27g
          source_id: s_LKFt_1TXE4GrCPXinbPnM-
          stance: supports
          locator: CBDB：兄弟 王育（208149）之父／母 王珪
          quotation: null
          interpretation_note: 由兄弟关系推断：王牧 与 王育 为同胞（CBDB 记「弟」），王育 之父／母即 王牧 之父／母。
          source:
            id: s_LKFt_1TXE4GrCPXinbPnM-
            source_type: api_record
            title: 中国历代人物传记资料库：王牧（CBDB 241088）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241088&o=json
            external_identifier: CBDB:241088
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HJQdCKF1NWQxF4BJ2ijpLL
        status: active
        display_name: 王珪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_x7uGk8oT1w7QzCtSp7sXjS
        subject_person_id: p_1dZvkuZQM68RGosi7sKQG6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_HYHpKaJa17iu8Upo6wdU7W
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AskI4clAO0d0M9RsCxzQHc
          claim_id: c_x7uGk8oT1w7QzCtSp7sXjS
          source_id: s_LKFt_1TXE4GrCPXinbPnM-
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 208149 王育）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_LKFt_1TXE4GrCPXinbPnM-
            source_type: api_record
            title: 中国历代人物传记资料库：王牧（CBDB 241088）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241088&o=json
            external_identifier: CBDB:241088
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HYHpKaJa17iu8Upo6wdU7W
        status: active
        display_name: 王育
        merged_into_person_id: null
---

# 王牧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王牧 | accepted |
| bio.summary | 王牧，明人物。正統十三年進士，籍贯安州，曾任縣訓導。（中国历代人物传记资料库 CBDB 241088） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HJQdCKF1NWQxF4BJ2ijpLL | 王珪 | accepted |
| other | p_HYHpKaJa17iu8Upo6wdU7W | 王育 | accepted |

## 外部来源

- [中国历代人物传记资料库：王牧（CBDB 241088）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241088&o=json)
