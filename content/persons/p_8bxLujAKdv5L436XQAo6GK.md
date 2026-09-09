---
schema: wang-person/v1
id: p_8bxLujAKdv5L436XQAo6GK
status: active
merged_into: null
display_name: 王弘義
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_m2gA6bwZVyQC8cVyGvucg3
        subject_person_id: p_8bxLujAKdv5L436XQAo6GK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WNKJfXmMKhii3wHkFGMjZ7
          claim_id: c_m2gA6bwZVyQC8cVyGvucg3
          source_id: s_1wGUKgXTHMcKJKZcCMMFzQ
          stance: supports
          locator: CBDB:175646
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175646）
          source: &a1
            id: s_1wGUKgXTHMcKJKZcCMMFzQ
            source_type: api_record
            title: 中国历代人物传记资料库：王弘義（CBDB 175646）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175646&o=json
            external_identifier: CBDB:175646
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.043Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_nKEGmpTYxMGV6FZeFQAYWD
        subject_person_id: p_8bxLujAKdv5L436XQAo6GK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 595年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4natYWsVw4iYtxFyHmDJQi
          claim_id: c_nKEGmpTYxMGV6FZeFQAYWD
          source_id: s_1wGUKgXTHMcKJKZcCMMFzQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NaFK2Ebg9drf8aonsgMCRc
        subject_person_id: p_8bxLujAKdv5L436XQAo6GK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为南北朝人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WtLYFhhU9vyWyZ8mX7fh56
          claim_id: c_NaFK2Ebg9drf8aonsgMCRc
          source_id: s_1wGUKgXTHMcKJKZcCMMFzQ
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

# 王弘義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弘義 | accepted |
| death.date | 595年 | accepted |
| bio.summary | CBDB 记载为南北朝人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王弘義（CBDB 175646）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175646&o=json)
