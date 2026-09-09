---
schema: wang-person/v1
id: p_9DwGjPApdqe1zoHq9wJJUF
status: active
merged_into: null
display_name: 王國祥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GTUL4KHUaFhve6KPzm1UVz
        subject_person_id: p_9DwGjPApdqe1zoHq9wJJUF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EWxYL2yJCemLgVYNRe1DP8
          claim_id: c_GTUL4KHUaFhve6KPzm1UVz
          source_id: s_fsjy4Cq1Cw1G8jKyW7X7fn
          stance: supports
          locator: CBDB:255590
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（255590）
          source: &a1
            id: s_fsjy4Cq1Cw1G8jKyW7X7fn
            source_type: api_record
            title: 中国历代人物传记资料库：王國祥（CBDB 255590）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255590&o=json
            external_identifier: CBDB:255590
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.346Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vqhkKgtkteV5FD6g96R29T
        subject_person_id: p_9DwGjPApdqe1zoHq9wJJUF
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
        - id: cs_1s66ozZfxeNj8UK2PiX7U9
          claim_id: c_vqhkKgtkteV5FD6g96R29T
          source_id: s_fsjy4Cq1Cw1G8jKyW7X7fn
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

# 王國祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國祥 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國祥（CBDB 255590）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255590&o=json)
