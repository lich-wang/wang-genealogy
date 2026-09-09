---
schema: wang-person/v1
id: p_C9cGcDit6NRvdLZ3oy6Mbe
status: active
merged_into: null
display_name: 王一治
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BjeRV96HfJYuGyiLFJFW82
        subject_person_id: p_C9cGcDit6NRvdLZ3oy6Mbe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一治
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LFZknJJspFx2K4cSBhwzvH
          claim_id: c_BjeRV96HfJYuGyiLFJFW82
          source_id: s_ojc1Nx2sKvUhzNK6QBShJA
          stance: supports
          locator: CBDB:205461
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205461）
          source: &a1
            id: s_ojc1Nx2sKvUhzNK6QBShJA
            source_type: api_record
            title: 中国历代人物传记资料库：王一治（CBDB 205461）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205461&o=json
            external_identifier: CBDB:205461
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.862Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xVCgvFF2moBHYJJe3YfHZW
        subject_person_id: p_C9cGcDit6NRvdLZ3oy6Mbe
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1517年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UrXQcoAWdKUx2pR6un4Jc6
          claim_id: c_xVCgvFF2moBHYJJe3YfHZW
          source_id: s_ojc1Nx2sKvUhzNK6QBShJA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_m9255mPJtLhowAtKBYHKJi
        subject_person_id: p_C9cGcDit6NRvdLZ3oy6Mbe
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
        - id: cs_1qX8E9AAVviSLKsW1GdC62
          claim_id: c_m9255mPJtLhowAtKBYHKJi
          source_id: s_ojc1Nx2sKvUhzNK6QBShJA
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

# 王一治

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一治 | accepted |
| birth.date | 1517年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一治（CBDB 205461）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205461&o=json)
