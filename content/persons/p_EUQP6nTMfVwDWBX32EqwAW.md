---
schema: wang-person/v1
id: p_EUQP6nTMfVwDWBX32EqwAW
status: active
merged_into: null
display_name: 王輅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eav8W8ajAH8gpMhs7McPYS
        subject_person_id: p_EUQP6nTMfVwDWBX32EqwAW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mkdod13aonds9gUhUTvm62
          claim_id: c_eav8W8ajAH8gpMhs7McPYS
          source_id: s_6W9AYqJ7D6f8rWVXsb9h7n
          stance: supports
          locator: CBDB:507099
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（507099）
          source: &a1
            id: s_6W9AYqJ7D6f8rWVXsb9h7n
            source_type: api_record
            title: 中国历代人物传记资料库：王輅（CBDB 507099）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=507099&o=json
            external_identifier: CBDB:507099
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.021Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_97hrpaChhVBNFx7KJm39SD
        subject_person_id: p_EUQP6nTMfVwDWBX32EqwAW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3hActTepaoKM6eK6K51pMq
          claim_id: c_97hrpaChhVBNFx7KJm39SD
          source_id: s_6W9AYqJ7D6f8rWVXsb9h7n
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

# 王輅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輅 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王輅（CBDB 507099）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=507099&o=json)
