---
schema: wang-person/v1
id: p_JGjLTKQBUYifV1nCw7h9My
status: active
merged_into: null
display_name: 王崇學
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mG3FZg2z2wVA2bXB3RZQHo
        subject_person_id: p_JGjLTKQBUYifV1nCw7h9My
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇學
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nCD4a86HHBqPSzz6XjYBie
          claim_id: c_mG3FZg2z2wVA2bXB3RZQHo
          source_id: s_1EBeFtS6jQCFEmGsKf5Kfo
          stance: supports
          locator: CBDB:637350
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637350）
          source: &a1
            id: s_1EBeFtS6jQCFEmGsKf5Kfo
            source_type: api_record
            title: 中国历代人物传记资料库：王崇學（CBDB 637350）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637350&o=json
            external_identifier: CBDB:637350
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.392Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XGE55srfGdvq9muGXTdBNi
        subject_person_id: p_JGjLTKQBUYifV1nCw7h9My
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
        - id: cs_VFdxx833Mfjy8hb1fnGGo1
          claim_id: c_XGE55srfGdvq9muGXTdBNi
          source_id: s_1EBeFtS6jQCFEmGsKf5Kfo
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

# 王崇學

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇學 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王崇學（CBDB 637350）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637350&o=json)
