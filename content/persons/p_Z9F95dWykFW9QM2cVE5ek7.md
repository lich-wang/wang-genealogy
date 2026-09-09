---
schema: wang-person/v1
id: p_Z9F95dWykFW9QM2cVE5ek7
status: active
merged_into: null
display_name: 王佐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UhrXUaowEy3H2daqVuAfVF
        subject_person_id: p_Z9F95dWykFW9QM2cVE5ek7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_p6AiPcarYKPKhHvofLo7n2
          claim_id: c_UhrXUaowEy3H2daqVuAfVF
          source_id: s_DgjkE5P2AS68ygibYmWTrK
          stance: supports
          locator: CBDB:22233
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22233）
          source: &a1
            id: s_DgjkE5P2AS68ygibYmWTrK
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 22233）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22233&o=json
            external_identifier: CBDB:22233
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.858Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BJ58rxk5n3My1YL8Hgpa6o
        subject_person_id: p_Z9F95dWykFW9QM2cVE5ek7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aAZkapJKkwjZuL9qfv3kA6
          claim_id: c_BJ58rxk5n3My1YL8Hgpa6o
          source_id: s_DgjkE5P2AS68ygibYmWTrK
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

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佐（CBDB 22233）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22233&o=json)
