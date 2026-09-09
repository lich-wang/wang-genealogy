---
schema: wang-person/v1
id: p_C78gN9qfCLA1MBQ5bec93Y
status: active
merged_into: null
display_name: 王思恆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GJrEBBfTdEEEKmPWWg8YxG
        subject_person_id: p_C78gN9qfCLA1MBQ5bec93Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思恆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UwjZSwHeGM3RAnX3aZ4GPV
          claim_id: c_GJrEBBfTdEEEKmPWWg8YxG
          source_id: s_qzDqQLkJyErCdBymqtiK8R
          stance: supports
          locator: CBDB:700937
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（700937）
          source: &a1
            id: s_qzDqQLkJyErCdBymqtiK8R
            source_type: api_record
            title: 中国历代人物传记资料库：王思恆（CBDB 700937）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700937&o=json
            external_identifier: CBDB:700937
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.601Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HnfZUxL45ADDqhjfedDHAo
        subject_person_id: p_C78gN9qfCLA1MBQ5bec93Y
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
        - id: cs_PRVernGMAdgGetF7xY8LCG
          claim_id: c_HnfZUxL45ADDqhjfedDHAo
          source_id: s_qzDqQLkJyErCdBymqtiK8R
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

# 王思恆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思恆 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思恆（CBDB 700937）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700937&o=json)
