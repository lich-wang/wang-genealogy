---
schema: wang-person/v1
id: p_97newzyhq7uCYabtQtfnFW
status: active
merged_into: null
display_name: 王祥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aa7fPhaXT8LuiMLnraqgy5
        subject_person_id: p_97newzyhq7uCYabtQtfnFW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NGoQB1LgFgT4QkMzyH53gS
          claim_id: c_aa7fPhaXT8LuiMLnraqgy5
          source_id: s_rchjDGUEbp3vQgcurWNEjv
          stance: supports
          locator: CBDB:271491
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271491）
          source: &a1
            id: s_rchjDGUEbp3vQgcurWNEjv
            source_type: api_record
            title: 中国历代人物传记资料库：王祥（CBDB 271491）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271491&o=json
            external_identifier: CBDB:271491
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.874Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mimj2N1i3iSq7KPjUtApUj
        subject_person_id: p_97newzyhq7uCYabtQtfnFW
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
        - id: cs_CoA9cF7otkDLfsAc8Jrq1h
          claim_id: c_mimj2N1i3iSq7KPjUtApUj
          source_id: s_rchjDGUEbp3vQgcurWNEjv
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

# 王祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祥 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祥（CBDB 271491）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271491&o=json)
