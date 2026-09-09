---
schema: wang-person/v1
id: p_aDq9632nMGH4REBy5bFdqu
status: active
merged_into: null
display_name: 王永
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PGgxxR4w5HbK92Ubujqo1z
        subject_person_id: p_aDq9632nMGH4REBy5bFdqu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tEwF6aeF5572aWEs8hQpvA
          claim_id: c_PGgxxR4w5HbK92Ubujqo1z
          source_id: s_QxFGGmViurCe7HZQkbSb9b
          stance: supports
          locator: CBDB:270461
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（270461）
          source: &a1
            id: s_QxFGGmViurCe7HZQkbSb9b
            source_type: api_record
            title: 中国历代人物传记资料库：王永（CBDB 270461）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270461&o=json
            external_identifier: CBDB:270461
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.837Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FZVLweoGBsFfyxNX1Ab2c3
        subject_person_id: p_aDq9632nMGH4REBy5bFdqu
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
        - id: cs_4QW5N8kfD9yH8gUtjHZ6wF
          claim_id: c_FZVLweoGBsFfyxNX1Ab2c3
          source_id: s_QxFGGmViurCe7HZQkbSb9b
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

# 王永

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王永（CBDB 270461）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270461&o=json)
