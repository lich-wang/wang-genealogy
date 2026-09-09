---
schema: wang-person/v1
id: p_TK8KcTuq99fWvYBLqN21gr
status: active
merged_into: null
display_name: 王鍾靈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yKgFJr5Nc6RXM5SyVazJVv
        subject_person_id: p_TK8KcTuq99fWvYBLqN21gr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍾靈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mAzsRd2Lrw82xMSUXHLj4j
          claim_id: c_yKgFJr5Nc6RXM5SyVazJVv
          source_id: s_hjQ3sHS5Cs694otXPQKH8A
          stance: supports
          locator: CBDB:343775
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343775）
          source: &a1
            id: s_hjQ3sHS5Cs694otXPQKH8A
            source_type: api_record
            title: 中国历代人物传记资料库：王鍾靈（CBDB 343775）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343775&o=json
            external_identifier: CBDB:343775
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.492Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DV3xq76MPGF8CjP1KkdUfD
        subject_person_id: p_TK8KcTuq99fWvYBLqN21gr
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
        - id: cs_5hxaTbC2F9an7CGPXqR1H7
          claim_id: c_DV3xq76MPGF8CjP1KkdUfD
          source_id: s_hjQ3sHS5Cs694otXPQKH8A
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

# 王鍾靈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍾靈 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鍾靈（CBDB 343775）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343775&o=json)
