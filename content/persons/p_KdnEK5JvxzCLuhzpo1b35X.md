---
schema: wang-person/v1
id: p_KdnEK5JvxzCLuhzpo1b35X
status: active
merged_into: null
display_name: 王鈇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y9NADMAh6L7jWWt7ZFEWta
        subject_person_id: p_KdnEK5JvxzCLuhzpo1b35X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鈇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KrDSUzGkYJgdBumF5WkkYS
          claim_id: c_Y9NADMAh6L7jWWt7ZFEWta
          source_id: s_PFzSq6kQwtCdVXYvMpdpPB
          stance: supports
          locator: CBDB:67912
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67912）
          source: &a1
            id: s_PFzSq6kQwtCdVXYvMpdpPB
            source_type: api_record
            title: 中国历代人物传记资料库：王鈇（CBDB 67912）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67912&o=json
            external_identifier: CBDB:67912
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.029Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_JZp2nTqK4DCBcHBTG8HweJ
        subject_person_id: p_KdnEK5JvxzCLuhzpo1b35X
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1514年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8Au9jyHzJ8kBXXzL8ytzPi
          claim_id: c_JZp2nTqK4DCBcHBTG8HweJ
          source_id: s_PFzSq6kQwtCdVXYvMpdpPB
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
        id: c_XNUvmtHNy8pbaHAnzXpWG6
        subject_person_id: p_KdnEK5JvxzCLuhzpo1b35X
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1555年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PBbM6zovNDgDH38zAyhEKg
          claim_id: c_XNUvmtHNy8pbaHAnzXpWG6
          source_id: s_PFzSq6kQwtCdVXYvMpdpPB
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
        id: c_sRywHsWdtMbioB7wT3pgPQ
        subject_person_id: p_KdnEK5JvxzCLuhzpo1b35X
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
        - id: cs_2PZ6HSigp1qRqkwbZKWhHv
          claim_id: c_sRywHsWdtMbioB7wT3pgPQ
          source_id: s_PFzSq6kQwtCdVXYvMpdpPB
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

# 王鈇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鈇 | accepted |
| birth.date | 1514年 | accepted |
| death.date | 1555年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鈇（CBDB 67912）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67912&o=json)
