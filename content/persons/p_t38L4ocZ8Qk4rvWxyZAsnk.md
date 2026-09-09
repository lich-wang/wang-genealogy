---
schema: wang-person/v1
id: p_t38L4ocZ8Qk4rvWxyZAsnk
status: active
merged_into: null
display_name: 王辭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_y6wzDPz7M5k2hhbfHXD2p6
        subject_person_id: p_t38L4ocZ8Qk4rvWxyZAsnk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王辭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aotzDxZUXQBUMuJk4DHJQr
          claim_id: c_y6wzDPz7M5k2hhbfHXD2p6
          source_id: s_EriZKw9CA4iFa4bapKNnUM
          stance: supports
          locator: CBDB:191750
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191750）
          source: &a1
            id: s_EriZKw9CA4iFa4bapKNnUM
            source_type: api_record
            title: 中国历代人物传记资料库：王辭（CBDB 191750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191750&o=json
            external_identifier: CBDB:191750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.285Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_FQmFqaEXX39vWBFtriq8YH
        subject_person_id: p_t38L4ocZ8Qk4rvWxyZAsnk
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 868年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Wcxi8iBxtC4mJa5VkaD1G8
          claim_id: c_FQmFqaEXX39vWBFtriq8YH
          source_id: s_EriZKw9CA4iFa4bapKNnUM
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
        id: c_XKDEhGpNpF5jsPZ19Fc2GU
        subject_person_id: p_t38L4ocZ8Qk4rvWxyZAsnk
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
        - id: cs_que4zR7ASFBxf4i6CfuYWB
          claim_id: c_XKDEhGpNpF5jsPZ19Fc2GU
          source_id: s_EriZKw9CA4iFa4bapKNnUM
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

# 王辭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王辭 | accepted |
| death.date | 868年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王辭（CBDB 191750）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191750&o=json)
