---
schema: wang-person/v1
id: p_aCeP3bj5MQzSyc8rZRpmKD
status: active
merged_into: null
display_name: 王樂耕
cbdb_id: 238431
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_krACMYQUK4oZ7sFkpT3yAC
        subject_person_id: p_aCeP3bj5MQzSyc8rZRpmKD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樂耕，明人物。成化二年進士，籍贯新昌。（中国历代人物传记资料库 CBDB 238431）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_HExnrMQ6AmaTgSjm2OyR14
          claim_id: c_krACMYQUK4oZ7sFkpT3yAC
          source_id: s_7E1NuvDZYS8rmVinho1Th9
          stance: supports
          locator: CBDB:238431
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7E1NuvDZYS8rmVinho1Th9
            source_type: api_record
            title: 中国历代人物传记资料库：王樂耕（CBDB 238431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238431&o=json
            external_identifier: CBDB:238431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fBLnw4bqMaXW2UkgK5GHSC
        subject_person_id: p_aCeP3bj5MQzSyc8rZRpmKD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樂耕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_pPEkqhWJjLq3ZUWVg7i11Y
          claim_id: c_fBLnw4bqMaXW2UkgK5GHSC
          source_id: s_7E1NuvDZYS8rmVinho1Th9
          stance: supports
          locator: CBDB:238431
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
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

# 王樂耕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王樂耕，明人物。成化二年進士，籍贯新昌。（中国历代人物传记资料库 CBDB 238431） | accepted |
| name.primary | 王樂耕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樂耕（CBDB 238431）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238431&o=json)
