---
schema: wang-person/v1
id: p_NMvtBQ9H6vfb4sPxU1Mct2
status: active
merged_into: null
display_name: 王雋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fQYAU6DshsjqF6ma8M48Xk
        subject_person_id: p_NMvtBQ9H6vfb4sPxU1Mct2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6FKxRkwe2MgMszQ8CWaFZo
          claim_id: c_fQYAU6DshsjqF6ma8M48Xk
          source_id: s_7LmDXW8WMsYMicYXUzMxNQ
          stance: supports
          locator: CBDB:686969
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（686969）
          source: &a1
            id: s_7LmDXW8WMsYMicYXUzMxNQ
            source_type: api_record
            title: 中国历代人物传记资料库：王雋（CBDB 686969）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686969&o=json
            external_identifier: CBDB:686969
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.405Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PvYLpDMp7NHsFW5iLcDGnK
        subject_person_id: p_NMvtBQ9H6vfb4sPxU1Mct2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雋，宋人物。籍贯南海，入仕進士。（中国历代人物传记资料库 CBDB 686969）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vve1dWhYDzRPdoyNsj3JmC
          claim_id: c_PvYLpDMp7NHsFW5iLcDGnK
          source_id: s_7LmDXW8WMsYMicYXUzMxNQ
          stance: supports
          locator: CBDB:686969
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

# 王雋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雋 | accepted |
| bio.summary | 王雋，宋人物。籍贯南海，入仕進士。（中国历代人物传记资料库 CBDB 686969） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雋（CBDB 686969）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686969&o=json)
