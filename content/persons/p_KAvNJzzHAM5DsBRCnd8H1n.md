---
schema: wang-person/v1
id: p_KAvNJzzHAM5DsBRCnd8H1n
status: active
merged_into: null
display_name: 王從許
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sqpZ2H2coGdVBcnqddiHhF
        subject_person_id: p_KAvNJzzHAM5DsBRCnd8H1n
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從許
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FyXM7Vao9E3yzULm6gArWS
          claim_id: c_sqpZ2H2coGdVBcnqddiHhF
          source_id: s_vm9TDFVp5T69GdHeLDy7g5
          stance: supports
          locator: CBDB:702241
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（702241）
          source: &a1
            id: s_vm9TDFVp5T69GdHeLDy7g5
            source_type: api_record
            title: 中国历代人物传记资料库：王從許（CBDB 702241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702241&o=json
            external_identifier: CBDB:702241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.613Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NdNCSD7XhKJBKBizHu5QhY
        subject_person_id: p_KAvNJzzHAM5DsBRCnd8H1n
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從許，清人物。籍贯肥城。（中国历代人物传记资料库 CBDB 702241）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ybpr3RyBrlxmBl7cavdSlf
          claim_id: c_NdNCSD7XhKJBKBizHu5QhY
          source_id: s_vm9TDFVp5T69GdHeLDy7g5
          stance: supports
          locator: CBDB:702241
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

# 王從許

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王從許 | accepted |
| bio.summary | 王從許，清人物。籍贯肥城。（中国历代人物传记资料库 CBDB 702241） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王從許（CBDB 702241）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702241&o=json)
