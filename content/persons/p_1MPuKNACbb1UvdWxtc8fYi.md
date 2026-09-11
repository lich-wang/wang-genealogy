---
schema: wang-person/v1
id: p_1MPuKNACbb1UvdWxtc8fYi
status: active
merged_into: null
display_name: 王宗彬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CoHNwkWTf6HGevhbgo96N9
        subject_person_id: p_1MPuKNACbb1UvdWxtc8fYi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗彬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h4GVyNz6SQYbiqzuhh8riy
          claim_id: c_CoHNwkWTf6HGevhbgo96N9
          source_id: s_Ki6P9toBgvLDAkFiReKPik
          stance: supports
          locator: CBDB:637100
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637100）
          source: &a1
            id: s_Ki6P9toBgvLDAkFiReKPik
            source_type: api_record
            title: 中国历代人物传记资料库：王宗彬（CBDB 637100）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637100&o=json
            external_identifier: CBDB:637100
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.206Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hB4pNGjxUZ3mp1dU4VHvJM
        subject_person_id: p_1MPuKNACbb1UvdWxtc8fYi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗彬，清人物。籍贯蕭山，曾任學正。（中国历代人物传记资料库 CBDB 637100）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7zXaaSYMFDYp74rPr8XUyK
          claim_id: c_hB4pNGjxUZ3mp1dU4VHvJM
          source_id: s_Ki6P9toBgvLDAkFiReKPik
          stance: supports
          locator: CBDB:637100
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

# 王宗彬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗彬 | accepted |
| bio.summary | 王宗彬，清人物。籍贯蕭山，曾任學正。（中国历代人物传记资料库 CBDB 637100） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗彬（CBDB 637100）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637100&o=json)
