---
schema: wang-person/v1
id: p_wXJ843DgbMxsLWCKgXC1tP
status: active
merged_into: null
display_name: 王金華
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qYX9UoXjFJV67JW1Kwe5Py
        subject_person_id: p_wXJ843DgbMxsLWCKgXC1tP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uwfr3xurxMbPyCnELZ2yUA
          claim_id: c_qYX9UoXjFJV67JW1Kwe5Py
          source_id: s_YRZXfQ9C6JYaraoyDQ8LQc
          stance: supports
          locator: CBDB:640523
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640523）
          source: &a1
            id: s_YRZXfQ9C6JYaraoyDQ8LQc
            source_type: api_record
            title: 中国历代人物传记资料库：王金華（CBDB 640523）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640523&o=json
            external_identifier: CBDB:640523
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.127Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oACTTWEL5tebzQhzQkRyf6
        subject_person_id: p_wXJ843DgbMxsLWCKgXC1tP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金華，清人物。籍贯合肥，入仕優貢生，曾任知州。（中国历代人物传记资料库 CBDB 640523）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Vslx7gsLVVv9-r3nz1KyXh
          claim_id: c_oACTTWEL5tebzQhzQkRyf6
          source_id: s_YRZXfQ9C6JYaraoyDQ8LQc
          stance: supports
          locator: CBDB:640523
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

# 王金華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王金華 | accepted |
| bio.summary | 王金華，清人物。籍贯合肥，入仕優貢生，曾任知州。（中国历代人物传记资料库 CBDB 640523） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王金華（CBDB 640523）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640523&o=json)
