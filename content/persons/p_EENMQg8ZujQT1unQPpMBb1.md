---
schema: wang-person/v1
id: p_EENMQg8ZujQT1unQPpMBb1
status: active
merged_into: null
display_name: 王介
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_p6PJJjL2D1FJDnevWruWj9
        subject_person_id: p_EENMQg8ZujQT1unQPpMBb1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王介
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QqCwgXMwSseCo75m8nQBVm
          claim_id: c_p6PJJjL2D1FJDnevWruWj9
          source_id: s_ZcZWeKvjxMt4rBpGSfC73u
          stance: supports
          locator: CBDB:297194
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297194）
          source: &a1
            id: s_ZcZWeKvjxMt4rBpGSfC73u
            source_type: api_record
            title: 中国历代人物传记资料库：王介（CBDB 297194）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297194&o=json
            external_identifier: CBDB:297194
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.561Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RTP1tKMLZ2BmESKziRHueR
        subject_person_id: p_EENMQg8ZujQT1unQPpMBb1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王介，明人物。嘉靖十四年進士，籍贯侯官，曾任府同知。（中国历代人物传记资料库 CBDB 297194）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SKiHZDhBCXcJdU8Ia4CzUh
          claim_id: c_RTP1tKMLZ2BmESKziRHueR
          source_id: s_ZcZWeKvjxMt4rBpGSfC73u
          stance: supports
          locator: CBDB:297194
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_2wjC0S9K9dlJQWIxVm--U3
        subject_person_id: p_EENMQg8ZujQT1unQPpMBb1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ejkhqRyi6zguVhFhs63Ax7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1NQZYJVjeE1NoYf5gnjwIr
          claim_id: c_2wjC0S9K9dlJQWIxVm--U3
          source_id: s_ZcZWeKvjxMt4rBpGSfC73u
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百零六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ejkhqRyi6zguVhFhs63Ax7
        status: active
        display_name: 王鏜
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王介

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王介 | accepted |
| bio.summary | 王介，明人物。嘉靖十四年進士，籍贯侯官，曾任府同知。（中国历代人物传记资料库 CBDB 297194） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ejkhqRyi6zguVhFhs63Ax7 | 王鏜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王介（CBDB 297194）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297194&o=json)
