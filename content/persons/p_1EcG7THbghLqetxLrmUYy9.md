---
schema: wang-person/v1
id: p_1EcG7THbghLqetxLrmUYy9
status: active
merged_into: null
display_name: 王察
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ayFZhxw4S8PqQmiUh2ce9z
        subject_person_id: p_1EcG7THbghLqetxLrmUYy9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王察
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gYKJ2btvNWsMoRKmWWwHjZ
          claim_id: c_ayFZhxw4S8PqQmiUh2ce9z
          source_id: s_7QCufCTe5ZbJH2nXE4t5hG
          stance: supports
          locator: CBDB:382305
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（382305）
          source: &a1
            id: s_7QCufCTe5ZbJH2nXE4t5hG
            source_type: api_record
            title: 中国历代人物传记资料库：王察（CBDB 382305）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=382305&o=json
            external_identifier: CBDB:382305
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.798Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NKHek4hh5WJW9DHrjidRCe
        subject_person_id: p_1EcG7THbghLqetxLrmUYy9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王察，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 382305）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_a76vhV72vyDuhVJHPdNcU4
          claim_id: c_NKHek4hh5WJW9DHrjidRCe
          source_id: s_7QCufCTe5ZbJH2nXE4t5hG
          stance: supports
          locator: CBDB:382305
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

# 王察

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王察 | accepted |
| bio.summary | 王察，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 382305） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王察（CBDB 382305）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=382305&o=json)
