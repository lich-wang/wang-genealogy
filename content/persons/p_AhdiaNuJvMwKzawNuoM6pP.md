---
schema: wang-person/v1
id: p_AhdiaNuJvMwKzawNuoM6pP
status: active
merged_into: null
display_name: 王福
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1ck45ESCE5tSRZGWf9jNRv
        subject_person_id: p_AhdiaNuJvMwKzawNuoM6pP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sLvTzAJLC4trZKsoJUtk9N
          claim_id: c_1ck45ESCE5tSRZGWf9jNRv
          source_id: s_Jid8NCS7aEuzrQep5Tdpp3
          stance: supports
          locator: CBDB:39123
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39123）
          source: &a1
            id: s_Jid8NCS7aEuzrQep5Tdpp3
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 39123）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39123&o=json
            external_identifier: CBDB:39123
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.597Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tLQmkbJiZiH89Z4mP9DASu
        subject_person_id: p_AhdiaNuJvMwKzawNuoM6pP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福，宋人物。曾任左金吾衛上將軍、裨將。（中国历代人物传记资料库 CBDB 39123）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__jTdnaE02xTWQxftT5wwwM
          claim_id: c_tLQmkbJiZiH89Z4mP9DASu
          source_id: s_Jid8NCS7aEuzrQep5Tdpp3
          stance: supports
          locator: CBDB:39123
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福 | accepted |
| bio.summary | 王福，宋人物。曾任左金吾衛上將軍、裨將。（中国历代人物传记资料库 CBDB 39123） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王福（CBDB 39123）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39123&o=json)
