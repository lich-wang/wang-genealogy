---
schema: wang-person/v1
id: p_AKZ2gftZZgX4FrpAuoEmrr
status: active
merged_into: null
display_name: 王大璡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Pav1p2PL342zPgcmE3GVAV
        subject_person_id: p_AKZ2gftZZgX4FrpAuoEmrr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大璡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CZevVL5cvy4U5eG3QybKkX
          claim_id: c_Pav1p2PL342zPgcmE3GVAV
          source_id: s_Zt1D1onoqtnSNKY27MPrp6
          stance: supports
          locator: CBDB:175908
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175908）
          source: &a1
            id: s_Zt1D1onoqtnSNKY27MPrp6
            source_type: api_record
            title: 中国历代人物传记资料库：王大璡（CBDB 175908）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175908&o=json
            external_identifier: CBDB:175908
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.191Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_5csTB3aTVCqBRwuNxEXWKm
        subject_person_id: p_AKZ2gftZZgX4FrpAuoEmrr
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 708年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PcMsNrDUXPwumnB9eksY8N
          claim_id: c_5csTB3aTVCqBRwuNxEXWKm
          source_id: s_Zt1D1onoqtnSNKY27MPrp6
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
        id: c_orXxGmcsSQfTwJCPfdyYoP
        subject_person_id: p_AKZ2gftZZgX4FrpAuoEmrr
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
        - id: cs_TsAfbFdQUQn8jBLqTx186n
          claim_id: c_orXxGmcsSQfTwJCPfdyYoP
          source_id: s_Zt1D1onoqtnSNKY27MPrp6
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

# 王大璡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大璡 | accepted |
| death.date | 708年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大璡（CBDB 175908）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175908&o=json)
