---
schema: wang-person/v1
id: p_mG5dZY6x7k7X5iWqnDfHpn
status: active
merged_into: null
display_name: 王士竹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YyV893B9MqpfJ9En9HrzAh
        subject_person_id: p_mG5dZY6x7k7X5iWqnDfHpn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士竹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hnh457nM82TYSoPtg8FgyP
          claim_id: c_YyV893B9MqpfJ9En9HrzAh
          source_id: s_nyxAJBxWuqrM9AQmAxVq1b
          stance: supports
          locator: CBDB:636813
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636813）
          source: &a1
            id: s_nyxAJBxWuqrM9AQmAxVq1b
            source_type: api_record
            title: 中国历代人物传记资料库：王士竹（CBDB 636813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636813&o=json
            external_identifier: CBDB:636813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.113Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nM4RLXNCZgdkWGbEKuzA4C
        subject_person_id: p_mG5dZY6x7k7X5iWqnDfHpn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士竹，清人物。籍贯宛平，曾任典史。（中国历代人物传记资料库 CBDB 636813）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gDKlAI6-1JH5mXSWMXu4CL
          claim_id: c_nM4RLXNCZgdkWGbEKuzA4C
          source_id: s_nyxAJBxWuqrM9AQmAxVq1b
          stance: supports
          locator: CBDB:636813
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

# 王士竹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士竹 | accepted |
| bio.summary | 王士竹，清人物。籍贯宛平，曾任典史。（中国历代人物传记资料库 CBDB 636813） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士竹（CBDB 636813）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636813&o=json)
