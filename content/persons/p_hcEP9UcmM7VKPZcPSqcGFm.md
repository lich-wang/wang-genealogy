---
schema: wang-person/v1
id: p_hcEP9UcmM7VKPZcPSqcGFm
status: active
merged_into: null
display_name: 王新
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uCJRWaRRjKcjmUYUSE6eck
        subject_person_id: p_hcEP9UcmM7VKPZcPSqcGFm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王新
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_joZ8C1Ny4st1hS8DRnXjwQ
          claim_id: c_uCJRWaRRjKcjmUYUSE6eck
          source_id: s_GeipakJqXbRTkcPyJyHTgb
          stance: supports
          locator: CBDB:318791
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318791）
          source: &a1
            id: s_GeipakJqXbRTkcPyJyHTgb
            source_type: api_record
            title: 中国历代人物传记资料库：王新（CBDB 318791）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318791&o=json
            external_identifier: CBDB:318791
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.024Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X2BpkAh3sz1VCXMf942pQk
        subject_person_id: p_hcEP9UcmM7VKPZcPSqcGFm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王新，明人物。嘉靖三十二年進士。（中国历代人物传记资料库 CBDB 318791）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Yuu1PQcdQ7nDSZKqLIEDWB
          claim_id: c_X2BpkAh3sz1VCXMf942pQk
          source_id: s_GeipakJqXbRTkcPyJyHTgb
          stance: supports
          locator: CBDB:318791
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
  descendants:
    - claim:
        id: c_Ub81b4Ujcziy61HExabWgv
        subject_person_id: p_hcEP9UcmM7VKPZcPSqcGFm
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BXF3dbPMGdrpkj3BGNYpWy
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V8f4aHECDdYa_I259o2oDE
          claim_id: c_Ub81b4Ujcziy61HExabWgv
          source_id: s_GeipakJqXbRTkcPyJyHTgb
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百七十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BXF3dbPMGdrpkj3BGNYpWy
        status: active
        display_name: 王文政
        merged_into_person_id: null
  other: []
---

# 王新

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王新 | accepted |
| bio.summary | 王新，明人物。嘉靖三十二年進士。（中国历代人物传记资料库 CBDB 318791） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_BXF3dbPMGdrpkj3BGNYpWy | 王文政 | accepted |

## 外部来源

- [中国历代人物传记资料库：王新（CBDB 318791）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318791&o=json)
