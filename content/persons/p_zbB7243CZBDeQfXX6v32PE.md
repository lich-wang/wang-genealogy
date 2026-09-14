---
schema: wang-person/v1
id: p_zbB7243CZBDeQfXX6v32PE
status: active
merged_into: null
display_name: 王用華
cbdb_id: 335482
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7Z8cJ1n81YTo6jZ1QK8Hnq
        subject_person_id: p_zbB7243CZBDeQfXX6v32PE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用華，明人物。隆慶二年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 335482）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_DKQEtg56BaQoahNnNXkXm_
          claim_id: c_7Z8cJ1n81YTo6jZ1QK8Hnq
          source_id: s_8DnVUsSL9NUBMARyQF4k2h
          stance: supports
          locator: CBDB:335482
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_8DnVUsSL9NUBMARyQF4k2h
            source_type: api_record
            title: 中国历代人物传记资料库：王用華（CBDB 335482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335482&o=json
            external_identifier: CBDB:335482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vHicVesLW8ndqfeQstdxUA
        subject_person_id: p_zbB7243CZBDeQfXX6v32PE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Z5gEerUHf6C1oXG6YAQK7k
          claim_id: c_vHicVesLW8ndqfeQstdxUA
          source_id: s_8DnVUsSL9NUBMARyQF4k2h
          stance: supports
          locator: CBDB:335482
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4001-4100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wNUPxSFKScBz62NwG6lCbv
        subject_person_id: p_wFTS9Dws5nhZvJ8pXQTGVc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zbB7243CZBDeQfXX6v32PE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tPLdPATIoRlUVeSTTHRjE8
          claim_id: c_wNUPxSFKScBz62NwG6lCbv
          source_id: s_6A-uSjvHLAbZE3ugAQa3D3
          stance: supports
          locator: CBDB：兄弟 王用汲（126494）之父／母 王孫
          quotation: null
          interpretation_note: 由兄弟关系推断：王用華 与 王用汲 为同胞（CBDB 记「弟」），王用汲 之父／母即 王用華 之父／母。
          source:
            id: s_6A-uSjvHLAbZE3ugAQa3D3
            source_type: api_record
            title: 中国历代人物传记资料库：王用華（CBDB 335482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335482&o=json
            external_identifier: CBDB:335482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wFTS9Dws5nhZvJ8pXQTGVc
        status: active
        display_name: 王孫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_z1Cq23gQL8UjqrldAaFlZ_
        subject_person_id: p_BzK6A2uXvZyrjjgruuh1Qh
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zbB7243CZBDeQfXX6v32PE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rR7_UF9IgiGT1Qt39s18iP
          claim_id: c_z1Cq23gQL8UjqrldAaFlZ_
          source_id: s_6A-uSjvHLAbZE3ugAQa3D3
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126494 王用汲）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6A-uSjvHLAbZE3ugAQa3D3
            source_type: api_record
            title: 中国历代人物传记资料库：王用華（CBDB 335482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335482&o=json
            external_identifier: CBDB:335482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BzK6A2uXvZyrjjgruuh1Qh
        status: active
        display_name: 王用汲
        merged_into_person_id: null
---

# 王用華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王用華，明人物。隆慶二年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 335482） | accepted |
| name.primary | 王用華 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wFTS9Dws5nhZvJ8pXQTGVc | 王孫 | accepted |
| other | p_BzK6A2uXvZyrjjgruuh1Qh | 王用汲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王用華（CBDB 335482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335482&o=json)
