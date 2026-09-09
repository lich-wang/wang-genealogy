---
schema: wang-person/v1
id: p_sWEKPETg5FFbkgPLhLhgek
status: active
merged_into: null
display_name: 王智遠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_emK9YFoinzH5WuF8MPUwLG
        subject_person_id: p_sWEKPETg5FFbkgPLhLhgek
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王智遠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5q6ExAPtY9arjaDuxVEyFv
          claim_id: c_emK9YFoinzH5WuF8MPUwLG
          source_id: s_6NHVh4xpQhK4Y5vAA8cp8L
          stance: supports
          locator: CBDB:638520
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638520）
          source: &a1
            id: s_6NHVh4xpQhK4Y5vAA8cp8L
            source_type: api_record
            title: 中国历代人物传记资料库：王智遠（CBDB 638520）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638520&o=json
            external_identifier: CBDB:638520
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.660Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i8B4S5tqf5q5VFAW9LknEc
        subject_person_id: p_sWEKPETg5FFbkgPLhLhgek
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
        - id: cs_yhVkeLDPeS88KakDx6x5ds
          claim_id: c_i8B4S5tqf5q5VFAW9LknEc
          source_id: s_6NHVh4xpQhK4Y5vAA8cp8L
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

# 王智遠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王智遠 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王智遠（CBDB 638520）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638520&o=json)
