---
schema: wang-person/v1
id: p_Fj2FWE18U3HUHwm4FacqQR
status: active
merged_into: null
display_name: 王養素
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_i1NQkUHSmtiVD6b6XrFXEm
        subject_person_id: p_Fj2FWE18U3HUHwm4FacqQR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王養素
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aDgHZ2dY1QL49MuFgrEX4e
          claim_id: c_i1NQkUHSmtiVD6b6XrFXEm
          source_id: s_5csWtXMBhpeaWFhUMQuHo9
          stance: supports
          locator: CBDB:287965
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（287965）
          source: &a1
            id: s_5csWtXMBhpeaWFhUMQuHo9
            source_type: api_record
            title: 中国历代人物传记资料库：王養素（CBDB 287965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287965&o=json
            external_identifier: CBDB:287965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.279Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wpx5gTUZRrtdCRpDR7N8gH
        subject_person_id: p_Fj2FWE18U3HUHwm4FacqQR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王養素，明人物。嘉靖八年進士，籍贯南充。（中国历代人物传记资料库 CBDB 287965）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IV7GbSuYWDAQ1yy5jmRTWO
          claim_id: c_wpx5gTUZRrtdCRpDR7N8gH
          source_id: s_5csWtXMBhpeaWFhUMQuHo9
          stance: supports
          locator: CBDB:287965
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CHVvS_yIbNGYkLbjRcLxOI
        subject_person_id: p_L25AA1dbPLFD1pLw6NiMqz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Fj2FWE18U3HUHwm4FacqQR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t7mC1BXGEZocyMQA5wEq3y
          claim_id: c_CHVvS_yIbNGYkLbjRcLxOI
          source_id: s_RU2dRo9SUK4OIkrKaFJWfX
          stance: supports
          locator: CBDB：兄弟 王養正（202427）之父／母 王璠
          quotation: null
          interpretation_note: 由兄弟关系推断：王養素 与 王養正 为同胞（CBDB 记「兄」），王養正 之父／母即 王養素 之父／母。
          source:
            id: s_RU2dRo9SUK4OIkrKaFJWfX
            source_type: api_record
            title: 中国历代人物传记资料库：王養素（CBDB 287965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287965&o=json
            external_identifier: CBDB:287965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_L25AA1dbPLFD1pLw6NiMqz
        status: active
        display_name: 王璠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_zfXykmUncToKH78buadJV3
        subject_person_id: p_91mfo9pBnGu6yNqPS5SH4s
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Fj2FWE18U3HUHwm4FacqQR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v2IeLAvJX-QZ9KnCTaj_lv
          claim_id: c_zfXykmUncToKH78buadJV3
          source_id: s_RU2dRo9SUK4OIkrKaFJWfX
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202427 王養正）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_RU2dRo9SUK4OIkrKaFJWfX
            source_type: api_record
            title: 中国历代人物传记资料库：王養素（CBDB 287965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287965&o=json
            external_identifier: CBDB:287965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_91mfo9pBnGu6yNqPS5SH4s
        status: active
        display_name: 王養正
        merged_into_person_id: null
    - claim:
        id: c_IeJeAfhKmpbP7RUC8ETsUL
        subject_person_id: p_Fj2FWE18U3HUHwm4FacqQR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_JFCMn29RFWw99L547unXBG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V5cIVqUsXTBhFoYbHwcH2F
          claim_id: c_IeJeAfhKmpbP7RUC8ETsUL
          source_id: s_RU2dRo9SUK4OIkrKaFJWfX
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203320 王養浩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_RU2dRo9SUK4OIkrKaFJWfX
            source_type: api_record
            title: 中国历代人物传记资料库：王養素（CBDB 287965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287965&o=json
            external_identifier: CBDB:287965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JFCMn29RFWw99L547unXBG
        status: active
        display_name: 王養浩
        merged_into_person_id: null
---

# 王養素

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王養素 | accepted |
| bio.summary | 王養素，明人物。嘉靖八年進士，籍贯南充。（中国历代人物传记资料库 CBDB 287965） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_L25AA1dbPLFD1pLw6NiMqz | 王璠 | accepted |
| other | p_91mfo9pBnGu6yNqPS5SH4s | 王養正 | accepted |
| other | p_JFCMn29RFWw99L547unXBG | 王養浩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王養素（CBDB 287965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287965&o=json)
