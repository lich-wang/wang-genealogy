---
schema: wang-person/v1
id: p_L5XcrMAG2FZPY7ax2DWyhQ
status: active
merged_into: null
display_name: 王澄慧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FvMWL8G3YPsa6edng54cr9
        subject_person_id: p_L5XcrMAG2FZPY7ax2DWyhQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澄慧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mbKn4KWoBWr4gx5fd1UZ88
          claim_id: c_FvMWL8G3YPsa6edng54cr9
          source_id: s_8CF3U57RUbMwd78LJeYNvn
          stance: supports
          locator: CBDB:72200
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72200）
          source: &a1
            id: s_8CF3U57RUbMwd78LJeYNvn
            source_type: api_record
            title: 中国历代人物传记资料库：王澄慧（CBDB 72200）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72200&o=json
            external_identifier: CBDB:72200
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.047Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ZSUukSnF6E2wNthP6ZNwmh
        subject_person_id: p_L5XcrMAG2FZPY7ax2DWyhQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1678年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5uyVT323GEJQFqRD2F3Lqu
          claim_id: c_ZSUukSnF6E2wNthP6ZNwmh
          source_id: s_8CF3U57RUbMwd78LJeYNvn
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
        id: c_YLPBxtsUhjmhAQHkNTL4Z8
        subject_person_id: p_L5XcrMAG2FZPY7ax2DWyhQ
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
        - id: cs_ovcrdKFiBPGUFcsuCRoeu5
          claim_id: c_YLPBxtsUhjmhAQHkNTL4Z8
          source_id: s_8CF3U57RUbMwd78LJeYNvn
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

# 王澄慧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澄慧 | accepted |
| birth.date | 1678年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澄慧（CBDB 72200）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72200&o=json)
