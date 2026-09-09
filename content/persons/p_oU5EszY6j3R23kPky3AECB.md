---
schema: wang-person/v1
id: p_oU5EszY6j3R23kPky3AECB
status: active
merged_into: null
display_name: 王汝弼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EnboDaKEPgJz33QQVMXCTK
        subject_person_id: p_oU5EszY6j3R23kPky3AECB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8SYSSb5PuhS2nqCZPjsQMh
          claim_id: c_EnboDaKEPgJz33QQVMXCTK
          source_id: s_wt41Xz68ZdGzdGrCBoHYK6
          stance: supports
          locator: CBDB:71622
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71622）
          source: &a1
            id: s_wt41Xz68ZdGzdGrCBoHYK6
            source_type: api_record
            title: 中国历代人物传记资料库：王汝弼（CBDB 71622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71622&o=json
            external_identifier: CBDB:71622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.790Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kArHgZvcMMa271xWLX3ZA5
        subject_person_id: p_oU5EszY6j3R23kPky3AECB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1797年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EgUkHHNos4cNmCDQ4Mbg7i
          claim_id: c_kArHgZvcMMa271xWLX3ZA5
          source_id: s_wt41Xz68ZdGzdGrCBoHYK6
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
        id: c_dBonb1gYdXDu9qdKRfGU2h
        subject_person_id: p_oU5EszY6j3R23kPky3AECB
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
        - id: cs_b5e9HKJVYxRE6Z9qHw3YKw
          claim_id: c_dBonb1gYdXDu9qdKRfGU2h
          source_id: s_wt41Xz68ZdGzdGrCBoHYK6
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

# 王汝弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝弼 | accepted |
| birth.date | 1797年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝弼（CBDB 71622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71622&o=json)
