---
schema: wang-person/v1
id: p_H21nXt2RYdTfzNzJhA7Dx2
status: active
merged_into: null
display_name: 王應愷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iWrAMgP3ubaPkXgw51Ak6z
        subject_person_id: p_H21nXt2RYdTfzNzJhA7Dx2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應愷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QB4TQf1hL9bv8pgT2VFHtp
          claim_id: c_iWrAMgP3ubaPkXgw51Ak6z
          source_id: s_PyRcCCAsNEGDN3k5yGuFua
          stance: supports
          locator: CBDB:637985
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637985）
          source: &a1
            id: s_PyRcCCAsNEGDN3k5yGuFua
            source_type: api_record
            title: 中国历代人物传记资料库：王應愷（CBDB 637985）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637985&o=json
            external_identifier: CBDB:637985
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.477Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_c5DZvAwf6wDWBKLzqdjvAh
        subject_person_id: p_H21nXt2RYdTfzNzJhA7Dx2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應愷，清人物。籍贯濟南府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 637985）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fKwwBtQC2hTLPn3iV6Evl7
          claim_id: c_c5DZvAwf6wDWBKLzqdjvAh
          source_id: s_PyRcCCAsNEGDN3k5yGuFua
          stance: supports
          locator: CBDB:637985
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

# 王應愷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應愷 | accepted |
| bio.summary | 王應愷，清人物。籍贯濟南府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 637985） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應愷（CBDB 637985）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637985&o=json)
