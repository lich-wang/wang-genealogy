---
schema: wang-person/v1
id: p_KZNK5U9oMFqW2yqQHDXnvC
status: active
merged_into: null
display_name: 王元晉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kA4XEGoHdGCyavJfPU9xmL
        subject_person_id: p_KZNK5U9oMFqW2yqQHDXnvC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元晉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LXytAH3E7PnFL2NMUkS98b
          claim_id: c_kA4XEGoHdGCyavJfPU9xmL
          source_id: s_PviN85BfLuACQZhJfBV9sL
          stance: supports
          locator: CBDB:341775
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341775）
          source: &a1
            id: s_PviN85BfLuACQZhJfBV9sL
            source_type: api_record
            title: 中国历代人物传记资料库：王元晉（CBDB 341775）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341775&o=json
            external_identifier: CBDB:341775
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.703Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dXqGbV9FY5P5tveqcuNw4i
        subject_person_id: p_KZNK5U9oMFqW2yqQHDXnvC
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
        - id: cs_6AUYBnz98s3gw1eDJWzgEY
          claim_id: c_dXqGbV9FY5P5tveqcuNw4i
          source_id: s_PviN85BfLuACQZhJfBV9sL
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

# 王元晉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元晉 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元晉（CBDB 341775）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341775&o=json)
