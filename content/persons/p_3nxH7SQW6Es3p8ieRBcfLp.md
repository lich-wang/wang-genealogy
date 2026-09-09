---
schema: wang-person/v1
id: p_3nxH7SQW6Es3p8ieRBcfLp
status: active
merged_into: null
display_name: 王彭年
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ahsEynm8H4HLV2XM1pzsJ6
        subject_person_id: p_3nxH7SQW6Es3p8ieRBcfLp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彭年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h9UCe4wB8Z8yHUojU4uxZd
          claim_id: c_ahsEynm8H4HLV2XM1pzsJ6
          source_id: s_vN26Z5jWReHnjfB1EEP49G
          stance: supports
          locator: CBDB:701049
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（701049）
          source: &a1
            id: s_vN26Z5jWReHnjfB1EEP49G
            source_type: api_record
            title: 中国历代人物传记资料库：王彭年（CBDB 701049）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701049&o=json
            external_identifier: CBDB:701049
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.793Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yutbEe4zGMo4ry839qegwr
        subject_person_id: p_3nxH7SQW6Es3p8ieRBcfLp
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
        - id: cs_nBsYvQdF9v31mgx6w22CvK
          claim_id: c_yutbEe4zGMo4ry839qegwr
          source_id: s_vN26Z5jWReHnjfB1EEP49G
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

# 王彭年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彭年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彭年（CBDB 701049）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701049&o=json)
