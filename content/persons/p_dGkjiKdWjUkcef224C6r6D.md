---
schema: wang-person/v1
id: p_dGkjiKdWjUkcef224C6r6D
status: active
merged_into: null
display_name: 王泰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1sEv9gNC8SWVfLe9DNMu4N
        subject_person_id: p_dGkjiKdWjUkcef224C6r6D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cJjKmNZdFZ294GbKcjS9Yg
          claim_id: c_1sEv9gNC8SWVfLe9DNMu4N
          source_id: s_VNQKyEN1JvKSVGa3FWFoiJ
          stance: supports
          locator: CBDB:142955
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142955）
          source: &a1
            id: s_VNQKyEN1JvKSVGa3FWFoiJ
            source_type: api_record
            title: 中国历代人物传记资料库：王泰（CBDB 142955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142955&o=json
            external_identifier: CBDB:142955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.604Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NVEXtYeRHRA7GEGFSFKUgp
        subject_person_id: p_dGkjiKdWjUkcef224C6r6D
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 668年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WaQpjmkRXKYVGsHzWJXkZK
          claim_id: c_NVEXtYeRHRA7GEGFSFKUgp
          source_id: s_VNQKyEN1JvKSVGa3FWFoiJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_PLFPbbBNguhrXsjCjwy9nJ
        subject_person_id: p_dGkjiKdWjUkcef224C6r6D
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 742年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9uGAvDB5Wtad7w9hxv6J8w
          claim_id: c_PLFPbbBNguhrXsjCjwy9nJ
          source_id: s_VNQKyEN1JvKSVGa3FWFoiJ
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
        id: c_HUXfY2j2fxRVFAMiSdJ5g5
        subject_person_id: p_dGkjiKdWjUkcef224C6r6D
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
        - id: cs_5h8vrEkoXCaQ2fMsDDggaY
          claim_id: c_HUXfY2j2fxRVFAMiSdJ5g5
          source_id: s_VNQKyEN1JvKSVGa3FWFoiJ
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

# 王泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王泰 | accepted |
| birth.date | 668年 | accepted |
| death.date | 742年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王泰（CBDB 142955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142955&o=json)
