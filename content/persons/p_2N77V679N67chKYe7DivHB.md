---
schema: wang-person/v1
id: p_2N77V679N67chKYe7DivHB
status: active
merged_into: null
display_name: 王槩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rSQ816vKT6fKMPHF7uzoTt
        subject_person_id: p_2N77V679N67chKYe7DivHB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LZhJTX7P9kFjWAqwCoUTnH
          claim_id: c_rSQ816vKT6fKMPHF7uzoTt
          source_id: s_B3XTLgN9zUiELnRumuLQTn
          stance: supports
          locator: CBDB:126810
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126810）
          source: &a1
            id: s_B3XTLgN9zUiELnRumuLQTn
            source_type: api_record
            title: 中国历代人物传记资料库：王槩（CBDB 126810）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126810&o=json
            external_identifier: CBDB:126810
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.222Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Q8tJ4kqVjkQp2gomV3DS75
        subject_person_id: p_2N77V679N67chKYe7DivHB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1418年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1mb7hcqu5eCwdQ3f1T6y9v
          claim_id: c_Q8tJ4kqVjkQp2gomV3DS75
          source_id: s_B3XTLgN9zUiELnRumuLQTn
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
        id: c_GvTvP6CFRGNn2pwsmPAsCQ
        subject_person_id: p_2N77V679N67chKYe7DivHB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1474年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c1gsnArFBNHpH6bj1DWQjR
          claim_id: c_GvTvP6CFRGNn2pwsmPAsCQ
          source_id: s_B3XTLgN9zUiELnRumuLQTn
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
        id: c_7P4o9StGs2R3UXWyq7sDtm
        subject_person_id: p_2N77V679N67chKYe7DivHB
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
        - id: cs_8K5w1YtsArEBqdAtc41756
          claim_id: c_7P4o9StGs2R3UXWyq7sDtm
          source_id: s_B3XTLgN9zUiELnRumuLQTn
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

# 王槩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王槩 | accepted |
| birth.date | 1418年 | accepted |
| death.date | 1474年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王槩（CBDB 126810）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126810&o=json)
