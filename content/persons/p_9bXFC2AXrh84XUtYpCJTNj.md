---
schema: wang-person/v1
id: p_9bXFC2AXrh84XUtYpCJTNj
status: active
merged_into: null
display_name: 王汝瑤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_76KQruUYVEAV9L2CnhN9MY
        subject_person_id: p_9bXFC2AXrh84XUtYpCJTNj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝瑤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6AFBMFvR427FmMV2u1V1mN
          claim_id: c_76KQruUYVEAV9L2CnhN9MY
          source_id: s_YhgMHEdh2XFD8Ea1SDSX7v
          stance: supports
          locator: CBDB:71623
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71623）
          source: &a1
            id: s_YhgMHEdh2XFD8Ea1SDSX7v
            source_type: api_record
            title: 中国历代人物传记资料库：王汝瑤（CBDB 71623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71623&o=json
            external_identifier: CBDB:71623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.791Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zMP5kUyQW6Z8r9YxdQeLYW
        subject_person_id: p_9bXFC2AXrh84XUtYpCJTNj
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1757年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QVAHDTuQmGjFqNwSL9L6ur
          claim_id: c_zMP5kUyQW6Z8r9YxdQeLYW
          source_id: s_YhgMHEdh2XFD8Ea1SDSX7v
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
        id: c_j7cRJgbNGGeJQoQs4TNWn8
        subject_person_id: p_9bXFC2AXrh84XUtYpCJTNj
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
        - id: cs_k9PvMjJVS8xgYsWbqAq8Vi
          claim_id: c_j7cRJgbNGGeJQoQs4TNWn8
          source_id: s_YhgMHEdh2XFD8Ea1SDSX7v
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

# 王汝瑤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝瑤 | accepted |
| birth.date | 1757年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝瑤（CBDB 71623）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71623&o=json)
