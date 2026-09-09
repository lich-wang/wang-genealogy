---
schema: wang-person/v1
id: p_71wA1WBKNigYP3J95ubbnB
status: active
merged_into: null
display_name: 王迪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZG4WgfANfiUQd5JVNCQhcs
        subject_person_id: p_71wA1WBKNigYP3J95ubbnB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nVghUSS4kFbuT3hxXwmokp
          claim_id: c_ZG4WgfANfiUQd5JVNCQhcs
          source_id: s_JCmkP8jkpc9wa1MzMrme3F
          stance: supports
          locator: CBDB:476959
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（476959）
          source: &a1
            id: s_JCmkP8jkpc9wa1MzMrme3F
            source_type: api_record
            title: 中国历代人物传记资料库：王迪（CBDB 476959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476959&o=json
            external_identifier: CBDB:476959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.495Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nqdTC55Mxr5S2RGNwfYJ7G
        subject_person_id: p_71wA1WBKNigYP3J95ubbnB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jHc9TB7uLnrVbSZAm9E6Z6
          claim_id: c_nqdTC55Mxr5S2RGNwfYJ7G
          source_id: s_JCmkP8jkpc9wa1MzMrme3F
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

# 王迪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王迪 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王迪（CBDB 476959）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476959&o=json)
