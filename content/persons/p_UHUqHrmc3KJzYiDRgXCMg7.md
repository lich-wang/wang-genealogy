---
schema: wang-person/v1
id: p_UHUqHrmc3KJzYiDRgXCMg7
status: active
merged_into: null
display_name: 王傅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qvC4xGQmxCxPt2x2t1MHNs
        subject_person_id: p_UHUqHrmc3KJzYiDRgXCMg7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HBBvKf4rMceFvLZZ6ScJXy
          claim_id: c_qvC4xGQmxCxPt2x2t1MHNs
          source_id: s_fsRMm8fXNQYG8KCA8hT678
          stance: supports
          locator: CBDB:202284
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202284）
          source: &a1
            id: s_fsRMm8fXNQYG8KCA8hT678
            source_type: api_record
            title: 中国历代人物传记资料库：王傅（CBDB 202284）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202284&o=json
            external_identifier: CBDB:202284
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.736Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8NxMSa93HaUASD5HyAVTtb
        subject_person_id: p_UHUqHrmc3KJzYiDRgXCMg7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1486年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5uDnYbC3GuhfznsLHWUvVd
          claim_id: c_8NxMSa93HaUASD5HyAVTtb
          source_id: s_fsRMm8fXNQYG8KCA8hT678
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
        id: c_hBtJWY2D9BJcwKTCPWURE1
        subject_person_id: p_UHUqHrmc3KJzYiDRgXCMg7
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
        - id: cs_7PxaJLiNeHzKBqdJ3hUnPA
          claim_id: c_hBtJWY2D9BJcwKTCPWURE1
          source_id: s_fsRMm8fXNQYG8KCA8hT678
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

# 王傅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傅 | accepted |
| birth.date | 1486年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王傅（CBDB 202284）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202284&o=json)
