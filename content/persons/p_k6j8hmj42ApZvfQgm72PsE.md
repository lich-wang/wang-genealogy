---
schema: wang-person/v1
id: p_k6j8hmj42ApZvfQgm72PsE
status: active
merged_into: null
display_name: 王守洪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KjNLx125t9xQZbHBwU6GFU
        subject_person_id: p_k6j8hmj42ApZvfQgm72PsE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守洪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JvC2fspDFv3vqvY53fcqG5
          claim_id: c_KjNLx125t9xQZbHBwU6GFU
          source_id: s_JpAJRD7a2XF2jQ2jy1Dwbq
          stance: supports
          locator: CBDB:192156
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（192156）
          source: &a1
            id: s_JpAJRD7a2XF2jQ2jy1Dwbq
            source_type: api_record
            title: 中国历代人物传记资料库：王守洪（CBDB 192156）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192156&o=json
            external_identifier: CBDB:192156
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.393Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ERZcQfHDb8TPGgEk8JcoNw
        subject_person_id: p_k6j8hmj42ApZvfQgm72PsE
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 876年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vh3y218VSuTwirBQCDE7qG
          claim_id: c_ERZcQfHDb8TPGgEk8JcoNw
          source_id: s_JpAJRD7a2XF2jQ2jy1Dwbq
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
        id: c_a7wkY2M2QJHaYLDCenRfeX
        subject_person_id: p_k6j8hmj42ApZvfQgm72PsE
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
        - id: cs_PQJMPTd5zx4K4bgo9A6dHF
          claim_id: c_a7wkY2M2QJHaYLDCenRfeX
          source_id: s_JpAJRD7a2XF2jQ2jy1Dwbq
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

# 王守洪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守洪 | accepted |
| death.date | 876年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王守洪（CBDB 192156）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192156&o=json)
