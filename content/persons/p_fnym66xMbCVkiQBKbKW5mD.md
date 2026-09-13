---
schema: wang-person/v1
id: p_fnym66xMbCVkiQBKbKW5mD
status: active
merged_into: null
display_name: 王敬祥
cbdb_id: 301982
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7EPF1U9abBmPvFP2Af7vdT
        subject_person_id: p_fnym66xMbCVkiQBKbKW5mD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬祥，明人物。嘉靖十七年進士。（中国历代人物传记资料库 CBDB 301982）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_NvTDqd0_9Vip3JDymHHg2I
          claim_id: c_7EPF1U9abBmPvFP2Af7vdT
          source_id: s_Zt6WN2fuVwoP6a9BW1vTVw
          stance: supports
          locator: CBDB:301982
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Zt6WN2fuVwoP6a9BW1vTVw
            source_type: api_record
            title: 中国历代人物传记资料库：王敬祥（CBDB 301982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301982&o=json
            external_identifier: CBDB:301982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_yGEYpXxhC3fqvxvfEYeBV9
        subject_person_id: p_fnym66xMbCVkiQBKbKW5mD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_qR5HL9sEbERcM7HGNxX31k
          claim_id: c_yGEYpXxhC3fqvxvfEYeBV9
          source_id: s_Zt6WN2fuVwoP6a9BW1vTVw
          stance: supports
          locator: CBDB:301982
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
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
        id: c_zVZEuT5XE8cNKOqhhydQI0
        subject_person_id: p_fnym66xMbCVkiQBKbKW5mD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GQ1GXZbABMzPSWjdERZQAa
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LWvUNuFv_pL1glW2AF3noA
          claim_id: c_zVZEuT5XE8cNKOqhhydQI0
          source_id: s_Zt6WN2fuVwoP6a9BW1vTVw
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第二百一十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Zt6WN2fuVwoP6a9BW1vTVw
            source_type: api_record
            title: 中国历代人物传记资料库：王敬祥（CBDB 301982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301982&o=json
            external_identifier: CBDB:301982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_GQ1GXZbABMzPSWjdERZQAa
        status: active
        display_name: 王心
        merged_into_person_id: null
  other: []
---

# 王敬祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王敬祥，明人物。嘉靖十七年進士。（中国历代人物传记资料库 CBDB 301982） | accepted |
| name.primary | 王敬祥 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_GQ1GXZbABMzPSWjdERZQAa | 王心 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敬祥（CBDB 301982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301982&o=json)
