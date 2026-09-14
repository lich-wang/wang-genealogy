---
schema: wang-person/v1
id: p_UaHT2ezxNJi4QPQ7dPMc26
status: active
merged_into: null
display_name: 王儌
cbdb_id: 298823
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TssMy3aCkFLH6KmbGQ7BH2
        subject_person_id: p_UaHT2ezxNJi4QPQ7dPMc26
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儌，明人物。嘉靖十七年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 298823）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_HumllyNq1Xqc8nT6w3sbPK
          claim_id: c_TssMy3aCkFLH6KmbGQ7BH2
          source_id: s_5xFux2NSQJEUqac4HPLiaC
          stance: supports
          locator: CBDB:298823
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5xFux2NSQJEUqac4HPLiaC
            source_type: api_record
            title: 中国历代人物传记资料库：王儌（CBDB 298823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298823&o=json
            external_identifier: CBDB:298823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_BArT87XuL21QwaPfgY1cBt
        subject_person_id: p_UaHT2ezxNJi4QPQ7dPMc26
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_xAWp25k16dEQK4PHHXH2K3
          claim_id: c_BArT87XuL21QwaPfgY1cBt
          source_id: s_5xFux2NSQJEUqac4HPLiaC
          stance: supports
          locator: CBDB:298823
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_biu8NMbWQXhz8gkpnWmViV
        subject_person_id: p_1v36CPdP8tsG1X5DfhzMf4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UaHT2ezxNJi4QPQ7dPMc26
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-jJGzkz62bpzUKELbhy3PA
          claim_id: c_biu8NMbWQXhz8gkpnWmViV
          source_id: s_UNVPx8xJbrgWmEwlsvB_is
          stance: supports
          locator: CBDB：兄弟 王健（203037）之父／母 王瓚
          quotation: null
          interpretation_note: 由兄弟关系推断：王儌 与 王健 为同胞（CBDB 记「弟」），王健 之父／母即 王儌 之父／母。
          source:
            id: s_UNVPx8xJbrgWmEwlsvB_is
            source_type: api_record
            title: 中国历代人物传记资料库：王儌（CBDB 298823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298823&o=json
            external_identifier: CBDB:298823
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
        id: c_ixtGYZnj4pATlb5A3JqMYw
        subject_person_id: p_UaHT2ezxNJi4QPQ7dPMc26
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
        - id: cs_TrhL9r220Pbuhvj06dXsRJ
          claim_id: c_ixtGYZnj4pATlb5A3JqMYw
          source_id: s_UNVPx8xJbrgWmEwlsvB_is
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203037 王健）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_UNVPx8xJbrgWmEwlsvB_is
            source_type: api_record
            title: 中国历代人物传记资料库：王儌（CBDB 298823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298823&o=json
            external_identifier: CBDB:298823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sVZp7AN2wCm1EcSo9rSyTJ
        status: active
        display_name: 王健
        merged_into_person_id: null
---

# 王儌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王儌，明人物。嘉靖十七年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 298823） | accepted |
| name.primary | 王儌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1v36CPdP8tsG1X5DfhzMf4 | 王瓚 | accepted |
| other | p_sVZp7AN2wCm1EcSo9rSyTJ | 王健 | accepted |

## 外部来源

- [中国历代人物传记资料库：王儌（CBDB 298823）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298823&o=json)
