---
schema: wang-person/v1
id: p_eEERVq8xR5zePE5JRnoJdD
status: active
merged_into: null
display_name: 王士登
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D2nVYdd1ArQZVBWKB1eEw2
        subject_person_id: p_eEERVq8xR5zePE5JRnoJdD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士登
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pFGKsNsTtnE5uZAr2TT5Aq
          claim_id: c_D2nVYdd1ArQZVBWKB1eEw2
          source_id: s_3bzREKH5ntiFsvc2Ud4yir
          stance: supports
          locator: CBDB:414174
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（414174）
          source: &a1
            id: s_3bzREKH5ntiFsvc2Ud4yir
            source_type: api_record
            title: 中国历代人物传记资料库：王士登（CBDB 414174）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414174&o=json
            external_identifier: CBDB:414174
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.933Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sEKgAgKmykDwzSKDdwttk7
        subject_person_id: p_eEERVq8xR5zePE5JRnoJdD
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
        - id: cs_6DhntEn5tXxqQ5D8An5XkA
          claim_id: c_sEKgAgKmykDwzSKDdwttk7
          source_id: s_3bzREKH5ntiFsvc2Ud4yir
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

# 王士登

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士登 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士登（CBDB 414174）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414174&o=json)
