---
schema: wang-person/v1
id: p_fvMndZKpxcEgAGgAg5Fysu
status: active
merged_into: null
display_name: 王有棻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6EjMQ4FiaD4qDZupuxxrDm
        subject_person_id: p_fvMndZKpxcEgAGgAg5Fysu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有棻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UzL7gM2pcvR2ooRQzvFUuL
          claim_id: c_6EjMQ4FiaD4qDZupuxxrDm
          source_id: s_7h6mXqjGYZxWAs4iM4KZhJ
          stance: supports
          locator: CBDB:638592
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638592）
          source: &a1
            id: s_7h6mXqjGYZxWAs4iM4KZhJ
            source_type: api_record
            title: 中国历代人物传记资料库：王有棻（CBDB 638592）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638592&o=json
            external_identifier: CBDB:638592
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.687Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pKsgASsjcvqkAYRGn4GctZ
        subject_person_id: p_fvMndZKpxcEgAGgAg5Fysu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有棻，清人物。籍贯孝感，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 638592）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7Nuwq-kMXl1jfe7rMZDitW
          claim_id: c_pKsgASsjcvqkAYRGn4GctZ
          source_id: s_7h6mXqjGYZxWAs4iM4KZhJ
          stance: supports
          locator: CBDB:638592
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

# 王有棻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王有棻 | accepted |
| bio.summary | 王有棻，清人物。籍贯孝感，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 638592） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王有棻（CBDB 638592）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638592&o=json)
