---
schema: wang-person/v1
id: p_Z5Q5wZSLUAE4cbFJYD7coD
status: active
merged_into: null
display_name: 王時梧
cbdb_id: 308748
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fv2ZabQDVp3h4urpUEJawF
        subject_person_id: p_Z5Q5wZSLUAE4cbFJYD7coD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時梧，明人物。嘉靖二十六年進士，籍贯安福。（中国历代人物传记资料库 CBDB 308748）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_6ybeI1cDPrylm8YqvlOkxs
          claim_id: c_fv2ZabQDVp3h4urpUEJawF
          source_id: s_6Q6MQUZmNqVgekUSw1m6Dv
          stance: supports
          locator: CBDB:308748
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_6Q6MQUZmNqVgekUSw1m6Dv
            source_type: api_record
            title: 中国历代人物传记资料库：王時梧（CBDB 308748）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308748&o=json
            external_identifier: CBDB:308748
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Wd7b9FUWDoWejDVc8e9h8w
        subject_person_id: p_Z5Q5wZSLUAE4cbFJYD7coD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時梧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_D41btHQE8E3BA717Wc42DJ
          claim_id: c_Wd7b9FUWDoWejDVc8e9h8w
          source_id: s_6Q6MQUZmNqVgekUSw1m6Dv
          stance: supports
          locator: CBDB:308748
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DbwzSvr_MVVI1Ur6-aU8F9
        subject_person_id: p_irooaMCyG8JBBsSKCCr16W
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z5Q5wZSLUAE4cbFJYD7coD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mZ21r2GPSWjfmrSdFd0S8L
          claim_id: c_DbwzSvr_MVVI1Ur6-aU8F9
          source_id: s_GkhXkHeHpHmWKD2Zep6qJj
          stance: supports
          locator: CBDB：兄弟 王時槐（126653）之父／母 王一善
          quotation: null
          interpretation_note: 由兄弟关系推断：王時梧 与 王時槐 为同胞（CBDB 记「兄」），王時槐 之父／母即 王時梧 之父／母。
          source:
            id: s_GkhXkHeHpHmWKD2Zep6qJj
            source_type: api_record
            title: 中国历代人物传记资料库：王時梧（CBDB 308748）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308748&o=json
            external_identifier: CBDB:308748
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_irooaMCyG8JBBsSKCCr16W
        status: active
        display_name: 王一善
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_BMs2DRsaDHZsaoNKo5z4zo
        subject_person_id: p_LPzYRgFrvHZtoR8m7zKq9v
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Z5Q5wZSLUAE4cbFJYD7coD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hWOEk-x3aiSTQZpcpgrcBR
          claim_id: c_BMs2DRsaDHZsaoNKo5z4zo
          source_id: s_GkhXkHeHpHmWKD2Zep6qJj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126653 王時槐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GkhXkHeHpHmWKD2Zep6qJj
            source_type: api_record
            title: 中国历代人物传记资料库：王時梧（CBDB 308748）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308748&o=json
            external_identifier: CBDB:308748
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LPzYRgFrvHZtoR8m7zKq9v
        status: active
        display_name: 王時槐
        merged_into_person_id: null
---

# 王時梧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王時梧，明人物。嘉靖二十六年進士，籍贯安福。（中国历代人物传记资料库 CBDB 308748） | accepted |
| name.primary | 王時梧 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_irooaMCyG8JBBsSKCCr16W | 王一善 | accepted |
| other | p_LPzYRgFrvHZtoR8m7zKq9v | 王時槐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王時梧（CBDB 308748）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308748&o=json)
