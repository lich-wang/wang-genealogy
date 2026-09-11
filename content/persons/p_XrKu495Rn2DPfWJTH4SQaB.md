---
schema: wang-person/v1
id: p_XrKu495Rn2DPfWJTH4SQaB
status: active
merged_into: null
display_name: 王偁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c9aNjnQpbTfLKcPTkMTgzp
        subject_person_id: p_XrKu495Rn2DPfWJTH4SQaB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1dmxXw5gR49QXdfM34kEoo
          claim_id: c_c9aNjnQpbTfLKcPTkMTgzp
          source_id: s_EPUTGt3gQG5sRrGHVkDzV6
          stance: supports
          locator: CBDB:16695
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（16695）
          source: &a1
            id: s_EPUTGt3gQG5sRrGHVkDzV6
            source_type: api_record
            title: 中国历代人物传记资料库：王偁（CBDB 16695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16695&o=json
            external_identifier: CBDB:16695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.654Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H4e9RpiRJ9H323H8wMYu5p
        subject_person_id: p_XrKu495Rn2DPfWJTH4SQaB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偁，元人物。籍贯婺源州，身份为處士。（中国历代人物传记资料库 CBDB 16695）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3bCqhOrF3KHmPQvi88waSf
          claim_id: c_H4e9RpiRJ9H323H8wMYu5p
          source_id: s_EPUTGt3gQG5sRrGHVkDzV6
          stance: supports
          locator: CBDB:16695
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

# 王偁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王偁 | accepted |
| bio.summary | 王偁，元人物。籍贯婺源州，身份为處士。（中国历代人物传记资料库 CBDB 16695） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王偁（CBDB 16695）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16695&o=json)
