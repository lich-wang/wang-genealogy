---
schema: wang-person/v1
id: p_54oQ2MCjugcwbRktPkU239
status: active
merged_into: null
display_name: 王宗洛
cbdb_id: 305716
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3FuxN5ScgX5pDpVjZHza5T
        subject_person_id: p_54oQ2MCjugcwbRktPkU239
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗洛，明人物。嘉靖二十三年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 305716）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_MvbUzYsjQTaUVwsN7FgmCq
          claim_id: c_3FuxN5ScgX5pDpVjZHza5T
          source_id: s_baVtp2acBwcyNfjEQCactZ
          stance: supports
          locator: CBDB:305716
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_baVtp2acBwcyNfjEQCactZ
            source_type: api_record
            title: 中国历代人物传记资料库：王宗洛（CBDB 305716）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305716&o=json
            external_identifier: CBDB:305716
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dFhw3cm52y9yUdApcHEamr
        subject_person_id: p_54oQ2MCjugcwbRktPkU239
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗洛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_gC5HsstEAuBWpg1JRD6azL
          claim_id: c_dFhw3cm52y9yUdApcHEamr
          source_id: s_baVtp2acBwcyNfjEQCactZ
          stance: supports
          locator: CBDB:305716
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_SG_3aWY7hQl3-kRBFPQ14W
        subject_person_id: p_aZ1ZKEEFmDKA3BH7yDPbwn
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_54oQ2MCjugcwbRktPkU239
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZmzowV8tf5ArPM5O09bC_d
          claim_id: c_SG_3aWY7hQl3-kRBFPQ14W
          source_id: s_Ia3YMAQRfIhqdlDTUQxIO_
          stance: supports
          locator: CBDB：兄弟 王宗沐（35065）之父／母 王训
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗洛 与 王宗沐 为同胞（CBDB 记「兄」），王宗沐 之父／母即 王宗洛 之父／母。
          source:
            id: s_Ia3YMAQRfIhqdlDTUQxIO_
            source_type: api_record
            title: 中国历代人物传记资料库：王宗洛（CBDB 305716）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305716&o=json
            external_identifier: CBDB:305716
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aZ1ZKEEFmDKA3BH7yDPbwn
        status: active
        display_name: 王训
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_hKcPWnbbRvlfpWb3l-p-ts
        subject_person_id: p_54oQ2MCjugcwbRktPkU239
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_trUE1ub3cUR7dMLX7JC1NK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_itm1z8s55Qm4Kw8mQccF4X
          claim_id: c_hKcPWnbbRvlfpWb3l-p-ts
          source_id: s_Ia3YMAQRfIhqdlDTUQxIO_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 35065 王宗沐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Ia3YMAQRfIhqdlDTUQxIO_
            source_type: api_record
            title: 中国历代人物传记资料库：王宗洛（CBDB 305716）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305716&o=json
            external_identifier: CBDB:305716
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_trUE1ub3cUR7dMLX7JC1NK
        status: active
        display_name: 王宗沐
        merged_into_person_id: null
---

# 王宗洛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宗洛，明人物。嘉靖二十三年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 305716） | accepted |
| name.primary | 王宗洛 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aZ1ZKEEFmDKA3BH7yDPbwn | 王训 | accepted |
| other | p_trUE1ub3cUR7dMLX7JC1NK | 王宗沐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗洛（CBDB 305716）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305716&o=json)
