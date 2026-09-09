---
schema: wang-person/v1
id: p_61DL7xbC9xh65un2FjYLrk
status: active
merged_into: null
display_name: 王瑩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E7TLCLZvqJfbrmNft74F4o
        subject_person_id: p_61DL7xbC9xh65un2FjYLrk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Tc1bT7539T1VqbD89g4Z2q
          claim_id: c_E7TLCLZvqJfbrmNft74F4o
          source_id: s_aN8K8X6KSkud8SCsopmfnx
          stance: supports
          locator: CBDB:468157
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（468157）
          source: &a1
            id: s_aN8K8X6KSkud8SCsopmfnx
            source_type: api_record
            title: 中国历代人物传记资料库：王瑩（CBDB 468157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=468157&o=json
            external_identifier: CBDB:468157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.087Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K7StZLMwQJYk57FfpqgeLV
        subject_person_id: p_61DL7xbC9xh65un2FjYLrk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋(劉)人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q1k8hENSb85v5dK8qFx7sq
          claim_id: c_K7StZLMwQJYk57FfpqgeLV
          source_id: s_aN8K8X6KSkud8SCsopmfnx
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

# 王瑩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑩 | accepted |
| bio.summary | CBDB 记载为宋(劉)人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑩（CBDB 468157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=468157&o=json)
