---
schema: wang-person/v1
id: p_vFLWfzBg9b8Q6PZLkFhwVr
status: active
merged_into: null
display_name: 王原
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_37D9PyjTSgo4L63utgQY1o
        subject_person_id: p_vFLWfzBg9b8Q6PZLkFhwVr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王原
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XgSsTv32GiTgF6EgJbG85H
          claim_id: c_37D9PyjTSgo4L63utgQY1o
          source_id: s_TXgks3sAWAAsH3ZjmG1yEG
          stance: supports
          locator: CBDB:303175
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（303175）
          source: &a1
            id: s_TXgks3sAWAAsH3ZjmG1yEG
            source_type: api_record
            title: 中国历代人物传记资料库：王原（CBDB 303175）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303175&o=json
            external_identifier: CBDB:303175
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.675Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ThmLR3HgYJHE2FTNwmCbpE
        subject_person_id: p_vFLWfzBg9b8Q6PZLkFhwVr
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
        - id: cs_uBuJ2QBJ6p5Q4Yfpo14rEv
          claim_id: c_ThmLR3HgYJHE2FTNwmCbpE
          source_id: s_TXgks3sAWAAsH3ZjmG1yEG
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

# 王原

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王原 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王原（CBDB 303175）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303175&o=json)
