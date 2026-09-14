---
schema: wang-person/v1
id: p_1Tt4aVX8zyaJZH9P96tGYP
status: active
merged_into: null
display_name: 王肅
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sgLjke3bXqWGtDbGMSQYXZ
        subject_person_id: p_1Tt4aVX8zyaJZH9P96tGYP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BYP7wSSDCjsiKaWEUhbuwj
          claim_id: c_sgLjke3bXqWGtDbGMSQYXZ
          source_id: s_1VRS5jgPYtTMcnSicT8ZVn
          stance: supports
          locator: CBDB:239750
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（239750）
          source: &a1
            id: s_1VRS5jgPYtTMcnSicT8ZVn
            source_type: api_record
            title: 中国历代人物传记资料库：王肅（CBDB 239750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239750&o=json
            external_identifier: CBDB:239750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.900Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JSocwp872dp6am6D7AJxa8
        subject_person_id: p_1Tt4aVX8zyaJZH9P96tGYP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肅，明人物。正统十年進士，籍贯屯留。（中国历代人物传记资料库 CBDB 239750）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DOA2LUxmlsJn39_WkNzFYa
          claim_id: c_JSocwp872dp6am6D7AJxa8
          source_id: s_1VRS5jgPYtTMcnSicT8ZVn
          stance: supports
          locator: CBDB:239750
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UvwaQ1mpuTJurIgc2bprv4
        subject_person_id: p_nefeMLtgMPz4G3meRc7Z5Q
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1Tt4aVX8zyaJZH9P96tGYP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8dwhO-R44pwfNynBZXyx9A
          claim_id: c_UvwaQ1mpuTJurIgc2bprv4
          source_id: s_UjYtWOwNzq1A-4FBJhqJ0n
          stance: supports
          locator: CBDB：兄弟 王紹（208052）之父／母 王瓛
          quotation: null
          interpretation_note: 由兄弟关系推断：王肅 与 王紹 为同胞（CBDB 记「弟」），王紹 之父／母即 王肅 之父／母。
          source:
            id: s_UjYtWOwNzq1A-4FBJhqJ0n
            source_type: api_record
            title: 中国历代人物传记资料库：王肅（CBDB 239750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239750&o=json
            external_identifier: CBDB:239750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nefeMLtgMPz4G3meRc7Z5Q
        status: active
        display_name: 王瓛
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_3te8rluvkj-7OIRngahNPO
        subject_person_id: p_1Tt4aVX8zyaJZH9P96tGYP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kFVLZcH5HhGCPzncqbfvAU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Sx1wpk0x4cclWnAXnzWHkx
          claim_id: c_3te8rluvkj-7OIRngahNPO
          source_id: s_UjYtWOwNzq1A-4FBJhqJ0n
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 208052 王紹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_UjYtWOwNzq1A-4FBJhqJ0n
            source_type: api_record
            title: 中国历代人物传记资料库：王肅（CBDB 239750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239750&o=json
            external_identifier: CBDB:239750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kFVLZcH5HhGCPzncqbfvAU
        status: active
        display_name: 王紹
        merged_into_person_id: null
---

# 王肅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王肅 | accepted |
| bio.summary | 王肅，明人物。正统十年進士，籍贯屯留。（中国历代人物传记资料库 CBDB 239750） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nefeMLtgMPz4G3meRc7Z5Q | 王瓛 | accepted |
| other | p_kFVLZcH5HhGCPzncqbfvAU | 王紹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王肅（CBDB 239750）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239750&o=json)
