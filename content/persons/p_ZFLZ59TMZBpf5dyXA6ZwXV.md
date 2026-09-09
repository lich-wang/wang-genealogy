---
schema: wang-person/v1
id: p_ZFLZ59TMZBpf5dyXA6ZwXV
status: active
merged_into: null
display_name: 王鍾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_66j89pcpGAeEVpzY6VB3zD
        subject_person_id: p_ZFLZ59TMZBpf5dyXA6ZwXV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QrdEjPjBv4co8wyXivrT3e
          claim_id: c_66j89pcpGAeEVpzY6VB3zD
          source_id: s_QEzxiYDoRW9XeDxiLDHDtV
          stance: supports
          locator: CBDB:457912
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（457912）
          source: &a1
            id: s_QEzxiYDoRW9XeDxiLDHDtV
            source_type: api_record
            title: 中国历代人物传记资料库：王鍾（CBDB 457912）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=457912&o=json
            external_identifier: CBDB:457912
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.632Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rbjUKUxjJBEM6dwRzoi2je
        subject_person_id: p_ZFLZ59TMZBpf5dyXA6ZwXV
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
        - id: cs_rHca9Zutg7xymNRUEDbxVX
          claim_id: c_rbjUKUxjJBEM6dwRzoi2je
          source_id: s_QEzxiYDoRW9XeDxiLDHDtV
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

# 王鍾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍾 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鍾（CBDB 457912）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=457912&o=json)
