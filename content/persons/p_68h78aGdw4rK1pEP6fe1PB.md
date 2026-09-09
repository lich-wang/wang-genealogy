---
schema: wang-person/v1
id: p_68h78aGdw4rK1pEP6fe1PB
status: active
merged_into: null
display_name: 王菊枝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_j9V1S3j5FyL6g5isy38NYA
        subject_person_id: p_68h78aGdw4rK1pEP6fe1PB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王菊枝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VSGe4xM68jm5GyF7x6bRSG
          claim_id: c_j9V1S3j5FyL6g5isy38NYA
          source_id: s_SG3nD3f3rY3cMEy8YYzrfW
          stance: supports
          locator: CBDB:566441
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（566441）
          source: &a1
            id: s_SG3nD3f3rY3cMEy8YYzrfW
            source_type: api_record
            title: 中国历代人物传记资料库：王菊枝（CBDB 566441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=566441&o=json
            external_identifier: CBDB:566441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.830Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2MFi6RZgBMeU3my4rMahKV
        subject_person_id: p_68h78aGdw4rK1pEP6fe1PB
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
        - id: cs_9wyMPHJeTFy75xcnAid93o
          claim_id: c_2MFi6RZgBMeU3my4rMahKV
          source_id: s_SG3nD3f3rY3cMEy8YYzrfW
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

# 王菊枝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王菊枝 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王菊枝（CBDB 566441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=566441&o=json)
