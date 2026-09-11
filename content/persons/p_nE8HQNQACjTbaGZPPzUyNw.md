---
schema: wang-person/v1
id: p_nE8HQNQACjTbaGZPPzUyNw
status: active
merged_into: null
display_name: 王衮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2LqrLqnVZKhpCJ93f2x2C7
        subject_person_id: p_nE8HQNQACjTbaGZPPzUyNw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衮
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xRGnrYxnC9VKHY1qpVQU1s
          claim_id: c_2LqrLqnVZKhpCJ93f2x2C7
          source_id: s_NWYZvYUCp46SbfJAgEVKEh
          stance: supports
          locator: CBDB:341649
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341649）
          source: &a1
            id: s_NWYZvYUCp46SbfJAgEVKEh
            source_type: api_record
            title: 中国历代人物传记资料库：王衮（CBDB 341649）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341649&o=json
            external_identifier: CBDB:341649
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.626Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7qwHDdJSj852ANmnm8pUTL
        subject_person_id: p_nE8HQNQACjTbaGZPPzUyNw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衮，明人物。明清進士進士，籍贯廣安州，入仕進士。（中国历代人物传记资料库 CBDB 341649）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_srXSBs7EWuRl0MPm1cWutu
          claim_id: c_7qwHDdJSj852ANmnm8pUTL
          source_id: s_NWYZvYUCp46SbfJAgEVKEh
          stance: supports
          locator: CBDB:341649
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

# 王衮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王衮 | accepted |
| bio.summary | 王衮，明人物。明清進士進士，籍贯廣安州，入仕進士。（中国历代人物传记资料库 CBDB 341649） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王衮（CBDB 341649）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341649&o=json)
