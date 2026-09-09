---
schema: wang-person/v1
id: p_RweDv9yPN6XuwHqWrdD4TG
status: active
merged_into: null
display_name: 王光庭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K9Gnqj8J4MCVa2Bw9L1D2N
        subject_person_id: p_RweDv9yPN6XuwHqWrdD4TG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光庭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A4SXjG7GLNPUPrSHCgZShv
          claim_id: c_K9Gnqj8J4MCVa2Bw9L1D2N
          source_id: s_eF55FKAxkaKXWAjMRMLnEm
          stance: supports
          locator: CBDB:445682
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（445682）
          source: &a1
            id: s_eF55FKAxkaKXWAjMRMLnEm
            source_type: api_record
            title: 中国历代人物传记资料库：王光庭（CBDB 445682）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445682&o=json
            external_identifier: CBDB:445682
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.236Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zFZ3Je6dASncmFKWw4gcRn
        subject_person_id: p_RweDv9yPN6XuwHqWrdD4TG
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
        - id: cs_DdGCJGyHyX3SEjrgtR9hbv
          claim_id: c_zFZ3Je6dASncmFKWw4gcRn
          source_id: s_eF55FKAxkaKXWAjMRMLnEm
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

# 王光庭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光庭 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光庭（CBDB 445682）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445682&o=json)
