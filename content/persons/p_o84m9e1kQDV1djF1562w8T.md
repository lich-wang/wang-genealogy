---
schema: wang-person/v1
id: p_o84m9e1kQDV1djF1562w8T
status: active
merged_into: null
display_name: 王璽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qtGuNGM9Q95ayHjH11ZJ6N
        subject_person_id: p_o84m9e1kQDV1djF1562w8T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xMejH6r5vBmHgNqJXWFEVX
          claim_id: c_qtGuNGM9Q95ayHjH11ZJ6N
          source_id: s_mRDW9EyYHrm3gzLzoUVdcS
          stance: supports
          locator: CBDB:126871
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126871）
          source: &a1
            id: s_mRDW9EyYHrm3gzLzoUVdcS
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 126871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126871&o=json
            external_identifier: CBDB:126871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.274Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bxMHV1v4M3XLD23yU1qL7A
        subject_person_id: p_o84m9e1kQDV1djF1562w8T
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
        - id: cs_o5vqsjUdXfy45qCXNBq5nb
          claim_id: c_bxMHV1v4M3XLD23yU1qL7A
          source_id: s_mRDW9EyYHrm3gzLzoUVdcS
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

# 王璽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璽 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璽（CBDB 126871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126871&o=json)
