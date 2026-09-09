---
schema: wang-person/v1
id: p_eb1X6Pc72zAV4ipT7go8w4
status: active
merged_into: null
display_name: 王懷珍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Pd5aU6BLgW373jMiEGK3mo
        subject_person_id: p_eb1X6Pc72zAV4ipT7go8w4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷珍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LH8Yef8wBi6pz4pUHz6Wem
          claim_id: c_Pd5aU6BLgW373jMiEGK3mo
          source_id: s_Yi7G7YGCW1ud2QvrLxJge5
          stance: supports
          locator: CBDB:256343
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（256343）
          source: &a1
            id: s_Yi7G7YGCW1ud2QvrLxJge5
            source_type: api_record
            title: 中国历代人物传记资料库：王懷珍（CBDB 256343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256343&o=json
            external_identifier: CBDB:256343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.387Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4uK6zRpyd5dH3QwErAAKjN
        subject_person_id: p_eb1X6Pc72zAV4ipT7go8w4
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
        - id: cs_gxxGHPxP9RMJnyu2Ti9yK7
          claim_id: c_4uK6zRpyd5dH3QwErAAKjN
          source_id: s_Yi7G7YGCW1ud2QvrLxJge5
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

# 王懷珍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懷珍 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王懷珍（CBDB 256343）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256343&o=json)
