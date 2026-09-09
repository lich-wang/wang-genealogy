---
schema: wang-person/v1
id: p_5dqAK3hD6kewBU4JbJcy31
status: active
merged_into: null
display_name: 王材
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T3kFE35dyefMcBdpUDyuLR
        subject_person_id: p_5dqAK3hD6kewBU4JbJcy31
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王材
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_735Z84PTtJ3M1GYBUEQHpY
          claim_id: c_T3kFE35dyefMcBdpUDyuLR
          source_id: s_An9gdp4F4554SBwPLfcvo1
          stance: supports
          locator: CBDB:201358
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201358）
          source: &a1
            id: s_An9gdp4F4554SBwPLfcvo1
            source_type: api_record
            title: 中国历代人物传记资料库：王材（CBDB 201358）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201358&o=json
            external_identifier: CBDB:201358
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.672Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_phpkYamFimocC1Q9QS9K9h
        subject_person_id: p_5dqAK3hD6kewBU4JbJcy31
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1461年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3buwGNGH44PjjR2Lz8B9Y7
          claim_id: c_phpkYamFimocC1Q9QS9K9h
          source_id: s_An9gdp4F4554SBwPLfcvo1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CwCNnYby4jkyMwkkXr2vr6
        subject_person_id: p_5dqAK3hD6kewBU4JbJcy31
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
        - id: cs_XqFv46oaL3zLA5Lh8ZQxJV
          claim_id: c_CwCNnYby4jkyMwkkXr2vr6
          source_id: s_An9gdp4F4554SBwPLfcvo1
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

# 王材

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王材 | accepted |
| birth.date | 1461年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王材（CBDB 201358）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201358&o=json)
