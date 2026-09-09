---
schema: wang-person/v1
id: p_He1k8WZXHeWLCD3ATXk4NZ
status: active
merged_into: null
display_name: 王朝珍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sN7sEdurUB3BXGRNEf57p4
        subject_person_id: p_He1k8WZXHeWLCD3ATXk4NZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝珍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_geMxyYimqJMhS6fbkqjkBz
          claim_id: c_sN7sEdurUB3BXGRNEf57p4
          source_id: s_wFkgEoh2FVbvHfWSRbEgpB
          stance: supports
          locator: CBDB:638632
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638632）
          source: &a1
            id: s_wFkgEoh2FVbvHfWSRbEgpB
            source_type: api_record
            title: 中国历代人物传记资料库：王朝珍（CBDB 638632）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638632&o=json
            external_identifier: CBDB:638632
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.701Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oqVq3jSuETZGjbQmy4kZwe
        subject_person_id: p_He1k8WZXHeWLCD3ATXk4NZ
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
        - id: cs_fLkV32KKNrP3zaYA3hBsuY
          claim_id: c_oqVq3jSuETZGjbQmy4kZwe
          source_id: s_wFkgEoh2FVbvHfWSRbEgpB
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

# 王朝珍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝珍 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朝珍（CBDB 638632）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638632&o=json)
