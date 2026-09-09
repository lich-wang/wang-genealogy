---
schema: wang-person/v1
id: p_Y54F6Ao9f4wuyn368uwcje
status: active
merged_into: null
display_name: 王文徵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F4XJFNnr8CJ75qzDG4q16n
        subject_person_id: p_Y54F6Ao9f4wuyn368uwcje
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文徵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gkdi5FxW7AfCojH99qbuQs
          claim_id: c_F4XJFNnr8CJ75qzDG4q16n
          source_id: s_3xPg7oGpE5764ewCmh9Who
          stance: supports
          locator: CBDB:341613
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341613）
          source: &a1
            id: s_3xPg7oGpE5764ewCmh9Who
            source_type: api_record
            title: 中国历代人物传记资料库：王文徵（CBDB 341613）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341613&o=json
            external_identifier: CBDB:341613
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.613Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Tw3ftpVupc1epYnJ4S59k1
        subject_person_id: p_Y54F6Ao9f4wuyn368uwcje
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
        - id: cs_n36Dvs9FpHQExcf4yG2rRh
          claim_id: c_Tw3ftpVupc1epYnJ4S59k1
          source_id: s_3xPg7oGpE5764ewCmh9Who
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

# 王文徵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文徵 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文徵（CBDB 341613）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341613&o=json)
