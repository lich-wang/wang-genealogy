---
schema: wang-person/v1
id: p_4jKuGtJAUuG7gph2rs2aK1
status: active
merged_into: null
display_name: 王珮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TEdXQKXzuUCgLSWW8C7z3K
        subject_person_id: p_4jKuGtJAUuG7gph2rs2aK1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GQ5DZb8D5ZEcvEL1teQ7AL
          claim_id: c_TEdXQKXzuUCgLSWW8C7z3K
          source_id: s_LPM3BL4hXCc8TfpV6QnDs8
          stance: supports
          locator: CBDB:454810
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（454810）
          source: &a1
            id: s_LPM3BL4hXCc8TfpV6QnDs8
            source_type: api_record
            title: 中国历代人物传记资料库：王珮（CBDB 454810）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454810&o=json
            external_identifier: CBDB:454810
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.477Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ub17qpzhDreAUTZUd7xHYR
        subject_person_id: p_4jKuGtJAUuG7gph2rs2aK1
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
        - id: cs_dWyahZa3rS6i6cFyoJdHvQ
          claim_id: c_ub17qpzhDreAUTZUd7xHYR
          source_id: s_LPM3BL4hXCc8TfpV6QnDs8
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

# 王珮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珮 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珮（CBDB 454810）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454810&o=json)
