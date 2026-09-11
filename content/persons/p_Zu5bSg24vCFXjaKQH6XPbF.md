---
schema: wang-person/v1
id: p_Zu5bSg24vCFXjaKQH6XPbF
status: active
merged_into: null
display_name: 王思誠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s2omUSCzWjXQ9MdcXkxGyC
        subject_person_id: p_Zu5bSg24vCFXjaKQH6XPbF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思誠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oqoKgQQFBovyavmBXP3aiS
          claim_id: c_s2omUSCzWjXQ9MdcXkxGyC
          source_id: s_GVTk8rDEN1gqHJfHF8jhaF
          stance: supports
          locator: CBDB:257668
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（257668）
          source: &a1
            id: s_GVTk8rDEN1gqHJfHF8jhaF
            source_type: api_record
            title: 中国历代人物传记资料库：王思誠（CBDB 257668）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257668&o=json
            external_identifier: CBDB:257668
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.426Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7Urw3DG6sQiGJt4JDb5AAY
        subject_person_id: p_Zu5bSg24vCFXjaKQH6XPbF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9FqMBQ5k92bdLBeAckevHB
          claim_id: c_7Urw3DG6sQiGJt4JDb5AAY
          source_id: s_GVTk8rDEN1gqHJfHF8jhaF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_4XcxIjFLYOfRL6WVldVE9R
        subject_person_id: p_Zu5bSg24vCFXjaKQH6XPbF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_NCS3B6qxdWUziaAFj1bjfH
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_opvzJHu55VaqEHhwua9Xbf
          claim_id: c_4XcxIjFLYOfRL6WVldVE9R
          source_id: s_GVTk8rDEN1gqHJfHF8jhaF
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第二十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NCS3B6qxdWUziaAFj1bjfH
        status: active
        display_name: 王綸
        merged_into_person_id: null
    - claim:
        id: c_qtV36e9-OVYcDBN0y9e_rK
        subject_person_id: p_Zu5bSg24vCFXjaKQH6XPbF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ppyWLxr8Sp6zZ7s3LPugbF
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__Hco4uxsm-Wr7bxjL1ua3x
          claim_id: c_qtV36e9-OVYcDBN0y9e_rK
          source_id: s_GVTk8rDEN1gqHJfHF8jhaF
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第六十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ppyWLxr8Sp6zZ7s3LPugbF
        status: active
        display_name: 王綬
        merged_into_person_id: null
  other: []
---

# 王思誠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思誠 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_NCS3B6qxdWUziaAFj1bjfH | 王綸 | accepted |
| descendants | p_ppyWLxr8Sp6zZ7s3LPugbF | 王綬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王思誠（CBDB 257668）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257668&o=json)
