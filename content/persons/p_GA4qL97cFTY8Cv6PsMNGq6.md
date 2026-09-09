---
schema: wang-person/v1
id: p_GA4qL97cFTY8Cv6PsMNGq6
status: active
merged_into: null
display_name: 王寧儉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ANy58f6uzR7e9jMCVPuspP
        subject_person_id: p_GA4qL97cFTY8Cv6PsMNGq6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寧儉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LHGHcr4QWnYJKJUCpzx24F
          claim_id: c_ANy58f6uzR7e9jMCVPuspP
          source_id: s_kF4HMaxJBoMCszFSoGHmTL
          stance: supports
          locator: CBDB:637247
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637247）
          source: &a1
            id: s_kF4HMaxJBoMCszFSoGHmTL
            source_type: api_record
            title: 中国历代人物传记资料库：王寧儉（CBDB 637247）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637247&o=json
            external_identifier: CBDB:637247
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.256Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HK2MxKYVJNDM7CFeeq9aCD
        subject_person_id: p_GA4qL97cFTY8Cv6PsMNGq6
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
        - id: cs_ALn3w6iHKAJWs29TEriDMw
          claim_id: c_HK2MxKYVJNDM7CFeeq9aCD
          source_id: s_kF4HMaxJBoMCszFSoGHmTL
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

# 王寧儉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寧儉 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寧儉（CBDB 637247）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637247&o=json)
