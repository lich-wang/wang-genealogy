---
schema: wang-person/v1
id: p_vpzDXBrQjqPJnEN64LCsPF
status: active
merged_into: null
display_name: 王臬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kNP2rkatHAQFwog3Nku98L
        subject_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tUCAgJ82z2iGdC3ERuA6GD
          claim_id: c_kNP2rkatHAQFwog3Nku98L
          source_id: s_UHN7c8NuMtWnHbj7TRXFcr
          stance: supports
          locator: CBDB:34721
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（34721）
          source: &a1
            id: s_UHN7c8NuMtWnHbj7TRXFcr
            source_type: api_record
            title: 中国历代人物传记资料库：王臬（CBDB 34721）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34721&o=json
            external_identifier: CBDB:34721
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.098Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zdELpwhN7LYgzWHogdqaXm
        subject_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1477年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ehVM5MKRq9iAcgJujJfbDL
          claim_id: c_zdELpwhN7LYgzWHogdqaXm
          source_id: s_UHN7c8NuMtWnHbj7TRXFcr
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
        id: c_bRDA2vRrrSiQENvZ31inVY
        subject_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1553年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SsPZ9Fm7NoNKDDD1jD8pkt
          claim_id: c_bRDA2vRrrSiQENvZ31inVY
          source_id: s_UHN7c8NuMtWnHbj7TRXFcr
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
        id: c_ynBBB38gxovgLMJbSL2Fzw
        subject_person_id: p_vpzDXBrQjqPJnEN64LCsPF
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
        - id: cs_o1Ybjscx1AMMdzX4gABSC6
          claim_id: c_ynBBB38gxovgLMJbSL2Fzw
          source_id: s_UHN7c8NuMtWnHbj7TRXFcr
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

# 王臬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王臬 | accepted |
| birth.date | 1477年 | accepted |
| death.date | 1553年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王臬（CBDB 34721）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34721&o=json)
