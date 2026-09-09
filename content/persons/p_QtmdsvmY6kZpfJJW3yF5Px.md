---
schema: wang-person/v1
id: p_QtmdsvmY6kZpfJJW3yF5Px
status: active
merged_into: null
display_name: 王詠春
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qKm4nEdA8ESMT1DR7Fg8Zj
        subject_person_id: p_QtmdsvmY6kZpfJJW3yF5Px
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詠春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_csG2N6ziup3CyYe6McTK4t
          claim_id: c_qKm4nEdA8ESMT1DR7Fg8Zj
          source_id: s_7NHdKYbTf8pRH91PpcJVe6
          stance: supports
          locator: CBDB:341671
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341671）
          source: &a1
            id: s_7NHdKYbTf8pRH91PpcJVe6
            source_type: api_record
            title: 中国历代人物传记资料库：王詠春（CBDB 341671）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341671&o=json
            external_identifier: CBDB:341671
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.637Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_idRpaWuuWfQjw1ieVy6Dy8
        subject_person_id: p_QtmdsvmY6kZpfJJW3yF5Px
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
        - id: cs_wi1V5w7Rdp5y5kkCVo6RQv
          claim_id: c_idRpaWuuWfQjw1ieVy6Dy8
          source_id: s_7NHdKYbTf8pRH91PpcJVe6
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

# 王詠春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詠春 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王詠春（CBDB 341671）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341671&o=json)
