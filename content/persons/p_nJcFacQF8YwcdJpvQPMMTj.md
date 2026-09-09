---
schema: wang-person/v1
id: p_nJcFacQF8YwcdJpvQPMMTj
status: active
merged_into: null
display_name: 王雲龍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B35ECpH3ES3JtLJzKRfw3i
        subject_person_id: p_nJcFacQF8YwcdJpvQPMMTj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G6f4mbz4Gz34X2DCGNmg6z
          claim_id: c_B35ECpH3ES3JtLJzKRfw3i
          source_id: s_ED2WdJcYsQAqGWLK5E856k
          stance: supports
          locator: CBDB:341842
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341842）
          source: &a1
            id: s_ED2WdJcYsQAqGWLK5E856k
            source_type: api_record
            title: 中国历代人物传记资料库：王雲龍（CBDB 341842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341842&o=json
            external_identifier: CBDB:341842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.723Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_syZgAoDoLSAfzHK8E3WmUQ
        subject_person_id: p_nJcFacQF8YwcdJpvQPMMTj
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
        - id: cs_QCbSPVLFdK9xJJmFFuX5X8
          claim_id: c_syZgAoDoLSAfzHK8E3WmUQ
          source_id: s_ED2WdJcYsQAqGWLK5E856k
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

# 王雲龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雲龍 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雲龍（CBDB 341842）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341842&o=json)
