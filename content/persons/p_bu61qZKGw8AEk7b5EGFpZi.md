---
schema: wang-person/v1
id: p_bu61qZKGw8AEk7b5EGFpZi
status: active
merged_into: null
display_name: 王平戎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5vXvPpsc7fSUaP6s3byG7i
        subject_person_id: p_bu61qZKGw8AEk7b5EGFpZi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王平戎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PJ4QfxN2FJx7FQoxzdBcdZ
          claim_id: c_5vXvPpsc7fSUaP6s3byG7i
          source_id: s_r7XT2fecLHAwNGiQoW31UM
          stance: supports
          locator: CBDB:637406
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637406）
          source: &a1
            id: s_r7XT2fecLHAwNGiQoW31UM
            source_type: api_record
            title: 中国历代人物传记资料库：王平戎（CBDB 637406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637406&o=json
            external_identifier: CBDB:637406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.308Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YbADHgzEpas4FEvBXJoWNe
        subject_person_id: p_bu61qZKGw8AEk7b5EGFpZi
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
        - id: cs_XGFV722u1atfnmNqtJB6FS
          claim_id: c_YbADHgzEpas4FEvBXJoWNe
          source_id: s_r7XT2fecLHAwNGiQoW31UM
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

# 王平戎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王平戎 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王平戎（CBDB 637406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637406&o=json)
