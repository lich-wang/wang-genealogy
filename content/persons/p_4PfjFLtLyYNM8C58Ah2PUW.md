---
schema: wang-person/v1
id: p_4PfjFLtLyYNM8C58Ah2PUW
status: active
merged_into: null
display_name: 王淮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tJtyy5B9mfKun5fLX49qz3
        subject_person_id: p_4PfjFLtLyYNM8C58Ah2PUW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2FZz8hBt2Spoo7Nov87fuK
          claim_id: c_tJtyy5B9mfKun5fLX49qz3
          source_id: s_s9GRGEqzpYsjfRAGs754YU
          stance: supports
          locator: CBDB:185898
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（185898）
          source: &a1
            id: s_s9GRGEqzpYsjfRAGs754YU
            source_type: api_record
            title: 中国历代人物传记资料库：王淮（CBDB 185898）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185898&o=json
            external_identifier: CBDB:185898
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.250Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_AvyD9G53erpE1NvwMurUgG
        subject_person_id: p_4PfjFLtLyYNM8C58Ah2PUW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 814年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EbnGVKRbCGh6D3iGWNYFjy
          claim_id: c_AvyD9G53erpE1NvwMurUgG
          source_id: s_s9GRGEqzpYsjfRAGs754YU
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
        id: c_Abn96jRjX5G8uA89qPzMdz
        subject_person_id: p_4PfjFLtLyYNM8C58Ah2PUW
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
        - id: cs_K1oa3FV5yqAJ3NmsVN6HdA
          claim_id: c_Abn96jRjX5G8uA89qPzMdz
          source_id: s_s9GRGEqzpYsjfRAGs754YU
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

# 王淮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淮 | accepted |
| death.date | 814年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王淮（CBDB 185898）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185898&o=json)
