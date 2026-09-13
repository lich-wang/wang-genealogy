---
schema: wang-person/v1
id: p_bFLYoeb8HyJD4DvaQdT9rC
status: merged
merged_into: p_CF5LJP7gMSDjjxZDLTJKd5
display_name: 王濟
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ptV4MUreF8NEuCefMs7QZx
        subject_person_id: p_bFLYoeb8HyJD4DvaQdT9rC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gKV9vhmB5kLk1tS71RUDDR
          claim_id: c_ptV4MUreF8NEuCefMs7QZx
          source_id: s_LCd9Pe6zy4XvosNMv3X8uh
          stance: supports
          locator: CBDB:279534
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279534）
          source: &a1
            id: s_LCd9Pe6zy4XvosNMv3X8uh
            source_type: api_record
            title: 中国历代人物传记资料库：王濟（CBDB 279534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279534&o=json
            external_identifier: CBDB:279534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.985Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KuQCRr5V2UmUBGoijaKqXZ
        subject_person_id: p_bFLYoeb8HyJD4DvaQdT9rC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟，明人物。正德十二年進士，籍贯黃岡，曾任吏部郎中。（中国历代人物传记资料库 CBDB 279534）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ieoomE0qJ3nMZnz8uaU8ZD
          claim_id: c_KuQCRr5V2UmUBGoijaKqXZ
          source_id: s_LCd9Pe6zy4XvosNMv3X8uh
          stance: supports
          locator: CBDB:279534
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

# 王濟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濟 | accepted |
| bio.summary | 王濟，明人物。正德十二年進士，籍贯黃岡，曾任吏部郎中。（中国历代人物传记资料库 CBDB 279534） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王濟（CBDB 279534）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279534&o=json)
