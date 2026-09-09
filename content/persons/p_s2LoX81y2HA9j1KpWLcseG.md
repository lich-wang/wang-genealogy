---
schema: wang-person/v1
id: p_s2LoX81y2HA9j1KpWLcseG
status: active
merged_into: null
display_name: 王行方
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_diTmcbQmgjX788nwppJ7HX
        subject_person_id: p_s2LoX81y2HA9j1KpWLcseG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王行方
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mXPJjEb9mcR3Tgj7FH7X9D
          claim_id: c_diTmcbQmgjX788nwppJ7HX
          source_id: s_BQzh63vRwKKH2gEDvBvEtH
          stance: supports
          locator: CBDB:186054
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（186054）
          source: &a1
            id: s_BQzh63vRwKKH2gEDvBvEtH
            source_type: api_record
            title: 中国历代人物传记资料库：王行方（CBDB 186054）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186054&o=json
            external_identifier: CBDB:186054
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.266Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_jUWeD6R9FxoUAEzJYMwwLC
        subject_person_id: p_s2LoX81y2HA9j1KpWLcseG
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 857年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JvzyD2o4724t6G2DvqJ1c7
          claim_id: c_jUWeD6R9FxoUAEzJYMwwLC
          source_id: s_BQzh63vRwKKH2gEDvBvEtH
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
        id: c_BGLfd8ihvf2JALns7VaFYW
        subject_person_id: p_s2LoX81y2HA9j1KpWLcseG
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
        - id: cs_j8H3PHSRmR4WUYtLbqG5sC
          claim_id: c_BGLfd8ihvf2JALns7VaFYW
          source_id: s_BQzh63vRwKKH2gEDvBvEtH
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

# 王行方

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王行方 | accepted |
| death.date | 857年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王行方（CBDB 186054）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186054&o=json)
