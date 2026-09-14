---
schema: wang-person/v1
id: p_Mw6VH2JMwmJE9PBiDhv4CK
status: active
merged_into: null
display_name: 王鎰
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_umF2Mxw9nK8tYu2cSCXNBG
        subject_person_id: p_Mw6VH2JMwmJE9PBiDhv4CK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mPfmG34BPPqG3oA86W7Yg3
          claim_id: c_umF2Mxw9nK8tYu2cSCXNBG
          source_id: s_UxHKsmb2KGjLQV1w7wjsMu
          stance: supports
          locator: CBDB:239114
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（239114）
          source: &a1
            id: s_UxHKsmb2KGjLQV1w7wjsMu
            source_type: api_record
            title: 中国历代人物传记资料库：王鎰（CBDB 239114）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239114&o=json
            external_identifier: CBDB:239114
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.891Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bKMc8Fojhvt8F1uYj6Fcmc
        subject_person_id: p_Mw6VH2JMwmJE9PBiDhv4CK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎰，明人物。正统十年進士，籍贯濟寧州。（中国历代人物传记资料库 CBDB 239114）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sTQQKASyma_0fLNDVPD_ih
          claim_id: c_bKMc8Fojhvt8F1uYj6Fcmc
          source_id: s_UxHKsmb2KGjLQV1w7wjsMu
          stance: supports
          locator: CBDB:239114
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ces9Z-uNMg7f1G_YFy8MES
        subject_person_id: p_b2MWJoRPw8eQD6tKTBzWN2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Mw6VH2JMwmJE9PBiDhv4CK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hhyMrDEVHKqsn6f0BbFBY1
          claim_id: c_ces9Z-uNMg7f1G_YFy8MES
          source_id: s_1dQjztfVc2_5CWP0WopvTb
          stance: supports
          locator: CBDB：兄弟 王鎮（208004）之父／母 王信之
          quotation: null
          interpretation_note: 由兄弟关系推断：王鎰 与 王鎮 为同胞（CBDB 记「弟」），王鎮 之父／母即 王鎰 之父／母。
          source:
            id: s_1dQjztfVc2_5CWP0WopvTb
            source_type: api_record
            title: 中国历代人物传记资料库：王鎰（CBDB 239114）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239114&o=json
            external_identifier: CBDB:239114
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_b2MWJoRPw8eQD6tKTBzWN2
        status: active
        display_name: 王信之
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_-foHiHukscr8KGJUn8slYB
        subject_person_id: p_EKnyL5yNzB3UQXTrkLtsAg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Mw6VH2JMwmJE9PBiDhv4CK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_huVAVIWLSi97TNM1E9Crqx
          claim_id: c_-foHiHukscr8KGJUn8slYB
          source_id: s_1dQjztfVc2_5CWP0WopvTb
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 208004 王鎮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1dQjztfVc2_5CWP0WopvTb
            source_type: api_record
            title: 中国历代人物传记资料库：王鎰（CBDB 239114）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239114&o=json
            external_identifier: CBDB:239114
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EKnyL5yNzB3UQXTrkLtsAg
        status: active
        display_name: 王鎮
        merged_into_person_id: null
---

# 王鎰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎰 | accepted |
| bio.summary | 王鎰，明人物。正统十年進士，籍贯濟寧州。（中国历代人物传记资料库 CBDB 239114） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_b2MWJoRPw8eQD6tKTBzWN2 | 王信之 | accepted |
| other | p_EKnyL5yNzB3UQXTrkLtsAg | 王鎮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鎰（CBDB 239114）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239114&o=json)
