---
schema: wang-person/v1
id: p_9LSFQN2Ue5grcfePxzwh6f
status: active
merged_into: null
display_name: 王承勳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iJ3Gzo8bhBbBEqfEpBjPw2
        subject_person_id: p_9LSFQN2Ue5grcfePxzwh6f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承勳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rts7MnB9o5ACuuCY18bDYF
          claim_id: c_iJ3Gzo8bhBbBEqfEpBjPw2
          source_id: s_P54A5UgS2hZWgMewuAWhPP
          stance: supports
          locator: CBDB:232018
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（232018）
          source: &a1
            id: s_P54A5UgS2hZWgMewuAWhPP
            source_type: api_record
            title: 中国历代人物传记资料库：王承勳（CBDB 232018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232018&o=json
            external_identifier: CBDB:232018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.685Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_skN8Ebo1Z3a5Z6JDh9JeCj
        subject_person_id: p_9LSFQN2Ue5grcfePxzwh6f
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
        - id: cs_UstX2tH7NnzzWMJcNSmiWU
          claim_id: c_skN8Ebo1Z3a5Z6JDh9JeCj
          source_id: s_P54A5UgS2hZWgMewuAWhPP
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

# 王承勳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承勳 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承勳（CBDB 232018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232018&o=json)
