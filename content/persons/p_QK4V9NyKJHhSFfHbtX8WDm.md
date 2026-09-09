---
schema: wang-person/v1
id: p_QK4V9NyKJHhSFfHbtX8WDm
status: active
merged_into: null
display_name: 王儔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LHPeZikmKJGxMg6QP1Fk9g
        subject_person_id: p_QK4V9NyKJHhSFfHbtX8WDm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Gn43Ly6wrvKknnhsNYijzj
          claim_id: c_LHPeZikmKJGxMg6QP1Fk9g
          source_id: s_dVYeEt87LddpNhscu6kf4F
          stance: supports
          locator: CBDB:37881
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37881）
          source: &a1
            id: s_dVYeEt87LddpNhscu6kf4F
            source_type: api_record
            title: 中国历代人物传记资料库：王儔（CBDB 37881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37881&o=json
            external_identifier: CBDB:37881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.286Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Wi1DXkHpcQvHEWJ7KKZe64
        subject_person_id: p_QK4V9NyKJHhSFfHbtX8WDm
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1130年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X7ZouhryW1QqJAC4XPXunK
          claim_id: c_Wi1DXkHpcQvHEWJ7KKZe64
          source_id: s_dVYeEt87LddpNhscu6kf4F
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
        id: c_KNw3iQoqHbSCtHtA8DEQDJ
        subject_person_id: p_QK4V9NyKJHhSFfHbtX8WDm
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
        - id: cs_aLbcrb1hxA9LZP14DHMKWr
          claim_id: c_KNw3iQoqHbSCtHtA8DEQDJ
          source_id: s_dVYeEt87LddpNhscu6kf4F
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

# 王儔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儔 | accepted |
| death.date | 1130年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王儔（CBDB 37881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37881&o=json)
