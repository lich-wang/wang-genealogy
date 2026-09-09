---
schema: wang-person/v1
id: p_djNQ3Mp4K1WRfTZdBRxAYS
status: active
merged_into: null
display_name: 王廷介
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hFcZGjrZaKy4Z9VtvE1BQ9
        subject_person_id: p_djNQ3Mp4K1WRfTZdBRxAYS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷介
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5KK2bXHbFb3N4YFtHPjHSY
          claim_id: c_hFcZGjrZaKy4Z9VtvE1BQ9
          source_id: s_cLN6Kczv7NkW1WAXQBBuYd
          stance: supports
          locator: CBDB:544950
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（544950）
          source: &a1
            id: s_cLN6Kczv7NkW1WAXQBBuYd
            source_type: api_record
            title: 中国历代人物传记资料库：王廷介（CBDB 544950）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=544950&o=json
            external_identifier: CBDB:544950
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.505Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Aq3LWvHh7S1JtBE5S98tuh
        subject_person_id: p_djNQ3Mp4K1WRfTZdBRxAYS
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
        - id: cs_NsDGnkCRzvJWzMKENovgP5
          claim_id: c_Aq3LWvHh7S1JtBE5S98tuh
          source_id: s_cLN6Kczv7NkW1WAXQBBuYd
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

# 王廷介

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷介 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷介（CBDB 544950）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=544950&o=json)
