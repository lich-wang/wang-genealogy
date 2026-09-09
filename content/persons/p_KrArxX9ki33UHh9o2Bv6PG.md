---
schema: wang-person/v1
id: p_KrArxX9ki33UHh9o2Bv6PG
status: active
merged_into: null
display_name: 王嗣鳳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ybs89NhV3NP3x2CPXk975V
        subject_person_id: p_KrArxX9ki33UHh9o2Bv6PG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣鳳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oZ3JWBbNwscuLcbMhvW654
          claim_id: c_Ybs89NhV3NP3x2CPXk975V
          source_id: s_n9CB8J2n7HuDGbtCJw4Kup
          stance: supports
          locator: CBDB:636603
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636603）
          source: &a1
            id: s_n9CB8J2n7HuDGbtCJw4Kup
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣鳳（CBDB 636603）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636603&o=json
            external_identifier: CBDB:636603
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.046Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uEfd7e7aZALMEzTwbZJPYn
        subject_person_id: p_KrArxX9ki33UHh9o2Bv6PG
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
        - id: cs_QQXpmk5CEvghSbScyGqeDm
          claim_id: c_uEfd7e7aZALMEzTwbZJPYn
          source_id: s_n9CB8J2n7HuDGbtCJw4Kup
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

# 王嗣鳳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嗣鳳 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嗣鳳（CBDB 636603）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636603&o=json)
