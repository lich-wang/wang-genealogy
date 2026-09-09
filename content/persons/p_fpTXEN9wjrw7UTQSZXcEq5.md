---
schema: wang-person/v1
id: p_fpTXEN9wjrw7UTQSZXcEq5
status: active
merged_into: null
display_name: 王終
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KSaHcS6R8S1cJc2J8PehfE
        subject_person_id: p_fpTXEN9wjrw7UTQSZXcEq5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王終
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Aj29aKb4tgnLvuuQxRV6LX
          claim_id: c_KSaHcS6R8S1cJc2J8PehfE
          source_id: s_7P387nDKgHJCzycFL8jAqS
          stance: supports
          locator: CBDB:415234
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（415234）
          source: &a1
            id: s_7P387nDKgHJCzycFL8jAqS
            source_type: api_record
            title: 中国历代人物传记资料库：王終（CBDB 415234）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415234&o=json
            external_identifier: CBDB:415234
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.997Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G2kCGvT9fJXqZfdcVp6x33
        subject_person_id: p_fpTXEN9wjrw7UTQSZXcEq5
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
        - id: cs_qPJDGhANdkDqnfdvN3LRBK
          claim_id: c_G2kCGvT9fJXqZfdcVp6x33
          source_id: s_7P387nDKgHJCzycFL8jAqS
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

# 王終

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王終 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王終（CBDB 415234）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415234&o=json)
