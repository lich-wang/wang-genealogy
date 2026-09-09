---
schema: wang-person/v1
id: p_mh9E3Ld4exLjcHyAi7jLPF
status: active
merged_into: null
display_name: 王璋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DpaCPGTx3mtZLrXkMdMd4L
        subject_person_id: p_mh9E3Ld4exLjcHyAi7jLPF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KT95VfDFeFVrvCLL65YM7Q
          claim_id: c_DpaCPGTx3mtZLrXkMdMd4L
          source_id: s_ePfgZb3Uc2LhS95ufGMDqR
          stance: supports
          locator: CBDB:100940
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100940）
          source: &a1
            id: s_ePfgZb3Uc2LhS95ufGMDqR
            source_type: api_record
            title: 中国历代人物传记资料库：王璋（CBDB 100940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100940&o=json
            external_identifier: CBDB:100940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.586Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_aRUkGNiyEUxb5HA4fi2dz6
        subject_person_id: p_mh9E3Ld4exLjcHyAi7jLPF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1275年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JNhSgyFQ6z7oDkQT3G64B5
          claim_id: c_aRUkGNiyEUxb5HA4fi2dz6
          source_id: s_ePfgZb3Uc2LhS95ufGMDqR
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
        id: c_QkXu5V8ATGuTD7VY9XdXyd
        subject_person_id: p_mh9E3Ld4exLjcHyAi7jLPF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1325年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dRUiCemVo4xFNLBELyWmwp
          claim_id: c_QkXu5V8ATGuTD7VY9XdXyd
          source_id: s_ePfgZb3Uc2LhS95ufGMDqR
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
        id: c_Gb8UTiahC3Dv6ErvfoNGUe
        subject_person_id: p_mh9E3Ld4exLjcHyAi7jLPF
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
        - id: cs_mSE1JzAndsoBGh1s4V6yEY
          claim_id: c_Gb8UTiahC3Dv6ErvfoNGUe
          source_id: s_ePfgZb3Uc2LhS95ufGMDqR
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

# 王璋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璋 | accepted |
| birth.date | 1275年 | accepted |
| death.date | 1325年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璋（CBDB 100940）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100940&o=json)
