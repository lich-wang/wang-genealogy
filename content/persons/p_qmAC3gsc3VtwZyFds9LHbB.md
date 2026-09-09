---
schema: wang-person/v1
id: p_qmAC3gsc3VtwZyFds9LHbB
status: active
merged_into: null
display_name: 王企
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_k6GEHDG5dMyZeXJkPERXb5
        subject_person_id: p_qmAC3gsc3VtwZyFds9LHbB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王企
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RLfgR3YYh15xr2iTKhZCBk
          claim_id: c_k6GEHDG5dMyZeXJkPERXb5
          source_id: s_PPYzsfTL9LZ9tK28DdKZkb
          stance: supports
          locator: CBDB:100651
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100651）
          source: &a1
            id: s_PPYzsfTL9LZ9tK28DdKZkb
            source_type: api_record
            title: 中国历代人物传记资料库：王企（CBDB 100651）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100651&o=json
            external_identifier: CBDB:100651
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.332Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7VFoBf4n4TEn9ntPrwiQkA
        subject_person_id: p_qmAC3gsc3VtwZyFds9LHbB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1304年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_32ibvj9VP9c7MmidYBje9n
          claim_id: c_7VFoBf4n4TEn9ntPrwiQkA
          source_id: s_PPYzsfTL9LZ9tK28DdKZkb
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
        id: c_TJSHb1DHNqCvsjELE6oDek
        subject_person_id: p_qmAC3gsc3VtwZyFds9LHbB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1350年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HFi89uY19n2Qz7MnokYf5r
          claim_id: c_TJSHb1DHNqCvsjELE6oDek
          source_id: s_PPYzsfTL9LZ9tK28DdKZkb
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
        id: c_goN8sk4cFS17U7veEWtBGN
        subject_person_id: p_qmAC3gsc3VtwZyFds9LHbB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FaBCnZjg6RhqpGRZcQd9t5
          claim_id: c_goN8sk4cFS17U7veEWtBGN
          source_id: s_PPYzsfTL9LZ9tK28DdKZkb
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

# 王企

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王企 | accepted |
| birth.date | 1304年 | accepted |
| death.date | 1350年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王企（CBDB 100651）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100651&o=json)
