---
schema: wang-person/v1
id: p_te2NVHDwapdUPsXyRWk7zo
status: active
merged_into: null
display_name: 王鼎榮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_n8mDfgE6g4tuQD4G22Rvuc
        subject_person_id: p_te2NVHDwapdUPsXyRWk7zo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QtPTBeKa9CjSEAAfG6hAFa
          claim_id: c_n8mDfgE6g4tuQD4G22Rvuc
          source_id: s_xMWTDQDWtPsTR1kKJ7Z4DM
          stance: supports
          locator: CBDB:641047
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（641047）
          source: &a1
            id: s_xMWTDQDWtPsTR1kKJ7Z4DM
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎榮（CBDB 641047）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641047&o=json
            external_identifier: CBDB:641047
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.450Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xJwtzqVngzxEo4F9HB2PMM
        subject_person_id: p_te2NVHDwapdUPsXyRWk7zo
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
        - id: cs_R7169xyk3LMNP734TBw88T
          claim_id: c_xJwtzqVngzxEo4F9HB2PMM
          source_id: s_xMWTDQDWtPsTR1kKJ7Z4DM
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

# 王鼎榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎榮 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鼎榮（CBDB 641047）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641047&o=json)
