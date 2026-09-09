---
schema: wang-person/v1
id: p_X7R8nrWvDR9JaDQeatiuBC
status: active
merged_into: null
display_name: 王世仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WQUNHKhw8rMr29vyFjLCyB
        subject_person_id: p_X7R8nrWvDR9JaDQeatiuBC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PG9ckJXM7sfEr6CW4DrWJT
          claim_id: c_WQUNHKhw8rMr29vyFjLCyB
          source_id: s_vf8dAPGHiMEGNPUQs9nUNj
          stance: supports
          locator: CBDB:221775
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221775）
          source: &a1
            id: s_vf8dAPGHiMEGNPUQs9nUNj
            source_type: api_record
            title: 中国历代人物传记资料库：王世仁（CBDB 221775）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221775&o=json
            external_identifier: CBDB:221775
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.340Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BngDKVChc4UAP1xj5MFfh3
        subject_person_id: p_X7R8nrWvDR9JaDQeatiuBC
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
        - id: cs_WM8aQ2FcPjp6TxESms4t8W
          claim_id: c_BngDKVChc4UAP1xj5MFfh3
          source_id: s_vf8dAPGHiMEGNPUQs9nUNj
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

# 王世仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世仁 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世仁（CBDB 221775）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221775&o=json)
