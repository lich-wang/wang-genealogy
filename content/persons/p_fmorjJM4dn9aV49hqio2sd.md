---
schema: wang-person/v1
id: p_fmorjJM4dn9aV49hqio2sd
status: active
merged_into: null
display_name: 王康恤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NsupaPDECXDGFmMM4H7LJ6
        subject_person_id: p_fmorjJM4dn9aV49hqio2sd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王康恤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bDLqCRg9hp4ZGrqWXdTsFw
          claim_id: c_NsupaPDECXDGFmMM4H7LJ6
          source_id: s_GMWLQ8acudG7m4RqenoW3s
          stance: supports
          locator: CBDB:578021
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（578021）
          source: &a1
            id: s_GMWLQ8acudG7m4RqenoW3s
            source_type: api_record
            title: 中国历代人物传记资料库：王康恤（CBDB 578021）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578021&o=json
            external_identifier: CBDB:578021
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.727Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_m7ELmMMEuEsKxRfJaNeGk7
        subject_person_id: p_fmorjJM4dn9aV49hqio2sd
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1894年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2mGh98Mv5GDEiqvTHBdtrR
          claim_id: c_m7ELmMMEuEsKxRfJaNeGk7
          source_id: s_GMWLQ8acudG7m4RqenoW3s
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
        id: c_BCj8C683YypdWeR8tmxQmC
        subject_person_id: p_fmorjJM4dn9aV49hqio2sd
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
        - id: cs_VhALRxQCnBLoYjraGnyH2F
          claim_id: c_BCj8C683YypdWeR8tmxQmC
          source_id: s_GMWLQ8acudG7m4RqenoW3s
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

# 王康恤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王康恤 | accepted |
| birth.date | 1894年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王康恤（CBDB 578021）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578021&o=json)
