---
schema: wang-person/v1
id: p_FYPXxKmUoBGXJ2ArmCq8cc
status: active
merged_into: null
display_name: 王誦詩
cbdb_id: 333206
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MeKr52Pr8eoKfMZexV4aQz
        subject_person_id: p_FYPXxKmUoBGXJ2ArmCq8cc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誦詩，明人物。嘉靖四十四年進士，籍贯華州。（中国历代人物传记资料库 CBDB 333206）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_G1eYDaP49lvfsv1FYjM9fX
          claim_id: c_MeKr52Pr8eoKfMZexV4aQz
          source_id: s_Nb3JuDwdaRADh729E1tqyu
          stance: supports
          locator: CBDB:333206
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Nb3JuDwdaRADh729E1tqyu
            source_type: api_record
            title: 中国历代人物传记资料库：王誦詩（CBDB 333206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333206&o=json
            external_identifier: CBDB:333206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tbbwPV8R6Swsj3G5PgcWPD
        subject_person_id: p_FYPXxKmUoBGXJ2ArmCq8cc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誦詩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Bj6M2ZstCZ7S5CE1YCEuRb
          claim_id: c_tbbwPV8R6Swsj3G5PgcWPD
          source_id: s_Nb3JuDwdaRADh729E1tqyu
          stance: supports
          locator: CBDB:333206
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5fNfevoIgrB5i8rf98gX5-
        subject_person_id: p_XvLvgZx3E1ajPvY553eFr9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FYPXxKmUoBGXJ2ArmCq8cc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_itPShsRnyoinpP4Qj_jtjK
          claim_id: c_5fNfevoIgrB5i8rf98gX5-
          source_id: s_ew4ZW_80cvgBnQy9UDJZek
          stance: supports
          locator: CBDB：兄弟 王庭詩（205441）之父／母 王吉兆
          quotation: null
          interpretation_note: 由兄弟关系推断：王誦詩 与 王庭詩 为同胞（CBDB 记「兄」），王庭詩 之父／母即 王誦詩 之父／母。
          source:
            id: s_ew4ZW_80cvgBnQy9UDJZek
            source_type: api_record
            title: 中国历代人物传记资料库：王誦詩（CBDB 333206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333206&o=json
            external_identifier: CBDB:333206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XvLvgZx3E1ajPvY553eFr9
        status: active
        display_name: 王吉兆
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_7kcIeGZdWrjdqN-CYDNxXI
        subject_person_id: p_FYPXxKmUoBGXJ2ArmCq8cc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_R3KjiJ6AtFp3cp2mBnFBEY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PWI5u5dQKjRm06FXBblOvm
          claim_id: c_7kcIeGZdWrjdqN-CYDNxXI
          source_id: s_ew4ZW_80cvgBnQy9UDJZek
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205441 王庭詩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ew4ZW_80cvgBnQy9UDJZek
            source_type: api_record
            title: 中国历代人物传记资料库：王誦詩（CBDB 333206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333206&o=json
            external_identifier: CBDB:333206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_R3KjiJ6AtFp3cp2mBnFBEY
        status: active
        display_name: 王庭詩
        merged_into_person_id: null
---

# 王誦詩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王誦詩，明人物。嘉靖四十四年進士，籍贯華州。（中国历代人物传记资料库 CBDB 333206） | accepted |
| name.primary | 王誦詩 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XvLvgZx3E1ajPvY553eFr9 | 王吉兆 | accepted |
| other | p_R3KjiJ6AtFp3cp2mBnFBEY | 王庭詩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王誦詩（CBDB 333206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333206&o=json)
