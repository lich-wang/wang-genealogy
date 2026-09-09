---
schema: wang-person/v1
id: p_RQWy44B8Szn7GTHLiqzPzY
status: active
merged_into: null
display_name: 王自勉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_djxeyBTiGE1DhhREBSvxb6
        subject_person_id: p_RQWy44B8Szn7GTHLiqzPzY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王自勉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q6DPtKutmKq6isHM81if9F
          claim_id: c_djxeyBTiGE1DhhREBSvxb6
          source_id: s_5fZFiJ3Poff64hjAvch6wt
          stance: supports
          locator: CBDB:191818
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191818）
          source: &a1
            id: s_5fZFiJ3Poff64hjAvch6wt
            source_type: api_record
            title: 中国历代人物传记资料库：王自勉（CBDB 191818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191818&o=json
            external_identifier: CBDB:191818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.383Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_2eGQryYWfUCn21JpxAKQkt
        subject_person_id: p_RQWy44B8Szn7GTHLiqzPzY
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 786年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u6V3M9nTz5NH9w42zG4KxS
          claim_id: c_2eGQryYWfUCn21JpxAKQkt
          source_id: s_5fZFiJ3Poff64hjAvch6wt
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
        id: c_cB6GEqCHwrT1btcX5FY4S2
        subject_person_id: p_RQWy44B8Szn7GTHLiqzPzY
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
        - id: cs_skDtAUGRXiSKPkkA7GzBZV
          claim_id: c_cB6GEqCHwrT1btcX5FY4S2
          source_id: s_5fZFiJ3Poff64hjAvch6wt
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

# 王自勉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王自勉 | accepted |
| death.date | 786年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王自勉（CBDB 191818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191818&o=json)
