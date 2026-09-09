---
schema: wang-person/v1
id: p_FMXmB2MmUk4FK9xsBPgkTL
status: active
merged_into: null
display_name: 王澈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vgzFJ7JmPmv4bw4SfBjY9M
        subject_person_id: p_FMXmB2MmUk4FK9xsBPgkTL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M7xbZj4LRf66YVHj9SBJkK
          claim_id: c_vgzFJ7JmPmv4bw4SfBjY9M
          source_id: s_MX4N5wv6B9wWJBWsvey5KM
          stance: supports
          locator: CBDB:145283
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145283）
          source: &a1
            id: s_MX4N5wv6B9wWJBWsvey5KM
            source_type: api_record
            title: 中国历代人物传记资料库：王澈（CBDB 145283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145283&o=json
            external_identifier: CBDB:145283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.660Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_X83e4cjfTWB6FKgV9whPbN
        subject_person_id: p_FMXmB2MmUk4FK9xsBPgkTL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 757年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7LXMEz3T8pJ7tvQQcjPUFD
          claim_id: c_X83e4cjfTWB6FKgV9whPbN
          source_id: s_MX4N5wv6B9wWJBWsvey5KM
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
        id: c_f3Vu1fNAkXU4U5RTF1zD2W
        subject_person_id: p_FMXmB2MmUk4FK9xsBPgkTL
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 830年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sqR9UWyUnBxegMso4k4b7V
          claim_id: c_f3Vu1fNAkXU4U5RTF1zD2W
          source_id: s_MX4N5wv6B9wWJBWsvey5KM
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
        id: c_FyQ8NMnriTRL32XgXhQzYi
        subject_person_id: p_FMXmB2MmUk4FK9xsBPgkTL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7pY2a5DMajSDCg8xNxDQQh
          claim_id: c_FyQ8NMnriTRL32XgXhQzYi
          source_id: s_MX4N5wv6B9wWJBWsvey5KM
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

# 王澈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澈 | accepted |
| birth.date | 757年 | accepted |
| death.date | 830年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澈（CBDB 145283）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145283&o=json)
