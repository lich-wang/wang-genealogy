---
schema: wang-person/v1
id: p_nTzZCoYHVAfzF7pEPWo4DQ
status: active
merged_into: null
display_name: 王承衎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8VNnby47jN5aDiAaAB2GH6
        subject_person_id: p_nTzZCoYHVAfzF7pEPWo4DQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承衎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3w3WjDiDJXg6Z1CL2e1Rk8
          claim_id: c_8VNnby47jN5aDiAaAB2GH6
          source_id: s_DDAMZaL3iDuNQjXrQ76pyK
          stance: supports
          locator: CBDB:17747
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（17747）
          source: &a1
            id: s_DDAMZaL3iDuNQjXrQ76pyK
            source_type: api_record
            title: 中国历代人物传记资料库：王承衎（CBDB 17747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17747&o=json
            external_identifier: CBDB:17747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.670Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_wpPZ77trCvDhv1Q69eLK4J
        subject_person_id: p_nTzZCoYHVAfzF7pEPWo4DQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 961年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AmHkGS9KjjmBZwpsPhy7SB
          claim_id: c_wpPZ77trCvDhv1Q69eLK4J
          source_id: s_DDAMZaL3iDuNQjXrQ76pyK
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
        id: c_h6L74qxqoAcc2Hx23h5bAN
        subject_person_id: p_nTzZCoYHVAfzF7pEPWo4DQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1009年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DVCpvyi45JKyve6pBc4oxC
          claim_id: c_h6L74qxqoAcc2Hx23h5bAN
          source_id: s_DDAMZaL3iDuNQjXrQ76pyK
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
        id: c_gn9z27LeTEfdQkTtRUFiec
        subject_person_id: p_nTzZCoYHVAfzF7pEPWo4DQ
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
        - id: cs_3QZCxHTXhk2JWp2Pr7ASSP
          claim_id: c_gn9z27LeTEfdQkTtRUFiec
          source_id: s_DDAMZaL3iDuNQjXrQ76pyK
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

# 王承衎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承衎 | accepted |
| birth.date | 961年 | accepted |
| death.date | 1009年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承衎（CBDB 17747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17747&o=json)
