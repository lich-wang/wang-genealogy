---
schema: wang-person/v1
id: p_5qYFTjkNoXR6BRLZ57MvRq
status: active
merged_into: null
display_name: 王仲某
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vChLJ2Zpph6m8dwaJNq52X
        subject_person_id: p_5qYFTjkNoXR6BRLZ57MvRq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲某
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YXqLnDogCq3uQMgEeX8bA7
          claim_id: c_vChLJ2Zpph6m8dwaJNq52X
          source_id: s_ER4pC2JnY8NoCkLJhLyc6E
          stance: supports
          locator: CBDB:700861
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（700861）
          source: &a1
            id: s_ER4pC2JnY8NoCkLJhLyc6E
            source_type: api_record
            title: 中国历代人物传记资料库：王仲某（CBDB 700861）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700861&o=json
            external_identifier: CBDB:700861
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.598Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UTXu5VFYwmgdGsqtRXXxJe
        subject_person_id: p_5qYFTjkNoXR6BRLZ57MvRq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e9PC9jRYG9uWjwncGLCX1c
          claim_id: c_UTXu5VFYwmgdGsqtRXXxJe
          source_id: s_ER4pC2JnY8NoCkLJhLyc6E
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

# 王仲某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲某 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仲某（CBDB 700861）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700861&o=json)
