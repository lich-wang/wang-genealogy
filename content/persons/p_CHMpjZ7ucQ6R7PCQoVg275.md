---
schema: wang-person/v1
id: p_CHMpjZ7ucQ6R7PCQoVg275
status: active
merged_into: null
display_name: 王景
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cg4uc1WkHsAxrUUtDu1kPL
        subject_person_id: p_CHMpjZ7ucQ6R7PCQoVg275
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wF19FEwstGN4N7poydHUL2
          claim_id: c_cg4uc1WkHsAxrUUtDu1kPL
          source_id: s_FSDDkvK79c5wgq8JZ3fLHj
          stance: supports
          locator: CBDB:170246
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（170246）
          source: &a1
            id: s_FSDDkvK79c5wgq8JZ3fLHj
            source_type: api_record
            title: 中国历代人物传记资料库：王景（CBDB 170246）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170246&o=json
            external_identifier: CBDB:170246
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.030Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_5CJ1GpLyYbghryjAC6Qwq9
        subject_person_id: p_CHMpjZ7ucQ6R7PCQoVg275
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 727年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MqRhErBTdKgX2o9VA3S4ao
          claim_id: c_5CJ1GpLyYbghryjAC6Qwq9
          source_id: s_FSDDkvK79c5wgq8JZ3fLHj
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
        id: c_379ugmdiyj1BX3V6Dv9YFp
        subject_person_id: p_CHMpjZ7ucQ6R7PCQoVg275
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
        - id: cs_4Fho5Wn9cTAx3K7RwLmV9C
          claim_id: c_379ugmdiyj1BX3V6Dv9YFp
          source_id: s_FSDDkvK79c5wgq8JZ3fLHj
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

# 王景

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景 | accepted |
| death.date | 727年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景（CBDB 170246）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170246&o=json)
