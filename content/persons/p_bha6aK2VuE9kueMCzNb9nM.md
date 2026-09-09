---
schema: wang-person/v1
id: p_bha6aK2VuE9kueMCzNb9nM
status: active
merged_into: null
display_name: 王汝培
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nJvcdPTSDGewb2U8xYPdF5
        subject_person_id: p_bha6aK2VuE9kueMCzNb9nM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝培
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_da9FxkGaog9FF6hHD12LpN
          claim_id: c_nJvcdPTSDGewb2U8xYPdF5
          source_id: s_3ou3KMeFvEAg6ZM8D9eay3
          stance: supports
          locator: CBDB:639005
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639005）
          source: &a1
            id: s_3ou3KMeFvEAg6ZM8D9eay3
            source_type: api_record
            title: 中国历代人物传记资料库：王汝培（CBDB 639005）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639005&o=json
            external_identifier: CBDB:639005
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.811Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TEiSyYEXsvnJeekUw6bZCG
        subject_person_id: p_bha6aK2VuE9kueMCzNb9nM
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
        - id: cs_dnfPLzqNz4yHj7nhybBHJd
          claim_id: c_TEiSyYEXsvnJeekUw6bZCG
          source_id: s_3ou3KMeFvEAg6ZM8D9eay3
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

# 王汝培

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝培 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝培（CBDB 639005）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639005&o=json)
