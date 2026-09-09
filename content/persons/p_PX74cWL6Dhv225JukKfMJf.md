---
schema: wang-person/v1
id: p_PX74cWL6Dhv225JukKfMJf
status: active
merged_into: null
display_name: 王一良
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZvCgaKAT9FwT1vPfWXPjN9
        subject_person_id: p_PX74cWL6Dhv225JukKfMJf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XTL3viLCNr1LC9M2M5mJQs
          claim_id: c_ZvCgaKAT9FwT1vPfWXPjN9
          source_id: s_EM1Cqj7uHZtJJk8LMYWc6M
          stance: supports
          locator: CBDB:635623
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635623）
          source: &a1
            id: s_EM1Cqj7uHZtJJk8LMYWc6M
            source_type: api_record
            title: 中国历代人物传记资料库：王一良（CBDB 635623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635623&o=json
            external_identifier: CBDB:635623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.741Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1DbaCQs9ZMYhAMQYKdaem1
        subject_person_id: p_PX74cWL6Dhv225JukKfMJf
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
        - id: cs_c1UwweN68WdpuqHPKZ7vV4
          claim_id: c_1DbaCQs9ZMYhAMQYKdaem1
          source_id: s_EM1Cqj7uHZtJJk8LMYWc6M
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

# 王一良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一良 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一良（CBDB 635623）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635623&o=json)
