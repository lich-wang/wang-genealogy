---
schema: wang-person/v1
id: p_GK7WvXfHWKQpZMEBC56FiT
status: active
merged_into: null
display_name: 王相仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eknUfULim1gr8hoYxfcc8c
        subject_person_id: p_GK7WvXfHWKQpZMEBC56FiT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王相仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XMD4WkGDJ1gPe3WNL8ECGr
          claim_id: c_eknUfULim1gr8hoYxfcc8c
          source_id: s_c1tdvZgQH9ZCSE6UuYPH5g
          stance: supports
          locator: CBDB:639539
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639539）
          source: &a1
            id: s_c1tdvZgQH9ZCSE6UuYPH5g
            source_type: api_record
            title: 中国历代人物传记资料库：王相仁（CBDB 639539）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639539&o=json
            external_identifier: CBDB:639539
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.965Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bUuLAu4oob5L44rXxF2GEG
        subject_person_id: p_GK7WvXfHWKQpZMEBC56FiT
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
        - id: cs_GgumGqdV9MqM97dXV8KDXk
          claim_id: c_bUuLAu4oob5L44rXxF2GEG
          source_id: s_c1tdvZgQH9ZCSE6UuYPH5g
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

# 王相仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王相仁 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王相仁（CBDB 639539）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639539&o=json)
