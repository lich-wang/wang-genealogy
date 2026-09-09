---
schema: wang-person/v1
id: p_HL29vq33Fy7C1Q7S2XNM4e
status: active
merged_into: null
display_name: 王瓊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NFQyHMkspFmHG3TEK2Wxj3
        subject_person_id: p_HL29vq33Fy7C1Q7S2XNM4e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7byT9QFe9b5PQQH2eRG9Fh
          claim_id: c_NFQyHMkspFmHG3TEK2Wxj3
          source_id: s_2nTdS86DTxMeay1jpHeoZM
          stance: supports
          locator: CBDB:54079
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（54079）
          source: &a1
            id: s_2nTdS86DTxMeay1jpHeoZM
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 54079）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54079&o=json
            external_identifier: CBDB:54079
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.717Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_FNc4ht7KMFC3KTuidAPSLy
        subject_person_id: p_HL29vq33Fy7C1Q7S2XNM4e
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1736年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZKGSGqswuDGm4Li7VjonW4
          claim_id: c_FNc4ht7KMFC3KTuidAPSLy
          source_id: s_2nTdS86DTxMeay1jpHeoZM
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
        id: c_BuH5DaCtp7zUvtHnLr5EsT
        subject_person_id: p_HL29vq33Fy7C1Q7S2XNM4e
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1795年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yvmSa498mGsL5LMtKzHAdx
          claim_id: c_BuH5DaCtp7zUvtHnLr5EsT
          source_id: s_2nTdS86DTxMeay1jpHeoZM
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
        id: c_A42xFfYYHjGe84CJMJ2FWe
        subject_person_id: p_HL29vq33Fy7C1Q7S2XNM4e
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
        - id: cs_vzuekYE7487MZXEAm9rW76
          claim_id: c_A42xFfYYHjGe84CJMJ2FWe
          source_id: s_2nTdS86DTxMeay1jpHeoZM
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

# 王瓊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓊 | accepted |
| birth.date | 1736年 | accepted |
| death.date | 1795年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瓊（CBDB 54079）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54079&o=json)
