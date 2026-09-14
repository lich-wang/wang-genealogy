---
schema: wang-person/v1
id: p_Qz2nGxEyAmswGVBFabC8kg
status: active
merged_into: null
display_name: 王官
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FBFBMMyx72bXP9UeQpKxWN
        subject_person_id: p_Qz2nGxEyAmswGVBFabC8kg
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
        - id: cs_APUbm3G2J834o8r3KcBAxG
          claim_id: c_FBFBMMyx72bXP9UeQpKxWN
          source_id: s_BqE34KNXyqv37futUuN7Ws
          stance: supports
          locator: CBDB:261744
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（261744）
          source: &a1
            id: s_BqE34KNXyqv37futUuN7Ws
            source_type: api_record
            title: 中国历代人物传记资料库：王官（CBDB 261744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261744&o=json
            external_identifier: CBDB:261744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.556Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JuH1aXyJ3W92np1EtpWdSP
        subject_person_id: p_Qz2nGxEyAmswGVBFabC8kg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王官，明人物。弘治三年進士，籍贯郟縣。（中国历代人物传记资料库 CBDB 261744）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EqXw4gBJDJkQ0bzE-8SZDG
          claim_id: c_JuH1aXyJ3W92np1EtpWdSP
          source_id: s_BqE34KNXyqv37futUuN7Ws
          stance: supports
          locator: CBDB:261744
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_B4fdvChK7xCiDYiLUi5ec3
        subject_person_id: p_jCK8R3MaCsiE6Le8VKcP4N
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Qz2nGxEyAmswGVBFabC8kg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uqvT2P2uKfitF5UMX0HR4Z
          claim_id: c_B4fdvChK7xCiDYiLUi5ec3
          source_id: s_YSql0YjCNpQh6SQOi1QZ_G
          stance: supports
          locator: CBDB：兄弟 王宸（126630）之父／母 王霖
          quotation: null
          interpretation_note: 由兄弟关系推断：王官 与 王宸 为同胞（CBDB 记「兄」），王宸 之父／母即 王官 之父／母。
          source:
            id: s_YSql0YjCNpQh6SQOi1QZ_G
            source_type: api_record
            title: 中国历代人物传记资料库：王官（CBDB 261744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261744&o=json
            external_identifier: CBDB:261744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jCK8R3MaCsiE6Le8VKcP4N
        status: active
        display_name: 王霖
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_kqKNZId7aAAdZ1y57uSqOW
        subject_person_id: p_AiG6QrCQGQD3MPcSgAchU7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Qz2nGxEyAmswGVBFabC8kg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q1RajOEwZwUCitrK1_8OZG
          claim_id: c_kqKNZId7aAAdZ1y57uSqOW
          source_id: s_YSql0YjCNpQh6SQOi1QZ_G
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126630 王宸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YSql0YjCNpQh6SQOi1QZ_G
            source_type: api_record
            title: 中国历代人物传记资料库：王官（CBDB 261744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261744&o=json
            external_identifier: CBDB:261744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AiG6QrCQGQD3MPcSgAchU7
        status: active
        display_name: 王宸
        merged_into_person_id: null
---

# 王官

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王官 | accepted |
| bio.summary | 王官，明人物。弘治三年進士，籍贯郟縣。（中国历代人物传记资料库 CBDB 261744） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jCK8R3MaCsiE6Le8VKcP4N | 王霖 | accepted |
| other | p_AiG6QrCQGQD3MPcSgAchU7 | 王宸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王官（CBDB 261744）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261744&o=json)
