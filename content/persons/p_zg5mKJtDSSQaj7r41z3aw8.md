---
schema: wang-person/v1
id: p_zg5mKJtDSSQaj7r41z3aw8
status: active
merged_into: null
display_name: 王德沛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1nBAFFJe35NqzHtcwb5nTe
        subject_person_id: p_zg5mKJtDSSQaj7r41z3aw8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德沛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_raauwB736W4H75M8jsEshd
          claim_id: c_1nBAFFJe35NqzHtcwb5nTe
          source_id: s_X9h43zcbgc5tmCjbh4iC4i
          stance: supports
          locator: CBDB:637686
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637686）
          source: &a1
            id: s_X9h43zcbgc5tmCjbh4iC4i
            source_type: api_record
            title: 中国历代人物传记资料库：王德沛（CBDB 637686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637686&o=json
            external_identifier: CBDB:637686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.491Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_s45NDMk868GuipTtqkQtJ7
        subject_person_id: p_zg5mKJtDSSQaj7r41z3aw8
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
        - id: cs_XKNLSwsnRi3K6G9339bwEe
          claim_id: c_s45NDMk868GuipTtqkQtJ7
          source_id: s_X9h43zcbgc5tmCjbh4iC4i
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

# 王德沛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德沛 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德沛（CBDB 637686）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637686&o=json)
