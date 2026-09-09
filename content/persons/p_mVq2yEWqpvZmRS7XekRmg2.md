---
schema: wang-person/v1
id: p_mVq2yEWqpvZmRS7XekRmg2
status: active
merged_into: null
display_name: 王臣良
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1DweWqQUQw2ArG9PGZMwnW
        subject_person_id: p_mVq2yEWqpvZmRS7XekRmg2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臣良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zoKwTDCZddFWJ8jv1d1AFC
          claim_id: c_1DweWqQUQw2ArG9PGZMwnW
          source_id: s_WHyZfcMJUD2BsnW5qZ4V4H
          stance: supports
          locator: CBDB:457962
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（457962）
          source: &a1
            id: s_WHyZfcMJUD2BsnW5qZ4V4H
            source_type: api_record
            title: 中国历代人物传记资料库：王臣良（CBDB 457962）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=457962&o=json
            external_identifier: CBDB:457962
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.634Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tt3on573x6afSN991eABoJ
        subject_person_id: p_mVq2yEWqpvZmRS7XekRmg2
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
        - id: cs_Wt4NHPH2Q1SjekFW54ZZxv
          claim_id: c_tt3on573x6afSN991eABoJ
          source_id: s_WHyZfcMJUD2BsnW5qZ4V4H
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

# 王臣良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王臣良 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王臣良（CBDB 457962）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=457962&o=json)
