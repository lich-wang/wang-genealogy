---
schema: wang-person/v1
id: p_99gNXAHSy7CHUSg6MDVZmM
status: active
merged_into: null
display_name: 王常
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_43PXv1kAUu2LsKu5znGFLM
        subject_person_id: p_99gNXAHSy7CHUSg6MDVZmM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王常
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ato6LULp8u1V15CD1xhZ9X
          claim_id: c_43PXv1kAUu2LsKu5znGFLM
          source_id: s_HNnvggNwswDJGWDv9EXqk2
          stance: supports
          locator: CBDB:198354
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198354）
          source: &a1
            id: s_HNnvggNwswDJGWDv9EXqk2
            source_type: api_record
            title: 中国历代人物传记资料库：王常（CBDB 198354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198354&o=json
            external_identifier: CBDB:198354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.482Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_hgTAc3gwgeArdjuUqik3yD
        subject_person_id: p_99gNXAHSy7CHUSg6MDVZmM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1427年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LpLvBWUVEE7uR6WsvikNWo
          claim_id: c_hgTAc3gwgeArdjuUqik3yD
          source_id: s_HNnvggNwswDJGWDv9EXqk2
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
        id: c_1ftTz9NLcND9Us1Px5h8Zc
        subject_person_id: p_99gNXAHSy7CHUSg6MDVZmM
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
        - id: cs_3HLCvoD7C7vQzdTDjM52cp
          claim_id: c_1ftTz9NLcND9Us1Px5h8Zc
          source_id: s_HNnvggNwswDJGWDv9EXqk2
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

# 王常

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王常 | accepted |
| birth.date | 1427年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王常（CBDB 198354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198354&o=json)
