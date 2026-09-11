---
schema: wang-person/v1
id: p_YQmohQMof7MN9P7sAdtm9x
status: active
merged_into: null
display_name: 王琳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UwpUAQo7Zt3FgQv9wVQKNG
        subject_person_id: p_YQmohQMof7MN9P7sAdtm9x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XK2UYk1UqG2UbfFcZidjnN
          claim_id: c_UwpUAQo7Zt3FgQv9wVQKNG
          source_id: s_XD1N1NBJZhe62r2XFuU9f2
          stance: supports
          locator: CBDB:490727
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（490727）
          source: &a1
            id: s_XD1N1NBJZhe62r2XFuU9f2
            source_type: api_record
            title: 中国历代人物传记资料库：王琳（CBDB 490727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490727&o=json
            external_identifier: CBDB:490727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.141Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YVD4tmAgcsZba7XZYJ7GYS
        subject_person_id: p_YQmohQMof7MN9P7sAdtm9x
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琳，清人物。曾任典史。（中国历代人物传记资料库 CBDB 490727）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Q6CAp-ektwLPaixarR1bD9
          claim_id: c_YVD4tmAgcsZba7XZYJ7GYS
          source_id: s_XD1N1NBJZhe62r2XFuU9f2
          stance: supports
          locator: CBDB:490727
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

# 王琳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琳 | accepted |
| bio.summary | 王琳，清人物。曾任典史。（中国历代人物传记资料库 CBDB 490727） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琳（CBDB 490727）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490727&o=json)
