---
schema: wang-person/v1
id: p_Xe9BoMBk8PMWJm4GVgYC89
status: active
merged_into: null
display_name: 王復禮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PEc65YGroUzr948pUPzV8k
        subject_person_id: p_Xe9BoMBk8PMWJm4GVgYC89
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王復禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JtNLQ4CR8gvXMYLrgxzcPA
          claim_id: c_PEc65YGroUzr948pUPzV8k
          source_id: s_pfCJMBWdYZ7ki5BWx4bstC
          stance: supports
          locator: CBDB:504298
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（504298）
          source: &a1
            id: s_pfCJMBWdYZ7ki5BWx4bstC
            source_type: api_record
            title: 中国历代人物传记资料库：王復禮（CBDB 504298）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=504298&o=json
            external_identifier: CBDB:504298
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.928Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_asf1pQyo4tKHq6krCr6iwT
        subject_person_id: p_Xe9BoMBk8PMWJm4GVgYC89
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
        - id: cs_NKgsasGAsDrDUWEX9wR57k
          claim_id: c_asf1pQyo4tKHq6krCr6iwT
          source_id: s_pfCJMBWdYZ7ki5BWx4bstC
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

# 王復禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王復禮 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王復禮（CBDB 504298）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=504298&o=json)
