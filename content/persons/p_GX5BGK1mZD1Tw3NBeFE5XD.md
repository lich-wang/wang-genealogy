---
schema: wang-person/v1
id: p_GX5BGK1mZD1Tw3NBeFE5XD
status: active
merged_into: null
display_name: 王應榴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JFS4aQhZZivHaXBgLNPeRo
        subject_person_id: p_GX5BGK1mZD1Tw3NBeFE5XD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應榴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uqNM7bvbniDi8CQTgMZNYs
          claim_id: c_JFS4aQhZZivHaXBgLNPeRo
          source_id: s_vJQRSJ6hsPCTa17kbzLeah
          stance: supports
          locator: CBDB:637989
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637989）
          source: &a1
            id: s_vJQRSJ6hsPCTa17kbzLeah
            source_type: api_record
            title: 中国历代人物传记资料库：王應榴（CBDB 637989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637989&o=json
            external_identifier: CBDB:637989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.478Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RHeQsw874TkffsR1BwrRA4
        subject_person_id: p_GX5BGK1mZD1Tw3NBeFE5XD
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
        - id: cs_wPnkifN7ZLzhsumSJjjhU6
          claim_id: c_RHeQsw874TkffsR1BwrRA4
          source_id: s_vJQRSJ6hsPCTa17kbzLeah
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

# 王應榴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應榴 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應榴（CBDB 637989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637989&o=json)
