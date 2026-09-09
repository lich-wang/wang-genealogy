---
schema: wang-person/v1
id: p_7XFhHPAJu4rSST7Aj9rcWz
status: active
merged_into: null
display_name: 王錫恩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Va4CuFa2ZTLcTNQ8yNq5xz
        subject_person_id: p_7XFhHPAJu4rSST7Aj9rcWz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫恩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_264RnEvXqmybmkMwuQB6s2
          claim_id: c_Va4CuFa2ZTLcTNQ8yNq5xz
          source_id: s_qFGzDj2p3YaUYcBxM9fYC1
          stance: supports
          locator: CBDB:640602
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640602）
          source: &a1
            id: s_qFGzDj2p3YaUYcBxM9fYC1
            source_type: api_record
            title: 中国历代人物传记资料库：王錫恩（CBDB 640602）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640602&o=json
            external_identifier: CBDB:640602
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.151Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u1RPKPgRE1em7iee8RFk2H
        subject_person_id: p_7XFhHPAJu4rSST7Aj9rcWz
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
        - id: cs_k8pM8D4PbJM2VNoNXCPB4S
          claim_id: c_u1RPKPgRE1em7iee8RFk2H
          source_id: s_qFGzDj2p3YaUYcBxM9fYC1
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

# 王錫恩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫恩 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫恩（CBDB 640602）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640602&o=json)
