---
schema: wang-person/v1
id: p_HzZw8ecjdx5riiWz4jxxtm
status: active
merged_into: null
display_name: 王廣益
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VUcTMN2k7V5X2qG9B5w2et
        subject_person_id: p_HzZw8ecjdx5riiWz4jxxtm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廣益
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cWTmRxwFGptVzQ9zvp2Lq7
          claim_id: c_VUcTMN2k7V5X2qG9B5w2et
          source_id: s_1EpBCzk6C7yoqHCpox2qNJ
          stance: supports
          locator: CBDB:500344
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（500344）
          source: &a1
            id: s_1EpBCzk6C7yoqHCpox2qNJ
            source_type: api_record
            title: 中国历代人物传记资料库：王廣益（CBDB 500344）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=500344&o=json
            external_identifier: CBDB:500344
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.795Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HQPgoDVjew9ZtPW9J4gvnD
        subject_person_id: p_HzZw8ecjdx5riiWz4jxxtm
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
        - id: cs_3E9c8CdLepTX1oVvNXmUAD
          claim_id: c_HQPgoDVjew9ZtPW9J4gvnD
          source_id: s_1EpBCzk6C7yoqHCpox2qNJ
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

# 王廣益

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廣益 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廣益（CBDB 500344）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=500344&o=json)
