---
schema: wang-person/v1
id: p_NFa8YxHNQ6Ms3eb7N5iZGG
status: active
merged_into: null
display_name: 王逈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Fn1qZErejU6ngKCspowaxh
        subject_person_id: p_NFa8YxHNQ6Ms3eb7N5iZGG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1TPCrzFgFi6XGvbX9sWAik
          claim_id: c_Fn1qZErejU6ngKCspowaxh
          source_id: s_LXgXT6fkzJvKoz4iKsZs7v
          stance: supports
          locator: CBDB:241846
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241846）
          source: &a1
            id: s_LXgXT6fkzJvKoz4iKsZs7v
            source_type: api_record
            title: 中国历代人物传记资料库：王逈（CBDB 241846）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241846&o=json
            external_identifier: CBDB:241846
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.958Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jCQ9qFy5qejeLs7W1yEH24
        subject_person_id: p_NFa8YxHNQ6Ms3eb7N5iZGG
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
        - id: cs_rhn9CQ86ywvgEHqTWrjP5t
          claim_id: c_jCQ9qFy5qejeLs7W1yEH24
          source_id: s_LXgXT6fkzJvKoz4iKsZs7v
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

# 王逈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王逈 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王逈（CBDB 241846）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241846&o=json)
