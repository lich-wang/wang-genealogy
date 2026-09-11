---
schema: wang-person/v1
id: p_7uPxX1R6JJcQ42EK42yp8L
status: active
merged_into: null
display_name: 王廷鶴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cChtp9aAkm7F8ZzWXoTrHp
        subject_person_id: p_7uPxX1R6JJcQ42EK42yp8L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷鶴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dPKZXQQs9wr25PG4ug4HSA
          claim_id: c_cChtp9aAkm7F8ZzWXoTrHp
          source_id: s_MLc852QoETFAqS3ogi272B
          stance: supports
          locator: CBDB:500982
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（500982）
          source: &a1
            id: s_MLc852QoETFAqS3ogi272B
            source_type: api_record
            title: 中国历代人物传记资料库：王廷鶴（CBDB 500982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=500982&o=json
            external_identifier: CBDB:500982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.816Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mtQAYD4BiE9a8gbHHa7F4u
        subject_person_id: p_7uPxX1R6JJcQ42EK42yp8L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷鶴，清人物。曾任州吏目。（中国历代人物传记资料库 CBDB 500982）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_q5MwpBusrwS6zMLbQlnsvn
          claim_id: c_mtQAYD4BiE9a8gbHHa7F4u
          source_id: s_MLc852QoETFAqS3ogi272B
          stance: supports
          locator: CBDB:500982
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

# 王廷鶴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷鶴 | accepted |
| bio.summary | 王廷鶴，清人物。曾任州吏目。（中国历代人物传记资料库 CBDB 500982） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷鶴（CBDB 500982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=500982&o=json)
