---
schema: wang-person/v1
id: p_KMpzZ5dpsqaEMsN2E6PP3T
status: active
merged_into: null
display_name: 王家慶
cbdb_id: 332967
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DHmFT5AWvAGRyNTCEzYtPz
        subject_person_id: p_KMpzZ5dpsqaEMsN2E6PP3T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家慶，明人物。嘉靖四十四年進士，籍贯南陽衛。（中国历代人物传记资料库 CBDB 332967）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Zn9XPTgl6nB4AnuFKDZDA1
          claim_id: c_DHmFT5AWvAGRyNTCEzYtPz
          source_id: s_ai99ddnUunnEgZsi9Y5RD4
          stance: supports
          locator: CBDB:332967
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ai99ddnUunnEgZsi9Y5RD4
            source_type: api_record
            title: 中国历代人物传记资料库：王家慶（CBDB 332967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332967&o=json
            external_identifier: CBDB:332967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_knTR5PT4b6rRByrBMh1RMm
        subject_person_id: p_KMpzZ5dpsqaEMsN2E6PP3T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_kE39PS1e3barqvqYU3Wke3
          claim_id: c_knTR5PT4b6rRByrBMh1RMm
          source_id: s_ai99ddnUunnEgZsi9Y5RD4
          stance: supports
          locator: CBDB:332967
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-McomNWSfJwuqIL5Fj63CN
        subject_person_id: p_p6a6PegDLKhh6e58pdYza1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KMpzZ5dpsqaEMsN2E6PP3T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fdYW_Jn2T2ogKdu0pUIuak
          claim_id: c_-McomNWSfJwuqIL5Fj63CN
          source_id: s_cFh4swKiC7hTYCZyGZoO0R
          stance: supports
          locator: CBDB：兄弟 王家卿（205423）之父／母 王稷
          quotation: null
          interpretation_note: 由兄弟关系推断：王家慶 与 王家卿 为同胞（CBDB 记「兄」），王家卿 之父／母即 王家慶 之父／母。
          source:
            id: s_cFh4swKiC7hTYCZyGZoO0R
            source_type: api_record
            title: 中国历代人物传记资料库：王家慶（CBDB 332967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332967&o=json
            external_identifier: CBDB:332967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_p6a6PegDLKhh6e58pdYza1
        status: active
        display_name: 王稷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_qewVOZVAyxnsov4C6vVJcy
        subject_person_id: p_KMpzZ5dpsqaEMsN2E6PP3T
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wfvFAbMeeGg2JCRsQFqRMn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ed6UYTALdhXX8Ck1ZHCriS
          claim_id: c_qewVOZVAyxnsov4C6vVJcy
          source_id: s_cFh4swKiC7hTYCZyGZoO0R
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205423 王家卿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cFh4swKiC7hTYCZyGZoO0R
            source_type: api_record
            title: 中国历代人物传记资料库：王家慶（CBDB 332967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332967&o=json
            external_identifier: CBDB:332967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wfvFAbMeeGg2JCRsQFqRMn
        status: active
        display_name: 王家卿
        merged_into_person_id: null
---

# 王家慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王家慶，明人物。嘉靖四十四年進士，籍贯南陽衛。（中国历代人物传记资料库 CBDB 332967） | accepted |
| name.primary | 王家慶 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_p6a6PegDLKhh6e58pdYza1 | 王稷 | accepted |
| other | p_wfvFAbMeeGg2JCRsQFqRMn | 王家卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王家慶（CBDB 332967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332967&o=json)
