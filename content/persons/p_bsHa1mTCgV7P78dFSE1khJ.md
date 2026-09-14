---
schema: wang-person/v1
id: p_bsHa1mTCgV7P78dFSE1khJ
status: active
merged_into: null
display_name: 王士翱
cbdb_id: 299917
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DaB1KFW7BLrAyGxFbHmSP2
        subject_person_id: p_bsHa1mTCgV7P78dFSE1khJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士翱，明人物。嘉靖十七年進士，籍贯安福。（中国历代人物传记资料库 CBDB 299917）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_TFGNC-koaNwZFsXuM9hSmj
          claim_id: c_DaB1KFW7BLrAyGxFbHmSP2
          source_id: s_Uj2NaCv6Z57WDmT971CDpE
          stance: supports
          locator: CBDB:299917
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Uj2NaCv6Z57WDmT971CDpE
            source_type: api_record
            title: 中国历代人物传记资料库：王士翱（CBDB 299917）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299917&o=json
            external_identifier: CBDB:299917
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_orxEvi43dfSAxGdmiXXU6c
        subject_person_id: p_bsHa1mTCgV7P78dFSE1khJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士翱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BN9siHHjvjVXG55zr7QeeV
          claim_id: c_orxEvi43dfSAxGdmiXXU6c
          source_id: s_Uj2NaCv6Z57WDmT971CDpE
          stance: supports
          locator: CBDB:299917
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_t0sQ2O9H6IbcDjqZZbKtY9
        subject_person_id: p_EBfbydRv4JZEiVZULEada1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bsHa1mTCgV7P78dFSE1khJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BT4Jp7HCyzErHojq6kJ79v
          claim_id: c_t0sQ2O9H6IbcDjqZZbKtY9
          source_id: s_j3Viunvf132MsdSjFiX6n6
          stance: supports
          locator: CBDB：兄弟 王士翹（203106）之父／母 王寬
          quotation: null
          interpretation_note: 由兄弟关系推断：王士翱 与 王士翹 为同胞（CBDB 记「兄」），王士翹 之父／母即 王士翱 之父／母。
          source:
            id: s_j3Viunvf132MsdSjFiX6n6
            source_type: api_record
            title: 中国历代人物传记资料库：王士翱（CBDB 299917）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299917&o=json
            external_identifier: CBDB:299917
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EBfbydRv4JZEiVZULEada1
        status: active
        display_name: 王寬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_QbR-Vs05Bjgvp5hPQCzdwr
        subject_person_id: p_acwBn4E2ueYuXmC3T9fy34
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bsHa1mTCgV7P78dFSE1khJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_46lbtD9v_6A3Xp1nuKySPG
          claim_id: c_QbR-Vs05Bjgvp5hPQCzdwr
          source_id: s_j3Viunvf132MsdSjFiX6n6
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203106 王士翹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_j3Viunvf132MsdSjFiX6n6
            source_type: api_record
            title: 中国历代人物传记资料库：王士翱（CBDB 299917）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299917&o=json
            external_identifier: CBDB:299917
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_acwBn4E2ueYuXmC3T9fy34
        status: active
        display_name: 王士翹
        merged_into_person_id: null
---

# 王士翱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王士翱，明人物。嘉靖十七年進士，籍贯安福。（中国历代人物传记资料库 CBDB 299917） | accepted |
| name.primary | 王士翱 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EBfbydRv4JZEiVZULEada1 | 王寬 | accepted |
| other | p_acwBn4E2ueYuXmC3T9fy34 | 王士翹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王士翱（CBDB 299917）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299917&o=json)
