---
schema: wang-person/v1
id: p_MmPzYffxoPPMYZRX3Lh3sE
status: active
merged_into: null
display_name: 王載
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aoQ9dRSwaKFaLTWUWcPUcg
        subject_person_id: p_MmPzYffxoPPMYZRX3Lh3sE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王載
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cV6sJ1hRD4YacZ89J21Jjh
          claim_id: c_aoQ9dRSwaKFaLTWUWcPUcg
          source_id: s_WKrGPG6s3CNZ1qfGwCx37F
          stance: supports
          locator: CBDB:169179
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（169179）
          source: &a1
            id: s_WKrGPG6s3CNZ1qfGwCx37F
            source_type: api_record
            title: 中国历代人物传记资料库：王載（CBDB 169179）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169179&o=json
            external_identifier: CBDB:169179
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.012Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_AAhgoZVamvu4aKVqckJ3S5
        subject_person_id: p_MmPzYffxoPPMYZRX3Lh3sE
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 817年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q3EYtGBS369YHvgAskuMi6
          claim_id: c_AAhgoZVamvu4aKVqckJ3S5
          source_id: s_WKrGPG6s3CNZ1qfGwCx37F
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
        id: c_UV9XbXz9b9CCgRrVSX8thc
        subject_person_id: p_MmPzYffxoPPMYZRX3Lh3sE
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
        - id: cs_UJkhFdbvMywUBWQds7wicC
          claim_id: c_UV9XbXz9b9CCgRrVSX8thc
          source_id: s_WKrGPG6s3CNZ1qfGwCx37F
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

# 王載

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王載 | accepted |
| death.date | 817年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王載（CBDB 169179）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169179&o=json)
