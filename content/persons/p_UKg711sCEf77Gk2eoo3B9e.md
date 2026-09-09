---
schema: wang-person/v1
id: p_UKg711sCEf77Gk2eoo3B9e
status: active
merged_into: null
display_name: 王東里
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LoeFcj8F64vW37Fvvh3NqD
        subject_person_id: p_UKg711sCEf77Gk2eoo3B9e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王東里
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ufLBvmd4ybARqj5YG4h8K5
          claim_id: c_LoeFcj8F64vW37Fvvh3NqD
          source_id: s_JBocFppUgC4Q7BYrBoKk6B
          stance: supports
          locator: CBDB:548814
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（548814）
          source: &a1
            id: s_JBocFppUgC4Q7BYrBoKk6B
            source_type: api_record
            title: 中国历代人物传记资料库：王東里（CBDB 548814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=548814&o=json
            external_identifier: CBDB:548814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.555Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZuAoh9W2Yp1YuQLJkMsMjP
        subject_person_id: p_UKg711sCEf77Gk2eoo3B9e
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
        - id: cs_SMMfMK3hNqXxG8q9PobjQF
          claim_id: c_ZuAoh9W2Yp1YuQLJkMsMjP
          source_id: s_JBocFppUgC4Q7BYrBoKk6B
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

# 王東里

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王東里 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王東里（CBDB 548814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=548814&o=json)
