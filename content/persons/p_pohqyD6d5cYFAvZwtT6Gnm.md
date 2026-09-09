---
schema: wang-person/v1
id: p_pohqyD6d5cYFAvZwtT6Gnm
status: active
merged_into: null
display_name: 王榮商
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Gfc1eGtN4MygUGt84pReot
        subject_person_id: p_pohqyD6d5cYFAvZwtT6Gnm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮商
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dAMXU6ZJHafDfeBjrq1VqR
          claim_id: c_Gfc1eGtN4MygUGt84pReot
          source_id: s_w1b42ES7DWpxBRgJLrKxb8
          stance: supports
          locator: CBDB:61928
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61928）
          source: &a1
            id: s_w1b42ES7DWpxBRgJLrKxb8
            source_type: api_record
            title: 中国历代人物传记资料库：王榮商（CBDB 61928）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61928&o=json
            external_identifier: CBDB:61928
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.922Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_VhH2LAAm33VTX4JPUPtzi5
        subject_person_id: p_pohqyD6d5cYFAvZwtT6Gnm
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1852年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k6AjckWj8rnBz9Njf3ovvw
          claim_id: c_VhH2LAAm33VTX4JPUPtzi5
          source_id: s_w1b42ES7DWpxBRgJLrKxb8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_GaDA8HTnQAxcNJG7xUEcx1
        subject_person_id: p_pohqyD6d5cYFAvZwtT6Gnm
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1921年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QNYmbn9vFb4bKjB4XwBGnF
          claim_id: c_GaDA8HTnQAxcNJG7xUEcx1
          source_id: s_w1b42ES7DWpxBRgJLrKxb8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bM8c2GQWi61msDKCij8AC4
        subject_person_id: p_pohqyD6d5cYFAvZwtT6Gnm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为中華民國人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ySAYdct99w5kvQg9PLTG4x
          claim_id: c_bM8c2GQWi61msDKCij8AC4
          source_id: s_w1b42ES7DWpxBRgJLrKxb8
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

# 王榮商

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榮商 | accepted |
| birth.date | 1852年 | accepted |
| death.date | 1921年 | accepted |
| bio.summary | CBDB 记载为中華民國人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王榮商（CBDB 61928）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61928&o=json)
