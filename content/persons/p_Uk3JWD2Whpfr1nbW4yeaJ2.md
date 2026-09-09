---
schema: wang-person/v1
id: p_Uk3JWD2Whpfr1nbW4yeaJ2
status: active
merged_into: null
display_name: 王應辰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_t2Me6K6AX1qJCmjJuWXKLJ
        subject_person_id: p_Uk3JWD2Whpfr1nbW4yeaJ2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應辰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_c4BBq1fxGhZR5YZjx2HYBi
          claim_id: c_t2Me6K6AX1qJCmjJuWXKLJ
          source_id: s_QJJRx7FMZix9Y7PKsPCiCx
          stance: supports
          locator: CBDB:205548
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205548）
          source: &a1
            id: s_QJJRx7FMZix9Y7PKsPCiCx
            source_type: api_record
            title: 中国历代人物传记资料库：王應辰（CBDB 205548）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205548&o=json
            external_identifier: CBDB:205548
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.864Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_StQvZVjTugQYvutnmQusuB
        subject_person_id: p_Uk3JWD2Whpfr1nbW4yeaJ2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1537年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XF63k9BCVqLkXxNB6bhmro
          claim_id: c_StQvZVjTugQYvutnmQusuB
          source_id: s_QJJRx7FMZix9Y7PKsPCiCx
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
        id: c_55HiepPbJbkpDEwyPwaNP9
        subject_person_id: p_Uk3JWD2Whpfr1nbW4yeaJ2
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
        - id: cs_Swe6XSj3wj9M6Z4QhGRiaZ
          claim_id: c_55HiepPbJbkpDEwyPwaNP9
          source_id: s_QJJRx7FMZix9Y7PKsPCiCx
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

# 王應辰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應辰 | accepted |
| birth.date | 1537年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應辰（CBDB 205548）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205548&o=json)
