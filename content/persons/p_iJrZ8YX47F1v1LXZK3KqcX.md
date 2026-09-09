---
schema: wang-person/v1
id: p_iJrZ8YX47F1v1LXZK3KqcX
status: active
merged_into: null
display_name: 王鎰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8J34AJHxY3Gqd6FsNQh31E
        subject_person_id: p_iJrZ8YX47F1v1LXZK3KqcX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VYmbEm1PWb4QUu23SJHNe1
          claim_id: c_8J34AJHxY3Gqd6FsNQh31E
          source_id: s_S1goMek41Ko7hoC4nHSVKh
          stance: supports
          locator: CBDB:382651
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（382651）
          source: &a1
            id: s_S1goMek41Ko7hoC4nHSVKh
            source_type: api_record
            title: 中国历代人物传记资料库：王鎰（CBDB 382651）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=382651&o=json
            external_identifier: CBDB:382651
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.807Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Lkx789Lc43bqpDGYmBJhBd
        subject_person_id: p_iJrZ8YX47F1v1LXZK3KqcX
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
        - id: cs_2aUW9gVMhF1rQ7PYLgn6i4
          claim_id: c_Lkx789Lc43bqpDGYmBJhBd
          source_id: s_S1goMek41Ko7hoC4nHSVKh
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

# 王鎰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎰 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鎰（CBDB 382651）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=382651&o=json)
