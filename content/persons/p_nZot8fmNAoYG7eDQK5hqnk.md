---
schema: wang-person/v1
id: p_nZot8fmNAoYG7eDQK5hqnk
status: active
merged_into: null
display_name: 王鳳衢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cWKxoYE7PuSKzHKetu4Hnb
        subject_person_id: p_nZot8fmNAoYG7eDQK5hqnk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳衢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ADGwRs4td62ZrCQoWN24NP
          claim_id: c_cWKxoYE7PuSKzHKetu4Hnb
          source_id: s_ujT61hCd6QU5CdonWemzA3
          stance: supports
          locator: CBDB:640962
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640962）
          source: &a1
            id: s_ujT61hCd6QU5CdonWemzA3
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳衢（CBDB 640962）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640962&o=json
            external_identifier: CBDB:640962
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.428Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zNzrA8veNzQYpyMRd3cN7b
        subject_person_id: p_nZot8fmNAoYG7eDQK5hqnk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳衢，清人物。籍贯陽湖，入仕縣學附生，曾任縣丞。（中国历代人物传记资料库 CBDB 640962）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_d_K6KxqXkylG5eYTJNVkb0
          claim_id: c_zNzrA8veNzQYpyMRd3cN7b
          source_id: s_ujT61hCd6QU5CdonWemzA3
          stance: supports
          locator: CBDB:640962
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

# 王鳳衢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳳衢 | accepted |
| bio.summary | 王鳳衢，清人物。籍贯陽湖，入仕縣學附生，曾任縣丞。（中国历代人物传记资料库 CBDB 640962） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鳳衢（CBDB 640962）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640962&o=json)
