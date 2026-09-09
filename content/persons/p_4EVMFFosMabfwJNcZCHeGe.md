---
schema: wang-person/v1
id: p_4EVMFFosMabfwJNcZCHeGe
status: active
merged_into: null
display_name: 王錥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GCDMQPJmhoYpMSaRdZyD1V
        subject_person_id: p_4EVMFFosMabfwJNcZCHeGe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8SP2qnLA3uusE5cfRxaC5G
          claim_id: c_GCDMQPJmhoYpMSaRdZyD1V
          source_id: s_e4TCtkKJoPDdgnujj83tXV
          stance: supports
          locator: CBDB:445672
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（445672）
          source: &a1
            id: s_e4TCtkKJoPDdgnujj83tXV
            source_type: api_record
            title: 中国历代人物传记资料库：王錥（CBDB 445672）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445672&o=json
            external_identifier: CBDB:445672
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.231Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bN9mcx3b9t7HU8spydcvT5
        subject_person_id: p_4EVMFFosMabfwJNcZCHeGe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TKiFS9PiYW69KKaRZZ8aXP
          claim_id: c_bN9mcx3b9t7HU8spydcvT5
          source_id: s_e4TCtkKJoPDdgnujj83tXV
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

# 王錥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錥 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錥（CBDB 445672）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445672&o=json)
