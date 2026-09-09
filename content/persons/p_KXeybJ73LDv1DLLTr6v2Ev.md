---
schema: wang-person/v1
id: p_KXeybJ73LDv1DLLTr6v2Ev
status: active
merged_into: null
display_name: 王徽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Hga4kgr1QNoEyYk6UNYa1W
        subject_person_id: p_KXeybJ73LDv1DLLTr6v2Ev
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6kNrrbmEdHiGT8JQ1nxSeW
          claim_id: c_Hga4kgr1QNoEyYk6UNYa1W
          source_id: s_Rg6P3qTXSH7GMSGxrhF1Hx
          stance: supports
          locator: CBDB:175954
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175954）
          source: &a1
            id: s_Rg6P3qTXSH7GMSGxrhF1Hx
            source_type: api_record
            title: 中国历代人物传记资料库：王徽（CBDB 175954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175954&o=json
            external_identifier: CBDB:175954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.217Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_1RHSS44sy8XX1gCWA78qVP
        subject_person_id: p_KXeybJ73LDv1DLLTr6v2Ev
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 890年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tg5FqCHiNeFFHxsU5wC9Hf
          claim_id: c_1RHSS44sy8XX1gCWA78qVP
          source_id: s_Rg6P3qTXSH7GMSGxrhF1Hx
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
        id: c_FtEQPs9KnTiyYcecQFrrDU
        subject_person_id: p_KXeybJ73LDv1DLLTr6v2Ev
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
        - id: cs_FJ2QCQSYThUKU9udNj4Aj9
          claim_id: c_FtEQPs9KnTiyYcecQFrrDU
          source_id: s_Rg6P3qTXSH7GMSGxrhF1Hx
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

# 王徽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王徽 | accepted |
| death.date | 890年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王徽（CBDB 175954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175954&o=json)
