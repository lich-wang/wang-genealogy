---
schema: wang-person/v1
id: p_Y4944Wa9Bi6a2vE3jxbzV9
status: active
merged_into: null
display_name: 王憲羲
cbdb_id: 235977
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cZDDfzTjt9ACN8PMvvL3J6
        subject_person_id: p_Y4944Wa9Bi6a2vE3jxbzV9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲羲，明人物。籍贯江陰。（中国历代人物传记资料库 CBDB 235977）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_nyo3rOcDill-fyHMkl_2Ay
          claim_id: c_cZDDfzTjt9ACN8PMvvL3J6
          source_id: s_LrNCXTooByU4R7T7sLGwTi
          stance: supports
          locator: CBDB:235977
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_LrNCXTooByU4R7T7sLGwTi
            source_type: api_record
            title: 中国历代人物传记资料库：王憲羲（CBDB 235977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235977&o=json
            external_identifier: CBDB:235977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4Rie9QWcAb3Mmy58KU1oFT
        subject_person_id: p_Y4944Wa9Bi6a2vE3jxbzV9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲羲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ibeRERgP1ucMa244DHjkjY
          claim_id: c_4Rie9QWcAb3Mmy58KU1oFT
          source_id: s_LrNCXTooByU4R7T7sLGwTi
          stance: supports
          locator: CBDB:235977
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_upzcq0jnrw8YKHFl905VJX
        subject_person_id: p_fvtdZEELHENMPdwBvRdppk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Y4944Wa9Bi6a2vE3jxbzV9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wBAGNFljsCFe5f2vTM85V2
          claim_id: c_upzcq0jnrw8YKHFl905VJX
          source_id: s_qsij7J78QSGYF_6Tyak5hv
          stance: supports
          locator: CBDB：兄弟 王良臣（207791）之父／母 王維城
          quotation: null
          interpretation_note: 由兄弟关系推断：王憲羲 与 王良臣 为同胞（CBDB 记「兄」），王良臣 之父／母即 王憲羲 之父／母。
          source:
            id: s_qsij7J78QSGYF_6Tyak5hv
            source_type: api_record
            title: 中国历代人物传记资料库：王憲羲（CBDB 235977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235977&o=json
            external_identifier: CBDB:235977
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
        id: c_L3Oe0RCJv0Ac86NND9toql
        subject_person_id: p_Y4944Wa9Bi6a2vE3jxbzV9
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
        - id: cs_ElqbhvQt_yeQoY9zKoBYhL
          claim_id: c_L3Oe0RCJv0Ac86NND9toql
          source_id: s_qsij7J78QSGYF_6Tyak5hv
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207791 王良臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qsij7J78QSGYF_6Tyak5hv
            source_type: api_record
            title: 中国历代人物传记资料库：王憲羲（CBDB 235977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235977&o=json
            external_identifier: CBDB:235977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fVwHvivQzDYcoN8uZB1uwy
        status: active
        display_name: 王良臣
        merged_into_person_id: null
---

# 王憲羲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王憲羲，明人物。籍贯江陰。（中国历代人物传记资料库 CBDB 235977） | accepted |
| name.primary | 王憲羲 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fvtdZEELHENMPdwBvRdppk | 王維城 | accepted |
| other | p_fVwHvivQzDYcoN8uZB1uwy | 王良臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王憲羲（CBDB 235977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235977&o=json)
