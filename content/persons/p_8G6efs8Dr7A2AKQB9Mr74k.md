---
schema: wang-person/v1
id: p_8G6efs8Dr7A2AKQB9Mr74k
status: active
merged_into: null
display_name: 王廷儒
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1aZPCGSJF5FVtRySDg8JgU
        subject_person_id: p_8G6efs8Dr7A2AKQB9Mr74k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷儒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9EB8CcAarWjxb7JSbpRas1
          claim_id: c_1aZPCGSJF5FVtRySDg8JgU
          source_id: s_6hprU9PC7N9jHmBebD3jqu
          stance: supports
          locator: CBDB:325992
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（325992）
          source: &a1
            id: s_6hprU9PC7N9jHmBebD3jqu
            source_type: api_record
            title: 中国历代人物传记资料库：王廷儒（CBDB 325992）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325992&o=json
            external_identifier: CBDB:325992
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.208Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6AszNHNEYFAoirSo8W35HF
        subject_person_id: p_8G6efs8Dr7A2AKQB9Mr74k
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷儒，明人物。嘉靖三十八年進士，籍贯黃岡，曾任都事。（中国历代人物传记资料库 CBDB 325992）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iNCCQApp6b3lQB9k8-cDRg
          claim_id: c_6AszNHNEYFAoirSo8W35HF
          source_id: s_6hprU9PC7N9jHmBebD3jqu
          stance: supports
          locator: CBDB:325992
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BzCP1Nl45TedU7G2by9S0E
        subject_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8G6efs8Dr7A2AKQB9Mr74k
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OlFmmdvaP7xtsbEDPkLyFl
          claim_id: c_BzCP1Nl45TedU7G2by9S0E
          source_id: s_EYeQ-DNG4RkNLk-NJmptwh
          stance: supports
          locator: CBDB：兄弟 王廷瞻（34669）之父／母 王濟
          quotation: null
          interpretation_note: 由兄弟关系推断：王廷儒 与 王廷瞻 为同胞（CBDB 记「弟」），王廷瞻 之父／母即 王廷儒 之父／母。
          source:
            id: s_EYeQ-DNG4RkNLk-NJmptwh
            source_type: api_record
            title: 中国历代人物传记资料库：王廷儒（CBDB 325992）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325992&o=json
            external_identifier: CBDB:325992
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CF5LJP7gMSDjjxZDLTJKd5
        status: active
        display_name: 王濟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_r2WfiDWS6g-wHykXc8SJAf
        subject_person_id: p_8G6efs8Dr7A2AKQB9Mr74k
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yJdXEyhNkYGEWdnouNB9Xu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DzJ4HcwjNfRj6ab5a5k7Cd
          claim_id: c_r2WfiDWS6g-wHykXc8SJAf
          source_id: s_EYeQ-DNG4RkNLk-NJmptwh
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 34669 王廷瞻）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_EYeQ-DNG4RkNLk-NJmptwh
            source_type: api_record
            title: 中国历代人物传记资料库：王廷儒（CBDB 325992）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325992&o=json
            external_identifier: CBDB:325992
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yJdXEyhNkYGEWdnouNB9Xu
        status: active
        display_name: 王廷瞻
        merged_into_person_id: null
---

# 王廷儒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷儒 | accepted |
| bio.summary | 王廷儒，明人物。嘉靖三十八年進士，籍贯黃岡，曾任都事。（中国历代人物传记资料库 CBDB 325992） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CF5LJP7gMSDjjxZDLTJKd5 | 王濟 | accepted |
| other | p_yJdXEyhNkYGEWdnouNB9Xu | 王廷瞻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷儒（CBDB 325992）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325992&o=json)
