---
schema: wang-person/v1
id: p_NwtP6da4w6tUKFJvZPjDZ5
status: active
merged_into: null
display_name: 王賜
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AKjaFsvzD2esGerxMd9v7G
        subject_person_id: p_NwtP6da4w6tUKFJvZPjDZ5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GkWps62F6mFGd596zyKPoM
          claim_id: c_AKjaFsvzD2esGerxMd9v7G
          source_id: s_6ST9SaA9UB9z1c1XnTQAXx
          stance: supports
          locator: CBDB:244061
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244061）
          source: &a1
            id: s_6ST9SaA9UB9z1c1XnTQAXx
            source_type: api_record
            title: 中国历代人物传记资料库：王賜（CBDB 244061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244061&o=json
            external_identifier: CBDB:244061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.020Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UMVsT6rsHfwqQPNRGRPBAo
        subject_person_id: p_NwtP6da4w6tUKFJvZPjDZ5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賜，明人物。成化五年進士，籍贯餘姚。（中国历代人物传记资料库 CBDB 244061）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_47BEI2IvMgDQggBZjuIOFd
          claim_id: c_UMVsT6rsHfwqQPNRGRPBAo
          source_id: s_6ST9SaA9UB9z1c1XnTQAXx
          stance: supports
          locator: CBDB:244061
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2IQLtoz1TglZa4jp4CFUEG
        subject_person_id: p_PssJzEL6PmniEjHiumeCwT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NwtP6da4w6tUKFJvZPjDZ5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GYRUrXO73yXoSogF-RgGWe
          claim_id: c_2IQLtoz1TglZa4jp4CFUEG
          source_id: s_3mha0d4OpeayodNq7ggiff
          stance: supports
          locator: CBDB：兄弟 王舟（199369）之父／母 王騶虞
          quotation: null
          interpretation_note: 由兄弟关系推断：王賜 与 王舟 为同胞（CBDB 记「弟」），王舟 之父／母即 王賜 之父／母。
          source:
            id: s_3mha0d4OpeayodNq7ggiff
            source_type: api_record
            title: 中国历代人物传记资料库：王賜（CBDB 244061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244061&o=json
            external_identifier: CBDB:244061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PssJzEL6PmniEjHiumeCwT
        status: active
        display_name: 王騶虞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_P6qx5EKA8F-u55s3QZB7bT
        subject_person_id: p_NwtP6da4w6tUKFJvZPjDZ5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wGeqMr94XHkQUokME5FCJ3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fGLtkOyGgq0gji3hnjbpu6
          claim_id: c_P6qx5EKA8F-u55s3QZB7bT
          source_id: s_3mha0d4OpeayodNq7ggiff
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199369 王舟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3mha0d4OpeayodNq7ggiff
            source_type: api_record
            title: 中国历代人物传记资料库：王賜（CBDB 244061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244061&o=json
            external_identifier: CBDB:244061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wGeqMr94XHkQUokME5FCJ3
        status: active
        display_name: 王舟
        merged_into_person_id: null
---

# 王賜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賜 | accepted |
| bio.summary | 王賜，明人物。成化五年進士，籍贯餘姚。（中国历代人物传记资料库 CBDB 244061） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PssJzEL6PmniEjHiumeCwT | 王騶虞 | accepted |
| other | p_wGeqMr94XHkQUokME5FCJ3 | 王舟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賜（CBDB 244061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244061&o=json)
