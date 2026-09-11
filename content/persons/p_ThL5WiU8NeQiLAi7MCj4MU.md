---
schema: wang-person/v1
id: p_ThL5WiU8NeQiLAi7MCj4MU
status: active
merged_into: null
display_name: 王舟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JCxU3j7eWyJmED2u6vk1pY
        subject_person_id: p_ThL5WiU8NeQiLAi7MCj4MU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7htZK89JB4L2h5aB8BhK5T
          claim_id: c_JCxU3j7eWyJmED2u6vk1pY
          source_id: s_jtcFvqGT52AfZDNu6o8EFL
          stance: supports
          locator: CBDB:100659
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100659）
          source: &a1
            id: s_jtcFvqGT52AfZDNu6o8EFL
            source_type: api_record
            title: 中国历代人物传记资料库：王舟（CBDB 100659）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100659&o=json
            external_identifier: CBDB:100659
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.341Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BEsT9vypGq2mLd87L58zdV
        subject_person_id: p_ThL5WiU8NeQiLAi7MCj4MU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舟，元人物。曾任諸路總管府儒學教授。（中国历代人物传记资料库 CBDB 100659）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_siUyDLN3yR6q5-PQxJ26gN
          claim_id: c_BEsT9vypGq2mLd87L58zdV
          source_id: s_jtcFvqGT52AfZDNu6o8EFL
          stance: supports
          locator: CBDB:100659
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

# 王舟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舟 | accepted |
| bio.summary | 王舟，元人物。曾任諸路總管府儒學教授。（中国历代人物传记资料库 CBDB 100659） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王舟（CBDB 100659）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100659&o=json)
