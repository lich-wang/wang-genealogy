---
schema: wang-person/v1
id: p_ncNLLEzPwWAZZ98EwwbnwM
status: active
merged_into: null
display_name: 王奕清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iQeYRXEvjzB1xiQvEKPE8C
        subject_person_id: p_ncNLLEzPwWAZZ98EwwbnwM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奕清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JMMLCphDGyAr5CgE5kQV2u
          claim_id: c_iQeYRXEvjzB1xiQvEKPE8C
          source_id: s_n99Y9bKoSAdiWxrBJk1aix
          stance: supports
          locator: CBDB:69263
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69263）
          source: &a1
            id: s_n99Y9bKoSAdiWxrBJk1aix
            source_type: api_record
            title: 中国历代人物传记资料库：王奕清（CBDB 69263）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69263&o=json
            external_identifier: CBDB:69263
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.186Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_qkHtNz3LNKBAhcph6bF554
        subject_person_id: p_ncNLLEzPwWAZZ98EwwbnwM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1665年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SYurdpDttLhjxES1oqBgEY
          claim_id: c_qkHtNz3LNKBAhcph6bF554
          source_id: s_n99Y9bKoSAdiWxrBJk1aix
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_2WncrejnuiEckVW8mgpQB6
        subject_person_id: p_ncNLLEzPwWAZZ98EwwbnwM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1737年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c1BW8CbMPn58aAC3HiCDWq
          claim_id: c_2WncrejnuiEckVW8mgpQB6
          source_id: s_n99Y9bKoSAdiWxrBJk1aix
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
        id: c_BoyBACB4nMxS9M4QtWvNrx
        subject_person_id: p_ncNLLEzPwWAZZ98EwwbnwM
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
        - id: cs_DhTviqacXwKgBCqMxK44uf
          claim_id: c_BoyBACB4nMxS9M4QtWvNrx
          source_id: s_n99Y9bKoSAdiWxrBJk1aix
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

# 王奕清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王奕清 | accepted |
| birth.date | 1665年 | accepted |
| death.date | 1737年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王奕清（CBDB 69263）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69263&o=json)
