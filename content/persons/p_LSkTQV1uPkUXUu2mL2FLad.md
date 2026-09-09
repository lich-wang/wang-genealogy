---
schema: wang-person/v1
id: p_LSkTQV1uPkUXUu2mL2FLad
status: active
merged_into: null
display_name: 王瀚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9FQHTwSZshRa2CZW4T8pDr
        subject_person_id: p_LSkTQV1uPkUXUu2mL2FLad
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wmKFK8Ca1fxKCjeYypK4vu
          claim_id: c_9FQHTwSZshRa2CZW4T8pDr
          source_id: s_1ZSJJzeidPYGRPo6WVZQ76
          stance: supports
          locator: CBDB:119094
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（119094）
          source: &a1
            id: s_1ZSJJzeidPYGRPo6WVZQ76
            source_type: api_record
            title: 中国历代人物传记资料库：王瀚（CBDB 119094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119094&o=json
            external_identifier: CBDB:119094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.884Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_86EbUPrqZWdBc4Er3d1iAC
        subject_person_id: p_LSkTQV1uPkUXUu2mL2FLad
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1641年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KaSvatTUaUdQjZJjbTQFu8
          claim_id: c_86EbUPrqZWdBc4Er3d1iAC
          source_id: s_1ZSJJzeidPYGRPo6WVZQ76
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Gx9DyZaPxNQppuw76oB9bS
        subject_person_id: p_LSkTQV1uPkUXUu2mL2FLad
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EfmFbd69pXzz9k64fxP6dw
          claim_id: c_Gx9DyZaPxNQppuw76oB9bS
          source_id: s_1ZSJJzeidPYGRPo6WVZQ76
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

# 王瀚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瀚 | accepted |
| death.date | 1641年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瀚（CBDB 119094）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119094&o=json)
