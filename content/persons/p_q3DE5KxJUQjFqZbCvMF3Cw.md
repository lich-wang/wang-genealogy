---
schema: wang-person/v1
id: p_q3DE5KxJUQjFqZbCvMF3Cw
status: active
merged_into: null
display_name: 王燕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3AEi9eKyxd8DAXqFWBu3QF
        subject_person_id: p_q3DE5KxJUQjFqZbCvMF3Cw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FHSYSMNB6N8WZTbL8C1oHq
          claim_id: c_3AEi9eKyxd8DAXqFWBu3QF
          source_id: s_5xjn5Q6rLs5sbdJhQ5qbmp
          stance: supports
          locator: CBDB:471292
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（471292）
          source: &a1
            id: s_5xjn5Q6rLs5sbdJhQ5qbmp
            source_type: api_record
            title: 中国历代人物传记资料库：王燕（CBDB 471292）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471292&o=json
            external_identifier: CBDB:471292
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.181Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3DFgHkQrqtTFWLnHKuYWEf
        subject_person_id: p_q3DE5KxJUQjFqZbCvMF3Cw
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
        - id: cs_gX2kwQCo4f6C4EqUc4iWZD
          claim_id: c_3DFgHkQrqtTFWLnHKuYWEf
          source_id: s_5xjn5Q6rLs5sbdJhQ5qbmp
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

# 王燕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王燕 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王燕（CBDB 471292）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471292&o=json)
