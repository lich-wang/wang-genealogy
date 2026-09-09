---
schema: wang-person/v1
id: p_HKCnizxAApK3fsPh2jp46Q
status: active
merged_into: null
display_name: 王敎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ciEp5J7M3r67QLQKFeLJF7
        subject_person_id: p_HKCnizxAApK3fsPh2jp46Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4qXrHsKJdH2Pf5D3TWwZ2i
          claim_id: c_ciEp5J7M3r67QLQKFeLJF7
          source_id: s_6yN97aAkRCiTPbG7CAKTj9
          stance: supports
          locator: CBDB:126675
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126675）
          source: &a1
            id: s_6yN97aAkRCiTPbG7CAKTj9
            source_type: api_record
            title: 中国历代人物传记资料库：王敎（CBDB 126675）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126675&o=json
            external_identifier: CBDB:126675
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.112Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_RhwEKdAe2xyYyuwnbx6HeM
        subject_person_id: p_HKCnizxAApK3fsPh2jp46Q
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1539年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KBCQ4yPMpb3s23MuuD4N6p
          claim_id: c_RhwEKdAe2xyYyuwnbx6HeM
          source_id: s_6yN97aAkRCiTPbG7CAKTj9
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
        id: c_8LbzNnmMd1M1XfC9AD2hfZ
        subject_person_id: p_HKCnizxAApK3fsPh2jp46Q
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1603年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DAaZzf4xKc8p1AbgZpK9xn
          claim_id: c_8LbzNnmMd1M1XfC9AD2hfZ
          source_id: s_6yN97aAkRCiTPbG7CAKTj9
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
        id: c_5EHAvc5ja7uPLt57MEwRmJ
        subject_person_id: p_HKCnizxAApK3fsPh2jp46Q
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
        - id: cs_d6KRe4DHJMrWp1w8ni6HN1
          claim_id: c_5EHAvc5ja7uPLt57MEwRmJ
          source_id: s_6yN97aAkRCiTPbG7CAKTj9
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

# 王敎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敎 | accepted |
| birth.date | 1539年 | accepted |
| death.date | 1603年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敎（CBDB 126675）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126675&o=json)
