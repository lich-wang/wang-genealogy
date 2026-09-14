---
schema: wang-person/v1
id: p_XAwBghomVSmXqhmJhUwUKw
status: active
merged_into: null
display_name: 王雲鴈
cbdb_id: 210680
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Tn9kd5QDDp7nBuzD27bWxw
        subject_person_id: p_XAwBghomVSmXqhmJhUwUKw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲鴈，明人物。隆慶五年進士，籍贯夏邑，曾任太醫院吏目。（中国历代人物传记资料库 CBDB 210680）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_v01Y3gb8a0CIwboYCuV3t5
          claim_id: c_Tn9kd5QDDp7nBuzD27bWxw
          source_id: s_UnBqq4G5yhc5ijK3CiFFum
          stance: supports
          locator: CBDB:210680
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_UnBqq4G5yhc5ijK3CiFFum
            source_type: api_record
            title: 中国历代人物传记资料库：王雲鴈（CBDB 210680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210680&o=json
            external_identifier: CBDB:210680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UqRqQCaNzZ4815MkhXCNm1
        subject_person_id: p_XAwBghomVSmXqhmJhUwUKw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲鴈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_RNpb5FC3A54m5KnnFT4Kuj
          claim_id: c_UqRqQCaNzZ4815MkhXCNm1
          source_id: s_UnBqq4G5yhc5ijK3CiFFum
          stance: supports
          locator: CBDB:210680
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yZIycm_Jm4H1O1ubghi-I-
        subject_person_id: p_uHx4oxAT9ppsKf6aRXRGJM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XAwBghomVSmXqhmJhUwUKw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8k5ifoYX4bxl30jErOQ1Pc
          claim_id: c_yZIycm_Jm4H1O1ubghi-I-
          source_id: s_gZIGaXqcR1ANW18fRLAC-n
          stance: supports
          locator: CBDB：兄弟 王雲鷺（205920）之父／母 王尚貞
          quotation: null
          interpretation_note: 由兄弟关系推断：王雲鴈 与 王雲鷺 为同胞（CBDB 记「弟」），王雲鷺 之父／母即 王雲鴈 之父／母。
          source:
            id: s_gZIGaXqcR1ANW18fRLAC-n
            source_type: api_record
            title: 中国历代人物传记资料库：王雲鴈（CBDB 210680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210680&o=json
            external_identifier: CBDB:210680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uHx4oxAT9ppsKf6aRXRGJM
        status: active
        display_name: 王尚貞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_TklzfagpJN4AUXqov3Gz7T
        subject_person_id: p_JTc1E7LgQAh6Uz9airZSVG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XAwBghomVSmXqhmJhUwUKw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rewETQdQ_CQWbr_FSYFeqo
          claim_id: c_TklzfagpJN4AUXqov3Gz7T
          source_id: s_gZIGaXqcR1ANW18fRLAC-n
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205920 王雲鷺）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gZIGaXqcR1ANW18fRLAC-n
            source_type: api_record
            title: 中国历代人物传记资料库：王雲鴈（CBDB 210680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210680&o=json
            external_identifier: CBDB:210680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JTc1E7LgQAh6Uz9airZSVG
        status: active
        display_name: 王雲鷺
        merged_into_person_id: null
---

# 王雲鴈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王雲鴈，明人物。隆慶五年進士，籍贯夏邑，曾任太醫院吏目。（中国历代人物传记资料库 CBDB 210680） | accepted |
| name.primary | 王雲鴈 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uHx4oxAT9ppsKf6aRXRGJM | 王尚貞 | accepted |
| other | p_JTc1E7LgQAh6Uz9airZSVG | 王雲鷺 | accepted |

## 外部来源

- [中国历代人物传记资料库：王雲鴈（CBDB 210680）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210680&o=json)
