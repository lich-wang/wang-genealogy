---
schema: wang-person/v1
id: p_GacPazPEChhN46VydLyqkq
status: active
merged_into: null
display_name: 王陟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ak6zACyLhvQG3A1JTy5NU9
        subject_person_id: p_GacPazPEChhN46VydLyqkq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4Dunz9Rogaqh8Co9Q5Q4GY
          claim_id: c_Ak6zACyLhvQG3A1JTy5NU9
          source_id: s_RSqShnMAHJB8zS9c483sDt
          stance: supports
          locator: CBDB:229673
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（229673）
          source: &a1
            id: s_RSqShnMAHJB8zS9c483sDt
            source_type: api_record
            title: 中国历代人物传记资料库：王陟（CBDB 229673）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229673&o=json
            external_identifier: CBDB:229673
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.577Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PR8yhrsG9Rkq6guLieUD2E
        subject_person_id: p_GacPazPEChhN46VydLyqkq
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
        - id: cs_6nqZmDcjmiLj7amh4tNF1b
          claim_id: c_PR8yhrsG9Rkq6guLieUD2E
          source_id: s_RSqShnMAHJB8zS9c483sDt
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

# 王陟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王陟 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王陟（CBDB 229673）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229673&o=json)
