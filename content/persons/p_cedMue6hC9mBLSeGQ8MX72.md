---
schema: wang-person/v1
id: p_cedMue6hC9mBLSeGQ8MX72
status: active
merged_into: null
display_name: 王蓗
cbdb_id: 212036
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DFbVLfu87iodp6dWEpvDjS
        subject_person_id: p_cedMue6hC9mBLSeGQ8MX72
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蓗，明人物。隆慶五年進士，籍贯商城。（中国历代人物传记资料库 CBDB 212036）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Q-yzzBEnAzUjUJOliA95C6
          claim_id: c_DFbVLfu87iodp6dWEpvDjS
          source_id: s_z5H5ajRgVWoPeG33PfaM8S
          stance: supports
          locator: CBDB:212036
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_z5H5ajRgVWoPeG33PfaM8S
            source_type: api_record
            title: 中国历代人物传记资料库：王蓗（CBDB 212036）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212036&o=json
            external_identifier: CBDB:212036
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tcSfAMk6BCRpHfciDgTYU4
        subject_person_id: p_cedMue6hC9mBLSeGQ8MX72
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蓗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_rt538eciJNyf9S1mBS68MT
          claim_id: c_tcSfAMk6BCRpHfciDgTYU4
          source_id: s_z5H5ajRgVWoPeG33PfaM8S
          stance: supports
          locator: CBDB:212036
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7jWfmrR7pFatkHThbeXeEx
        subject_person_id: p_FjEtN9HHE5cWHWRD9ddU2X
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cedMue6hC9mBLSeGQ8MX72
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uWCtwZRPhW6tgwVAGtBU-j
          claim_id: c_7jWfmrR7pFatkHThbeXeEx
          source_id: s_x1R1spK9qe1lTHbC73Sj7f
          stance: supports
          locator: CBDB：兄弟 王莚（206009）之父／母 王浙
          quotation: null
          interpretation_note: 由兄弟关系推断：王蓗 与 王莚 为同胞（CBDB 记「兄」），王莚 之父／母即 王蓗 之父／母。
          source:
            id: s_x1R1spK9qe1lTHbC73Sj7f
            source_type: api_record
            title: 中国历代人物传记资料库：王蓗（CBDB 212036）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212036&o=json
            external_identifier: CBDB:212036
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FjEtN9HHE5cWHWRD9ddU2X
        status: active
        display_name: 王浙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_xH4t6oHgbjeCRHfPbd_kQt
        subject_person_id: p_RvVueiXkPRQ3GnRokiv2tg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cedMue6hC9mBLSeGQ8MX72
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vlH7kTPXVnLXGVWVH6QhKk
          claim_id: c_xH4t6oHgbjeCRHfPbd_kQt
          source_id: s_x1R1spK9qe1lTHbC73Sj7f
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206009 王莚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_x1R1spK9qe1lTHbC73Sj7f
            source_type: api_record
            title: 中国历代人物传记资料库：王蓗（CBDB 212036）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212036&o=json
            external_identifier: CBDB:212036
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RvVueiXkPRQ3GnRokiv2tg
        status: active
        display_name: 王莚
        merged_into_person_id: null
---

# 王蓗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王蓗，明人物。隆慶五年進士，籍贯商城。（中国历代人物传记资料库 CBDB 212036） | accepted |
| name.primary | 王蓗 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FjEtN9HHE5cWHWRD9ddU2X | 王浙 | accepted |
| other | p_RvVueiXkPRQ3GnRokiv2tg | 王莚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王蓗（CBDB 212036）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212036&o=json)
