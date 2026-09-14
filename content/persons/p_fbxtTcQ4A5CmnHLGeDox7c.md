---
schema: wang-person/v1
id: p_fbxtTcQ4A5CmnHLGeDox7c
status: active
merged_into: null
display_name: 王㭿
cbdb_id: 294443
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LWB8pTY3VY67fFMPKnr8dT
        subject_person_id: p_fbxtTcQ4A5CmnHLGeDox7c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王㭿，明人物。嘉靖十一年進士，籍贯象山。（中国历代人物传记资料库 CBDB 294443）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_1REMHEAKfPPr2-LUc9lXP5
          claim_id: c_LWB8pTY3VY67fFMPKnr8dT
          source_id: s_2QBsQKQm3q9iVS2mcnZmkZ
          stance: supports
          locator: CBDB:294443
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_2QBsQKQm3q9iVS2mcnZmkZ
            source_type: api_record
            title: 中国历代人物传记资料库：王㭿（CBDB 294443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294443&o=json
            external_identifier: CBDB:294443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_afvEcyxKX52tKDxNsnGEfY
        subject_person_id: p_fbxtTcQ4A5CmnHLGeDox7c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王㭿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fRPb8oTb9FaXbxKH1KBtyQ
          claim_id: c_afvEcyxKX52tKDxNsnGEfY
          source_id: s_2QBsQKQm3q9iVS2mcnZmkZ
          stance: supports
          locator: CBDB:294443
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Gsx_Xen6PZp1tUxNeiRq_N
        subject_person_id: p_ymQLsviGVnJad7qLTZDHb4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fbxtTcQ4A5CmnHLGeDox7c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L0rWphrXpcMvO5B5TO92zm
          claim_id: c_Gsx_Xen6PZp1tUxNeiRq_N
          source_id: s_I1basQgZPF72n37z6nDcNX
          stance: supports
          locator: CBDB：兄弟 王梴（202789）之父／母 王渙
          quotation: null
          interpretation_note: 由兄弟关系推断：王㭿 与 王梴 为同胞（CBDB 记「弟」），王梴 之父／母即 王㭿 之父／母。
          source:
            id: s_I1basQgZPF72n37z6nDcNX
            source_type: api_record
            title: 中国历代人物传记资料库：王㭿（CBDB 294443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294443&o=json
            external_identifier: CBDB:294443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ymQLsviGVnJad7qLTZDHb4
        status: active
        display_name: 王渙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Sp1utgkBsa7VXe4HN2ZF01
        subject_person_id: p_TdovnQSDHPgtdb6L5QzgtZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fbxtTcQ4A5CmnHLGeDox7c
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_txiLCjUjDspn0DKCtC-59q
          claim_id: c_Sp1utgkBsa7VXe4HN2ZF01
          source_id: s_I1basQgZPF72n37z6nDcNX
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202789 王梴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_I1basQgZPF72n37z6nDcNX
            source_type: api_record
            title: 中国历代人物传记资料库：王㭿（CBDB 294443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294443&o=json
            external_identifier: CBDB:294443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TdovnQSDHPgtdb6L5QzgtZ
        status: active
        display_name: 王梴
        merged_into_person_id: null
---

# 王㭿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王㭿，明人物。嘉靖十一年進士，籍贯象山。（中国历代人物传记资料库 CBDB 294443） | accepted |
| name.primary | 王㭿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ymQLsviGVnJad7qLTZDHb4 | 王渙 | accepted |
| other | p_TdovnQSDHPgtdb6L5QzgtZ | 王梴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王㭿（CBDB 294443）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294443&o=json)
