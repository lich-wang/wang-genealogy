---
schema: wang-person/v1
id: p_DJUjeZKvix9DZSqNZ8E53v
status: active
merged_into: null
display_name: 王一貫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jmberSVeeDS43Cy4b9W4CA
        subject_person_id: p_DJUjeZKvix9DZSqNZ8E53v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一貫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KVC5ju8vXY3E9qG9s8gNET
          claim_id: c_jmberSVeeDS43Cy4b9W4CA
          source_id: s_ftCu8MkKB5Bzkp9DCQZR4W
          stance: supports
          locator: CBDB:337561
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（337561）
          source: &a1
            id: s_ftCu8MkKB5Bzkp9DCQZR4W
            source_type: api_record
            title: 中国历代人物传记资料库：王一貫（CBDB 337561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337561&o=json
            external_identifier: CBDB:337561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.517Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8hmfFqC9sB9s9QCbcPzCqf
        subject_person_id: p_DJUjeZKvix9DZSqNZ8E53v
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
        - id: cs_9naMfcXMohL6ZEoEtYr6tc
          claim_id: c_8hmfFqC9sB9s9QCbcPzCqf
          source_id: s_ftCu8MkKB5Bzkp9DCQZR4W
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

# 王一貫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一貫 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一貫（CBDB 337561）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337561&o=json)
