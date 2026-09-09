---
schema: wang-person/v1
id: p_mKv9Q1VVMUTj1gEEPPmr7C
status: active
merged_into: null
display_name: 王伯先
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Mmp2ReAmPvvF8tWwxkqCgv
        subject_person_id: p_mKv9Q1VVMUTj1gEEPPmr7C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯先
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qo4YpNn55A5FhDDnZFAupP
          claim_id: c_Mmp2ReAmPvvF8tWwxkqCgv
          source_id: s_u9sF98RjUE8hCEV4d3YFZV
          stance: supports
          locator: CBDB:39419
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39419）
          source: &a1
            id: s_u9sF98RjUE8hCEV4d3YFZV
            source_type: api_record
            title: 中国历代人物传记资料库：王伯先（CBDB 39419）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39419&o=json
            external_identifier: CBDB:39419
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.080Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_rUnUhJ3Zj4g1FJ117SrBxV
        subject_person_id: p_mKv9Q1VVMUTj1gEEPPmr7C
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1070年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xHLhLLqZBUwZgNF1bSkVNE
          claim_id: c_rUnUhJ3Zj4g1FJ117SrBxV
          source_id: s_u9sF98RjUE8hCEV4d3YFZV
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
        id: c_NDkd7kKHwHhMbD7TwZNF8v
        subject_person_id: p_mKv9Q1VVMUTj1gEEPPmr7C
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
        - id: cs_kvBd3r1KSXLrZp3B8NjFry
          claim_id: c_NDkd7kKHwHhMbD7TwZNF8v
          source_id: s_u9sF98RjUE8hCEV4d3YFZV
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

# 王伯先

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伯先 | accepted |
| death.date | 1070年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王伯先（CBDB 39419）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39419&o=json)
