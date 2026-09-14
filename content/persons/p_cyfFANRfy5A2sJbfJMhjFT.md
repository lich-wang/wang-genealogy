---
schema: wang-person/v1
id: p_cyfFANRfy5A2sJbfJMhjFT
status: active
merged_into: null
display_name: 王儼
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C1nNbRQTZS4iiHB6WKmi75
        subject_person_id: p_cyfFANRfy5A2sJbfJMhjFT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cokQT76iVnNgnpvYFuXpfe
          claim_id: c_C1nNbRQTZS4iiHB6WKmi75
          source_id: s_XcRwspedSFJvcF2DdR5nX5
          stance: supports
          locator: CBDB:241972
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241972）
          source: &a1
            id: s_XcRwspedSFJvcF2DdR5nX5
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 241972）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241972&o=json
            external_identifier: CBDB:241972
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.965Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HVhapN7m9pPMi9qhBNVEqC
        subject_person_id: p_cyfFANRfy5A2sJbfJMhjFT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儼，明人物。成化二年進士，籍贯長興。（中国历代人物传记资料库 CBDB 241972）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ds9IawsjiDNrYj1On7GJIC
          claim_id: c_HVhapN7m9pPMi9qhBNVEqC
          source_id: s_XcRwspedSFJvcF2DdR5nX5
          stance: supports
          locator: CBDB:241972
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uJqlgkA2yl2qDMecEI1Imp
        subject_person_id: p_tJVHjGjKc27ATYVAuaH8nP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cyfFANRfy5A2sJbfJMhjFT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nYUYGInZZ0blyFAS-QxeYI
          claim_id: c_uJqlgkA2yl2qDMecEI1Imp
          source_id: s_bhAOrjI4Gkd-jKDEftA_Uh
          stance: supports
          locator: CBDB：兄弟 王俁（199224）之父／母 王瑄
          quotation: null
          interpretation_note: 由兄弟关系推断：王儼 与 王俁 为同胞（CBDB 记「弟」），王俁 之父／母即 王儼 之父／母。
          source:
            id: s_bhAOrjI4Gkd-jKDEftA_Uh
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 241972）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241972&o=json
            external_identifier: CBDB:241972
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tJVHjGjKc27ATYVAuaH8nP
        status: active
        display_name: 王瑄
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_OMTMF6gFwQNPKEZTz4ztNi
        subject_person_id: p_cyfFANRfy5A2sJbfJMhjFT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wzpgCTfy9H3iqMXKhqaPfp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HNHuAR1okNjpSrZShv9NB7
          claim_id: c_OMTMF6gFwQNPKEZTz4ztNi
          source_id: s_bhAOrjI4Gkd-jKDEftA_Uh
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199224 王俁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bhAOrjI4Gkd-jKDEftA_Uh
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 241972）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241972&o=json
            external_identifier: CBDB:241972
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wzpgCTfy9H3iqMXKhqaPfp
        status: active
        display_name: 王俁
        merged_into_person_id: null
---

# 王儼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儼 | accepted |
| bio.summary | 王儼，明人物。成化二年進士，籍贯長興。（中国历代人物传记资料库 CBDB 241972） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tJVHjGjKc27ATYVAuaH8nP | 王瑄 | accepted |
| other | p_wzpgCTfy9H3iqMXKhqaPfp | 王俁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王儼（CBDB 241972）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241972&o=json)
