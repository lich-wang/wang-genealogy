---
schema: wang-person/v1
id: p_K23baGuNzCVmxSWXhhYJ4B
status: active
merged_into: null
display_name: 王士性
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vgyfT2VMGiqKKzDJqqhPz6
        subject_person_id: p_K23baGuNzCVmxSWXhhYJ4B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士性
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YKtVK1XGusSgS7MsDtPf5W
          claim_id: c_vgyfT2VMGiqKKzDJqqhPz6
          source_id: s_m2HP5AsBU7URfS5L27w4ff
          stance: supports
          locator: CBDB:35066
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35066）
          source: &a1
            id: s_m2HP5AsBU7URfS5L27w4ff
            source_type: api_record
            title: 中国历代人物传记资料库：王士性（CBDB 35066）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35066&o=json
            external_identifier: CBDB:35066
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.115Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_12uPHDHT1RyaGRQztBmnz1
        subject_person_id: p_K23baGuNzCVmxSWXhhYJ4B
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1546年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A7HGvrF2cfCBrHkV7tP7CL
          claim_id: c_12uPHDHT1RyaGRQztBmnz1
          source_id: s_m2HP5AsBU7URfS5L27w4ff
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
        id: c_oD89FrThg9rbsMLM4NHjPa
        subject_person_id: p_K23baGuNzCVmxSWXhhYJ4B
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1598年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_21Lrzb86mr6ENpdXthbek7
          claim_id: c_oD89FrThg9rbsMLM4NHjPa
          source_id: s_m2HP5AsBU7URfS5L27w4ff
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
        id: c_AXkE9BaX6tYSm1AiDVz5eZ
        subject_person_id: p_K23baGuNzCVmxSWXhhYJ4B
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
        - id: cs_NhRCvhiqH9pEzEZRvUgY6j
          claim_id: c_AXkE9BaX6tYSm1AiDVz5eZ
          source_id: s_m2HP5AsBU7URfS5L27w4ff
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

# 王士性

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士性 | accepted |
| birth.date | 1546年 | accepted |
| death.date | 1598年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士性（CBDB 35066）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35066&o=json)
