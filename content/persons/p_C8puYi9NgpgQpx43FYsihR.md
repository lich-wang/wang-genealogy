---
schema: wang-person/v1
id: p_C8puYi9NgpgQpx43FYsihR
status: active
merged_into: null
display_name: 王官
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KJmRF9k34Z27W2AipLDoB9
        subject_person_id: p_C8puYi9NgpgQpx43FYsihR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王官
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_X5ddckiLzCHFk4MMh7q3fk
          claim_id: c_KJmRF9k34Z27W2AipLDoB9
          source_id: s_PktCpBqbWKvphsRS4rUfsR
          stance: supports
          locator: CBDB:295394
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（295394）
          source: &a1
            id: s_PktCpBqbWKvphsRS4rUfsR
            source_type: api_record
            title: 中国历代人物传记资料库：王官（CBDB 295394）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295394&o=json
            external_identifier: CBDB:295394
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.495Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KJogjo3ftaVumZzdwKdzpn
        subject_person_id: p_C8puYi9NgpgQpx43FYsihR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王官，明人物。嘉靖十四年進士，籍贯任邱。（中国历代人物传记资料库 CBDB 295394）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AJ3iJbAX1NHGU31mhEd0L5
          claim_id: c_KJogjo3ftaVumZzdwKdzpn
          source_id: s_PktCpBqbWKvphsRS4rUfsR
          stance: supports
          locator: CBDB:295394
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Dqb2WMVxkEds8xnHgI4Sb1
        subject_person_id: p_FqMa4M2DAduvq9gtDKyST2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C8puYi9NgpgQpx43FYsihR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rhQ1118quW0YyJqUNFv17D
          claim_id: c_Dqb2WMVxkEds8xnHgI4Sb1
          source_id: s_JlPS4Na6drcMYWI13Y8xEX
          stance: supports
          locator: CBDB：兄弟 王崇（202833）之父／母 王釗
          quotation: null
          interpretation_note: 由兄弟关系推断：王官 与 王崇 为同胞（CBDB 记「弟」），王崇 之父／母即 王官 之父／母。
          source:
            id: s_JlPS4Na6drcMYWI13Y8xEX
            source_type: api_record
            title: 中国历代人物传记资料库：王官（CBDB 295394）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295394&o=json
            external_identifier: CBDB:295394
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FqMa4M2DAduvq9gtDKyST2
        status: active
        display_name: 王釗
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_CC7gU-j-3u2kgK9AeHkFXs
        subject_person_id: p_2BUKVfjLttuBq79dFrNbRz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_C8puYi9NgpgQpx43FYsihR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OSQHm-sfpj99cuU0QfbVkj
          claim_id: c_CC7gU-j-3u2kgK9AeHkFXs
          source_id: s_JlPS4Na6drcMYWI13Y8xEX
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202833 王崇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JlPS4Na6drcMYWI13Y8xEX
            source_type: api_record
            title: 中国历代人物传记资料库：王官（CBDB 295394）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295394&o=json
            external_identifier: CBDB:295394
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2BUKVfjLttuBq79dFrNbRz
        status: active
        display_name: 王崇
        merged_into_person_id: null
---

# 王官

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王官 | accepted |
| bio.summary | 王官，明人物。嘉靖十四年進士，籍贯任邱。（中国历代人物传记资料库 CBDB 295394） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FqMa4M2DAduvq9gtDKyST2 | 王釗 | accepted |
| other | p_2BUKVfjLttuBq79dFrNbRz | 王崇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王官（CBDB 295394）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295394&o=json)
