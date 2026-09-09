---
schema: wang-person/v1
id: p_1D7RB15BHLuwCjT8rR8VHQ
status: active
merged_into: null
display_name: 王奇哲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VNPgxNRFW647htj14bLvGe
        subject_person_id: p_1D7RB15BHLuwCjT8rR8VHQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奇哲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TUn6kZnBh4AAqC3dAdAaY3
          claim_id: c_VNPgxNRFW647htj14bLvGe
          source_id: s_rJJEf6XoNiYcXwHwXx9wiG
          stance: supports
          locator: CBDB:194722
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（194722）
          source: &a1
            id: s_rJJEf6XoNiYcXwHwXx9wiG
            source_type: api_record
            title: 中国历代人物传记资料库：王奇哲（CBDB 194722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194722&o=json
            external_identifier: CBDB:194722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.455Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_9ThaYvHiCiGeFbLxE4o8w8
        subject_person_id: p_1D7RB15BHLuwCjT8rR8VHQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 774年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dqTXbGzZh7WqefdC32gBnh
          claim_id: c_9ThaYvHiCiGeFbLxE4o8w8
          source_id: s_rJJEf6XoNiYcXwHwXx9wiG
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
        id: c_PjjbcJYa1c1MdpAkXTEvVR
        subject_person_id: p_1D7RB15BHLuwCjT8rR8VHQ
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
        - id: cs_J5Cwix1cAUBZQLee7QF69w
          claim_id: c_PjjbcJYa1c1MdpAkXTEvVR
          source_id: s_rJJEf6XoNiYcXwHwXx9wiG
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

# 王奇哲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王奇哲 | accepted |
| death.date | 774年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王奇哲（CBDB 194722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194722&o=json)
