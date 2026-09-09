---
schema: wang-person/v1
id: p_qfk7sX2QmzZV2YeqpoWkL9
status: active
merged_into: null
display_name: 王秉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1CGWoBDV9kEmX62DHT7v4P
        subject_person_id: p_qfk7sX2QmzZV2YeqpoWkL9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yod5cjZNE8n8FJG8P7yP5U
          claim_id: c_1CGWoBDV9kEmX62DHT7v4P
          source_id: s_Ss4HTWsZvqQ8KjcxpeWMmH
          stance: supports
          locator: CBDB:686408
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（686408）
          source: &a1
            id: s_Ss4HTWsZvqQ8KjcxpeWMmH
            source_type: api_record
            title: 中国历代人物传记资料库：王秉（CBDB 686408）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686408&o=json
            external_identifier: CBDB:686408
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.378Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n6YpL1Les1dJ4CpiHrJ8xL
        subject_person_id: p_qfk7sX2QmzZV2YeqpoWkL9
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
        - id: cs_SKXQbme2EKbC9uC7y4Ze9G
          claim_id: c_n6YpL1Les1dJ4CpiHrJ8xL
          source_id: s_Ss4HTWsZvqQ8KjcxpeWMmH
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

# 王秉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秉 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王秉（CBDB 686408）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686408&o=json)
