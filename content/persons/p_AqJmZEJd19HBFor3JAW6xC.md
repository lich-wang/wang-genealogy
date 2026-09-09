---
schema: wang-person/v1
id: p_AqJmZEJd19HBFor3JAW6xC
status: active
merged_into: null
display_name: 王汝謙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dmvzKHA47HpFQ1gqgHGGeR
        subject_person_id: p_AqJmZEJd19HBFor3JAW6xC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XYheXrVcz92cNwHmEQ26QA
          claim_id: c_dmvzKHA47HpFQ1gqgHGGeR
          source_id: s_2AzFdMMaNVKE8ZcG3aeEg5
          stance: supports
          locator: CBDB:71621
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71621）
          source: &a1
            id: s_2AzFdMMaNVKE8ZcG3aeEg5
            source_type: api_record
            title: 中国历代人物传记资料库：王汝謙（CBDB 71621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71621&o=json
            external_identifier: CBDB:71621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.789Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_qeYxyQypCYAZM9F88aHH9w
        subject_person_id: p_AqJmZEJd19HBFor3JAW6xC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1777年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MCY6wGEFtrE3ZnPDYtktVU
          claim_id: c_qeYxyQypCYAZM9F88aHH9w
          source_id: s_2AzFdMMaNVKE8ZcG3aeEg5
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
        id: c_SJFmJA32oQboUWZSmd9NBn
        subject_person_id: p_AqJmZEJd19HBFor3JAW6xC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1855年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CbAEt6M7ZwNHzdw5u7Qttn
          claim_id: c_SJFmJA32oQboUWZSmd9NBn
          source_id: s_2AzFdMMaNVKE8ZcG3aeEg5
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
        id: c_Guu7HZqi4Dg1aQ91fmPKG7
        subject_person_id: p_AqJmZEJd19HBFor3JAW6xC
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
        - id: cs_UBVSCCQmFb9yZXFZMJi6hd
          claim_id: c_Guu7HZqi4Dg1aQ91fmPKG7
          source_id: s_2AzFdMMaNVKE8ZcG3aeEg5
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

# 王汝謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝謙 | accepted |
| birth.date | 1777年 | accepted |
| death.date | 1855年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝謙（CBDB 71621）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71621&o=json)
