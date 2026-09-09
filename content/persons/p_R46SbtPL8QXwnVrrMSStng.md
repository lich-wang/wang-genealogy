---
schema: wang-person/v1
id: p_R46SbtPL8QXwnVrrMSStng
status: active
merged_into: null
display_name: 王伋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HBkjmvGiPt4L2dZejChEAo
        subject_person_id: p_R46SbtPL8QXwnVrrMSStng
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C15SvAud2bFg7h9Puytw5v
          claim_id: c_HBkjmvGiPt4L2dZejChEAo
          source_id: s_uE3icrt7aHvHGb3A58yQvU
          stance: supports
          locator: CBDB:381240
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（381240）
          source: &a1
            id: s_uE3icrt7aHvHGb3A58yQvU
            source_type: api_record
            title: 中国历代人物传记资料库：王伋（CBDB 381240）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=381240&o=json
            external_identifier: CBDB:381240
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.762Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y85pYmNTuJBBTKzJHUxju7
        subject_person_id: p_R46SbtPL8QXwnVrrMSStng
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
        - id: cs_J3M4HMSwNZEQNPTrGvKSPM
          claim_id: c_y85pYmNTuJBBTKzJHUxju7
          source_id: s_uE3icrt7aHvHGb3A58yQvU
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

# 王伋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伋 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王伋（CBDB 381240）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=381240&o=json)
