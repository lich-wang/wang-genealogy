---
schema: wang-person/v1
id: p_gE38wphVgSX2ysH6WXuLZH
status: active
merged_into: null
display_name: 王大禮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HF7BKEhLU1GaArideiuRBY
        subject_person_id: p_gE38wphVgSX2ysH6WXuLZH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZExA4zBed5N3S18bBApceQ
          claim_id: c_HF7BKEhLU1GaArideiuRBY
          source_id: s_SCjaj55Aj1kTwEVxtWhrFY
          stance: supports
          locator: CBDB:142599
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142599）
          source: &a1
            id: s_SCjaj55Aj1kTwEVxtWhrFY
            source_type: api_record
            title: 中国历代人物传记资料库：王大禮（CBDB 142599）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142599&o=json
            external_identifier: CBDB:142599
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.584Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_77PQxevJJLD8Vw8d99m7sw
        subject_person_id: p_gE38wphVgSX2ysH6WXuLZH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 613年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QwhKde54ySEBQNLB6SJxgA
          claim_id: c_77PQxevJJLD8Vw8d99m7sw
          source_id: s_SCjaj55Aj1kTwEVxtWhrFY
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
        id: c_tk1j592LqjonMkzPtB1RwA
        subject_person_id: p_gE38wphVgSX2ysH6WXuLZH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 669年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z98tjZHCtCCboqHz84DqC3
          claim_id: c_tk1j592LqjonMkzPtB1RwA
          source_id: s_SCjaj55Aj1kTwEVxtWhrFY
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
        id: c_oRQh6EGFWhgipyCK4jHcyc
        subject_person_id: p_gE38wphVgSX2ysH6WXuLZH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cBnU3DxhEPbZMRRADZaQ3J
          claim_id: c_oRQh6EGFWhgipyCK4jHcyc
          source_id: s_SCjaj55Aj1kTwEVxtWhrFY
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

# 王大禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大禮 | accepted |
| birth.date | 613年 | accepted |
| death.date | 669年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大禮（CBDB 142599）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142599&o=json)
