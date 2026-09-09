---
schema: wang-person/v1
id: p_7DvAV4NZwhgvkYo2NFGPz1
status: active
merged_into: null
display_name: 王謨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AkVXtz4LoAqqD3H9JT7AVb
        subject_person_id: p_7DvAV4NZwhgvkYo2NFGPz1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CCHMDJ895nkhb51nyfEiN4
          claim_id: c_AkVXtz4LoAqqD3H9JT7AVb
          source_id: s_iVWHgoCbJ36o6UkwJ3F9kL
          stance: supports
          locator: CBDB:684537
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（684537）
          source: &a1
            id: s_iVWHgoCbJ36o6UkwJ3F9kL
            source_type: api_record
            title: 中国历代人物传记资料库：王謨（CBDB 684537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=684537&o=json
            external_identifier: CBDB:684537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.307Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V6dU2qMjcUZ9N9kjVLi9Wj
        subject_person_id: p_7DvAV4NZwhgvkYo2NFGPz1
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
        - id: cs_F2vvWNE6EhmMTFpvGDfdxc
          claim_id: c_V6dU2qMjcUZ9N9kjVLi9Wj
          source_id: s_iVWHgoCbJ36o6UkwJ3F9kL
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

# 王謨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王謨 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王謨（CBDB 684537）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=684537&o=json)
