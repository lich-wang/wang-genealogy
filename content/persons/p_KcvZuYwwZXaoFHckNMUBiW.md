---
schema: wang-person/v1
id: p_KcvZuYwwZXaoFHckNMUBiW
status: active
merged_into: null
display_name: 王進德
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6wMKSoZQv9Gq6vVeUBFv5Y
        subject_person_id: p_KcvZuYwwZXaoFHckNMUBiW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ydpBCiE2U3v536hqELjTk8
          claim_id: c_6wMKSoZQv9Gq6vVeUBFv5Y
          source_id: s_hZxNKnuBF2n6W1RRvzpPVC
          stance: supports
          locator: CBDB:101370
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101370）
          source: &a1
            id: s_hZxNKnuBF2n6W1RRvzpPVC
            source_type: api_record
            title: 中国历代人物传记资料库：王進德（CBDB 101370）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101370&o=json
            external_identifier: CBDB:101370
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.824Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QwXKAx6RvQtCzzC461acEh
        subject_person_id: p_KcvZuYwwZXaoFHckNMUBiW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1246年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LNfgrCHN1rEDriKg3V6i9r
          claim_id: c_QwXKAx6RvQtCzzC461acEh
          source_id: s_hZxNKnuBF2n6W1RRvzpPVC
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
        id: c_LKfYExnxBcTPj7EGR9K1CN
        subject_person_id: p_KcvZuYwwZXaoFHckNMUBiW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1329年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F85WAaqEGnALjyp5WkP6wk
          claim_id: c_LKfYExnxBcTPj7EGR9K1CN
          source_id: s_hZxNKnuBF2n6W1RRvzpPVC
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
        id: c_EjmgXnyxeaGTL6Rt767xCU
        subject_person_id: p_KcvZuYwwZXaoFHckNMUBiW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5EmD7uH4Ury8PQwgHAcLvt
          claim_id: c_EjmgXnyxeaGTL6Rt767xCU
          source_id: s_hZxNKnuBF2n6W1RRvzpPVC
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

# 王進德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王進德 | accepted |
| birth.date | 1246年 | accepted |
| death.date | 1329年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王進德（CBDB 101370）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101370&o=json)
