---
schema: wang-person/v1
id: p_yYAPAC96fgCvfvGxbcFpmK
status: active
merged_into: null
display_name: 王汝瑚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ikjHugT3G611xqxJA3551K
        subject_person_id: p_yYAPAC96fgCvfvGxbcFpmK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝瑚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t5YxHcLySS1tSCzMKBy4Nw
          claim_id: c_ikjHugT3G611xqxJA3551K
          source_id: s_RvmEESd3GTqAxWCHK43h8o
          stance: supports
          locator: CBDB:696653
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（696653）
          source: &a1
            id: s_RvmEESd3GTqAxWCHK43h8o
            source_type: api_record
            title: 中国历代人物传记资料库：王汝瑚（CBDB 696653）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696653&o=json
            external_identifier: CBDB:696653
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.552Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nd4q9uZGFrrgUcxQAUkNoG
        subject_person_id: p_yYAPAC96fgCvfvGxbcFpmK
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
        - id: cs_W4NQkw4T7baxFqQ3pdrzFV
          claim_id: c_nd4q9uZGFrrgUcxQAUkNoG
          source_id: s_RvmEESd3GTqAxWCHK43h8o
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

# 王汝瑚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝瑚 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝瑚（CBDB 696653）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696653&o=json)
