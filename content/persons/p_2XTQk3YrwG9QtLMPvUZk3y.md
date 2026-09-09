---
schema: wang-person/v1
id: p_2XTQk3YrwG9QtLMPvUZk3y
status: active
merged_into: null
display_name: 王仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ng4xmVdSsPkbReKZpr47Qi
        subject_person_id: p_2XTQk3YrwG9QtLMPvUZk3y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QY1HYQ3tK6GT6jKGD7m4oM
          claim_id: c_Ng4xmVdSsPkbReKZpr47Qi
          source_id: s_3Dqe9o1m9AQCcCoNjJfq82
          stance: supports
          locator: CBDB:275665
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（275665）
          source: &a1
            id: s_3Dqe9o1m9AQCcCoNjJfq82
            source_type: api_record
            title: 中国历代人物传记资料库：王仁（CBDB 275665）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275665&o=json
            external_identifier: CBDB:275665
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.929Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aPfocmiU27bYsTd91WFERC
        subject_person_id: p_2XTQk3YrwG9QtLMPvUZk3y
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
        - id: cs_1jDVRHoUk8VEFMN4qqUjFV
          claim_id: c_aPfocmiU27bYsTd91WFERC
          source_id: s_3Dqe9o1m9AQCcCoNjJfq82
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

# 王仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仁（CBDB 275665）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275665&o=json)
