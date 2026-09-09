---
schema: wang-person/v1
id: p_5r67yH2LpW1quL5wgmewEu
status: active
merged_into: null
display_name: 王廉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6xaXoxNHiDj5jgzmaA5A2F
        subject_person_id: p_5r67yH2LpW1quL5wgmewEu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4PPJYMbBW9Ybif3fgWGXb7
          claim_id: c_6xaXoxNHiDj5jgzmaA5A2F
          source_id: s_JGG6WmjpB6jac3DKfHvtA4
          stance: supports
          locator: CBDB:186094
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（186094）
          source: &a1
            id: s_JGG6WmjpB6jac3DKfHvtA4
            source_type: api_record
            title: 中国历代人物传记资料库：王廉（CBDB 186094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186094&o=json
            external_identifier: CBDB:186094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.256Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_uxASvsYwF7TVdwabVDZiFX
        subject_person_id: p_5r67yH2LpW1quL5wgmewEu
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 860年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xRHP14zn97FM6Dyfa8g2zs
          claim_id: c_uxASvsYwF7TVdwabVDZiFX
          source_id: s_JGG6WmjpB6jac3DKfHvtA4
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
        id: c_4MVH2ALfJQ5fVJBg5JNzry
        subject_person_id: p_5r67yH2LpW1quL5wgmewEu
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
        - id: cs_c6QyW1kwEcDnHHffjES4A4
          claim_id: c_4MVH2ALfJQ5fVJBg5JNzry
          source_id: s_JGG6WmjpB6jac3DKfHvtA4
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

# 王廉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廉 | accepted |
| death.date | 860年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廉（CBDB 186094）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186094&o=json)
