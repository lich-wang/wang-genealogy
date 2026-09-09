---
schema: wang-person/v1
id: p_uLMDnp7cPACe8HJg4jKAcF
status: active
merged_into: null
display_name: 王之治
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_koio6ddLPuM4VFNkMj755v
        subject_person_id: p_uLMDnp7cPACe8HJg4jKAcF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之治
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bo89YeuUShrNLeW7uRonGM
          claim_id: c_koio6ddLPuM4VFNkMj755v
          source_id: s_Sda1jpqNXNwb3mtfCtd5cP
          stance: supports
          locator: CBDB:227241
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（227241）
          source: &a1
            id: s_Sda1jpqNXNwb3mtfCtd5cP
            source_type: api_record
            title: 中国历代人物传记资料库：王之治（CBDB 227241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227241&o=json
            external_identifier: CBDB:227241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.485Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cSApj7cbV6Km42mECF4VYy
        subject_person_id: p_uLMDnp7cPACe8HJg4jKAcF
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
        - id: cs_M7rp5fFT5W6UHn2T7fLhqG
          claim_id: c_cSApj7cbV6Km42mECF4VYy
          source_id: s_Sda1jpqNXNwb3mtfCtd5cP
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

# 王之治

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之治 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之治（CBDB 227241）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227241&o=json)
