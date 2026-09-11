---
schema: wang-person/v1
id: p_V8NBS3gEXSD9RotojQ3vJ1
status: active
merged_into: null
display_name: 王廷揚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VoyGvmtdGd3wozLrbr4pcd
        subject_person_id: p_V8NBS3gEXSD9RotojQ3vJ1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷揚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2Revpdv6BM2XJhDjMGB9Uh
          claim_id: c_VoyGvmtdGd3wozLrbr4pcd
          source_id: s_H49dyBrQoA1bWpqc4uExD7
          stance: supports
          locator: CBDB:341940
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341940）
          source: &a1
            id: s_H49dyBrQoA1bWpqc4uExD7
            source_type: api_record
            title: 中国历代人物传记资料库：王廷揚（CBDB 341940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341940&o=json
            external_identifier: CBDB:341940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.783Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pCPvSZX3w513KQJ2UjuFEC
        subject_person_id: p_V8NBS3gEXSD9RotojQ3vJ1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷揚，清人物。明清進士進士，籍贯金華，入仕進士。（中国历代人物传记资料库 CBDB 341940）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nZr7KyBEfZyHl_Q_unTRAg
          claim_id: c_pCPvSZX3w513KQJ2UjuFEC
          source_id: s_H49dyBrQoA1bWpqc4uExD7
          stance: supports
          locator: CBDB:341940
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

# 王廷揚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷揚 | accepted |
| bio.summary | 王廷揚，清人物。明清進士進士，籍贯金華，入仕進士。（中国历代人物传记资料库 CBDB 341940） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷揚（CBDB 341940）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341940&o=json)
