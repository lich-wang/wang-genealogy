---
schema: wang-person/v1
id: p_E94Sdeg7g9Zpx5ch7fTN6o
status: active
merged_into: null
display_name: 王化蒸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7nRfNN49GLTQJqTEvzmw92
        subject_person_id: p_E94Sdeg7g9Zpx5ch7fTN6o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化蒸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KwMTpKqKto3TTgy6o7xq6d
          claim_id: c_7nRfNN49GLTQJqTEvzmw92
          source_id: s_tmmJQEQThFvdd8p51sj2aW
          stance: supports
          locator: CBDB:636404
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636404）
          source: &a1
            id: s_tmmJQEQThFvdd8p51sj2aW
            source_type: api_record
            title: 中国历代人物传记资料库：王化蒸（CBDB 636404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636404&o=json
            external_identifier: CBDB:636404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.981Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TU1Q8pbeb6yW6hb7zg2mck
        subject_person_id: p_E94Sdeg7g9Zpx5ch7fTN6o
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
        - id: cs_LaHCCHn6e4G8iZzPrJ7gH2
          claim_id: c_TU1Q8pbeb6yW6hb7zg2mck
          source_id: s_tmmJQEQThFvdd8p51sj2aW
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

# 王化蒸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王化蒸 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王化蒸（CBDB 636404）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636404&o=json)
