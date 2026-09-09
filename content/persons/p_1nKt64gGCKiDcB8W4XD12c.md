---
schema: wang-person/v1
id: p_1nKt64gGCKiDcB8W4XD12c
status: active
merged_into: null
display_name: 王恩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AB9WGXk9jNBfRsSfDjeFpJ
        subject_person_id: p_1nKt64gGCKiDcB8W4XD12c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_22gLHCq781bMnerEfwc6n4
          claim_id: c_AB9WGXk9jNBfRsSfDjeFpJ
          source_id: s_UxH42YMEfHKyZzwykoMUCQ
          stance: supports
          locator: CBDB:22181
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22181）
          source: &a1
            id: s_UxH42YMEfHKyZzwykoMUCQ
            source_type: api_record
            title: 中国历代人物传记资料库：王恩（CBDB 22181）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22181&o=json
            external_identifier: CBDB:22181
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.842Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_72MQiX2WdhMqXnyuP7s6rG
        subject_person_id: p_1nKt64gGCKiDcB8W4XD12c
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
        - id: cs_wC4QePL1KhK4pwYtcnZRq2
          claim_id: c_72MQiX2WdhMqXnyuP7s6rG
          source_id: s_UxH42YMEfHKyZzwykoMUCQ
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

# 王恩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恩 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恩（CBDB 22181）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22181&o=json)
