---
schema: wang-person/v1
id: p_ZEm4iTZfJiMViaz2zCrBbF
status: active
merged_into: null
display_name: 王若金
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pciMmuyj6DJWVPARPg8QLA
        subject_person_id: p_ZEm4iTZfJiMViaz2zCrBbF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王若金
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cpKECjCVQ2iy1RQi757mWJ
          claim_id: c_pciMmuyj6DJWVPARPg8QLA
          source_id: s_iMNpoVnYJck4qBKMSPdwRU
          stance: supports
          locator: CBDB:71732
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71732）
          source: &a1
            id: s_iMNpoVnYJck4qBKMSPdwRU
            source_type: api_record
            title: 中国历代人物传记资料库：王若金（CBDB 71732）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71732&o=json
            external_identifier: CBDB:71732
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.850Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_hU5BK7Esdxt3WMYLLFXQC7
        subject_person_id: p_ZEm4iTZfJiMViaz2zCrBbF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1806年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_95ZhC1pGYTJXndrysx6DBZ
          claim_id: c_hU5BK7Esdxt3WMYLLFXQC7
          source_id: s_iMNpoVnYJck4qBKMSPdwRU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TSNSx8F6BudBorXSt7geqB
        subject_person_id: p_ZEm4iTZfJiMViaz2zCrBbF
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
        - id: cs_RhYzXPcRy38bZQ4MyQ5kjX
          claim_id: c_TSNSx8F6BudBorXSt7geqB
          source_id: s_iMNpoVnYJck4qBKMSPdwRU
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

# 王若金

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王若金 | accepted |
| birth.date | 1806年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王若金（CBDB 71732）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71732&o=json)
