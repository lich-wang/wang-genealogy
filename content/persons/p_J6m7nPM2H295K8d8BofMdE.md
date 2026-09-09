---
schema: wang-person/v1
id: p_J6m7nPM2H295K8d8BofMdE
status: active
merged_into: null
display_name: 王整
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PgxT1RXYTF8a9Eu8T2qUxp
        subject_person_id: p_J6m7nPM2H295K8d8BofMdE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王整
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gcSroqHjQiwMbG7CKm4csL
          claim_id: c_PgxT1RXYTF8a9Eu8T2qUxp
          source_id: s_ADNhgceGKAL516UMfQF9wQ
          stance: supports
          locator: CBDB:37821
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37821）
          source: &a1
            id: s_ADNhgceGKAL516UMfQF9wQ
            source_type: api_record
            title: 中国历代人物传记资料库：王整（CBDB 37821）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37821&o=json
            external_identifier: CBDB:37821
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.262Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_mfmULyQ4JbDeARVWqVpHwR
        subject_person_id: p_J6m7nPM2H295K8d8BofMdE
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 970年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WDVz4DEA6j16Z5BTnNyjaY
          claim_id: c_mfmULyQ4JbDeARVWqVpHwR
          source_id: s_ADNhgceGKAL516UMfQF9wQ
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
        id: c_N4hBWoScqDx14o2btWkHti
        subject_person_id: p_J6m7nPM2H295K8d8BofMdE
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
        - id: cs_e8vbtZHmCByxYZJVJGq1jc
          claim_id: c_N4hBWoScqDx14o2btWkHti
          source_id: s_ADNhgceGKAL516UMfQF9wQ
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

# 王整

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王整 | accepted |
| birth.date | 970年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王整（CBDB 37821）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37821&o=json)
