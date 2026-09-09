---
schema: wang-person/v1
id: p_cVQg4QasZfF4GqMg6NaCrC
status: active
merged_into: null
display_name: 王鼎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LcusQ9s92zEtCHy5LdGh5E
        subject_person_id: p_cVQg4QasZfF4GqMg6NaCrC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_z79A1r3P6eogUSnPcKE4FA
          claim_id: c_LcusQ9s92zEtCHy5LdGh5E
          source_id: s_GxLfX6F6RuV4C1c8TW9Gcu
          stance: supports
          locator: CBDB:1896
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1896）
          source: &a1
            id: s_GxLfX6F6RuV4C1c8TW9Gcu
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 1896）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1896&o=json
            external_identifier: CBDB:1896
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.378Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jpGCG4kfw6miqomFeBMe15
        subject_person_id: p_cVQg4QasZfF4GqMg6NaCrC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vqHh2E3bQMosYyGL8YU5N2
          claim_id: c_jpGCG4kfw6miqomFeBMe15
          source_id: s_GxLfX6F6RuV4C1c8TW9Gcu
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

# 王鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鼎（CBDB 1896）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1896&o=json)
