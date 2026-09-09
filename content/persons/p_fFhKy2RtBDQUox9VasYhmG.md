---
schema: wang-person/v1
id: p_fFhKy2RtBDQUox9VasYhmG
status: active
merged_into: null
display_name: 王季球
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kaZPG9xiBPcDJPspPQHx3i
        subject_person_id: p_fFhKy2RtBDQUox9VasYhmG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王季球
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uHD74bhFfpKTTYPJyKU5ft
          claim_id: c_kaZPG9xiBPcDJPspPQHx3i
          source_id: s_aczz4cxicumqbhsNVQhSNE
          stance: supports
          locator: CBDB:342114
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342114）
          source: &a1
            id: s_aczz4cxicumqbhsNVQhSNE
            source_type: api_record
            title: 中国历代人物传记资料库：王季球（CBDB 342114）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342114&o=json
            external_identifier: CBDB:342114
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.843Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LFETigLaYtN5sZBd3MRN5X
        subject_person_id: p_fFhKy2RtBDQUox9VasYhmG
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
        - id: cs_2mjJd6kqhE3UqF3d6r3Lqb
          claim_id: c_LFETigLaYtN5sZBd3MRN5X
          source_id: s_aczz4cxicumqbhsNVQhSNE
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

# 王季球

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王季球 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王季球（CBDB 342114）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342114&o=json)
