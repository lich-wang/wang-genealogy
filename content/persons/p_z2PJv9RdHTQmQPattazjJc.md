---
schema: wang-person/v1
id: p_z2PJv9RdHTQmQPattazjJc
status: active
merged_into: null
display_name: 王好問
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ebrbEMiAR4upe767r322bK
        subject_person_id: p_z2PJv9RdHTQmQPattazjJc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王好問
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_35L2DLQVHfoQ9877mhWP2E
          claim_id: c_ebrbEMiAR4upe767r322bK
          source_id: s_Kbe2NE67dmLx1GqyLrHyNW
          stance: supports
          locator: CBDB:10129
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10129）
          source: &a1
            id: s_Kbe2NE67dmLx1GqyLrHyNW
            source_type: api_record
            title: 中国历代人物传记资料库：王好問（CBDB 10129）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10129&o=json
            external_identifier: CBDB:10129
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.521Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CEwnC5d9A53QMFpQGCr3jP
        subject_person_id: p_z2PJv9RdHTQmQPattazjJc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b29gQBHts2CQQnM5rX4bBt
          claim_id: c_CEwnC5d9A53QMFpQGCr3jP
          source_id: s_Kbe2NE67dmLx1GqyLrHyNW
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
  descendants: []
  other: []
---

# 王好問

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王好問 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王好問（CBDB 10129）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10129&o=json)
