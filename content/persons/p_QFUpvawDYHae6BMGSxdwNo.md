---
schema: wang-person/v1
id: p_QFUpvawDYHae6BMGSxdwNo
status: active
merged_into: null
display_name: 王堯恆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PUpzmvL6HWu5CgLrwpBPtJ
        subject_person_id: p_QFUpvawDYHae6BMGSxdwNo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯恆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3P1u5aShEoXU7kRFWTSPHr
          claim_id: c_PUpzmvL6HWu5CgLrwpBPtJ
          source_id: s_paapAnbiZ6ejo76uuUhZMZ
          stance: supports
          locator: CBDB:637297
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637297）
          source: &a1
            id: s_paapAnbiZ6ejo76uuUhZMZ
            source_type: api_record
            title: 中国历代人物传记资料库：王堯恆（CBDB 637297）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637297&o=json
            external_identifier: CBDB:637297
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.272Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cMv1DMCHWdF2wJHxMFF3Dp
        subject_person_id: p_QFUpvawDYHae6BMGSxdwNo
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
        - id: cs_5tedmiN9fRWLEHzgaqbXVK
          claim_id: c_cMv1DMCHWdF2wJHxMFF3Dp
          source_id: s_paapAnbiZ6ejo76uuUhZMZ
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

# 王堯恆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王堯恆 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王堯恆（CBDB 637297）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637297&o=json)
