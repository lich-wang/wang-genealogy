---
schema: wang-person/v1
id: p_NUmSL9KM2UayZf5HAJU1et
status: active
merged_into: null
display_name: 王岱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7zNVcrK2vZ2gZcAWcz8ZxS
        subject_person_id: p_NUmSL9KM2UayZf5HAJU1et
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王岱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NeWsNdH8TvJoAhWHJkLh8e
          claim_id: c_7zNVcrK2vZ2gZcAWcz8ZxS
          source_id: s_gwrbW1qK8wwzTPeXJHpmoM
          stance: supports
          locator: CBDB:342277
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342277）
          source: &a1
            id: s_gwrbW1qK8wwzTPeXJHpmoM
            source_type: api_record
            title: 中国历代人物传记资料库：王岱（CBDB 342277）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342277&o=json
            external_identifier: CBDB:342277
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.883Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7NB9iHuVRvhjebXd35hY56
        subject_person_id: p_NUmSL9KM2UayZf5HAJU1et
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QXtHH1Y6CEYCZy8FZyU1zD
          claim_id: c_7NB9iHuVRvhjebXd35hY56
          source_id: s_gwrbW1qK8wwzTPeXJHpmoM
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

# 王岱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王岱 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王岱（CBDB 342277）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342277&o=json)
