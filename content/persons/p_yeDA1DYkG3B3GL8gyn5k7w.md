---
schema: wang-person/v1
id: p_yeDA1DYkG3B3GL8gyn5k7w
status: active
merged_into: null
display_name: 王貫三
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_i4no69MfEfvr4vFECUJq7T
        subject_person_id: p_yeDA1DYkG3B3GL8gyn5k7w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貫三
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ag2UqqHgFE4zeiKKUo6GsE
          claim_id: c_i4no69MfEfvr4vFECUJq7T
          source_id: s_XGe8vgBJjXBKfckAUS3Bej
          stance: supports
          locator: CBDB:71834
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71834）
          source: &a1
            id: s_XGe8vgBJjXBKfckAUS3Bej
            source_type: api_record
            title: 中国历代人物传记资料库：王貫三（CBDB 71834）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71834&o=json
            external_identifier: CBDB:71834
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.891Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_AH6huTbYewm6eTcG1rmuPL
        subject_person_id: p_yeDA1DYkG3B3GL8gyn5k7w
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1648年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K6iZMrvvMZna2Hsy8KrXH4
          claim_id: c_AH6huTbYewm6eTcG1rmuPL
          source_id: s_XGe8vgBJjXBKfckAUS3Bej
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_iPNEu2r56kddaAzb3QMGTp
        subject_person_id: p_yeDA1DYkG3B3GL8gyn5k7w
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1720年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_29aMM6XZvaCsfAeJYd9xLV
          claim_id: c_iPNEu2r56kddaAzb3QMGTp
          source_id: s_XGe8vgBJjXBKfckAUS3Bej
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
        id: c_nH55JVkmKV1Wf16MiPSLvz
        subject_person_id: p_yeDA1DYkG3B3GL8gyn5k7w
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
        - id: cs_PfuH6TVLcKn6VQE3SS7Foz
          claim_id: c_nH55JVkmKV1Wf16MiPSLvz
          source_id: s_XGe8vgBJjXBKfckAUS3Bej
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

# 王貫三

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貫三 | accepted |
| birth.date | 1648年 | accepted |
| death.date | 1720年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王貫三（CBDB 71834）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71834&o=json)
