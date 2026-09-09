---
schema: wang-person/v1
id: p_6LS7HSLNuHSKm1QNRy3hLS
status: active
merged_into: null
display_name: 王景陽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_htzJEF93GxiQi6zx1F7s2E
        subject_person_id: p_6LS7HSLNuHSKm1QNRy3hLS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景陽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PwzstH9q7x4r2G8HJ95Vnc
          claim_id: c_htzJEF93GxiQi6zx1F7s2E
          source_id: s_P5ai82ceGdyXmuanGWijhj
          stance: supports
          locator: CBDB:151606
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（151606）
          source: &a1
            id: s_P5ai82ceGdyXmuanGWijhj
            source_type: api_record
            title: 中国历代人物传记资料库：王景陽（CBDB 151606）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151606&o=json
            external_identifier: CBDB:151606
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.840Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8qnLkhFPqQm6B78dkMWu8C
        subject_person_id: p_6LS7HSLNuHSKm1QNRy3hLS
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
        - id: cs_gqw57knUi5fyN7oRnB7XFB
          claim_id: c_8qnLkhFPqQm6B78dkMWu8C
          source_id: s_P5ai82ceGdyXmuanGWijhj
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

# 王景陽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景陽 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景陽（CBDB 151606）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151606&o=json)
