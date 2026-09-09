---
schema: wang-person/v1
id: p_e6LV8nckSZ8KZCoB9GJGBs
status: active
merged_into: null
display_name: 王元卿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_i5yG48q5Pwn8p1jRFPeMeM
        subject_person_id: p_e6LV8nckSZ8KZCoB9GJGBs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PwqUVuLofb2daCWE2YpGF4
          claim_id: c_i5yG48q5Pwn8p1jRFPeMeM
          source_id: s_aM9BNCznjmPgz3tyFH4aic
          stance: supports
          locator: CBDB:221930
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221930）
          source: &a1
            id: s_aM9BNCznjmPgz3tyFH4aic
            source_type: api_record
            title: 中国历代人物传记资料库：王元卿（CBDB 221930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221930&o=json
            external_identifier: CBDB:221930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.354Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EtFZE17Eat1cwkDtKsvpZP
        subject_person_id: p_e6LV8nckSZ8KZCoB9GJGBs
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
        - id: cs_s4DKp4Pfr4AY3JLRcVL65s
          claim_id: c_EtFZE17Eat1cwkDtKsvpZP
          source_id: s_aM9BNCznjmPgz3tyFH4aic
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

# 王元卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元卿 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元卿（CBDB 221930）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221930&o=json)
