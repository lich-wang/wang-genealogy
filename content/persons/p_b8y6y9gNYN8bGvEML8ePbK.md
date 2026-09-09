---
schema: wang-person/v1
id: p_b8y6y9gNYN8bGvEML8ePbK
status: active
merged_into: null
display_name: 王重明
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sitC93K67VwPKDNyC5up16
        subject_person_id: p_b8y6y9gNYN8bGvEML8ePbK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王重明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xU1i9jvgdpGy8cMhegScqr
          claim_id: c_sitC93K67VwPKDNyC5up16
          source_id: s_zRFhN5GjEDUVqAxP4jD6t5
          stance: supports
          locator: CBDB:175687
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175687）
          source: &a1
            id: s_zRFhN5GjEDUVqAxP4jD6t5
            source_type: api_record
            title: 中国历代人物传记资料库：王重明（CBDB 175687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175687&o=json
            external_identifier: CBDB:175687
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.056Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_DJR6DWMEqTAuZNf4u9fKfz
        subject_person_id: p_b8y6y9gNYN8bGvEML8ePbK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 774年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WAzK8pvAGmXoKwWKQAY9Yk
          claim_id: c_DJR6DWMEqTAuZNf4u9fKfz
          source_id: s_zRFhN5GjEDUVqAxP4jD6t5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vFeJeRrwGiDEyXsPhvenNK
        subject_person_id: p_b8y6y9gNYN8bGvEML8ePbK
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
        - id: cs_kjPz3bUwZxCKNVrFSnKFeW
          claim_id: c_vFeJeRrwGiDEyXsPhvenNK
          source_id: s_zRFhN5GjEDUVqAxP4jD6t5
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

# 王重明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王重明 | accepted |
| death.date | 774年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王重明（CBDB 175687）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175687&o=json)
