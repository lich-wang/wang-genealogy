---
schema: wang-person/v1
id: p_rQcsMdYUa5T1hJ35di8tcC
status: active
merged_into: null
display_name: 王一凱
cbdb_id: 210796
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RLuSPaSgweUHXwqdJUbHXX
        subject_person_id: p_rQcsMdYUa5T1hJ35di8tcC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一凱，明人物。隆慶五年進士，籍贯泰和。（中国历代人物传记资料库 CBDB 210796）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_QDVmQw314vXjFzfQr4EkbO
          claim_id: c_RLuSPaSgweUHXwqdJUbHXX
          source_id: s_TNKk8bfjD7aRppFNGaou9X
          stance: supports
          locator: CBDB:210796
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_TNKk8bfjD7aRppFNGaou9X
            source_type: api_record
            title: 中国历代人物传记资料库：王一凱（CBDB 210796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210796&o=json
            external_identifier: CBDB:210796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2JJWZdwJ4wnMFKZNoKmZCU
        subject_person_id: p_rQcsMdYUa5T1hJ35di8tcC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一凱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_XyZ6xSYgrLbd6BEj3fpqjA
          claim_id: c_2JJWZdwJ4wnMFKZNoKmZCU
          source_id: s_TNKk8bfjD7aRppFNGaou9X
          stance: supports
          locator: CBDB:210796
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_woDC-_zSlu8XPN_oYvcZIA
        subject_person_id: p_upp5kBekQ15jrZwKh79eE5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rQcsMdYUa5T1hJ35di8tcC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5rI6ZaQUvvuCzNspA4sL-f
          claim_id: c_woDC-_zSlu8XPN_oYvcZIA
          source_id: s_BOZr30MEdicukDUKWIXkrK
          stance: supports
          locator: CBDB：兄弟 王一乾（205929）之父／母 王如瓚
          quotation: null
          interpretation_note: 由兄弟关系推断：王一凱 与 王一乾 为同胞（CBDB 记「弟」），王一乾 之父／母即 王一凱 之父／母。
          source:
            id: s_BOZr30MEdicukDUKWIXkrK
            source_type: api_record
            title: 中国历代人物传记资料库：王一凱（CBDB 210796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210796&o=json
            external_identifier: CBDB:210796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_upp5kBekQ15jrZwKh79eE5
        status: active
        display_name: 王如瓚
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_DdnYNAGHxPV7NMJV1tquK7
        subject_person_id: p_DDFA2NLfrQKM4TnFh33EoF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rQcsMdYUa5T1hJ35di8tcC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3UVXkbriFEaNkLlHlK9R6B
          claim_id: c_DdnYNAGHxPV7NMJV1tquK7
          source_id: s_BOZr30MEdicukDUKWIXkrK
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205929 王一乾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_BOZr30MEdicukDUKWIXkrK
            source_type: api_record
            title: 中国历代人物传记资料库：王一凱（CBDB 210796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210796&o=json
            external_identifier: CBDB:210796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DDFA2NLfrQKM4TnFh33EoF
        status: active
        display_name: 王一乾
        merged_into_person_id: null
---

# 王一凱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王一凱，明人物。隆慶五年進士，籍贯泰和。（中国历代人物传记资料库 CBDB 210796） | accepted |
| name.primary | 王一凱 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_upp5kBekQ15jrZwKh79eE5 | 王如瓚 | accepted |
| other | p_DDFA2NLfrQKM4TnFh33EoF | 王一乾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一凱（CBDB 210796）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210796&o=json)
