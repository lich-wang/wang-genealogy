---
schema: wang-person/v1
id: p_QhBrV8qpDJ7Xaiqs2rrSJ2
status: active
merged_into: null
display_name: 王魁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LiwCesBoj4DEpBmyvsdL1p
        subject_person_id: p_QhBrV8qpDJ7Xaiqs2rrSJ2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王魁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RYe6fK96C3LCLPfxHQAt7M
          claim_id: c_LiwCesBoj4DEpBmyvsdL1p
          source_id: s_36x66xdsG3kVLZ2BNA49cA
          stance: supports
          locator: CBDB:556186
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（556186）
          source: &a1
            id: s_36x66xdsG3kVLZ2BNA49cA
            source_type: api_record
            title: 中国历代人物传记资料库：王魁（CBDB 556186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556186&o=json
            external_identifier: CBDB:556186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.649Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VQw4XBcssjA7w6RDG1hkdY
        subject_person_id: p_QhBrV8qpDJ7Xaiqs2rrSJ2
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
        - id: cs_b3k2rk3YEDBdqNUFWs14NN
          claim_id: c_VQw4XBcssjA7w6RDG1hkdY
          source_id: s_36x66xdsG3kVLZ2BNA49cA
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

# 王魁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王魁 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王魁（CBDB 556186）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556186&o=json)
