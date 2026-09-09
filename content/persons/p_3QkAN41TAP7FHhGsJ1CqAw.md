---
schema: wang-person/v1
id: p_3QkAN41TAP7FHhGsJ1CqAw
status: active
merged_into: null
display_name: 王銳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5sSKdRkkgDeuXwrHqPPZug
        subject_person_id: p_3QkAN41TAP7FHhGsJ1CqAw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZAXd6w59J4BRk1UicaN3n5
          claim_id: c_5sSKdRkkgDeuXwrHqPPZug
          source_id: s_qDZPK14io8kM6SMMJkJPTd
          stance: supports
          locator: CBDB:207864
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207864）
          source: &a1
            id: s_qDZPK14io8kM6SMMJkJPTd
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 207864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207864&o=json
            external_identifier: CBDB:207864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.933Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_dCvQS43uc42GSMh514KkLT
        subject_person_id: p_3QkAN41TAP7FHhGsJ1CqAw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1413年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XvS7ajaNX2cazHuJKP4ugY
          claim_id: c_dCvQS43uc42GSMh514KkLT
          source_id: s_qDZPK14io8kM6SMMJkJPTd
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
        id: c_WCXGRCsYCuS85MWmRA5CC3
        subject_person_id: p_3QkAN41TAP7FHhGsJ1CqAw
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
        - id: cs_SBuJxqPh1CB7WJE4ahTkj8
          claim_id: c_WCXGRCsYCuS85MWmRA5CC3
          source_id: s_qDZPK14io8kM6SMMJkJPTd
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

# 王銳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銳 | accepted |
| birth.date | 1413年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王銳（CBDB 207864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207864&o=json)
