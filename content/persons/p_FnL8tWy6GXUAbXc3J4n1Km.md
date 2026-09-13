---
schema: wang-person/v1
id: p_FnL8tWy6GXUAbXc3J4n1Km
status: active
merged_into: null
display_name: 王褆
cbdb_id: 98020
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_19SbSfHu6XVnFGKU9jtGTP
        subject_person_id: p_FnL8tWy6GXUAbXc3J4n1Km
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王褆，宋人物。曾任左朝請大夫、右朝散大夫。（中国历代人物传记资料库 CBDB 98020）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_UI_P6bwS_ejy_PC55KRSMN
          claim_id: c_19SbSfHu6XVnFGKU9jtGTP
          source_id: s_eb4xHJ3LQkKYy5FVSXAPHH
          stance: supports
          locator: CBDB:98020
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_eb4xHJ3LQkKYy5FVSXAPHH
            source_type: api_record
            title: 中国历代人物传记资料库：王褆（CBDB 98020）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=98020&o=json
            external_identifier: CBDB:98020
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:49.564Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_YJhnYMebAHWQjbPo8Qdc5o
        subject_person_id: p_FnL8tWy6GXUAbXc3J4n1Km
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王褆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_t4wFNrHx6hTQ9BFpoKdFkP
          claim_id: c_YJhnYMebAHWQjbPo8Qdc5o
          source_id: s_eb4xHJ3LQkKYy5FVSXAPHH
          stance: supports
          locator: CBDB:98020
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1601-1700）｜历史性依据：CBDB 朝代 = 宋
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

# 王褆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王褆，宋人物。曾任左朝請大夫、右朝散大夫。（中国历代人物传记资料库 CBDB 98020） | accepted |
| name.primary | 王褆 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王褆（CBDB 98020）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=98020&o=json)
