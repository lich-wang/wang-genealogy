---
schema: wang-person/v1
id: p_uoi27QQ6mQcPkgGBBAJ7Zc
status: active
merged_into: null
display_name: 王聞禮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8XY4WQbraEH6XqbDN1ZRuU
        subject_person_id: p_uoi27QQ6mQcPkgGBBAJ7Zc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聞禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HSgaZoG6qNnN4w8V7STUmi
          claim_id: c_8XY4WQbraEH6XqbDN1ZRuU
          source_id: s_ZQN2UG7LkP8ekHZXxfqQAq
          stance: supports
          locator: CBDB:10600
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10600）
          source: &a1
            id: s_ZQN2UG7LkP8ekHZXxfqQAq
            source_type: api_record
            title: 中国历代人物传记资料库：王聞禮（CBDB 10600）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10600&o=json
            external_identifier: CBDB:10600
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.539Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_yG88FiXMf6uKMQrXu2qm2H
        subject_person_id: p_uoi27QQ6mQcPkgGBBAJ7Zc
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1206年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GcjB7N4oHekfNQheAC1oHB
          claim_id: c_yG88FiXMf6uKMQrXu2qm2H
          source_id: s_ZQN2UG7LkP8ekHZXxfqQAq
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Nnf3XYorbAQskwW7J9M6DN
        subject_person_id: p_uoi27QQ6mQcPkgGBBAJ7Zc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聞禮（卒于1206年），宋人物。籍贯樂清，曾任朝奉郎、朝請郎、轉運司判官。（中国历代人物传记资料库 CBDB 10600）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kRbRx7H4BDXhT5snhDo8NG
          claim_id: c_Nnf3XYorbAQskwW7J9M6DN
          source_id: s_ZQN2UG7LkP8ekHZXxfqQAq
          stance: supports
          locator: CBDB:10600
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

# 王聞禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聞禮 | accepted |
| death.date | 1206年 | accepted |
| bio.summary | 王聞禮（卒于1206年），宋人物。籍贯樂清，曾任朝奉郎、朝請郎、轉運司判官。（中国历代人物传记资料库 CBDB 10600） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王聞禮（CBDB 10600）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10600&o=json)
