---
schema: wang-person/v1
id: p_hzXh8ePRKcPqm7mPj4i9Ew
status: active
merged_into: null
display_name: 王文耀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N5p58CX3A3YdisrQ4GAb98
        subject_person_id: p_hzXh8ePRKcPqm7mPj4i9Ew
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文耀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HkbBnByjwmeJKEF2X4isU9
          claim_id: c_N5p58CX3A3YdisrQ4GAb98
          source_id: s_XouvGQt8DdA9Vu9iNmAQyE
          stance: supports
          locator: CBDB:488247
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（488247）
          source: &a1
            id: s_XouvGQt8DdA9Vu9iNmAQyE
            source_type: api_record
            title: 中国历代人物传记资料库：王文耀（CBDB 488247）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=488247&o=json
            external_identifier: CBDB:488247
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.986Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GDBGzPA8y17qw2cUmCo97N
        subject_person_id: p_hzXh8ePRKcPqm7mPj4i9Ew
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
        - id: cs_5ZRgT5DXMrK8A2rCAywS3H
          claim_id: c_GDBGzPA8y17qw2cUmCo97N
          source_id: s_XouvGQt8DdA9Vu9iNmAQyE
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

# 王文耀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文耀 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文耀（CBDB 488247）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=488247&o=json)
