---
schema: wang-person/v1
id: p_wKfvgdvNixuHKZaA84Vuyy
status: active
merged_into: null
display_name: 王桂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BPkkM3pBPUcJxaQZ9miaLd
        subject_person_id: p_wKfvgdvNixuHKZaA84Vuyy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SisS6cB8NnWGyZVeyAr8xw
          claim_id: c_BPkkM3pBPUcJxaQZ9miaLd
          source_id: s_7h1Zwe6mg1j6B2XYn4629k
          stance: supports
          locator: CBDB:38084
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38084）
          source: &a1
            id: s_7h1Zwe6mg1j6B2XYn4629k
            source_type: api_record
            title: 中国历代人物传记资料库：王桂（CBDB 38084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38084&o=json
            external_identifier: CBDB:38084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.353Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_tzZ2HQPvWcyo6yNsgrCSCh
        subject_person_id: p_wKfvgdvNixuHKZaA84Vuyy
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1252年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5LgsYsH26u44h2MCUMe2Cr
          claim_id: c_tzZ2HQPvWcyo6yNsgrCSCh
          source_id: s_7h1Zwe6mg1j6B2XYn4629k
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
        id: c_kf8G4PAgFVzpqQeJKFMqJp
        subject_person_id: p_wKfvgdvNixuHKZaA84Vuyy
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1339年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FGQZtcWGshVYQ2tHy6jpgB
          claim_id: c_kf8G4PAgFVzpqQeJKFMqJp
          source_id: s_7h1Zwe6mg1j6B2XYn4629k
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
        id: c_jwC3k3kJr4JdwUETknUNmY
        subject_person_id: p_wKfvgdvNixuHKZaA84Vuyy
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
        - id: cs_3p2eaKPfnAwBChwRqXHWbS
          claim_id: c_jwC3k3kJr4JdwUETknUNmY
          source_id: s_7h1Zwe6mg1j6B2XYn4629k
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

# 王桂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王桂 | accepted |
| birth.date | 1252年 | accepted |
| death.date | 1339年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王桂（CBDB 38084）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38084&o=json)
