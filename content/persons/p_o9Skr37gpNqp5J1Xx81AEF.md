---
schema: wang-person/v1
id: p_o9Skr37gpNqp5J1Xx81AEF
status: active
merged_into: null
display_name: 王儼
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GGJYL54CeYxFY2CZjKwoyn
        subject_person_id: p_o9Skr37gpNqp5J1Xx81AEF
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
        - id: cs_1scRi8Pi4HpP6ZNg384vuV
          claim_id: c_GGJYL54CeYxFY2CZjKwoyn
          source_id: s_vVRoQ5T4zLgusALURoRGWA
          stance: supports
          locator: CBDB:126888
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126888）
          source: &a1
            id: s_vVRoQ5T4zLgusALURoRGWA
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 126888）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126888&o=json
            external_identifier: CBDB:126888
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.286Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jcCAdbgauVED1zyRNy7KJP
        subject_person_id: p_o9Skr37gpNqp5J1Xx81AEF
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
        - id: cs_dDHVCQDJZkF81xgwJ7aT6U
          claim_id: c_jcCAdbgauVED1zyRNy7KJP
          source_id: s_vVRoQ5T4zLgusALURoRGWA
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
  ancestors:
    - claim:
        id: c_RSjlwSuZ4b62L914eZzGOn
        subject_person_id: p_JKkrL45mghx3yN3Xd9pH7X
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_o9Skr37gpNqp5J1Xx81AEF
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NgrvEWq8MoCkdaByi488O2
          claim_id: c_RSjlwSuZ4b62L914eZzGOn
          source_id: s_Jt1HopWFQVgduEMP2PEAfG
          stance: supports
          locator: 正统七年進士登科錄:一卷，第二甲第四十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Jt1HopWFQVgduEMP2PEAfG
            source_type: api_record
            title: 中国历代人物传记资料库：王復初（CBDB 237904）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237904&o=json
            external_identifier: CBDB:237904
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.858Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JKkrL45mghx3yN3Xd9pH7X
        status: active
        display_name: 王復初
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王儼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儼 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_JKkrL45mghx3yN3Xd9pH7X | 王復初 | accepted |

## 外部来源

- [中国历代人物传记资料库：王復初（CBDB 237904）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237904&o=json)
- [中国历代人物传记资料库：王儼（CBDB 126888）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126888&o=json)
