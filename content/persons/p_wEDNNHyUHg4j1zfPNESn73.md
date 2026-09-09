---
schema: wang-person/v1
id: p_wEDNNHyUHg4j1zfPNESn73
status: active
merged_into: null
display_name: 王昌齡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mu1VTCko1fhHbmWycVsxkf
        subject_person_id: p_wEDNNHyUHg4j1zfPNESn73
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌齡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LAB121zfqoMZBMLeN2Xm4W
          claim_id: c_mu1VTCko1fhHbmWycVsxkf
          source_id: s_Nq53tjW13VA5HQhusxywLe
          stance: supports
          locator: CBDB:92035
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92035）
          source: &a1
            id: s_Nq53tjW13VA5HQhusxywLe
            source_type: api_record
            title: 中国历代人物传记资料库：王昌齡（CBDB 92035）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92035&o=json
            external_identifier: CBDB:92035
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.097Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gJoNP666TmpqrFLqjQLw55
        subject_person_id: p_wEDNNHyUHg4j1zfPNESn73
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 690年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XYJxkoDcgSTuZU7nh6FMiz
          claim_id: c_gJoNP666TmpqrFLqjQLw55
          source_id: s_Nq53tjW13VA5HQhusxywLe
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
        id: c_QMuzQBKNUPQ8f3TDrKp8zd
        subject_person_id: p_wEDNNHyUHg4j1zfPNESn73
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 756年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NLjfYC8dtLHg9hSz1j7TiZ
          claim_id: c_QMuzQBKNUPQ8f3TDrKp8zd
          source_id: s_Nq53tjW13VA5HQhusxywLe
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
        id: c_q4joUm7sFBYo8nyHaDLg1w
        subject_person_id: p_wEDNNHyUHg4j1zfPNESn73
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
        - id: cs_iJWtWFhiKPr3MGNQgaH2Dc
          claim_id: c_q4joUm7sFBYo8nyHaDLg1w
          source_id: s_Nq53tjW13VA5HQhusxywLe
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

# 王昌齡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昌齡 | accepted |
| birth.date | 690年 | accepted |
| death.date | 756年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昌齡（CBDB 92035）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92035&o=json)
