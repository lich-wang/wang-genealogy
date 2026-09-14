---
schema: wang-person/v1
id: p_Zio9CvRTuTX6rm19G8kKZP
status: active
merged_into: null
display_name: 王佐
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SbHNadXzjbcyEC7j73HudT
        subject_person_id: p_Zio9CvRTuTX6rm19G8kKZP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Em6NE29v3Hp6qz9TyPEXEo
          claim_id: c_SbHNadXzjbcyEC7j73HudT
          source_id: s_x48LYsk2hHJMKAJmVkLsqh
          stance: supports
          locator: CBDB:298827
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（298827）
          source: &a1
            id: s_x48LYsk2hHJMKAJmVkLsqh
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 298827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298827&o=json
            external_identifier: CBDB:298827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.598Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pb1us3jA8GBzMGvCrXxYYB
        subject_person_id: p_Zio9CvRTuTX6rm19G8kKZP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐，明人物。嘉靖十七年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 298827）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ogDFhH9K9HMKSR5Pgx2Ux9
          claim_id: c_pb1us3jA8GBzMGvCrXxYYB
          source_id: s_x48LYsk2hHJMKAJmVkLsqh
          stance: supports
          locator: CBDB:298827
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_eZDAQ3N59UvdD56o1ir7I_
        subject_person_id: p_1v36CPdP8tsG1X5DfhzMf4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Zio9CvRTuTX6rm19G8kKZP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cChDuHpcIfT5ww81W6rM5W
          claim_id: c_eZDAQ3N59UvdD56o1ir7I_
          source_id: s_0Ni4g4V0mC23vwYNCiU5l7
          stance: supports
          locator: CBDB：兄弟 王健（203037）之父／母 王瓚
          quotation: null
          interpretation_note: 由兄弟关系推断：王佐 与 王健 为同胞（CBDB 记「兄」），王健 之父／母即 王佐 之父／母。
          source:
            id: s_0Ni4g4V0mC23vwYNCiU5l7
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 298827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298827&o=json
            external_identifier: CBDB:298827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1v36CPdP8tsG1X5DfhzMf4
        status: active
        display_name: 王瓚
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_S8DL4VfWCN9OCIysRHyi4Y
        subject_person_id: p_Zio9CvRTuTX6rm19G8kKZP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sVZp7AN2wCm1EcSo9rSyTJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1lPs_3I_GFDPm56hdGYy5K
          claim_id: c_S8DL4VfWCN9OCIysRHyi4Y
          source_id: s_0Ni4g4V0mC23vwYNCiU5l7
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203037 王健）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0Ni4g4V0mC23vwYNCiU5l7
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 298827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298827&o=json
            external_identifier: CBDB:298827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sVZp7AN2wCm1EcSo9rSyTJ
        status: active
        display_name: 王健
        merged_into_person_id: null
---

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐 | accepted |
| bio.summary | 王佐，明人物。嘉靖十七年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 298827） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1v36CPdP8tsG1X5DfhzMf4 | 王瓚 | accepted |
| other | p_sVZp7AN2wCm1EcSo9rSyTJ | 王健 | accepted |

## 外部来源

- [中国历代人物传记资料库：王佐（CBDB 298827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298827&o=json)
