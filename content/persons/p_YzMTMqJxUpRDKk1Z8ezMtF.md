---
schema: wang-person/v1
id: p_YzMTMqJxUpRDKk1Z8ezMtF
status: active
merged_into: null
display_name: 王前
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9B6sRgkRdnL2zSxbcFh4Zb
        subject_person_id: p_YzMTMqJxUpRDKk1Z8ezMtF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王前
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RS7gg1Eoe3MzfMGcz16Yez
          claim_id: c_9B6sRgkRdnL2zSxbcFh4Zb
          source_id: s_Js7gYVbGZBZoxQ5SPa1DhC
          stance: supports
          locator: CBDB:453701
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（453701）
          source: &a1
            id: s_Js7gYVbGZBZoxQ5SPa1DhC
            source_type: api_record
            title: 中国历代人物传记资料库：王前（CBDB 453701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453701&o=json
            external_identifier: CBDB:453701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.417Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yrsw6QNbjuj5Q4iQYSGXKc
        subject_person_id: p_YzMTMqJxUpRDKk1Z8ezMtF
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
        - id: cs_aXpMnmKn3kSDG1Q2ZnFg9r
          claim_id: c_yrsw6QNbjuj5Q4iQYSGXKc
          source_id: s_Js7gYVbGZBZoxQ5SPa1DhC
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

# 王前

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王前 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王前（CBDB 453701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453701&o=json)
