---
schema: wang-person/v1
id: p_LtjFHTQBRReZqDJyJud4Zj
status: active
merged_into: null
display_name: 王樹忠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UYo9KF3LuV7FrYMKP9z1VW
        subject_person_id: p_LtjFHTQBRReZqDJyJud4Zj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樹忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nZezZ9V7Xk1S4DxLBcnhvj
          claim_id: c_UYo9KF3LuV7FrYMKP9z1VW
          source_id: s_JHcvFYyruSX7QAmg5rsMeX
          stance: supports
          locator: CBDB:343213
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343213）
          source: &a1
            id: s_JHcvFYyruSX7QAmg5rsMeX
            source_type: api_record
            title: 中国历代人物传记资料库：王樹忠（CBDB 343213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343213&o=json
            external_identifier: CBDB:343213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.243Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7XLxtqWLuDkL7EfPREzNfz
        subject_person_id: p_LtjFHTQBRReZqDJyJud4Zj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樹忠，清人物。明清進士進士，籍贯東莞，入仕進士。（中国历代人物传记资料库 CBDB 343213）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2rEmlo6HD7sppR7pxgci6h
          claim_id: c_7XLxtqWLuDkL7EfPREzNfz
          source_id: s_JHcvFYyruSX7QAmg5rsMeX
          stance: supports
          locator: CBDB:343213
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

# 王樹忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樹忠 | accepted |
| bio.summary | 王樹忠，清人物。明清進士進士，籍贯東莞，入仕進士。（中国历代人物传记资料库 CBDB 343213） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樹忠（CBDB 343213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343213&o=json)
