---
schema: wang-person/v1
id: p_qT1vgpWr7sKJGsYbMJQxoR
status: active
merged_into: null
display_name: 王象某
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Yaj3WDGG6uhGKG97AGg9Cy
        subject_person_id: p_qT1vgpWr7sKJGsYbMJQxoR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象某
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QCvYc7hfYQcrWWhJnVVNhF
          claim_id: c_Yaj3WDGG6uhGKG97AGg9Cy
          source_id: s_VggVcAoCKh2D29QtBHVfDZ
          stance: supports
          locator: CBDB:470390
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（470390）
          source: &a1
            id: s_VggVcAoCKh2D29QtBHVfDZ
            source_type: api_record
            title: 中国历代人物传记资料库：王象某（CBDB 470390）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=470390&o=json
            external_identifier: CBDB:470390
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.148Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KqhC9w5Vmyo1KLTooGoneg
        subject_person_id: p_qT1vgpWr7sKJGsYbMJQxoR
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
        - id: cs_K7L5Gv11W8AALvqHxfhXo8
          claim_id: c_KqhC9w5Vmyo1KLTooGoneg
          source_id: s_VggVcAoCKh2D29QtBHVfDZ
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

# 王象某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王象某 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王象某（CBDB 470390）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=470390&o=json)
