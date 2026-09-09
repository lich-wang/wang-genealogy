---
schema: wang-person/v1
id: p_UuFL1gAwG68QUD39E4M5Wh
status: active
merged_into: null
display_name: 王職
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zSSmBtLmQd5ngedM2nyMKh
        subject_person_id: p_UuFL1gAwG68QUD39E4M5Wh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王職
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o7VQ1GGUdJe4umGw3GsmgZ
          claim_id: c_zSSmBtLmQd5ngedM2nyMKh
          source_id: s_BoQwULT9dG6ucQ1MCKLhfB
          stance: supports
          locator: CBDB:206108
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206108）
          source: &a1
            id: s_BoQwULT9dG6ucQ1MCKLhfB
            source_type: api_record
            title: 中国历代人物传记资料库：王職（CBDB 206108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206108&o=json
            external_identifier: CBDB:206108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.883Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9F8E12V5Z2nxwhmZ1bFhEy
        subject_person_id: p_UuFL1gAwG68QUD39E4M5Wh
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1540年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FDWJMrYg9P6xeAfqut7yAr
          claim_id: c_9F8E12V5Z2nxwhmZ1bFhEy
          source_id: s_BoQwULT9dG6ucQ1MCKLhfB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VXQq9wxYopnzfqkyW9Rk65
        subject_person_id: p_UuFL1gAwG68QUD39E4M5Wh
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
        - id: cs_jjL6LJ5B2SqsfHWw9s9KH7
          claim_id: c_VXQq9wxYopnzfqkyW9Rk65
          source_id: s_BoQwULT9dG6ucQ1MCKLhfB
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

# 王職

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王職 | accepted |
| birth.date | 1540年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王職（CBDB 206108）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206108&o=json)
