---
schema: wang-person/v1
id: p_nQA757CFhscDzaTz7pk2z5
status: active
merged_into: null
display_name: 王起岱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FgoUNBUGXn2gGsFFMzNK7g
        subject_person_id: p_nQA757CFhscDzaTz7pk2z5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王起岱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ULDZRgPJNbSu3C7gJRRuUb
          claim_id: c_FgoUNBUGXn2gGsFFMzNK7g
          source_id: s_JvGeKYuHry9DeDK8NpMjTD
          stance: supports
          locator: CBDB:71937
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71937）
          source: &a1
            id: s_JvGeKYuHry9DeDK8NpMjTD
            source_type: api_record
            title: 中国历代人物传记资料库：王起岱（CBDB 71937）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71937&o=json
            external_identifier: CBDB:71937
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.930Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_yASjKdg3585fFmeB76oUKA
        subject_person_id: p_nQA757CFhscDzaTz7pk2z5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1626年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ex1Le7LWWxDg5NBfBqfq6y
          claim_id: c_yASjKdg3585fFmeB76oUKA
          source_id: s_JvGeKYuHry9DeDK8NpMjTD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QqPG3DeuWxAa5z8K74FRg8
        subject_person_id: p_nQA757CFhscDzaTz7pk2z5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RtkCCygxEF5PXpEMZzbRZU
          claim_id: c_QqPG3DeuWxAa5z8K74FRg8
          source_id: s_JvGeKYuHry9DeDK8NpMjTD
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

# 王起岱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王起岱 | accepted |
| birth.date | 1626年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王起岱（CBDB 71937）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71937&o=json)
