---
schema: wang-person/v1
id: p_3MubfiCeEP4Z7c64cmDSqH
status: active
merged_into: null
display_name: 王斗機
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MSMQ3xviEB6V3MA6m1XjEW
        subject_person_id: p_3MubfiCeEP4Z7c64cmDSqH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斗機
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1DuGbp5X3LV2dzTeEbfWP4
          claim_id: c_MSMQ3xviEB6V3MA6m1XjEW
          source_id: s_aD7Dm1h9EjjuNGTN3VM18F
          stance: supports
          locator: CBDB:342703
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342703）
          source: &a1
            id: s_aD7Dm1h9EjjuNGTN3VM18F
            source_type: api_record
            title: 中国历代人物传记资料库：王斗機（CBDB 342703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342703&o=json
            external_identifier: CBDB:342703
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.028Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6cwzKSTxtWp9acTaGR5eyK
        subject_person_id: p_3MubfiCeEP4Z7c64cmDSqH
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
        - id: cs_DmzKbtNeTe2HHm2WybLE7Y
          claim_id: c_6cwzKSTxtWp9acTaGR5eyK
          source_id: s_aD7Dm1h9EjjuNGTN3VM18F
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

# 王斗機

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王斗機 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王斗機（CBDB 342703）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342703&o=json)
