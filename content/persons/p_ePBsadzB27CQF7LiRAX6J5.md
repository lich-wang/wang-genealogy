---
schema: wang-person/v1
id: p_ePBsadzB27CQF7LiRAX6J5
status: active
merged_into: null
display_name: 王恩鴻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5Urcy5Q8eTWGgZJSr7LVF4
        subject_person_id: p_ePBsadzB27CQF7LiRAX6J5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩鴻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wKYb4mHGGE1Gn2Z48gx92r
          claim_id: c_5Urcy5Q8eTWGgZJSr7LVF4
          source_id: s_YJTAAGGny7LAGp4QoWWQBm
          stance: supports
          locator: CBDB:637867
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637867）
          source: &a1
            id: s_YJTAAGGny7LAGp4QoWWQBm
            source_type: api_record
            title: 中国历代人物传记资料库：王恩鴻（CBDB 637867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637867&o=json
            external_identifier: CBDB:637867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.548Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M9NYF44Ye6qiDpDpLCf4Tk
        subject_person_id: p_ePBsadzB27CQF7LiRAX6J5
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
        - id: cs_NEM2md3AM8CgT34fJ6TBSQ
          claim_id: c_M9NYF44Ye6qiDpDpLCf4Tk
          source_id: s_YJTAAGGny7LAGp4QoWWQBm
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

# 王恩鴻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恩鴻 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恩鴻（CBDB 637867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637867&o=json)
