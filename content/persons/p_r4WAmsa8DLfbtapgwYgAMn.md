---
schema: wang-person/v1
id: p_r4WAmsa8DLfbtapgwYgAMn
status: active
merged_into: null
display_name: 王用矛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VjsqaX7Gr7acGwwxQNJhwi
        subject_person_id: p_r4WAmsa8DLfbtapgwYgAMn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用矛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XsEmbAxvv6rAh55DTXuLzM
          claim_id: c_VjsqaX7Gr7acGwwxQNJhwi
          source_id: s_H6oVQ1B53MPBAHvdEHh23X
          stance: supports
          locator: CBDB:639472
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639472）
          source: &a1
            id: s_H6oVQ1B53MPBAHvdEHh23X
            source_type: api_record
            title: 中国历代人物传记资料库：王用矛（CBDB 639472）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639472&o=json
            external_identifier: CBDB:639472
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.944Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DZuXirCSCWYGcSyAoPWePi
        subject_person_id: p_r4WAmsa8DLfbtapgwYgAMn
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
        - id: cs_fSMzSFWtkhMK45Fczc6XNx
          claim_id: c_DZuXirCSCWYGcSyAoPWePi
          source_id: s_H6oVQ1B53MPBAHvdEHh23X
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

# 王用矛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用矛 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王用矛（CBDB 639472）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639472&o=json)
