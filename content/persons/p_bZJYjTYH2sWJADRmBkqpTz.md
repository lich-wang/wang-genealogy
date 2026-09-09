---
schema: wang-person/v1
id: p_bZJYjTYH2sWJADRmBkqpTz
status: active
merged_into: null
display_name: 王正雅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UkcarkDjwrAUfBQR1F9bCr
        subject_person_id: p_bZJYjTYH2sWJADRmBkqpTz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正雅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9gYKCz2tDfH1cCgAPxnGLM
          claim_id: c_UkcarkDjwrAUfBQR1F9bCr
          source_id: s_wKJyQN7Rj1yHybFi2KMrt7
          stance: supports
          locator: CBDB:190104
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190104）
          source: &a1
            id: s_wKJyQN7Rj1yHybFi2KMrt7
            source_type: api_record
            title: 中国历代人物传记资料库：王正雅（CBDB 190104）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190104&o=json
            external_identifier: CBDB:190104
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.315Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_fxWyrVxCPLP93HLYwUA68z
        subject_person_id: p_bZJYjTYH2sWJADRmBkqpTz
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 847年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jwRva4KWQeDGGmE6fm3XZD
          claim_id: c_fxWyrVxCPLP93HLYwUA68z
          source_id: s_wKJyQN7Rj1yHybFi2KMrt7
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
        id: c_7ZE6akWKX1wjqceW4XaZVJ
        subject_person_id: p_bZJYjTYH2sWJADRmBkqpTz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eFA6xREL9VuFkoy9URve35
          claim_id: c_7ZE6akWKX1wjqceW4XaZVJ
          source_id: s_wKJyQN7Rj1yHybFi2KMrt7
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

# 王正雅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正雅 | accepted |
| death.date | 847年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王正雅（CBDB 190104）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190104&o=json)
