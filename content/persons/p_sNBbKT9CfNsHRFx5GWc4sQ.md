---
schema: wang-person/v1
id: p_sNBbKT9CfNsHRFx5GWc4sQ
status: active
merged_into: null
display_name: 王子忠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zgpe9QxUmypftJJkk7e4yX
        subject_person_id: p_sNBbKT9CfNsHRFx5GWc4sQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_s3VH8s9Gyy1BfWmPKFpZ7k
          claim_id: c_zgpe9QxUmypftJJkk7e4yX
          source_id: s_TR85LJ9HtEHyCheceZUrdH
          stance: supports
          locator: CBDB:150244
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（150244）
          source: &a1
            id: s_TR85LJ9HtEHyCheceZUrdH
            source_type: api_record
            title: 中国历代人物传记资料库：王子忠（CBDB 150244）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150244&o=json
            external_identifier: CBDB:150244
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.811Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PthiXheBDKWyw9DUmAAcKn
        subject_person_id: p_sNBbKT9CfNsHRFx5GWc4sQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子忠，唐人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 150244）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9N3PB3kP9T_ZoUXMzZve_k
          claim_id: c_PthiXheBDKWyw9DUmAAcKn
          source_id: s_TR85LJ9HtEHyCheceZUrdH
          stance: supports
          locator: CBDB:150244
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王子忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子忠 | accepted |
| bio.summary | 王子忠，唐人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 150244） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王子忠（CBDB 150244）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150244&o=json)
