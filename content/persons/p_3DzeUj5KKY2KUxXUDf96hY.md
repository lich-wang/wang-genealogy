---
schema: wang-person/v1
id: p_3DzeUj5KKY2KUxXUDf96hY
status: active
merged_into: null
display_name: 王桑中
cbdb_id: 37562
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nt8z7axwq8CjLQE3uDTPLo
        subject_person_id: p_3DzeUj5KKY2KUxXUDf96hY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桑中，宋人物。籍贯陽曲，入仕恩蔭、蔭補。（中国历代人物传记资料库 CBDB 37562）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_4BGjjsLj5IPa18Cn4H74g6
          claim_id: c_nt8z7axwq8CjLQE3uDTPLo
          source_id: s_xGjn6G7yVxL2Cms8YaJgrZ
          stance: supports
          locator: CBDB:37562
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_xGjn6G7yVxL2Cms8YaJgrZ
            source_type: api_record
            title: 中国历代人物传记资料库：王桑中（CBDB 37562）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37562&o=json
            external_identifier: CBDB:37562
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hcqCkzUDQnwWY7SrHfysXr
        subject_person_id: p_3DzeUj5KKY2KUxXUDf96hY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桑中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JpCGP8zFaED5AXbhMgjUb9
          claim_id: c_hcqCkzUDQnwWY7SrHfysXr
          source_id: s_xGjn6G7yVxL2Cms8YaJgrZ
          stance: supports
          locator: CBDB:37562
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 宋
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

# 王桑中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王桑中，宋人物。籍贯陽曲，入仕恩蔭、蔭補。（中国历代人物传记资料库 CBDB 37562） | accepted |
| name.primary | 王桑中 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王桑中（CBDB 37562）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37562&o=json)
