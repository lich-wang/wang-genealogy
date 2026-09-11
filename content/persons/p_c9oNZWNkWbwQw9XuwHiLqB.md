---
schema: wang-person/v1
id: p_c9oNZWNkWbwQw9XuwHiLqB
status: active
merged_into: null
display_name: 王貽棟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9vvS8Nvk5uqzR7HuFMrpkL
        subject_person_id: p_c9oNZWNkWbwQw9XuwHiLqB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貽棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tPeuYwTi54GHWCD8gVJNwS
          claim_id: c_9vvS8Nvk5uqzR7HuFMrpkL
          source_id: s_4MLVSqpR4BoiztHrp6oK9i
          stance: supports
          locator: CBDB:640314
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640314）
          source: &a1
            id: s_4MLVSqpR4BoiztHrp6oK9i
            source_type: api_record
            title: 中国历代人物传记资料库：王貽棟（CBDB 640314）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640314&o=json
            external_identifier: CBDB:640314
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.215Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WhAvF55ETMjqDj9MVjZ97m
        subject_person_id: p_c9oNZWNkWbwQw9XuwHiLqB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貽棟，清人物。籍贯錢塘，入仕監生，曾任司獄。（中国历代人物传记资料库 CBDB 640314）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_H7z83rZvAbREcy_cUCbeFU
          claim_id: c_WhAvF55ETMjqDj9MVjZ97m
          source_id: s_4MLVSqpR4BoiztHrp6oK9i
          stance: supports
          locator: CBDB:640314
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

# 王貽棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貽棟 | accepted |
| bio.summary | 王貽棟，清人物。籍贯錢塘，入仕監生，曾任司獄。（中国历代人物传记资料库 CBDB 640314） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王貽棟（CBDB 640314）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640314&o=json)
