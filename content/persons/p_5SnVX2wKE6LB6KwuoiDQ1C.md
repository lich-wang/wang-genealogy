---
schema: wang-person/v1
id: p_5SnVX2wKE6LB6KwuoiDQ1C
status: active
merged_into: null
display_name: 王復興
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D7yDfqBnLiaoU665y7zJQh
        subject_person_id: p_5SnVX2wKE6LB6KwuoiDQ1C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王復興
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j59sgwLybAnb8ft6Uv9JAr
          claim_id: c_D7yDfqBnLiaoU665y7zJQh
          source_id: s_7TrshJ1YubDSRjYnSxGQ11
          stance: supports
          locator: CBDB:342460
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342460）
          source: &a1
            id: s_7TrshJ1YubDSRjYnSxGQ11
            source_type: api_record
            title: 中国历代人物传记资料库：王復興（CBDB 342460）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342460&o=json
            external_identifier: CBDB:342460
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.938Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vmSn8fSk4EVqWdCWXXJPtZ
        subject_person_id: p_5SnVX2wKE6LB6KwuoiDQ1C
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
        - id: cs_JL5NCKebjLMRkvDUwfxH5B
          claim_id: c_vmSn8fSk4EVqWdCWXXJPtZ
          source_id: s_7TrshJ1YubDSRjYnSxGQ11
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

# 王復興

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王復興 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王復興（CBDB 342460）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342460&o=json)
