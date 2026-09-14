---
schema: wang-person/v1
id: p_RAJn192m2ZFeY7uaA2zS34
status: active
merged_into: null
display_name: 王憲彥
cbdb_id: 235989
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M41vRiiAEPB8TEC1ce4VSf
        subject_person_id: p_RAJn192m2ZFeY7uaA2zS34
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲彥，明人物。籍贯江陰。（中国历代人物传记资料库 CBDB 235989）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_dk6Jr9plMXoIIiDqzJKeG0
          claim_id: c_M41vRiiAEPB8TEC1ce4VSf
          source_id: s_mDz6pGskraJPjBaPUcXsSU
          stance: supports
          locator: CBDB:235989
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_mDz6pGskraJPjBaPUcXsSU
            source_type: api_record
            title: 中国历代人物传记资料库：王憲彥（CBDB 235989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235989&o=json
            external_identifier: CBDB:235989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1AfhvL7fqkkQ3uodhr1tMs
        subject_person_id: p_RAJn192m2ZFeY7uaA2zS34
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲彥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4GxbA4FAxKL5sP5ADYTXtL
          claim_id: c_1AfhvL7fqkkQ3uodhr1tMs
          source_id: s_mDz6pGskraJPjBaPUcXsSU
          stance: supports
          locator: CBDB:235989
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dUiplHy9f_BQEb7lp9r2vH
        subject_person_id: p_fvtdZEELHENMPdwBvRdppk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RAJn192m2ZFeY7uaA2zS34
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_56wQYfKrtG0mhPsX1Zug6K
          claim_id: c_dUiplHy9f_BQEb7lp9r2vH
          source_id: s_A3CGG16qxZHTL23AwbIAc8
          stance: supports
          locator: CBDB：兄弟 王良臣（207791）之父／母 王維城
          quotation: null
          interpretation_note: 由兄弟关系推断：王憲彥 与 王良臣 为同胞（CBDB 记「兄」），王良臣 之父／母即 王憲彥 之父／母。
          source:
            id: s_A3CGG16qxZHTL23AwbIAc8
            source_type: api_record
            title: 中国历代人物传记资料库：王憲彥（CBDB 235989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235989&o=json
            external_identifier: CBDB:235989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fvtdZEELHENMPdwBvRdppk
        status: active
        display_name: 王維城
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_wpaWYzryRHDXgte9bvvm94
        subject_person_id: p_RAJn192m2ZFeY7uaA2zS34
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S8qdJKPMJPyO9-797TKR4n
          claim_id: c_wpaWYzryRHDXgte9bvvm94
          source_id: s_A3CGG16qxZHTL23AwbIAc8
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207791 王良臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_A3CGG16qxZHTL23AwbIAc8
            source_type: api_record
            title: 中国历代人物传记资料库：王憲彥（CBDB 235989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235989&o=json
            external_identifier: CBDB:235989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fVwHvivQzDYcoN8uZB1uwy
        status: active
        display_name: 王良臣
        merged_into_person_id: null
---

# 王憲彥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王憲彥，明人物。籍贯江陰。（中国历代人物传记资料库 CBDB 235989） | accepted |
| name.primary | 王憲彥 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fvtdZEELHENMPdwBvRdppk | 王維城 | accepted |
| other | p_fVwHvivQzDYcoN8uZB1uwy | 王良臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王憲彥（CBDB 235989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235989&o=json)
