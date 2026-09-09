---
schema: wang-person/v1
id: p_TCMQLv9ikq6nSbfBuECU2Z
status: active
merged_into: null
display_name: 王振謨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8StSp3C1CPyMD4z4BLW7wG
        subject_person_id: p_TCMQLv9ikq6nSbfBuECU2Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振謨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2qGkZscE33x1wp3AU5XeiZ
          claim_id: c_8StSp3C1CPyMD4z4BLW7wG
          source_id: s_5XChh7GztqQXGCp22qjdZH
          stance: supports
          locator: CBDB:638131
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638131）
          source: &a1
            id: s_5XChh7GztqQXGCp22qjdZH
            source_type: api_record
            title: 中国历代人物传记资料库：王振謨（CBDB 638131）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638131&o=json
            external_identifier: CBDB:638131
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.537Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JJ7DDNQYHbfXo39XLCk1rH
        subject_person_id: p_TCMQLv9ikq6nSbfBuECU2Z
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
        - id: cs_fFr4c53ENonegw6j7RDR8y
          claim_id: c_JJ7DDNQYHbfXo39XLCk1rH
          source_id: s_5XChh7GztqQXGCp22qjdZH
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

# 王振謨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王振謨 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王振謨（CBDB 638131）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638131&o=json)
