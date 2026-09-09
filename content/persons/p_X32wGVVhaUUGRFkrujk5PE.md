---
schema: wang-person/v1
id: p_X32wGVVhaUUGRFkrujk5PE
status: active
merged_into: null
display_name: 王張榮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Xaeom4B8xLbXTDF8NKfW4d
        subject_person_id: p_X32wGVVhaUUGRFkrujk5PE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王張榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_692sSYDeMp6D2XEqLLDzt2
          claim_id: c_Xaeom4B8xLbXTDF8NKfW4d
          source_id: s_T3ca4cCF3UE1Xs7GZNk8ov
          stance: supports
          locator: CBDB:690955
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（690955）
          source: &a1
            id: s_T3ca4cCF3UE1Xs7GZNk8ov
            source_type: api_record
            title: 中国历代人物传记资料库：王張榮（CBDB 690955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690955&o=json
            external_identifier: CBDB:690955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.487Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wyFsQK9ahHrue5qXi23Asz
        subject_person_id: p_X32wGVVhaUUGRFkrujk5PE
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
        - id: cs_JFXCFVfSwvupKxwDbG5hAq
          claim_id: c_wyFsQK9ahHrue5qXi23Asz
          source_id: s_T3ca4cCF3UE1Xs7GZNk8ov
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

# 王張榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王張榮 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王張榮（CBDB 690955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690955&o=json)
