---
schema: wang-person/v1
id: p_nEY7YVsQ3ffqSdnwf7vU93
status: active
merged_into: null
display_name: 王伊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dD8WnuymF8W7Pgqut2fa2y
        subject_person_id: p_nEY7YVsQ3ffqSdnwf7vU93
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4P2BDrLzv6U4h9H5j7RB6Q
          claim_id: c_dD8WnuymF8W7Pgqut2fa2y
          source_id: s_UF6XajTKBw2dr3CWqY1yqb
          stance: supports
          locator: CBDB:71061
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71061）
          source: &a1
            id: s_UF6XajTKBw2dr3CWqY1yqb
            source_type: api_record
            title: 中国历代人物传记资料库：王伊（CBDB 71061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71061&o=json
            external_identifier: CBDB:71061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.327Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1DmJnfpW8JYeYAHpr6aJB3
        subject_person_id: p_nEY7YVsQ3ffqSdnwf7vU93
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1838年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_93CZxECmd2NhWzZ8DhLKRZ
          claim_id: c_1DmJnfpW8JYeYAHpr6aJB3
          source_id: s_UF6XajTKBw2dr3CWqY1yqb
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
        id: c_JpvzMJNBHnuPFLpVp2fRjW
        subject_person_id: p_nEY7YVsQ3ffqSdnwf7vU93
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1908年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BCExgg1tFF2Hbt4gYnuDX8
          claim_id: c_JpvzMJNBHnuPFLpVp2fRjW
          source_id: s_UF6XajTKBw2dr3CWqY1yqb
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
        id: c_EbVJvjxK7hFtW36kfm1m5w
        subject_person_id: p_nEY7YVsQ3ffqSdnwf7vU93
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伊（1838年—1908年），清人物。籍贯常熟。（中国历代人物传记资料库 CBDB 71061）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_muFNG3JucEt81WwMa5TfMl
          claim_id: c_EbVJvjxK7hFtW36kfm1m5w
          source_id: s_UF6XajTKBw2dr3CWqY1yqb
          stance: supports
          locator: CBDB:71061
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
  descendants: []
  other: []
---

# 王伊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伊 | accepted |
| birth.date | 1838年 | accepted |
| death.date | 1908年 | accepted |
| bio.summary | 王伊（1838年—1908年），清人物。籍贯常熟。（中国历代人物传记资料库 CBDB 71061） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王伊（CBDB 71061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71061&o=json)
