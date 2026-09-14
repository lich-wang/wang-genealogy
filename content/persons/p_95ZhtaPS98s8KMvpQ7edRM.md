---
schema: wang-person/v1
id: p_95ZhtaPS98s8KMvpQ7edRM
status: active
merged_into: null
display_name: 王前
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_n8xeWqB8PNryxCnNevvM8g
        subject_person_id: p_95ZhtaPS98s8KMvpQ7edRM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王前
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t6Y8jE8bXcWKFbA7APmgM3
          claim_id: c_n8xeWqB8PNryxCnNevvM8g
          source_id: s_1szkAJsT3a67FBB1qN7HDy
          stance: supports
          locator: CBDB:279349
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279349）
          source: &a1
            id: s_1szkAJsT3a67FBB1qN7HDy
            source_type: api_record
            title: 中国历代人物传记资料库：王前（CBDB 279349）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279349&o=json
            external_identifier: CBDB:279349
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.981Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9Rck5BvqCULcDZTz5LqW2t
        subject_person_id: p_95ZhtaPS98s8KMvpQ7edRM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王前，明人物。正德六年進士，籍贯宣城。（中国历代人物传记资料库 CBDB 279349）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_06JsMOkkbN72S9icWk_vRr
          claim_id: c_9Rck5BvqCULcDZTz5LqW2t
          source_id: s_1szkAJsT3a67FBB1qN7HDy
          stance: supports
          locator: CBDB:279349
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MvF1tBpBHHKTfO01SxWbuL
        subject_person_id: p_QzvV4sG1QiUMXjGNxx2is5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_95ZhtaPS98s8KMvpQ7edRM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uSGZKavvif4QL8It87EAnt
          claim_id: c_MvF1tBpBHHKTfO01SxWbuL
          source_id: s_t54eAxPrGDGOsmB8OFUxeR
          stance: supports
          locator: CBDB：兄弟 王遵（201860）之父／母 王度
          quotation: null
          interpretation_note: 由兄弟关系推断：王前 与 王遵 为同胞（CBDB 记「兄」），王遵 之父／母即 王前 之父／母。
          source:
            id: s_t54eAxPrGDGOsmB8OFUxeR
            source_type: api_record
            title: 中国历代人物传记资料库：王前（CBDB 279349）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279349&o=json
            external_identifier: CBDB:279349
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QzvV4sG1QiUMXjGNxx2is5
        status: active
        display_name: 王度
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ngLqcARMxtBWMBJ2uCLnyZ
        subject_person_id: p_95ZhtaPS98s8KMvpQ7edRM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kS75cqd3Wh2NjJNrFJL2j4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8tYEEaGN8ap7Mn4wraU5yp
          claim_id: c_ngLqcARMxtBWMBJ2uCLnyZ
          source_id: s_t54eAxPrGDGOsmB8OFUxeR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201860 王遵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_t54eAxPrGDGOsmB8OFUxeR
            source_type: api_record
            title: 中国历代人物传记资料库：王前（CBDB 279349）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279349&o=json
            external_identifier: CBDB:279349
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kS75cqd3Wh2NjJNrFJL2j4
        status: active
        display_name: 王遵
        merged_into_person_id: null
---

# 王前

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王前 | accepted |
| bio.summary | 王前，明人物。正德六年進士，籍贯宣城。（中国历代人物传记资料库 CBDB 279349） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QzvV4sG1QiUMXjGNxx2is5 | 王度 | accepted |
| other | p_kS75cqd3Wh2NjJNrFJL2j4 | 王遵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王前（CBDB 279349）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279349&o=json)
