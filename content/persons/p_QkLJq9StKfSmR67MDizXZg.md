---
schema: wang-person/v1
id: p_QkLJq9StKfSmR67MDizXZg
status: active
merged_into: null
display_name: 王紹光
cbdb_id: 216152
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oYhSDrF9BRNcsLsKQ4vz5d
        subject_person_id: p_QkLJq9StKfSmR67MDizXZg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹光，明人物。萬曆五年進士，籍贯黃縣。（中国历代人物传记资料库 CBDB 216152）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_P3LjXKirB3TID4pEHB_ciw
          claim_id: c_oYhSDrF9BRNcsLsKQ4vz5d
          source_id: s_iCHhe9A9EFaF7yP6QDpqHR
          stance: supports
          locator: CBDB:216152
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_iCHhe9A9EFaF7yP6QDpqHR
            source_type: api_record
            title: 中国历代人物传记资料库：王紹光（CBDB 216152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216152&o=json
            external_identifier: CBDB:216152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HpG62erH8BqDQDzecdQJiB
        subject_person_id: p_QkLJq9StKfSmR67MDizXZg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6AQfMjPjsd5JREUJ9Veuwv
          claim_id: c_HpG62erH8BqDQDzecdQJiB
          source_id: s_iCHhe9A9EFaF7yP6QDpqHR
          stance: supports
          locator: CBDB:216152
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_w8JdwSTjsc19dVD4qvp0DV
        subject_person_id: p_5j714BoeSUb9hXn4A1cAts
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QkLJq9StKfSmR67MDizXZg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__RiZwTBs6UhcvR8a8agStT
          claim_id: c_w8JdwSTjsc19dVD4qvp0DV
          source_id: s_HYEjf6kCUUB0gwyJBUChQK
          stance: supports
          locator: CBDB：兄弟 王繼光（126878）之父／母 王守默
          quotation: null
          interpretation_note: 由兄弟关系推断：王紹光 与 王繼光 为同胞（CBDB 记「兄」），王繼光 之父／母即 王紹光 之父／母。
          source:
            id: s_HYEjf6kCUUB0gwyJBUChQK
            source_type: api_record
            title: 中国历代人物传记资料库：王紹光（CBDB 216152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216152&o=json
            external_identifier: CBDB:216152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5j714BoeSUb9hXn4A1cAts
        status: active
        display_name: 王守默
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_psHpLInXe355Sd9KzCWwD9
        subject_person_id: p_QQuUCHcAyLfkuJKD8SYwNJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_QkLJq9StKfSmR67MDizXZg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VrTK-9ZxAs1IupL6YmnlhY
          claim_id: c_psHpLInXe355Sd9KzCWwD9
          source_id: s_HYEjf6kCUUB0gwyJBUChQK
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126878 王繼光）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HYEjf6kCUUB0gwyJBUChQK
            source_type: api_record
            title: 中国历代人物传记资料库：王紹光（CBDB 216152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216152&o=json
            external_identifier: CBDB:216152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QQuUCHcAyLfkuJKD8SYwNJ
        status: active
        display_name: 王繼光
        merged_into_person_id: null
---

# 王紹光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王紹光，明人物。萬曆五年進士，籍贯黃縣。（中国历代人物传记资料库 CBDB 216152） | accepted |
| name.primary | 王紹光 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5j714BoeSUb9hXn4A1cAts | 王守默 | accepted |
| other | p_QQuUCHcAyLfkuJKD8SYwNJ | 王繼光 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紹光（CBDB 216152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216152&o=json)
