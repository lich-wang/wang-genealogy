---
schema: wang-person/v1
id: p_tAs8UgMCd9Z9rHU7m8GeVv
status: active
merged_into: null
display_name: 王成
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_21295ijiqDgvccGfGs7v3e
        subject_person_id: p_tAs8UgMCd9Z9rHU7m8GeVv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7LG4mf3BRrxnU1j5DBh1or
          claim_id: c_21295ijiqDgvccGfGs7v3e
          source_id: s_TGCasbZrcJuiEZMG9G8Xx3
          stance: supports
          locator: CBDB:489372
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（489372）
          source: &a1
            id: s_TGCasbZrcJuiEZMG9G8Xx3
            source_type: api_record
            title: 中国历代人物传记资料库：王成（CBDB 489372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489372&o=json
            external_identifier: CBDB:489372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.041Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bM9AKqVNYHPwEGgrZB1xvv
        subject_person_id: p_tAs8UgMCd9Z9rHU7m8GeVv
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
        - id: cs_V9QvPHnEw1DySJKBnBSvpj
          claim_id: c_bM9AKqVNYHPwEGgrZB1xvv
          source_id: s_TGCasbZrcJuiEZMG9G8Xx3
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

# 王成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王成 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王成（CBDB 489372）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489372&o=json)
