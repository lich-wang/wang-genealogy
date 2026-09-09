---
schema: wang-person/v1
id: p_fcefjLhyuEZysEepDDeKNE
status: active
merged_into: null
display_name: 王焞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SKoPmnux3atiZ8SoLpMvD1
        subject_person_id: p_fcefjLhyuEZysEepDDeKNE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王焞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KLALG7wGckG9V6zFJYVjKj
          claim_id: c_SKoPmnux3atiZ8SoLpMvD1
          source_id: s_2gCw7EgXD4W3QB8cDbhK3t
          stance: supports
          locator: CBDB:439084
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（439084）
          source: &a1
            id: s_2gCw7EgXD4W3QB8cDbhK3t
            source_type: api_record
            title: 中国历代人物传记资料库：王焞（CBDB 439084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=439084&o=json
            external_identifier: CBDB:439084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.088Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sPtKRM13YsxJQb525HBF2Q
        subject_person_id: p_fcefjLhyuEZysEepDDeKNE
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
        - id: cs_G9cWiK4v9aCnsUYsTWFGuD
          claim_id: c_sPtKRM13YsxJQb525HBF2Q
          source_id: s_2gCw7EgXD4W3QB8cDbhK3t
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

# 王焞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王焞 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王焞（CBDB 439084）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=439084&o=json)
