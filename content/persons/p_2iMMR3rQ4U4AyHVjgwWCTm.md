---
schema: wang-person/v1
id: p_2iMMR3rQ4U4AyHVjgwWCTm
status: active
merged_into: null
display_name: 王光照
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FSe5g4oYNGpN8fnAZjBaqR
        subject_person_id: p_2iMMR3rQ4U4AyHVjgwWCTm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光照
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rQUL4KtibN42nHEc3bePCQ
          claim_id: c_FSe5g4oYNGpN8fnAZjBaqR
          source_id: s_4ysG5X9wX65iNfeDCf7H5y
          stance: supports
          locator: CBDB:636265
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636265）
          source: &a1
            id: s_4ysG5X9wX65iNfeDCf7H5y
            source_type: api_record
            title: 中国历代人物传记资料库：王光照（CBDB 636265）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636265&o=json
            external_identifier: CBDB:636265
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.134Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ezFW4UoNB9LmTzHdMye9D9
        subject_person_id: p_2iMMR3rQ4U4AyHVjgwWCTm
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
        - id: cs_v8uRWdJiCjR4Uucouhfs9E
          claim_id: c_ezFW4UoNB9LmTzHdMye9D9
          source_id: s_4ysG5X9wX65iNfeDCf7H5y
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

# 王光照

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光照 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光照（CBDB 636265）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636265&o=json)
