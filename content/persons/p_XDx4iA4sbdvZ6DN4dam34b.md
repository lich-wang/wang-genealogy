---
schema: wang-person/v1
id: p_XDx4iA4sbdvZ6DN4dam34b
status: active
merged_into: null
display_name: 王璞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_toXKS781X3WGi6cGaK9DqL
        subject_person_id: p_XDx4iA4sbdvZ6DN4dam34b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oE9CQ4UyU2YsgPXZ8fFaMF
          claim_id: c_toXKS781X3WGi6cGaK9DqL
          source_id: s_TuR44LaLt7HSovLXGcHhsB
          stance: supports
          locator: CBDB:295406
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（295406）
          source: &a1
            id: s_TuR44LaLt7HSovLXGcHhsB
            source_type: api_record
            title: 中国历代人物传记资料库：王璞（CBDB 295406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295406&o=json
            external_identifier: CBDB:295406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.499Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_83Z8BCcsUrUDUQBKCzx11F
        subject_person_id: p_XDx4iA4sbdvZ6DN4dam34b
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
        - id: cs_p48CFNkk3mkzeNctps7jiL
          claim_id: c_83Z8BCcsUrUDUQBKCzx11F
          source_id: s_TuR44LaLt7HSovLXGcHhsB
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

# 王璞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璞 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璞（CBDB 295406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295406&o=json)
