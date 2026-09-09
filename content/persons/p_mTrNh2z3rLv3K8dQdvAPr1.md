---
schema: wang-person/v1
id: p_mTrNh2z3rLv3K8dQdvAPr1
status: active
merged_into: null
display_name: 王述
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BgquwtEPZBFGFW64KqzgKw
        subject_person_id: p_mTrNh2z3rLv3K8dQdvAPr1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王述
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rsQG4FyX9pAzfAg18PMF8j
          claim_id: c_BgquwtEPZBFGFW64KqzgKw
          source_id: s_JPRCGSV3ufGWH6WgziB7m1
          stance: supports
          locator: CBDB:267116
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（267116）
          source: &a1
            id: s_JPRCGSV3ufGWH6WgziB7m1
            source_type: api_record
            title: 中国历代人物传记资料库：王述（CBDB 267116）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267116&o=json
            external_identifier: CBDB:267116
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.771Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5ZoNa54r3zYfyWEErNWAEm
        subject_person_id: p_mTrNh2z3rLv3K8dQdvAPr1
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
        - id: cs_NNyrGVMvkFmyr5ceLMZFWP
          claim_id: c_5ZoNa54r3zYfyWEErNWAEm
          source_id: s_JPRCGSV3ufGWH6WgziB7m1
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

# 王述

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王述 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王述（CBDB 267116）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267116&o=json)
