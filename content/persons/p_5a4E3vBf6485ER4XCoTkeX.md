---
schema: wang-person/v1
id: p_5a4E3vBf6485ER4XCoTkeX
status: active
merged_into: null
display_name: 王玉鉉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CwFcCa9xjJbsTeSAwmEbA2
        subject_person_id: p_5a4E3vBf6485ER4XCoTkeX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉鉉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AfnhmGZ2TKyYVJy4p79C4o
          claim_id: c_CwFcCa9xjJbsTeSAwmEbA2
          source_id: s_VGTPYyeRc3KddnGW4Ek68d
          stance: supports
          locator: CBDB:565431
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（565431）
          source: &a1
            id: s_VGTPYyeRc3KddnGW4Ek68d
            source_type: api_record
            title: 中国历代人物传记资料库：王玉鉉（CBDB 565431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=565431&o=json
            external_identifier: CBDB:565431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.572Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Rz7NtrFtzLpCeW7v8r7Am7
        subject_person_id: p_5a4E3vBf6485ER4XCoTkeX
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
        - id: cs_2cpyysdxy1NDRoFQJJwnyn
          claim_id: c_Rz7NtrFtzLpCeW7v8r7Am7
          source_id: s_VGTPYyeRc3KddnGW4Ek68d
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

# 王玉鉉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玉鉉 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玉鉉（CBDB 565431）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=565431&o=json)
