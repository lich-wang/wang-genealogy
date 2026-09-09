---
schema: wang-person/v1
id: p_LP5Te49DqWtcxp64i1ffkA
status: active
merged_into: null
display_name: 王性
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qdPzFHV3FSCTCQzZcUoAeY
        subject_person_id: p_LP5Te49DqWtcxp64i1ffkA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王性
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GQ1m1HtZBXozP8ta9fzJx9
          claim_id: c_qdPzFHV3FSCTCQzZcUoAeY
          source_id: s_6u1AgQ2dc6UbZ7HeoqgmJQ
          stance: supports
          locator: CBDB:489683
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（489683）
          source: &a1
            id: s_6u1AgQ2dc6UbZ7HeoqgmJQ
            source_type: api_record
            title: 中国历代人物传记资料库：王性（CBDB 489683）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489683&o=json
            external_identifier: CBDB:489683
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.069Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qWsvBMB3x3BQAasV5fLK94
        subject_person_id: p_LP5Te49DqWtcxp64i1ffkA
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
        - id: cs_oGvieg7bkgDz8Z2S9sBJU8
          claim_id: c_qWsvBMB3x3BQAasV5fLK94
          source_id: s_6u1AgQ2dc6UbZ7HeoqgmJQ
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

# 王性

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王性 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王性（CBDB 489683）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489683&o=json)
