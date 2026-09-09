---
schema: wang-person/v1
id: p_FAWjE7PaLwMDYApRM42Xa9
status: active
merged_into: null
display_name: 王淨慧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PB1jtxaBc7w3azkqUFwuQy
        subject_person_id: p_FAWjE7PaLwMDYApRM42Xa9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淨慧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KP8GQSwnXt9aobZY22rW61
          claim_id: c_PB1jtxaBc7w3azkqUFwuQy
          source_id: s_8DcbS6YpL8oKi6EpKMGRqB
          stance: supports
          locator: CBDB:5185
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（5185）
          source: &a1
            id: s_8DcbS6YpL8oKi6EpKMGRqB
            source_type: api_record
            title: 中国历代人物传记资料库：王淨慧（CBDB 5185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5185&o=json
            external_identifier: CBDB:5185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.465Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5VvNArw3594FCJdd1ULcHw
        subject_person_id: p_FAWjE7PaLwMDYApRM42Xa9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1192年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SgP4aZWnFuHoGyPaezz23f
          claim_id: c_5VvNArw3594FCJdd1ULcHw
          source_id: s_8DcbS6YpL8oKi6EpKMGRqB
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
        id: c_7Bv64tBpZXJvBPHaCQK7X6
        subject_person_id: p_FAWjE7PaLwMDYApRM42Xa9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1266年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NdVCW2GWdVZYrrh91JtzaQ
          claim_id: c_7Bv64tBpZXJvBPHaCQK7X6
          source_id: s_8DcbS6YpL8oKi6EpKMGRqB
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
        id: c_W9gAWyfFuksTMK6SYjZoPU
        subject_person_id: p_FAWjE7PaLwMDYApRM42Xa9
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
        - id: cs_6TFmgX4Jow1LS7LB6JDWUs
          claim_id: c_W9gAWyfFuksTMK6SYjZoPU
          source_id: s_8DcbS6YpL8oKi6EpKMGRqB
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

# 王淨慧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淨慧 | accepted |
| birth.date | 1192年 | accepted |
| death.date | 1266年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王淨慧（CBDB 5185）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5185&o=json)
