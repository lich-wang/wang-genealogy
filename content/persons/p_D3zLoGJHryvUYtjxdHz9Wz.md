---
schema: wang-person/v1
id: p_D3zLoGJHryvUYtjxdHz9Wz
status: active
merged_into: null
display_name: 王同升
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nVZo2hxFzhKymRnq6cw9Em
        subject_person_id: p_D3zLoGJHryvUYtjxdHz9Wz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同升
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nay2z7QMawE6MxFwaJJp5n
          claim_id: c_nVZo2hxFzhKymRnq6cw9Em
          source_id: s_D3X7CL2nxD1K34b2N3o233
          stance: supports
          locator: CBDB:327389
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327389）
          source: &a1
            id: s_D3X7CL2nxD1K34b2N3o233
            source_type: api_record
            title: 中国历代人物传记资料库：王同升（CBDB 327389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327389&o=json
            external_identifier: CBDB:327389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.247Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L5f6bLz26D7rwiTPTJND2C
        subject_person_id: p_D3zLoGJHryvUYtjxdHz9Wz
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
        - id: cs_YCFFn1w3d4qgX7NKCicfk7
          claim_id: c_L5f6bLz26D7rwiTPTJND2C
          source_id: s_D3X7CL2nxD1K34b2N3o233
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

# 王同升

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同升 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王同升（CBDB 327389）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327389&o=json)
