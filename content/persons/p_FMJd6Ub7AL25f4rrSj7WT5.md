---
schema: wang-person/v1
id: p_FMJd6Ub7AL25f4rrSj7WT5
status: active
merged_into: null
display_name: 王希周
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GNwU4bBFURkj9Yff4P3o2Q
        subject_person_id: p_FMJd6Ub7AL25f4rrSj7WT5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希周
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vFHtsQSNgoUPMaQD3iJ64m
          claim_id: c_GNwU4bBFURkj9Yff4P3o2Q
          source_id: s_5WzcKy4851gH91WgDu7nDM
          stance: supports
          locator: CBDB:477050
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（477050）
          source: &a1
            id: s_5WzcKy4851gH91WgDu7nDM
            source_type: api_record
            title: 中国历代人物传记资料库：王希周（CBDB 477050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=477050&o=json
            external_identifier: CBDB:477050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.500Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eur9joFSBoXwW5KvfLonFs
        subject_person_id: p_FMJd6Ub7AL25f4rrSj7WT5
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
        - id: cs_Am2ZjBFkSAc3qdCA2fqFQH
          claim_id: c_eur9joFSBoXwW5KvfLonFs
          source_id: s_5WzcKy4851gH91WgDu7nDM
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

# 王希周

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希周 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王希周（CBDB 477050）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=477050&o=json)
