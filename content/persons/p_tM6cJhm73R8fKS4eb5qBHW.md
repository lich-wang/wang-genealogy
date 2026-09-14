---
schema: wang-person/v1
id: p_tM6cJhm73R8fKS4eb5qBHW
status: active
merged_into: null
display_name: 王箋
cbdb_id: 328172
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dgXzAxDgeQ8cKEPCSj5xHR
        subject_person_id: p_tM6cJhm73R8fKS4eb5qBHW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王箋，明人物。嘉靖四十一年進士，籍贯夷陵州。（中国历代人物传记资料库 CBDB 328172）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_o3KMZgU1kp3X34TZAi7w69
          claim_id: c_dgXzAxDgeQ8cKEPCSj5xHR
          source_id: s_kP3YaQ34x7aSeDd8CxFoT3
          stance: supports
          locator: CBDB:328172
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_kP3YaQ34x7aSeDd8CxFoT3
            source_type: api_record
            title: 中国历代人物传记资料库：王箋（CBDB 328172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328172&o=json
            external_identifier: CBDB:328172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nzVT72J4611Tyw6yf4Y79p
        subject_person_id: p_tM6cJhm73R8fKS4eb5qBHW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王箋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_51xke8wsB6j8ubT2t4EmVR
          claim_id: c_nzVT72J4611Tyw6yf4Y79p
          source_id: s_kP3YaQ34x7aSeDd8CxFoT3
          stance: supports
          locator: CBDB:328172
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vY545A-s7EmPo7JoHsQo03
        subject_person_id: p_D9N98oB92wT9B2XW2TfNE4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tM6cJhm73R8fKS4eb5qBHW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ytSitfee4_dPJGvEbTg2qR
          claim_id: c_vY545A-s7EmPo7JoHsQo03
          source_id: s_1CoQ_LZDOFmKZU7Y2_JHHi
          stance: supports
          locator: CBDB：兄弟 王篆（205090）之父／母 王良策
          quotation: null
          interpretation_note: 由兄弟关系推断：王箋 与 王篆 为同胞（CBDB 记「兄」），王篆 之父／母即 王箋 之父／母。
          source:
            id: s_1CoQ_LZDOFmKZU7Y2_JHHi
            source_type: api_record
            title: 中国历代人物传记资料库：王箋（CBDB 328172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328172&o=json
            external_identifier: CBDB:328172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_D9N98oB92wT9B2XW2TfNE4
        status: active
        display_name: 王良策
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_SKzWnVeVb0GBbTSQPyw6HQ
        subject_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tM6cJhm73R8fKS4eb5qBHW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ghuu9g1rM74TcNTS0cARyk
          claim_id: c_SKzWnVeVb0GBbTSQPyw6HQ
          source_id: s_1CoQ_LZDOFmKZU7Y2_JHHi
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205090 王篆）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1CoQ_LZDOFmKZU7Y2_JHHi
            source_type: api_record
            title: 中国历代人物传记资料库：王箋（CBDB 328172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328172&o=json
            external_identifier: CBDB:328172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oXNXhcmP3pgs4EeZNT7tYq
        status: active
        display_name: 王篆
        merged_into_person_id: null
---

# 王箋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王箋，明人物。嘉靖四十一年進士，籍贯夷陵州。（中国历代人物传记资料库 CBDB 328172） | accepted |
| name.primary | 王箋 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_D9N98oB92wT9B2XW2TfNE4 | 王良策 | accepted |
| other | p_oXNXhcmP3pgs4EeZNT7tYq | 王篆 | accepted |

## 外部来源

- [中国历代人物传记资料库：王箋（CBDB 328172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328172&o=json)
