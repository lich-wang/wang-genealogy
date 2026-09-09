---
schema: wang-person/v1
id: p_VjyGNMX3LpLiN9N9Cogi3K
status: active
merged_into: null
display_name: 王寡言
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AhC96kDLHumKuBF6eKZRhC
        subject_person_id: p_VjyGNMX3LpLiN9N9Cogi3K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寡言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R6iFG8dT2i65DeA3UN7egv
          claim_id: c_AhC96kDLHumKuBF6eKZRhC
          source_id: s_5koLLBULa2Yqd2GY1h9GaC
          stance: supports
          locator: CBDB:175718
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175718）
          source: &a1
            id: s_5koLLBULa2Yqd2GY1h9GaC
            source_type: api_record
            title: 中国历代人物传记资料库：王寡言（CBDB 175718）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175718&o=json
            external_identifier: CBDB:175718
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.250Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_uJAJFroBV379nSRHALw5Pj
        subject_person_id: p_VjyGNMX3LpLiN9N9Cogi3K
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 878年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8oikFTMHYFangmR2ZEBAVT
          claim_id: c_uJAJFroBV379nSRHALw5Pj
          source_id: s_5koLLBULa2Yqd2GY1h9GaC
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
        id: c_FTAMKvJL8St81o4XZXJL18
        subject_person_id: p_VjyGNMX3LpLiN9N9Cogi3K
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
        - id: cs_99eyvMjNnFM36S2r3fwRoq
          claim_id: c_FTAMKvJL8St81o4XZXJL18
          source_id: s_5koLLBULa2Yqd2GY1h9GaC
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

# 王寡言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寡言 | accepted |
| death.date | 878年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寡言（CBDB 175718）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175718&o=json)
