---
schema: wang-person/v1
id: p_Y3bZV4hK2LBNT6fZ5iAzkg
status: active
merged_into: null
display_name: 王昛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pGq8XHWv6znLhMe7nJfaiy
        subject_person_id: p_Y3bZV4hK2LBNT6fZ5iAzkg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mk938awGzBCcJXyHfNjKcZ
          claim_id: c_pGq8XHWv6znLhMe7nJfaiy
          source_id: s_6zW114SrTnYBp87DJyE86t
          stance: supports
          locator: CBDB:551563
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（551563）
          source: &a1
            id: s_6zW114SrTnYBp87DJyE86t
            source_type: api_record
            title: 中国历代人物传记资料库：王昛（CBDB 551563）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551563&o=json
            external_identifier: CBDB:551563
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.611Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_vAuw4Lh1AAnXVccBTnDv7V
        subject_person_id: p_Y3bZV4hK2LBNT6fZ5iAzkg
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1236年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K3C9L6K6sXrb7jqKU2wauQ
          claim_id: c_vAuw4Lh1AAnXVccBTnDv7V
          source_id: s_6zW114SrTnYBp87DJyE86t
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
        id: c_vrdfJKKjbt2zkb1SX5D9Q4
        subject_person_id: p_Y3bZV4hK2LBNT6fZ5iAzkg
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1308年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Kikk4cv8MacFGf8AjvtBuo
          claim_id: c_vrdfJKKjbt2zkb1SX5D9Q4
          source_id: s_6zW114SrTnYBp87DJyE86t
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
        id: c_6Skbc9nwv14HHi991m3m4u
        subject_person_id: p_Y3bZV4hK2LBNT6fZ5iAzkg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为高麗人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UWFbBM1BHtMzHHV9XZX67p
          claim_id: c_6Skbc9nwv14HHi991m3m4u
          source_id: s_6zW114SrTnYBp87DJyE86t
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

# 王昛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昛 | accepted |
| birth.date | 1236年 | accepted |
| death.date | 1308年 | accepted |
| bio.summary | CBDB 记载为高麗人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昛（CBDB 551563）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551563&o=json)
