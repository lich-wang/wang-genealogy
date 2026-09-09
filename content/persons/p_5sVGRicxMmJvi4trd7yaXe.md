---
schema: wang-person/v1
id: p_5sVGRicxMmJvi4trd7yaXe
status: active
merged_into: null
display_name: 王珣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_h3GgCCB12AoAjbHe27jHZ3
        subject_person_id: p_5sVGRicxMmJvi4trd7yaXe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_q2jBFx3pPJQFGaJ8hxA5eH
          claim_id: c_h3GgCCB12AoAjbHe27jHZ3
          source_id: s_vURmKVJorTZpgkXANejE3E
          stance: supports
          locator: CBDB:100766
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100766）
          source: &a1
            id: s_vURmKVJorTZpgkXANejE3E
            source_type: api_record
            title: 中国历代人物传记资料库：王珣（CBDB 100766）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100766&o=json
            external_identifier: CBDB:100766
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.427Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ZNXwLPTqNgMDw3pR5cHR34
        subject_person_id: p_5sVGRicxMmJvi4trd7yaXe
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1177年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_khrQBC4Sh8F9AjUCnyLTRG
          claim_id: c_ZNXwLPTqNgMDw3pR5cHR34
          source_id: s_vURmKVJorTZpgkXANejE3E
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
        id: c_ZebvZRcGP6RaPPQYvk9MGN
        subject_person_id: p_5sVGRicxMmJvi4trd7yaXe
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1224年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q6kCughn7M4FgvZeHeMC6p
          claim_id: c_ZebvZRcGP6RaPPQYvk9MGN
          source_id: s_vURmKVJorTZpgkXANejE3E
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
        id: c_VxxoXZnHH8w93fiTvP7BH1
        subject_person_id: p_5sVGRicxMmJvi4trd7yaXe
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
        - id: cs_9xJdgs98v7fbQ4NEHrqNEq
          claim_id: c_VxxoXZnHH8w93fiTvP7BH1
          source_id: s_vURmKVJorTZpgkXANejE3E
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

# 王珣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珣 | accepted |
| birth.date | 1177年 | accepted |
| death.date | 1224年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珣（CBDB 100766）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100766&o=json)
