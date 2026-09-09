---
schema: wang-person/v1
id: p_8d76gJay11NRoC6JqPciri
status: active
merged_into: null
display_name: 王景
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xZJA1ZMsZoZfSw2oi4byxZ
        subject_person_id: p_8d76gJay11NRoC6JqPciri
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AJqaZTAN9uEjZBGCKQx1sU
          claim_id: c_xZJA1ZMsZoZfSw2oi4byxZ
          source_id: s_LLuAxyJhBi3Y6P9yCBgLxr
          stance: supports
          locator: CBDB:66759
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（66759）
          source: &a1
            id: s_LLuAxyJhBi3Y6P9yCBgLxr
            source_type: api_record
            title: 中国历代人物传记资料库：王景（CBDB 66759）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66759&o=json
            external_identifier: CBDB:66759
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.965Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5ea4TfM4ZhGyJLm2HH2uCW
        subject_person_id: p_8d76gJay11NRoC6JqPciri
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1347年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BPz3V6tvKbKGBHQzxwML4K
          claim_id: c_5ea4TfM4ZhGyJLm2HH2uCW
          source_id: s_LLuAxyJhBi3Y6P9yCBgLxr
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
        id: c_Qu5DDdAvJveyiAmCsnp827
        subject_person_id: p_8d76gJay11NRoC6JqPciri
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1408年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Kk5yYrJuxjWT7SKMCmqSr6
          claim_id: c_Qu5DDdAvJveyiAmCsnp827
          source_id: s_LLuAxyJhBi3Y6P9yCBgLxr
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
        id: c_XGRGLdP9vg52Z1PCJHqZ2c
        subject_person_id: p_8d76gJay11NRoC6JqPciri
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
        - id: cs_U7hcU4sH5u6ZbAE4agvXDF
          claim_id: c_XGRGLdP9vg52Z1PCJHqZ2c
          source_id: s_LLuAxyJhBi3Y6P9yCBgLxr
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

# 王景

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景 | accepted |
| birth.date | 1347年 | accepted |
| death.date | 1408年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景（CBDB 66759）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66759&o=json)
