---
schema: wang-person/v1
id: p_GQ1GXZbABMzPSWjdERZQAa
status: active
merged_into: null
display_name: 王心
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GB69ihLHqCo2m2yP6gGCdc
        subject_person_id: p_GQ1GXZbABMzPSWjdERZQAa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王心
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6rFLXo2AFJFg29JDLSm1xQ
          claim_id: c_GB69ihLHqCo2m2yP6gGCdc
          source_id: s_EFmUX2HrkrXg2pdJYeVM9N
          stance: supports
          locator: CBDB:203250
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203250）
          source: &a1
            id: s_EFmUX2HrkrXg2pdJYeVM9N
            source_type: api_record
            title: 中国历代人物传记资料库：王心（CBDB 203250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203250&o=json
            external_identifier: CBDB:203250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.778Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zbYjuKPFBQXC3yofQea3xx
        subject_person_id: p_GQ1GXZbABMzPSWjdERZQAa
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1501年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q3jD3rn9bsDpzG1G3nQcAt
          claim_id: c_zbYjuKPFBQXC3yofQea3xx
          source_id: s_EFmUX2HrkrXg2pdJYeVM9N
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1FMaGnnxKG4Zv1g6tjRoFN
        subject_person_id: p_GQ1GXZbABMzPSWjdERZQAa
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
        - id: cs_dsyYJYFUJtHGqrjDEgeypD
          claim_id: c_1FMaGnnxKG4Zv1g6tjRoFN
          source_id: s_EFmUX2HrkrXg2pdJYeVM9N
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

# 王心

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王心 | accepted |
| birth.date | 1501年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王心（CBDB 203250）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203250&o=json)
