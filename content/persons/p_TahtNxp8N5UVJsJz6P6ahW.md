---
schema: wang-person/v1
id: p_TahtNxp8N5UVJsJz6P6ahW
status: active
merged_into: null
display_name: 王文淵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uCLns7ewh1of9HV4xDZ4ZE
        subject_person_id: p_TahtNxp8N5UVJsJz6P6ahW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文淵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gz5vvhQbRV7d7c3KjnQC3q
          claim_id: c_uCLns7ewh1of9HV4xDZ4ZE
          source_id: s_AQfUgfq9Ldc4VDh1AL6RiZ
          stance: supports
          locator: CBDB:101095
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101095）
          source: &a1
            id: s_AQfUgfq9Ldc4VDh1AL6RiZ
            source_type: api_record
            title: 中国历代人物传记资料库：王文淵（CBDB 101095）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101095&o=json
            external_identifier: CBDB:101095
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.686Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1kva9Fe52QoE61gNnukgfq
        subject_person_id: p_TahtNxp8N5UVJsJz6P6ahW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1255年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g5SntEaRWPhtV5BHTD423w
          claim_id: c_1kva9Fe52QoE61gNnukgfq
          source_id: s_AQfUgfq9Ldc4VDh1AL6RiZ
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
        id: c_iJqM4dH7trhrevYQKLaAhb
        subject_person_id: p_TahtNxp8N5UVJsJz6P6ahW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1314年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EU28fy5SKQ56o2XzCH1gBj
          claim_id: c_iJqM4dH7trhrevYQKLaAhb
          source_id: s_AQfUgfq9Ldc4VDh1AL6RiZ
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
        id: c_5sRRD7TM5q8vsp53TKyyiT
        subject_person_id: p_TahtNxp8N5UVJsJz6P6ahW
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
        - id: cs_kgsRV6SFHB9ygXZc1dzw2G
          claim_id: c_5sRRD7TM5q8vsp53TKyyiT
          source_id: s_AQfUgfq9Ldc4VDh1AL6RiZ
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

# 王文淵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文淵 | accepted |
| birth.date | 1255年 | accepted |
| death.date | 1314年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文淵（CBDB 101095）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101095&o=json)
