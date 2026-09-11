---
schema: wang-person/v1
id: p_r5CDmG6WvAeuftK7273Vgk
status: active
merged_into: null
display_name: 王壐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GBMrScNJ3Z719K8A2Dv5sQ
        subject_person_id: p_r5CDmG6WvAeuftK7273Vgk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3fLuHEPc7WxkTi8RK57BhM
          claim_id: c_GBMrScNJ3Z719K8A2Dv5sQ
          source_id: s_9Ah5FGCE8cXyK2jULCRShH
          stance: supports
          locator: CBDB:491718
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（491718）
          source: &a1
            id: s_9Ah5FGCE8cXyK2jULCRShH
            source_type: api_record
            title: 中国历代人物传记资料库：王壐（CBDB 491718）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491718&o=json
            external_identifier: CBDB:491718
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.212Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NJ3JQWmx67sQ9bk6fDQ7eT
        subject_person_id: p_r5CDmG6WvAeuftK7273Vgk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壐，明人物。曾任主簿。（中国历代人物传记资料库 CBDB 491718）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uonfSBGYNpd_5oMrPffVIk
          claim_id: c_NJ3JQWmx67sQ9bk6fDQ7eT
          source_id: s_9Ah5FGCE8cXyK2jULCRShH
          stance: supports
          locator: CBDB:491718
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

# 王壐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王壐 | accepted |
| bio.summary | 王壐，明人物。曾任主簿。（中国历代人物传记资料库 CBDB 491718） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王壐（CBDB 491718）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491718&o=json)
