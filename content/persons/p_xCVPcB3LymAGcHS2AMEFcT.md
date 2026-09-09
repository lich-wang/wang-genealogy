---
schema: wang-person/v1
id: p_xCVPcB3LymAGcHS2AMEFcT
status: active
merged_into: null
display_name: 王統仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7F4pmCeFC9oCXkWAxbUA1N
        subject_person_id: p_xCVPcB3LymAGcHS2AMEFcT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王統仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9xrQSC4QjDvEzmpkS8KqWf
          claim_id: c_7F4pmCeFC9oCXkWAxbUA1N
          source_id: s_bwW5yRboLr6BRTMRcjX8d4
          stance: supports
          locator: CBDB:342135
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342135）
          source: &a1
            id: s_bwW5yRboLr6BRTMRcjX8d4
            source_type: api_record
            title: 中国历代人物传记资料库：王統仁（CBDB 342135）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342135&o=json
            external_identifier: CBDB:342135
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.850Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kdic3eZrSZBbx42ek2v1zH
        subject_person_id: p_xCVPcB3LymAGcHS2AMEFcT
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
        - id: cs_NREFM2AHuwTuLA95F57u7H
          claim_id: c_kdic3eZrSZBbx42ek2v1zH
          source_id: s_bwW5yRboLr6BRTMRcjX8d4
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

# 王統仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王統仁 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王統仁（CBDB 342135）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342135&o=json)
