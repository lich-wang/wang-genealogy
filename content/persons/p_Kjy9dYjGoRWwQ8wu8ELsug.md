---
schema: wang-person/v1
id: p_Kjy9dYjGoRWwQ8wu8ELsug
status: active
merged_into: null
display_name: 王文德
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kkEGrfDLYC7kDHXNFKukNB
        subject_person_id: p_Kjy9dYjGoRWwQ8wu8ELsug
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bpETNZJAkhToTFfgqBeiee
          claim_id: c_kkEGrfDLYC7kDHXNFKukNB
          source_id: s_PZvMNWMZUuKGJQnuAiknKs
          stance: supports
          locator: CBDB:318798
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318798）
          source: &a1
            id: s_PZvMNWMZUuKGJQnuAiknKs
            source_type: api_record
            title: 中国历代人物传记资料库：王文德（CBDB 318798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318798&o=json
            external_identifier: CBDB:318798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.029Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oEV8bC4ymyt1ohpjdHP5JM
        subject_person_id: p_Kjy9dYjGoRWwQ8wu8ELsug
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
        - id: cs_5DKYcsRyJxXh1CDPer2XAT
          claim_id: c_oEV8bC4ymyt1ohpjdHP5JM
          source_id: s_PZvMNWMZUuKGJQnuAiknKs
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

# 王文德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文德 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文德（CBDB 318798）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318798&o=json)
