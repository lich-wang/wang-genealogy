---
schema: wang-person/v1
id: p_MxfkYgB2QF4i2XgNUUKstw
status: active
merged_into: null
display_name: 王松
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_19B1nirpLnH25JEgszJCXK
        subject_person_id: p_MxfkYgB2QF4i2XgNUUKstw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王松
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NP2rDwi9VtXYX6BGpL9xoh
          claim_id: c_19B1nirpLnH25JEgszJCXK
          source_id: s_eTLZ8HFJkEGHgH9x114Fj1
          stance: supports
          locator: CBDB:175957
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175957）
          source: &a1
            id: s_eTLZ8HFJkEGHgH9x114Fj1
            source_type: api_record
            title: 中国历代人物传记资料库：王松（CBDB 175957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175957&o=json
            external_identifier: CBDB:175957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.221Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_UBWvEHMVL2zSXsMMjMwGL1
        subject_person_id: p_MxfkYgB2QF4i2XgNUUKstw
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 927年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zg5zsn63PVjLb2LNsUBk1D
          claim_id: c_UBWvEHMVL2zSXsMMjMwGL1
          source_id: s_eTLZ8HFJkEGHgH9x114Fj1
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
        id: c_TX7do9cfeAErbQkzJZ14CC
        subject_person_id: p_MxfkYgB2QF4i2XgNUUKstw
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
        - id: cs_tWJkWqfPTjmxsYDGmf2vqc
          claim_id: c_TX7do9cfeAErbQkzJZ14CC
          source_id: s_eTLZ8HFJkEGHgH9x114Fj1
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

# 王松

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王松 | accepted |
| death.date | 927年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王松（CBDB 175957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175957&o=json)
