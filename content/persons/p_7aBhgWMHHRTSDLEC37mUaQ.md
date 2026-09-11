---
schema: wang-person/v1
id: p_7aBhgWMHHRTSDLEC37mUaQ
status: active
merged_into: null
display_name: 王守城
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XfDQgBjC4VQE7HdimAk4Kp
        subject_person_id: p_7aBhgWMHHRTSDLEC37mUaQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守城
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z2gbzREqqomMh9hDQLX7B2
          claim_id: c_XfDQgBjC4VQE7HdimAk4Kp
          source_id: s_jNQ2mRUwpNsSdz9aWHsBYy
          stance: supports
          locator: CBDB:637060
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637060）
          source: &a1
            id: s_jNQ2mRUwpNsSdz9aWHsBYy
            source_type: api_record
            title: 中国历代人物传记资料库：王守城（CBDB 637060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637060&o=json
            external_identifier: CBDB:637060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.193Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Z4nFkrP6uCzqKuHABrAK4J
        subject_person_id: p_7aBhgWMHHRTSDLEC37mUaQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守城，清人物。籍贯錢塘，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637060）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EJeB3RQF6PYaB6C7ATu1aL
          claim_id: c_Z4nFkrP6uCzqKuHABrAK4J
          source_id: s_jNQ2mRUwpNsSdz9aWHsBYy
          stance: supports
          locator: CBDB:637060
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

# 王守城

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守城 | accepted |
| bio.summary | 王守城，清人物。籍贯錢塘，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637060） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王守城（CBDB 637060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637060&o=json)
