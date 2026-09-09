---
schema: wang-person/v1
id: p_fnpmBQ1ZKezUgPxRY9fvyX
status: active
merged_into: null
display_name: 王鍾祥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PzBLdkjoXwATzE4mVS6XGH
        subject_person_id: p_fnpmBQ1ZKezUgPxRY9fvyX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍾祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ka5ssy2p4vzXZb1PPAE5iT
          claim_id: c_PzBLdkjoXwATzE4mVS6XGH
          source_id: s_Cr1nKSvibPtKZd3Y475J74
          stance: supports
          locator: CBDB:557363
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（557363）
          source: &a1
            id: s_Cr1nKSvibPtKZd3Y475J74
            source_type: api_record
            title: 中国历代人物传记资料库：王鍾祥（CBDB 557363）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557363&o=json
            external_identifier: CBDB:557363
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.668Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ukszuj1emTBDbsgxkM3XXK
        subject_person_id: p_fnpmBQ1ZKezUgPxRY9fvyX
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1637年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Cjbg16P1d6ibn1tq6jhQiZ
          claim_id: c_ukszuj1emTBDbsgxkM3XXK
          source_id: s_Cr1nKSvibPtKZd3Y475J74
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
        id: c_fJqGZsbAAAGcUYxEwG4Vok
        subject_person_id: p_fnpmBQ1ZKezUgPxRY9fvyX
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
        - id: cs_uJmJ8ezWbNDXSmJUHRL3gv
          claim_id: c_fJqGZsbAAAGcUYxEwG4Vok
          source_id: s_Cr1nKSvibPtKZd3Y475J74
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

# 王鍾祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍾祥 | accepted |
| death.date | 1637年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鍾祥（CBDB 557363）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557363&o=json)
