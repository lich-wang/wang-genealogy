---
schema: wang-person/v1
id: p_wE3rAWzCxDc33TCKM7R8Ha
status: active
merged_into: null
display_name: 王普豐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RLWuYX5aacBWJWiwGFMEPg
        subject_person_id: p_wE3rAWzCxDc33TCKM7R8Ha
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王普豐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FoD53xWKzdZ6xGwEFH6w2C
          claim_id: c_RLWuYX5aacBWJWiwGFMEPg
          source_id: s_9WkNxij9k5V3FHfoRK5Z6m
          stance: supports
          locator: CBDB:638467
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638467）
          source: &a1
            id: s_9WkNxij9k5V3FHfoRK5Z6m
            source_type: api_record
            title: 中国历代人物传记资料库：王普豐（CBDB 638467）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638467&o=json
            external_identifier: CBDB:638467
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.643Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EDnLP5ARKzfH5MQV6pXqQe
        subject_person_id: p_wE3rAWzCxDc33TCKM7R8Ha
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王普豐，清人物。籍贯甯都直隸州甯都直隸州前鋪，曾任主事。（中国历代人物传记资料库 CBDB 638467）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ooFfbZXyU6z0ZuiM0Ke0m8
          claim_id: c_EDnLP5ARKzfH5MQV6pXqQe
          source_id: s_9WkNxij9k5V3FHfoRK5Z6m
          stance: supports
          locator: CBDB:638467
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

# 王普豐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王普豐 | accepted |
| bio.summary | 王普豐，清人物。籍贯甯都直隸州甯都直隸州前鋪，曾任主事。（中国历代人物传记资料库 CBDB 638467） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王普豐（CBDB 638467）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638467&o=json)
