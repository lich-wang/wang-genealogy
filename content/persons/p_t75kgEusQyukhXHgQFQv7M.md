---
schema: wang-person/v1
id: p_t75kgEusQyukhXHgQFQv7M
status: active
merged_into: null
display_name: 王臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nq5qhKnzq3aG5qF5b9baLM
        subject_person_id: p_t75kgEusQyukhXHgQFQv7M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Eny89GWn6qbi3vsQ4ff44N
          claim_id: c_nq5qhKnzq3aG5qF5b9baLM
          source_id: s_T5UqGwQDJegwu3YV6PHJW7
          stance: supports
          locator: CBDB:500729
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（500729）
          source: &a1
            id: s_T5UqGwQDJegwu3YV6PHJW7
            source_type: api_record
            title: 中国历代人物传记资料库：王臣（CBDB 500729）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=500729&o=json
            external_identifier: CBDB:500729
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.806Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_b6KRJuN7o2Ly8KrchpLgrN
        subject_person_id: p_t75kgEusQyukhXHgQFQv7M
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
        - id: cs_goDSeASLu6JAE1XahF8irG
          claim_id: c_b6KRJuN7o2Ly8KrchpLgrN
          source_id: s_T5UqGwQDJegwu3YV6PHJW7
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

# 王臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王臣 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王臣（CBDB 500729）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=500729&o=json)
