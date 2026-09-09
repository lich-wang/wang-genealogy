---
schema: wang-person/v1
id: p_FTzyEjM2QwShdLGQSK3vMg
status: active
merged_into: null
display_name: 王會清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zhgxEhP9Vmddy8Grg3e3D9
        subject_person_id: p_FTzyEjM2QwShdLGQSK3vMg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王會清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BX7ajGZT38mP6XtevToH9W
          claim_id: c_zhgxEhP9Vmddy8Grg3e3D9
          source_id: s_t4nRmyV6RJmJJsKA2iaKoZ
          stance: supports
          locator: CBDB:71593
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71593）
          source: &a1
            id: s_t4nRmyV6RJmJJsKA2iaKoZ
            source_type: api_record
            title: 中国历代人物传记资料库：王會清（CBDB 71593）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71593&o=json
            external_identifier: CBDB:71593
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.774Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_eaxuZ7ipjjmzbBG93SgFXr
        subject_person_id: p_FTzyEjM2QwShdLGQSK3vMg
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1774年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LzGqJ5QWQ596mJwkfnks81
          claim_id: c_eaxuZ7ipjjmzbBG93SgFXr
          source_id: s_t4nRmyV6RJmJJsKA2iaKoZ
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
        id: c_vre71RZoHJ9UCLi27rUaXo
        subject_person_id: p_FTzyEjM2QwShdLGQSK3vMg
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
        - id: cs_E21gFVZ72KQUWt2tqqJc1C
          claim_id: c_vre71RZoHJ9UCLi27rUaXo
          source_id: s_t4nRmyV6RJmJJsKA2iaKoZ
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

# 王會清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王會清 | accepted |
| birth.date | 1774年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王會清（CBDB 71593）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71593&o=json)
