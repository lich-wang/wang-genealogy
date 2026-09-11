---
schema: wang-person/v1
id: p_jXMMBKK2mRWPwiaujBApG3
status: active
merged_into: null
display_name: 王佳通
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FHtwdbd75EfY7W3XLh6Szv
        subject_person_id: p_jXMMBKK2mRWPwiaujBApG3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佳通
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GbECigE19gDzaRTAFCEu4W
          claim_id: c_FHtwdbd75EfY7W3XLh6Szv
          source_id: s_RB7F8L3JZgcbgQHQP3eU7V
          stance: supports
          locator: CBDB:700201
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（700201）
          source: &a1
            id: s_RB7F8L3JZgcbgQHQP3eU7V
            source_type: api_record
            title: 中国历代人物传记资料库：王佳通（CBDB 700201）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700201&o=json
            external_identifier: CBDB:700201
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.590Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CXvc9BPJkjX1g7ymq94JE5
        subject_person_id: p_jXMMBKK2mRWPwiaujBApG3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佳通，清人物。籍贯仙居，身份为父老;耆老。（中国历代人物传记资料库 CBDB 700201）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__3a_mx9pq5-48vf6t7j9Z7
          claim_id: c_CXvc9BPJkjX1g7ymq94JE5
          source_id: s_RB7F8L3JZgcbgQHQP3eU7V
          stance: supports
          locator: CBDB:700201
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

# 王佳通

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佳通 | accepted |
| bio.summary | 王佳通，清人物。籍贯仙居，身份为父老;耆老。（中国历代人物传记资料库 CBDB 700201） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佳通（CBDB 700201）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700201&o=json)
