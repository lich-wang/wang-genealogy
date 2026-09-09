---
schema: wang-person/v1
id: p_zmru9qG7eUumdopXbJ78Nb
status: active
merged_into: null
display_name: 王皋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fMYqxxKY2ACxQZYT2hNRZH
        subject_person_id: p_zmru9qG7eUumdopXbJ78Nb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王皋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dKsFwEPgYThmirW3Bs24QW
          claim_id: c_fMYqxxKY2ACxQZYT2hNRZH
          source_id: s_HPEMSDtHg93BKeW8cU4Nk5
          stance: supports
          locator: CBDB:342378
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342378）
          source: &a1
            id: s_HPEMSDtHg93BKeW8cU4Nk5
            source_type: api_record
            title: 中国历代人物传记资料库：王皋（CBDB 342378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342378&o=json
            external_identifier: CBDB:342378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.915Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PGU8iTt6cqoL3nPKXGoc2m
        subject_person_id: p_zmru9qG7eUumdopXbJ78Nb
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
        - id: cs_8SAxx3aR6DXYftp3u1R5p3
          claim_id: c_PGU8iTt6cqoL3nPKXGoc2m
          source_id: s_HPEMSDtHg93BKeW8cU4Nk5
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

# 王皋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王皋 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王皋（CBDB 342378）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342378&o=json)
