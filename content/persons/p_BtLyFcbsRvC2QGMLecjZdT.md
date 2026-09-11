---
schema: wang-person/v1
id: p_BtLyFcbsRvC2QGMLecjZdT
status: active
merged_into: null
display_name: 王杲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4qxyr4MJEcjDTi1WocWQwT
        subject_person_id: p_BtLyFcbsRvC2QGMLecjZdT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_osNZ4ACGMfBQn4nPCb1T1c
          claim_id: c_4qxyr4MJEcjDTi1WocWQwT
          source_id: s_BdFeKXA4Dh9Vu2ktGwf9hu
          stance: supports
          locator: CBDB:690826
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（690826）
          source: &a1
            id: s_BdFeKXA4Dh9Vu2ktGwf9hu
            source_type: api_record
            title: 中国历代人物传记资料库：王杲（CBDB 690826）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690826&o=json
            external_identifier: CBDB:690826
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.594Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rcEQiGmqVxgLJeMK8EsArL
        subject_person_id: p_BtLyFcbsRvC2QGMLecjZdT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王杲，明人物。籍贯歙縣，入仕貢生: 歲貢、常貢、挨貢，曾任知縣、知州。（中国历代人物传记资料库 CBDB 690826）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Xu0g3RbePxTE2kLDI9XYN_
          claim_id: c_rcEQiGmqVxgLJeMK8EsArL
          source_id: s_BdFeKXA4Dh9Vu2ktGwf9hu
          stance: supports
          locator: CBDB:690826
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

# 王杲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王杲 | accepted |
| bio.summary | 王杲，明人物。籍贯歙縣，入仕貢生: 歲貢、常貢、挨貢，曾任知縣、知州。（中国历代人物传记资料库 CBDB 690826） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王杲（CBDB 690826）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690826&o=json)
