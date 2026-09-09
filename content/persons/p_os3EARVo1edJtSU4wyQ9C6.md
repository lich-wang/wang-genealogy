---
schema: wang-person/v1
id: p_os3EARVo1edJtSU4wyQ9C6
status: active
merged_into: null
display_name: 王錫朋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F2ddY75E6nxHkwpR2hsoxN
        subject_person_id: p_os3EARVo1edJtSU4wyQ9C6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫朋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XQ57mxJSq6wSGCPiGh8c5C
          claim_id: c_F2ddY75E6nxHkwpR2hsoxN
          source_id: s_TPdR3oLiy1F3ZtRWyubAuW
          stance: supports
          locator: CBDB:58634
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（58634）
          source: &a1
            id: s_TPdR3oLiy1F3ZtRWyubAuW
            source_type: api_record
            title: 中国历代人物传记资料库：王錫朋（CBDB 58634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58634&o=json
            external_identifier: CBDB:58634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.827Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_uFNqLUx9LHGwzh5n7MZLT3
        subject_person_id: p_os3EARVo1edJtSU4wyQ9C6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1786年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1uX6KniYty9drAvFyLmMBu
          claim_id: c_uFNqLUx9LHGwzh5n7MZLT3
          source_id: s_TPdR3oLiy1F3ZtRWyubAuW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_UAac5HrmLnXfbrE5We7PVC
        subject_person_id: p_os3EARVo1edJtSU4wyQ9C6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1841年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BJgPEJbkMjHeanSQqNc1Bk
          claim_id: c_UAac5HrmLnXfbrE5We7PVC
          source_id: s_TPdR3oLiy1F3ZtRWyubAuW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_S82uh7cJKZV8LBUQxMV65u
        subject_person_id: p_os3EARVo1edJtSU4wyQ9C6
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
        - id: cs_pGSD6sL1M6EQHmBrmtoLo5
          claim_id: c_S82uh7cJKZV8LBUQxMV65u
          source_id: s_TPdR3oLiy1F3ZtRWyubAuW
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

# 王錫朋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫朋 | accepted |
| birth.date | 1786年 | accepted |
| death.date | 1841年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫朋（CBDB 58634）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58634&o=json)
