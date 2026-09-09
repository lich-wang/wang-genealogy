---
schema: wang-person/v1
id: p_EzAGiQ3vyLi6vLk122P5zo
status: active
merged_into: null
display_name: 王巽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_THAehtgEMem4DgyMBZ1ya7
        subject_person_id: p_EzAGiQ3vyLi6vLk122P5zo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王巽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dFkWCWyoxthRJwCNsoTVJ7
          claim_id: c_THAehtgEMem4DgyMBZ1ya7
          source_id: s_kEaCUDK9ziFio77aGow9Pn
          stance: supports
          locator: CBDB:97875
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（97875）
          source: &a1
            id: s_kEaCUDK9ziFio77aGow9Pn
            source_type: api_record
            title: 中国历代人物传记资料库：王巽（CBDB 97875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97875&o=json
            external_identifier: CBDB:97875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.218Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LGt95eAn8LAAd4HohQ2WeX
        subject_person_id: p_EzAGiQ3vyLi6vLk122P5zo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PuuhsGHC7NBMB31dxQB4mC
          claim_id: c_LGt95eAn8LAAd4HohQ2WeX
          source_id: s_kEaCUDK9ziFio77aGow9Pn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王巽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王巽 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王巽（CBDB 97875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97875&o=json)
