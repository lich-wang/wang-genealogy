---
schema: wang-person/v1
id: p_zBxyfXcG9yTpGwyTFAyZ8J
status: active
merged_into: null
display_name: 王龍章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gBNLMRQGEKABi9zw6uHfH9
        subject_person_id: p_zBxyfXcG9yTpGwyTFAyZ8J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王龍章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CChY5x89eo7A5PK7whodMD
          claim_id: c_gBNLMRQGEKABi9zw6uHfH9
          source_id: s_oMHE3suDpGdf7tDgGQrJnV
          stance: supports
          locator: CBDB:641057
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（641057）
          source: &a1
            id: s_oMHE3suDpGdf7tDgGQrJnV
            source_type: api_record
            title: 中国历代人物传记资料库：王龍章（CBDB 641057）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641057&o=json
            external_identifier: CBDB:641057
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.293Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3Jtmv8nxN5FpGiR5hA6JW2
        subject_person_id: p_zBxyfXcG9yTpGwyTFAyZ8J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xk3wjU6NRQ1ohn2FW9hiZf
          claim_id: c_3Jtmv8nxN5FpGiR5hA6JW2
          source_id: s_oMHE3suDpGdf7tDgGQrJnV
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

# 王龍章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王龍章 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王龍章（CBDB 641057）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641057&o=json)
