---
schema: wang-person/v1
id: p_v7fwsi1VuvyUWofKoj76kd
status: active
merged_into: null
display_name: 王澬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xxu16UR6KrKsgMpiMspLPf
        subject_person_id: p_v7fwsi1VuvyUWofKoj76kd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_865m8Kr5Qnk8hXzJXBZ4tP
          claim_id: c_xxu16UR6KrKsgMpiMspLPf
          source_id: s_mxJDfrwrB1Sf9hWCs47hDv
          stance: supports
          locator: CBDB:25137
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（25137）
          source: &a1
            id: s_mxJDfrwrB1Sf9hWCs47hDv
            source_type: api_record
            title: 中国历代人物传记资料库：王澬（CBDB 25137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25137&o=json
            external_identifier: CBDB:25137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.908Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4VMt8k8ti14MPQf8Z2oiXq
        subject_person_id: p_v7fwsi1VuvyUWofKoj76kd
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
        - id: cs_DsDJQUg5Do7FUDqaDHC5p7
          claim_id: c_4VMt8k8ti14MPQf8Z2oiXq
          source_id: s_mxJDfrwrB1Sf9hWCs47hDv
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

# 王澬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澬 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澬（CBDB 25137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25137&o=json)
