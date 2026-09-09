---
schema: wang-person/v1
id: p_3vv94kaBWa8sUxdLF8B6cN
status: active
merged_into: null
display_name: 王偉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SrcmGHiJr4GXT1Nr7AJ391
        subject_person_id: p_3vv94kaBWa8sUxdLF8B6cN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VQN5pFuRAUCmHiXCkVTNpJ
          claim_id: c_SrcmGHiJr4GXT1Nr7AJ391
          source_id: s_pYNPwMic5enMTAbLgLaDrN
          stance: supports
          locator: CBDB:67398
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67398）
          source: &a1
            id: s_pYNPwMic5enMTAbLgLaDrN
            source_type: api_record
            title: 中国历代人物传记资料库：王偉（CBDB 67398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67398&o=json
            external_identifier: CBDB:67398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.992Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8EcLoJ7JzvR4pEYW6H1GjV
        subject_person_id: p_3vv94kaBWa8sUxdLF8B6cN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1417年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hbmhH81cayneAFGnc9J5TQ
          claim_id: c_8EcLoJ7JzvR4pEYW6H1GjV
          source_id: s_pYNPwMic5enMTAbLgLaDrN
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
        id: c_2ZxW71QrqgJmw9uNxa8hVy
        subject_person_id: p_3vv94kaBWa8sUxdLF8B6cN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1469年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TnDB3riwFLbHu3HNA29fVo
          claim_id: c_2ZxW71QrqgJmw9uNxa8hVy
          source_id: s_pYNPwMic5enMTAbLgLaDrN
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
        id: c_ix5QJh54pQPFxYMpFNUeXg
        subject_person_id: p_3vv94kaBWa8sUxdLF8B6cN
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
        - id: cs_ggRuaWM6hUEhEgb4fD5CBE
          claim_id: c_ix5QJh54pQPFxYMpFNUeXg
          source_id: s_pYNPwMic5enMTAbLgLaDrN
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

# 王偉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王偉 | accepted |
| birth.date | 1417年 | accepted |
| death.date | 1469年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王偉（CBDB 67398）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67398&o=json)
