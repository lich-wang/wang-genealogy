---
schema: wang-person/v1
id: p_9SUuW2WkQibUPJTWf3Qh46
status: active
merged_into: null
display_name: 王沼
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oBozNpFxTEtB9Htpmw6rhX
        subject_person_id: p_9SUuW2WkQibUPJTWf3Qh46
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nDLrma9XA6XabzGsLVqSZ7
          claim_id: c_oBozNpFxTEtB9Htpmw6rhX
          source_id: s_3LM5i52T79E6Ji1EBA13QG
          stance: supports
          locator: CBDB:175891
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175891）
          source: &a1
            id: s_3LM5i52T79E6Ji1EBA13QG
            source_type: api_record
            title: 中国历代人物传记资料库：王沼（CBDB 175891）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175891&o=json
            external_identifier: CBDB:175891
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.181Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_7E7XBv3HCD4UFvqn6k6DVN
        subject_person_id: p_9SUuW2WkQibUPJTWf3Qh46
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 835年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hYWzYWrXEKG6qgUX8KA9zR
          claim_id: c_7E7XBv3HCD4UFvqn6k6DVN
          source_id: s_3LM5i52T79E6Ji1EBA13QG
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
        id: c_WaW1XrX7owRXqrYvSMK3DQ
        subject_person_id: p_9SUuW2WkQibUPJTWf3Qh46
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
        - id: cs_LGHsHTyw1hP47MpmYmYJek
          claim_id: c_WaW1XrX7owRXqrYvSMK3DQ
          source_id: s_3LM5i52T79E6Ji1EBA13QG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_h91AFT0kGS9eSuOY5h55w0
        subject_person_id: p_E8jSpcxrGiAGkwV96Q4xB8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9SUuW2WkQibUPJTWf3Qh46
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K0_biLPUxXLhy-4qAN-t0U
          claim_id: c_h91AFT0kGS9eSuOY5h55w0
          source_id: s_3LM5i52T79E6Ji1EBA13QG
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_E8jSpcxrGiAGkwV96Q4xB8
        status: active
        display_name: 王晃
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王沼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王沼 | accepted |
| death.date | 835年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_E8jSpcxrGiAGkwV96Q4xB8 | 王晃 | accepted |

## 外部来源

- [中国历代人物传记资料库：王沼（CBDB 175891）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175891&o=json)
