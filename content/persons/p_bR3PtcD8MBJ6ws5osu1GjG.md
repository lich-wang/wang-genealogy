---
schema: wang-person/v1
id: p_bR3PtcD8MBJ6ws5osu1GjG
status: active
merged_into: null
display_name: 王慥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J9K7dq8Aiu62EiQGQqZFb6
        subject_person_id: p_bR3PtcD8MBJ6ws5osu1GjG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CSYd8Qrkdz9ViGH4kifNMk
          claim_id: c_J9K7dq8Aiu62EiQGQqZFb6
          source_id: s_BUtN6XDYuxbHpyAHagPwJn
          stance: supports
          locator: CBDB:16694
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（16694）
          source: &a1
            id: s_BUtN6XDYuxbHpyAHagPwJn
            source_type: api_record
            title: 中国历代人物传记资料库：王慥（CBDB 16694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16694&o=json
            external_identifier: CBDB:16694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.653Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w2K9AxMm8HTTttNcxTcvkc
        subject_person_id: p_bR3PtcD8MBJ6ws5osu1GjG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RAA2UW6dpoir64iuBKLpo3
          claim_id: c_w2K9AxMm8HTTttNcxTcvkc
          source_id: s_BUtN6XDYuxbHpyAHagPwJn
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

# 王慥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慥 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慥（CBDB 16694）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16694&o=json)
